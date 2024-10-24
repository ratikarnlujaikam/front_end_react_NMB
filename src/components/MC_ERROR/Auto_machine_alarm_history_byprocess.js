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

class Auto_machine_alarm_history extends Component {
  constructor(props) {
    super(props);

    //set state
    this.state = {
      radio_ERROR: true,
      radio_NG: false,
      year: [],
      Table: [],
      EMP: [],
      report: [],
      reportGraph: [],
      xAxis: [],
      xAxis_MC: [],

      seriesY: [],
      seriesY_year: [],

      seriesY_MC: [],
      seriesCleanroom: [],
      options: {},
      options_year: {},
      options_MC: {},
      chart: [],
      Table: [],
      Line: [],
      Raw_Dat: [],
      Raw_Dat: [],
      show_link:[],
      startDate: moment().format("yyyy-MM-DD"), //moment().format("yyyy-MM-DD"), //moment().add("days", -6).format("yyyy-MM-DD"),
      finishDate: moment().format("yyyy-MM-DD"), //moment().format("yyyy-MM-DD"),
      listTable: [],
      listLine: [],
      listModel: [],
      listCode: [],

      optionSelected: null,
      isDisable: false,
    };
  }

  componentDidMount = async () => {
    this.setState({ countdownEnabled: false });
    const { location } = this.props;
    const { state } = location;
  
    // ดึงค่าพารามิเตอร์ process จาก URL
    const urlParams = new URLSearchParams(window.location.search);
    const process = urlParams.get("process");
    const lineFromState = urlParams.get("line");
    const startDateParam = urlParams.get("startDate");
    const to_link = urlParams.get("to_link");
  
    console.log("Process:", process);
    console.log("Line:", lineFromState);
    console.log("StartDate:", startDateParam);


    this.setState({ show_link: to_link });
    if (to_link != null) {
    this.setState({ 
      Line: lineFromState,
      Table: process,
      startDate: startDateParam,
    }, () => {
     
      const url =
      server.MC_ERROR_by_process_URL +
      "/" +
          this.state.Table +
          "/" +
          this.state.Line +
          "/" +
          this.state.startDate
      console.log("Request URL:", url);
      this.doGetDataReport();

      const url_year =
      server.MC_ERROR_by_process_year_URL +
      "/" +
          this.state.Table +
          "/" +
          this.state.Line +
          "/" +
          this.state.startDate   
      console.log("Request URL:", url_year);
  
      // เรียกใช้ฟังก์ชันที่ 1
      this.doGetDataReport1();
      
    });
    
  }
};

  doGetDataReport = async () => {

    const url =
    server.MC_ERROR_by_process_URL +
    "/" +
    this.state.Table +
    "/" +
    this.state.Line +
    "/" +
    this.state.startDate 

    const result = await httpClient.get(url);



    let xAxis = [];

    for (let index = 0; index < result.data.resultGraph.length; index++) {
      const item = result.data.resultGraph[index];
      await xAxis.push(item.Date);
    }
    let PivotTable = result.data.PivotTable;
    console.log("PivotTable", PivotTable);
    let xAxis_MC = [];


    console.log("xAxis_MC", xAxis_MC);
    let PivotTable_MC = result.data.PivotTable_MC;
    console.log("PivotTable_MC", PivotTable_MC);

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
      xAxis_MC,

      PivotTable,
      PivotTable_MC,

      // series,

      isDisable: false,
    });

    let seriesData = [];

    for (let i = 0; i < PivotTable.length; i++) {
      const series = {
        name: PivotTable[i].name,
        type: "column",
        data: PivotTable[i].data,
      };
      seriesData.push(series);
    }
    console.log("seriesData", seriesData);

    // Assuming seriesData is your array
    const names = seriesData.map((item) => item.name);

    console.log(names);
    const seriesName = names[0];
    console.log(seriesName);

    let numColumns = 0;
    const allData = seriesData.reduce((acc, item) => acc.concat(item.data), []);

    // Calculate the sum of all data values
    const sumData = allData.reduce((sum, value) => sum + value, 0);

    // Loop through the sortedData array
    for (const item of seriesData) {
      // Check if the type is 'column'
      if (item.type === "column") {
        numColumns++;
      }
    }

    console.log("Number of Columns:", numColumns);

    // Define y-axis configurations
    let yaxisConfig = [];

    // Loop for each column
    const maxIncreasePercentage = 10; // Set the desired percentage increase
    for (let i = 0; i < numColumns; i++) {
      const yAxisConfig = {
          seriesName: seriesName,
          min: 0,
          axisTicks: {},
          axisBorder: {
              show: i === 0,
              color: i === 0 ? "#d62728" : "#3399ff",
          },
          labels: {
              show: i === 0,
              style: {
                  colors: i === 0 ? "#d62728" : "#3399ff",
              },
              formatter: function (val) {
                  return Number(val).toFixed(2) + "%";
              },
          },
          title: {
              show: i === 0,
              text: "QTY",
              style: {
                  color: i === 0 ? "#d62728" : "#3399ff",
              },
          },
          tooltip: {
              show: i === 0,
              enabled: true,
          },
          dataLabels: {
              enabled: true,
              offsetX: 0,
              offsetY: 0,
              style: {
                  fontSize: "13px",
                  color: "#000000",
              },
              formatter: function (val) {
                  return Number(val).toFixed(2) + "%";
              },
              yAxisIndex: 0,
          },
          show: i === 0,
          yAxisIndex: 0,
      };
  
      yaxisConfig.push(yAxisConfig);
  }
  
