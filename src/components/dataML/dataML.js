import React, { Component } from "react";
import { key, server } from "../../constants";
import { httpClient } from "../../utils/HttpClient";

import moment from "moment";
import Select from "react-select";
import Swal from "sweetalert2";

import { CSVLink } from "react-csv";

class DataML extends Component {
  constructor(props) {
    super(props);

    //set state
    this.state = {
      //Motor
      data: [],
      MBA: [],
      Rotor: [],
      SHA: [],
      allData: [],

      // criteria
      model: [],
      productionline: [],
      KPOV_Table: [],
      KPOV: [],
      
      //MBA
      KPIV1_Table: "blank",
      KPIV2_Table: "blank",
      KPIV3_Table: "blank",
      KPIV4_Table: "blank",
      KPIV5_Table: "blank",
      KPIV1: "blank",
      KPIV2: "blank",
      KPIV3: "blank",
      KPIV4: "blank",
      KPIV5: "blank",
      //Rotor
      KPIV6_Table: "blank",
      KPIV7_Table: "blank",
      KPIV8_Table: "blank",
      KPIV9_Table: "blank",
      KPIV10_Table: "blank",
      KPIV6: "blank",
      KPIV7: "blank",
      KPIV8: "blank",
      KPIV9: "blank",
      KPIV10: "blank",
      //Base
      KPIV11_Table: "blank",
      KPIV12_Table: "blank",
      KPIV13_Table: "blank",
      KPIV14_Table: "blank",
      KPIV15_Table: "blank",
      KPIV11: "blank",
      KPIV12: "blank",
      KPIV13: "blank",
      KPIV14: "blank",
      KPIV15: "blank",

      selectDate: moment().add("days", -1).format("yyyy-MM-DD"),
      startDate: moment().add("days", -89).format("yyyy-MM-DD"),
      finishDate: moment().add("days", -1).format("yyyy-MM-DD"),

      Days7: moment().add("days", -8).format("yyyy-MM-DD"),
      Days15: moment().add("days", -16).format("yyyy-MM-DD"),

      // criteria options
      listModel: [],
      listProductionline: [],
      listDataSourceKPOV: [],
      listDataSourceMBA: [],
      listDataSourceRotor: [],
      listDataSourceBase: [],
      listKPOV: [],
      listKPIV1: [],
      listKPIV2: [],
      listKPIV3: [],
      listKPIV4: [],
      listKPIV5: [],
      listKPIV6: [],
      listKPIV7: [],
      listKPIV8: [],
      listKPIV9: [],
      listKPIV10: [],
      listKPIV11: [],
      listKPIV12: [],
      listKPIV13: [],
      listKPIV14: [],
      listKPIV15: [],

      optionSelected: null,
      isDisable: false,
    };
    // this.HandleClick = this.HandleClick.bind(this);
  }

  componentDidMount = async () => {
    this.getModel();
    this.getDataSourceKPOV();
    this.getDataSourceMBA();
    this.getDataSourceRotor();
    this.getDataSourceBase();    
  };

