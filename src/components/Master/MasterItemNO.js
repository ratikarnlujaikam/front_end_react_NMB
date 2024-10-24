import React, { Component } from "react";
import { key, server } from "../../constants";
import { httpClient } from "../../utils/HttpClient";
import Chart from "react-apexcharts";
import moment from "moment";
import Select from "react-select";
import Swal from "sweetalert2";
import { CSVLink } from "react-csv";


class MasterItemNO extends Component {
  constructor(props) {
    super(props);

    //set state
    this.state = {
      ItemNo: [],
      ModelGroup: [],
      report: [],
      reportGraph: [],
  

      Raw_Dat: [],
      listItemNo: [],
      listModelName: [],
      listModelGroup: [],

      optionSelected: null,
      isDisable: false,
    };
  }

  componentDidMount = async () => {
    try {
      await this.getModelGroup();
      await this.getItemNO();
    } catch (error) {
      console.error("Error in componentDidMount:", error);
      // ทำการจัดการข้อผิดพลาดที่นี่
    }
  };
  

  doGetDataReport = async () => {
    const result = await httpClient.get(
      server.MASTER_URL +
        "/" +
        this.state.ModelGroup +
        "/" +
        this.state.ItemNo[0].label
    )

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
      isDisable: false,
    });
  };
  getModelGroup = async () => {
    const array = await httpClient.get(server.MASTERGROUP_URL);
    const options = array.data.result.map((d) => ({
      label: d.ModelGroup,
    }));
    this.setState({ listModelGroup: options });
  };

  getItemNO = async () => {
    const array = await httpClient.get(
      server.MASTERITEMNO_URL + "/" + this.state.ModelGroup
    );
    const options = array.data.result.map((d) => ({
      label: d.ItemNo,
    }));
    this.setState({ listItemNo: options });
  };

  renderreport1 = () => {
    if (this.state.report != null) {
      if (this.state.report.length > 0) {
        return this.state.report.map((item) => (
          <tr key={item["Item_No"]} align="center">
            <td align="Left">{item["Customer_Code"]}</td>
            <td align="Left">{item["Model_Group"]}</td>
            <td align="Left">{item["Item_No"]}</td>
            <td align="Left">{item["Item_Name"]}</td>
            <td align="Left">{item["Model_Name"]}</td>
            <td align="Left">{item["WC_Code"]}</td>
            <td align="RIGHT">
              {Number(item["Lot_Size_Final"]).toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </td>
            <td align="RIGHT">
              {Number(item["Lot_Size_QA"]).toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </td>
            <td>{item["QA_Code"]}</td>
            <td align="RIGHT">
              {Number(item["Tray_Per_QA"]).toLocaleString(undefined, {
                maximumFractionDigits: 2,
              })}
            </td>
            <td>{item["Updater"]}</td>
            <td>{item["Time_stamp"]}</td>
            <td>{item["Bag_Color"]}</td>
            <td>{item["End_Of_Life"]}</td>
          </tr>
        ));
      }
    }
  };

  render() {
    console.log(this.state.ModelGroup);
    console.log(this.state.ModelName);
    console.log(this.state.ItemNo);

    return (
      <div className="content-wrapper">
        <div className="content" style={{ paddingTop: 70 }}>
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Item no. Master </h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="/Home">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Item no. Master</li>
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
                            await this.getItemNO();
                            await this.setState({
                              ItemNo: [{ label: "ALL" }],
                            });
                          }}
                          // type="text"
                          // className="form-control"
                          placeholder="Select ModelGroup"
                        />
                      </div>
                    </div>

                    {/* //Select Critiria "ItemNo" */}
                    <div className="col-md-2">
                      <div className="form-group">
                        <label>Item No</label>
                        <Select
                          options={this.state.listItemNo}
                          value={this.state.ItemNo[0]}
                          onChange={async (e) => {
                            await this.setState({ ItemNo: [] });
                            this.state.ItemNo.push({ label: e.label });
                          }}
                          // type="text"
                          // className="form-control"
                          placeholder="Select ItemNo"
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
                              console.log("Loaded Report Data:", this.state.report);
                              Swal.close();
                            },
                            
                          }).then(() => {
                            if (this.state.report.length > 0) {
                              if (this.state.report[0].Item_No.length > 0) {
                                Swal.fire({
                                  icon: "success",
                                  title: "Success",
                                  text: "Data has been loaded successfully",
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
                    <div className="col-md-1">
                      <CSVLink
                        data={this.state.Raw_Dat}
                        filename={"Reject_report.csv"}
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
                          <table className="table  text-nowrap table-hover">
                            <thead>
                              <tr align="center">
                                <th width="100">Customer Code</th>
                                <th width="70">Model Group</th>
                                <th width="100">Item No</th>
                                <th width="100">Item Name</th>
                                <th width="100">Model Name</th>
                                <th width="70">WC Code</th>
                                <th width="70">Lot Size Final</th>
                                <th width="70">Lot Size QA</th>
                                <th width="70">QA Code</th>
                                <th width="70">Tray Per QA</th>
                                <th width="70">Updater</th>
                                <th width="70">Time stamp</th>
                                <th width="70">Bag Color</th>
                                <th width="70">End Of Life</th>
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
        </div>
      </div>
    );
  }
}

export default MasterItemNO;
