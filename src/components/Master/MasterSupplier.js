import React, { Component } from "react";
import { key, server } from "../../constants";
import { httpClient } from "../../utils/HttpClient";
import Chart from "react-apexcharts";
import moment from "moment";
import Select from "react-select";
import Swal from "sweetalert2";
import { CSVLink } from "react-csv";

class MasterSupplier extends Component {
  constructor(props) {
    super(props);

    //set state
    this.state = {
      Supplier: [],
      ModelGroup: [],
      report: [],

      Raw_Dat: [],

      listSupplier: [],
      listModelGroup: [],

      optionSelected: null,
      isDisable: false,
    };
  }

  componentDidMount = async () => {
    await this.getSupplier();
    await this.getModelGroup();
  };

  // report with select Supplier,date,type
  doGetDataReport = async () => {
    const result = await httpClient.get(
      server.MASTERSUP_URL +
        "/" +
        this.state.Supplier +
        "/" +
        this.state.ModelGroup[0].label
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

  getSupplier = async () => {
    const array = await httpClient.get(server.MASTERSUPPLIER_URL);
    const options = array.data.result.map((d) => ({
      label: d.Supplier,
    }));
    this.setState({ listSupplier: options });
  };

  getModelGroup = async () => {
    const array = await httpClient.get(
      server.MASTERMODELGROUP_URL + "/" + this.state.Supplier
    );
    const options = array.data.result.map((d) => ({
      label: d.Model_group,
    }));
    this.setState({ listModelGroup: options });
  };

  renderReport = () => {
    if (this.state.report != null) {
      if (this.state.report.length > 0) {
        return this.state.report.map((item) => (
          <tr Align="center">
            <td align="Left">{item["Part_Name"]}</td>
            <td align="Left">{item["Supplier_Name"]}</td>
            <td align="Left">{item["Supplier_Code"]}</td>
            <td align="Left">{item["Model_group"]}</td>
            <td align="Left">{item["Model_Name"]}</td>
            <td align="Left">{item["Remark"]}</td>
            <td align="Left">{item["Updater"]}</td>
            <td align="Left">{item["Time_stamp"]}</td>
            <td align="Left">{item["Part_number_NMB"]}</td>
            <td align="Left">{item["Part_number_Seagate"]}</td>
          </tr>
        ));
      }
    }
  };

  render() {
    console.log(this.state.Supplier);
    console.log(this.state.ModelGroup);

    return (
      <div className="content-wrapper">
        <div className="content" style={{ paddingTop: 70 }}>
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Supplier data Master </h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="/Home">Home</a>
                    </li>
                    <li className="breadcrumb-item active"> Supplier data Master</li>
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
                    {/* //Select Critiria "Supplier" */}
                    <div className="col-md-2">
                      <div className="form-group">
                        <label>Supplier</label>
                        <Select
                          options={this.state.listSupplier}
                          onChange={async (e) => {
                            await this.setState({ Supplier: e.label });
                            await this.getModelGroup();
                            await this.setState({
                              ModelGroup: [{ label: "ALL" }],
                            });
                          }}
                          // type="text"
                          // className="form-control"
                          placeholder="Select Supplier"
                        />
                      </div>
                    </div>

                    {/* //Select Critiria "Type" */}
                    <div className="col-md-2">
                      <div className="form-group">
                        <label>Model group</label>
                        <Select
                          options={this.state.listModelGroup}
                          value={this.state.ModelGroup[0]}
                          onChange={async (e) => {
                            await this.setState({ ModelGroup: [] });
                            this.state.ModelGroup.push({ label: e.label });
                          }}
                          // type="text"
                          // className="form-control"
                          placeholder="Select ModelGroup"
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
                              if (this.state.report[0].Supplier_Name.length > 0) {
                                Swal.fire({
                                  icon: "success",
                                  title: "Success",
                                  text: "Data has been loaded successfully",
                                });
                              } else if (
                                this.state.report[0].Supplier_Name.length == 0
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
                                <th width="100">Part Name</th>
                                <th width="100">Supplier Name</th>
                                <th width="100">Supplier Code</th>
                                <th width="100">Model group</th>
                                <th width="100">Model Name</th>
                                <th width="100">Remark</th>
                                <th width="100">Updater</th>
                                <th width="100">Time stamp</th>
                                <th width="100">Part number NMB</th>
                                <th width="100">Part number Seagate</th>
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

export default MasterSupplier;