  doGetDataML = async () => {
    let result = await httpClient.get(
      server.MOTORML_URL +
        "/" +
        this.state.startDate +
        "/" +
        this.state.finishDate +
        "/" +
        this.state.model +
        "/" +
        this.state.productionline[0].label +
        "/" +
        this.state.KPOV +
        "/" +
        this.state.KPOV_Table +
        "/" +
        this.state.KPIV1 +
        "/" +
        this.state.KPIV1_Table +
        "/" +
        this.state.KPIV2 +
        "/" +
        this.state.KPIV2_Table +
        "/" +
        this.state.KPIV3 +
        "/" +
        this.state.KPIV3_Table +
        "/" +
        this.state.KPIV4 +
        "/" +
        this.state.KPIV4_Table +
        "/" +
        this.state.KPIV5 +
        "/" +
        this.state.KPIV5_Table +
        "/" +
        this.state.KPIV6 +
        "/" +
        this.state.KPIV6_Table +
        "/" +
        this.state.KPIV7 +
        "/" +
        this.state.KPIV7_Table +
        "/" +
        this.state.KPIV8 +
        "/" +
        this.state.KPIV8_Table +
        "/" +
        this.state.KPIV9 +
        "/" +
        this.state.KPIV9_Table +
        "/" +
        this.state.KPIV10 +
        "/" +
        this.state.KPIV10_Table +
        "/" +
        this.state.KPIV11 +
        "/" +
        this.state.KPIV11_Table +
        "/" +
        this.state.KPIV12 +
        "/" +
        this.state.KPIV12_Table +
        "/" +
        this.state.KPIV13 +
        "/" +
        this.state.KPIV13_Table +
        "/" +
        this.state.KPIV14 +
        "/" +
        this.state.KPIV14_Table +
        "/" +
        this.state.KPIV15 +
        "/" +
        this.state.KPIV15_Table 
    );
    const allMBA = result.data.result1;
    const allRotor = result.data.result2;
    const allSHA = result.data.result3;

    var allDataMotor = [
      ...allMBA,
      ...allRotor,
      ...allSHA,
    ];

    // console.log(allDataMotor[0])

    var keyAmounts = 0;
    var maxkeys = 0;
    // var keys = [];    

    for (let i = 0; i < allDataMotor.length - 1; i++) {
      for (let j = i+1; j < allDataMotor.length; j++) {
        if (allDataMotor[i].Barcode == allDataMotor[j].Barcode) {
          Object.assign(allDataMotor[i], allDataMotor[j])
        }        
      }
      keyAmounts = Object.keys(allDataMotor[i]).length //จำนวน column ทั้งหมดของแต่ละแถว
      if (keyAmounts > maxkeys) {
        maxkeys = keyAmounts        
      }
          
    }
    // keys.push(keyAmounts)  
    // maxkeys = Math.max(...keys)
    // console.log(allDataMotor)
    // console.log(maxkeys)

    for (let k = 0; k < allDataMotor.length; k++) {
      if (Object.keys(allDataMotor[k]).length !== maxkeys) {
        delete allDataMotor[k];
      }
    }
    // console.log(allDataMotor)

    this.setState({
      MBA: allMBA,
      Rotor: allRotor,
      SHA: allSHA,
      allData: allDataMotor,
      isDisable: false,
    });
  };
 

  getModel = async () => {
    const array = await httpClient.get(server.MODELML_URL);
    const options = array.data.result.map((d) => ({
      label: d.Model,
    }));
    this.setState({ listModel: options });
  };

  getProductionline = async () => {
    const array = await httpClient.get(
      server.LINEML_URL + "/" + this.state.model
    );
    const options = array.data.result.map((d) => ({
      label: d.Line,
    }));
    this.setState({ listProductionline: options });
  };

  getDataSourceKPOV = async () => {
    const array = await httpClient.get(server.DATASOURCEKPOV_URL);
    const options = array.data.result.map((d) => ({
      label: d.Process,
    }));
    this.setState({ listDataSourceKPOV: options });
  };

  getDataSourceMBA = async () => {
    const array = await httpClient.get(server.DATASOURCEMBA_URL);
    const options = array.data.result.map((d) => ({
      label: d.Process,
    }));
    this.setState({ listDataSourceMBA: options });
  };

  getDataSourceRotor = async () => {
    const array = await httpClient.get(server.DATASOURCEROTOR_URL);
    const options = array.data.result.map((d) => ({
      label: d.Process,
    }));
    this.setState({ listDataSourceRotor: options });
  };

  getDataSourceBase = async () => {
    const array = await httpClient.get(server.DATASOURCEBASE_URL);
    const options = array.data.result.map((d) => ({
      label: d.Process,
    }));
    this.setState({ listDataSourceBase: options });
  };

  getKPOV = async () => {
    const array = await httpClient.get(
      server.PARAMML_URL + "/" + this.state.KPOV_Table
    );
    const options = array.data.result.map((d) => ({
      label: d.Parameter,
    }));
    this.setState({ listKPOV: options });
  };

  getKPIV1 = async () => {
    const array = await httpClient.get(
      server.PARAMML_URL + "/" + this.state.KPIV1_Table
    );
    const options = array.data.result.map((d) => ({
      label: d.Parameter,
    }));
    this.setState({ listKPIV1: options });
  };

  getKPIV2 = async () => {
    const array = await httpClient.get(
      server.PARAMML_URL + "/" + this.state.KPIV2_Table
    );
    const options = array.data.result.map((d) => ({
      label: d.Parameter,
    }));
    this.setState({ listKPIV2: options });
  };

  getKPIV3 = async () => {
    const array = await httpClient.get(
      server.PARAMML_URL + "/" + this.state.KPIV3_Table
    );
    const options = array.data.result.map((d) => ({
      label: d.Parameter,
    }));
    this.setState({ listKPIV3: options });
  };

