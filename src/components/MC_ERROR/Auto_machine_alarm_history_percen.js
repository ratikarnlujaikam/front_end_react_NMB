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
      year: [],
      Table: [],
      EMP: [],
      report: [],
      reportGraph: [],
      xAxis: [],
      xAxis_MC: [],
      seriesY: [],

      seriesY_MC: [],
      seriesCleanroom: [],
      options: {},
      options_MC: {},
      chart: [],
      Table: [],
      Line: [],
      Raw_Dat: [],
      Raw_Dat: [],
      show_link: [],
      startDate: moment().add("days", -7).format("yyyy-MM-DD"), //moment().format("yyyy-MM-DD"), //moment().add("days", -6).format("yyyy-MM-DD"),
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

    if (state && state.lineName) {
      const { lineName } = state;
      this.setState({ Line: lineName }, () => {
        // Inside the callback, both Line and startDate should be updated
        const url =
          server.MC_ERROR_percen_URL +
          "/" +
          this.state.Line +
          "/" +
          this.state.startDate;
        console.log("Request URL:", url);

        // Now, you can proceed with making the HTTP request or perform other actions
        this.doGetDataReport();
      });
    }

    if (state && state.startDate) {
      const { startDate } = state;
      this.setState({ startDate: startDate });
      console.log("startDate", startDate);
    }

    // ดึงค่าพารามิเตอร์ process จาก URL
    const urlParams = new URLSearchParams(window.location.search);

    const lineFromState = urlParams.get("line");
    const startDateParam = urlParams.get("startDate");
    const to_link = urlParams.get("to_link");

    console.log("Line:", lineFromState);
    console.log("StartDate:", startDateParam);
    console.log("this.state.startDate:", this.state.startDate);

    this.setState({ show_link: to_link });

    if (to_link != null) {
      this.setState(
        {
          Line: lineFromState,
          startDate: startDateParam,
        },
        () => {
          const formattedStartDate = encodeURIComponent(startDateParam);
          const url =
            server.MC_ERROR_percen_URL +
            "/" +
            this.state.Line +
            "/" +
            formattedStartDate;

          console.log("Request URL:", url);

          // Now, you can proceed with making the HTTP request or perform other actions
          this.doGetDataReport();
        }
      );
    }
  };

  doGetDataReport = async () => {
    const url =
      server.MC_ERROR_percen_URL +
      "/" +
      this.state.Line +
      "/" +
      this.state.startDate;
    console.log("Request URL:", url);
  
    const result = await httpClient.get(url);
  
    if (!result.data || !result.data.resultGraph) {
      console.error("Invalid data structure.");
      return;
    }
  
    // Add null check for resultGraph
    let xAxis = result.data.resultGraph ? result.data.resultGraph.map(item => item.Date) : [];
    let PivotTable = result.data.PivotTable || [];
    let rawData = result.data.listRawData || [];
  
    if (rawData.length > 1) {
      rawData[0].push(...rawData.slice(1));
    }
  
    this.setState({
      Raw_Dat: rawData[0],
      report: result.data.result,
      reportGraph: result.data.resultGraph,
      reportGraph_MC: result.data.resultGraph_MC,
      xAxis,
      PivotTable,
      isDisable: false,
    });
  
    let seriesData = PivotTable.map((item) => ({
      name: item.name,
      type: "column",
      data: item.data,
    }));
  
    console.log("seriesData", seriesData);
  
    const names = seriesData.map((item) => item.name);
    console.log("Names:", names);
  
    const seriesName = names[0];
    let numColumns = seriesData.filter(item => item.type === "column").length;
  
    console.log("Number of Columns:", numColumns);
  
    // Define y-axis configurations
    let yaxisConfig = [];
  


  
    const month = this.state.startDate.split("-")[1];
    const year = this.state.startDate.split("-")[0];
  
    this.setState({
      seriesY: seriesData || [],
      options: {
        chart: {
          height: 350,
          type: "bar",
          stacked: true,
        },
        title: {
          text: `M/C error monitoring Line: ${this.state.Line} Month: ${month} Year: ${year}`,
          align: "center",
        },
        xaxis: {
          categories: xAxis || [], // Default to an empty array
          labels: {
            style: {
              fontSize: "12px",
              fontWeight: 500,
            },
          },
        },
        yaxis: yaxisConfig || {}, // Ensure yaxisConfig is defined
        tooltip: {
          fixed: {
            enabled: false,
            position: "topLeft",
            offsetY: 30,
            offsetX: 0,
          },
        },
        dataLabels: {
          enabled: true,
          style: {
            fontSize: "13px",
            color: "#000000",
          },
          formatter: function (val) {
            return Number(val).toFixed(2) + "%";
          },
        },
        legend: {
          horizontalAlign: "center",
          offsetX: 40,
        },
        fill: {
          opacity: 0.8,
        },
        colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd"],
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
    });
    
  };
  


  render() {
    console.log(this.state.show_link);
    console.log(this.state.xAxis);
    return (
      <div className="content-wrapper">
        <div className="content" style={{ paddingTop: 70 }}>
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>M/C error Monitoring</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="/Home">Home</a>
                    </li>
                    <li className="breadcrumb-item active">
                      {" "}
                      M/C error Monitoring
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
        </div>
        {this.state.show_link !== "ok" && (
          <a href="/percen_error">
            <i className="fa fa-arrow-left"></i> Back to Cho-ko-tei Dashboard
            Monitoring
          </a>
        )}

        {this.state.show_link == "ok" && (
          <a href="/percen_OEE">
            <i className="fa fa-arrow-left"></i> Back to Realtime OEE Dashboard
            Monitoring
          </a>
        )}

        <div class="container-fluid">
          <div className="row">
            <div className="col-12">
              <div class="content">
                <div class="container-fluid">
                  <div className="row">
                    <div className="col-12">
                      <div className="card card-primary card-outline">
                        {/* Insert Xbar Chart */}
                        <div className="row">
                          <div
                            style={{
                              width: "100%",
                              backgroundColor: "#E0FFFF", // Light blue color
                              border: "1px solid #4682B4", // Border color matching the background color
                              borderRadius: "10px",
                              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                            }}
                          >
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

              {/* Table*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Auto_machine_alarm_history;
