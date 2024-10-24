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

class report_per_producion_team extends Component {
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
      listCode: [],

      optionSelected: null,
      isDisable: false,
    };
  }

  componentDidMount = async () => {
    await this.getyear();
    await this.getMonth();


  };
  doGetDataReport = async () => {
    const result = await httpClient.get(
      server.MQT_URL +
      "/" +
      this.state.year +
      "/" +
      this.state.Month[0].label

    );

    let xAxis = [];

    for (let index = 0; index < result.data.resultGraph.length; index++) {
      const item = result.data.resultGraph[index];
      await xAxis.push(item.SupporterName);
    }

    let yAxis6 = result.data.LAR;
    let yInput = result.data.Input;
    let yReject = result.data.Reject;
    let yRejectPP = result.data.Reject_Percent;


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
      xAxis,
      yAxis6,
      yReject,
      yInput,
      yRejectPP,

      // series,

      isDisable: false,
    });

    await this.setState({

      seriesY: [

        {
          name: "Input",
          type: "column",
          data: yInput,
        },
        {
          name: "Reject(lot)",
          type: "column",
          data: yReject,
        },

        {
          name: "Reject %",
          type: "line",
          data: yRejectPP,
        },


      ],
      options: {
        chart: {
          height: 350,
          type: 'line',
          stacked: true
        },
        dataLabels: {
          enabled: true
        },
        stroke: {
          width: [1, 1, 4]
        },
        title: {
          text: 'Most Quality Team',
          align: 'Conter',
         
        },
        xaxis: {
          categories: xAxis,
        },
        yaxis: [
          {
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#00E396'
            },
            labels: {
              style: {
                colors: '#00E396',
              }
            },
            title: {
              text: "INPUT(LOT)",
              style: {
                color: '#00E396',
              }
            },
            tooltip: {
              enabled: true
            }
          },
          {
            seriesName: 'Income',
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#ff0000'
            },
            labels: {
              style: {
                colors: '#ff0000',
              }
            },
            title: {
              text: "Reject (LOT)",
              style: {
                color: '#ff0000',
              }
            },
          },
          {
            seriesName: 'Revenue',
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: '#FEB019'
            },
            labels: {
              style: {
                colors: '#FEB019',
              },
            },
            title: {
              text: "Reject (%)",
              style: {
                color: '#FEB019',
              }
            }
          },
        ],
        colors: [
          "#00E396",
          "#ff0000",
          '#FEB019',


        ],
        tooltip: {
          fixed: {
            enabled: true,
            position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
            offsetY: 30,
            offsetX: 60
          },
        },
        legend: {
          horizontalAlign: 'center',
          offsetX: 40
        }
   
      },
    });
  };

  //     server.LAR_URL +
  //       "/" +
  //       this.state.Month +
  //       "/" +
  //       this.state.year
  //   );

  //     let xAxis = [];

  //     for (let index = 0; index < result.data.resultGraph.length; index++) {
  //       const item = result.data.resultGraph[index];
  //       await xAxis.push(item.Date);
  //     }


  //     let yAxis6 = result.data.LAR;

  //     let rawData = result.data.listRawData;
  //     console.log(rawData);
  //     console.log(rawData.length);
  //     for (let i = 1; i < rawData.length; i++) {
  //       rawData[0].push(...rawData[i]);
  //     }
  //     this.setState({ Raw_Dat: rawData[0] });
  //     console.log(this.state.Raw_Dat);

  //     this.setState({
  //       report: result.data.result,
  //       xAxis,
  //       yAxis6,


  //       // series,

  //       isDisable: false,
  //     });

  //   await this.setState({

  //     seriesY: [
  //       {
  //         name: "Cleanroom Rej%",
  //         type: "line",
  //         data: yAxis6,
  //       },

  //     ],
  //     options: {
  //       chart: {
  //         type: "line",
  //         height: 300,
  //         stacked: true,

  //       },

  //       responsive: [
  //         {
  //           breakpoint: 480,
  //           options: {
  //             legend: {
  //               position: "bottom",
  //               offsetX: -10,
  //               offsetY: 0,
  //             },
  //           },
  //         },
  //       ],
  //       title: {
  //         text: "Daily VMI LAR Trend ",
  //         align: "center",
  //       },
  //       dataLabels: {
  //         enabled: true,
  //         enabledOnSeries: [0],
  //       },
  //       xAxis: {
  //         type: "date",
  //         categories: xAxis,
  //       },
  //       yaxis: [{
  //         title: {
  //           text: 'Reject QTY by Location(%)',
  //         },

  //       }],
  //       colors: [
  //         // Cleanroom Rej
  //         "#AFADDE",
  //         // FDB Rej%
  //         "#C0EEE4",
  //         // Loose_part Rej%
  //         "#F595B2",
  //         // Washing Rej%
  //         "#FFF1BA",
  //         // Whiteroom Rej%
  //         "#BEE3ED",

  //         "#ff9900",
  //         // LAR %
  //         "#39F10F",
  //       ],
  //       // legend: {
  //       //   position: 'right',
  //       //   offsetY: 40
  //       // },
  //       fill: {
  //         opacity: 1,
  //       },
  //     },
  //   });
  // };

  getyear = async () => {
    const array = await httpClient.get(server.MQTYEAR_URL);
    const options = array.data.result.map((d) => ({
      label: d.year,
    }));
    this.setState({ listyear: options });
  };

  getMonth = async () => {
    const array = await httpClient.get(server.MQTMONTH_URL);
    const options = array.data.result.map((d) => ({
      label: d.Month,
    }));
    this.setState({ listMonth: options });
  };


  renderreport = () => {

    if (this.state.reportGraph != null) {
      if (this.state.reportGraph.length > 0) {
        return this.state.reportGraph.map((item) => (
          <tr Align="center">
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

  renderreport1 = () => {

    if (this.state.report != null) {
      if (this.state.report.length > 0) {
        return this.state.report.map((item) => (
          <tr Align="center">
            <td align="left">{item["ModelName"]}</td>
            <td >{item["Line_No"]}</td>
            <td >{item["SupporterName"]}</td>
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
    console.log(this.state.yAxis6)
    console.log(this.state.xAxis)
    console.log(this.state.yInput)
    console.log(this.state.yReject)
    console.log(this.state.Code)

    return (
      <div className="content-wrapper">
        <div className="content" style={{ paddingTop: 70 }}>
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>LAR report per Production team</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="/Home">Home</a>
                    </li>
                    <li className="breadcrumb-item active">
                    LAR report per Production team
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

                            await this.setState({
                              Month: [{ label: "Select Month" }],
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
                    <div className="col-md-2">
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
                    <div className="col-md-4">
                      <a style={{ marginTop: 30 }} href="/MQTByModel" class="btn btn-primary" role="button" aria-pressed="true">Reject(%)By Supporter</a>
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
                    <div className="col-12">
                      <div className="card card-primary card-outline">
                        {/* Chart Title */}
                        <div className="card-header">
                          <h3 className="card-title">
                            <i className="far fa-chart-bar" />
                            
                          </h3>
                        </div>

                        {/* Insert Xbar Chart */}
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
                                    type="line"
                                    height={450}
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
                          style={{ height: 400 }}
                        >
                          <table className="table table-head-fixed text-nowrap table-hover">
                            <thead>
                              <tr align="center">

                                <th width="10">EMP</th>
                                <th  width="100">SupporterName</th>
                                <th width="100">Input(Lot)</th>
                                <th width="100">Output(Lot)</th>
                                <th width="100">Reject(Lot)</th>
                                <th width="100">LAR(%)</th>
                                <th width="100">Reject(%)</th>
                                
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
                              <tr align="center">

                                <th width="120">Model Name</th>
                                <th width="120">Line_No</th>
                                <th width="120">Emp No.</th>
                                <th width="120">Supporter Name</th>
                                <th width="120">Input(Lot)</th>
                                <th width="120">Output(Lot)</th>
                                <th width="120">Reject(Lot)</th>
                                <th width="120">LAR(%)</th>
                                <th width="120">Reject(%)</th>

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

export default report_per_producion_team;