  getKPIV4 = async () => {
    const array = await httpClient.get(
      server.PARAMML_URL + "/" + this.state.KPIV4_Table
    );
    const options = array.data.result.map((d) => ({
      label: d.Parameter,
    }));
    this.setState({ listKPIV4: options });
  };

  getKPIV5 = async () => {
    const array = await httpClient.get(
      server.PARAMML_URL + "/" + this.state.KPIV5_Table
    );
    const options = array.data.result.map((d) => ({
      label: d.Parameter,
    }));
    this.setState({ listKPIV5: options });
  };

  getKPIV6 = async () => {
    const array = await httpClient.get(
      server.PARAMML_URL + "/" + this.state.KPIV6_Table
    );
    const options = array.data.result.map((d) => ({
      label: d.Parameter,
    }));
    this.setState({ listKPIV6: options });
  };

  getKPIV7 = async () => {
    const array = await httpClient.get(
      server.PARAMML_URL + "/" + this.state.KPIV7_Table
    );
    const options = array.data.result.map((d) => ({
      label: d.Parameter,
    }));
    this.setState({ listKPIV7: options });
  };

  getKPIV8 = async () => {
    const array = await httpClient.get(
      server.PARAMML_URL + "/" + this.state.KPIV8_Table
    );
    const options = array.data.result.map((d) => ({
      label: d.Parameter,
    }));
    this.setState({ listKPIV8: options });
  };

  getKPIV9 = async () => {
    const array = await httpClient.get(
      server.PARAMML_URL + "/" + this.state.KPIV9_Table
    );
    const options = array.data.result.map((d) => ({
      label: d.Parameter,
    }));
    this.setState({ listKPIV9: options });
  };

  getKPIV10 = async () => {
    const array = await httpClient.get(
      server.PARAMML_URL + "/" + this.state.KPIV10_Table
    );
    const options = array.data.result.map((d) => ({
      label: d.Parameter,
    }));
    this.setState({ listKPIV10: options });
  };

  getKPIV11 = async () => {
    const array = await httpClient.get(
      server.PARAMML_URL + "/" + this.state.KPIV11_Table
    );
    const options = array.data.result.map((d) => ({
      label: d.Parameter,
    }));
    this.setState({ listKPIV11: options });
  };

  getKPIV12 = async () => {
    const array = await httpClient.get(
      server.PARAMML_URL + "/" + this.state.KPIV12_Table
    );
    const options = array.data.result.map((d) => ({
      label: d.Parameter,
    }));
    this.setState({ listKPIV12: options });
  };

  getKPIV13 = async () => {
    const array = await httpClient.get(
      server.PARAMML_URL + "/" + this.state.KPIV13_Table
    );
    const options = array.data.result.map((d) => ({
      label: d.Parameter,
    }));
    this.setState({ listKPIV13: options });
  };

  getKPIV14 = async () => {
    const array = await httpClient.get(
      server.PARAMML_URL + "/" + this.state.KPIV14_Table
    );
    const options = array.data.result.map((d) => ({
      label: d.Parameter,
    }));
    this.setState({ listKPIV14: options });
  };

  getKPIV15 = async () => {
    const array = await httpClient.get(
      server.PARAMML_URL + "/" + this.state.KPIV15_Table
    );
    const options = array.data.result.map((d) => ({
      label: d.Parameter,
    }));
    this.setState({ listKPIV15: options });
  };


  HandleClickSuccess() {
    Swal.fire({
      icon: "success",
      title: "Success",
      type: "success",
      text: "Please click CSV download to proceed.",
    });
  }

