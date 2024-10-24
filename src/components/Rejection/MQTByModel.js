import React, { Component } from "react";
import { key, server } from "../../constants";
import { httpClient } from "../../utils/HttpClient";
import Chart from "react-apexcharts";
import moment from "moment";
import Select from "react-select";
import Swal from "sweetalert2";
import { CSVLink } from "react-csv";
import ReactDOM from "react-dom";
import ReactApexChart from "react-apexcharts";
import ApexCharts from "apexcharts";

class MQTByModel extends Component {
  constructor(props) {
    super(props);

    //set state
    this.state = {
      year: [],
      Month: [],
      EMP: [],
      report: [],
      reportGraph: [],
      xAxis: [],
      yAxis1: [],
      seriesY: [],
      series2: [],
      seriesCleanroom: [],
      options: {},
      options2: {},
      chart: [],

      Raw_Dat: [],

      startDate: moment().format("yyyy-MM-DD"), //moment().add("days", -6).format("yyyy-MM-DD"),
      finishDate: moment().format("yyyy-MM-DD"), //moment().format("yyyy-MM-DD"),
      listyear: [],
      listMonth: [],
      listModel: [],
      listEMP: [],

      optionSelected: null,
      isDisable: false,
    };
  }

  componentDidMount = async () => {
    await this.getyear();
    await this.getMonth();
    await this.getEMP();


  };
  doGetDataReport = async () => {
    const result = await httpClient.get(
      server.MQTMODEL_URL +
      "/" +
      this.state.year +
      "/" +
      this.state.Month[0].label +
      "/" +
      this.state.EMP[0].label

    );

    let rawData = result.data.listRawData;
    console.log(rawData);
    console.log(rawData.length);
    for (let i = 1; i < rawData.length; i++) {
      rawData[0].push(...rawData[i]);
    }
    this.setState({ Raw_Dat: rawData[0] });
    console.log(this.state.Raw_Dat);

    this.setState({
      report: result.data.result,
      reportGraph: result.data.resultGraph,


      // series,

      isDisable: false,
    });

  };

  getyear = async () => {
    const array = await httpClient.get(server.MQTYEARMODEL_URL);
    const options = array.data.result.map((d) => ({
      label: d.year,
    }));
    this.setState({ listyear: options });
  };

  getMonth = async () => {
    const array = await httpClient.get(
      server.MQTMONTHMODEL_URL + "/" + this.state.year
    );
    const options = array.data.result.map((d) => ({
      label: d.Month,
    }));
    this.setState({ listMonth: options });
  };
  
  getEMP = async () => {
    const array = await httpClient.get(server.MQTEMP_URL);
    const options = array.data.result.map((d) => ({
      label: d.EmpNo,
    }));
    this.setState({ listEMP: options });
  };
  // getEMP = async () => {
  //   const array = await httpClient.get(
  //     server.MQTEMP_URL + "/" + this.state.Month+ "/" + this.state.year
  //   );
  //   const options = array.data.result.map((d) => ({
  //     label: d.EmpNo,
  //   }));
  //   this.setState({ listEMP: options });
  // };

