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
// import {icon} from "public\dist\img\refresh-arrow.png";

function Refresh() {
  window.location.reload(false);
}

class CheckData extends Component {
  constructor(props) {
    super(props);

    //set state
    this.state = {
      year: [],
      Month: [],
      Model: [],
      Line: [],
      insType: [],
      report: [],
      report2: [],
      reportWEMS:[],
      options: {},
      options2: {},
      chart: [],

      Raw_Dat1: [],
      Raw_Dat2: [],
      Raw_Dat3: [],

      startDate: moment().format("yyyy-MM-DD"), //moment().add("days", -6).format("yyyy-MM-DD"),
      finishDate: moment().format("yyyy-MM-DD"), //moment().format("yyyy-MM-DD"),
      listModel: [],
      listLine: [],

      optionSelected: null,
      isDisable: false,
    };
  }

  componentDidMount = async () => {
    let command = await httpClient.get(server.CHECK_DATA);
    this.setState({ report: command.data.result });

    let rawData = command.data.listRawData;
    console.log(rawData);
    for (let i = 1; i < rawData.length; i++) {
      rawData[0].push(...rawData[i]);
    }
    this.setState({ Raw_Dat1: rawData[0] });
    console.log(this.state.Raw_Dat1);

    this.setState({
      report: command.data.result,
      isDisable: false,
    });

    let command1 = await httpClient.get(server.DYNAMIC_URL);
    this.setState({ report2: command1.data.result });

    let rawData1 = command1.data.listRawData;
    console.log(rawData);
    for (let i = 1; i < rawData1.length; i++) {
      rawData1[0].push(...rawData1[i]);
    }
    this.setState({ Raw_Dat2: rawData1[0] });
    console.log(this.state.Raw_Dat2);

    this.setState({
      report2: command1.data.result,
      isDisable: false,
    });

    let command2 = await httpClient.get(server.CHECKEWMS_URL);
    this.setState({ report2: command1.data.result });

    let rawData2 = command1.data.listRawData;
    console.log(rawData);
    for (let i = 1; i < rawData2.length; i++) {
      rawData2[0].push(...rawData2[i]);
    }
    this.setState({ Raw_Dat2: rawData1[0] });
    console.log(this.state.Raw_Dat2);

    this.setState({
      reportWEMS: command2.data.result,
      isDisable: false,
    });

    let command3 = await httpClient.get(server.CHECKEHIPOT_URL);
    this.setState({ report2: command1.data.result });

    let rawData3 = command1.data.listRawData;
    console.log(rawData);
    for (let i = 1; i < rawData3.length; i++) {
      rawData3[0].push(...rawData3[i]);
    }
    this.setState({ Raw_Dat3: rawData1[0] });
    console.log(this.state.Raw_Dat3);

    this.setState({
      reportHipot: command3.data.result,
      isDisable: false,
    });
  };

  doGetSumOutputCo2 = async () => {
    const result = await httpClient.get(server.CHECK_DATA);
    let rawData = result.data.listRawData;
    console.log(rawData);
    for (let i = 1; i < rawData.length; i++) {
      rawData[0].push(...rawData[i]);
    }
    this.setState({ Raw_Dat1: rawData[0] });
    console.log(this.state.Raw_Dat1);

    this.setState({
      report: result.data.result,
      isDisable: false,
    });
  };