  render() {
    return (
      <div class="content-wrapper">
        <div className="content" style={{ paddingTop: 50 }}>
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Analysis Dataset Dashboard</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="/Home">Home</a>
                    </li>
                    <li className="breadcrumb-item active">
                      Analysis Dataset Dashboard
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            {/* /.container-fluid */}
          </section>
        </div>

        <div className="content" style={{ paddingTop: 10 }}>
          <div class="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card card-primary card-outline">
                  <div className="card-header">
                    <h3 className="card-title">
                      <label>Predict Motor Model</label>
                    </h3>
                  </div>

                  <div className="card-body">
                    <div className="row">
                      {/* //Select Critiria "Model" */}
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Model</label>
                          <Select
                            options={this.state.listModel}
                            onChange={async (e) => {
                              await this.setState({ model: e.label });
                              await this.getProductionline();
                            }}
                            placeholder="Select Model"
                          />
                        </div>
                      </div>

                      {/* //Select Critiria "No. of KPIV" */}
                      {/* <div className="col-md-3">
                        <div className="form-group">
                          <label>No. of KPIV</label>
                          <Select placeholder="No. of KPIV" />
                        </div>
                      </div> */}

                      {/* //Select Critiria "Production line" */}
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Production line</label>
                          <Select
                            options={this.state.listProductionline}
                            value={this.state.productionline[0]}
                            onChange={async (e) => {
                              await this.setState({ productionline: [] });
                              this.state.productionline.push({
                                label: e.label,
                              });                              
                            }}
                            // type="text"
                            // className="form-control"
                            placeholder="Select Production Line"
                          />
                        </div>
                      </div>

                       {/* //Select Select Date */}
                       <div className="col-md-3">
                        <div className="form-group">
                          <label>Start Date</label>
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

                      <div className="col-md-3"></div>

                      {/* //Select Critiria "table in database" */}
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>KPOV Data Source</label>
                          <Select
                            options={this.state.listDataSourceKPOV}
                            onChange={async (e) => {
                              await this.setState({ KPOV_Table: e.label });
                              await this.getKPOV();
                            }}
                            placeholder="Select Process"
                          />
                        </div>
                      </div>                  

                      {/* //Select Critiria "KPIV" */}
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>KPOV</label>
                          <Select
                            options={this.state.listKPOV}
                            onChange={async (e) => {
                              await this.setState({ KPOV: e.label });
                            }}
                            placeholder="Select Parameter"
                          />
                        </div>
                      </div>                     

                      {/* //Select Select Date */}
                      <div className="col-md-3">
                        <div className="form-group">
                          <label>Finish Date</label>
                          <input
                            value={this.state.finishDate}
                            onChange={(e) => {
                              this.setState({ finishDate: e.target.value });
                            }}
                            type="date"
                            className="form-control"
                          />
                        </div>
                      </div>

                      <div className="col-md-3"></div>

                      <div className="col-md-4">
                        <h2>MBA KPIV</h2>
                      </div>
                      <div className="col-md-4">
                        <h2>Rotor KPIV</h2>
                      </div>
                      <div className="col-md-4">
                        <h2>SHA KPIV</h2>
                      </div>

                      {/* //Select Critiria "table in database" */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>KPIV 1 Data Source</label>
                          <Select
                            options={this.state.listDataSourceMBA}
                            onChange={async (e) => {
                              await this.setState({ KPIV1_Table: e.label });
                              await this.getKPIV1();
                            }}
                            placeholder="Select Process"
                          />
                        </div>
                      </div>                  

                      {/* //Select Critiria "KPIV" */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>KPIV 1</label>
                          <Select
                            options={this.state.listKPIV1}
                            onChange={async (e) => {
                              await this.setState({ KPIV1: e.label });
                            }}
                            placeholder="Select Parameter"
                          />
                        </div>
                      </div>
                      {/* //Select Critiria "table in database" */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>KPIV 6 Data Source</label>
                          <Select
                            options={this.state.listDataSourceRotor}
                            onChange={async (e) => {
                              await this.setState({ KPIV6_Table: e.label });
                              await this.getKPIV6();
                            }}
                            placeholder="Select Process"
                          />
                        </div>
                      </div>                  

                      {/* //Select Critiria "KPIV" */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>KPIV 6</label>
                          <Select
                            options={this.state.listKPIV6}
                            onChange={async (e) => {
                              await this.setState({ KPIV6: e.label });
                            }}
                            placeholder="Select Parameter"
                          />
                        </div>
                      </div>
                      {/* //Select Critiria "table in database" */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>KPIV 11 Data Source</label>
                          <Select
                            options={this.state.listDataSourceBase}
                            onChange={async (e) => {
                              await this.setState({ KPIV11_Table: e.label });
                              await this.getKPIV11();
                            }}
                            placeholder="Select Process"
                          />
                        </div>
                      </div>                  

                      {/* //Select Critiria "KPIV" */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>KPIV 11</label>
                          <Select
                            options={this.state.listKPIV11}
                            onChange={async (e) => {
                              await this.setState({ KPIV11: e.label });
                            }}
                            placeholder="Select Parameter"
                          />
                        </div>
                      </div>


                      {/* //Select Critiria "table in database" */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>KPIV 2 Data Source</label>
                          <Select
                            options={this.state.listDataSourceMBA}
                            onChange={async (e) => {
                              await this.setState({ KPIV2_Table: e.label });
                              await this.getKPIV2();
                            }}
                            placeholder="Select Process"
                          />
                        </div>
                      </div>

                      {/* //Select Critiria "KPIV" */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>KPIV 2</label>
                          <Select
                            options={this.state.listKPIV2}
                            onChange={async (e) => {
                              await this.setState({ KPIV2: e.label });
                            }}
                            placeholder="Select Parameter"
                          />
                        </div>
                      </div>
                      {/* //Select Critiria "table in database" */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>KPIV 7 Data Source</label>
                          <Select
                            options={this.state.listDataSourceRotor}
                            onChange={async (e) => {
                              await this.setState({ KPIV7_Table: e.label });
                              await this.getKPIV7();
                            }}
                            placeholder="Select Process"
                          />
                        </div>
                      </div>

                      {/* //Select Critiria "KPIV" */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>KPIV 7</label>
                          <Select
                            options={this.state.listKPIV7}
                            onChange={async (e) => {
                              await this.setState({ KPIV7: e.label });
                            }}
                            placeholder="Select Parameter"
                          />
                        </div>
                      </div>
                      {/* //Select Critiria "table in database" */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>KPIV 12 Data Source</label>
                          <Select
                            options={this.state.listDataSourceBase}
                            onChange={async (e) => {
                              await this.setState({ KPIV12_Table: e.label });
                              await this.getKPIV12();
                            }}
                            placeholder="Select Process"
                          />
                        </div>
                      </div>

                      {/* //Select Critiria "KPIV" */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>KPIV 12</label>
                          <Select
                            options={this.state.listKPIV12}
                            onChange={async (e) => {
                              await this.setState({ KPIV12: e.label });
                            }}
                            placeholder="Select Parameter"
                          />
                        </div>
                      </div>


                      {/* //Select Critiria "table in database" */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>KPIV 3 Data Source</label>
                          <Select
                            options={this.state.listDataSourceMBA}
                            onChange={async (e) => {
                              await this.setState({ KPIV3_Table: e.label });
                              await this.getKPIV3();
                            }}
                            placeholder="Select Process"
                          />
                        </div>
                      </div>

                      {/* //Select Critiria "KPIV" */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>KPIV 3</label>
                          <Select
                            options={this.state.listKPIV3}
                            onChange={async (e) => {
                              await this.setState({ KPIV3: e.label });
                            }}
                            placeholder="Select Parameter"
                          />
                        </div>
                      </div>
                      {/* //Select Critiria "table in database" */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>KPIV 8 Data Source</label>
                          <Select
                            options={this.state.listDataSourceRotor}
                            onChange={async (e) => {
                              await this.setState({ KPIV8_Table: e.label });
                              await this.getKPIV8();
                            }}
                            placeholder="Select Process"
                          />
                        </div>
                      </div>

                      {/* //Select Critiria "KPIV" */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>KPIV 8</label>
                          <Select
                            options={this.state.listKPIV8}
                            onChange={async (e) => {
                              await this.setState({ KPIV8: e.label });
                            }}
                            placeholder="Select Parameter"
                          />
                        </div>
                      </div>
                      {/* //Select Critiria "table in database" */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>KPIV 13 Data Source</label>
                          <Select
                            options={this.state.listDataSourceBase}
                            onChange={async (e) => {
                              await this.setState({ KPIV13_Table: e.label });
                              await this.getKPIV13();
                            }}
                            placeholder="Select Process"
                          />
                        </div>
                      </div>

                      {/* //Select Critiria "KPIV" */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>KPIV 13</label>
                          <Select
                            options={this.state.listKPIV13}
                            onChange={async (e) => {
                              await this.setState({ KPIV13: e.label });
                            }}
                            placeholder="Select Parameter"
                          />
                        </div>
                      </div>


                      {/* //Select Critiria "table in database" */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>KPIV 4 Data Source</label>
                          <Select
                            options={this.state.listDataSourceMBA}
                            onChange={async (e) => {
                              await this.setState({ KPIV4_Table: e.label });
                              await this.getKPIV4();
                            }}
                            placeholder="Select Process"
                          />
                        </div>
                      </div>

                      {/* //Select Critiria "KPIV" */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>KPIV 4</label>
                          <Select
                            options={this.state.listKPIV4}
                            onChange={async (e) => {
                              await this.setState({ KPIV4: e.label });
                            }}
                            placeholder="Select Parameter"
                          />
                        </div>
                      </div>
                      {/* //Select Critiria "table in database" */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>KPIV 9 Data Source</label>
                          <Select
                            options={this.state.listDataSourceRotor}
                            onChange={async (e) => {
                              await this.setState({ KPIV9_Table: e.label });
                              await this.getKPIV9();
                            }}
                            placeholder="Select Process"
                          />
                        </div>
                      </div>

                      {/* //Select Critiria "KPIV" */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>KPIV 9</label>
                          <Select
                            options={this.state.listKPIV9}
                            onChange={async (e) => {
                              await this.setState({ KPIV9: e.label });
                            }}
                            placeholder="Select Parameter"
                          />
                        </div>
                      </div>
                      {/* //Select Critiria "table in database" */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>KPIV 14 Data Source</label>
                          <Select
                            options={this.state.listDataSourceBase}
                            onChange={async (e) => {
                              await this.setState({ KPIV14_Table: e.label });
                              await this.getKPIV14();
                            }}
                            placeholder="Select Process"
                          />
                        </div>
                      </div>

                      {/* //Select Critiria "KPIV" */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>KPIV 14</label>
                          <Select
                            options={this.state.listKPIV14}
                            onChange={async (e) => {
                              await this.setState({ KPIV14: e.label });
                            }}
                            placeholder="Select Parameter"
                          />
                        </div>
                      </div>


                      {/* //Select Critiria "table in database" */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>KPIV 5 Data Source</label>
                          <Select
                            options={this.state.listDataSourceMBA}
                            onChange={async (e) => {
                              await this.setState({ KPIV5_Table: e.label });
                              await this.getKPIV5();
                            }}
                            placeholder="Select Process"
                          />
                        </div>
                      </div>

                      {/* //Select Critiria "KPIV" */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>KPIV 5</label>
                          <Select
                            options={this.state.listKPIV5}
                            onChange={async (e) => {
                              await this.setState({ KPIV5: e.label });
                            }}
                            placeholder="Select Parameter"
                          />
                        </div>
                      </div>
                      {/* //Select Critiria "table in database" */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>KPIV 10 Data Source</label>
                          <Select
                            options={this.state.listDataSourceRotor}
                            onChange={async (e) => {
                              await this.setState({ KPIV10_Table: e.label });
                              await this.getKPIV10();
                            }}
                            placeholder="Select Process"
                          />
                        </div>
                      </div>

                      {/* //Select Critiria "KPIV" */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>KPIV 10</label>
                          <Select
                            options={this.state.listKPIV10}
                            onChange={async (e) => {
                              await this.setState({ KPIV10: e.label });
                            }}
                            placeholder="Select Parameter"
                          />
                        </div>
                      </div>
                      {/* //Select Critiria "table in database" */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>KPIV 15 Data Source</label>
                          <Select
                            options={this.state.listDataSourceBase}
                            onChange={async (e) => {
                              await this.setState({ KPIV15_Table: e.label });
                              await this.getKPIV15();
                            }}
                            placeholder="Select Process"
                          />
                        </div>
                      </div>

                      {/* //Select Critiria "KPIV" */}
                      <div className="col-md-2">
                        <div className="form-group">
                          <label>KPIV 15</label>
                          <Select
                            options={this.state.listKPIV15}
                            onChange={async (e) => {
                              await this.setState({ KPIV15: e.label });
                            }}
                            placeholder="Select Parameter"
                          />
                        </div>
                      </div>


                      {/* Submit button */}
                      <div className="col-md-1">
                        <button
                          disabled={this.state.isDisable}
                          onClick={(e) => {
                            this.setState({ isDisable: true });
                            Swal.fire({
                              icon: "info",
                              title: "Loading Data",
                              timer: 1800000,
                              allowOutsideClick: false,
                              didOpen: async () => {
                                Swal.showLoading();
                                await this.doGetDataML();
                                Swal.close();
                              },
                            }).then(() => {
                              if (this.doGetDataML !== "") {
                                Swal.fire({
                                  icon: "success",
                                  title: "Success",
                                  type: "success",
                                  text: "Please click CSV download to proceed",
                                });
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
                          Create
                        </button>
                      </div>                      

                      <div class="col-4">
                        <CSVLink data={this.state.allData}>
                          <button
                            className="btn btn-success"
                            style={{ marginTop: 30 }}
                          >
                            Download
                          </button>
                        </CSVLink>
                      </div>

                      {/* <div class="col-3">
                        <CSVLink data={this.state.data}>
                          <button
                            className="btn btn-danger"
                            style={{ marginTop: 30 }}
                          >
                            Cancel
                          </button>
                        </CSVLink>
                      </div> */}
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

export default DataML;