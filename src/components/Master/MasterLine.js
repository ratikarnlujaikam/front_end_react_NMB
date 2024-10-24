import React, { Component } from "react";
import { key, server } from "../../constants";
import { httpClient } from "../../utils/HttpClient";
import Chart from "react-apexcharts";
import moment from "moment";
import Select from "react-select";
import Swal from "sweetalert2";
import { CSVLink } from "react-csv";

class MasterLine extends Component {
  constructor(props) {
    super(props);

    //set state
    this.state = {
      ModelGroup: [],
      Line: [],
      report: [],

      Raw_Dat: [],

      startDate: moment().format("yyyy-MM-DD"), //moment().add("days", -6).format("yyyy-MM-DD"),
      finishDate: moment().format("yyyy-MM-DD"), //moment().format("yyyy-MM-DD"),

      listModelGroup: [],
      listLine: [],

      optionSelected: null,
      isDisable: false,
    };
  }

  componentDidMount = async () => {
    await this.getModelGroup();
    await this.getLine();
  };

  // report with select ModelGroup,date,type
  doGetDataReport = async () => {
    const result = await httpClient.get(
      server.MASTERLINE_URL +
        "/" +
        this.state.ModelGroup +
        "/" +
        this.state.Line[0].label
    );

    let rawData = result.data.listRawData;
    console.log(rawData);
    for (let i = 1; i < rawData.length; i++) {
      rawData[0].push(...rawData[i]);
    }
    this.setState({ Raw_Dat: rawData[0] });
    console.log(this.state.Raw_Dat);

    this.setState({
      report: result.data.result,
      isDisable: false,
    });
  };

  getModelGroup = async () => {
    const array = await httpClient.get(server.GROUP_URL);
    const options = array.data.result.map((d) => ({
      label: d.ModelGroup,
    }));
    this.setState({ listModelGroup: options });
  };

  getLine = async () => {
    const array = await httpClient.get(
      server.LINE_URL + "/" + this.state.ModelGroup
    );
    const options = array.data.result.map((d) => ({
      label: d.Line,
    }));
    this.setState({ listLine: options });
  };

  renderReport = () => {
    if (this.state.report != null) {
      if (this.state.report.length > 0) {
        return this.state.report.map((item) => (
          <tr Align="center">
           
            <td align="Left">{item["Model_Group"]}</td>
            <td align="Left">{item["Item_no"]}</td>
            <td align="Left">{item["Item_Name"]}</td>
            <td align="Left">{item["Model_Name"]}</td>
            <td align="Left">{item["Line_No"]}</td>
            <td align="Left">{item["Label_Digit15"]}</td>
            <td align="Left">{item["Label_Digit23"]}</td>
            <td align="Left">{item["Updater"]}</td>
            <td align="Left">{item["Time_stamp"]}</td>
            <td align="Left">{item["Remark"]}</td>
            
          </tr>
        ));
      }
    }
  };

  render() {
    console.log(this.state.ModelGroup);
    console.log(this.state.Line);

    return (
      <div className="content-wrapper">
        <div className="content" style={{ paddingTop: 70 }}>
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Line no. Master</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="/Home">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Line no. Master</li>
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
                    {/* //Select Critiria "ModelGroup" */}
                    <div className="col-md-2">
                      <div className="form-group">
                        <label>Model Group</label>
                        <Select
                          options={this.state.listModelGroup}
                          onChange={async (e) => {
                            await this.setState({ ModelGroup: e.label });
                            await this.getLine();
                            await this.setState({
                              Line: [{ label: "ALL" }],
                            });
                          }}
                          // type="text"
                          // className="form-control"
                          placeholder="Select ModelGroup"
                        />
                      </div>
                    </div>

                    {/* //Select Critiria "Type" */}
                    <div className="col-md-2">
                      <div className="form-group">
                        <label>Production Line</label>
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
                              await this.doGetDataReport();
                              Swal.close();
                            },
                          }).then(() => {
                            if (this.state.report.length > 0) {
                              if (this.state.report[0].Model_Group.length > 0) {
                                Swal.fire({
                                  icon: "success",
                                  title: "Success",
                                  text: "Data has been loaded successfully",
                                });
                              } else if (
                                this.state.report[0].Model_Group.length == 0
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

                    <div className="col-md-1">
                      <CSVLink
                        data={this.state.Raw_Dat}
                        filename={"QA_report.csv"}
                      >
                        <button
                          type="button"
                          className="btn btn-primary"
                          style={{ marginTop: 30 }}
                        >
                          Download
                        </button>
                      </CSVLink>
                    </div>
                    <div className="col-md-2">
                      <a
                        style={{ marginTop: 30 }}
                        href="/Home"
                        class="btn btn-primary"
                        role="button"
                        aria-pressed="true"
                      >
                        Back
                      </a>
                    </div>
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
                          style={{ height: 400 }}
                        >
                          <table className="table table-head text-nowrap table-hover">
                            <thead>
                              <tr align="center">
                                <th width="100">Model Group</th>
                                <th width="100">Item no.</th>
                                <th width="100">Item Name</th>
                                <th width="100">Model Name</th>
                                <th width="100">Line No.</th>
                                <th width="100">Label Digit15</th>
                                <th width="100">Label Digit23</th>
                                <th width="100">Updater</th>
                                <th width="100">Time stamp</th>
                                <th width="100">Remark</th>
                                
                              </tr>
                            </thead>
                            <tbody>{this.renderReport()}</tbody>
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
    );
  }
}

export default MasterLine;
