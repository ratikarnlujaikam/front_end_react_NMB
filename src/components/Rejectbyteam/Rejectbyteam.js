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

class Rejectbyteam extends Component {
  constructor(props) {
    super(props);

    //set state
    this.state = {
      year: [],
      Month: [],
      report: [],
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

      optionSelected: null,
      isDisable: false,
    };
  }
  doGetDataReport = async () => {
    const result = await httpClient.get(
      server.REJECTTEAM_URL + "/" + this.state.startDate
    );

    let xAxis = [];

    for (let index = 0; index < result.data.resultGraph.length; index++) {
      const item = result.data.resultGraph[index];
      await xAxis.push(item.Supporter);
    }

    let yQTY = result.data.QTY;
    let yNG = result.data.NG;

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
      xAxis,
      yQTY,
      yNG,

      // series,

      isDisable: false,
    });

    await this.setState({
      seriesY: [
        {
          name: "Reject by Team",
          type: "column",
          data: yQTY,
        },
        // {
        //   name: "reject",
        //   type: "column",
        //   data: yNG,
        // },

      ],
      options: {
        chart: {
          type: "line",
          height: 300,
          stacked: true,
          toolbar: {
            show: true,
          },
        },

        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: "bottom",
                offsetX: -10,
                offsetY: 0,
              },
            },
          },
        ],
        title: {
          text: "Reject by team",
          align: "center",
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [0],
        },
        xaxis: {
          type: "date",
          categories: xAxis,
        },
        yaxis: [
          {
              axisTicks: {
                show: true,
              },
              axisBorder: {
                show: true,
                color: "#ff7043",
              },
              labels: {
                style: {
                  colors: "#ff7043",
                },
              },
              title: {
                text: "Reject Qty",
                style: {
                  color: "#ff7043",
                },
              },
              tooltip: {
                enabled: true,
              },
          
          },
        ],
        colors: [
          "#ff7043",
         
        ],
        // legend: {
        //   position: 'right',
        //   offsetY: 40
        // },
        fill: {
          opacity: 1,
        },
      },
    });
  };

  renderreport = () => {
    if (this.state.report != null) {
      if (this.state.report.length > 0) {
        return this.state.report.map((item) => (
          <tr Align="right">
            <td Align="left">{item["Date"]}</td>
            <td Align="left">{item["Model_group"]}</td>
            <td Align="left">{item["Line_No"]}</td>
            <td Align="left">{item["Supporter"]}</td>
            <td Align="left">{item["ENEmpName"]}</td>
            <td Align="left">{item["NG"]}</td>
            <td>{item["QTY"]}</td>
          </tr>
        ));
      }
    }
  };

  render() {
    return (
      <div className="content-wrapper">
        <div className="content" style={{ paddingTop: 50 }}>
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Monthly VMI LAR Trend </h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="/Home">Home</a>
                    </li>
                    <li className="breadcrumb-item active">
                      Monthly VMI LAR Trend
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
                              if (this.state.report[0].Supporter.length > 0) {
                                Swal.fire({
                                  icon: "success",
                                  title: "Success",
                                  text: "Data has been loaded successfully",
                                });
                              } else if (
                                this.state.report[0].Supporter.length == 0
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
                      <a
                        style={{ marginTop: 30 }}
                        href="/defectNG"
                        className="fas fa-angle-double-left"
                        class="btn btn-primary"
                        role="button"
                        aria-pressed="true"
                      >
                        Back
                      </a>
                    </div>
                    {/* <nav aria-label="Page navigation example">
                      <ul class="pagination">
                        <li class="page-item">
                          <a class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span class="sr-only">Previous</span>
                          </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="/defectNG">1</a></li>
                        <li class="page-item"><a class="page-link" href="/LAR">2</a></li>
                        <li class="page-item">
                          <a class="page-link" href="/LAR" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span class="sr-only">Next</span>
                          </a>
                        </li>
                      </ul>
                    </nav> */}
                  </div>
                </div>
              </div>
              <div class="content">
                <div class="container-fluid">
                  <div className="row">
                    <div className="col-6">
                      <div className="card card-primary card-outline">
                        {/* Chart Title */}
                        <div className="card-header">
                          <h3 className="card-title">
                            <i className="far fa-chart-bar" />
                            
                          </h3>
                        </div>

                        {/* Insert Xbar Chart */}
                        <div className="row" 
                        style={{ width: "100%" }}>
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
                                    type="line"
                                    height={300}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                           {/* Table*/}
         
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
                          <table className="table table-head-fixed text-nowrap table-hover">
                            <thead>
                              <tr >
                                <th width="50">Date</th>
                                <th width="120">Model group</th>
                                <th width="120">Line No</th>
                                <th width="120">Supporter</th>
                                <th width="120">EmpName</th>
                                <th width="120">NG</th>
                                <th width="120">QTY</th>
                              </tr>
                            </thead>
                            <tbody>{this.renderreport()}</tbody>
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

export default Rejectbyteam;
