import React, { Component } from "react";
import { server } from "../../constants";
import { httpClient } from "../../utils/HttpClient";
import moment from "moment";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      report: [],
      Raw_Dat1: [],
      isDisable: false,
      isConnected: true,
      dbConnectionError: null,
      //filter
      startDate: moment().add("days", -30).format("yyyy-MM-DD"),
      finishDate: moment().format("yyyy-MM-DD"),
    };
  }
  componentDidMount = async () => {
    try {
      let timeout = setTimeout(() => {
        if (!this.state.isConnected) {
          window.alert("Failed to connect to the server");
        }
      }, 20000);

      let command = await httpClient.get(server.STATUS_WEB_URL);
      clearTimeout(timeout); // Clear the timeout if the connection is successful

      // ... rest of your code ...

      this.setState({
        report: command.data.result,
        isDisable: false,
        isConnected: true,
        dbConnectionError: null,
      });
    } catch (error) {
      console.error("Error connecting to backend:", error);
      this.setState({
        isConnected: false,
        dbConnectionError: "Error connecting to database",
      });

      // Display a popup using window.alert
      window.alert("Failed to connect to the server");
    }
  };
  renderTableRow = () => {
    return this.state.report.map((item) => (
      <tr key={item.id}>
        <td>
          {item.Status === null ? (
            <span style={{ color: "red" }}>❌</span>
          ) : (
            <span style={{ color: "green" }}> 🟢Connect server ok </span>
          )}
        </td>
      </tr>
    ));
  };

  render() {
    return (
      <div className="content-wrapper">
        <div className="content" style={{ paddingTop: 60 }}>
          <div className="row">
            <div className="border-full-bottom">
              <div className="D-3 M-12 D-right-9 M-left-0 no-gap">
                <div className="title-section title-inside"></div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-9">
              <h1>Products</h1>
            </div>
         
          </div>

          <h2>Spindle Motor for HDDs</h2>

          <div className="row">
            <div className="col-md-4">
              <div className="card card-primary card-outline">
                <div className="card-header">
                  <h3 className="card-title">
                    <h3>Quality Assurance</h3>
                    <li className="breadcrumb-item">
                      <a href="/QAInspection">QA by Model & QA by QA Number</a>
                      <li className="breadcrumb-item">
                        <a href="/Rejection">
                          Reject by Model & Reject by QA Number
                        </a>
                        <li className="breadcrumb-item">
                          <a href="/monthlyQA">Monthly QA Inspection</a>

                          <li className="breadcrumb-item">
                            <a href="/Movement">QA Record checking</a>
                            <li className="breadcrumb-item">
                              <a href="/defectNG">Daily VMI LAR Trend</a>
                              <li className="breadcrumb-item">
                                <a href="/LAR">Summary LAR All Model</a>
                                <li className="breadcrumb-item">
                                  <a href="/LARMonth">Monthly VMI LAR Trend</a>
                                  <li className="breadcrumb-item">
                                    <a href="/MQT">Most Quality Team</a>
                                    <li className="breadcrumb-item">
                                      <a href="/Hold_System">
                                        Quality Hold System
                                      </a>
                                    </li>
                                  </li>
                                </li>
                              </li>
                            </li>
                          </li>
                        </li>
                      </li>
                    </li>
                  </h3>
                </div>
              </div>
            </div>
            {/* </div> */}
            {/* <div className="row"> */}
            <div className="col-md-4">
              <div className="card card-primary card-outline">
                <div className="card-header">
                  <h3 className="card-title">
                    <h4>M/O Record & OEE Report</h4>
                    <li className="breadcrumb-item">
                      <a href="http://10.120.122.10:2020">
                        SPINDLE MOTOR YIELD RECORD
                      </a>
                    </li>
                  </h3>
                </div>
              </div>
              <div className="col-md-14">
                <div className="card card-primary card-outline">
                  <div className="card-header">
                    <h3 className="card-title">
                      <h4>Trace Back Data</h4>
                      <li className="breadcrumb-item">
                        <a href="/QPM">Trace back function data by S/N</a>
                        <li className="breadcrumb-item">
                          <a href="/DODATA">
                            Traceback Ship info detail by QA / Invoice{" "}
                          </a>
                          <li className="breadcrumb-item">
                            <a href="/SHIPINFO">
                              {" "}
                              Traceback Ship info by QA/ Invoice{" "}
                            </a>
                            <li className="breadcrumb-item">
                              <a href="/Vrecode">Trace Back by Datecode</a>
                            </li>
                          </li>
                        </li>
                      </li>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card card-primary card-outline">
                <div className="card-header">
                  <h3 className="card-title">
                    <h4>Master</h4>
                    <li className="breadcrumb-item">
                      <a href="MasterItemNO">Item No.</a>
                      <li className="breadcrumb-item">
                        <a href="MasterSupplier">Supplier</a>
                        <li className="breadcrumb-item">
                          <a href="MasterLine">Line</a>
                        </li>
                      </li>
                    </li>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-primary card-outline">
                <div className="card-header">
                  <h3 className="card-title">
                    <h4>PCMC</h4>
                    <li className="breadcrumb-item">
                      <a href="Shipmentdata">Shipment Data</a>
                    </li>
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card card-primary card-outline">
              <div className="card-header">
                <h3 className="card-title">
                  <h4>Production</h4>
                  <li className="breadcrumb-item">
                    <a href="/opt"> Daily operator tracking record</a>
                    <li className="breadcrumb-item">
                      <a href="Dailypacking">Output Packing</a>
                      <li className="breadcrumb-item">
                        <a href="OutputCo2">Output Final ass’y (Before QA)</a>
                        <li className="breadcrumb-item">
                          <a href="/AfterQA1">
                            Output Final ass’y (QA Passed){" "}
                          </a>
                          <li className="breadcrumb-item">
                            <a href="/HoldCo2">Hold Final ass’y </a>
                            <li className="breadcrumb-item">
                              <a href="/Packedhalfpallet">
                                Packed Half Pallet{" "}
                              </a>
                              <li className="breadcrumb-item">
                                <a href="/MC_ERROR">M/C error monitoring</a>
                                <li className="breadcrumb-item">
                                  <a href="/Report_printlabal">
                                    Label Printing Comfirmation
                                  </a>
                                </li>
                              </li>
                            </li>
                          </li>
                        </li>
                      </li>
                    </li>
                  </li>
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card card-primary card-outline">
                <div className="card-header">
                  <h3 className="card-title">
                    <h3>SPC</h3>

                    <lable>Stator Housing Ass'y</lable>
                    <li className="breadcrumb-item">
                      {/* api_Stack_height */}
                      {/* <a href="/STACKHEIGHT">Static Dimension</a> */}
                      <a href="/STACKHEIGHT">Static Dimension</a>

                      {/* api_production_result */}
                      {/* <a href="/ROTOR">Rotor Factory 2</a> */}
                    </li>
                    <lable>Rotor Ass’y</lable>
                    <li className="breadcrumb-item">
                      <a href="/ROTOR">Rotor Factory 2</a>
                      {/* <a href="/updating">Rotor Factory 2</a> */}
                    </li>

                    <lable>Motor</lable>

                    <li>
                      <a href="/MOTORDIM">Dynamic Parallelism</a>
                      {/* <a href="/updating">Dynamic Parallelism</a> */}
                      <li>
                        <a href="/MOTOREWMS">EWMS</a>
                        {/* <a href="/updating">EWMS</a> */}
                        <li>
                          {/* api_Hipot */}
                          <a href="/MOTORHIPOT">Function Test</a>
                          {/* <a href="/updating">Function Test</a> */}
                          {/* <li> */}
                          {/* <a href="/MOTORHE">He Leak</a> */}
                          {/* <a href="/updating">He Leak</a> */}
                          {/* </li> */}
                        </li>
                      </li>
                      <lable>Rotor to base</lable>

                      <li>
                        <a href="/MOTORDIMAI">Ai-Press(FCC)</a>
                        {/* <a href="/updating">Ai-Press</a> */}
                      </li>
                    </li>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-primary card-outline">
                <div className="card-header">
                  <h3 className="card-title">
                    <h4>Quality Analysis</h4>

                    <li>
                      <a href="/GRLine">German Rotor Autoline</a>
                    </li>
                    <li>
                      <a href="/QCAlert">QC Alert Traceback</a>
                    </li>
                    <li>
                      <a href="/VMI">Auto VMI</a>
                    </li>
                    <li>
                      <a href="/traceback">Traceability</a>
                    </li>

                    <li>
                      <a href="/dataanalysis">Data Analysis</a>
                    </li>
                    <li>
                      <a href="/dataML2">Data ML</a>
                    </li>
                    <li>
                      <a href="/DailyML1">ML Monitoring Type1</a>
                    </li>
                    <li>
                      <a href="/DailyML">ML Monitoring Type2</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="http://10.120.122.28:2012/MLjapan">
                        Explralory data analysis
                      </a>
                    </li>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
