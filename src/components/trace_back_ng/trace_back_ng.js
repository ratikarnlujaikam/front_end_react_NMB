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
import { Bar } from "react-chartjs-2";

class trace_back_ng extends Component {
  constructor(props) {
    super(props);

    //set state
    this.state = {
      year: [],
      Table: [],
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
      Table: [],
      Line: [],
      Raw_Dat: [],

      startDate: moment().format("yyyy-MM-DD"), //moment().format("yyyy-MM-DD"),
      listTable: [],
      listLine: [],
      listModel: [],
      listCode: [],

      optionSelected: null,
      isDisable: false,
    };
  }

  componentDidMount = async () => {

    await this.getLine();
  };
  doGetDataReport = async () => {
    const result = await httpClient.get(
      server.NG_URL +
        "/" +
        this.state.Line[0].label +
        "/" +
        this.state.startDate
    );

    let rawData = result.data.listRawData;
    console.log(rawData);
    for (let i = 1; i < rawData.length; i++) {
      rawData[0].push(...rawData[i]);
    }
    this.setState({ Raw_Dat: rawData[0] });
    console.log(this.state.Raw_Dat);

    this.setState({
      report: result.data.result,
      isDisable: false,
    });
  };

  getLine = async () => {
    const array = await httpClient.get(
      server.NG_Line_URL 
    );
    const options = array.data.result.map((d) => ({
      label: d.Line,
    }));
    this.setState({ listLine: options });
  };

