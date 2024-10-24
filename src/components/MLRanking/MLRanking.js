import React, { Component } from "react";
import { key, server } from "../../constants";
import { httpClient } from "../../utils/HttpClient";
import moment from "moment";
import Select from "react-select";
import Swal from "sweetalert2";
import { CSVLink } from "react-csv";
import { CheckboxGroup } from "react-bootstrap";

class MLRanking extends Component {
  constructor(props) {
    super(props);

    //set state
    this.state = {
      //Motor
      data: [],

      // criteria
      model: [],
      productionline: [],
      KPOV: [],
      Table: [],
      report1: [],

      KPIV1: "blank",

      startDate: moment().add("days", -89).format("yyyy-MM-DD"),
      finishDate: moment().add("days", -1).format("yyyy-MM-DD"),

      // criteria options
      listModel: [],
      listKPOV: [],
      listKPIV1: [],

      listProductionline: [],

      optionSelected: null,
      isDisable: false,
      isDisableDays: false,
    };
  }

  componentDidMount = async () => {
    this.getModel();
    this.getKPOV();
    this.getKPIV1();
    this.getProductionline();
  };

  doGetTABLEML = async () => {
    const result = await httpClient.get(
      server.TABLEML3_URL + "/" + this.state.KPIV1
    );
    let rawData = result.data.result; // อัปเดตการเรียกใช้ข้อมูล
    console.log(rawData);
    for (let i = 0; i < rawData.length; i++) {
      rawData[0].push(...rawData[i]);
    }
    this.setState({ Raw_Dat: rawData[0] });
    console.log(this.state.Raw_Dat);

    this.setState({
      report1: result.data.result, // อัปเดตการเรียกใช้ข้อมูล
      isDisable: false,
    });
  };

  renderreport1 = () => {
    if (this.state.Raw_Dat != null) {
      // อัปเดตการเรียกใช้ข้อมูล
      if (this.state.Raw_Dat.length > 0) {
        // อัปเดตการเรียกใช้ข้อมูล
        return this.state.Raw_Dat.map(
          (
            item // อัปเดตการเรียกใช้ข้อมูล
          ) => (
            <tr Align="Center">
              <td align="Center">{item["Parameter"]}</td>
            </tr>
          )
        );
      }
    }
  };

  doGetDataML = async () => {
    let result = await httpClient.get(
      server.MOTORML3_URL +
        "/" +
        this.state.startDate +
        "/" +
        this.state.finishDate +
        "/" +
        this.state.model +
        "/" +
        this.state.productionline[0].label +
        "/" +
        this.state.KPOV +
        "/" +
        this.state.KPIV1
    );

    this.setState({
      data: result.data.result,
      isDisable: false,
    });
  };

  getModel = async () => {
    const response = await httpClient.get(server.MODELML3_URL);
    const options = response.data.result.map((d) => ({
      label: d.Model,
      value: d.Model,
    }));
    this.setState({ listModel: options });
  };

  getProductionline = async () => {
    const response = await httpClient.get(
      server.LINEML3_URL + "/" + this.state.model
    );
    const options = response.data.result.map((d) => ({
      label: d.Line,
      value: d.Line,
    }));
    this.setState({ listProductionline: options });
  };

  getKPOV = async () => {
    const response = await httpClient.get(server.PARAMML3_URL);
    const options = response.data.result.map((d) => ({
      label: d.Parameter,
      value: d.Parameter,
    }));
    this.setState({ listKPOV: options });
  };

  getKPIV1 = async () => {
    const response = await httpClient.get(server.PARAMML3_URL);
    const options = response.data.result.map((d) => ({
      label: d.Parameter,
      value: d.Parameter,
    }));
    this.setState({ listKPIV1: options });
  };
  handleChange = async (event) => {
    const Newevent = Object.keys(event).map((key) => event[key].label);
    const json_string = JSON.stringify(Newevent);
    this.setState({ KPIV1: json_string });
    this.setState({ optionSelected: event });
    console.log(Newevent);
    console.log(json_string);
    console.log(this.state.KPIV1);
  };

  HandleClickSuccess() {
    Swal.fire({
      icon: "success",
      title: "Success",
      type: "success",
      text: "Please click CSV download to proceed.",
    });
  }
  handleReset = () => {
    this.setState({
      itemvalues: [{}],
    });
  };
  
  handleSelectAll = (selectedOptions) => {
    const Newevent = Object.keys(selectedOptions).map(
      (key) => selectedOptions[key].label
    );
    const json_string = JSON.stringify(Newevent);
    if (selectedOptions.length === this.state.listKPIV1.length) {
      this.setState({
        optionSelected: selectedOptions,
        selectAll: true,
        KPIV1: json_string,
      });
    } else {
      this.setState({ optionSelected: selectedOptions, selectAll: false });
    }
  };

