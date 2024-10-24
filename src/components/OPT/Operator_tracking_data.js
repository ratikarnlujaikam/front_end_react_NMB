import React, { Component } from "react";
import { key, server } from "../../constants";
import { httpClient } from "../../utils/HttpClient";
import Chart from "react-apexcharts";
import moment from "moment";
import Select from "react-select";
import Swal from "sweetalert2";
import { CSVLink } from "react-csv";
import ReactApexChart from "react-apexcharts";
import ApexCharts from "apexcharts";

class Operator_tracking_data extends Component {
  constructor(props) {
    super(props);

    //set state
    this.state = {
      shift: [],
      insType: [],
      report: [],
      QANumber: "",
      report2: [],
      options:  {},
      seriesY: [],
      Raw_Dat2: [],
      Raw_Dat: [],
      startDate: moment().format("yyyy-MM-DD"), //moment().add("days", -6).format("yyyy-MM-DD"),
      finishDate: moment().format("yyyy-MM-DD"), //moment().format("yyyy-MM-DD"),

      listshift: [],
      listInsType: [],

      optionSelected: null,
      isDisable: false,
    };
  }

  componentDidMount = async () => {
    await this.getModel();
    // await this.getInsType();
  };

  // report with select model,date,type
  doGetDataReport = async () => {
    const result = await httpClient.get(
      server.REPORTOPT_URL + "/" + this.state.startDate
    );

    let Line_No = [];

    for (let index = 0; index < result.data.resultGraph.length; index++) {
      const item = result.data.resultGraph[index];
      await Line_No.push(item.Line_No);
    }

    let SHIFT_A = result.data.SHIFT_A;
    let SHIFT_B = result.data.SHIFT_B;
    let SHIFT_C = result.data.SHIFT_C;
    let SHIFT_M = result.data.SHIFT_M;
    let SHIFT_N = result.data.SHIFT_N;
    let SHIFT_D = result.data.SHIFT_D;

    let rawData = result.data.listData;
    console.log(rawData);
    console.log(rawData.length);
    for (let i = 1; i < rawData.length; i++) {
      rawData[0].push(...rawData[i]);
    }
    this.setState({ Raw_Dat: rawData[0] });
    console.log(this.state.Raw_Dat);

    this.setState({
      report: result.data.result,
      Line_No,
      SHIFT_A,
      SHIFT_B,
      SHIFT_C,
      SHIFT_M,
      SHIFT_N,
      SHIFT_D,
      // series,

      isDisable: false,
    });

    await this.setState({
      // let yAxis6 = result.data.LAR;
      // let yInput = result.data.Input;
      // let yReject = result.data.Reject;
      seriesY: [

        {
          name: "SHIFT A",
          type: "column",
          data: SHIFT_A,
        },

        {
          name: "SHIFT B",
          type: "column",
          data: SHIFT_B,
        },
        {
          name: "SHIFT C",
          type: "column",
          data: SHIFT_C,
        },
        {
          name: "SHIFT D",
          type: "column",
          data: SHIFT_D,
        },
        {
          name: "SHIFT M",
          type: "column",
          data: SHIFT_M,
        },
        {
          name: "SHIFT N",
          type: "column",
          data: SHIFT_N,
        },
   
 
     
      ],
      options: {
        chart: {
          type: "column",
          height: 300,
          stacked: true,
          toolbar: {
            show: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        // stroke: {
        //   width: [1, 5],
        // },
        title: {
          text: "",
          align: "left",
          offsetX: 110,
        },
        // dataLabels: {
        //   enabled: true,
        //   enabledOnSeries: [0, 1],
        // },
        xaxis: {
          categories: Line_No,
        },
        yaxis: [
          {
            min: 0.0,
            max: 100.0,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: "#ff1a1a",
            },
            labels: {
              style: {
                colors: "#ff1a1a",
              },
            },
            title: {
              text: "Person",
              style: {
                color: "#ff1a1a",
              },
            },
            tooltip: {
              enabled: true,
            },
          },
        ],
        colors: ["#0079FF", "#00DFA2", "#ff1a1a", "#FF0060", "#E57C23", "#9376E0"],
        tooltip: {
          fixed: {
            enabled: true,
            position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
            offsetY: 30,
            offsetX: 60,
          },
        },
        legend: {
          horizontalAlign: "left",
          offsetX: 40,
        },
        legend: {
          position: "right",
          offsetY: 40,
        },
      },
    });
  };
  getModel = async () => {
    const array = await httpClient.get(server.SHIFTOPT_URL);
    const options = array.data.result.map((d) => ({
      label: d.shift,
    }));
    this.setState({ listshift: options });
  };

  renderReport = () => {
    if (this.state.report != null) {
      if (this.state.report.length > 0) {
        return this.state.report.map((item) => (
          <tr>
            <td>{item["Date"]}</td>
            <td>{item["Line_No"]}</td>
            <td>{item["MODEL"]}</td>
            <td>{item["Item_Name"]}</td>
            <td>{item["ItemNo"]}</td>
            <td align="RIGHT">
              {Number(item["SHIFT_A"]).toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </td>
            <td align="RIGHT">
              {Number(item["SHIFT_B"]).toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </td>
            <td align="RIGHT">
              {Number(item["SHIFT_C"]).toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </td>
            <td align="RIGHT">
              {Number(item["SHIFT_D"]).toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </td>
            <td align="RIGHT">
              {Number(item["SHIFT_M"]).toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </td>
            <td align="RIGHT">
              {Number(item["SHIFT_N"]).toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </td>
    
            <td align="RIGHT">
              {Number(item["Total"]).toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </td>
 
          </tr>
        ));
      }
    }
  };

  render() {
 
    return (
      
      <div className="content-wrapper">
        <div className="content" style={{ paddingTop: 70 }}>
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Daily operator tracking record</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="/Home">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Daily operator tracking record</li>
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
                    {/* //Select Critiria "Model" */}
                    {/* <div className="col-md-2">
                      <div className="form-group">
                        <div></div>
                        <label>Model group</label>
                        <Select
                          options={this.state.listshift}
                          onChange={async (e) => {
                            await this.setState({ shift: e.label });
                            // await this.getInsType();
                            // await this.setState({
                            //   insType: [{ label: "Select Type" }],
                            // });
                          }}
                          // type="text"
                          // className="form-control"
                          placeholder="Select Model"
                         
                        />
                      </div>
                    </div> */}

                    {/* //Select Critiria "Type" */}
                    {/* <div className="col-md-2">
                      <div className="form-group">
                        <label>Type</label>
                        <Select
                          options={this.state.listInsType}
                          value={this.state.insType[0]}
                          onChange={async (e) => {
                            await this.setState({ insType: [] });
                            this.state.insType.push({ label: e.label });
                          }}
                          // type="text"
                          // className="form-control"
                          placeholder="Select Type"
                        />
                      </div>
                    </div> */}

                    {/* //Select Start Date */}
                    <div className="col-md-2">
                      <div className="form-group">
                        <label>
                          By Daily Select From &nbsp;
                          {/* <a
                            class="fas fa-question-circle"
                            style={{ fontSize: 18, color: "Dodgerblue" }}
                            onClick={() => {
                              Swal.fire({
                                icon: "info",
                                title: "Day-to-Day Data",
                                text:
                                  "Day-to-Day data over the course of the selected date",
                              });
                            }}
                          ></a> */}
                        </label>
                        <input
                          value={this.state.startDate}
                          onChange={(e) => {
                            this.setState({ startDate: e.target.value });
                          }}
                          type="date"
                          className="form-control"
                          placeholder="Select Start Date"
                        />
                      </div>
                    </div>

                    {/* //Select Finish Date */}
                    {/* <div className="col-md-2">
                      <div className="form-group">
                        <label>To</label>
                        <input
                          value={this.state.finishDate}
                          onChange={(e) => {
                            this.setState({ finishDate: e.target.value });
                          }}
                          type="date"
                          className="form-control"
                          placeholder="Select Finish Date"
                        />
                      </div>
                    </div> */}

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
                              if (this.state.report[0].Date.length > 0) {
                                Swal.fire({
                                  icon: "success",
                                  title: "Success",
                                  text: "Data has been loaded successfully",
                                });
                              } else if (
                                this.state.report[0].Date.length == 0
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
                                title: "No production data",
                                text: "Please select other date",
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

                    <div className="col-md-3">
                      <CSVLink
                        data={this.state.Raw_Dat}
                        filename={"Daily operator record.csv"}
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
                  </div>
                </div>
              </div>
              <div class="content">
                <div class="container-fluid">
                  <div className="row">
                    <div className="col-12">
                      <div className="card card-primary card-outline">
                        {/* Chart Title */}
                        <div className="card-header">
                          <h3 className="card-title">
                          
                           
                          </h3>
                        </div>

                        {/* Insert  */}
                        <div className="row" style={{ width: "100%" }}>
                          <div style={{ width: "1%" }}></div>
                          <div
                            className="card card-warning"
                            style={{ width: "99%" }}
                          >
                            <div className="card-body">
                              <div className="row">
                                <div style={{ width: "100%" }}>
                                  <ReactApexChart
                                    options={this.state.options}
                                    series={this.state.seriesY}
                                    type="bar"
                                    height={400}
                                  />
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
              {/* Table*/}
              <div class="content">
                <div class="container-fluid">
                  <div className="card card-primary">
                    <div className="row">
                      <div className="col-12">
                        {/* /.card-header */}
                        <div
                          className="card-body table-responsive p-0"
                          style={{
                            height: 500,
                            zIndex: "3",
                            position: "relative",
                            zIndex: "0",
                          }}
                        >
                          <table className=" table  text-nowrap table-hover table-head-fixed">
                            <thead>
                              <tr Align="Center">
                                <th width="175">Date</th>
                                <th width="175">Line</th>
                                <th width="175">MODEL</th>
                                <th width="175">Item Name</th>
                                <th width="175">Item No</th>
                                <th width="175">SHIFT A</th>
                                <th width="175">SHIFT B</th>
                                <th width="175">SHIFT C</th>
                                <th width="175">SHIFT D</th>
                                <th width="175">SHIFT M</th>
                                <th width="175">SHIFT N</th>
                          
                                <th width="175">TOTAL</th>
                              </tr>
                            </thead>
                            <tbody>{this.renderReport()}</tbody>
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

export default Operator_tracking_data;
