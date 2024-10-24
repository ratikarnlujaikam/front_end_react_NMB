import React, { Component } from "react";
import { server } from "../../constants";
import { httpClient } from "../../utils/HttpClient";
import moment from "moment";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      xAxis: [],
      yAxis: [],
      yAxis2: [],
      //filter
      startDate: moment().add("days", -30).format("yyyy-MM-DD"),
      finishDate: moment().format("yyyy-MM-DD"),
    };
  }

  doGetData = async () => {
    console.log(this.state.startDate);
    console.log(this.state.finishDate);
    let result = await httpClient.get(
      server.YIELD_URL +
        "/" +
        this.state.startDate +
        "&" +
        this.state.finishDate
    );
    console.log(result.data.result);
    let xAxis = [];
    let yAxis = [];
    let yAxis2 = [];

    for (let index = 0; index < result.data.result.length; index++) {
      const item = result.data.result[index];
      await xAxis.push(item.Date);
      await yAxis.push(item["%Yield"]);
      await yAxis2.push(90);
    }

    this.setState({ data: result.data.result, xAxis, yAxis, yAxis2 });
  };

  componentDidMount = async () => {
    console.log(this.state.startDate);
    console.log(this.state.finishDate);
    let result = await httpClient.get(
      server.YIELD_URL +
        "/" +
        this.state.startDate +
        "&" +
        this.state.finishDate
    );
    console.log(result.data.result);
    let xAxis = [];
    let yAxis = [];
    let yAxis2 = [];

    for (let index = 0; index < result.data.result.length; index++) {
      const item = result.data.result[index];
      await xAxis.push(item.Date);
      await yAxis.push(item["%Yield"]);
      await yAxis2.push(90);
    }

    this.setState({ data: result.data.result, xAxis, yAxis, yAxis2 });
  };

  renderTableRow = () => {
    return this.state.data.map((item) => (
      <tr>
        <td>{item.Date}</td>
        <td>{item["%Yield"]}</td>
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
                <div className="title-section title-inside">
                  <h1>Products</h1>
                </div>
              </div>
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
                            <a href="/Movement">QA lots status</a>
                            <li className="breadcrumb-item">
                              <a href="/defectNG">Daily LAR report by Model</a>
                              <li className="breadcrumb-item">
                                <a href="/LAR">Monthly LAR report all Model</a>
                                <li className="breadcrumb-item">
                                  <a href="/LARMonth">Monthly LAR report by Model</a>
                                  <li className="breadcrumb-item">
                                    <a href="/MQT">LAR report per Production team</a>
                        
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
                      <li className="breadcrumb-item">
                      <a href="http://wbp2.bp.minebea.local/Domino_SpindleDrawing/Realtime_Dashboard/Realtime_Monitoring.xlsm">
                        Realtime dashboard
                      </a>
                    </li>
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
                    <a href="/opt"> Operator tracking data</a>
                    <li className="breadcrumb-item">
                      <a href="Dailypacking">Daily cleanroom packing report</a>
                      <li className="breadcrumb-item">
                        <a href="OutputCo2">Daily Output Final ass’y (Before QA)</a>
                        <li className="breadcrumb-item">
                          <a href="/AfterQA1">
                            Daily Output Final ass’y (After QA){" "}
                          </a>
                          <li className="breadcrumb-item">
                            <a href="/HoldCo2">Hold Final ass’y </a>
                            <li className="breadcrumb-item">
                              <a href="/Packedhalfpallet">
                                Packing Pallet in progress{" "}
                              </a>
                              <li className="breadcrumb-item">
                                <a href="/MC_ERROR">M/C error monitoring</a>
                                <li className="breadcrumb-item">
                                <a href="/Report_printlabal">Label Printing Confirmation</a>
                                <li className="breadcrumb-item">
                                <a href="/status1">For Inspection Tag Detail & Moving</a>
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
                      <a href="/dataanalysis">Data Analysis</a>
                    </li>
                    <li>
                      <a href="/dataML2">Data ML</a>
                    </li>
                    {/* <li>
                      <a href="/DailyML1">ML Monitoring Type1</a>
                    </li> */}
                    <li>
                      <a href="/DailyML">ML Monitoring Type2</a>
                    </li>
                    <li>
                      <a href="/MLRanking">ML alternative KPIV Ranking</a>
                    </li>
                    <li className="breadcrumb-item">
                      <a href="http://10.120.122.28:2012/MLjapan">
                        Exploratory data analysis
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
