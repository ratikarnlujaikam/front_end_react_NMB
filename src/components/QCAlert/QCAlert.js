import React, { Component } from "react";
import { key, server } from "../../constants";
import { httpClient } from "../../utils/HttpClient";
import Chart from "react-apexcharts";
import moment from "moment";
import Select from "react-select";
import Swal from "sweetalert2";

import { CSVLink } from "react-csv";

export default class QCAlert extends Component {
  constructor(props) {
    super(props);

    //set state
    this.state = {
      startDate: moment().add("days", -7).format("yyyy-MM-DD"),
      finishDate: moment().format("yyyy-MM-DD"),
    };
  }

  render() {
    return (
      <div class="content-wrapper">
        <div className="content" style={{ paddingTop: 50 }}>
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>QC Alert Email</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="/Home">Home</a>
                    </li>
                    <li className="breadcrumb-item active">QCAlert</li>
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
                      <label>Select Parameter</label>
                    </h3>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      {/* //Select Critiria "Model" */}
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Model</label>
                          <Select />
                        </div>
                      </div>
                      {/* //Select Critiria "Model" */}
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Production Line</label>
                          <Select />
                        </div>
                      </div>
                      {/* //Select Critiria "Model" */}
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Tester</label>
                          <Select />
                        </div>
                      </div>
                      {/* //Select Critiria "Model" */}
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Tester No.</label>
                          <Select />
                        </div>
                      </div>

                      {/* //Select Start Date */}
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Starting from &nbsp;</label>
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

                      {/* //Select Finish Date */}
                      <div className="col-md-3">
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
                      </div>
                      {/* Submit button */}
                      <div className="col-md-1">
                        <button
                          disabled={this.state.isDisableDays}
                          onClick={(e) => {}}
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
                <div className="col-12">
                  <table className="table table-head-fixed text-nowrap">
                    <thead>
                      <tr>
                        <th style={{ backgroundColor: "#C1C1C1" }}>Date</th>
                        <th style={{ backgroundColor: "#C1C1C1" }}>Time</th>
                        <th style={{ backgroundColor: "#C1C1C1" }}>Model</th>
                        <th style={{ backgroundColor: "#C1C1C1" }}>Line</th>
                        <th style={{ backgroundColor: "#C1C1C1" }}>Machine</th>
                        <th style={{ backgroundColor: "#C1C1C1" }}>
                          Parameter
                        </th>
                        <th style={{ backgroundColor: "#C1C1C1" }}>Average</th>
                        <th style={{ backgroundColor: "#C1C1C1" }}>LCL</th>
                        <th style={{ backgroundColor: "#C1C1C1" }}>UCL</th>
                        <th style={{ backgroundColor: "#C1C1C1" }}>Comment1</th>
                        <th style={{ backgroundColor: "#C1C1C1" }}>Comment2</th>
                        <th style={{ backgroundColor: "#C1C1C1" }}>Comment3</th>
                      </tr>
                    </thead>
                    <tbody></tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
