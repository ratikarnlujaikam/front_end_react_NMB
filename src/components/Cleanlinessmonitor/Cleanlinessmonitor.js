import React, { Component, useState } from "react";
import { key, server } from "../../constants";
import { httpClient } from "../../utils/HttpClient";
import moment from "moment";
import Select from "react-select";
import Swal from "sweetalert2";
import { CSVLink } from "react-csv";
import { CheckboxGroup } from "react-bootstrap";


function Dropdown2() {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select Customer</option>
        <option value="option1">Seagate</option>
        <option value="option2">Luminar</option>
      </select>
    </div>
  );
}
function Lotnowwtb() {
  const [textValue, setTextValue] = useState("");

  const handleTextChange = (event) => {
    setTextValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={textValue} onChange={handleTextChange} />
    </div>
  );
}


function Materialtb() {
  const [textValue, setTextValue] = useState("");

  const handleTextChange = (event) => {
    setTextValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={textValue} onChange={handleTextChange} />
    </div>
  );
}
function ModelNametb() {
  const [textValue, setTextValue] = useState("");

  const handleTextChange = (event) => {
    setTextValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={textValue} onChange={handleTextChange} />
    </div>
  );
}

function Basetb() {
  const [textValue, setTextValue] = useState("");

  const handleTextChange = (event) => {
    setTextValue(event.target.value);
  };

  return (
    <div>
      <input type="text" value={textValue} onChange={handleTextChange} />
    </div>
  );
}
function Table() {
  const [headers, setHeaders] = useState([
    "Test item",
    "Instruments",
    "Data Quantity",
    "Remark",
  ]);
  const [data, setData] = useState([
    ["LPC", "", "", ""],
    ["Spray LPC", "", "", ""],
    ["APA", "", "", ""],
    ["Talc by tape", "", "", ""],
    ["FTIR", "", "", ""],
    ["IC", "", "", ""],
    ["NVR", "", "", ""],
    ["Outgas day 0", "", "", ""],
    ["Outgas day 14", "", "", ""],
    ["Ghost test", "", "", ""],
    ["Dynamic disk ghost", "", "", ""],
    ["Extractable", "", "", ""],
    ["Corrosion", "", "", ""],
    ["Particle count", "", "", ""],
  ]);

  const handleHeaderChange = (event, index) => {
    const newHeaders = [...headers];
    newHeaders[index] = event.target.value;
    setHeaders(newHeaders);
  };

  const handleCellChange = (event, rowIndex, colIndex) => {
    const newData = [...data];
    newData[rowIndex][colIndex] = event.target.value;
    setData(newData);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>
                <input
                  type="text"
                  value={header}
                  onChange={(event) => handleHeaderChange(event, index)}
                />
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>
                  <input
                    type="text"
                    value={cell}
                    onChange={(event) =>
                      handleCellChange(event, rowIndex, colIndex)
                    }
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
class Cleanlinessmonitor extends Component {
  render() {
    return (
      <div className="content" style={{ paddingTop: 50 }}>
        <div className="card card-primary card-outline">
          <div className="card-header">
            <section className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-5"></div>
                  <div
                    className="col-sm-4"
                    style={{
                      fontFamily: "Times New Roman",
                      textDecoration: "underline",
                    }}
                  >
                    <h1>Analysis request(Monitoring)</h1>
                  </div>
                  <div className="col-sm-3">
                    <ol className="breadcrumb float-sm-right">
                      <li
                        className="breadcrumb-item"
                        style={{ fontFamily: "Times New Roman" }}
                      >
                        <a href="/Home">Home</a>
                      </li>
                      <li className="breadcrumb-item active">
                        Analysis request(Monitoring)
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="row-mb-12" style={{ paddingTop: 50 }}>
            <div className="row">
              <div className="col-1"></div>
              <div className="col-1" style={{ fontFamily: "Times New Roman" }}>
                <h5>Request no.</h5>
              </div>
              {/* <div className="col-1"></div> */}
            </div>
            <div className="row">
              <div className="col-1"></div>
              <div
                className="col-3"
                style={{
                  fontFamily: "Times New Roman",
    
                }}
              >
                <h5>Request date</h5>
              </div>

              <div className="col-1"></div>
            </div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col-1" style={{ fontFamily: "Times New Roman" }}>
              <h5>Request by</h5>
            </div>
            <div className="col-3" style={{ fontFamily: "Times New Roman" , color: "blue" }}>
              <h5>Spindle motor</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col-1" style={{ fontFamily: "Times New Roman" }}>
              <h5>Submitted to </h5>
            </div>
            <div
              className="col-2"
              style={{ fontFamily: "Times New Roman", color: "blue" }}
            >
              <h5>Suchada Pattamasut</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col-1" style={{ fontFamily: "Times New Roman" }}>
              <h5>Request type</h5>
            </div>
            <div
              className="col-2"
              style={{ fontFamily: "Times New Roman", color: "blue" }}
            >
              <h5>Daily</h5>
            </div>
          </div>
          <div className="row">            
            <div className="col-1"></div>
            <div
              className="col-1"
              style={{ fontFamily: "Times New Roman", paddingTop: 40 }}
            >
              <h5>Status</h5>
            </div>
            <div className="col-3" style={{ fontFamily: "Times New Roman" , color: "red", paddingTop: 40 }}>
              <h5>Complete</h5>
            </div>
          </div>
          <div className="row">          
            <div className="col-1"></div>
            <div
              className="col-1"
              style={{ fontFamily: "Times New Roman", paddingTop: 40 }}
            >
              <h5>Division</h5>
            </div>
            <div
              className="col-2"
              style={{
                fontFamily: "Times New Roman",
                color: "blue",
                paddingTop: 40,
              }}
            >
            <h5>Spindle motor</h5>
            </div>
          </div>
          <div className="row">            
            <div className="col-1"></div>
            <div
              className="col-1"
              style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
            >
              <h5>Section</h5>
            </div>
            <div
              className="col-2"
              style={{
                fontFamily: "Times New Roman",
                color: "blue",
                paddingTop: 10,
              }}
            >
            <h5>IOT</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div
              className="col-1"
              style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
            >
              <h5>Sample name</h5>
            </div>
            <div
              className="col-2"
              style={{
                fontFamily: "Times New Roman",
                color: "blue",
                paddingTop: 10,
              }}
            >
            <h5>Motor</h5>
            </div>
          </div>
          <div className="row">           
            <div className="col-1"></div>
            <div
              className="col-1"
              style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
            >
              <h5>Lot No./WW</h5>
            </div>
            <div
              className="col-2"
              style={{
                fontFamily: "Times New Roman",
                color: "blue",
                paddingTop: 10,
              }}
            >
            <h5>WW#39</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div
              className="col-1"
              style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
            >
              <h5>Test Team : </h5>
            </div>
          </div>
          <div className="row">
            <div className="col-1"></div>
            <div className="col-1"></div>
            <div
              className="col-10"
              style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
            >
              <Table />
            </div>
          </div>
          <div className="row">

            <div className="col-1"></div>
            <div
              className="col-1"
              style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
            >
              <h5> Remark : </h5>
            </div>
            <div
              className="col-2"
              style={{
                fontFamily: "Times New Roman",
                color: "blue",
                paddingTop: 10,
                paddingBottom : 50
              }}
            >
              <Basetb />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cleanlinessmonitor;
