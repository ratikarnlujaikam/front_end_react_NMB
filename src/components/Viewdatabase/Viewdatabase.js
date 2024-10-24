import React, { Component, useState } from "react";
import { key, server,apiUrl,Url } from "../../constants";
import { httpClient } from "../../utils/HttpClient";
import Chart from "react-apexcharts";
import moment from "moment";
import Select from "react-select";
import Swal from "sweetalert2";
import { CSVLink } from "react-csv";
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import { Button, Card, Container, /* other components */ } from 'semantic-ui-react';


function YourComponent({ onFileUpload }) {
  const [file, setFile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  async function handleUpload(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch(`${apiUrl}upload`, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      console.log('Success:', result);

      // Call onFileUpload with the actual name of the uploaded file
      onFileUpload(file.name);

      // Reset file state
      setFile(null);

      // Exit edit mode
      setIsEditing(false);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  function handleFile(event) {
    setFile(event.target.files[0]);
  }

  function handleEditClick() {
    setIsEditing(true);
  }

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleUpload}>
          <input type="file" name="file" onChange={handleFile} />
          <button type="submit">Upload</button>
        </form>
      ) : (
        <button onClick={handleEditClick}>Edit</button>
      )}
    </div>
  );
}




class Viewdatabase extends Component {
  constructor(props) {
    super(props);

    //set state
    this.state = {
      report2: [],
      report3: [],
      report4: [],
      report5: [],
      report6: [],
      report7: [],
      report8: [],
      report9: [],
      report10: [],
      selectedOption: '',
      selectedOptionstatus: '',
      selectedRequestType: null,

      Raw_Dat2: [],
      isEditing: false,
      editedMSL: "",
      editedMSLaccept: "",
      editedMSLcheckpoint: "",
      editedRowDateTime: {},
      editedRowIndex: null, // Track the index of the row being edited
      optionSelected: null,
      isDisable: false,
    };



  }
  handleRadioChangeallrequest = async () => {
    try {
      //this.setState({ report2: '' });
      this.setState({ report3: '' });
      this.setState({ report4: '' });
      this.setState({ report5: '' });
      this.setState({ report6: '' });
      this.setState({ report7: '' });
      this.setState({ report8: '' });
      this.setState({ report9: '' });
      this.setState({ report10: '' });
      this.setState({ selectedOption: '' });
      this.setState({ selectedOptionstatus: '' });




      Swal.fire({
        icon: "info",
        title: "Loading Data",
        timer: 60000,
        allowOutsideClick: false,
        didOpen: async () => {
          Swal.showLoading();
          await this.doGetDataCleanliness();
          // await this.doGetShipmentbylotqanumber();

          Swal.close();
        },
      }).then(() => {
        if (this.state.report2.length > 0) {
          if (this.state.report2[0].Docno.length > 0) {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Data has been loaded successfully",
            });
          } else if (
            this.state.report2[0].Docno.length == 0
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
            title:
              "Data loading has encountered some error, please try again",
          });
        }
      });
    } catch (error) {
      console.error('Error:', error);
      // Handle any specific error scenarios
    }
  };
  handleRadioChangeseagate = async () => {
    try {
      this.setState({ report2: '' });
      // this.setState({ report3: '' });
      this.setState({ report4: '' });
      this.setState({ report5: '' });
      this.setState({ report6: '' });
      this.setState({ report7: '' });
      this.setState({ report8: '' });
      this.setState({ report9: '' });
      this.setState({ report10: '' });
      this.setState({ selectedOptionstatus: '' });
      Swal.fire({
        icon: "info",
        title: "Loading Data",
        timer: 60000,
        allowOutsideClick: false,
        didOpen: async () => {
          Swal.showLoading();
          await this.doGetDataCleanlinessseagate();
          // await this.doGetShipmentbylotqanumber();

          Swal.close();
        },
      }).then(() => {
        if (this.state.report3.length > 0) {
          if (this.state.report3[0].Docno.length > 0) {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Data has been loaded successfully",
            });
          } else if (
            this.state.report3[0].Docno.length == 0
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
            title:
              "Data loading has encountered some error, please try again",
          });
        }
      });
    } catch (error) {
      console.error('Error:', error);
      // Handle any specific error scenarios
    }
  };
  handleRadioChangeLuminar = async () => {
    try {
      this.setState({ report2: '' });
      this.setState({ report3: '' });
      //this.setState({ report4: '' });
      this.setState({ report5: '' });
      this.setState({ report6: '' });
      this.setState({ report7: '' });
      this.setState({ report8: '' });
      this.setState({ report9: '' });
      this.setState({ report10: '' });
      //this.setState({ selectedOption: ''});
      this.setState({ selectedOptionstatus: '' });
      Swal.fire({
        icon: "info",
        title: "Loading Data",
        timer: 60000,
        allowOutsideClick: false,
        didOpen: async () => {
          Swal.showLoading();
          await this.doGetDataCleanlinessLuminar();
          // await this.doGetShipmentbylotqanumber();

          Swal.close();
        },
      }).then(() => {
        if (this.state.report4.length > 0) {
          if (this.state.report4[0].Docno.length > 0) {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Data has been loaded successfully",
            });
          } else if (
            this.state.report4[0].Docno.length == 0
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
            title:
              "Data loading has encountered some error, please try again",
          });
        }
      });
    } catch (error) {
      console.error('Error:', error);
      // Handle any specific error scenarios
    }
  };
  handleRadioChangeDatetoCL = async () => {
    try {
      this.setState({ report2: '' });
      this.setState({ report3: '' });
      this.setState({ report4: '' });
      //this.setState({ report5: '' });
      this.setState({ report6: '' });
      this.setState({ report7: '' });
      this.setState({ report8: '' });
      this.setState({ report9: '' });
      this.setState({ report10: '' });
      this.setState({ selectedOption: '' });
      this.setState({ selectedOptionstatus: '' });
      Swal.fire({
        icon: "info",
        title: "Loading Data",
        timer: 60000,
        allowOutsideClick: false,
        didOpen: async () => {
          Swal.showLoading();
          await this.doGetDataCleanlinessDatetoCL();
          // await this.doGetShipmentbylotqanumber();

          Swal.close();
        },
      }).then(() => {
        if (this.state.report5.length > 0) {
          if (this.state.report5[0].Docno.length > 0) {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Data has been loaded successfully",
            });
          } else if (
            this.state.report5[0].Docno.length == 0
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
            title:
              "Data loading has encountered some error, please try again",
          });
        }
      });
    } catch (error) {
      console.error('Error:', error);
      // Handle any specific error scenarios
    }
  };
  handleRadioChangeshipmentdate = async () => {
    try {
      this.setState({ report2: '' });
      this.setState({ report3: '' });
      this.setState({ report4: '' });
      this.setState({ report5: '' });
      //this.setState({ report6: '' });
      this.setState({ report7: '' });
      this.setState({ report8: '' });
      this.setState({ report9: '' });
      this.setState({ report10: '' });
      this.setState({ selectedOption: '' });
      this.setState({ selectedOptionstatus: '' });
      Swal.fire({
        icon: "info",
        title: "Loading Data",
        timer: 60000,
        allowOutsideClick: false,
        didOpen: async () => {
          Swal.showLoading();
          await this.doGetDataCleanlinessshipmentdate();
          // await this.doGetShipmentbylotqanumber();

          Swal.close();
        },
      }).then(() => {
        if (this.state.report6.length > 0) {
          if (this.state.report6[0].Docno.length > 0) {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Data has been loaded successfully",
            });
          } else if (
            this.state.report6[0].Docno.length == 0
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
            title:
              "Data loading has encountered some error, please try again",
          });
        }
      });
    } catch (error) {
      console.error('Error:', error);
      // Handle any specific error scenarios
    }
  };
  handleRadioChangeapproval = async () => {
    try {
      this.setState({ report2: '' });
      this.setState({ report3: '' });
      this.setState({ report4: '' });
      this.setState({ report5: '' });
      this.setState({ report6: '' });
      //this.setState({ report7: '' });
      this.setState({ report8: '' });
      this.setState({ report9: '' });
      this.setState({ report10: '' });
      this.setState({ selectedOption: '' });
      //this.setState({ selectedOptionstatus: '' });
      Swal.fire({
        icon: "info",
        title: "Loading Data",
        timer: 60000,
        allowOutsideClick: false,
        didOpen: async () => {
          Swal.showLoading();
          await this.doGetDataCleanlinessapproval();
          // await this.doGetShipmentbylotqanumber();

          Swal.close();
        },
      }).then(() => {
        if (this.state.report7.length > 0) {
          if (this.state.report7[0].Docno.length > 0) {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Data has been loaded successfully",
            });
          } else if (
            this.state.report7[0].Docno.length == 0
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
            title:
              "Data loading has encountered some error, please try again",
          });
        }
      });
    } catch (error) {
      console.error('Error:', error);
      // Handle any specific error scenarios
    }
  };
  handleRadioChangeReject = async () => {
    try {
      this.setState({ report2: '' });
      this.setState({ report3: '' });
      this.setState({ report4: '' });
      this.setState({ report5: '' });
      this.setState({ report6: '' });
      this.setState({ report7: '' });
      //this.setState({ report8: '' });
      this.setState({ report9: '' });
      this.setState({ report10: '' });
      this.setState({ selectedOption: '' });
      //this.setState({ selectedOptionstatus: '' });
      Swal.fire({
        icon: "info",
        title: "Loading Data",
        timer: 60000,
        allowOutsideClick: false,
        didOpen: async () => {
          Swal.showLoading();
          await this.doGetDataCleanlinessReject();
          // await this.doGetShipmentbylotqanumber();

          Swal.close();
        },
      }).then(() => {
        if (this.state.report8.length > 0) {
          if (this.state.report8[0].Docno.length > 0) {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Data has been loaded successfully",
            });
          } else if (
            this.state.report8[0].Docno.length == 0
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
            title:
              "Data loading has encountered some error, please try again",
          });
        }
      });
    } catch (error) {
      console.error('Error:', error);
      // Handle any specific error scenarios
    }
  };
  handleRadioChangewaitingMg = async () => {
    try {
      this.setState({ report2: '' });
      this.setState({ report3: '' });
      this.setState({ report4: '' });
      this.setState({ report5: '' });
      this.setState({ report6: '' });
      this.setState({ report7: '' });
      this.setState({ report8: '' });
      //this.setState({ report9: '' });
      this.setState({ report10: '' });
      this.setState({ selectedOption: '' });
      //this.setState({ selectedOptionstatus: '' });
      Swal.fire({
        icon: "info",
        title: "Loading Data",
        timer: 60000,
        allowOutsideClick: false,
        didOpen: async () => {
          Swal.showLoading();
          await this.doGetDataCleanlinesswaitingMg();
          // await this.doGetShipmentbylotqanumber();

          Swal.close();
        },
      }).then(() => {
        if (this.state.report9.length > 0) {
          if (this.state.report9[0].Docno.length > 0) {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Data has been loaded successfully",
            });
          } else if (
            this.state.report9[0].Docno.length == 0
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
            title:
              "Data loading has encountered some error, please try again",
          });
        }
      });
    } catch (error) {
      console.error('Error:', error);
      // Handle any specific error scenarios
    }
  };
  handleRadioChangewaitingCL = async () => {
    try {
      this.setState({ report2: '' });
      this.setState({ report3: '' });
      this.setState({ report4: '' });
      this.setState({ report5: '' });
      this.setState({ report6: '' });
      this.setState({ report7: '' });
      this.setState({ report8: '' });
      this.setState({ report9: '' });
      //this.setState({ report10: '' });
      this.setState({ selectedOption: '' });
      //this.setState({ selectedOptionstatus: '' });
      Swal.fire({
        icon: "info",
        title: "Loading Data",
        timer: 60000,
        allowOutsideClick: false,
        didOpen: async () => {
          Swal.showLoading();
          await this.doGetDataCleanlinesswaitingCL();
          // await this.doGetShipmentbylotqanumber();

          Swal.close();
        },
      }).then(() => {
        if (this.state.report10.length > 0) {
          if (this.state.report10[0].Docno.length > 0) {
            Swal.fire({
              icon: "success",
              title: "Success",
              text: "Data has been loaded successfully",
            });
          } else if (
            this.state.report10[0].Docno.length == 0
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
            title:
              "Data loading has encountered some error, please try again",
          });
        }
      });
    } catch (error) {
      console.error('Error:', error);
      // Handle any specific error scenarios
    }
  };


  doGetDataCleanliness = async () => {
    try {
      const result = await httpClient.get(server.DataCleanliness_URL);
      const rawData = result.data.listRawData2;
      const flattenedRawData = rawData.reduce((acc, curr) => acc.concat(curr), []);

      this.setState({
        Raw_Dat2: flattenedRawData,
        report2: result.data.result,
        isDisable: false,
      });
    } catch (error) {
      // Handle errors, e.g., show an error message.
    }
  };
  doGetDataCleanlinessseagate = async () => {
    try {
      const result = await httpClient.get(server.DataCleanlinessseagate_URL);
      const rawData = result.data.listRawData3;
      const flattenedRawData = rawData.reduce((acc, curr) => acc.concat(curr), []);

      this.setState({
        Raw_Dat3: flattenedRawData,
        report3: result.data.result,
        isDisable: false,
      });
    } catch (error) {
      // Handle errors, e.g., show an error message.
    }
  };
  doGetDataCleanlinessLuminar = async () => {
    try {
      const result = await httpClient.get(server.DataCleanlinessLuminar_URL);
      const rawData = result.data.listRawData4;
      const flattenedRawData = rawData.reduce((acc, curr) => acc.concat(curr), []);

      this.setState({
        Raw_Dat4: flattenedRawData,
        report4: result.data.result,
        isDisable: false,
      });
    } catch (error) {
      // Handle errors, e.g., show an error message.
    }
  };

  doGetDataCleanlinessDatetoCL = async () => {
    try {
      const result = await httpClient.get(server.DataCleanlinessdatetoCL_URL);
      const rawData = result.data.listRawData5;
      const flattenedRawData = rawData.reduce((acc, curr) => acc.concat(curr), []);

      this.setState({
        Raw_Dat5: flattenedRawData,
        report5: result.data.result,
        isDisable: false,
      });
    } catch (error) {
      // Handle errors, e.g., show an error message.
    }
  };
  doGetDataCleanlinessshipmentdate = async () => {
    try {
      const result = await httpClient.get(server.Datacleanlinessshipmentdate_URL);
      const rawData = result.data.listRawData6;
      const flattenedRawData = rawData.reduce((acc, curr) => acc.concat(curr), []);

      this.setState({
        Raw_Dat6: flattenedRawData,
        report6: result.data.result,
        isDisable: false,
      });
    } catch (error) {
      // Handle errors, e.g., show an error message.
    }
  };
  doGetDataCleanlinessapproval = async () => {
    try {
      const result = await httpClient.get(server.Datacleanlinessapproval_URL);
      const rawData = result.data.listRawData7;
      const flattenedRawData = rawData.reduce((acc, curr) => acc.concat(curr), []);

      this.setState({
        Raw_Dat7: flattenedRawData,
        report7: result.data.result,
        isDisable: false,
      });
    } catch (error) {
      // Handle errors, e.g., show an error message.
    }
  };
  doGetDataCleanlinessReject = async () => {
    try {
      const result = await httpClient.get(server.DatacleanlinessReject_URL);
      const rawData = result.data.listRawData8;
      const flattenedRawData = rawData.reduce((acc, curr) => acc.concat(curr), []);

      this.setState({
        Raw_Dat8: flattenedRawData,
        report8: result.data.result,
        isDisable: false,
      });
    } catch (error) {
      // Handle errors, e.g., show an error message.
    }
  };
  doGetDataCleanlinesswaitingMg = async () => {
    try {
      const result = await httpClient.get(server.DatacleanlinesswaitingMG_URL);
      const rawData = result.data.listRawData9;
      const flattenedRawData = rawData.reduce((acc, curr) => acc.concat(curr), []);

      this.setState({
        Raw_Dat9: flattenedRawData,
        report9: result.data.result,
        isDisable: false,
      });
    } catch (error) {
      // Handle errors, e.g., show an error message.
    }
  };
  doGetDataCleanlinesswaitingCL = async () => {
    try {
      const result = await httpClient.get(server.DatacleanlinesswaitingCL_URL);
      const rawData = result.data.listRawData10;
      const flattenedRawData = rawData.reduce((acc, curr) => acc.concat(curr), []);

      this.setState({
        Raw_Dat10: flattenedRawData,
        report10: result.data.result,
        isDisable: false,
      });
    } catch (error) {
      // Handle errors, e.g., show an error message.
    }
  };

  handleRadioChange = (event) => {
    this.setState({ selectedOption: event.target.value });
  };

  handleRadioChangestatus = (event) => {
    this.setState({ selectedOptionstatus: event.target.value });
  };
  renderReport10 = () => {
    if (this.state.report10 && this.state.report10.length > 0) {
      return this.state.report10.map((item, index) => (
        <tr key={item.Docno}>
          <td>{item.Docno}</td>
          <td>
            <a
              href={`${Url}cleanlinessspecialview?docNo=${item.Docno}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Link {item.Docno}
            </a>
          </td>
          <td>{item.Status}</td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_no' ? (
              <input
                type="text"
                value={this.state.editedMSL_no}
                onChange={(e) => this.handleInputChange(e, 'editedMSL_no')}
              />
            ) : (
              item.MSL_no
            )}
          </td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_no' ? (
              <button onClick={() => this.handleSaveMSL_no(index)}>Save</button>
            ) : (
              <button onClick={() => this.handleEditMSL_no(index)}>Edit</button>
            )}
          </td>
          <td>{item.sample_buildMBA_date}</td>
          <td>{item.ModelName}</td>
          <td>{item.WW}</td>
          <td>{item.Datecode}</td>
          <td>{item.samplename}</td>
          <td>{item.Samlplesenddate_Cleanliness}</td>
          <td>{item.CommittedShipmentDate}</td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_accept_date' ? (
              <input
                type="text"
                value={this.state.editedMSL_accept_date}
                onChange={(e) => this.handleInputChangeMSLaccept(e, 'editedMSL_accept_date')}
              />
            ) : (
              item.MSL_accept_date
            )}
          </td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_accept_date' ? (
              <button onClick={() => this.handleSaveMSL_accept_date(index)}>Save</button>
            ) : (
              <button onClick={() => this.handleEditMSL_accept_date(index)}>Edit</button>
            )}
          </td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_check_point_date' ? (
              <input
                type="text"
                value={this.state.editedMSL_check_point_date}
                onChange={(e) => this.handleInputChangecheckpoint(e, 'editedMSL_check_point_date')}
              />
            ) : (
              item.MSL_check_point_date
            )}
          </td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_check_point_date' ? (
              <button onClick={() => this.handleSaveMSL_check_point_date(index)}>Save</button>
            ) : (
              <button onClick={() => this.handleEditMSL_check_point_date(index)}>Edit</button>
            )}
          </td>
          <td>{item.Time_and_date_received_sample}</td>
          <td>
            <a
              href={`${apiUrl}cleanliness-files/${item.filename}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.filename}
            </a>
          </td>
          <td>
            <YourComponent onFileUpload={(fileName) => this.handleFileUpload(index, fileName)} />
          </td>

        </tr>
      ));
    }
  };
  renderReport9 = () => {
    if (this.state.report9 && this.state.report9.length > 0) {
      return this.state.report9.map((item, index) => (
        <tr key={item.Docno}>
          <td>{item.Docno}</td>
          <td>
            <a
              href={`${Url}cleanlinessspecialview?docNo=${item.Docno}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Link {item.Docno}
            </a>
          </td>
          <td>{item.Status}</td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_no' ? (
              <input
                type="text"
                value={this.state.editedMSL_no}
                onChange={(e) => this.handleInputChange(e, 'editedMSL_no')}
              />
            ) : (
              item.MSL_no
            )}
          </td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_no' ? (
              <button onClick={() => this.handleSaveMSL_no(index)}>Save</button>
            ) : (
              <button onClick={() => this.handleEditMSL_no(index)}>Edit</button>
            )}
          </td>
          <td>{item.sample_buildMBA_date}</td>
          <td>{item.ModelName}</td>
          <td>{item.WW}</td>
          <td>{item.Datecode}</td>
          <td>{item.samplename}</td>
          <td>{item.Samlplesenddate_Cleanliness}</td>
          <td>{item.CommittedShipmentDate}</td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_accept_date' ? (
              <input
                type="text"
                value={this.state.editedMSL_accept_date}
                onChange={(e) => this.handleInputChangeMSLaccept(e, 'editedMSL_accept_date')}
              />
            ) : (
              item.MSL_accept_date
            )}
          </td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_accept_date' ? (
              <button onClick={() => this.handleSaveMSL_accept_date(index)}>Save</button>
            ) : (
              <button onClick={() => this.handleEditMSL_accept_date(index)}>Edit</button>
            )}
          </td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_check_point_date' ? (
              <input
                type="text"
                value={this.state.editedMSL_check_point_date}
                onChange={(e) => this.handleInputChangecheckpoint(e, 'editedMSL_check_point_date')}
              />
            ) : (
              item.MSL_check_point_date
            )}
          </td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_check_point_date' ? (
              <button onClick={() => this.handleSaveMSL_check_point_date(index)}>Save</button>
            ) : (
              <button onClick={() => this.handleEditMSL_check_point_date(index)}>Edit</button>
            )}
          </td>
          <td>{item.Time_and_date_received_sample}</td>
          <td>
            <a
              href={`${apiUrl}cleanliness-files/${item.filename}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.filename}
            </a>
          </td>
          <td>
            <YourComponent onFileUpload={(fileName) => this.handleFileUpload(index, fileName)} />
          </td>

        </tr>
      ));
    }
  };
  renderReport8 = () => {
    if (this.state.report8 && this.state.report8.length > 0) {
      return this.state.report8.map((item, index) => (
        <tr key={item.Docno}>
          <td>{item.Docno}</td>
          <td>
            <a
              href={`${Url}cleanlinessspecialview?docNo=${item.Docno}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Link {item.Docno}
            </a>
          </td>
          <td>{item.Status}</td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_no' ? (
              <input
                type="text"
                value={this.state.editedMSL_no}
                onChange={(e) => this.handleInputChange(e, 'editedMSL_no')}
              />
            ) : (
              item.MSL_no
            )}
          </td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_no' ? (
              <button onClick={() => this.handleSaveMSL_no(index)}>Save</button>
            ) : (
              <button onClick={() => this.handleEditMSL_no(index)}>Edit</button>
            )}
          </td>
          <td>{item.sample_buildMBA_date}</td>
          <td>{item.ModelName}</td>
          <td>{item.WW}</td>
          <td>{item.Datecode}</td>
          <td>{item.samplename}</td>
          <td>{item.Samlplesenddate_Cleanliness}</td>
          <td>{item.CommittedShipmentDate}</td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_accept_date' ? (
              <input
                type="text"
                value={this.state.editedMSL_accept_date}
                onChange={(e) => this.handleInputChangeMSLaccept(e, 'editedMSL_accept_date')}
              />
            ) : (
              item.MSL_accept_date
            )}
          </td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_accept_date' ? (
              <button onClick={() => this.handleSaveMSL_accept_date(index)}>Save</button>
            ) : (
              <button onClick={() => this.handleEditMSL_accept_date(index)}>Edit</button>
            )}
          </td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_check_point_date' ? (
              <input
                type="text"
                value={this.state.editedMSL_check_point_date}
                onChange={(e) => this.handleInputChangecheckpoint(e, 'editedMSL_check_point_date')}
              />
            ) : (
              item.MSL_check_point_date
            )}
          </td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_check_point_date' ? (
              <button onClick={() => this.handleSaveMSL_check_point_date(index)}>Save</button>
            ) : (
              <button onClick={() => this.handleEditMSL_check_point_date(index)}>Edit</button>
            )}
          </td>
          <td>{item.Time_and_date_received_sample}</td>
          <td>
            <a
              href={`${apiUrl}cleanliness-files/${item.filename}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.filename}
            </a>
          </td>
          <td>
            <YourComponent onFileUpload={(fileName) => this.handleFileUpload(index, fileName)} />
          </td>

        </tr>
      ));
    }
  };
  renderReport7 = () => {
    if (this.state.report7 && this.state.report7.length > 0) {
      return this.state.report7.map((item, index) => (
        <tr key={item.Docno}>
          <td>{item.Docno}</td>
          <td>
            <a
              href={`${Url}cleanlinessspecialview?docNo=${item.Docno}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Link {item.Docno}
            </a>
          </td>
          <td>{item.Status}</td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_no' ? (
              <input
                type="text"
                value={this.state.editedMSL_no}
                onChange={(e) => this.handleInputChange(e, 'editedMSL_no')}
              />
            ) : (
              item.MSL_no
            )}
          </td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_no' ? (
              <button onClick={() => this.handleSaveMSL_no(index)}>Save</button>
            ) : (
              <button onClick={() => this.handleEditMSL_no(index)}>Edit</button>
            )}
          </td>
          <td>{item.sample_buildMBA_date}</td>
          <td>{item.ModelName}</td>
          <td>{item.WW}</td>
          <td>{item.Datecode}</td>
          <td>{item.samplename}</td>
          <td>{item.Samlplesenddate_Cleanliness}</td>
          <td>{item.CommittedShipmentDate}</td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_accept_date' ? (
              <input
                type="text"
                value={this.state.editedMSL_accept_date}
                onChange={(e) => this.handleInputChangeMSLaccept(e, 'editedMSL_accept_date')}
              />
            ) : (
              item.MSL_accept_date
            )}
          </td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_accept_date' ? (
              <button onClick={() => this.handleSaveMSL_accept_date(index)}>Save</button>
            ) : (
              <button onClick={() => this.handleEditMSL_accept_date(index)}>Edit</button>
            )}
          </td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_check_point_date' ? (
              <input
                type="text"
                value={this.state.editedMSL_check_point_date}
                onChange={(e) => this.handleInputChangecheckpoint(e, 'editedMSL_check_point_date')}
              />
            ) : (
              item.MSL_check_point_date
            )}
          </td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_check_point_date' ? (
              <button onClick={() => this.handleSaveMSL_check_point_date(index)}>Save</button>
            ) : (
              <button onClick={() => this.handleEditMSL_check_point_date(index)}>Edit</button>
            )}
          </td>
          <td>{item.Time_and_date_received_sample}</td>
          <td>
            <a
              href={`${apiUrl}cleanliness-files/${item.filename}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.filename}
            </a>
          </td>
          <td>
            <YourComponent onFileUpload={(fileName) => this.handleFileUpload(index, fileName)} />
          </td>

        </tr>
      ));
    }
  };
  renderReport6 = () => {
    if (this.state.report6 && this.state.report6.length > 0) {
      return this.state.report6.map((item, index) => (
        <tr key={item.Docno}>
          <td>{item.Docno}</td>
          <td>
            <a
              href={`${Url}cleanlinessspecialview?docNo=${item.Docno}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Link {item.Docno}
            </a>
          </td>
          <td>{item.Status}</td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_no' ? (
              <input
                type="text"
                value={this.state.editedMSL_no}
                onChange={(e) => this.handleInputChange(e, 'editedMSL_no')}
              />
            ) : (
              item.MSL_no
            )}
          </td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_no' ? (
              <button onClick={() => this.handleSaveMSL_no(index)}>Save</button>
            ) : (
              <button onClick={() => this.handleEditMSL_no(index)}>Edit</button>
            )}
          </td>
          <td>{item.sample_buildMBA_date}</td>
          <td>{item.ModelName}</td>
          <td>{item.WW}</td>
          <td>{item.Datecode}</td>
          <td>{item.samplename}</td>
          <td>{item.Samlplesenddate_Cleanliness}</td>
          <td>{item.CommittedShipmentDate}</td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_accept_date' ? (
              <input
                type="text"
                value={this.state.editedMSL_accept_date}
                onChange={(e) => this.handleInputChangeMSLaccept(e, 'editedMSL_accept_date')}
              />
            ) : (
              item.MSL_accept_date
            )}
          </td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_accept_date' ? (
              <button onClick={() => this.handleSaveMSL_accept_date(index)}>Save</button>
            ) : (
              <button onClick={() => this.handleEditMSL_accept_date(index)}>Edit</button>
            )}
          </td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_check_point_date' ? (
              <input
                type="text"
                value={this.state.editedMSL_check_point_date}
                onChange={(e) => this.handleInputChangecheckpoint(e, 'editedMSL_check_point_date')}
              />
            ) : (
              item.MSL_check_point_date
            )}
          </td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_check_point_date' ? (
              <button onClick={() => this.handleSaveMSL_check_point_date(index)}>Save</button>
            ) : (
              <button onClick={() => this.handleEditMSL_check_point_date(index)}>Edit</button>
            )}
          </td>
          <td>{item.Time_and_date_received_sample}</td>
          <td>
            <a
              href={`${apiUrl}cleanliness-files/${item.filename}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.filename}
            </a>
          </td>
          <td>
            <YourComponent onFileUpload={(fileName) => this.handleFileUpload(index, fileName)} />
          </td>

        </tr>
      ));
    }
  };
  renderReport5 = () => {
    if (this.state.report5 && this.state.report5.length > 0) {
      return this.state.report5.map((item, index) => (
        <tr key={item.Docno}>
          <td>{item.Docno}</td>
          <td>
            <a
              href={`${Url}cleanlinessspecialview?docNo=${item.Docno}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Link {item.Docno}
            </a>
          </td>
          <td>{item.Status}</td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_no' ? (
              <input
                type="text"
                value={this.state.editedMSL_no}
                onChange={(e) => this.handleInputChange(e, 'editedMSL_no')}
              />
            ) : (
              item.MSL_no
            )}
          </td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_no' ? (
              <button onClick={() => this.handleSaveMSL_no(index)}>Save</button>
            ) : (
              <button onClick={() => this.handleEditMSL_no(index)}>Edit</button>
            )}
          </td>
          <td>{item.sample_buildMBA_date}</td>
          <td>{item.ModelName}</td>
          <td>{item.WW}</td>
          <td>{item.Datecode}</td>
          <td>{item.samplename}</td>
          <td>{item.Samlplesenddate_Cleanliness}</td>
          <td>{item.CommittedShipmentDate}</td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_accept_date' ? (
              <input
                type="text"
                value={this.state.editedMSL_accept_date}
                onChange={(e) => this.handleInputChangeMSLaccept(e, 'editedMSL_accept_date')}
              />
            ) : (
              item.MSL_accept_date
            )}
          </td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_accept_date' ? (
              <button onClick={() => this.handleSaveMSL_accept_date(index)}>Save</button>
            ) : (
              <button onClick={() => this.handleEditMSL_accept_date(index)}>Edit</button>
            )}
          </td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_check_point_date' ? (
              <input
                type="text"
                value={this.state.editedMSL_check_point_date}
                onChange={(e) => this.handleInputChangecheckpoint(e, 'editedMSL_check_point_date')}
              />
            ) : (
              item.MSL_check_point_date
            )}
          </td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_check_point_date' ? (
              <button onClick={() => this.handleSaveMSL_check_point_date(index)}>Save</button>
            ) : (
              <button onClick={() => this.handleEditMSL_check_point_date(index)}>Edit</button>
            )}
          </td>
          <td>{item.Time_and_date_received_sample}</td>
          <td>
            <a
              href={`${apiUrl}cleanliness-files/${item.filename}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.filename}
            </a>
          </td>
          <td>
            <YourComponent onFileUpload={(fileName) => this.handleFileUpload(index, fileName)} />
          </td>

        </tr>
      ));
    }
  };
  renderReport3 = () => {
    if (this.state.report3 && this.state.report3.length > 0) {
      return this.state.report3.map((item, index) => (
        <tr key={item.Docno}>
          <td>{item.Docno}</td>
          <td>
            <a
              href={`${Url}cleanlinessspecialview?docNo=${item.Docno}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Link {item.Docno}
            </a>
          </td>
          <td>{item.Status}</td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_no' ? (
              <input
                type="text"
                value={this.state.editedMSL_no}
                onChange={(e) => this.handleInputChange(e, 'editedMSL_no')}
              />
            ) : (
              item.MSL_no
            )}
          </td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_no' ? (
              <button onClick={() => this.handleSaveMSL_no(index)}>Save</button>
            ) : (
              <button onClick={() => this.handleEditMSL_no(index)}>Edit</button>
            )}
          </td>
          <td>{item.sample_buildMBA_date}</td>
          <td>{item.ModelName}</td>
          <td>{item.WW}</td>
          <td>{item.Datecode}</td>
          <td>{item.samplename}</td>
          <td>{item.Samlplesenddate_Cleanliness}</td>
          <td>{item.CommittedShipmentDate}</td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_accept_date' ? (
              <input
                type="text"
                value={this.state.editedMSL_accept_date}
                onChange={(e) => this.handleInputChangeMSLaccept(e, 'editedMSL_accept_date')}
              />
            ) : (
              item.MSL_accept_date
            )}
          </td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_accept_date' ? (
              <button onClick={() => this.handleSaveMSL_accept_date(index)}>Save</button>
            ) : (
              <button onClick={() => this.handleEditMSL_accept_date(index)}>Edit</button>
            )}
          </td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_check_point_date' ? (
              <input
                type="text"
                value={this.state.editedMSL_check_point_date}
                onChange={(e) => this.handleInputChangecheckpoint(e, 'editedMSL_check_point_date')}
              />
            ) : (
              item.MSL_check_point_date
            )}
          </td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_check_point_date' ? (
              <button onClick={() => this.handleSaveMSL_check_point_date(index)}>Save</button>
            ) : (
              <button onClick={() => this.handleEditMSL_check_point_date(index)}>Edit</button>
            )}
          </td>
          <td>{item.Time_and_date_received_sample}</td>
          <td>
            <a
              href={`${apiUrl}cleanliness-files/${item.filename}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.filename}
            </a>
          </td>
          <td>
            <YourComponent onFileUpload={(fileName) => this.handleFileUpload(index, fileName)} />
          </td>

        </tr>
      ));
    }
  };
  renderReport4 = () => {
    if (this.state.report4 && this.state.report4.length > 0) {
      return this.state.report4.map((item, index) => (
        <tr key={item.Docno}>
          <td>{item.Docno}</td>
          <td>
            <a
              href={`${Url}cleanlinessspecialview?docNo=${item.Docno}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Link {item.Docno}
            </a>
          </td>
          <td>{item.Status}</td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_no' ? (
              <input
                type="text"
                value={this.state.editedMSL_no}
                onChange={(e) => this.handleInputChange(e, 'editedMSL_no')}
              />
            ) : (
              item.MSL_no
            )}
          </td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_no' ? (
              <button onClick={() => this.handleSaveMSL_no(index)}>Save</button>
            ) : (
              <button onClick={() => this.handleEditMSL_no(index)}>Edit</button>
            )}
          </td>
          <td>{item.sample_buildMBA_date}</td>
          <td>{item.ModelName}</td>
          <td>{item.WW}</td>
          <td>{item.Datecode}</td>
          <td>{item.samplename}</td>
          <td>{item.Samlplesenddate_Cleanliness}</td>
          <td>{item.CommittedShipmentDate}</td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_accept_date' ? (
              <input
                type="text"
                value={this.state.editedMSL_accept_date}
                onChange={(e) => this.handleInputChangeMSLaccept(e, 'editedMSL_accept_date')}
              />
            ) : (
              item.MSL_accept_date
            )}
          </td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_accept_date' ? (
              <button onClick={() => this.handleSaveMSL_accept_date(index)}>Save</button>
            ) : (
              <button onClick={() => this.handleEditMSL_accept_date(index)}>Edit</button>
            )}
          </td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_check_point_date' ? (
              <input
                type="text"
                value={this.state.editedMSL_check_point_date}
                onChange={(e) => this.handleInputChangecheckpoint(e, 'editedMSL_check_point_date')}
              />
            ) : (
              item.MSL_check_point_date
            )}
          </td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_check_point_date' ? (
              <button onClick={() => this.handleSaveMSL_check_point_date(index)}>Save</button>
            ) : (
              <button onClick={() => this.handleEditMSL_check_point_date(index)}>Edit</button>
            )}
          </td>
          <td>{item.Time_and_date_received_sample}</td>
          <td>
            <a
              href={`${apiUrl}cleanliness-files/${item.filename}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.filename}
            </a>
          </td>
          <td>
            <YourComponent onFileUpload={(fileName) => this.handleFileUpload(index, fileName)} />
          </td>

        </tr>
      ));
    }
  };

  renderReport2 = () => {
    if (this.state.report2 && this.state.report2.length > 0) {
      return this.state.report2.map((item, index) => (
        <tr key={item.Docno}>
          <td>{item.Docno}</td>
          <td>
            <a
              href={`${Url}cleanlinessspecialview?docNo=${item.Docno}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Link {item.Docno}
            </a>
          </td>
          <td>{item.Status}</td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_no' ? (
              <input
                type="text"
                value={this.state.editedMSL_no}
                onChange={(e) => this.handleInputChange(e, 'editedMSL_no')}
              />
            ) : (
              item.MSL_no
            )}
          </td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_no' ? (
              <button onClick={() => this.handleSaveMSL_no(index)}>Save</button>
            ) : (
              <button onClick={() => this.handleEditMSL_no(index)}>Edit</button>
            )}
          </td>
          <td>{item.sample_buildMBA_date}</td>
          <td>{item.ModelName}</td>
          <td>{item.WW}</td>
          <td>{item.Datecode}</td>
          <td>{item.samplename}</td>
          <td>{item.Samlplesenddate_Cleanliness}</td>
          <td>{item.CommittedShipmentDate}</td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_accept_date' ? (
              <input
                type="text"
                value={this.state.editedMSL_accept_date}
                onChange={(e) => this.handleInputChangeMSLaccept(e, 'editedMSL_accept_date')}
              />
            ) : (
              item.MSL_accept_date
            )}
          </td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_accept_date' ? (
              <button onClick={() => this.handleSaveMSL_accept_date(index)}>Save</button>
            ) : (
              <button onClick={() => this.handleEditMSL_accept_date(index)}>Edit</button>
            )}
          </td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_check_point_date' ? (
              <input
                type="text"
                value={this.state.editedMSL_check_point_date}
                onChange={(e) => this.handleInputChangecheckpoint(e, 'editedMSL_check_point_date')}
              />
            ) : (
              item.MSL_check_point_date
            )}
          </td>
          <td>
            {this.state.isEditing && this.state.editedRowIndex === index && this.state.editedColumn === 'MSL_check_point_date' ? (
              <button onClick={() => this.handleSaveMSL_check_point_date(index)}>Save</button>
            ) : (
              <button onClick={() => this.handleEditMSL_check_point_date(index)}>Edit</button>
            )}
          </td>
          <td>{item.Time_and_date_received_sample}</td>
          <td>
            <a
              href={`${apiUrl}cleanliness-files/${item.filename}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.filename}
            </a>
          </td>
          <td>
            <YourComponent onFileUpload={(fileName) => this.handleFileUpload(index, fileName)} />
          </td>

        </tr>
      ));
    }
  };


  // On the server side (assuming Express.js for example)


  handleFileUpload = async (index, fileName) => {
    const { report2 } = this.state;

    try {
      const editedItem = report2[index];
      console.log(fileName);
      // แก้ไข URL ตามที่คุณต้องการ

      const result = await httpClient.get(
        server.UploadFile_URL +
        "/" +
        fileName +
        "/" +
        editedItem.Docno,

      );


      // Handle the result if needed
      console.log('File upload successful. Result:', result);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };


  handleEditMSL_no = (index) => {
    const { report2 } = this.state;
    const editedMSL_no = report2[index].MSL_no;

    this.setState({
      isEditing: true,
      editedMSL_no,
      editedRowIndex: index,
      editedColumn: 'MSL_no', // Specify the edited column
    });
  };

  handleSaveMSL_no = async (index) => {
    const { report2, editedMSL_no } = this.state;

    // Update the MSL_no in your data
    report2[index].MSL_no = editedMSL_no;

    try {
      // Check if the edited row index is valid
      if (index !== null && index >= 0 && index < report2.length) {
        const editedItem = report2[index];

        const result = await httpClient.get(
          server.Viewdatabase_URL +
          "/" +
          editedItem.MSL_no +
          "/" +
          editedItem.Docno,
          { MSL_no: editedMSL_no }
        );

        // Handle the result if needed
        console.log("Save successful. Result:", result);

        this.setState({
          isEditing: false,
          editedMSL_no: "",
          editedRowIndex: null,
          editedColumn: null, // Reset edited column
        });
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  handleEditMSL_accept_date = (index) => {
    const { report2 } = this.state;
    const editedMSL_accept_date = report2[index].MSL_accept_date;

    this.setState({
      isEditing: true,
      editedMSL_accept_date,
      editedRowIndex: index,
      editedColumn: 'MSL_accept_date', // Specify the edited column
    });
  };

  handleSaveMSL_accept_date = async (index) => {
    const { report2, editedMSL_accept_date } = this.state;

    // Update the MSL_accept_date in your data
    report2[index].MSL_accept_date = editedMSL_accept_date;

    try {
      // Check if the edited row index is valid
      if (index !== null && index >= 0 && index < report2.length) {
        const editedItem = report2[index];

        const result = await httpClient.get(
          server.Viewdatabaseaccept_URL +
          "/" +
          editedItem.MSL_accept_date +
          "/" +
          editedItem.Docno,
          { MSL_accept_date: editedMSL_accept_date }
        );

        // Handle the result if needed
        console.log("Save successful. Result:", result);

        this.setState({
          isEditing: false,
          editedMSL_accept_date: "",
          editedRowIndex: null,
          editedColumn: null, // Reset edited column
        });
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };

  handleInputChange = (e, field) => {
    this.setState({ [field]: e.target.value });
  };
  handleInputChangecheckpoint = (e, field) => {
    this.setState({ [field]: e.target.value });
  };

  handleInputChangeMSLaccept = (e, field) => {
    this.setState({ [field]: e.target.value });
  };

  handleEditMSL_check_point_date = (index) => {
    const { report2 } = this.state;
    const editedMSL_check_point_date = report2[index].MSL_check_point_date;

    this.setState({
      isEditing: true,
      editedMSL_check_point_date,
      editedRowIndex: index,
      editedColumn: 'MSL_check_point_date', // Specify the edited column
    });
  };

  handleSaveMSL_check_point_date = async (index) => {
    const { report2, editedMSL_check_point_date } = this.state;

    // Update the MSL_check_point_date in your data
    report2[index].MSL_check_point_date = editedMSL_check_point_date;

    try {
      // Check if the edited row index is valid
      if (index !== null && index >= 0 && index < report2.length) {
        const editedItem = report2[index];

        const result = await httpClient.get(
          server.Viewdatabasecheckpoint_URL +
          "/" +
          editedItem.MSL_check_point_date +
          "/" +
          editedItem.Docno,
          { MSL_check_point_date: editedMSL_check_point_date }
        );

        // Handle the result if needed
        console.log("Save successful. Result:", result);

        this.setState({
          isEditing: false,
          editedMSL_check_point_date: "",
          editedRowIndex: null,
          editedColumn: null, // Reset edited column
        });
      }
    } catch (error) {
      console.error("Error saving data:", error);
    }
  };
  handleRadioChangerequesttype = (event) => {
    this.setState({ selectedRequestType: event.target.value });
  };












  render() {
    return (
      <div class="content-wrapper">
        <div className="content" style={{ paddingTop: 70 }}>
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Database Analysis for Cleanliness</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="/Home">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Database Analysis for Cleanliness</li>
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
                      <label>View of database for all </label>
                    </h3>
                    <div className="row">
                      <div className="col-1"></div>
                      <div className="col-sm-1">
                        <label>
                          <input
                            type="radio"
                            name="requestType"
                            value="FA"
                            onChange={this.handleRadioChangerequesttype}
                          />
                          FA req.
                        </label>
                      </div>
                      {/* <div className="col-sm-2">
                        <label>
                          <input
                            type="radio"
                            name="requestType"
                            value="Monitoring"
                            onChange={this.handleRadioChange}
                          />
                          Monitoring req.
                        </label>
                      </div> */}
                      {/* <div className="col-sm-2">
                        <label>
                          <input
                            type="radio"
                            name="requestType"
                            value="Special"
                            onChange={this.handleRadioChange}
                          />
                          Special request
                        </label>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {this.state.selectedRequestType && (
          // เนื้อหาที่คุณต้องการแสดงเมื่อมี radio button ถูกเลือก
          <div>
            <div className="content" style={{ paddingTop: 10 }}>
            <div class="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="card card-primary card-outline">
                    <div className="card-header">
                      <h3 className="card-title">
                        <label>View by </label>
                      </h3>
                      <div className="row">
                        <div className="col-1"></div>
                        <div className="col-sm-1">
                          <label>
                            <input
                              type="radio"
                              name="newName"
                              onChange={this.handleRadioChangeallrequest} // เพิ่ม event handler นี้
                            />
                            All request
                          </label>
                        </div>
                        <div className="col-sm-1">
                          <label>
                            <input
                              type="radio"
                              name="newName"
                              value="Customer" // Add a value for the "Customer" radio button
                              onChange={this.handleRadioChange}
                            />
                            Customer
                          </label>
                          <div>
                            {this.state.selectedOption === 'Customer' && (
                              <div>
                                <label>
                                  <input type="radio" name="customerOption" value="Seagate" onChange={this.handleRadioChangeseagate} />
                                  Seagate
                                </label>
                                <label>
                                  <input type="radio" name="customerOption" value="Luminar" onChange={this.handleRadioChangeLuminar} />
                                  Luminar
                                </label>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="col-sm-1">
                          <label>
                            <input type="radio"
                              name="newName"
                              onChange={this.handleRadioChangeDatetoCL}
                            />
                            Date to CL
                          </label>
                        </div>
                        <div className="col-2">
                          <label>
                            <input type="radio"
                              name="newName"
                              onChange={this.handleRadioChangeshipmentdate}
                            />
                            Shipment date
                          </label>
                        </div>
                        <div className="col-2" style={{ display: 'flex', flexDirection: 'column' }}>
                          <label>
                            <input
                              type="radio"
                              name="newName"
                              value="Status"
                              onChange={this.handleRadioChangestatus}
                            />
                            Status
                          </label>
                          <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {this.state.selectedOptionstatus === 'Status' && (
                              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '5px' }}>
                                <label>
                                  <input type="radio" name="customerOption" value="Approval" onChange={this.handleRadioChangeapproval} />
                                  Approval
                                </label>
                                <label>
                                  <input type="radio" name="customerOption" value="Reject" onChange={this.handleRadioChangeReject} />
                                  Reject
                                </label>
                                <label>
                                  <input type="radio" name="customerOption" value="Wait Mg. requester approval" onChange={this.handleRadioChangewaitingMg} />
                                  Wait Mg. requester approval
                                </label>
                                <label>
                                  <input type="radio" name="customerOption" value="Wait CL team approval" onChange={this.handleRadioChangewaitingCL} />
                                  Wait CL team approval
                                </label>
                              </div>

                            )}
                          </div>
                        </div>





                      </div>
                    </div>
                    <div className="col-12">
                      {/* /.card-header */}
                      <div
                        className="card-body table-responsive p-0"
                        style={{ height: 500, position: 'relative', zIndex: 0 }}
                      >
                        <table className="table table-head-fixed text-nowrap table-hover">
                          <thead>
                            <tr Align="Center">
                              <th width="175">CL No.</th>
                              <th width="175">Link database</th>
                              <th width="175">Status</th>
                              <th width="175">MSL no.</th>
                              <th width="175">Edit MSL no.</th>
                              <th width="175">Request date</th>
                              <th width="175">Model</th>
                              <th width="175">WW</th>
                              <th width="175">Datecode</th>
                              <th width="175">Sample</th>
                              <th width="175">Date to CL </th>
                              <th width="175">Shipment date</th>
                              <th width="175">MSL accept date</th>
                              <th width="175">Edit MSL accept date</th>
                              <th width="175">MSL check point date</th>
                              <th width="175">Edit MSL check point date</th>
                              <th width="175">Time and date received sample</th>
                              <th width="175">Attachment-output</th>
                              <th width="175">Upload File</th>

                            </tr>
                          </thead>
                          <tbody>{this.renderReport2()}</tbody>
                          <tbody>{this.renderReport3()}</tbody>
                          <tbody>{this.renderReport4()}</tbody>
                          <tbody>{this.renderReport5()}</tbody>
                          <tbody>{this.renderReport6()}</tbody>
                          <tbody>{this.renderReport7()}</tbody>
                          <tbody>{this.renderReport8()}</tbody>
                          <tbody>{this.renderReport9()}</tbody>
                          <tbody>{this.renderReport10()}</tbody>
                        </table>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        )}
          
        </div>
      </div>
    );
  }
}

export default Viewdatabase;