  renderreport1 = () => {

    if (this.state.report != null) {
      if (this.state.report.length > 0) {
        return this.state.report.map((item) => (
          <tr Align="center">
            <td>{item["ModelName"]}</td>
            <td>{item["Line_No"]}</td>
            <td>{item["SupporterName"]}</td>
            <td align="Left">{item["ENEmpName"]}</td>
            <td align="RIGHT">{Number(item["Input"]).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
            <td align="RIGHT">{Number(item["Output"]).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
            <td align="RIGHT">{Number(item["Reject"]).toLocaleString(undefined, { maximumFractionDigits: 2 })}</td>
            <td>{item["LAR"]}</td>
            <td>{item["Reject_Percent"]}</td>


          </tr>
        ));
      }
    }
  };


  render() {
    console.log(this.state.year)
    console.log(this.state.Month)
    console.log(this.state.EMP)
    

    return (
      <div className="content-wrapper">
        <div className="content" style={{ paddingTop: 50 }}>
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Reject(%)By Supporter  </h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="/Home">Home</a>
                    </li>
                    <li className="breadcrumb-item active">
                      MQTByModel.js
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div class="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card card-primary card-outline">
                <div className="card-header">
                  <h3 className="card-title">
                    <label>Select Parameter</label>
                  </h3>
                </div>

                <div className="card-body">
                  <div className="row">
                    {/* //Select Critiria "Year" */}
                    <div className="col-md-2">
                      <div className="form-group">
                        <label>Year</label>
                        <Select
                          options={this.state.listyear}
                          onChange={async (e) => {
                            await this.setState({ year: e.label });
                            await this.getMonth();
                            await this.getEMP();
                            await this.setState({
                              Month: [{ label: "Select Month" }],
                            });
                            await this.setState({
                              EMP: [{ label: "Select EMP" }],
                            });
                            ;
                          }}

                          // type="text"
                          // className="form-control"
                          placeholder="Select year"
                        />
                      </div>
                    </div>
                    {/* //Select Critiria "Month" */}
                    <div className="col-md-2">
                      <div className="form-group">
                        <label>Month</label>
                        <Select
                          options={this.state.listMonth}
                          value={this.state.Month[0]}
                          onChange={async (e) => {
                            await this.setState({ Month: [] });
                            this.state.Month.push({ label: e.label });
                            

                          }}
                          // type="text"
                          // className="form-control"
                          placeholder="Select Month"
                        />
                      </div>
                    </div>
                    
                        {/* //Select Critiria "EMP" */}
                        <div className="col-md-2">
                      <div className="form-group">
                        <label>Emp no.</label>
                        <Select
                          options={this.state.listEMP}
                          value={this.state.EMP[0]}
                          onChange={async (e) => {
                            await this.setState({ EMP: [] });
                            this.state.EMP.push({ label: e.label });

                          }}
                          // type="text"
                          // className="form-control"
                          placeholder="Select EMP"
                        />
                      </div>
                    </div>
              


                    {/* Submit button */}
                    <div className="col-md-1">
                      <button
                        disabled={this.state.isDisable}
                        // type="button"
                        // className="btn btn-info btn-flat"
                        onClick={(e) => {
                          this.setState({ isDisable: true });
                          // this.doGetDataReport();
                          Swal.fire({
                            icon: "info",
                            title: "Loading Data",
                            timer: 60000,
                            allowOutsideClick: false,
                            didOpen: async () => {
                              Swal.showLoading();
                              await this.doGetDataReport();
                              Swal.close();
                            },
                          }).then(() => {
                            if (this.state.report.length > 0) {
                              if (this.state.report[0].SupporterName.length > 0) {
                                Swal.fire({
                                  icon: "success",
                                  title: "Success",
                                  text: "Data has been loaded successfully",
                                });
                              } else if (
                                this.state.report[0].SupporterName.length == 0
                              ) {
                                Swal.fire({
                                  icon: "error",
                                  title: "No production data",
                                  text: "Please select other date",
                                });
                              }
                            } else {
                              Swal.fire({
                                icon: "error",
                                title:
                                  "Data loading has encountered some error, please try again",
                              });
                            }
                          });
                        }}
                        type="submit"
                        className="btn btn-primary"
                        style={{ marginTop: 30 }}
                      >
                        Submit
                      </button>
                    </div>
                    <div className="col-md-1">
                      <CSVLink
                        data={this.state.Raw_Dat}
                        filename={"Reject_report.csv"}
                      >
                        <button
                          type="button"
                          className="btn btn-primary"
                          style={{ marginTop: 30 }}
                        >
                          Download
                        </button>
                      </CSVLink>
                    </div>
                    <div className="col-md-2">
                      <a style={{ marginTop: 30 }} href="/MQT" class="btn btn-primary" role="button" aria-pressed="true">Back</a>
                    </div>

                  </div>
                </div>
              </div>
              <div class="content">
                <div class="container-fluid">
                  <div className="card card-primary">
                    <div className="row">
                      <div className="col-12">

                        {/* /.card-header */}
                        <div
                          className="card-body table-responsive p-0"
                          style={{ height: 400 }}
                        >
                          <table className="table  text-nowrap table-hover">
                            <thead>
                              <tr align="center">

                                <th width="100">Model Name</th>
                                <th width="100">Line No.</th>
                                <th width="80">Emp No.</th>
                                <th width="100">Supporter Name</th>
                                <th width="70">Input(Lot)</th>
                                <th width="70">Output(Lot)</th>
                                <th width="70">Reject(Lot)</th>
                                <th width="70">LAR(%)</th>
                                <th width="70">Reject(%)</th>

                              </tr>
                            </thead>
                            <tbody>{this.renderreport1()}</tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MQTByModel;