  renderreport1 = () => {
    if (this.state.report != null) {
      if (this.state.report.length > 0) {
        return this.state.report.map((item) => (
          <tr Align="Center">
            <td align="Left">{item["Date"]}</td>
            <td align="Left">{item["Line"]}</td>
            <td align="Left">{item["Model"]}</td>
            <td align="Left">{item["IP"]}</td>
            <td align="Left">{item["Machine_no"]}</td>
            <td align="Left">{item["Master_MC"]}</td>
            <td align="Left" style={{ color: item["MC"] === "OK" ? "green" : "red" }}>
            {item["MC"]}
          </td>
   

          </tr>
        ));
      }
    }
  };
  renderreport2 = () => {
    if (this.state.report2 != null) {
      if (this.state.report2.length > 0) {
        return this.state.report2.map((item) => (
          <tr Align="Center">
            <td>
              {Number(item["Barcode"]).toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </td>
            <td align="Left">{item["Date"]}</td>
            <td align="Left">{item["Model"]}</td>
            <td align="Left">{item["Line"]}</td>
            <td align="Left">{item["IP"]}</td>
            <td align="Left">{item["Machine_no"]}</td>
          </tr>
        ));
      }
    }
  };
  renderreport3 = () => {
    if (this.state.reportWEMS != null) {
      if (this.state.reportWEMS.length > 0) {
        return this.state.reportWEMS.map((item) => (
          <tr Align="Center">
            <td>
              {Number(item["Barcode"]).toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </td>
            <td align="Left">{item["Date"]}</td>
            <td align="Left">{item["Model"]}</td>
            <td align="Left">{item["Line"]}</td>
            <td align="Left">{item["IP"]}</td>
          
          </tr>
        ));
      }
    }
  };
  renderreport4 = () => {
    if (this.state.reportHipot != null) {
      if (this.state.reportHipot.length > 0) {
        return this.state.reportHipot.map((item) => (
          <tr Align="Center">
            <td>
              {Number(item["Barcode"]).toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </td>
      
            <td align="Left">{item["Date"]}</td>
            <td align="Left">{item["Line"]}</td>
            <td align="Left">{item["Model"]}</td>
            <td align="Left">{item["IP"]}</td>
            <td align="Left">{item["Machine_no"]}</td>
          </tr>
        ));
      }
    }
  };

  render() {
    console.log(this.state.report);
    console.log(this.state.listLine);
    return (
      <div className="content-wrapper">
        <div className="content" style={{ paddingTop: 50 }}>
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-3">
                  <h1>CheckData by Table</h1>
                </div>
                <div className="col-sm-4">
                  <button
                    onClick={Refresh}
                    type="button"
                    className="btn btn-primary"
                  >
                    <i className="fas fa-sync" />
                    Refresh
                  </button>
                </div>

                <div className="col-sm-12">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="/Home">Home</a>
                    </li>
                    <li className="breadcrumb-item active">
                      CheckData by Table
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="row">
          <div className="col-sm-5">
            <h3>[DataforAnalysis].[dbo].[Dimension_WR]</h3>
          </div>
          <div className="col-sm-1"></div>
          <h3>[DataforAnalysis].[dbo].[Dynamic_Parallelism_Tester]</h3>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <div class="container-fluid">
              <div className="card card-primary">
                <div
                  className="card-body table-responsive p-0"
                  style={{ height: 600 }}
                >
                  <table className="table table-head-fixed text-nowrap table-hover">
                    <thead>
                      <tr align="center">
                        <th width="30">Date</th>
                        <th width="30">Line</th>
                        <th width="30">Model</th>
                        <th width="30">IP</th>
                        <th width="30">Machine_no</th>
                        <th width="30">Master_MC</th>
                        <th width="30">Status</th>
      

                      </tr>
                    </thead>
                    <tbody>{this.renderreport1()}</tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div class="container-fluid">
              <div class="content">
                <div class="container-fluid">
                  <div className="card card-primary">
                    <div
                      className="card-body table-responsive p-0"
                      style={{ height: 600 }}
                    >
                      <table className="table table-head-fixed text-nowrap table-hover">
                        <thead>
                          <tr align="center">
                            <th width="120">Barcode</th>
                            <th width="120">Date</th>
                            <th width="120">Model</th>
                            <th width="120">Line</th>
                            <th width="120">IP</th>
                            <th width="30">Machine_no</th>
                          </tr>
                        </thead>
                        <tbody>{this.renderreport2()}</tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-5">
            <h3>[DataforAnalysis].[dbo].[EWMS]</h3>
          </div>
          <div className="col-sm-1"></div>
          <h3>[DataforAnalysis].[dbo].[Hipot]</h3>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <div class="container-fluid">
              <div className="card card-primary">
                <div
                  className="card-body table-responsive p-0"
                  style={{ height: 600 }}
                >
                  <table className="table table-head-fixed text-nowrap table-hover">
                    <thead>
                      <tr align="center">
                        <th width="30">Barcode</th>
                        <th width="30">Date</th>
                        <th width="30">Model</th>
                        <th width="30">Line</th>
                        <th width="30">IP</th>
              
                      </tr>
                    </thead>
                    <tbody>{this.renderreport3()}</tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <div class="container-fluid">
              <div class="content">
                <div class="container-fluid">
                  <div className="card card-primary">
                    <div
                      className="card-body table-responsive p-0"
                      style={{ height: 600 }}
                    >
                      <table className="table table-head-fixed text-nowrap table-hover">
                        <thead>
                          <tr align="center">
                   
                            <th width="120">Barcode</th>
                            <th width="120">Date</th>
                            <th width="120">Model</th>
                            <th width="120">Line</th>
                            <th width="120">IP</th>
                            <th width="120">Machine_no</th>
                          </tr>
                        </thead>
                        <tbody>{this.renderreport4()}</tbody>
                      </table>
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

export default CheckData;
