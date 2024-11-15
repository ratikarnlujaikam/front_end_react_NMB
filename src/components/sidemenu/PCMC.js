import React, { Component } from "react";
import { server } from "../../constants";
import { httpClient } from "../../utils/HttpClient";
import moment from "moment";

class Engineer extends Component {
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


  componentDidMount = async () => {
  };

  render() {
    return (
      <div className="content-wrapper" style={{ border: "1px solid #e6f7ff" }}>
        <div className="content" style={{ paddingTop: 80 }}>
          {/* ... rest of your code ... */}

        
            <div className="row">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item">
                <a href="/Home">
                  <i className="fa fa-arrow-left"></i> Home
                </a>
              </li>
            </ol>
              <div className="col-md-12">
                <div
                  className="card card-primary card-outline"
                  style={{
                    width: "100%",
                    height: "200%",
                    backgroundColor: "#e6f7ff",
                  }}
                >
                  <div className="col-sm-12">
             
                    <h2>PCMC</h2>
                    <div className="row">
                      <div className="col-md-6">
                        <div
                          className="card card-primary card-outline"
                          style={{
                            width: "100%",
                            height: "100%",
                            border: "2px solid #0073e6", // Set border color to a darker blue
                          }}
                        >
                          <div className="card-header">
                            <h3 className="card-title">
                              <h5>Traceability</h5>
                            </h3>
                          </div>
                          <div className="card-body">
               

                              <li className="breadcrumb-item">
                                <a href="/Vrecode">
                                  {" "}
                                  Trace back component based on production data
                                </a>
                              </li>
                        
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div
                          className="card card-primary card-outline"
                          style={{
                            width: "100%",
                            height: "100%",
                            border: "2px solid #0073e6", // Set border color to a darker blue
                          }}
                        >
                          <div className="card-header">
                            <h3 className="card-title">
                              <h5>Monitoring</h5>
                            </h3>
                          </div>
                          <div className="card-body">
                            {" "}
                            <li className="breadcrumb-item">
                              <a href="Shipmentdata">Shipment status</a>
                              <li className="breadcrumb-item">
                              <a href="PC_Shipment">Inventory Control</a>
                            </li>
                            </li>
                            
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6" style={{ paddingTop: 60 }}>
                      <div
                        className="card card-primary card-outline"
                        style={{
                          width: "100%",
                          height: "100%",
                          border: "2px solid #0073e6", // Set border color to a darker blue
                        }}
                      >
                        <div className="card-header">
                          <h3 className="card-title">
                            <h5>Report</h5>
                          </h3>
                        </div>
                        <div className="card-body">
                          <li className="breadcrumb-item">
                            <a href="/For_Inspection_tags_status">
                              For Inspection tags status
                            </a>
                            <li className="breadcrumb-item">
                              <a href="/Daily_store_issue">
                                {" "}
                                Daily Store Issue
                              </a>
                            </li>
                          </li>
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

export default Engineer;