  render() {
    console.log(this.state.KPIV1);

    return (
      <div class="content-wrapper">
        <div className="content" style={{ paddingTop: 70 }}>
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Alternative KPIV ranking</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="/Home">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Alternative KPIV ranking</li>
                  </ol>
                </div>
              </div>
            </div>
            {/* /.container-fluid */}
          </section>
        </div>
        <div className="content" style={{ paddingTop: 10 }}>
          <div class="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card card-primary card-outline">
                  <div className="card-header">
                    <h3 className="card-title">
                      <label>Ranking KPIV</label>
                    </h3>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      {/* //Select Critiria "Model" */}
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Model</label>
                          <Select
                            options={this.state.listModel}
                            onChange={async (e) => {
                              await this.setState({ model: e.label });
                              await this.getProductionline();
                              await this.getKPOV();
                              await this.getKPIV1();
                              await this.setState({
                                productionline: [
                                  { label: "Select Production Line" },
                                ],
                              });
                            }}
                            placeholder="Select Model"
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Production line</label>
                          <Select
                            options={this.state.listProductionline}
                            value={this.state.productionline[0]}
                            onChange={async (e) => {
                              await this.setState({ productionline: [] });
                              this.state.productionline.push({
                                label: e.label,
                              });
                            }}
                            // type="text"
                            // className="form-control"
                            placeholder="Select Production Line"
                          />
                        </div>
                      </div>
                      {/* //Select Select Date */}
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Start Date</label>
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
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Finish Date</label>
                          <input
                            value={this.state.finishDate}
                            onChange={(e) => {
                              this.setState({ finishDate: e.target.value });
                            }}
                            type="date"
                            className="form-control"
                          />
                        </div>
                      </div>
                      {/* //Select Critiria "KPIV" */}
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Select Table</label>
                          <Select
                          options={this.state.listTable}
                          onChange={async (e) => {
                            await this.setState({ Table: e.label });
                          }}
                          placeholder="Select Parameter"                       
                          />                                                
                        </div>                     
                      </div> 


                      <div className="col-1"></div>
                      <div className="col-md-2">
                        <button
                          disabled={this.state.isDisable}
                          // type="button"
                          // className="btn btn-info btn-flat"
                          onClick={(e) => {
                            console.log("Transfer KPIVs button clicked");
                            this.setState({ isDisable: true });
                            // this.doGetDataReport();
                            Swal.fire({
                              icon: "info",
                              title: "Loading Data",
                              timer: 120000,
                              allowOutsideClick: false,
                              didOpen: async () => {
                                Swal.showLoading();
                                await this.doGetTABLEML();
                                Swal.close();
                              },
                            }).then(() => {
                              if (this.state.Raw_Dat.length > 0) {
                                if (
                                  this.state.Raw_Dat[0].Parameter.length > 0
                                ) {
                                  Swal.fire({
                                    icon: "success",
                                    title: "Success",
                                    text: "Data has been loaded successfully",
                                  });
                                } else if (
                                  this.state.Raw_Dat[0].Parameter.length == 0
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
                          Transfer KPIVs
                        </button>
                      </div>
                      <div class="content" style={{ marginTop: 30 }}>
                        <div class="container-fluid">
                          <div className="card card-primary">
                            <div className="col-12">
                              {/* /.card-header */}
                              <div
                                className="card-body table-responsive p-0"
                                style={{
                                  height: 300,
                                  position: "relative",
                                  zIndex: 0,
                                }}
                              >
                                <table className="table table-head-fixed text-nowrap table-hover">
                                  <thead>
                                    <tr Align="center">
                                      <th width="500">Parameter</th>
                                    </tr>
                                  </thead>
                                  <tbody>{this.renderreport1()}</tbody>
                                  {/* <tbody>{this.renderreport2()}</tbody>                          */}
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="col-md-3">
                          <div className="form-group">
                            <label> Select KPOV</label>
                            <Select
                              options={this.state.listKPOV}
                              onChange={async (e) => {
                                await this.setState({ KPOV: e.label });
                              }}
                              placeholder="Select Parameter"
                            />
                          </div>
                        </div>

                        <div className="col-md-3">
                          <button
                            disabled={this.state.isDisable}
                            onClick={(e) => {
                              this.setState({ isDisable: true });
                              Swal.fire({
                                icon: "info",
                                title: "Loading Data",
                                timer: 6000000,
                                allowOutsideClick: false,
                                didOpen: async () => {
                                  Swal.showLoading();
                                  await this.doGetDataML();
                                  Swal.close();
                                },
                              }).then(() => {
                                if (this.doGetDataML !== "") {
                                  Swal.fire({
                                    icon: "success",
                                    title: "Success",
                                    type: "success",
                                    text: "Please click CSV download to proceed",
                                  });
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
                            style={{ marginTop: 5 }}
                          >
                            Determine Ranking
                          </button>
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

export default MLRanking;
