import React, { Component } from "react";
import { key, server } from "../../constants";
import { httpClient } from "../../utils/HttpClient";

import moment from "moment";
import Select from "react-select";

import { CSVLink, CSVDownload } from "react-csv";

class dataRotor extends Component {
  constructor(props) {
    super(props);

    //set state
    this.state = {
      //data average per hour
      dataRotor: [],

      // criteria
      modelRotor: [],
      lineRotor: [],
      processRotor: [],
      machineRotor: [],

      selectDate: moment().format("yyyy-MM-DD"),
      startDate: moment().add("days", -30).format("yyyy-MM-DD"),
      finishDate: moment().format("yyyy-MM-DD"),

      // criteria options
      listmodelRotor: [],
      listprocessRotor: [],
      listlineRotor: [],
      listmachineRotor: [],

      optionSelected: null,
    };
  }

  componentDidMount = async () => {
    await this.getmodelRotor();
    await this.getprocessRotor();
    await this.getlineRotor();
    await this.getmachineRotor();
  };

  doGetRotor = async () => {
    let result = await httpClient.get(
      server.ROTORANALYSIS_URL +
        "/" +
        this.state.selectDate +
        "/" +
        this.state.modelRotor +
        "/" +
        this.state.processRotor +
        "/" +
        this.state.lineRotor +
        "/" +
        this.state.machineRotor
    );
    this.setState({
      dataRotor: result.data.result,
    });
  };

  getmodelRotor = async () => {
    const array = await httpClient.get(server.ROTORMODEL_URL);
    const options = array.data.result.map((d) => ({
      label: d.Model,
    }));
    this.setState({ listModel: options });
  };

  getprocessRotor = async () => {
    const array = await httpClient.get(server.ROTORPROCESS_URL);
    const options = array.data.result.map((d) => ({
      label: d.Process,
    }));
    this.setState({ listProcess: options });
  };

  getlineRotor = async () => {
    const array = await httpClient.get(
      server.ROTORLINE_URL + "/" + this.state.process + "/" + this.state.model
    );
    const options = array.data.result.map((d) => ({
      label: d.Line,
    }));
    this.setState({ listlineRotor: options });
  };

  getmachineRotor = async () => {
    const array = await httpClient.get(
      server.ROTORMC_URL + "/" + this.state.process + "/" + this.state.lineRotor
    );
    const options = array.data.result.map((d) => ({
      label: d.Machine,
    }));
    this.setState({ listmachineRotor: options });
  };

  render() {
    console.log(this.state.dataRotor);

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
                              await this.getlineRotor();
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
                            onChange={async (e) => {
                              await this.setState({ process: e.label });
                              await this.getlineRotor();
                              await this.getmachineRotor();
                            }}
                            // type="text"
                            // className="form-control"
                            placeholder="Select process"
                          />
                        </div>
                      </div>

                      {/* //Select Critiria "Production line" */}
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Production line</label>
                          <Select
                            options={this.state.listlineRotor}
                            onChange={async (e) => {
                              await this.setState({ lineRotor: e.label });
                              await this.getmachineRotor();
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
                          <label>Machine</label>
                          <Select
                            options={this.state.listmachineRotor}
                            onChange={async (e) => {
                              await this.setState({ machineRotor: e.label });
                            }}
                            // type="text"
                            // className="form-control"
                            placeholder="Select Model"
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
                          onClick={(e) => {
                            this.doGetRotor();
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
                            Download CSV
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

        {/* Insert Logout button */}
        <div className="card-footer">
          <button
            onClick={() => {
              localStorage.removeItem(key.LOGIN_PASSED);
              localStorage.removeItem(key.JWT_TOKEN);
              this.props.history.push("/login");
            }}
            className="btn btn-danger"
          >
            Logout
          </button>
        </div>
      </div>
    );
  }
}

export default dataRotor;
