import React, { Component } from "react";
import { key, server } from "../../constants";
import { httpClient } from "../../utils/HttpClient";
import Chart from "react-apexcharts";
import moment from "moment";
import Select from "react-select";
import Swal from "sweetalert2";
import { CSVLink } from "react-csv";
import axios from 'axios';

class QAInspectionHOLD extends Component {
  constructor(props) {
    super(props);

    //set state
    this.state = {
      model: [],
      Line: [],
      Status: [],
      Access_by:[],
      report: [],
      QANumber: "",
      report2: [],

      Raw_Dat2: [],

      Raw_Dat: [],
      startDate: moment().format("yyyy-MM-DD"), //moment().add("days", -6).format("yyyy-MM-DD"),
      finishDate: moment().format("yyyy-MM-DD"), //moment().format("yyyy-MM-DD"),

      listModel: [],
      listLine_No: [],
      listStatus: [],
      listAccess_by:[],

      optionSelected: null,
      isDisable: false,
    };
  }

  componentDidMount = async () => {
    await this.sendDataToPython();
    const dataToSend = {
      message: 'Hello from React!',
    };
 
  };

  sendDataToPython = async () => {
    const dataToSend = {
      message: 'Hello from React!',
    };
  
    axios.post('/api/data', dataToSend)
      .then(response => {
        // รับค่าที่ส่งกลับมาจาก Python
        const responseData = response.data;
  
        // ประมวลผลค่าที่รับกลับมาตามที่ต้องการ
        // ตัวอย่างนี้สมมติว่า Python ส่งค่ากลับมาเป็น URL ของรูปภาพ
        const imageUrl = responseData.imageUrl;
  
        // ใช้ imageUrl ในการแสดงผลหรือประมวลผลต่อไป
      })
      .catch(error => {
        console.error(error);
      });
  };


  render() {

    return (
      <div className="content-wrapper">
        <div className="content" style={{ paddingTop: 50 }}>
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>test </h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="/Home">Home</a>
                    </li>
                    <li className="breadcrumb-item active">test</li>
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
                    {/* //Select Critiria "Model" */}
    
                    {/* //Select Critiria "Line_No" */}
           
                    
                     {/* //Select Critiria "Status" */}
          
              
               

                      {/* //Select Start Date */}
                      <div className="col-md-2">
                      <div className="form-group">
                        <label>
                          By Daily Select From &nbsp;
                 
                        </label>
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
                    <div className="col-md-2">
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
                              await this.sendDataToPython();
                              Swal.close();
                            },
                          }).then(() => {
                            if (this.state.report.length > 0) {
                              if (this.state.report[0].Lot_QA.length > 0) {
                                Swal.fire({
                                  icon: "success",
                                  title: "Success",
                                  text: "Data has been loaded successfully",
                                });
                              } else if (
                                this.state.report[0].Lot_QA.length == 0
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
                    <div className="col-md-3">
                      <CSVLink
                        data={this.state.Raw_Dat}
                        filename={"QA_report.csv"}
                      >
                        <button
                          type="button"
                          className="btn btn-primary"
                          style={{ marginTop: 30 }}
                        >
                          Download by Model
                        </button>
                      </CSVLink>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card card-primary card-outline">
                <div className="card-header">
                  <h3 className="card-title">
                    <label>Scan QA Number</label>
                  </h3>
                </div>

              </div>

              {/* Table*/}
  
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QAInspectionHOLD;
