import React, { Component } from "react";
import { key, server } from "../../constants";
import { httpClient } from "../../utils/HttpClient";
import axios from "axios";
import moment from "moment";
import Select from "react-select";
import Swal from "sweetalert2";
import dataanalysis from "../dataanalysis";

class Information extends Component {
  constructor(props) {
    super(props);

    //set state
    this.state = {
      Fullname: [],
      Model: [],
      Part: [],
      Parameter: [],
      Machine: [],
      USL: "",
      CL: "",
      LSL: "",

      Modelcontrol: [],
      Partcontrol: [],
      Paracontrol: [],
      Linecontrol: [],
      StartCalcDate: moment().add("days", -90).format("yyyy-MM-DD"),
      FinishCalcDate: moment().format("yyyy-MM-DD"),

      ModelEmail: [],
      PartEmail: [],
      ParaEmail: [],
      LineEmail: [],
      Email: [],

      // criteria specification control options
      listModel: [],
      listModelName: [],
      listParameter: [],
      listPart: [],
      listMachine: [],

      // criteria specification control options
      listModelforcontrollimit: [],
      listPartforcontrollimit: [],
      listParaforcontrollimit: [],
      listLineforcontrollimit: [],

      // email alarm
      listModelEmail: [],
      listPartEmail: [],
      listParaEmail: [],
      listLineEmail: [],

      username: "",
    };
  }

  componentDidMount = () => {
    this.getModel();
    this.getModelName();
    this.getParameter();
    this.getPart();
    this.getMachine();
    this.getModelforcontrollimit();
    this.getPartforcontrollimit();
    this.getParaforcontrollimit();
    this.getModelEmail();
    this.getPartEmail();
    this.getParaEmail();
    // this.getLineforcontrollimit();
  };

  doSQLupdate = async () => {
    const data = {
      Fullname: this.state.Fullname,
      Model: this.state.Model,
      Part: this.state.Part,
      Parameter: this.state.Parameter,
      Machine: this.state.Machine,
      USL: this.state.USL,
      CL: this.state.CL,
      LSL: this.state.LSL,
      empNumber: localStorage.getItem(key.USER_NAME),
    };
    console.log(data);

    let SQLupdate = await axios.post(server.SPECCONTROL_URL, data);
    console.log(SQLupdate);

    this.setState({
      data: SQLupdate.data.result,
    });
  };

  doCalControlLimit = async () => {
    //การประกาศตัว const ต้องเป็นชื่อตรงตามหัว column ใน table
    const dataControl = {
      Model: this.state.Modelcontrol,
      Parameter: this.state.Paracontrol,
      Line: this.state.Linecontrol,
      StartCalcDate: this.state.StartCalcDate,
      FinishCalcDate: this.state.FinishCalcDate,
      empNumber: localStorage.getItem(key.USER_NAME),
    };
    console.log(dataControl);

    let SQLupdate = await axios.post(server.CONTROLLIMIT_URL, dataControl);
    console.log(SQLupdate);

    // this.setState({
    //   data: SQLupdate.data.result,
    // });
  };

  doEmailAlarm = async () => {
    //การประกาศตัว const ต้องเป็นชื่อตรงตามหัว column ใน table
    const dataEmail = {
      Model: this.state.ModelEmail,
      Parameter: this.state.ParaEmail,
      Line: this.state.LineEmail,
      Email: this.state.Email,
      empNumber: localStorage.getItem(key.USER_NAME),
    };
    console.log(dataEmail);

    let SQLupdate = await axios.post(server.EMAILALARM_URL, dataEmail);
    console.log(SQLupdate);

    // this.setState({
    //   data: SQLupdate.data.result,
    // });
  };

  //Specification control
  getModel = async () => {
    const array = await httpClient.get(server.SPECMODEL_URL);
    const options = array.data.result.map((d) => ({
      label: d.Fullname,
    }));
    this.setState({ listModel: options });
  };

