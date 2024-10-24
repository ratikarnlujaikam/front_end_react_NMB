import React, { Component } from "react";
import { key, server } from "../../constants";
import { httpClient } from "../../utils/HttpClient";
import Chart from "react-apexcharts";
import moment from "moment";
import Select from "react-select";
import Swal from "sweetalert2";
import { CSVLink } from "react-csv";

class Shipinfo extends Component {
  constructor(props) {
    super(props);

    //set state
    this.state = {
      year: [],
      Month: [],
      Model: [],
      Line: [],
      insType: [],
      report1: [],
      report2: [],
      report3: [],
      xAxis: [],
      yAxis: [],
      seriesY: [],
      seriesY2: [],
      options: {},
      options2: {},
      chart: [],
      barcodemotor: [],
      lotqa: [],
      Raw_Dat1: [],
      Raw_Dat2: [],
      Raw_Dat3: [],


      optionSelected: null,
      isDisable: false,
    };
  }
  doGetshipinfobylotqa = async () => {
    const result = await httpClient.get(
      server.SHIPINFOBYLOTQA_URL + "/" + this.state.shipinfobylotqa
    );
    let rawData = result.data.listRawData3;
    console.log(rawData);
    for (let i = 1; i < rawData.length; i++) {
      rawData[0].push(...rawData[i]);
    }
    this.setState({ Raw_Dat1: rawData[0] });
    console.log(this.state.Raw_Dat1);
  
    this.setState({
      report1: result.data.result,
      isDisable: false,
    });
  };

  doGetshipinfobyinvoid = async () => {
    const result = await httpClient.get(
      server.SHOPINFOBYINVOID_URL + "/" + this.state.shipinfobyinvoid
    );
    let rawData = result.data.listRawData4;
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
  renderreport1 = () => {
    if (this.state.report1 != null) {
      if (this.state.report1.length > 0) {
        return this.state.report1.map((item) => (
          <tr Align="Center">
            <td align="Left">{item["DO_Num"]}</td>
            <td align="Left">{item["Track_Lot_Num"]}</td>
            <td align="Left">{item["MOQTY"]}</td>
            <td align="Left">{item["Shipment_Date"]}</td>       
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
            <td align="Left">{item["DO_Num"]}</td>
            <td align="Left">{item["Track_Lot_Num"]}</td>
            <td align="Left">{item["MOQTY"]}</td>
            <td align="Left">{item["Shipment_Date"]}</td>       
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
                  <h1>Traceback Ship info by QA/ Invoice </h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="/Home">Home</a>
                    </li>
                    <li className="breadcrumb-item active">
                    Traceback Ship info by QA/ Invoice 
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
                    <label>Input Data</label>
                  </h3>
                </div>
  
                <div className="card-body">
                  <div className="row">
                    {/* //Select Critiria "Model" */}
                    <div className="col-md-4">
                    <label>Search by Lot QA</label>
                      <div className="input-group ">
                        <input
                          value={this.state.shipinfobylotqa}
                          onChange={async (e) => {
                            await this.setState({
                              shipinfobylotqa: e.target.value,
                            });
                          }}
                          type="text"
                          className="form-control"
                          placeholder="Input LotQA"
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
                          this.setState({ shipinfobyinvoid : ('') });                     
                          this.setState({ report2: ('') });
                          this.setState({ isDisable: true });
                          // this.doGetDataReport();
                          Swal.fire({
                            icon: "info",
                            title: "Loading Data",
                            timer: 120000,
                            allowOutsideClick: false,
                            didOpen: async () => {
                              Swal.showLoading();
                              await this. doGetshipinfobylotqa();
                              Swal.close();
                            },
                          }).then(() => {
                            if (this.state.report1.length > 0) {
                              if (
                                this.state.report1[0].Track_Lot_Num.length > 0
                              ) {
                                Swal.fire({
                                  icon: "success",
                                  title: "Success",
                                  text: "Data has been loaded successfully",
                                });
                              } else if (
                                this.state.report1[0].Track_Lot_Num.length == 0
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
                    <div className="col-md-4">
                      <CSVLink
                        data={this.state.Raw_Dat1}
                        filename={"ship info report.csv"}
                      >
                        <button
                          type="button"
                          className="btn btn-primary"
                           style={{ marginTop: 30 }}
                        >
                          Download by LotQA
                        </button>
                      </CSVLink>
                    </div>
                  </div> 
                  <div className="row"  style={{ marginTop: 30 }}>
                    {/* //Select Critiria "Model" */}
                    <div className="col-md-4">
                    <label>Search by Invoice id</label>
                      <div className="input-group ">
                        <input
                          value={this.state.shipinfobyinvoid}
                          onChange={async (e) => {
                            await this.setState({
                              shipinfobyinvoid: e.target.value,
                            });
                          }}
                          type="text"
                          className="form-control"
                          placeholder="Input Invoice ID"
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
                          this.setState({ shipinfobylotqa : ('') });             
                          this.setState({ report1: ('') });
                          this.setState({ isDisable: true });
                          // this.doGetDataReport();
                          Swal.fire({
                            icon: "info",
                            title: "Loading Data",
                            timer: 120000,
                            allowOutsideClick: false,
                            didOpen: async () => {
                              Swal.showLoading();
                              await this.doGetshipinfobyinvoid();
                              Swal.close();
                            },
                          }).then(() => {
                            if (this.state.report2.length > 0) {
                              if (
                                this.state.report2[0].DO_Num.length > 0
                              ) {
                                Swal.fire({
                                  icon: "success",
                                  title: "Success",
                                  text: "Data has been loaded successfully",
                                });
                              } else if (
                                this.state.report2[0].DO_Num.length == 0
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
                    <div className="col-md-4">
                      <CSVLink
                        data={this.state.Raw_Dat2}
                        filename={"ship info  report.csv"}
                      >
                        <button
                          type="button"
                          className="btn btn-primary"
                           style={{ marginTop: 30 }}
                        >
                          Download by Invoice
                        </button>
                      </CSVLink>
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
                          style={{ height: 500 }}
                        >
                          <table className="table table-head-fixed text-nowrap table-hover">
                            <thead>
                              <tr>
                                <th width="150">DO_Num</th>
                                <th width="175">Track_Lot_Num(QA No.)</th>
                                <th width="175">MOQTY</th>
                                <th width="175">Shipment_Date</th>                         
                              </tr>
                            </thead>
                            <tbody>{this.renderreport1()}</tbody>   
                            <tbody>{this.renderreport2()}</tbody>                         
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
    )
  }
}

export default Shipinfo;
