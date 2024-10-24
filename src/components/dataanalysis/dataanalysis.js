import React, { Component } from "react";
import { key, server } from "../../constants";
import { httpClient } from "../../utils/HttpClient";

import moment from "moment";
import Select from "react-select";
import Swal from "sweetalert2";

import { CSVLink } from "react-csv";

class Dataanalysis extends Component {
  constructor(props) {
    super(props);

    //set state
    this.state = {
      //Motor
      data: [],

      // criteria
      model: [],
      line: [],
      process: [],
      machine: [],

      selectDate: moment().add("days", -1).format("yyyy-MM-DD"),
      selectDateRotor: moment().add("days", -1).format("yyyy-MM-DD"),

      // criteria options
      listModel: [],
      listProcess: [],
      listLine: [],
      listMachine: [],

      //Rotor
      dataRotor: [],

      // criteria
      modelRotor: [],
      lineRotor: [],
      processRotor: [],
      machineRotor: [],

      // criteria options
      listmodelRotor: [],
      listprocessRotor: [],
      listlineRotor: [],
      listmachineRotor: [],

      optionSelected: null,
      isDisable: false,
    };
    // this.HandleClick = this.HandleClick.bind(this);
  }

  componentDidMount = async () => {
    this.getModel();
    // this.getProcess();
    // this.getLine();
    // this.getMachine();
    this.getmodelRotor();
    // this.getprocessRotor();
    // this.getlineRotor();
    // this.getmachineRotor();
  };

  doGetMotor = async () => {
    const result = await httpClient.get(
      server.MOTORANALYSIS_URL +
        "/" +
        this.state.selectDate +
        "/" +
        this.state.model +
        "/" +
        this.state.process[0].label +
        "/" +
        this.state.line[0].label +
        "/" +
        this.state.machine[0].label
    );
    this.setState({
      data: result.data.result,
      isDisable: false,
    });
  };

  doGetRotor = async () => {
    let result = await httpClient.get(
      server.ROTORANALYSIS_URL +
        "/" +
        this.state.selectDateRotor +
        "/" +
        this.state.modelRotor +
        "/" +
        this.state.processRotor[0].label +
        "/" +
        this.state.lineRotor[0].label +
        "/" +
        this.state.machineRotor[0].label
    );
    this.setState({
      dataRotor: result.data.result,
      isDisable: false,
    });
  };

  getModel = async () => {
    const array = await httpClient.get(server.MOTORMODEL_URL);
    const options = array.data.result.map((d) => ({
      label: d.Model,
    }));
    this.setState({ listModel: options });
  };

  getProcess = async () => {
    const array = await httpClient.get(
      server.MOTORPROCESS_URL + "/" + this.state.model
    );
    const options = array.data.result.map((d) => ({
      label: d.Process,
    }));
    this.setState({ listProcess: options });
  };

  getLine = async () => {
    const array = await httpClient.get(
      server.MOTORLINE_URL + "/" + this.state.process[0].label + "/" + this.state.model
    );
    const options = array.data.result.map((d) => ({
      label: d.Line,
    }));
    this.setState({ listLine: options });
  };

  getMachine = async () => {
    const array = await httpClient.get(
      server.MOTORMC_URL + "/" + this.state.process[0].label + "/" + this.state.line[0].label + "/" + this.state.model
    );
    const options = array.data.result.map((d) => ({
      label: d.Machine_no,
    }));
    this.setState({ listMachine: options });
  };

  getmodelRotor = async () => {
    const array = await httpClient.get(server.ROTORMODEL_URL);
    const options = array.data.result.map((d) => ({
      label: d.Model,
    }));
    this.setState({ listmodelRotor: options });
  };

  getprocessRotor = async () => {
    const array = await httpClient.get(
      server.ROTORPROCESS_URL + "/" + this.state.modelRotor
    );
    const options = array.data.result.map((d) => ({
      label: d.Process,
    }));
    this.setState({ listprocessRotor: options });
  };

  getlineRotor = async () => {
    const array = await httpClient.get(
      server.ROTORLINE_URL +
        "/" +
        this.state.processRotor[0].label +
        "/" +
        this.state.modelRotor
    );
    const options = array.data.result.map((d) => ({
      label: d.Line,
    }));
    this.setState({ listlineRotor: options });
  };