  getModelName = async () => {
    const array = await httpClient.get(
      server.SPECMODELNAME_URL + "/" + this.state.Fullname
    );
    const options = array.data.result.map((d) => ({
      label: d.Model,
    }));
    this.setState({ listModelName: options });
  };

  getPart = async () => {
    const array = await httpClient.get(
      server.SPECPART_URL + "/" + this.state.Fullname
    );
    const options = array.data.result.map((d) => ({
      label: d.Part,
    }));
    this.setState({ listPart: options });
  };

  getParameter = async () => {
    const array = await httpClient.get(
      server.SPECPARA_URL + "/" + this.state.Part
    );
    const options = array.data.result.map((d) => ({
      label: d.Parameter,
    }));
    this.setState({ listParameter: options });
  };

  getMachine = async () => {
    const array = await httpClient.get(
      server.SPECMC_URL + "/" + this.state.Parameter
    );
    const options = array.data.result.map((d) => ({
      label: d.Machine,
    }));
    this.setState({ listMachine: options });
  };

  //controllimit
  getModelforcontrollimit = async () => {
    const array = await httpClient.get(server.MODELCONTROL_URL);
    const options = array.data.result.map((d) => ({
      label: d.Model,
    }));
    this.setState({ listModelforcontrollimit: options });
  };

  getPartforcontrollimit = async () => {
    const array = await httpClient.get(
      server.PARTCONTROL_URL + "/" + this.state.Modelcontrol
    );
    const options = array.data.result.map((d) => ({
      label: d.Part,
    }));
    this.setState({ listPartforcontrollimit: options });
  };

  getParaforcontrollimit = async () => {
    const array = await httpClient.get(
      server.PARACONTROL_URL + "/" + this.state.Partcontrol
    );
    const options = array.data.result.map((d) => ({
      label: d.Parameter,
    }));
    this.setState({ listParaforcontrollimit: options });
  };

  getLineforcontrollimit = async () => {
    const array = await httpClient.get(
      server.LINECONTROL_URL +
        "/" +
        this.state.Modelcontrol +
        "/" +
        this.state.Partcontrol
    );
    // console.log(array.data.result);
    const options = array.data.result.map((d) => ({
      label: d.Line,
    }));
    this.setState({ listLineforcontrollimit: options });
  };

  //Email Alarm
  getModelEmail = async () => {
    const array = await httpClient.get(server.MODELEMAIL_URL);
    const options = array.data.result.map((d) => ({
      label: d.Model,
    }));
    this.setState({ listModelEmail: options });
  };

  getPartEmail = async () => {
    const array = await httpClient.get(
      server.PARTEMAIL_URL + "/" + this.state.ModelEmail
    );
    const options = array.data.result.map((d) => ({
      label: d.Part,
    }));
    this.setState({ listPartEmail: options });
  };

  getParaEmail = async () => {
    const array = await httpClient.get(
      server.PARAEMAIL_URL + "/" + this.state.PartEmail
    );
    const options = array.data.result.map((d) => ({
      label: d.Parameter,
    }));
    this.setState({ listParaEmail: options });
  };

  getLineEmail = async () => {
    const array = await httpClient.get(
      server.LINEEMAIL_URL +
        "/" +
        this.state.ModelEmail +
        "/" +
        this.state.PartEmail
    );
    // console.log(array.data.result);
    const options = array.data.result.map((d) => ({
      label: d.Line,
    }));
    this.setState({ listLineEmail: options });
  };

  HandleClickSuccess() {
    Swal.fire({
      icon: "success",
      title: "Submitted Successfully",
      type: "success",
    });
  }

  render() {
    console.log(this.state.StartCalcDate);
    console.log(this.state.FinishCalcDate);
    console.log(this.state.Timestamp);

    return (
      <div class="content-wrapper">
        <div className="content" style={{ paddingTop: 70 }}>
          <div class="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card card-primary card-outline">
                  <div className="card-header">
                    <h3 className="card-title">
                      <label>Specification control</label>
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
                              await this.setState({ Fullname: e.label });
                              await this.getModelName();
                              await this.getPart();
                            }}
                            // type="text"
                            // className="form-control"
                            placeholder="Select Model"
                          />
                        </div>
                      </div>

