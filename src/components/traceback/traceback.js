import React, { Component } from "react";
import { server } from "../../constants";
import { httpClient } from "../../utils/HttpClient";
import Swal from "sweetalert2";

import { CSVLink } from "react-csv";

class traceback extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rotor: [],
      motordim: [],
      motorEWMS: [],
      motorhipot: [],
      motorno: "",
      listMotorno: [],
      motorDL: [],

      AutoGerman: [],
      AutoKZW: [],
      ManualAX: [],
      ManualOil: [],
      rotorno: "",
      listRotorno: [],

      motorRcard: "card collapsed-card",
      motorDcard: "card collapsed-card",
      motorEcard: "card collapsed-card",
      motorFcard: "card collapsed-card",

      autoGcard: "card collapsed-card",
      autoKcard: "card collapsed-card",
      manualAXcard: "card collapsed-card",
      manualOFcard: "card collapsed-card",

      isDisable: false,
    };
  }

  // window.location.reload(); refresh page

  isMotornoDuplicate = () => {
    if (this.state.listMotorno.includes(this.state.motorno)) {
      return true;
    } else {
      return false;
    }
  };

  isRotornoDuplicate = () => {
    if (this.state.listRotorno.includes(this.state.rotorno)) {
      return true;
    } else {
      return false;
    }
  };

  doGetDataMotor = async () => {
    let result = await httpClient.get(
      server.TRACEBACK_URL + "/" + this.state.motorno
    );
    const newRotor = result.data.resultrotor;
    // const oldRotor = this.state.rotor;
    // const mergeRotor = oldRotor.concat(newRotor);

    const newMotordim = result.data.resultdim;
    // const oldMotordim = this.state.motordim;
    // const mergeMotordim = oldMotordim.concat(newMotordim);

    const newMotorEWMS = result.data.resultEWMS;
    // const oldMotorEWMS = this.state.motorEWMS;
    // const mergeMotorEWMS = oldMotorEWMS.concat(newMotorEWMS);

    const newMotorhipot = result.data.resulthipot;
    // const oldMotorhipot = this.state.motorhipot;
    // const mergeMotorhipot = oldMotorhipot.concat(newMotorhipot);

    const newMotorDL = [
      ...newRotor,
      ...newMotordim,
      ...newMotorEWMS,
      ...newMotorhipot,
    ];

    this.setState({
      // rotor: mergeRotor,
      // motordim: mergeMotordim,
      // motorEWMS: mergeMotorEWMS,
      // motorhipot: mergeMotorhipot,
      rotor: newRotor,
      motordim: newMotordim,
      motorEWMS: newMotorEWMS,
      motorhipot: newMotorhipot,
      isDisable: false,
      motorDL: newMotorDL,
    });

    if (this.state.rotor != null) {
      if (this.state.rotor.length > 0) {
        this.setState({motorRcard: "card"})
      }
      else {
        this.setState({motorRcard: "card collapsed-card"})
      }
    }
    if (this.state.motordim != null) {
      if (this.state.motordim.length > 0) {
        this.setState({motorDcard: "card"})
      }
      else {
        this.setState({motorDcard: "card collapsed-card"})
      }
    }
    if (this.state.motorEWMS != null) {
      if (this.state.motorEWMS.length > 0) {
        this.setState({motorEcard: "card"})
      }
      else {
        this.setState({motorEcard: "card collapsed-card"})
      }
    }
    if (this.state.motorhipot != null) {
      if (this.state.motorhipot.length > 0) {
        this.setState({motorFcard: "card"})
      }
      else {
        this.setState({motorFcard: "card collapsed-card"})
      }
    }
    // console.log(result.data.resultrotor);
    console.log(newMotorDL);
    console.log(newMotordim);
  };

  doGetDataRotor = async () => {
    let result = await httpClient.get(
      server.TRACEBACKROTOR_URL + "/" + this.state.rotorno
    );
    const newAutoGerman = result.data.AutoGerman;
    // const oldAutoGerman = this.state.AutoGerman;
    // const mergeAutoGerman = oldAutoGerman.concat(newAutoGerman);

    const newAutoKZW = result.data.AutoKZW;
    // const oldAutoKZW = this.state.AutoKZW;
    // const mergeAutoKZW = oldAutoKZW.concat(newAutoKZW);

    const newManualAX = result.data.ManualAX;
    // const oldManualAX = this.state.ManualAX;
    // const mergeManualAX = oldManualAX.concat(newManualAX);

    const newManualOil = result.data.ManualOil;
    // const oldManualOil = this.state.ManualOil;
    // const mergeManualOil = oldManualOil.concat(newManualOil);

    this.setState({
      // AutoGerman: mergeAutoGerman,
      // AutoKZW: mergeAutoKZW,
      // ManualAX: mergeManualAX,
      // ManualOil: mergeManualOil,
      AutoGerman: newAutoGerman,
      AutoKZW: newAutoKZW,
      ManualAX: newManualAX,
      ManualOil: newManualOil,
      isDisable: false,
    });

    if (this.state.AutoGerman != null) {
      if (this.state.AutoGerman.length > 0) {
        this.setState({autoGcard: "card"})
      }
      else {
        this.setState({autoGcard: "card collapsed-card"})
      }
    }
    if (this.state.AutoKZW != null) {
      if (this.state.AutoKZW.length > 0) {
        this.setState({autoKcard: "card"})
      }
      else {
        this.setState({autoKcard: "card collapsed-card"})
      }
    }
    if (this.state.ManualAX != null) {
      if (this.state.ManualAX.length > 0) {
        this.setState({manualAXcard: "card"})
      }
      else {
        this.setState({manualAXcard: "card collapsed-card"})
      }
    }
    if (this.state.ManualOil != null) {
      if (this.state.ManualOil.length > 0) {
        this.setState({manualOFcard: "card"})
      }
      else {
        this.setState({manualOFcard: "card collapsed-card"})
      }
    }

    // console.log(result.data.resultrotor);
  };

  // componentDidMount = async () => {
  //   let result = await httpClient.get(
  //     server.TRACEBACK_URL + "/" + this.state.motorno
  //   );
  //   this.setState({
  //     rotor: result.data.resultrotor,
  //     motordim: result.data.resultdim,
  //     motorEWMS: result.data.resultEWMS,
  //     motorhipot: result.data.resulthipot,
  //   });
  //   console.log(result.data.result);
  // };

  renderTableRotor = () => {
    console.log(this.state.rotor);
    if (this.state.rotor != null) {
      if (this.state.rotor.length > 0) {
        return this.state.rotor.map((item) => (
          <tr>
            <td>{item["Model_rotor"]}</td>
            <td>{item["Barcode_Rotor"]}</td>
            <td>{item["Date_rotor"]}</td>
            <td>{item["Line_rotor"]}</td>
            <td>{item["Time_axial"]}</td>
            <td>{item["Axial_Play"]}</td>
            <td>{item["MC_Axial_Play"]}</td>
            <td>{item["Time_oiltop"]}</td>
            <td>{item["Oil_Top"]}</td>
            <td>{item["MC_Oil_Top"]}</td>
            <td>{item["Time_oilbottom"]}</td>
            <td>{item["Oil_Bottom"]}</td>
            <td>{item["MC_Oil_Bottom"]}</td>
          </tr>
        ));
      }
    }
  };

  renderTableMotorDim = () => {
    if (this.state.motordim != null) {
      if (this.state.motordim.length > 0) {
        return this.state.motordim.map((item) => (
          <tr>
            <td>{item["Model_dim"]}</td>
            <td>{item["Barcode_Motor"]}</td>
            <td>{item["Date_dim"]}</td>
            <td>{item["Time_dim"]}</td>
            <td>{item["Line_dim"]}</td>
            <td>{item["Set_Dim"]}</td>
            <td>{item["Pivot_Height"]}</td>
            <td>{item["Parallelism"]}</td>
            <td>{item["FlyHeight"]}</td>
            <td>{item["Projection1"]}</td>
            <td>{item["Ramp_Pivot"]}</td>
            <td>{item["Machine_no"]}</td>
          </tr>
        ));
      }
    }
  };

  renderTableMotorEWMS = () => {
    if (this.state.motorEWMS != null) {
      if (this.state.motorEWMS.length > 0) {
        return this.state.motorEWMS.map((item) => (
          <tr>
            <td>{item["Time EWMS"]}</td>
            <td>{item["ke_avg"]}</td>
            <td>{item["ke_ripple"]}</td>
            <td>{item["run_current"]}</td>
            <td>{item["TIR_probe_A"]}</td>
            <td>{item["NRRO_probe_A"]}</td>
            <td>{item["TIR_probe_B"]}</td>
            <td>{item["NRRO_probe_B"]}</td>
            <td>{item["RVA"]}</td>
            <td>{item["NRRO_ax_FFT_1"]}</td>
            <td>{item["NRRO_rad_FFT_1"]}</td>
            <td>{item["brg_drag"]}</td>
            <td>{item["Bemf_balance"]}</td>
            <td>{item["Machine_no"]}</td>
          </tr>
        ));
      }
    }
  };

  renderTableMotorFuncTest = () => {
    if (this.state.motorhipot != null) {
      if (this.state.motorhipot.length > 0) {
        return this.state.motorhipot.map((item) => (
          <tr>
            <td>{item["Time_Hipot"]}</td>
            <td>{item["R1_UV"]}</td>
            <td>{item["R2_UW"]}</td>
            <td>{item["R3_VW"]}</td>
            <td>{item["R_max_min"]}</td>
            <td>{item["Machine_no"]}</td>
          </tr>
        ));
      }
    }
  };

  renderTableAutoGerman = () => {
    if (this.state.AutoGerman != null) {
      if (this.state.AutoGerman.length > 0) {
        return this.state.AutoGerman.map((item) => (
          <tr>
            <td>{item["Date"]}</td>
            <td>{item["Time"]}</td>
            <td>{item["Line"]}</td>
            <td>{item["Mover"]}</td>
            <td>{item["Model"]}</td>
            <td>{item["Barcode"]}</td>
            <td>{item["Axial_Play_Press_Station_Number"]}</td>
            <td>{item["Axial_Play"]}</td>
            <td>{item["OilUp_1_Amount"]}</td>
            <td>{item["OilUp_2_Amount"]}</td>
            <td>{item["OilLow_1_Amount"]}</td>
            <td>{item["OilLow_2_Amount"]}</td>
          </tr>
        ));
      }
    }
  };

  renderTableAutoKZW = () => {
    if (this.state.AutoKZW != null) {
      if (this.state.AutoKZW.length > 0) {
        return this.state.AutoKZW.map((item) => (
          <tr>
            <td>{item["Date"]}</td>
            <td>{item["Time"]}</td>
            <td>{item["Line"]}</td>
            <td>{item["Machine"]}</td>
            <td>{item["Model"]}</td>
            <td>{item["Barcode"]}</td>
            <td>{item["Axial_Play_Press_Number"]}</td>
            <td>{item["Axial_Play"]}</td>
            <td>{item["Oil_Up_number"]}</td>
            <td>{item["Oil_Up_Amount"]}</td>
            <td>{item["Oil_Low_number"]}</td>
            <td>{item["Oil_Low_Amount"]}</td>
          </tr>
        ));
      }
    }
  };

  renderTableManualAX = () => {
    if (this.state.ManualAX != null) {
      if (this.state.ManualAX.length > 0) {
        return this.state.ManualAX.map((item) => (
          <tr>
            <td>{item["Date"]}</td>
            <td>{item["Time"]}</td>
            <td>{item["Line"]}</td>
            <td>{item["Machine"]}</td>
            <td>{item["Model"]}</td>
            <td>{item["Barcode"]}</td>
            <td>{item["Axial_Play"]}</td>
          </tr>
        ));
      }
    }
  };

  renderTableManualOil = () => {
    if (this.state.ManualOil != null) {
      if (this.state.ManualOil.length > 0) {
        return this.state.ManualOil.map((item) => (
          <tr>
            <td>{item["Date"]}</td>
            <td>{item["Time"]}</td>
            <td>{item["Line"]}</td>
            <td>{item["Machine"]}</td>
            <td>{item["Model"]}</td>
            <td>{item["Part_ID"]}</td>
            <td>{item["Oilfill"]}</td>
          </tr>
        ));
      }
    }
  };

  render() {
    return (
      <div className="content-wrapper">
        <div className="content" style={{ paddingTop: 50 }}>
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Traceability</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="/Home">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Traceability</li>
                  </ol>
                </div>
              </div>
            </div>
            {/* /.container-fluid */}
          </section>
        </div>

        <div className="content-header">
          <div class="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card card-primary card-outline">
                  <div className="card-body">
                    <div className="row">
                      <div className="input-group">
                        <input
                          value={this.state.rotorno}
                          onChange={async (e) => {
                            await this.setState({
                              rotorno: e.target.value,
                            });
                          }}
                          type="text"
                          className="form-control"
                          placeholder="Scan Rotor Barcode Here"
                        />
                        <span className="input-group-append">
                          <button
                            disabled={this.state.isDisable}
                            type="button"
                            className="btn btn-info btn-flat"
                            onClick={async (e) => {
                              if (!this.isRotornoDuplicate()) {
                                this.setState({ isDisable: true });
                                const listRotorno = this.state.listRotorno;
                                listRotorno.push(this.state.rotorno);
                                this.setState({ listRotorno });
                                Swal.fire({
                                  icon: "info",
                                  title: "Loading Data",
                                  timer: 120000,
                                  allowOutsideClick: false,
                                  didOpen: async () => {
                                    Swal.showLoading();
                                    await this.doGetDataRotor();
                                    Swal.close();
                                  },
                                }).then(() => {
                                  if (this.doGetDataRotor !== "") {
                                    Swal.fire({
                                      icon: "success",
                                      title: "Success",
                                      type: "success",
                                      text: "Data has been loaded successfully",
                                    });
                                  }
                                });
                              } else {
                                Swal.fire({
                                  icon: "error",
                                  title: "Barcode duplicate!!",
                                });
                              }
                            }}
                          >
                            Submit!
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-body" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div className={this.state.autoGcard}>
            <div className="card-header border-transparent">
              <h3 className="card-title">Auto German</h3>
              <div className="card-tools">
                <CSVLink data={this.state.AutoGerman}>
                  <button type="button" className="btn btn-info btn-flat">
                    Download
                  </button>
                </CSVLink>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <i className="fas fa-plus" />
                </button>
              </div>
            </div>

            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table m-0">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Line</th>
                      <th>Mover</th>
                      <th>Model</th>
                      <th>Barcode</th>
                      <th>Axial Play M/C no.</th>
                      <th>Axial Play</th>
                      <th>Oil Top 1</th>
                      <th>Oil Top 2</th>
                      <th>Oil Bottom 1</th>
                      <th>Oil Bottom 2</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderTableAutoGerman()}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="card-body" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div className={this.state.autoKcard}>
            <div className="card-header border-transparent">
              <h3 className="card-title">Auto KZW</h3>
              <div className="card-tools">
                <CSVLink data={this.state.AutoKZW}>
                  <button type="button" className="btn btn-info btn-flat">
                    Download
                  </button>
                </CSVLink>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <i className="fas fa-plus" />
                </button>
              </div>
            </div>

            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table m-0">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Line</th>
                      <th>Machine</th>
                      <th>Model</th>
                      <th>Barcode</th>
                      <th>Axial Play M/C no.</th>
                      <th>Axial Play</th>
                      <th>Oil Top M/C no.</th>
                      <th>Oil Top</th>
                      <th>Oil Bottom M/C no.</th>
                      <th>Oil Bottom</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderTableAutoKZW()}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="card-body" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div className={this.state.manualAXcard}>
            <div className="card-header border-transparent">
              <h3 className="card-title">Manual Axial Play</h3>
              <div className="card-tools">
                <CSVLink data={this.state.ManualAX}>
                  <button type="button" className="btn btn-info btn-flat">
                    Download
                  </button>
                </CSVLink>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <i className="fas fa-plus" />
                </button>
              </div>
            </div>

            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table m-0">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Line</th>
                      <th>Machine</th>
                      <th>Model</th>
                      <th>Barcode</th>
                      <th>Axial Play</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderTableManualAX()}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="card-body" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div className={this.state.manualOFcard}>
            <div className="card-header border-transparent">
              <h3 className="card-title">Manual Oil fill</h3>
              <div className="card-tools">
                <CSVLink data={this.state.ManualOil}>
                  <button type="button" className="btn btn-info btn-flat">
                    Download
                  </button>
                </CSVLink>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <i className="fas fa-plus" />
                </button>
              </div>
            </div>

            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table m-0">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Time</th>
                      <th>Line</th>
                      <th>Machine</th>
                      <th>Model</th>
                      <th>Barcode</th>
                      <th>Oil Fill</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderTableManualOil()}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="content" style={{ paddingTop: 50 }}>
          <div className="content-header">
            <div class="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="card card-primary card-outline">
                    <div className="card-body">
                      <div className="row">
                        <div className="input-group ">
                          <input
                            value={this.state.motorno}
                            onChange={async (e) => {
                              await this.setState({
                                motorno: e.target.value,
                              });
                            }}
                            type="text"
                            className="form-control"
                            placeholder="Scan Motor Barcode Here"
                          />
                          <span className="input-group-append">
                            <button
                              disabled={this.state.isDisable}
                              type="button"
                              className="btn btn-info btn-flat"
                              onClick={async (e) => {
                                if (!this.isMotornoDuplicate()) {
                                  this.setState({ isDisable: true });
                                  const listMotorno = this.state.listMotorno;
                                  listMotorno.push(this.state.motorno);
                                  this.setState({ listMotorno });
                                  Swal.fire({
                                    icon: "info",
                                    title: "Loading Data",
                                    timer: 120000,
                                    allowOutsideClick: false,
                                    didOpen: async () => {
                                      Swal.showLoading();
                                      await this.doGetDataMotor();
                                      Swal.close();
                                    },
                                  }).then(() => {
                                    if (this.doGetDataMotor !== "") {
                                      Swal.fire({
                                        icon: "success",
                                        title: "Success",
                                        type: "success",
                                        text:
                                          "Data has been loaded successfully",
                                      });
                                    }
                                  });
                                } else {
                                  Swal.fire({
                                    icon: "error",
                                    title: "Barcode duplicate!!",
                                  });
                                }
                              }}
                            >
                              Submit!
                            </button>
                            {/* <CSVLink data={this.state.motorDL}>
                              <button
                                type="button"
                                className="btn btn-info btn-flat">
                                  Download
                              </button>
                            </CSVLink> */}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-body" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div className={this.state.motorRcard}>
            <div className="card-header border-transparent">
              <h3 className="card-title">Rotor</h3>
              <div className="card-tools">
                <CSVLink data={this.state.rotor}>
                  <button type="button" className="btn btn-info btn-flat">
                    Download
                  </button>
                </CSVLink>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <i className="fas fa-plus" />
                </button>
              </div>
            </div>

            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table m-0">
                  <thead>
                    <tr>
                      <th width="100">Model</th>
                      <th width="100">Barcode Rotor</th>
                      <th width="100">Date</th>
                      <th width="100">Line</th>
                      <th width="100">Time</th>
                      <th width="100">Axial Play</th>
                      <th width="150">MC Axial Play </th>
                      <th width="100">Time</th>
                      <th width="100">Oil Top</th>
                      <th width="150">MC Oil Top</th>
                      <th width="100">Time</th>
                      <th width="120">Oil Bottom</th>
                      <th width="150">MC Oil Bottom</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderTableRotor()}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="card-body" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div className={this.state.motorDcard}>
            <div className="card-header border-transparent">
              <h3 className="card-title">Motor Dimension</h3>
              <div className="card-tools">
                <CSVLink data={this.state.motordim}>
                  <button type="button" className="btn btn-info btn-flat">
                    Download
                  </button>
                </CSVLink>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <i className="fas fa-plus" />
                </button>
              </div>
            </div>

            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table m-0">
                  <thead>
                    <tr>
                      <th width="80">Model</th>
                      <th width="80">Barcode Motor</th>
                      <th width="80">Date</th>
                      <th width="80">Time</th>
                      <th width="80">Line</th>
                      <th width="100">Set Dim</th>
                      <th width="100">Pivot Height</th>
                      <th width="100">Parallelism</th>
                      <th width="100">FlyHeight</th>
                      <th width="100">Projection</th>
                      <th width="100">Ramp Pivot</th>
                      <th width="120">Machine no.</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderTableMotorDim()}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="card-body" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div className={this.state.motorEcard}>
            <div className="card-header border-transparent">
              <h3 className="card-title">Motor EWMS</h3>
              <div className="card-tools">
                <CSVLink data={this.state.motorEWMS}>
                  <button type="button" className="btn btn-info btn-flat">
                    Download
                  </button>
                </CSVLink>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <i className="fas fa-plus" />
                </button>
              </div>
            </div>

            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table m-0">
                  <thead>
                    <tr>
                      <th width="100">Time EWMS</th>
                      <th width="100">ke avg</th>
                      <th width="100">ke ripple</th>
                      <th width="100">Run Current</th>
                      <th width="100">TIR Probe A</th>
                      <th width="100">NRRO Probe A</th>
                      <th width="100">TIR Probe B</th>
                      <th width="100">NRRO Probe B</th>
                      <th width="100">RVA</th>
                      <th width="100">NRRO ax FFT 1</th>
                      <th width="100">NRRO rad FFT 1</th>
                      <th width="100">brg drag</th>
                      <th width="100">Bemf balance</th>
                      <th width="120">Machine no.</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderTableMotorEWMS()}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="card-body" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div className={this.state.motorFcard}>
            <div className="card-header border-transparent">
              <h3 className="card-title">Motor Function Test</h3>
              <div className="card-tools">
                <CSVLink data={this.state.motorhipot}>
                  <button type="button" className="btn btn-info btn-flat">
                    Download
                  </button>
                </CSVLink>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <i className="fas fa-plus" />
                </button>
              </div>
            </div>

            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table m-0">
                  <thead>
                    <tr>
                      <th>Time Hi-pot</th>
                      <th>R1 (U-V)</th>
                      <th>R2 (U-W)</th>
                      <th>R3 (V-W)</th>
                      <th>R max-min</th>
                      <th>Machine no.</th>
                    </tr>
                  </thead>
                  <tbody>{this.renderTableMotorFuncTest()}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default traceback;