  renderReport = () => {
    if (this.state.report != null) {
      if (this.state.report.length > 0) {
        return this.state.report.map((item) => (
          <tr>
            <td>{item["Machine_no"]}</td>
            <td>{item["Date"]}</td>
            <td>{item["Time"]}</td>
            <td>{item["Operator"]}</td>
            <td>{item["Barcode"]}</td>
            <td>{item["Master_Judgment"]}</td>
            <td>{item["Set_Dim"]}</td>
            <td>{item["Set_Dim_A"]}</td>
            <td>{item["Set_Dim_B"]}</td>
            <td>{item["Set_Dim_C"]}</td>
            <td>{item["Ramp_to_Datum"]}</td>
            <td>{item["Contact_Probe_2"]}</td>
            <td>{item["Pivot_Height"]}</td>
            <td>{item["Parallelism"]}</td>
            <td>{item["TIR"]}</td>
            <td>{item["TIR_A"]}</td>
            <td>{item["TIR_B"]}</td>
            <td>{item["TIR_C"]}</td>
            <td>{item["FlyHeight"]}</td>
            <td>{item["Fly_Height_Max_Limit"]}</td>
            <td>{item["Fly_Height_Min_Limit"]}</td>
            <td>{item["Axial_Play"]}</td>
            <td>{item["Static_Dim"]}</td>
            <td>{item["Static_Dim_A"]}</td>
            <td>{item["Static_Dim_B"]}</td>
            <td>{item["Static_Dim_C"]}</td>
            <td>{item["RVA"]}</td>
            <td>{item["Speed"]}</td>
            <td>{item["Ramp_Pivot"]}</td>
            <td>{item["Projection1"]}</td>
            <td>{item["Flange-Ramp_pad"]}</td>
            <td>{item["Dimension_Max"]}</td>
            <td>{item["Dimension_Max_Angle"]}</td>
            <td>{item["Dimension_Min"]}</td>
            <td>{item["Dimension_Min_Angle"]}</td>
            <td>{item["Static_Parallelism"]}</td>
            <td>{item["Static_Dimension_Max"]}</td>
            <td>{item["Static_Dimension_Max_Angle"]}</td>
            <td>{item["Static_Dimension_Min"]}</td>
            <td>{item["Static_Dimension_Min_Angle"]}</td>
            <td>{item["NRRO"]}</td>
            <td>{item["RRO"]}</td>
            <td>{item["Spin_direction_Value"]}</td>
            <td>{item["Spin_direction_Bin_Number"]}</td>
            <td>{item["Spin_direction_Result"]}</td>
            <td>{item["Remarks"]}</td>
            <td>{item["Line_no"]}</td>
            <td>{item["Model"]}</td>
            <td>{item["2ndYield"]}</td>
            <td>{item["NG criteria"]}</td>
          </tr>
        ));
      }
    }
  };
  render() {
    console.log(this.state.xAxis);
    console.log(this.state.PivotTable);
    console.log(this.state.report);

    return (
      <div className="content-wrapper">
        <div className="content" style={{ paddingTop: 70 }}>
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Trace back NG Dynamic_Parallelism_Tester</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="/Home">Home</a>
                    </li>
                    <li className="breadcrumb-item active">
                      Trace back NG Dynamic_Parallelism_Tester
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
                    <div className="col-md-2">
                      <div className="form-group">
                        <label>Line_No</label>
                        <Select
                          options={this.state.listLine}
                          value={this.state.Line[0]}
                          onChange={async (e) => {
                            await this.setState({ Line: [] });
                            this.state.Line.push({ label: e.label });
                          }}
                          // type="text"
                          // className="form-control"
                          placeholder="Select Line_No"
                        />
                      </div>
                    </div>

                    {/* //Select Start Date */}
                    <div className="col-md-2">
                      <div className="form-group">
                        <label>By Daily Select From &nbsp;</label>
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

                    {/* //Select Critiria "Code"
                         <div className="col-md-2">
                      <div className="form-group">
                        <label>Code</label>
                        <Select
                          options={this.state.listCode}
                          value={this.state.Code[0]}
                          onChange={async (e) => {
                            await this.setState({ Code: [] });
                            this.state.Code.push({ label: e.label });
                     
                          }}
                          // type="text"
                          // className="form-control"
                          placeholder="Select Code"
                        />
                      </div>
                    </div> */}
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
                                }).then(() => {
                                  // รีเฟรชหน้าใหม่
                                  window.location.reload();
                                });
                              }
                            } else {
                              Swal.fire({
                                icon: "error",
                                title: "No production data",
                                text: "Please select other date",
                              }).then(() => {
                                // รีเฟรชหน้าใหม่
                                window.location.reload();
                       
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
                    {/* Submit button */}
                    {/* <div className="col-md-1">
                      <button
                        disabled={this.state.isDisable}
                        // type="button"
                        // className="btn btn-info btn-flat"
                        onClick={async (e) => {
                          this.setState({ isDisable: true });
                          // this.doGetDataReport();
                          Swal.fire({
                            icon: "info",
                            title: "Loading Data",
                            timer: 60000,
                            allowOutsideClick: false,
                            didOpen: async () => {
                              Swal.showLoading();
                              try {
                                await this.doGetDataReport();
                                Swal.close();
                                if (
                                  this.state.report &&
                                  Array.isArray(this.state.report) &&
                                  this.state.report.length > 0
                                ) {
                                  if (
                                    this.state.report[0] &&
                                    Array.isArray(this.state.report[0]) &&
                                    this.state.report[0].length > 0
                                  ) {
                                    Swal.fire({
                                      icon: "success",
                                      title: "Success",
                                      text: "Data has been loaded successfully",
                                    });
                                  } else if (
                                    this.state.report[0] &&
                                    Array.isArray(this.state.report[0]) &&
                                    this.state.report[0].length === null
                                  ) {
                                    Swal.fire({
                                      icon: "error",
                                      title: "No production data",
                                      text: "Please select another date",
                                    });
                                  }
                                } else {
                                  Swal.fire({
                                    icon: "error",
                                    title:
                                      "Data loading encountered an error, please try again",
                                  }).then(() => {
                                    // รีเฟรชหน้าใหม่
                                    window.location.reload();
                                  });
                                }
                              } catch (error) {
                                Swal.fire({
                                  icon: "error",
                                  title: "No production data",
                                  text: "Please select another date", // แสดงข้อความของ error เป็นข้อความใน Swal
                                }).then(() => {
                                  // รีเฟรชหน้าใหม่
                                  window.location.reload();
                                });
                              }
                            },
                          });
                        }}
                        type="submit"
                        className="btn btn-primary"
                        style={{ marginTop: 30 }}
                      >
                        Submit
                      </button>
                    </div> */}
                    <div className="col-md-2">
                      <CSVLink
                        data={this.state.Raw_Dat}
                        filename={"report.csv"}
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
                  <div className="card card-primary">
                    <div className="row">
                      <div className="col-12">
                        {/* /.card-header */}
                        <div
                          className="card-body table-responsive p-0"
                          style={{
                            height: 400,
                            height: 500,
                            zIndex: "3",
                            position: "relative",
                            zIndex: "0",
                          }}
                        >
                          <table className="table  text-nowrap table-hover table-head-fixed">
                            <thead>
                              <tr>
                                <th width="175">Machine_no</th>
                                <th width="175">Date</th>
                                <th width="175">Time</th>
                                <th width="175">Operator</th>
                                <th width="175">Barcode</th>
                                <th width="175">Master_Judgment</th>
                                <th width="175">Set_Dim</th>
                                <th width="175">Set_Dim_A</th>
                                <th width="175">Set_Dim_B</th>
                                <th width="175">Set_Dim_C</th>
                                <th width="175">Ramp_to_Datum</th>
                                <th width="175">Contact_Probe_2</th>
                                <th width="175">Pivot_Height</th>
                                <th width="175">Parallelism</th>
                                <th width="175">TIR</th>
                                <th width="175">TIR_A</th>
                                <th width="175">TIR_B</th>
                                <th width="175">TIR_C</th>
                                <th width="175">FlyHeight</th>
                                <th width="175">Fly_Height_Max_Limit</th>
                                <th width="175">Fly_Height_Min_Limit</th>
                                <th width="175">Axial_Play</th>
                                <th width="175">Static_Dim</th>
                                <th width="175">Static_Dim_A</th>
                                <th width="175">Static_Dim_B</th>
                                <th width="175">Static_Dim_C</th>
                                <th width="175">RVA</th>
                                <th width="175">Speed</th>
                                <th width="175">Ramp_Pivot</th>
                                <th width="175">Projection1</th>
                                <th width="175">Flange-Ramp_pad</th>
                                <th width="175">Dimension_Max</th>
                                <th width="175">Dimension_Max_Angle</th>
                                <th width="175">Dimension_Min</th>
                                <th width="175">Dimension_Min_Angle</th>
                                <th width="175">Static_Parallelism</th>
                                <th width="175">Static_Dimension_Max</th>
                                <th width="175">Static_Dimension_Max_Angle</th>
                                <th width="175">Static_Dimension_Min</th>
                                <th width="175">Static_Dimension_Min_Angle</th>
                                <th width="175">NRRO</th>
                                <th width="175">RRO</th>
                                <th width="175">Spin_direction_Value</th>
                                <th width="175">Spin_direction_Bin_Number</th>
                                <th width="175">Spin_direction_Result</th>
                                <th width="175">Remarks</th>
                                <th width="175">Line_no</th>
                                <th width="175">Model</th>
                                <th width="175">2ndYield</th>
                                <th width="175">NG criteria</th>
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

export default trace_back_ng;