  getmachineRotor = async () => {
    const array = await httpClient.get(
      server.ROTORMC_URL +
        "/" +
        this.state.processRotor[0].label +
        "/" +
        this.state.lineRotor[0].label
    );
    const options = array.data.result.map((d) => ({
      label: d.Machine,
    }));
    this.setState({ listmachineRotor: options });
  };

  HandleClickSuccess() {
    Swal.fire({
      icon: "success",
      title: "Success",
      type: "success",
      text: "Please click CSV download to proceed.",
    });
  }

  render() {
    return (
      <div class="content-wrapper">
        <div className="content" style={{ paddingTop: 50 }}>
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Data Analysis</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="/Home">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Data Analysis</li>
                  </ol>
                </div>
              </div>
            </div>
            {/* /.container-fluid */}
          </section>
          <div class="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card card-primary card-outline">
                  <div className="card-header">
                    <h3 className="card-title">
                      <label>Select Criteria for Rotor </label>
                    </h3>
                  </div>

                  <div className="card-body">
                    <div className="row">
                      {/* //Select Critiria "Model" */}
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Model</label>
                          <Select
                            options={this.state.listmodelRotor}
                            onChange={async (e) => {
                              await this.setState({ modelRotor: e.label });
                              await this.getprocessRotor();
                              // await this.getlineRotor();
                              await this.setState({ 
                                processRotor: [{ label: "Select Process" }],
                                lineRotor: [{ label: "Select Production line" }],
                                machineRotor: [{ label: "Select Tester No." }],
                              });
                            }}
                            // type="text"
                            // className="form-control"
                            placeholder="Select Model"
                          />
                        </div>
                      </div>

                      {/* //Select Critiria "process" */}
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Data Group</label>
                          <Select
                            options={this.state.listprocessRotor}
                            value={this.state.processRotor[0]}
                            onChange={async (e) => {
                              await this.setState({ processRotor: [] });
                              this.state.processRotor.push({
                                label: e.label,
                              });
                              await this.getlineRotor();
                              await this.getmachineRotor();
                              await this.setState({ 
                                lineRotor: [{ label: "Select Production line" }],
                                machineRotor: [{ label: "Select Tester No." }],
                              });
                            }}
                            // type="text"
                            // className="form-control"
                            placeholder="Select Process"
                          />
                        </div>
                      </div>

                      {/* //Select Critiria "Production line" */}
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Production line</label>
                          <Select
                            options={this.state.listlineRotor}
                            value={this.state.lineRotor[0]}
                            onChange={async (e) => {
                              await this.setState({ lineRotor: [] });
                              this.state.lineRotor.push({
                                label: e.label,
                              });
                              await this.getmachineRotor();
                              await this.setState({ 
                                machineRotor: [{ label: "Select Tester No." }],
                              });
                            }}
                            // type="text"
                            // className="form-control"
                            placeholder="Select Production line"
                          />
                        </div>
                      </div>

                      {/* //Select Critiria "Machine No." */}
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Tester No.</label>
                          <Select
                            options={this.state.listmachineRotor}
                            value={this.state.machineRotor[0]}
                            onChange={async (e) => {
                              await this.setState({ machineRotor: [] });
                              this.state.machineRotor.push({ label: e.label });
                            }}
                            // type="text"
                            // className="form-control"
                            placeholder="Select Tester No."
                          />
                        </div>
                      </div>

                      {/* //Select Select Date */}
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Select Date</label>
                          <input
                            value={this.state.selectDateRotor}
                            onChange={(e) => {
                              this.setState({
                                selectDateRotor: e.target.value,
                              });
                            }}
                            type="date"
                            className="form-control"
                            placeholder="Select Start Date"
                          />
                        </div>
                      </div>

                      {/* Submit button */}
                      <div className="col-md-3">
                        <button
                          disabled={this.state.isDisable}
                          onClick={(e) => {
                            this.setState({ isDisable: true });
                            //this.doGetRotor();
                            Swal.fire({
                              icon: "info",
                              title: "Loading Data",
                              timer: 60000,
                              allowOutsideClick: false,
                              didOpen: async () => {
                                Swal.showLoading();
                                await this.doGetRotor();
                                Swal.close();
                              },
                            }).then(() => {
                              if (this.doGetRotor !== "") {
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
                          style={{ marginTop: 30 }}
                        >
                          Submit
                        </button>
                      </div>                     

                      <div class="col-3">
                        <CSVLink data={this.state.dataRotor}>
                          <button
                            className="btn btn-primary"
                            style={{ marginTop: 30 }}
                          >
                            CSV Download
                          </button>
                        </CSVLink>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content" style={{ paddingTop: 20 }}>
          <div class="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card card-primary card-outline">
                  <div className="card-header">
                    <h3 className="card-title">
                      <label>Select Criteria for Motor </label>
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
                              // await this.getLine();
                              await this.getProcess();
                              // await this.getMachine();
                              await this.setState({ 
                                process: [{ label: "Select Process" }],
                                line: [{ label: "Select Production line" }],
                                machine: [{ label: "Select Tester No." }],
                              });
                            }}
                            // type="text"
                            // className="form-control"
                            placeholder="Select Model"
                          />
                        </div>
                      </div>

                      {/* //Select Critiria "process" */}
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Process</label>
                          <Select
                            options={this.state.listProcess}
                            value={this.state.process[0]}
                            onChange={async (e) => {
                              await this.setState({ process: [] });
                              this.state.process.push({
                                label: e.label,
                              });
                              await this.getLine();
                              await this.getMachine();
                              await this.setState({ 
                                line: [{ label: "Select Production line" }],
                                machine: [{ label: "Select Tester No." }],
                              });
                            }}
                            // type="text"
                            // className="form-control"
                            placeholder="Select Process"
                          />
                        </div>
                      </div>

                      {/* //Select Critiria "Production line" */}
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Production line</label>
                          <Select
                            options={this.state.listLine}
                            value={this.state.line[0]}
                            onChange={async (e) => {
                              await this.setState({ line: [] });
                              this.state.line.push({
                                label: e.label,
                              });
                              await this.getMachine();
                              await this.setState({ 
                                machine: [{ label: "Select Tester No." }],
                              });
                            }}
                            // type="text"
                            // className="form-control"
                            placeholder="Select Production line"
                          />
                        </div>
                      </div>

                      {/* //Select Critiria "Machine No." */}
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Tester No.</label>
                          <Select
                            options={this.state.listMachine}
                            value={this.state.machine[0]}
                            onChange={async (e) => {
                              await this.setState({ machine: [] });
                              this.state.machine.push({ label: e.label });
                            }}
                            // type="text"
                            // className="form-control"
                            placeholder="Select Tester No."
                          />
                        </div>
                      </div>

                      {/* //Select Select Date */}
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Select Date</label>
                          <input
                            value={this.state.selectDate}
                            onChange={(e) => {
                              this.setState({ selectDate: e.target.value });
                            }}
                            type="date"
                            className="form-control"
                            placeholder="Select Start Date"
                          />
                        </div>
                      </div>

                      {/* Submit button */}
                      <div className="col-md-3">
                        <button
                          disabled={this.state.isDisable}
                          onClick={(e) => {
                            this.setState({ isDisable: true });
                            //this.doGetMotor();
                            Swal.fire({
                              icon: "info",
                              title: "Loading Data",
                              timer: 180000,
                              allowOutsideClick: false,
                              didOpen: async () => {
                                Swal.showLoading();
                                await this.doGetMotor();
                                Swal.close();
                              },
                            }).then(() => {
                              if (this.doGetMotor !== "") {
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
                          style={{ marginTop: 30 }}
                        >
                          Submit
                        </button>
                      </div>

                      {/* <div className="col-md-3">
                        <button
                          disabled={this.state.isDisable}
                          onClick={async (e) => {
                            this.setState({ isDisable: true });
                            await this.doGetMotor();
                            await this.HandleClickSuccess();
                          }}
                          type="submit"
                          className="btn btn-primary"
                          style={{ marginTop: 30 }}
                        >
                          Submit
                        </button>
                      </div> */}

                      <div class="col-3">
                        <CSVLink data={this.state.data}>
                          <button
                            className="btn btn-primary"
                            style={{ marginTop: 30 }}
                          >
                            CSV Download
                          </button>
                        </CSVLink>
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

export default Dataanalysis;