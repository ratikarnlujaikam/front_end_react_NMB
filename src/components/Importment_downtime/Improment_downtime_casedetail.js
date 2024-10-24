import React, { Component } from "react";
import { key, server } from "../../constants";
import { httpClient } from "../../utils/HttpClient";
import moment from "moment";
import Select from "react-select";
import Swal from "sweetalert2";
import { CSVLink } from "react-csv";
import ReactApexChart from "react-apexcharts";
import CanvasJSReact from "@canvasjs/react-charts";
// npm install flat-color-icons
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class Importment_dowtime_line extends Component {
  constructor(props) {
    super(props);
    this.createPareto = this.createPareto.bind(this);
    this.createPareto2 = this.createPareto2.bind(this);
    //set state
    this.state = {
      model: { label: "**Select**" },
      insType: [{}],
      report: [],
      report2: [],
      xAxis: [],
      xAxis2: [],
      Raw_Dat: [],
      Raw_Dat2: [],
      options: {},
      options2: {},
      seriesY: [],
      seriesY2: [],
      chart: [],
      chart2: [],
      reportGraph: [],
      reportGraph2: [],
      startDate: moment().add("days", -7).format("yyyy-MM-DD"), //moment().format("yyyy-MM-DD"), //moment().add("days", -6).format("yyyy-MM-DD"),
      finishDate: moment().format("yyyy-MM-DD"), //moment().format("yyyy-MM-DD"),
      line: [{ label: "All Line" }],
      listline: [],
      listchart1: [],
      listchart2: [],
      listProcess: [],
      listInsType: [],
      mc:[],
      optionSelected: null,
      isDisable: false,
      groupBy: "Equipment_No.", // Default grouping criterion
      sumOfTotalTimeByGroup: {},
      SumOfTotalTimedelaytime: {},
      getmc_pagmc: [],
      getline_pagline: [],
      getprocess_pagline: [],
      getstart_pagline: [],
      getfinish_pagline: [],
    };
  }
  componentDidMount = async () => {
    await this.getProcess();
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.toString() !== "") {
      console.log(urlParams);
      const values = urlParams.get("data");
      const Process_data = urlParams.get("process");
      const startdate = urlParams.get("startDate");
      const finishDate = urlParams.get("finishDate");
      const Linedata = urlParams.get("Line");

      // console.log("values", values);
      // console.log("Process_data", Process_data);
      // console.log("startdate", startdate);
      // console.log("finishDate", finishDate);

      this.setState(
        {
          getmc_pagmc: values,
          getline_pagline: Linedata,
          getprocess_pagline: Process_data,
          getstart_pagline: startdate, // Assuming 'startdate' is on the right side of the '='
          getfinish_pagline: finishDate, // Assuming 'finishdata' is on the right side of the '='
        },
        () => {
          // Use the updated state values here in the callback function
          this.state.mc.label = this.state.getmc_pagmc;
          this.state.line.label = this.state.getline_pagline;
          this.state.model.label = this.state.getprocess_pagline;
          this.state.startDate = this.state.getstart_pagline;
          this.state.finishDate = this.state.getfinish_pagline;
        }
      );
      await this.doGetDataReport();
      await this.createPareto();
      await this.createPareto2();
    }

  };

  getline = async () => {
    const array = await httpClient.get(
      server.DOWNTIME_GETLINE + "/" + this.state.model.label
    );
    console.log(array);
    const options = array.data.result.map((d) => ({
      label: d.Line,
    }));

    this.setState({ listline: options });
  };

  doGetDataReport = async () => {
    // First chart
    // Fetch the data from the server
    const result = await httpClient.get(
      server.IMPORTMENT_DOWNTIME_PART_URL +
        "/Downtime_casedetail_importment/" +
        this.state.startDate +
        "/" +
        this.state.finishDate +
        "/" +
        this.state.model.label +
        "/" +
        this.state.line.label + 
        "/" +
        this.state.mc.label
    );

    console.log("result", result);
    let xAxis = [];
    let newData = [];

    // Iterate over the result data to populate xAxis and newData
    for (let index = 0; index < result.data.resultGraph.length; index++) {
      const item = result.data.resultGraph[index];
      xAxis.push(item.Cause_details);

      // Format Total_Downtime to two decimal places
      const formattedDowntime = parseFloat(item.Total_Downtime).toFixed(2);

      newData.push({
        label: item.Cause_details,
        y: parseFloat(formattedDowntime), // Convert the formatted string back to float
      });
    }

    let case_detail1 = result.data.Cause_details;
    let Total_Downtime = result.data.Total_Downtime.map((downtime) =>
      parseFloat(downtime).toFixed(2)
    ); // Format each downtime value

    this.setState({ listchart1: newData }, () => {
      // This callback will execute after the state has been updated
    });
    ////////////////////////////////////////////////////////////////////////////////

    // Second chart
    // Fetch the data from the server
    const result_Second = await httpClient.get(
      server.IMPORTMENT_DOWNTIME_PART_URL +
        "/Frequency_case_detail_importment/" +
        this.state.startDate +
        "/" +
        this.state.finishDate +
        "/" +
        this.state.model.label +
        "/" +
        this.state.line.label +
        "/" +
        this.state.mc.label
    );

    let xAxis2 = [];
    let newData2 = [];
    // console.log(result_Second);
    // Iterate over the result data to populate xAxis and newData
    for (
      let index = 0;
      index < result_Second.data.resultGraph.length;
      index++
    ) {
      const item = result_Second.data.resultGraph[index];
      xAxis2.push(item.Cause_details);
      newData2.push({
        label: item.Cause_details,
        y: item.Frequency,
      });
    }

    let case_detail = result_Second.data.Cause_details;
    let Frequency = result_Second.data.Frequency;
    this.setState({ listchart2: newData2 }, () => {
      // This callback will execute after the state has been updated
    });

    // console.log(this.state.listchart2);
    ///////////////////////////////////////////////////////////////////////////////

    this.setState({
      report: result.data.result,
      reportGraph: result.data.resultGraph,
      noData: false, // Reset the flag for no data
      case_detail1,
      Total_Downtime,
      xAxis,
      isDisable: false,
      ////////////////////////////////////////////////////////////////////
      report2: result_Second.data.result,
      reportGraph2: result_Second.data.resultGraph,
      noData: false, // Reset the flag for no data
      case_detail,
      Frequency,
      xAxis2,
      isDisable: false,
    });
    const label2 = this.state.model.label;
    const lb_startDate = this.state.startDate;
    const lb_finishDate = this.state.finishDate;
    const lb_line = this.state.line.label;
    await this.setState({
      seriesY: [
        {
          name: "Total_Downtime",
          type: "bar",
          data: Total_Downtime,
          stacked: true,
        },
      ],
      options: {
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
          text: "Downtime each case detail",
          align: "center",
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [0, 1],
        },
        xaxis: {
          type: "text",
          categories: xAxis,
        },
        yaxis: [
          {
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: "#ff0000",
            },
            labels: {
              formatter: (value) => parseFloat(value).toFixed(2), // Format y-axis labels to 2 decimal points
              style: {
                colors: "#ff0000",
              },
            },
            title: {
              text: "Total downtime (Hr)",
              style: {
                color: "#ff0000",
              },
            },
            tooltip: {
              fixed: {
                enabled: true,
              },
            },
          },
        ],
        animationEnabled: true,
        axisX: {
          interval: 1, // Show every data point on the x-axis
          labelAngle: -45, // Rotate labels to avoid overlapping (optional)
          labelFormatter: function (e) {
            return e.label; // Ensure all labels are shown
          },
        },
        axisY: {
          title: "Total downtime (Hr.)",
          lineColor: "#4F81BC",
          tickColor: "#4F81BC",
          labelFontColor: "#4F81BC",
          includeZero: true,
        },
        axisY2: {
          title: "Percent",
          suffix: "%",
          lineColor: "#C0504E",
          tickColor: "#C0504E",
          labelFontColor: "#C0504E",
        },

        data: [
          {
            type: "column",
            dataPoints: newData.map((point) => ({
              label: point.label,
              y: point.y,
              indexLabel: point.y.toString() + " Hr.",
              indexLabelFontColor: "#4F81BC",
            })),

            // click: function (e) {
            //   // Add click event directly to the data series
            //   const label = e.dataPoint.label;

            //   console.log(label2);
            //   window.location.href = `/Importment_downtime_machine?data=${label}&process=${label2}&startDate=${lb_startDate}&finishDate=${lb_finishDate}`;
            // },
          },
        ],

        colors: [
          "#3399ff", // Downtime color
          "#BEE3ED", // Additional colors if needed
          "#ff1a1a",
          "#ffff00",
          "#d24dff",
          "#ff9900",
          "#00ff00",
        ],
        fill: {
          opacity: 1,
        },
      },

      seriesY2: [
        {
          name: "Frequency",
          type: "bar",
          data: Frequency,
          stacked: true,
        },
      ],
      options2: {
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
          text: "Downtime frequency each case detail",
          // this.state.startDate +
          // " To " +
          // this.state.finishDate +
          // "   -  Process : " +
          // this.state.model.label,
          align: "center",
        },
        dataLabels: {
          enabled: true,
          enabledOnSeries: [0, 1],
        },
        xaxis2: {
          type: "text",
          categories: xAxis2,
        },
        yaxis: [
          {
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: "#ff0000",
            },
            labels: {
              formatter: (value) => parseFloat(value).toFixed(2), // Format y-axis labels to 2 decimal points
              style: {
                colors: "#ff0000",
              },
            },
            title: {
              text: "Total (Times)",
              style: {
                color: "#ff0000",
              },
            },
            tooltip: {
              fixed: {
                enabled: true,
              },
            },
          },
        ],
        animationEnabled: true,
        axisX: {
          interval: 1, // Show every data point on the x-axis
          labelAngle: -45, // Rotate labels to avoid overlapping (optional)
          labelFormatter: function (e) {
            return e.label; // Ensure all labels are shown
          },
        },
        axisY: {
          title: "Total (Times.)",
          lineColor: "#4F81BC",
          tickColor: "#4F81BC",
          labelFontColor: "#4F81BC",
          includeZero: true,
        },
        axisY2: {
          title: "Percent",
          suffix: "%",
          lineColor: "#C0504E",
          tickColor: "#C0504E",
          labelFontColor: "#C0504E",
        },

        data: [
          {
            type: "column",
            dataPoints: newData2.map((point) => ({
              label: point.label,
              y: point.y,
              indexLabel: point.y.toString(),
              indexLabelFontColor: "#4F81BC",
            })),

            // click: function (e) {
            //   // Add click event directly to the data series
            //   const label = e.dataPoint.label;

            //   console.log(label2);
            //   window.location.href = `/Importment_downtime_machine?data=${label}&process=${label2}&startDate=${lb_startDate}&finishDate=${lb_finishDate}`;
            // },
          },
        ],

        colors: [
          "#3399ff", // Downtime color
          "#BEE3ED", // Additional colors if needed
          "#ff1a1a",
          "#ffff00",
          "#d24dff",
          "#ff9900",
          "#00ff00",
        ],
        fill: {
          opacity: 1,
        },
      },
    });
  };

  getProcess = async () => {
    const array = await httpClient.get(server.DOWNTIME_GETPROCESS);
    const options = array.data.result.map((d) => ({
      label: d.Process,
    }));

    this.setState({ listProcess: options });
  };

  renderReport() {
    const { report, startDate } = this.state;

    // Check if report is not null or undefined and has items
    if (report && report.length > 0) {
      // Extract all unique keys from the report items
      const keys = ["Downtime", "Delay_Time", "Total"];
      const pivotedData = keys.map((key) => {
        return (
          <tr key={key}>
            <td>{key}</td>
            {report.map((item, index) => (
              <td key={index}>
                {key === "Downtime" || key === "Delay_Time" || key === "Total"
                  ? item[key]
                  : this.formatDate(startDate) +
                    "-" +
                    this.formatDay(item["Line"])}
              </td>
            ))}
          </tr>
        );
      });

      return pivotedData;
    } else {
      return (
        <tr>
          <td colSpan={report.length + 1}>No data available</td>
        </tr>
      );
    }
  }

  createPareto() {
    var dps = [];
    var chart = this.chart;
    var yValue,
      yTotal = 0,
      yPercent = 0;

    // Calculate the total of all y values
    for (var i = 0; i < chart.data[0].dataPoints.length; i++) {
      yTotal += chart.data[0].dataPoints[i].y;
    }

    // Calculate the cumulative percentage for each data point
    for (var i = 0; i < chart.data[0].dataPoints.length; i++) {
      yValue = chart.data[0].dataPoints[i].y;
      yPercent += (yValue / yTotal) * 100;
      yPercent = parseFloat(yPercent.toFixed(2)); // Round to 2 decimal places
      dps.push({ label: chart.data[0].dataPoints[i].label, y: yPercent });
    }

    // Add the line chart with the calculated percentages
    chart.addTo("data", {
      type: "line",
      yValueFormatString: "0.##" % "",
      dataPoints: dps,
    });


    // Set axis properties with minimum and maximum adjustments
    var yMax = Math.ceil(yTotal / 5) * 5; // Adjust maximum to nearest multiple of 20
    var yMin = 0; // Set minimum value, can be adjusted if needed

    chart.data[1].set("axisYType", "secondary", false);
    chart.axisY[0].set("minimum", yMin); // Set the minimum value for the primary axis
    chart.axisY[0].set("maximum", yMax); // Set the maximum value for the primary axis
    chart.axisY2[0].set("maximum", 100); // Secondary axis for the cumulative percentage
  }

  createPareto2() {
    var dps = [];
    var chart2 = this.chart2;
    var yValue,
      yTotal = 0,
      yPercent = 0;

    // Calculate the total of all y values
    for (var i = 0; i < chart2.data[0].dataPoints.length; i++) {
      yTotal += chart2.data[0].dataPoints[i].y;
    }

    // Calculate the cumulative percentage for each data point
    for (var i = 0; i < chart2.data[0].dataPoints.length; i++) {
      yValue = chart2.data[0].dataPoints[i].y;
      yPercent += (yValue / yTotal) * 100;
      yPercent = parseFloat(yPercent.toFixed(2)); // Round to 2 decimal places
      dps.push({ label: chart2.data[0].dataPoints[i].label, y: yPercent });
    }

    // Add the line chart with the calculated percentages
    chart2.addTo("data", {
      type: "line",
      yValueFormatString: "0.##" % "",
      dataPoints: dps,
    });

  
    // Set axis properties with minimum and maximum adjustments
    var yMax = Math.ceil(yTotal / 20) * 20; // Adjust maximum to nearest multiple of 20
    var yMin = 0; // Set minimum value, can be adjusted if needed

    chart2.data[1].set("axisYType", "secondary", false);
    chart2.axisY[0].set("minimum", yMin); // Set the minimum value for the primary axis
    chart2.axisY[0].set("maximum", yMax); // Set the maximum value for the primary axis
    chart2.axisY2[0].set("maximum", 100); // Secondary axis for the cumulative percentage
  }

  render() {
    return (
      //Hander

      <div className="content-wrapper">
        <div className="content" style={{ paddingTop: 70 }}>
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Importment downtime case detail</h1>
                  {/* <FcComboChart /> */}
                  {/* <h2>Line: {this.state.getline_pagline}</h2>
                  <h2>Process: {this.state.getprocess_pagline}</h2>
                  <h2>Startdate: {this.state.getstart_pagline}</h2>
                  <h2>Finishdate: {this.state.getfinish_pagline}</h2> */}
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="/Home">Home</a>
                    </li>
                    <li className="breadcrumb-item active">
                        <a href="/Importment_downtime_line">Importment_downtime</a>
                      {/* Importment downtime machine{" "} */}
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* select Parameter */}
        <div class="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card card-primary card-outline">
                <div className="card-header">
                  <h3 className="card-title">
                    {/* <label>Select Parameter</label> */}
                  </h3>
                </div>

                <div className="card-body">
                  <div className="row justify-content-center">
                    <h3>
                      Downtime on (start {this.state.startDate} –{" "}
                      {this.state.finishDate}) Process: {this.state.model.label}
                      Line: {this.state.line.label} MC: {this.state.mc.label}
                    </h3>

                    {/* //Select "Process PE" */}
                    {/* <div className="col-md-2">
                      <div className="form-group">
                        <label>Process</label>

                        <Select
                          options={this.state.listProcess}
                          value={this.state.model}
                          onChange={async (e) => {
                            await this.setState({ model: e });
                            await this.getline();
                          }}
                       
                          placeholder="Select Model"
                        />
                      </div>
                    </div> */}
                    {/* //Select Line "Process PE" */}
                    {/* <div className="col-md-2">
                      <div className="form-group">
                        <label>Line</label>

                        <Select
                          options={this.state.listline}
                          value={this.state.line}
                          onChange={async (e) => {
                            await this.setState({ line: e });
                          }}
                          // type="text"
                          // className="form-control"
                          placeholder="All line"
                        />
                      </div>
                    </div> */}
                    {/* //Select Start Date */}
                    {/* <div className="col-md-2">
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
                    </div> */}

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
                                await this.createPareto();
                                await this.createPareto2();

                                Swal.close();
                                if (
                                  this.state.reportGraph &&
                                  Array.isArray(this.state.reportGraph) &&
                                  this.state.reportGraph.length > 0
                                ) {
                                  if (
                                    this.state.reportGraph[0] &&
                                    Array.isArray(this.state.reportGraph[0]) &&
                                    this.state.reportGraph[0].length > 0
                                  ) {
                                    Swal.fire({
                                      icon: "success",
                                      title: "Success",
                                      text: "Data has been loaded successfully",
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
                    {/* <div className="col-md-1">
                      <CSVLink
                        data={this.state.report}
                        filename={"Downtime_monthly_report.csv"}
                      >
                        <button
                          type="button"
                          className="btn btn-primary"
                          style={{ marginTop: 30 }}
                        >
                          Download
                        </button>
                      </CSVLink>
                    </div> */}
                  </div>
                </div>
              </div>

              {/* Chart */}
              <div className="content">
                <div className="container-fluid">
                  <div className="card card-primary">
                    <div className="row">
                      <div className="col-12">
                        <div
                          className="card-body table-responsive p-0"
                          style={{
                            height: 440,
                            zIndex: "0",
                            position: "relative",
                          }}
                        >
                          <div className="row" style={{ width: "100%" }}>
                            <div style={{ width: "1%" }}></div>
                            <div
                              className="card card-warning"
                              style={{
                                width: "97%",
                                backgroundColor: "#ff9900",
                                border: "1px solid #000000",
                                borderRadius: "10px",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                              }}
                            >
                              <div>
                                <CanvasJSChart
                                  options={this.state.options}
                                  onRef={(ref) => (this.chart = ref)}
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

              {/* Chart2 */}
              <div className="content">
                <div className="container-fluid">
                  <div className="card card-primary">
                    <div className="row">
                      <div className="col-12">
                        <div
                          className="card-body table-responsive p-0"
                          style={{
                            height: 430,
                            zIndex: "0",
                            position: "relative",
                          }}
                        >
                          <div className="row" style={{ width: "100%" }}>
                            <div style={{ width: "1%" }}></div>
                            <div
                              className="card card-warning"
                              style={{
                                width: "97%",
                                backgroundColor: "#ff9900",
                                border: "1px solid #000000",
                                borderRadius: "10px",
                                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                              }}
                            >
                              <div>
                                <CanvasJSChart
                                  options={this.state.options2}
                                  onRef={(ref) => (this.chart2 = ref)}
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
          </div>
        </div>
      </div>
    );
  }
}

export default Importment_dowtime_line;
