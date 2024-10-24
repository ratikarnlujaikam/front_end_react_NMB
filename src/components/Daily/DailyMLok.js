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

class DailyML extends Component {
  constructor(props) {
    super(props);

    //set state
    this.state = {
      Model: [],
      Line: [],
      Date: [],
      report: [],
      report2: [],
      report3: [],
      report4: [],

      Raw_Dat: [],
      Raw_Dat2: [],
      Raw_Dat3: [],
      Raw_Dat4: [],
      xAxis: [],
      seriesY: [], //fail
      seriesY1: [], //pass
      seriesY5: [], //fail
      seriesY6: [], //pass
      seriesCleanroom: [],
      options: {}, //fail
      options1: {}, //pass
      options5: {}, //fail
      options6: {}, //pass
      chart: [],
      xAxis: [],
      Sfail: [],
      Cfail: [],
      Spass: [],
      Cpass: [],
      startDate: moment().format("yyyy-MM-DD"), //moment().add("days", -6).format("yyyy-MM-DD"),
      finishDate: moment().format("yyyy-MM-DD"), //moment().format("yyyy-MM-DD"),
      listModel: [],
      listLine: [],
      listRawData: [],
      listDate: [],
      listRawData2: [],
      listRawData4: [],

      optionSelected: null,
      isDisable: false,
    };
  }