const path_month = this.state.startDate.split("-")[1];
const path_year = this.state.startDate.split("-")[0];
    await this.setState({
      // Existing code...
      seriesY: seriesData,
      options: {
        chart: {
          height: 350,
          type: "line",
          stacked: true,
        },

        title: {
          text: `M/C error monitoring Process :${this.state.Table}  Line :${this.state.Line} Month :${path_month} year :${path_year}`,
          align: "center",
        },
        xaxis: {
          categories: xAxis,
          text: "Dayly",
          labels: {
            style: {
              fontSize: "12px",
              fontWeight: 500,
            },
          },
        },
        yaxis: yaxisConfig,
        tooltip: {
          fixed: {
            enabled: true,
            position: "topLeft",
            offsetY: 30,
            offsetX: 0,
          },
        },
        dataLabels: {
          enabled: true,
          offsetX: 0,
          offsetY: 0,
          style: {
              fontSize: "13px",
              color: "#000000",
          },
          formatter: function (val) {
              return Number(val).toFixed(2) + "%";
          },
          yAxisIndex: 0,
      },
        legend: {
          horizontalAlign: "left",
          offsetX: 40,
        },
        fill: {
          opacity: 0.8,
        },
        colors: [
          "#1f77b4",
          "#ff7f0e",
          "#2ca02c",
          "#d62728",
          "#9467bd",
          "#8c564b",
          "#e377c2",
          "#7f7f7f",
          "#bcbd22",
          "#17becf",
          "#aec7e8",
          "#ffbb78",
          "#98df8a",
          "#ff9896",
          "#c5b0d5",
          "#c49c94",
          "#f7b6d2",
          "#c7c7c7",
          "#dbdb8d",
          "#9edae5",
          "#ff6600",
          "#339933",
          "#cc0000",
          "#993366",
          "#663300",
          "#ff66cc",
          "#666666",
          "#cccc00",
          "#00ccff",
          "#ff3300",
          "#66ff66",
          "#990000",
          "#996699",
          "#996633",
          "#ff99cc",
          "#999999",
          "#ffff00",
          "#0099ff",
        ],
        stroke: {
          width: 2,
          curve: "smooth",
        },
        markers: {
          size: 4,
          strokeColors: "#fff",
          strokeWidth: 2,
          hover: {
            size: 7,
          },
        },
      },
      // Rest of the code...
    });






  };


  doGetDataReport1 = async () => {

    const url_year =
    server.MC_ERROR_by_process_year_URL +
    "/" +
    this.state.Table +
    "/" +
    this.state.Line +
    "/" +
    this.state.startDate 

    const result = await httpClient.get(url_year);



    let xAxis = [];

    for (let index = 0; index < result.data.resultGraph.length; index++) {
      const item = result.data.resultGraph[index];
      await xAxis.push(item.Date);
    }
    let PivotTable = result.data.PivotTable;
    console.log("PivotTable", PivotTable);
    let xAxis_MC = [];


    console.log("xAxis_MC", xAxis_MC);
    let PivotTable_MC = result.data.PivotTable_MC;
    console.log("PivotTable_MC", PivotTable_MC);

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
      xAxis_MC,

      PivotTable,
      PivotTable_MC,

      // series,

      isDisable: false,
    });

    let seriesData = [];

    for (let i = 0; i < PivotTable.length; i++) {
      const series = {
        name: PivotTable[i].name,
        type: "column",
        data: PivotTable[i].data,
      };
      seriesData.push(series);
    }
    console.log("seriesData", seriesData);

    // Assuming seriesData is your array
    const names = seriesData.map((item) => item.name);

    console.log(names);
    const seriesName = names[0];
    console.log(seriesName);

    let numColumns = 0;
    const allData = seriesData.reduce((acc, item) => acc.concat(item.data), []);

    // Calculate the sum of all data values
    const sumData = allData.reduce((sum, value) => sum + value, 0);

    // Loop through the sortedData array
    for (const item of seriesData) {
      // Check if the type is 'column'
      if (item.type === "column") {
        numColumns++;
      }
    }

    console.log("Number of Columns:", numColumns);

    // Define y-axis configurations
    let yaxisConfig = [];

    // Loop for each column
    const maxIncreasePercentage = 10; // Set the desired percentage increase
    for (let i = 0; i < numColumns; i++) {
      const yAxisConfig = {
          seriesName: seriesName,
          min: 0,
          axisTicks: {},
          axisBorder: {
              show: i === 0,
              color: i === 0 ? "#d62728" : "#3399ff",
          },
          labels: {
              show: i === 0,
              style: {
                  colors: i === 0 ? "#d62728" : "#3399ff",
              },
              formatter: function (val) {
                  return Number(val).toFixed(2) + "%";
              },
          },
          title: {
              show: i === 0,
              text: "QTY",
              style: {
                  color: i === 0 ? "#d62728" : "#3399ff",
              },
          },
          tooltip: {
              show: i === 0,
              enabled: true,
          },
          dataLabels: {
              enabled: true,
              offsetX: 0,
              offsetY: 0,
              style: {
                  fontSize: "13px",
                  color: "#000000",
              },
              formatter: function (val) {
                  return Number(val).toFixed(2) + "%";
              },
              yAxisIndex: 0,
          },
          show: i === 0,
          yAxisIndex: 0,
      };
  
      yaxisConfig.push(yAxisConfig);
  }
  
  const parts = this.state.startDate.split("-");
  const year_graph = parts[0];
    await this.setState({
      // Existing code...
      seriesY_year: seriesData,
      options_year: {
        chart: {
          height: 350,
          type: "line",
          stacked: true,
        },

        title: {
          text: `M/C error monitoring Process :${this.state.Table}  Line :${this.state.Line} year :${year_graph}`,
          align: "center",
        },
        xaxis: {
          categories: xAxis,
          text: "Dayly",
          labels: {
            style: {
              fontSize: "12px",
              fontWeight: 500,
            },
          },
        },
        yaxis: yaxisConfig,
        tooltip: {
          fixed: {
            enabled: true,
            position: "topLeft",
            offsetY: 30,
            offsetX: 0,
          },
        },
        dataLabels: {
          enabled: true,
          offsetX: 0,
          offsetY: 0,
          style: {
              fontSize: "13px",
              color: "#000000",
          },
          formatter: function (val) {
              return Number(val).toFixed(2) + "%";
          },
          yAxisIndex: 0,
      },
        legend: {
          horizontalAlign: "left",
          offsetX: 40,
        },
        fill: {
          opacity: 0.8,
        },
        colors: [
          "#1f77b4",
          "#ff7f0e",
          "#2ca02c",
          "#d62728",
          "#9467bd",
          "#8c564b",
          "#e377c2",
          "#7f7f7f",
          "#bcbd22",
          "#17becf",
          "#aec7e8",
          "#ffbb78",
          "#98df8a",
          "#ff9896",
          "#c5b0d5",
          "#c49c94",
          "#f7b6d2",
          "#c7c7c7",
          "#dbdb8d",
          "#9edae5",
          "#ff6600",
          "#339933",
          "#cc0000",
          "#993366",
          "#663300",
          "#ff66cc",
          "#666666",
          "#cccc00",
          "#00ccff",
          "#ff3300",
          "#66ff66",
          "#990000",
          "#996699",
          "#996633",
          "#ff99cc",
          "#999999",
          "#ffff00",
          "#0099ff",
        ],
        stroke: {
          width: 2,
          curve: "smooth",
        },
        markers: {
          size: 4,
          strokeColors: "#fff",
          strokeWidth: 2,
          hover: {
            size: 7,
          },
        },
      },
      // Rest of the code...
    });






  };


  getTable = async () => {
    const array = await httpClient.get(server.ERRORTable_URL);
    const options = array.data.result.map((d) => ({
      label: d.Table,
    }));
    this.setState({ listTable: options });
  };

  getLine = async () => {
    const array = await httpClient.get(
      server.MC_ERROR_Line_URL + "/" + this.state.Table
    );
    const options = array.data.result.map((d) => ({
      label: d.Line,
    }));
    this.setState({ listLine: options });
  };

  render() {
    console.log(this.state.xAxis);
    console.log(this.state.PivotTable);
    console.log(this.state.report);

    return (
      <div className="content-wrapper">
        <div className="content" >
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  {/* <h1>Daily Auto machine alarm history</h1> */}
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="/Home">Home</a>
                    </li>
                    <li className="breadcrumb-item active">
                      {" "}
                      {/* Daily Auto machine alarm history */}
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="col-12">
          <div style={{ paddingTop: 20 }}>
            {this.state.show_link !== null && (
              <a href="/percen_error">
                <i className="fa fa-arrow-left"></i> back to Cho-ko-tei Dashboard Monitoring
              </a>
            )}
          </div>
        </div>

        <div class="container-fluid">
          <div className="row">
            <div className="col-12">
      
              <div class="content">
                <div class="container-fluid">
                  <div className="row">
                    <div className="col-12">
                     

                        {/* Insert Xbar Chart */}
                        <div className="row" style={{ width: "100%" }}>
                          <div style={{ width: "1%" }}></div>
                          <div
                            className="card card-warning"
                            style={{ width: "99%" }}
                          >
                            <div className="card-body">
                              <div className="row">
                                <div   style={{
                                      width: "100%",
                                      backgroundColor: "#E0FFFF", // Light blue color
                                      border: "1px solid #4682B4", // Border color matching the background color
                                      borderRadius: "10px",
                                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                    }}>
                                  <ReactApexChart
                                    options={this.state.options}
                                    series={this.state.seriesY}
                                    type="bar"
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
          </div>
        </div>

        <div class="container-fluid">
          <div className="row">
            <div className="col-12">
      
              <div class="content">
                <div class="container-fluid">
                  <div className="row">
                    <div className="col-12">
                     

                        {/* Insert Xbar Chart */}
                        <div className="row" style={{ width: "100%" }}>
                          <div style={{ width: "1%" }}></div>
                          <div
                            className="card card-warning"
                            style={{ width: "99%" }}
                          >
                            <div className="card-body">
                              <div className="row">
                                <div   style={{
                                      width: "100%",
                                      backgroundColor: "#E0FFFF", // Light blue color
                                      border: "1px solid #4682B4", // Border color matching the background color
                                      borderRadius: "10px",
                                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                    }}>
                                  <ReactApexChart
                                    options={this.state.options_year}
                                    series={this.state.seriesY_year}
                                    type="bar"
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
          </div>
        </div>
      </div>
    );
  }
}

export default Auto_machine_alarm_history;