                      {/* //Select Critiria "Model Name */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>Model Name</label>
                          <Select
                            options={this.state.listModelName}
                            onChange={async (e) => {
                              await this.setState({ Model: e.label });
                            }}
                            // type="text"
                            // className="form-control"
                            placeholder="Select Model Name"
                          />
                        </div>
                      </div>

                      {/* //Select Critiria "Part" */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>Part</label>
                          <Select
                            options={this.state.listPart}
                            onChange={async (e) => {
                              await this.setState({ Part: e.label });
                              await this.getParameter();
                            }}
                            // type="text"
                            // className="form-control"
                            placeholder="Select Part"
                          />
                        </div>
                      </div>

                      {/* //Select Critiria "Parameter" */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>Parameter</label>
                          <Select
                            options={this.state.listParameter}
                            onChange={async (e) => {
                              await this.setState({ Parameter: e.label });
                              await this.getMachine();
                            }}
                            // type="text"
                            // className="form-control"
                            placeholder="Select Parameter"
                          />
                        </div>
                      </div>

                      {/* //Select Critiria "Machine" */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>Machine</label>
                          <Select
                            options={this.state.listMachine}
                            onChange={async (e) => {
                              await this.setState({ Machine: e.label });
                            }}
                            // type="text"
                            // className="form-control"
                            placeholder="Select Part"
                          />
                        </div>
                      </div>

                      {/* "Enter LSL value" */}

                      <div className="col-md-2">
                        <div className="form-group">
                          <label>LSL </label>
                          <input
                            value={this.state.LSL}
                            onChange={(e) => {
                              this.setState({ LSL: e.target.value });
                            }}
                            type="number"
                            className="form-control"
                            placeholder="Enter LSL value"
                          />
                        </div>
                      </div>

                      {/* "Enter CL value"*/}

                      <div className="col-md-2">
                        <div className="form-group">
                          <label>CL</label>
                          <input
                            value={this.state.CL}
                            onChange={(e) => {
                              this.setState({ CL: e.target.value });
                            }}
                            type="number"
                            className="form-control"
                            placeholder="Enter CL value"
                          />
                        </div>
                      </div>

                      {/*"Enter USL value" */}

                      <div className="col-md-2">
                        <div className="form-group">
                          <label>USL</label>
                          <input
                            value={this.state.USL}
                            onChange={(e) => {
                              this.setState({ USL: e.target.value });
                            }}
                            type="number"
                            className="form-control"
                            placeholder="Enter USL value"
                          />
                        </div>
                      </div>

                      {/* Submit button */}
                      <div className="col-md-3">
                        <button
                          onClick={(e) => {
                            this.doSQLupdate();
                            this.HandleClickSuccess();
                          }}
                          type="submit"
                          className="btn btn-primary"
                          style={{ marginTop: 30 }}
                        >
                          Submit
                        </button>
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
                <div className="card card-primary card-outline">
                  <div className="card-header">
                    <h3 className="card-title">
                      <label>Control Limit calculated period</label>
                    </h3>
                  </div>

                  <div className="card-body">
                    <div className="row">
                      {/* //Select Critiria "Model Name */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>Model</label>
                          <Select
                            options={this.state.listModelforcontrollimit}
                            onChange={async (e) => {
                              await this.setState({ Modelcontrol: e.label });
                              await this.getPartforcontrollimit();
                              await this.getLineforcontrollimit();
                            }}
                            // type="text"
                            // className="form-control"
                            placeholder="Select Model Name"
                          />
                        </div>
                      </div>

                      {/* //Select Critiria "Part" */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>Part</label>
                          <Select
                            options={this.state.listPartforcontrollimit}
                            onChange={async (e) => {
                              await this.setState({ Partcontrol: e.label });
                              await this.getParaforcontrollimit();
                              await this.getLineforcontrollimit();
                            }}
                            // type="text"
                            // className="form-control"
                            placeholder="Select Part"
                          />
                        </div>
                      </div>

                      {/* //Select Critiria "Parameter" */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>Parameter</label>
                          <Select
                            options={this.state.listParaforcontrollimit}
                            onChange={async (e) => {
                              await this.setState({ Paracontrol: e.label });
                            }}
                            // type="text"
                            // className="form-control"
                            placeholder="Select Parameter"
                          />
                        </div>
                      </div>

                      {/* //Select Critiria "Production line" */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>Production line</label>
                          <Select
                            options={this.state.listLineforcontrollimit}
                            onChange={async (e) => {
                              await this.setState({ Linecontrol: e.label });
                            }}
                            // type="text"
                            // className="form-control"
                            placeholder="Select Production line"
                          />
                        </div>
                      </div>

                      {/* //Select Select Date */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>Start Date</label>
                          <input
                            value={this.state.StartCalcDate}
                            onChange={(e) => {
                              this.setState({ StartCalcDate: e.target.value });
                            }}
                            type="date"
                            className="form-control"
                            placeholder="Start Date"
                          />
                        </div>
                      </div>

                      {/* //Select Select Date */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>Finish Date</label>
                          <input
                            value={this.state.FinishCalcDate}
                            onChange={(e) => {
                              this.setState({ FinishCalcDate: e.target.value });
                            }}
                            type="date"
                            className="form-control"
                            placeholder="Finish Date"
                          />
                        </div>
                      </div>

                      {/* Submit button */}
                      <div className="col-md-3">
                        <button
                          onClick={(e) => {
                            this.doCalControlLimit();
                            this.HandleClickSuccess();
                          }}
                          type="submit"
                          className="btn btn-primary"
                          style={{ marginTop: 30 }}
                        >
                          Submit
                        </button>
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
                <div className="card card-primary card-outline">
                  <div className="card-header">
                    <h3 className="card-title">
                      <label>Email Alarm Receivers</label>
                    </h3>
                  </div>

                  <div className="card-body">
                    <div className="row">
                      {/* //Select Critiria "Model" */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>Model</label>
                          <Select
                            options={this.state.listModelEmail}
                            onChange={async (e) => {
                              await this.setState({ ModelEmail: e.label });
                              await this.getPartEmail();
                              await this.getLineEmail();
                            }}
                            // type="text"
                            // className="form-control"
                            placeholder="Select Model"
                          />
                        </div>
                      </div>
                      {/* //Select Critiria "Part" */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>Part</label>
                          <Select
                            options={this.state.listPartEmail}
                            onChange={async (e) => {
                              await this.setState({ PartEmail: e.label });
                              await this.getParaEmail();
                              await this.getLineEmail();
                            }}
                            // type="text"
                            // className="form-control"
                            placeholder="Select Model"
                          />
                        </div>
                      </div>
                      {/* //Select Critiria "Parameter" */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>Parameter</label>
                          <Select
                            options={this.state.listParaEmail}
                            onChange={async (e) => {
                              await this.setState({ ParaEmail: e.label });
                            }}
                            // type="text"
                            // className="form-control"
                            placeholder="Select Parameter"
                          />
                        </div>
                      </div>
                      {/* //Select Critiria "Line" */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>Production Line</label>
                          <Select
                            options={this.state.listLineEmail}
                            onChange={async (e) => {
                              await this.setState({ LineEmail: e.label });
                            }}
                            // type="text"
                            // className="form-control"
                            placeholder="Select Parameter"
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <label>Receivers</label>
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="fas fa-envelope" />
                            </span>
                          </div>
                          <input
                            value={this.state.Email}
                            onChange={(e) => {
                              this.setState({ Email: e.target.value });
                            }}
                            type="email"
                            className="form-control"
                            placeholder="Email"
                          />
                        </div>
                      </div>

                      {/* Submit button */}
                      <div className="col-md-3">
                        <button
                          onClick={(e) => {
                            this.doEmailAlarm();
                            this.HandleClickSuccess();
                            // this.doTimestamp();
                          }}
                          type="submit"
                          className="btn btn-primary"
                        >
                          Submit
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
    );
  }
}

export default Information;