  componentDidMount = async () => {
    await this.getModel();
    await this.getLine();
    await this.getDate();
  };
  doGetGraphfail = async () => {
    const result = await httpClient.get(
      server.MLDAILY_URL +
        "/" +
        this.state.Model +
        "/" +
        this.state.Line[0].label +
        "/" +
        this.state.startDate
    );

    let xAxis = [];

    for (let index = 0; index < result.data.resultGraph.length; index++) {
      const item = result.data.resultGraph[index];
      await xAxis.push(item.Rangeindex_fail);
    }

    let Sfail = result.data.Support_fail;
    let Cfail = result.data.Confidence_fail;
    // let Spass = result.data.Support_pass;
    // let Cpass = result.data.Confidence_pass;
    // let yDatum = result.data.Confidence;

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
      Sfail,
      Cfail,
      // Spass,
      // Cpass,

      // series,

      isDisable: false,
    });

    await this.setState({
      // let yAxis6 = result.data.LAR;
      // let yInput = result.data.Input;
      // let yReject = result.data.Reject;
      seriesY1: [
        {
          name: "Support _fail",
          type: "column",
          data: Sfail,
        },
        {
          name: "Confidence_fail",
          type: "column",
          data: Cfail,
        },
        // {
        //   name: "Support_pass",
        //   type: "column",
        //   data: Spass,
        // },
        // {
        //   name: "Confidence_pass",
        //   type: "column",
        //   data: Cpass,
        // },
      ],
      options1: {
        chart: {
          height: 400,
          type: "column",
          // stacked: true
        },
        // dataLabels: {
        //   enabled: true
        // },
        // stroke: {
        //   width: [1, 1, 4]
        // },
        title: {
          text: "PFH Fail",
          align: "Conter",
        },
        xaxis: {
          categories: xAxis,
        },
        yaxis: [
          {
            min: 0,
            max: 0.30,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: "#ff0000",
            },
            labels: {
              style: {
                colors: "#ff0000",
              },
            },
            title: {
              text: "Support",
              style: {
                color: "#ff0000",
              },
            },
            tooltip: {
              enabled: true,
            },
          },
          {
            min: 0,
            max: 1.0,
            seriesName: "Income",
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: "#ff6600",
            },
            labels: {
              style: {
                colors: "#ff6600",
              },
            },
            title: {
              text: "Confidence",
              style: {
                color: "#ff6600",
              },
            },
          },
        ],
        colors: ["#ff0000", "#ff6600"],
        tooltip: {
          fixed: {
            enabled: true,
            position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
            offsetY: 30,
            offsetX: 60,
          },
        },
        legend: {
          horizontalAlign: "center",
          offsetX: 40,
        },
      },
    });
  };
  doGetGraphpass = async () => {
    const result = await httpClient.get(
      server.MLDAILY_URL +
        "/" +
        this.state.Model +
        "/" +
        this.state.Line[0].label +
        "/" +
        this.state.startDate
    );

    let xAxis = [];

    for (let index = 0; index < result.data.resultGraphPass.length; index++) {
      const item = result.data.resultGraphPass[index];
      await xAxis.push(item.Rangeindex_pass);
    }

    // let Sfail = result.data.Support_fail;
    // let Cfail = result.data.Confidence_fail;
    let Spass = result.data.Support_pass;
    let Cpass = result.data.Confidence_pass;
    // let yDatum = result.data.Confidence;

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
      // Sfail,
      // Cfail,
      Spass,
      Cpass,

      // series,

      isDisable: false,
    });

    await this.setState({
      // let yAxis6 = result.data.LAR;
      // let yInput = result.data.Input;
      // let yReject = result.data.Reject;
      seriesY: [
        // {
        //   name: "Support _fail",
        //   type: "column",
        //   data: Sfail,
        // },
        // {
        //   name: "Confidence_fail",
        //   type: "column",
        //   data: Cfail,
        // },
        {
          name: "Support_pass",
          type: "column",
          data: Spass,
        },
        {
          name: "Confidence_pass",
          type: "column",
          data: Cpass,
        },
      ],
      options: {
        chart: {
          height: 400,
          type: "column",
          // stacked: true
          responsive: true,
        },
        title: {
          text: "PFH Pass",
          align: "Conter",
        },
        xaxis: {
          categories: xAxis,
        },

        yaxis: [
          {
            min: 0,
            max: 0.30,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: "#009900",
            },
            labels: {
              style: {
                colors: "#009900",
              },
            },

            title: {
              text: "Support",
              style: {
                color: "#009900",
              },
            },
          },
          {
            min: 0,
            max: 1.0,
            seriesName: "Income",
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: "#00e673",
            },
            labels: {
              style: {
                colors: "#00e673",
              },
            },
            title: {
              text: "Confidence",
              style: {
                color: "#00e673",
              },
            },
          },
        ],
        colors: ["#009900", "#00e673"],
        tooltip: {
          fixed: {
            enabled: true,
            position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
            offsetY: 30,
            offsetX: 60,
          },
        },
        legend: {
          horizontalAlign: "center",
          offsetX: 40,
        },
        scales: {
          yaxis: {
            min: 0,
            max: 1.5,
          },
        },
      },
    });
  };
  doGetRulefail = async () => {
    const result = await httpClient.get(
      server.MLDAILY_URL +
        "/" +
        this.state.Model +
        "/" +
        this.state.Line[0].label +
        "/" +
        this.state.startDate
    );

    let xAxis = [];

    for (let index = 0; index < result.data.Graphfail.length; index++) {
      const item = result.data.Graphfail[index];
      await xAxis.push(item.Rangeindex_fail);
    }

    let Datum_probe = result.data.Datum_probe;
    let Max_force = result.data.Max_force;
    let Set_Dim_A = result.data.Set_Dim_A;
    let Set_Dim_B = result.data.Set_Dim_B;
    let Set_Dim_C = result.data.Set_Dim_C;
    let Diecast_Pivot_2 = result.data.Diecast_Pivot_2;

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
      Datum_probe,
      Max_force,
      Set_Dim_A,
      Set_Dim_B,
      Set_Dim_C,
      Diecast_Pivot_2,
      // Sfail,
      // Cfail,

      // series,

      isDisable: false,
    });

    await this.setState({
      seriesY5: [
        {
          name: "Datum_probe",
          type: "scatter",
          data: Datum_probe,
        },
        {
          name: "Max_force",
          type: "scatter",
          data: Max_force,
        },
        {
          name: "Set_Dim_A",
          type: "scatter",
          data: Set_Dim_A,
        },
        {
          name: "Set_Dim_B",
          type: "scatter",
          data: Set_Dim_B,
        },
        {
          name: "Set_Dim_C",
          type: "scatter",
          data: Set_Dim_C,
        },
        {
          name: "Diecast_Pivot_2",
          type: "scatter",
          data: Diecast_Pivot_2,
        },

      ],
      options5: {
        chart: {
          height: 350,
          type: "line",
          toolbar: {
            show: false,
          },
        },

        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
        title: {
          text: "PFH Fail",
          align: "Conter",
        },
        xaxis: {
          categories: xAxis,
          lines: {
            show: true,
          },
        },

        yaxis: [
          {
            min: -5,
            max: 5,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: "#ff6600",
            },
            labels: {
              style: {
                colors: "#ff6600",
              },
            },

            title: {
              text: "Bin",
              style: {
                color: "#ff6600",
              },
            },
          },
        ],
        colors: [
      
          "#3399ff",
         
          "#00ff00",
      
          "#ff1a1a",
       
          "#ffff00",
    
          "#d24dff",

          "#ff9900",
  
         
        ],
        // colors: ["#009900", "#00e673"],
        tooltip: {
          fixed: {
            enabled: true,
            position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
            offsetY: 30,
            offsetX: 60,
          },
        },
        legend: {
          horizontalAlign: "center",
          offsetX: 40,
        },
      },
    });
  };
  doGetRulepass = async () => {
    const result = await httpClient.get(
      server.MLDAILY_URL +
        "/" +
        this.state.Model +
        "/" +
        this.state.Line[0].label +
        "/" +
        this.state.startDate
    );

    let xAxis = [];

    for (let index = 0; index < result.data.GraphPass.length; index++) {
      const item = result.data.GraphPass[index];
      await xAxis.push(item.Rangeindex_pass);
    }

    let Datum_probe_pass = result.data.Datum_probe_pass;
    let Max_force_pass = result.data.Max_force_pass;
    let Set_Dim_A_pass = result.data.Set_Dim_A_pass;
    let Set_Dim_B_pass = result.data.Set_Dim_B_pass;
    let Set_Dim_C_pass = result.data.Set_Dim_C_pass;
    let Diecast_Pivot_2_pass = result.data.Diecast_Pivot_2_pass;

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
      Datum_probe_pass,
      Max_force_pass,
      Set_Dim_A_pass,
      Set_Dim_B_pass,
      Set_Dim_C_pass,
      Diecast_Pivot_2_pass,
      // Sfail,
      // Cfail,

      // series,

      isDisable: false,
    });

    await this.setState({
      seriesY6: [
        {
          name: "Datum probe",
          type: "scatter",
          data: Datum_probe_pass,
        },
        {
          name: "Max force",
          type: "scatter",
          data: Max_force_pass,
        },
        {
          name: "Set Dim A",
          type: "scatter",
          data: Set_Dim_A_pass,
        },
        {
          name: "Set Dim B",
          type: "scatter",
          data: Set_Dim_B_pass,
        },
        {
          name: "Set Dim C",
          type: "scatter",
          data: Set_Dim_C_pass,
        },
        {
          name: "Diecast Pivot 2",
          type: "scatter",
          data: Diecast_Pivot_2_pass,
        },
      ],
      options6: {
        chart: {
          height: 350,
          type: "line",
          toolbar: {
            show: false,
          },
        },

        xaxis: {
          lines: {
            show: false,
          },
        },
        yaxis: {
          lines: {
            show: true,
          },
        },
        title: {
          text: "PFH Pass",
          align: "Conter",
        },
        xaxis: {
          categories: xAxis,
          lines: {
            show: true,
          },
        },

        yaxis: [
          {
            min: -5,
            max: 5,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: "#009900",
            },
            labels: {
              style: {
                colors: "#009900",
              },
            },

            title: {
              text: "Bin",
              style: {
                color: "#009900",
              },
            },
          },
        ],
        colors: [
      
          "#3399ff",
         
          "#00ff00",
      
          "#ff1a1a",
       
          "#ffff00",
    
          "#d24dff",

          "#ff9900",
  
         
        ],
        // colors: ["#009900", "#00e673"],
        tooltip: {
          fixed: {
            enabled: true,
            position: "topLeft", // topRight, topLeft, bottomRight, bottomLeft
            offsetY: 30,
            offsetX: 60,
          },
        },
        legend: {
          horizontalAlign: "center",
          offsetX: 40,
        },
      },
    });
  };
  doGetaccuracyML = async () => {
    const result = await httpClient.get(
      server.MLACCURACY_URL +
        "/" +
        this.state.Model +
        "/" +
        this.state.Line[0].label +
        "/" +
        this.state.startDate
    );
    let rawData = result.data.listRawData2;
    console.log(rawData);
    for (let i = 1; i < rawData.length; i++) {
      rawData[0].push(...rawData[i]);
    }
    this.setState({ Raw_Dat2: rawData[0] });
    console.log(this.state.Raw_Dat2);

    this.setState({
      report2: result.data.result,
      isDisable: false,
    });
  };
  doGetReference = async () => {
    const result = await httpClient.get(server.REFERENCE_URL);
    let rawData = result.data.listRawData3;
    console.log(rawData);
    for (let i = 1; i < rawData.length; i++) {
      rawData[0].push(...rawData[i]);
    }
    this.setState({ Raw_Dat3: rawData[0] });
    console.log(this.state.Raw_Dat3);

    this.setState({
      report3: result.data.result,
      isDisable: false,
    });
  };

  doGetDate = async () => {
    const result = await httpClient.get(
      server.MLDAILYDATE_URL +
        "/" +
        this.state.Model +
        "/" +
        this.state.Line[0].label +
        "/" +
        this.state.startDate
    );
    let rawData = result.data.listRawData4;
    console.log(rawData);
    for (let i = 1; i < rawData.length; i++) {
      rawData[0].push(...rawData[i]);
    }
    this.setState({ Raw_Dat4: rawData[0] });
    console.log(this.state.Raw_Dat4);

    this.setState({
      report4: result.data.result,
      isDisable: false,
    });
  };



  renderreport = () => {
    if (this.state.report != null) {
      if (this.state.report.length > 0) {
        return this.state.report.map((item) => (
          <tr Align="center">
            <td>{item["Rangeindex"]}</td>
            <td>{item["Datum_probe"]}</td>
            <td>{item["Max_force"]}</td>
            <td>{item["Set_Dim_A"]}</td>
            <td>{item["Set_Dim_B"]}</td>
            <td>{item["Set_Dim_C"]}</td>
            <td>{item["Diecast_Pivot_2"]}</td>
            <td>{item["Projection"]}</td>
            <td align="RIGHT">
              {Number(item["Support"]).toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </td>
            <td align="RIGHT">
              {Number(item["Confidence"]).toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </td>
          </tr>
        ));
      }
    }
  };
  renderreport1 = () => {
    if (this.state.report2 != null) {
      if (this.state.report2.length > 0) {
        return this.state.report2.map((item) => (
          <tr Align="center">
            <td>{item["Details"]}</td>
            <td>
              {Number(item["Procision"]).toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </td>
            <td>
              {Number(item["recall"]).toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </td>
            <td>
              {Number(item["f1_score"]).toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </td>
            <td>{item["support"]}</td>
          </tr>
        ));
      }
    }
  };
  renderreport2 = () => {
    if (this.state.report3 != null) {
      if (this.state.report3.length > 0) {
        return this.state.report3.map((item) => (
          <tr Align="center">
            <td>{item["Bin2"]}</td>
            <td>{item["Datum_probe_Min"]}</td>
            <td>{item["Datum_probe_Max"]}</td>
            <td>{item["Max_force_Min"]}</td>
            <td>{item["Max_force_Max"]}</td>
            <td>{item["Set_Dim_A_Min"]}</td>
            <td>{item["Set_Dim_A_Max"]}</td>
            <td>{item["Set_Dim_B_Min"]}</td>
            <td>{item["Set_Dim_B_Max"]}</td>
            <td>{item["Set_Dim_C_Min"]}</td>
            <td>{item["Set_Dim_C_Max"]}</td>
            <td>{item["Pivot_2_Min"]}</td>
            <td>{item["Pivot_2_Max"]}</td>
            <td>{item["KPOV_Min"]}</td>
            <td>{item["KPOV_Max"]}</td>
          </tr>
        ));
      }
    }
  };
  renderreport4 = () => {
    if (this.state.report4 != null) {
      if (this.state.report4.length > 0) {
        return this.state.report4.map((item) => (
          <tr Align="center">
            <td>{item["Date"]}</td>
            <td>{item["betweenDate"]}</td>
            <td>{item["Model"]}</td>
            <td>{item["Line"]}</td>
          </tr>
        ));
      }
    }
  };

  getModel = async () => {
    const array = await httpClient.get(server.MLMODEL_URL);
    const options = array.data.result.map((d) => ({
      label: d.Model,
    }));
    this.setState({ listModel: options });
  };

  getLine = async () => {
    const array = await httpClient.get(
      server.MLLINE_URL + "/" + this.state.Model
    );
    const options = array.data.result.map((d) => ({
      label: d.Line,
    }));
    this.setState({ listLine: options });
  };
  getDate = async () => {
    const array = await httpClient.get(server.MLDATE_URL);
    const options = array.data.result.map((d) => ({
      label: d.Date,
    }));
    this.setState({ listDate: options });
  };
  render() {
    console.log(this.state.report4);
    return (
      <div className="content-wrapper">
        <div className="content" style={{ paddingTop: 50 }}>
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>ML Monitoring Type2 </h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="/Home">Home</a>
                    </li>
                    <li className="breadcrumb-item active">ML Monitoring Type2</li>
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
                    <div className="col-md-2">
                      <div className="form-group">
                        <label>Model</label>
                        <Select
                          options={this.state.listModel}
                          onChange={async (e) => {
                            await this.setState({ Model: e.label });
                            await this.getLine();
                            await this.getDate();
                            await this.setState({
                              Line: [{ label: "Select line" }],
                            });
                            await this.setState({
                              Date: [{ label: "Select Date" }],
                            });
                            // await this.setState({
                            //   EMP: [{ label: "Select EMP" }],
                            // });
                          }}
                          // type="text"
                          // className="form-control"
                          placeholder="Select Model"
                        />
                      </div>
                    </div>
                    {/* //Select Critiria "Month" */}
                    <div className="col-md-2">
                      <div className="form-group">
                        <label>Line</label>
                        <Select
                          options={this.state.listLine}
                          value={this.state.Line[0]}
                          onChange={async (e) => {
                            await this.setState({ Line: [] });
                            this.state.Line.push({ label: e.label });
                          }}
                          // type="text"
                          // className="form-control"
                          placeholder="Select Line"
                        />
                      </div>
                    </div>
                    {/* //Select Start Date
                    <div className="col-md-2">
                      <div className="form-group">
                        <label>Date</label>
                        <Select
                          options={this.state.listDate}
                          value={this.state.Date[0]}
                          onChange={async (e) => {
                            await this.setState({ Date: [] });
                            this.state.Date.push({ label: e.label });
                          }}
                          // type="text"
                          // className="form-control"
                          placeholder="Select Date"
                        />
                      </div>
                    </div> */}
                    {/* //Select Start Date */}
                    <div className="col-md-2">
                      <div className="form-group">
                        <label>
                          Select Date &nbsp;
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
                              await this.doGetGraphfail();
                              await this.doGetaccuracyML();
                              await this.doGetReference();
                              await this.doGetGraphpass();
                              await this.doGetDate();
                              await this.doGetRulefail();
                              await this.doGetRulepass();
                              Swal.close();
                            },
                          }).then(() => {
                            if (this.state.report.length > 0) {
                              if (this.state.report[0].Model.length > 0) {
                                Swal.fire({
                                  icon: "success",
                                  title: "Success",
                                  text: "Data has been loaded successfully",
                                });
                              } else if (
                                this.state.report[0].Model.length == 0
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
                        filename={"DailyML report.csv"}
                      >
                        <button
                          type="button"
                          className="btn btn-primary"
                          style={{ marginTop: 30 }}
                        >
                          Download report
                        </button>
                      </CSVLink>
                    </div>
                    <div className="col-md-2">
                      <CSVLink
                        data={this.state.Raw_Dat2}
                        filename={"Detail accuracy.csv"}
                      >
                        <button
                          type="button"
                          className="btn btn-primary"
                          style={{ marginTop: 30 }}
                        >
                          Download accuracy
                        </button>
                      </CSVLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="card card-primary card-outline">
                    {/* Chart Title */}
                    <div className="card-header">
                      <h3 className="card-title">
                        <i className="far fa-chart-bar" />
                        <label>Rule Efficiency Ranking</label>
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
                                options={this.state.options1}
                                series={this.state.seriesY1}
                                type="line"
                                height={200}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="card card-primary card-outline">
                    {/* Chart Title */}
                    <div className="card-header">
                      <h3 className="card-title">
                        <i className="far fa-chart-bar" />
                        <label>Rule Efficiency Ranking</label>
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
                                height={200}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="card card-primary card-outline">
                    {/* Chart Title */}
                    <div className="card-header">
                      <h3 className="card-title">
                        <i className="far fa-chart-bar" />
                        <label>Rule Efficiency Ranking</label>
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
                                options={this.state.options5}
                                series={this.state.seriesY5}
                                type="scatter"
                                height={350}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="card card-primary card-outline">
                    {/* Chart Title */}
                    <div className="card-header">
                      <h3 className="card-title">
                        <i className="far fa-chart-bar" />
                        <label>Rule Efficiency Ranking</label>
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
                                options={this.state.options6}
                                series={this.state.seriesY6}
                                type="scatter"
                                height={350}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  {/* /.card-header */}
                  <div className="card card-primary">
                    <div
                      className="card-body table-responsive p-0"
                      style={{ height: 450 }}
                    >
                      <table className="table table-head-fixed text-nowrap table-hover">
                        <thead>
                          <tr align="center">
                            {/* <th width="10">Rule No.</th>
                                <th width="100">Date</th>
                                <th width="100">Range data</th>
                                <th width="100">Model</th>
                                <th width="100">Line</th> */}
                            <th width="10">Rule No.</th>
                            <th width="100">Datum probe</th>
                            <th width="100">Max force</th>
                            <th width="100">Set Dim A</th>
                            <th width="100">Set Dim B</th>
                            <th width="100">Set Dim C</th>
                            <th width="100">Diecast Pivot 2</th>
                            <th width="100">Projection</th>
                            <th width="100">Support</th>
                            <th width="100">Confidence</th>
                          </tr>
                        </thead>
                        <tbody>{this.renderreport()}</tbody>
                      </table>
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
                            style={{ height: 100 }}
                          >
                            <table className="table table-head-fixed text-nowrap table-hover">
                              <thead>
                                <tr align="center">
                                  <th width="50">Date</th>
                                  <th width="50">Range data</th>
                                  <th width="50">Model</th>
                                  <th width="50">Line</th>
                                </tr>
                              </thead>
                              <tbody>{this.renderreport4()}</tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="content">
                    <li>Prediction performance(Confusion Matrix)</li>
                    <div class="container-fluid">
                      <div className="card card-primary">
                        <div className="row">
                          <div className="col-12">
                            {/* /.card-header */}
                            <div
                              className="card-body table-responsive p-0"
                              style={{ height: 300 }}
                            >
                              <table className="table table-head-fixed text-nowrap table-hover">
                                <thead>
                                  <tr align="center">
                                    <th width="80">Details</th>
                                    <th width="80">Precision</th>
                                    <th width="80">recall</th>
                                    <th width="80">f1-score</th>
                                    <th width="80">Support</th>
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

              <h3>Data Classification table</h3>
              {/* <div class="content"> */}
              <div class="container-fluid">
                <div className="card card-primary">
                  <div className="row">
                    <div className="col-12">
                      {/* /.card-header */}
                      <div
                        // className="card-body table-responsive p-0"
                        style={{ height: 400 }}
                      >
                        {/* <table className="table table-head-fixed text-nowrap table-hover"> */}
                        <h3></h3>
                        <thead>
                          <tr align="center">
                            <th width="80">Bin</th>
                            <th width="100">Datum probe </th>
                            <th width="100">Datum probe </th>
                            <th width="100">Max force</th>
                            <th width="100">Max force</th>
                            <th width="100">Set Dim A </th>
                            <th width="100">Set Dim A </th>
                            <th width="100">Set Dim B </th>
                            <th width="100">Set Dim B </th>
                            <th width="100">Set Dim C </th>
                            <th width="100">Set Dim C </th>
                            <th width="120">Diecast Pivot 2</th>
                            <th width="120">Diecast Pivot 2</th>
                            <th width="120">Projection Flange Height</th>
                            <th width="120">Projection Flange Height</th>
                          </tr>
                        </thead>
                        <thead>
                          <tr align="center"></tr>
                        </thead>

                        <tr align="center">
                          <th width="80"> </th>
                          <th width="80">Min</th>
                          <th width="80">Max</th>
                          <th width="80">Min</th>
                          <th width="80">Max</th>
                          <th width="80">Min</th>
                          <th width="80">Max</th>
                          <th width="80">Min</th>
                          <th width="80">Max</th>
                          <th width="80">Min</th>
                          <th width="80">Max</th>
                          <th width="80">Min</th>
                          <th width="80">Max</th>
                          <th width="80">Min</th>
                          <th width="80">Max</th>
                        </tr>

                        <tbody>{this.renderreport2()}</tbody>
                        {/* </table> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default DailyML;
