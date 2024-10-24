import React, { Component, useState, useRef } from "react";
import { key, server } from "../../constants";
import { httpClient } from "../../utils/HttpClient";
import moment from "moment";
import Select from "react-select";
import Swal from "sweetalert2";
import { CSVLink } from "react-csv";
import { CheckboxGroup } from "react-bootstrap";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import QRCode from "qrcode.react";


function Mgrequesttextbox({
  handleTextChangeMgrequesttextbox,
  textValueMgrequesttextbox,
  // เพิ่ม prop สำหรับการเลือก option จาก dropdown
}) {
  // กำหนดค่าเริ่มต้นของ textValueMgrequesttextbox โดยใช้ selectedOptionDropdown1
  return (
    <div>
      <input
        type="text"
        value={textValueMgrequesttextbox}
        onChange={handleTextChangeMgrequesttextbox}
      />
    </div>
  );
}
function Cleanlinessdropdown({
  handleOptionChangeCleanlinessdropdown,
  selectedOptionCleanlinessdropdown,
}) {
  return (
    <div>
      <select
        value={selectedOptionCleanlinessdropdown}
        onChange={handleOptionChangeCleanlinessdropdown}
      >
        <option value="">Cleanliness</option>
        <option value="APICHART SANERJAI">APICHART SANERJAI</option>
        <option value="SUPARAT SMITHTHISOMBOON">SUPARAT SMITHTHISOMBOON</option>
        <option value="TANYATHON PRASERTLAKSAME">
          TANYATHON PRASERTLAKSAME
        </option>
      </select>
    </div>
  );
}




const NMBsampletb = ({ handleTextChangeNMBsampletb, textValueNMBsampletb }) => {
  return (
    <div>
      <input
        type="text"
        value={textValueNMBsampletb}
        onChange={(e) => handleTextChangeNMBsampletb(e.target.value)}
      />
    </div>
  );
};
const Samplesendtb = ({
  handleTextChangeSamplesendtb,
  textValueSamplesendtb,
}) => {
  return (
    <div>
      <input
        type="text"
        value={textValueSamplesendtb}
        onChange={(e) => handleTextChangeSamplesendtb(e.target.value)}
      />
    </div>
  );
};
const Samplesubtb = ({ handleTextChangeSamplesubtb, textValueSamplesubtb }) => {
  return (
    <div>
      <input
        type="text"
        value={textValueSamplesubtb}
        onChange={(e) => handleTextChangeSamplesubtb(e.target.value)}
      />
    </div>
  );
};
const Commitshiptb = ({ handleTextChangeCommitshiptb, textValueCommitshiptb }) => {
  return (
    <div>
      <input
        type="text"
        value={textValueCommitshiptb}
        onChange={(e) => handleTextChangeCommitshiptb(e.target.value)}
      />
    </div>
  );
};
function Dropdown1({ handleOptionChangeDropdown1, selectedOptionDropdown1 }) {
  const selectedValue = selectedOptionDropdown1 || "";  // หรือให้มีค่าเริ่มต้นเป็น scalar ที่เหมาะสม


  return (
    <div className="col-1">
      <select
        value={selectedValue}
        onChange={handleOptionChangeDropdown1}
      >
        <option value="">Select section</option>
        <option value="IQC">IQC</option>
        <option value="OQA">OQA</option>
        <option value="QC">QC</option>
        <option value="PD">PD</option>
        <option value="PENG">PENG</option>
        <option value="ENG">ENG</option>
        <option value="MM">MM</option>
        <option value="PC">PC</option>
        <option value="POM">POM</option>
      </select>
    </div>
  );
}

const RadioButtons2 = ({
  handleOptionChangeRadioButtons2,
  selectedOptionRadioButtons2,
}) => {
  return (
    <div>
      <div className="row">
        <div>
          <label>
            <input
              type="radio"
              value="Customer"
              checked={selectedOptionRadioButtons2 === "Customer"}
              onChange={() => handleOptionChangeRadioButtons2("Customer")}
            />
            Customer
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="Internal for"
              checked={selectedOptionRadioButtons2 === "Internal for"}
              onChange={() => handleOptionChangeRadioButtons2("Internal for")}
            />
            Internal for
          </label>
        </div>
      </div>
    </div>
  );
};
const TextBox1 = ({ handleTextChangeTextBox1, textValueTextBox1 }) => {
  return (
    <div>
      <input
        type="text"
        value={textValueTextBox1}
        onChange={(e) => handleTextChangeTextBox1(e.target.value)}
      />
    </div>
  );
};

function Dropdown2({ handleOptionChange, selectedOption1 }) {
  return (
    <div className="col-1">
      <select value={selectedOption1} onChange={handleOptionChange}>
        <option value="">Select Customer</option>
        <option value="Seagate">Seagate</option>
        <option value="Luminar">Luminar</option>
      </select>
    </div>
  );
}
const ProcessDescriptiontb = ({
  handleTextChangeProcessDescriptiontb,
  textValueProcessDescriptiontb,
}) => {
  return (
    <div>
      <input
        type="text"
        value={textValueProcessDescriptiontb}
        onChange={(e) => handleTextChangeProcessDescriptiontb(e.target.value)}
      />
    </div>
  );
};
const RadioButtons3 = ({
  handleOptionChangeRadioButtons3,
  selectedOptionRadioButtons3,
}) => {
  return (
    <div classname="col-12" style={{ fontFamily: "Times New Roman" }}>
      <div className="row">
        <div className="col-2" style={{ color: "green", fontSize: 18 }}>
          {" "}
          <label>
            <input
              type="radio"
              value="Accept"
              checked={selectedOptionRadioButtons3 === "Accept"}
              onChange={() => handleOptionChangeRadioButtons3("Accept")}
            />
            Accept
          </label>
        </div>
        <div className="col-2" style={{ color: "red", fontSize: 18 }}>
          <label>
            <input
              type="radio"
              value="Reject"
              checked={selectedOptionRadioButtons3 === "Reject"}
              onChange={() => handleOptionChangeRadioButtons3("Reject")}
            />
            Reject
          </label>
        </div>
      </div>
    </div>
  );
};
const Mgrequesttb = ({ handleTextChangeMgrequesttb, textValueMgrequesttb }) => {
  return (
    <div>
      <input
        type="text"
        value={textValueMgrequesttb}
        onChange={(e) => handleTextChangeMgrequesttb(e.target.value)}
      />
    </div>
  );
};






const Registertb = ({ handleTextChangeRegistertb, textValueRegistertb }) => {
  return (
    <div>
      <input
        type="text"
        value={textValueRegistertb}
        onChange={(e) => handleTextChangeRegistertb(e.target.value)}
      />
    </div>
  );
};

function Plarformdropdown({
  handleOptionChangeplatform,
  selectedOptionplatform,
}) {
  return (
    <div
      className="col-2"
      style={{ fontFamily: "Times New Roman", fontsize: 20 }}
    >
      <select
        value={selectedOptionplatform}
        onChange={handleOptionChangeplatform}
      >
        <option value="">Select Platform</option>
        <option value="NL air">NL air</option>
        <option value="PSG">PSG</option>
        <option value="NSG">NSG</option>
        <option value="ESG">ESG</option>
      </select>
    </div>
  );
}
const Samplenametb = ({ handleTextChange, textValue1 }) => {
  return (
    <div>
      <input type="text" value={textValue1} onChange={handleTextChange} />
    </div>
  );
};
const Revtb = ({ handleTextChangeRevtb, textValueRevtb }) => {
  return (
    <div>
      <input
        type="text"
        value={textValueRevtb}
        onChange={handleTextChangeRevtb}
      />
    </div>
  );
};
const OvenMBAtb = ({ handleTextChangeOvenMBAtb, textValueOvenMBAtb }) => {
  return (
    <div>
      <input
        type="text"
        value={textValueOvenMBAtb}
        onChange={handleTextChangeOvenMBAtb}
      />
    </div>
  );
};



const Materialtb = ({ handleTextChangeMaterialtb, textValueMaterialtb }) => {
  return (
    <div>
      <input
        type="text"
        value={textValueMaterialtb}
        onChange={handleTextChangeMaterialtb}
      />
    </div>
  );
};
const ModelNametb = ({ handleTextChangeModelNametb, textValueModelNametb }) => {
  return (
    <div>
      <input
        type="text"
        value={textValueModelNametb}
        onChange={handleTextChangeModelNametb}
      />
    </div>
  );
};
const Qtytb = ({ handleTextChangeQtytb, textValueQtytb }) => {
  return (
    <div>
      <input
        type="text"
        value={textValueQtytb}
        onChange={handleTextChangeQtytb}
      />
    </div>
  );
};
const Mbatb = ({ handleTextChangeMbatb, textValueMbatb }) => {
  return (
    <div>
      <input
        type="text"
        value={textValueMbatb}
        onChange={handleTextChangeMbatb}
      />
    </div>
  );
};
const Basetb = ({ handleTextChangeBasetb, textValueBasetb }) => {
  return (
    <div>
      <input
        type="text"
        value={textValueBasetb}
        onChange={handleTextChangeBasetb}
      />
    </div>
  );
};
const Hubtb = ({ handleTextChangeHubtb, textValueHubtb }) => {
  return (
    <div>
      <input
        type="text"
        value={textValueHubtb}
        onChange={handleTextChangeHubtb}
      />
    </div>
  );
};
const Etctb = ({ handleTextChangeEtctb, textValueEtctb }) => {
  return (
    <div>
      <input
        type="text"
        value={textValueEtctb}
        onChange={handleTextChangeEtctb}
      />
    </div>
  );
};
const PartNotb = ({ handleTextChangePartNotb, textValuePartNotb }) => {
  return (
    <div>
      <input
        type="text"
        value={textValuePartNotb}
        onChange={handleTextChangePartNotb}
      />
    </div>
  );
};
const Lotnotb = ({ handleTextChangeLotnotb, textValueLotnotb }) => {
  return (
    <div>
      <input
        type="text"
        value={textValueLotnotb}
        onChange={handleTextChangeLotnotb}
      />
    </div>
  );
};
const Motoroiltypetb = ({
  handleTextChangeMotoroiltypetb,
  textValueMotoroiltypetb,
}) => {
  return (
    <div>
      <input
        type="text"
        value={textValueMotoroiltypetb}
        onChange={handleTextChangeMotoroiltypetb}
      />
    </div>
  );
};
const LotMotb = ({ handleTextChangeLotMotb, textValueLotMotb }) => {
  return (
    <div>
      <input
        type="text"
        value={textValueLotMotb}
        onChange={handleTextChangeLotMotb}
      />
    </div>
  );
};
const Suppliehubtb = ({
  handleTextChangeSuppliehubtb,
  textValueSuppliehubtb,
}) => {
  return (
    <div>
      <input
        type="text"
        value={textValueSuppliehubtb}
        onChange={handleTextChangeSuppliehubtb}
      />
    </div>
  );
};
const Suppliebasetb = ({
  handleTextChangeSuppliebasetb,
  textValueSuppliebasetb,
}) => {
  return (
    <div>
      <input
        type="text"
        value={textValueSuppliebasetb}
        onChange={handleTextChangeSuppliebasetb}
      />
    </div>
  );
};
const Suppliepcbtb = ({
  handleTextChangeSuppliepcbtb,
  textValueSuppliepcbtb,
}) => {
  return (
    <div>
      <input
        type="text"
        value={textValueSuppliepcbtb}
        onChange={handleTextChangeSuppliepcbtb}
      />
    </div>
  );
};
const Pcblottb = ({ handleTextChangePcblottb, textValuePcblottb }) => {
  return (
    <div>
      <input
        type="text"
        value={textValuePcblottb}
        onChange={handleTextChangePcblottb}
      />
    </div>
  );
};
const Supplieramptb = ({
  handleTextChangeSupplieramptb,
  textValueSupplieramptb,
}) => {
  return (
    <div>
      <input
        type="text"
        value={textValueSupplieramptb}
        onChange={handleTextChangeSupplieramptb}
      />
    </div>
  );
};
const Ramplottb = ({ handleTextChangeRamplottb, textValueRamplottb }) => {
  return (
    <div>
      <input
        type="text"
        value={textValueRamplottb}
        onChange={handleTextChangeRamplottb}
      />
    </div>
  );
};
const Suppliedivertertb = ({
  handleTextChangeSuppliedivertertb,
  textValueSuppliedivertertb,
}) => {
  return (
    <div>
      <input
        type="text"
        value={textValueSuppliedivertertb}
        onChange={handleTextChangeSuppliedivertertb}
      />
    </div>
  );
};
const Diverterlottb = ({
  handleTextChangeDiverterlottb,
  textValueDiverterlottb,
}) => {
  return (
    <div>
      <input
        type="text"
        value={textValueDiverterlottb}
        onChange={handleTextChangeDiverterlottb}
      />
    </div>
  );
};
const SupplieIDCStb = ({
  handleTextChangeSupplieIDCStb,
  textValueSupplieIDCStb,
}) => {
  return (
    <div>
      <input
        type="text"
        value={textValueSupplieIDCStb}
        onChange={handleTextChangeSupplieIDCStb}
      />
    </div>
  );
};
const IDCSlottb = ({ handleTextChangeIDCSlottb, textValueIDCSlottb }) => {
  return (
    <div>
      <input
        type="text"
        value={textValueIDCSlottb}
        onChange={handleTextChangeIDCSlottb}
      />
    </div>
  );
};
const SHAwashingnotb = ({
  handleTextChangeSHAwashingnotb,
  textValueSHAwashingnotb,
}) => {
  return (
    <div>
      <input
        type="text"
        value={textValueSHAwashingnotb}
        onChange={handleTextChangeSHAwashingnotb}
      />
    </div>
  );
};
const Co2mcnotb = ({ handleTextChangeCo2mcnotb, textValueCo2mcnotb }) => {
  return (
    <div>
      <input
        type="text"
        value={textValueCo2mcnotb}
        onChange={handleTextChangeCo2mcnotb}
      />
    </div>
  );
};
const Resultunittb = ({
  handleTextChangeResultunittb,
  textValueResultunittb,
}) => {
  return (
    <div>
      <input
        type="text"
        value={textValueResultunittb}
        onChange={handleTextChangeResultunittb}
      />
    </div>
  );
};
const Purposetb = ({ handleTextChangePurposetb, textValuePurposetb }) => {
  return (
    <div>
      <input
        type="text"
        value={textValuePurposetb}
        onChange={handleTextChangePurposetb}
      />
    </div>
  );
};
const Reftb = ({ handleTextChangeReftb, textValueReftb }) => {
  return (
    <div>
      <input
        type="text"
        value={textValueReftb}
        onChange={handleTextChangeReftb}
      />
    </div>
  );
};
const Commenttb = ({ handleTextChangeCommenttb, textValueCommenttb }) => {
  return (
    <div>
      <input
        type="text"
        value={textValueCommenttb}
        onChange={handleTextChangeCommenttb}
      />
    </div>
  );
};
const Linenotb = ({ handleTextChangeLinenotb, textValueLinenotb }) => {
  return (
    <div>
      <input
        type="text"
        value={textValueLinenotb}
        onChange={handleTextChangeLinenotb}
      />
    </div>
  );
};
const Ovenshanotb = ({ handleTextChangeOvenshanotb, textValueOvenshanotb }) => {
  return (
    <div>
      <input
        type="text"
        value={textValueOvenshanotb}
        onChange={handleTextChangeOvenshanotb}
      />
    </div>
  );
};

const RadioButtons1 = ({ handleOptionChange1, selectedOption2 }) => {
  return (
    <div style={{ fontFamily: "Times New Roman" }}>
      <label style={{ fontFamily: "Times New Roman" }}>
        <input
          type="radio"
          value="Bang-pa-in"
          checked={selectedOption2 === "Bang-pa-in"}
          onChange={handleOptionChange1}
        />
        Bang-pa-in
      </label>
    </div>
  );
};
function Table({ tableData, onTableDataChange }) {
  const [headers, setHeaders] = useState([
    "Test item",
    "Instruments",
    "Data Quantity",
    "Remark",
  ]);
  const [data, setData] = useState(tableData);

  const handleHeaderChange = (event, index) => {
    const newHeaders = [...headers];
    newHeaders[index] = event.target.value;
    setHeaders(newHeaders);
  };

  const handleCellChange = (event, rowIndex, colIndex) => {
    const newData = [...data];
    newData[rowIndex][colIndex] = event.target.value;
    setData(newData);
    onTableDataChange(newData);
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
const Radiocleanliness = ({
  handleOptionChangeRadiocleanliness,
  selectedOptionRadiocleanliness,
}) => {
  return (
    <div classname="col-12" style={{ fontFamily: "Times New Roman" }}>
      <div className="row">
        <div className="col-2" style={{ color: "green", fontSize: 18 }}>
          {" "}
          <label>
            <input
              type="radio"
              value="Accept"
              checked={selectedOptionRadiocleanliness === "Accept"}
              onChange={() => handleOptionChangeRadiocleanliness("Accept")}
            />
            Accept
          </label>
        </div>
        <div className="col-2" style={{ color: "red", fontSize: 18 }}>
          <label>
            <input
              type="radio"
              value="Reject"
              checked={selectedOptionRadiocleanliness === "Reject"}
              onChange={() => handleOptionChangeRadiocleanliness("Reject")}
            />
            Reject
          </label>
        </div>
      </div>
    </div>
  );
};
const Cleanlinesstb = ({
  handleTextChangeCleanlinesstb,
  textValueCleanlinesstb,
}) => {
  return (
    <div>
      <input
        type="text"
        value={textValueCleanlinesstb}
        onChange={(e) => handleTextChangeCleanlinesstb(e.target.value)}
      />
    </div>
  );
};


class cleanlinessspecialview extends Component {
  constructor(props) {
    super(props);
    this.state = {

      selectedOptionCleanlinessdropdown: [],
      textValueMgrequesttb: "",
      selectedOptionRadioButtons3: [],
      selectedOptionRadiocleanliness: [],
      textValueCleanlinesstb: "",
      textValueMgrequesttextbox: "",
      selectedOptionDropdown1: "",
      textValueNMBsampletb: "",
      textValueSamplesendtb: "",
      textValueSamplesubtb: "",
      textValueCommitshiptb: "",
      selectedOptionDropdown1: "",
      textValueRegistertb: "",
      selectedOption1: "",
      textValue1: "",
      selectedOption2: "",
      selectedOptionplatform: "",
      textValueMaterialtb: "",
      textValueModelNametb: "",
      textValueQtytb: "",
      textValueMbatb: "",
      textValueBasetb: "",
      textValueHubtb: "",
      textValueEtctb: "",
      textValuePartNotb: "",
      textValueLotnotb: "",
      textValueLotMotb: "",
      textValueSuppliehubtb: "",
      textValueSuppliebasetb: "",
      textValueSuppliepcbtb: "",
      textValuePcblottb: "",
      textValueSupplieramptb: "",
      textValueRamplottb: "",
      textValueSuppliedivertertb: "",
      textValueDiverterlottb: "",
      textValueSupplieIDCStb: "",
      textValueMotoroiltypetb: "",
      textValueIDCSlottb: "",
      textValueSHAwashingnotb: "",
      textValueCo2mcnotb: "",
      textValueResultunittb: "",
      textValuePurposetb: "",
      textValueReftb: "",
      textValueCommenttb: "",
      textValueLinenotb: "",
      textValueOvenshanotb: "",
      textValueRevtb: "",
      textValueOvenMBAtb: "",
      selectedOptionRadioButtons2: [],
      textValueTextBox1: "",
      tableData: [
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
      ],
      textValueProcessDescriptiontb: "",

      docNo: [],
      Modelname: [],
      docNo: "",
      Raw_Dat1: [],
      report1: [],
      report2: [],
      report3: [],
      report4: [],
      isLoading: true,

    };
  }
  handleOptionChangeCleanlinessdropdown = (event) => {
    const data = event.target.value;
    this.setState({ selectedOptionCleanlinessdropdown: data });
  };
  handleTextChangeCleanlinesstb = (data) => {
    this.setState({ textValueCleanlinesstb: data });
  };
  handleOptionChangeRadiocleanliness = (data) => {
    this.setState({ selectedOptionRadiocleanliness: data });
  };
  handleOptionChangeRadioButtons3 = (data) => {
    this.setState({ selectedOptionRadioButtons3: data });
  };
  handleTextChangeMgrequesttb = (data) => {
    this.setState({ textValueMgrequesttb: data });
  };
  componentDidUpdate(prevProps, prevState) {
    // Check if selectedOptionDropdown1 has changed.
    if (this.state.selectedOptionDropdown1 !== prevState.selectedOptionDropdown1) {
      if (this.state.selectedOptionDropdown1 === "OQA") {
        // If selectedOptionDropdown1 is "OQA," set textValueMgrequesttextbox to "PHUMPHAT CHANONTANTIRATCH."
        this.setState({ textValueMgrequesttextbox: "PHUMPHAT CHANONTANTIRATCH" });
      }
      if (this.state.selectedOptionDropdown1 === "IQC") {
        // If selectedOptionDropdown1 is "OQA," set textValueMgrequesttextbox to "PHUMPHAT CHANONTANTIRATCH."
        this.setState({ textValueMgrequesttextbox: "JAKRAPONG RERKSHASUTA" });
      }
      if (this.state.selectedOptionDropdown1 === "QC") {
        // If selectedOptionDropdown1 is "OQA," set textValueMgrequesttextbox to "PHUMPHAT CHANONTANTIRATCH."
        this.setState({ textValueMgrequesttextbox: "PHUMPHAT CHANONTANTIRATCH" });
      }
      if (this.state.selectedOptionDropdown1 === "CQE") {
        // If selectedOptionDropdown1 is "OQA," set textValueMgrequesttextbox to "PHUMPHAT CHANONTANTIRATCH."
        this.setState({ textValueMgrequesttextbox: "KITTIPONG RAEARUN" });
      }
      if (this.state.selectedOptionDropdown1 === "PENG") {
        // If selectedOptionDropdown1 is "OQA," set textValueMgrequesttextbox to "PHUMPHAT CHANONTANTIRATCH."
        this.setState({ textValueMgrequesttextbox: "CHUSAK CUDTAWEE" });
      }
      if (this.state.selectedOptionDropdown1 === "ENG") {
        // If selectedOptionDropdown1 is "OQA," set textValueMgrequesttextbox to "PHUMPHAT CHANONTANTIRATCH."
        this.setState({ textValueMgrequesttextbox: "CHAIRAT JUNGJAIJARUMAS" });
      }
      if (this.state.selectedOptionDropdown1 === "PD") {
        // If selectedOptionDropdown1 is "OQA," set textValueMgrequesttextbox to "PHUMPHAT CHANONTANTIRATCH."
        this.setState({ textValueMgrequesttextbox: "SIRILUCK CHAICHUM" });
      }
      if (this.state.selectedOptionDropdown1 === "MM") {
        // If selectedOptionDropdown1 is "OQA," set textValueMgrequesttextbox to "PHUMPHAT CHANONTANTIRATCH."
        this.setState({ textValueMgrequesttextbox: "AUJIMA KRAIPUT" });
      }
      if (this.state.selectedOptionDropdown1 === "PC") {
        // If selectedOptionDropdown1 is "OQA," set textValueMgrequesttextbox to "PHUMPHAT CHANONTANTIRATCH."
        this.setState({ textValueMgrequesttextbox: "APIWAT KONGKAEW" });
      }
      if (this.state.selectedOptionDropdown1 === "POM") {
        // If selectedOptionDropdown1 is "OQA," set textValueMgrequesttextbox to "PHUMPHAT CHANONTANTIRATCH."
        this.setState({ textValueMgrequesttextbox: "PANIDA TEERANANON" });
      }
    }
  }

  handleTextChangeMgrequesttextbox = (event) => {
    const data = event.target.value;
    this.setState({ textValueMgrequesttextbox: data });
  };

  handleOptionChangeDropdown1 = (event) => {
    const data = event.target.value;
    this.setState({ selectedOptionDropdown1: data });
  };

  handleTextChangeSamplesubtb = (data) => {
    this.setState({ textValueSamplesubtb: data });
  };
  handleTextChangeSamplesendtb = (data) => {
    this.setState({ textValueSamplesendtb: data });
  };
  handleTextChangeNMBsampletb = (data) => {
    this.setState({ textValueNMBsampletb: data });
  };
  handleTextChangeCommitshiptb = (data) => {
    this.setState({ textValueCommitshiptb: data });
  };
  handleOptionChangeRadioButtons2 = (data) => {
    this.setState({ selectedOptionRadioButtons2: data });
  };
  handleTextChangeTextBox1 = (data) => {
    this.setState({ textValueTextBox1: data });
  };
  handleTextChangeRegistertb = (data) => {
    this.setState({ textValueRegistertb: data });
  };
  handleTextChangeProcessDescriptiontb = (data) => {
    this.setState({ textValueProcessDescriptiontb: data });
  };
  handleTableDataChange = (data) => {
    this.setState({ tableData: data });
  };
  handleTextChangeSuppliebasetb = (event) => {
    this.setState({ textValueSuppliebasetb: event.target.value });
  };
  handleTextChangeOvenMBAtb = (event) => {
    this.setState({ textValueOvenMBAtb: event.target.value });
  };
  handleTextChangeRevtb = (event) => {
    this.setState({ textValueRevtb: event.target.value });
  };
  handleTextChangeOvenshanotb = (event) => {
    this.setState({ textValueOvenshanotb: event.target.value });
  };
  handleTextChangeLinenotb = (event) => {
    this.setState({ textValueLinenotb: event.target.value });
  };
  handleTextChangeCommenttb = (event) => {
    this.setState({ textValueCommenttb: event.target.value });
  };
  handleTextChangeReftb = (event) => {
    this.setState({ textValueReftb: event.target.value });
  };
  handleTextChangePurposetb = (event) => {
    this.setState({ textValuePurposetb: event.target.value });
  };
  handleTextChangeResultunittb = (event) => {
    this.setState({ textValueResultunittb: event.target.value });
  };
  handleTextChangeCo2mcnotb = (event) => {
    this.setState({ textValueCo2mcnotb: event.target.value });
  };
  handleTextChangeSHAwashingnotb = (event) => {
    this.setState({ textValueSHAwashingnotb: event.target.value });
  };
  handleTextChangeIDCSlottb = (event) => {
    this.setState({ textValueIDCSlottb: event.target.value });
  };
  handleTextChangeMotoroiltypetb = (event) => {
    this.setState({ textValueMotoroiltypetb: event.target.value });
  };
  handleTextChangeSupplieIDCStb = (event) => {
    this.setState({ textValueSupplieIDCStb: event.target.value });
  };
  handleTextChangeDiverterlottb = (event) => {
    this.setState({ textValueDiverterlottb: event.target.value });
  };
  handleTextChangeSuppliedivertertb = (event) => {
    this.setState({ textValueSuppliedivertertb: event.target.value });
  };
  handleTextChangeRamplottb = (event) => {
    this.setState({ textValueRamplottb: event.target.value });
  };
  handleTextChangeSupplieramptb = (event) => {
    this.setState({ textValueSupplieramptb: event.target.value });
  };
  handleTextChangePcblottb = (event) => {
    this.setState({ textValuePcblottb: event.target.value });
  };
  handleTextChangeSuppliepcbtb = (event) => {
    this.setState({ textValueSuppliepcbtb: event.target.value });
  };

  handleTextChangeSuppliehubtb = (event) => {
    this.setState({ textValueSuppliehubtb: event.target.value });
  };
  handleTextChangeLotMotb = (event) => {
    this.setState({ textValueLotMotb: event.target.value });
  };
  handleTextChangeLotnotb = (event) => {
    this.setState({ textValueLotnotb: event.target.value });
  };
  handleTextChangeEtctb = (event) => {
    this.setState({ textValueEtctb: event.target.value });
  };
  handleTextChangePartNotb = (event) => {
    this.setState({ textValuePartNotb: event.target.value });
  };
  handleTextChangeHubtb = (event) => {
    this.setState({ textValueHubtb: event.target.value });
  };
  handleTextChangeBasetb = (event) => {
    this.setState({ textValueBasetb: event.target.value });
  };
  handleTextChangeMbatb = (event) => {
    this.setState({ textValueMbatb: event.target.value });
  };
  handleTextChangeQtytb = (event) => {
    this.setState({ textValueQtytb: event.target.value });
  };
  handleTextChangeMaterialtb = (event) => {
    this.setState({ textValueMaterialtb: event.target.value });
  };
  handleTextChangeModelNametb = (event) => {
    this.setState({ textValueModelNametb: event.target.value });
  };

  handleOptionChangeplatform = (event) => {
    this.setState({ selectedOptionplatform: event.target.value });
  };
  handleOptionChangeDropdown1 = (event) => {
    const data = event.target.value;
    this.setState({ selectedOptionDropdown1: data });

  };
  handleOptionChange1 = (event) => {
    this.setState({ selectedOption2: event.target.value });
  };

  handleOptionChange = (event) => {
    this.setState({ selectedOption1: event.target.value });
  };

  handleTextChange = (event) => {
    this.setState({ textValue1: event.target.value });
  };
  // getModel = async () => {
  //   const array = await httpClient.get(server.DOCNO_URL);
  //   const options = array.data.result.map((d) => ({
  //     label: d.No,
  //   }));
  //   this.setState({ docNo: options });
  // };
  doGetMgapprove = async () => {
    try {
      const result = await httpClient.get(
        server.Mgapprove_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData1;

      this.setState({ Raw_Dat: rawData });

      this.setState({
        report1: result.data.result,
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ selectedOptionRadioButtons3: result.data.result[0].Mgrequester_result });
      } else {
        this.setState({ selectedOptionRadioButtons3: '' }); // หรือให้เป็นค่าว่างถ้าไม่มีข้อมูล
      }
    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetMgapprovereason = async () => {
    try {
      const result = await httpClient.get(
        server.Mgapprovereason_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData1;

      this.setState({ Raw_Dat: rawData });

      this.setState({
        report1: result.data.result,
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ textValueMgrequesttb: result.data.result[0].Mgrequester_reason });
      } else {
        this.setState({ textValueMgrequesttb: '' }); // หรือให้เป็นค่าว่างถ้าไม่มีข้อมูล
      }
    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetCleanlinessapprove = async () => {
    try {
      const result = await httpClient.get(
        server.Cleanlinessapprove_URL +
        "/" +
        this.state.selectedOptionCleanlinessdropdown +
        "/" +
        this.state.selectedOptionRadiocleanliness +
        "/" +
        this.state.textValueCleanlinesstb +
        "/" +
        this.state.docNo
      );
      // เมื่อการเรียก API สำเร็จ
      this.setState({
        result: result.data.result,
        isDisable: false, // ปลดใช้งานปุ่ม Submit เมื่อสำเร็จ
      });

      return true; // คืนค่า true เพื่อบอกว่าสำเร็จ
    } catch (error) {
      console.error(error);
      // เมื่อเกิดข้อผิดพลาดในการเรียก API
      this.setState({
        isDisable: true, // ปิดใช้งานปุ่ม Submit เมื่อเกิดข้อผิดพลาด
      });

      return false; // คืนค่า false เพื่อบอกว่าเกิดข้อผิดพลาด
    }
  };
  doGetCleanlinessapprove2 = async () => {
    try {
      const result = await httpClient.get(
        server.Cleanlinessapprove2_URL +
        "/" +
        this.state.selectedOptionCleanlinessdropdown +
        "/" +
        this.state.selectedOptionRadiocleanliness +
        "/" +
        this.state.textValueCleanlinesstb +
        "/" +
        this.state.docNo
      );
      // เมื่อการเรียก API สำเร็จ
      this.setState({
        result: result.data.result,
        isDisable: false, // ปลดใช้งานปุ่ม Submit เมื่อสำเร็จ
      });

      return true; // คืนค่า true เพื่อบอกว่าสำเร็จ
    } catch (error) {
      console.error(error);
      // เมื่อเกิดข้อผิดพลาดในการเรียก API
      this.setState({
        isDisable: true, // ปิดใช้งานปุ่ม Submit เมื่อเกิดข้อผิดพลาด
      });

      return false; // คืนค่า false เพื่อบอกว่าเกิดข้อผิดพลาด
    }
  };
  doGetCleanlinessapprove3 = async () => {
    try {
      const result = await httpClient.get(
        server.Cleanlinessapprove3_URL +
        "/" +
        this.state.selectedOptionCleanlinessdropdown +
        "/" +
        this.state.selectedOptionRadiocleanliness +
        "/" +
        this.state.textValueCleanlinesstb +
        "/" +
        this.state.docNo
      );
      // เมื่อการเรียก API สำเร็จ
      this.setState({
        result: result.data.result,
        isDisable: false, // ปลดใช้งานปุ่ม Submit เมื่อสำเร็จ
      });

      return true; // คืนค่า true เพื่อบอกว่าสำเร็จ
    } catch (error) {
      console.error(error);
      // เมื่อเกิดข้อผิดพลาดในการเรียก API
      this.setState({
        isDisable: true, // ปิดใช้งานปุ่ม Submit เมื่อเกิดข้อผิดพลาด
      });

      return false; // คืนค่า false เพื่อบอกว่าเกิดข้อผิดพลาด
    }
  };
  doGetCleanlinessapprove4 = async () => {
    try {
      const result = await httpClient.get(
        server.Cleanlinessapprove4_URL +
        "/" +
        this.state.selectedOptionCleanlinessdropdown +
        "/" +
        this.state.selectedOptionRadiocleanliness +
        "/" +
        this.state.textValueCleanlinesstb +
        "/" +
        this.state.docNo
      );
      // เมื่อการเรียก API สำเร็จ
      this.setState({
        result: result.data.result,
        isDisable: false, // ปลดใช้งานปุ่ม Submit เมื่อสำเร็จ
      });

      return true; // คืนค่า true เพื่อบอกว่าสำเร็จ
    } catch (error) {
      console.error(error);
      // เมื่อเกิดข้อผิดพลาดในการเรียก API
      this.setState({
        isDisable: true, // ปิดใช้งานปุ่ม Submit เมื่อเกิดข้อผิดพลาด
      });

      return false; // คืนค่า false เพื่อบอกว่าเกิดข้อผิดพลาด
    }
  };
  doGetCleanlinessapprove5 = async () => {
    try {
      const result = await httpClient.get(
        server.Cleanlinessapprove5_URL +
        "/" +
        this.state.selectedOptionCleanlinessdropdown +
        "/" +
        this.state.selectedOptionRadiocleanliness +
        "/" +
        this.state.textValueCleanlinesstb +
        "/" +
        this.state.docNo
      );
      // เมื่อการเรียก API สำเร็จ
      this.setState({
        result: result.data.result,
        isDisable: false, // ปลดใช้งานปุ่ม Submit เมื่อสำเร็จ
      });

      return true; // คืนค่า true เพื่อบอกว่าสำเร็จ
    } catch (error) {
      console.error(error);
      // เมื่อเกิดข้อผิดพลาดในการเรียก API
      this.setState({
        isDisable: true, // ปิดใช้งานปุ่ม Submit เมื่อเกิดข้อผิดพลาด
      });

      return false; // คืนค่า false เพื่อบอกว่าเกิดข้อผิดพลาด
    }
  };
  doGetCleanlinessapprove6 = async () => {
    try {
      const result = await httpClient.get(
        server.Cleanlinessapprove6_URL +
        "/" +
        this.state.selectedOptionCleanlinessdropdown +
        "/" +
        this.state.selectedOptionRadiocleanliness +
        "/" +
        this.state.textValueCleanlinesstb +
        "/" +
        this.state.docNo
      );
      // เมื่อการเรียก API สำเร็จ
      this.setState({
        result: result.data.result,
        isDisable: false, // ปลดใช้งานปุ่ม Submit เมื่อสำเร็จ
      });

      return true; // คืนค่า true เพื่อบอกว่าสำเร็จ
    } catch (error) {
      console.error(error);
      // เมื่อเกิดข้อผิดพลาดในการเรียก API
      this.setState({
        isDisable: true, // ปิดใช้งานปุ่ม Submit เมื่อเกิดข้อผิดพลาด
      });

      return false; // คืนค่า false เพื่อบอกว่าเกิดข้อผิดพลาด
    }
  };
  doGetCleanlinessapprove7 = async () => {
    try {
      const result = await httpClient.get(
        server.Cleanlinessapprove7_URL +
        "/" +
        this.state.selectedOptionCleanlinessdropdown +
        "/" +
        this.state.selectedOptionRadiocleanliness +
        "/" +
        this.state.textValueCleanlinesstb +
        "/" +
        this.state.docNo
      );
      // เมื่อการเรียก API สำเร็จ
      this.setState({
        result: result.data.result,
        isDisable: false, // ปลดใช้งานปุ่ม Submit เมื่อสำเร็จ
      });

      return true; // คืนค่า true เพื่อบอกว่าสำเร็จ
    } catch (error) {
      console.error(error);
      // เมื่อเกิดข้อผิดพลาดในการเรียก API
      this.setState({
        isDisable: true, // ปิดใช้งานปุ่ม Submit เมื่อเกิดข้อผิดพลาด
      });

      return false; // คืนค่า false เพื่อบอกว่าเกิดข้อผิดพลาด
    }
  };
  doGetCleanlinessapprove8 = async () => {
    try {
      const result = await httpClient.get(
        server.Cleanlinessapprove8_URL +
        "/" +
        this.state.selectedOptionCleanlinessdropdown +
        "/" +
        this.state.selectedOptionRadiocleanliness +
        "/" +
        this.state.textValueCleanlinesstb +
        "/" +
        this.state.docNo
      );
      // เมื่อการเรียก API สำเร็จ
      this.setState({
        result: result.data.result,
        isDisable: false, // ปลดใช้งานปุ่ม Submit เมื่อสำเร็จ
      });

      return true; // คืนค่า true เพื่อบอกว่าสำเร็จ
    } catch (error) {
      console.error(error);
      // เมื่อเกิดข้อผิดพลาดในการเรียก API
      this.setState({
        isDisable: true, // ปิดใช้งานปุ่ม Submit เมื่อเกิดข้อผิดพลาด
      });

      return false; // คืนค่า false เพื่อบอกว่าเกิดข้อผิดพลาด
    }
  };
  doGetCleanlinessapprove9 = async () => {
    try {
      const result = await httpClient.get(
        server.Cleanlinessapprove9_URL +
        "/" +
        this.state.selectedOptionCleanlinessdropdown +
        "/" +
        this.state.selectedOptionRadiocleanliness +
        "/" +
        this.state.textValueCleanlinesstb +
        "/" +
        this.state.docNo
      );
      // เมื่อการเรียก API สำเร็จ
      this.setState({
        result: result.data.result,
        isDisable: false, // ปลดใช้งานปุ่ม Submit เมื่อสำเร็จ
      });

      return true; // คืนค่า true เพื่อบอกว่าสำเร็จ
    } catch (error) {
      console.error(error);
      // เมื่อเกิดข้อผิดพลาดในการเรียก API
      this.setState({
        isDisable: true, // ปิดใช้งานปุ่ม Submit เมื่อเกิดข้อผิดพลาด
      });

      return false; // คืนค่า false เพื่อบอกว่าเกิดข้อผิดพลาด
    }
  };
  doGetCleanlinessapprove10 = async () => {
    try {
      const result = await httpClient.get(
        server.Cleanlinessapprove10_URL +
        "/" +
        this.state.selectedOptionCleanlinessdropdown +
        "/" +
        this.state.selectedOptionRadiocleanliness +
        "/" +
        this.state.textValueCleanlinesstb +
        "/" +
        this.state.docNo
      );
      // เมื่อการเรียก API สำเร็จ
      this.setState({
        result: result.data.result,
        isDisable: false, // ปลดใช้งานปุ่ม Submit เมื่อสำเร็จ
      });

      return true; // คืนค่า true เพื่อบอกว่าสำเร็จ
    } catch (error) {
      console.error(error);
      // เมื่อเกิดข้อผิดพลาดในการเรียก API
      this.setState({
        isDisable: true, // ปิดใช้งานปุ่ม Submit เมื่อเกิดข้อผิดพลาด
      });

      return false; // คืนค่า false เพื่อบอกว่าเกิดข้อผิดพลาด
    }
  };
  doGetCleanlinessapprove11 = async () => {
    try {
      const result = await httpClient.get(
        server.Cleanlinessapprove11_URL +
        "/" +
        this.state.selectedOptionCleanlinessdropdown +
        "/" +
        this.state.selectedOptionRadiocleanliness +
        "/" +
        this.state.textValueCleanlinesstb +
        "/" +
        this.state.docNo
      );
      // เมื่อการเรียก API สำเร็จ
      this.setState({
        result: result.data.result,
        isDisable: false, // ปลดใช้งานปุ่ม Submit เมื่อสำเร็จ
      });

      return true; // คืนค่า true เพื่อบอกว่าสำเร็จ
    } catch (error) {
      console.error(error);
      // เมื่อเกิดข้อผิดพลาดในการเรียก API
      this.setState({
        isDisable: true, // ปิดใช้งานปุ่ม Submit เมื่อเกิดข้อผิดพลาด
      });

      return false; // คืนค่า false เพื่อบอกว่าเกิดข้อผิดพลาด
    }
  };
  doGetCleanlinessapprove12 = async () => {
    try {
      const result = await httpClient.get(
        server.Cleanlinessapprove12_URL +
        "/" +
        this.state.selectedOptionCleanlinessdropdown +
        "/" +
        this.state.selectedOptionRadiocleanliness +
        "/" +
        this.state.textValueCleanlinesstb +
        "/" +
        this.state.docNo
      );
      // เมื่อการเรียก API สำเร็จ
      this.setState({
        result: result.data.result,
        isDisable: false, // ปลดใช้งานปุ่ม Submit เมื่อสำเร็จ
      });

      return true; // คืนค่า true เพื่อบอกว่าสำเร็จ
    } catch (error) {
      console.error(error);
      // เมื่อเกิดข้อผิดพลาดในการเรียก API
      this.setState({
        isDisable: true, // ปิดใช้งานปุ่ม Submit เมื่อเกิดข้อผิดพลาด
      });

      return false; // คืนค่า false เพื่อบอกว่าเกิดข้อผิดพลาด
    }
  };
  doGetCleanlinessapprove13 = async () => {
    try {
      const result = await httpClient.get(
        server.Cleanlinessapprove13_URL +
        "/" +
        this.state.selectedOptionCleanlinessdropdown +
        "/" +
        this.state.selectedOptionRadiocleanliness +
        "/" +
        this.state.textValueCleanlinesstb +
        "/" +
        this.state.docNo
      );
      // เมื่อการเรียก API สำเร็จ
      this.setState({
        result: result.data.result,
        isDisable: false, // ปลดใช้งานปุ่ม Submit เมื่อสำเร็จ
      });

      return true; // คืนค่า true เพื่อบอกว่าสำเร็จ
    } catch (error) {
      console.error(error);
      // เมื่อเกิดข้อผิดพลาดในการเรียก API
      this.setState({
        isDisable: true, // ปิดใช้งานปุ่ม Submit เมื่อเกิดข้อผิดพลาด
      });

      return false; // คืนค่า false เพื่อบอกว่าเกิดข้อผิดพลาด
    }
  };
  doGetCleanlinessapprove14 = async () => {
    try {
      const result = await httpClient.get(
        server.Cleanlinessapprove14_URL +
        "/" +
        this.state.selectedOptionCleanlinessdropdown +
        "/" +
        this.state.selectedOptionRadiocleanliness +
        "/" +
        this.state.textValueCleanlinesstb +
        "/" +
        this.state.docNo
      );
      // เมื่อการเรียก API สำเร็จ
      this.setState({
        result: result.data.result,
        isDisable: false, // ปลดใช้งานปุ่ม Submit เมื่อสำเร็จ
      });

      return true; // คืนค่า true เพื่อบอกว่าสำเร็จ
    } catch (error) {
      console.error(error);
      // เมื่อเกิดข้อผิดพลาดในการเรียก API
      this.setState({
        isDisable: true, // ปิดใช้งานปุ่ม Submit เมื่อเกิดข้อผิดพลาด
      });

      return false; // คืนค่า false เพื่อบอกว่าเกิดข้อผิดพลาด
    }
  };

  sendDataToBackend = async () => {

    // ใช้ httpClient.get() หรือ httpClient.post() หรือเมทอดอื่นๆ ตามที่คุณใช้งาน
    const result = await httpClient.get(
      server.cleanlinessspecialapprove_URL +
      "/" +
      this.state.textValueRegistertb +
      "/" +
      this.state.docNo+
      "/"+
      this.state.selectedOptionRadiocleanliness
    );

    // จัดการกับค่า result ตามที่ต้องการ
    if (result.data.api_result === 'ok') {
      // จัดการกรณีสำเร็จ
      console.log('ส่งข้อมูลเรียบร้อย');
    } else {
      // จัดการกรณีเกิดข้อผิดพลาด
      console.error('เกิดข้อผิดพลาดในการส่งข้อมูล');
    }

  };
  doGetModelname = async () => {
    try {
      const result = await httpClient.get(
        server.Modelname_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData1;

      this.setState({ Raw_Dat: rawData });

      this.setState({
        report1: result.data.result,
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ textValueModelNametb: result.data.result[0].ModelName });
      } else {
        this.setState({ textValueModelNametb: '' }); // หรือให้เป็นค่าว่างถ้าไม่มีข้อมูล
      }
    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetDatatestfor = async () => {
    try {
      const result = await httpClient.get(
        server.Datatestfor_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData1;

      this.setState({ Raw_Dat: rawData });

      this.setState({
        report1: result.data.result,
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ selectedOptionRadioButtons2: result.data.result[0].Data_test_for });
      } else {
        this.setState({ selectedOptionRadioButtons2: '' }); // หรือให้เป็นค่าว่างถ้าไม่มีข้อมูล
      }
    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetDatatestforreason = async () => {
    try {
      const result = await httpClient.get(
        server.Datatestforreason_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData1;

      this.setState({ Raw_Dat: rawData });

      this.setState({
        report1: result.data.result,
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ textValueTextBox1: result.data.result[0].Data_test_for_reason });
      } else {
        this.setState({ textValueTextBox1: '' }); // หรือให้เป็นค่าว่างถ้าไม่มีข้อมูล
      }
    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetSamplename = async () => {
    try {
      const result = await httpClient.get(
        server.Samplename_URL + "/" + this.state.docNo// เปลี่ยน
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData;// เปลี่ยน

      this.setState({ Raw_Dat1: rawData });// เปลี่ยน

      this.setState({
        report2: result.data.result,// เปลี่ยนต้องไปเพิ่มข้างบนด้วย
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ textValue1: result.data.result[0].samplename }); // เปลี่ยน
      } else {
        this.setState({ textValue1: '' }); // เปลี่ยน
      }
    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetMaterial = async () => {
    try {
      const result = await httpClient.get(
        server.Material_URL + "/" + this.state.docNo// เปลี่ยน
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData2;// เปลี่ยน

      this.setState({ Raw_Dat2: rawData });// เปลี่ยน

      this.setState({
        report2: result.data.result,// เปลี่ยนต้องไปเพิ่มข้างบนด้วย
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ textValueMaterialtb: result.data.result[0].material }); // เปลี่ยน
      } else {
        this.setState({ textValueMaterialtb: '' }); // เปลี่ยน
      }
    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetSection = async () => {
    try {
      const result = await httpClient.get(
        server.Section_URL + "/" + this.state.docNo// เปลี่ยน
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData3;// เปลี่ยน

      this.setState({ Raw_Dat3: rawData });// เปลี่ยน

      this.setState({
        report3: result.data.result,// เปลี่ยนต้องไปเพิ่มข้างบนด้วย
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({
          selectedOptionDropdown1: result.data.result[0].Section,

        });
      }
    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetCustomer = async () => {
    try {
      const result = await httpClient.get(
        server.Customer_URL + "/" + this.state.docNo// เปลี่ยน
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData3;// เปลี่ยน

      this.setState({ Raw_Dat3: rawData });// เปลี่ยน

      this.setState({
        report3: result.data.result,// เปลี่ยนต้องไปเพิ่มข้างบนด้วย
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ selectedOption1: result.data.result[0].Customer }); // เปลี่ยน
      } else {
        this.setState({ selectedOption1: '' }); // เปลี่ยน
      }
    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetQty = async () => {
    try {
      const result = await httpClient.get(
        server.Qty_URL + "/" + this.state.docNo// เปลี่ยน
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData3;// เปลี่ยน

      this.setState({ Raw_Dat3: rawData });// เปลี่ยน

      this.setState({
        report3: result.data.result,// เปลี่ยนต้องไปเพิ่มข้างบนด้วย
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ textValueQtytb: result.data.result[0].Qty }); // เปลี่ยน
      } else {
        this.setState({ textValueQtytb: '' }); // เปลี่ยน
      }
    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }

  };

  doGetInstrumentsLPC = async () => {
    try {
      const result = await httpClient.get(
        server.InstrumentsLPC_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData4;

      this.setState({ Raw_Dat4: rawData });

      this.setState({
        report4: result.data.result,
        isDisable: false,
      });

      // สร้างอ็อบเจ็กต์ใหม่เพื่ออัปเดตเฉพาะส่วนที่ต้องการ
      const updatedTableData = [...this.state.tableData]; // คัดลอก tableData เดิม
      console.log(result.data.result[0].TestTeam_Instruments);

      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        const updatedTableData = [...this.state.tableData];
        updatedTableData[0][1] = result.data.result[0].TestTeam_Instruments;
        this.setState({ tableData: updatedTableData });
      } else {
        // กรณีไม่มีข้อมูล กำหนดค่าเป็นว่าง
        const updatedTableData = [...this.state.tableData];
        updatedTableData[0][1] = '';
        this.setState({ tableData: updatedTableData });
      }


    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetInstrumentsSprayLPC = async () => {
    try {
      const result = await httpClient.get(
        server.InstrumentsSprayLPC_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData4;

      this.setState({ Raw_Dat4: rawData });

      this.setState({
        report4: result.data.result,
        isDisable: false,
      });

      // สร้างอ็อบเจ็กต์ใหม่เพื่ออัปเดตเฉพาะส่วนที่ต้องการ
      const updatedTableData = [...this.state.tableData]; // คัดลอก tableData เดิม
      console.log(result.data.result[0].TestTeam_Instruments);

      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        const updatedTableData = [...this.state.tableData];
        updatedTableData[1][1] = result.data.result[0].TestTeam_Instruments;
        this.setState({ tableData: updatedTableData });
      } else {
        // กรณีไม่มีข้อมูล กำหนดค่าเป็นว่าง
        const updatedTableData = [...this.state.tableData];
        updatedTableData[1][1] = '';
        this.setState({ tableData: updatedTableData });
      }


    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetInstrumentsAPA = async () => {
    try {
      const result = await httpClient.get(
        server.InstrumentsAPA_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData4;

      this.setState({ Raw_Dat4: rawData });

      this.setState({
        report4: result.data.result,
        isDisable: false,
      });

      // สร้างอ็อบเจ็กต์ใหม่เพื่ออัปเดตเฉพาะส่วนที่ต้องการ
      const updatedTableData = [...this.state.tableData]; // คัดลอก tableData เดิม
      console.log(result.data.result[0].TestTeam_Instruments);

      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        const updatedTableData = [...this.state.tableData];
        updatedTableData[2][1] = result.data.result[0].TestTeam_Instruments;
        this.setState({ tableData: updatedTableData });
      } else {
        // กรณีไม่มีข้อมูล กำหนดค่าเป็นว่าง
        const updatedTableData = [...this.state.tableData];
        updatedTableData[2][1] = '';
        this.setState({ tableData: updatedTableData });
      }


    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetInstrumentsTalcbytape = async () => {
    try {
      const result = await httpClient.get(
        server.InstrumentsTalcbytape_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData4;

      this.setState({ Raw_Dat4: rawData });

      this.setState({
        report4: result.data.result,
        isDisable: false,
      });

      // สร้างอ็อบเจ็กต์ใหม่เพื่ออัปเดตเฉพาะส่วนที่ต้องการ
      const updatedTableData = [...this.state.tableData]; // คัดลอก tableData เดิม
      console.log(result.data.result[0].TestTeam_Instruments);

      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        const updatedTableData = [...this.state.tableData];
        updatedTableData[3][1] = result.data.result[0].TestTeam_Instruments;
        this.setState({ tableData: updatedTableData });
      } else {
        // กรณีไม่มีข้อมูล กำหนดค่าเป็นว่าง
        const updatedTableData = [...this.state.tableData];
        updatedTableData[3][1] = '';
        this.setState({ tableData: updatedTableData });
      }


    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetInstrumentsFTIR = async () => {
    try {
      const result = await httpClient.get(
        server.InstrumentsFTIR_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData4;

      this.setState({ Raw_Dat4: rawData });

      this.setState({
        report4: result.data.result,
        isDisable: false,
      });

      // สร้างอ็อบเจ็กต์ใหม่เพื่ออัปเดตเฉพาะส่วนที่ต้องการ
      const updatedTableData = [...this.state.tableData]; // คัดลอก tableData เดิม
      console.log(result.data.result[0].TestTeam_Instruments);

      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        const updatedTableData = [...this.state.tableData];
        updatedTableData[4][1] = result.data.result[0].TestTeam_Instruments;
        this.setState({ tableData: updatedTableData });
      } else {
        // กรณีไม่มีข้อมูล กำหนดค่าเป็นว่าง
        const updatedTableData = [...this.state.tableData];
        updatedTableData[4][1] = '';
        this.setState({ tableData: updatedTableData });
      }


    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetInstrumentsIC = async () => {
    try {
      const result = await httpClient.get(
        server.InstrumentsIC_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData4;

      this.setState({ Raw_Dat4: rawData });

      this.setState({
        report4: result.data.result,
        isDisable: false,
      });

      // สร้างอ็อบเจ็กต์ใหม่เพื่ออัปเดตเฉพาะส่วนที่ต้องการ
      const updatedTableData = [...this.state.tableData]; // คัดลอก tableData เดิม
      console.log(result.data.result[0].TestTeam_Instruments);

      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        const updatedTableData = [...this.state.tableData];
        updatedTableData[5][1] = result.data.result[0].TestTeam_Instruments;
        this.setState({ tableData: updatedTableData });
      } else {
        // กรณีไม่มีข้อมูล กำหนดค่าเป็นว่าง
        const updatedTableData = [...this.state.tableData];
        updatedTableData[5][1] = '';
        this.setState({ tableData: updatedTableData });
      }


    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetInstrumentsNVR = async () => {
    try {
      const result = await httpClient.get(
        server.InstrumentsNVR_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData4;

      this.setState({ Raw_Dat4: rawData });

      this.setState({
        report4: result.data.result,
        isDisable: false,
      });

      // สร้างอ็อบเจ็กต์ใหม่เพื่ออัปเดตเฉพาะส่วนที่ต้องการ
      const updatedTableData = [...this.state.tableData]; // คัดลอก tableData เดิม
      console.log(result.data.result[0].TestTeam_Instruments);

      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        const updatedTableData = [...this.state.tableData];
        updatedTableData[6][1] = result.data.result[0].TestTeam_Instruments;
        this.setState({ tableData: updatedTableData });
      } else {
        // กรณีไม่มีข้อมูล กำหนดค่าเป็นว่าง
        const updatedTableData = [...this.state.tableData];
        updatedTableData[6][1] = '';
        this.setState({ tableData: updatedTableData });
      }


    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetInstrumentsOutgasday0 = async () => {
    try {
      const result = await httpClient.get(
        server.InstrumentsOutgasday0_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData4;

      this.setState({ Raw_Dat4: rawData });

      this.setState({
        report4: result.data.result,
        isDisable: false,
      });

      // สร้างอ็อบเจ็กต์ใหม่เพื่ออัปเดตเฉพาะส่วนที่ต้องการ
      const updatedTableData = [...this.state.tableData]; // คัดลอก tableData เดิม
      console.log(result.data.result[0].TestTeam_Instruments);

      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        const updatedTableData = [...this.state.tableData];
        updatedTableData[7][1] = result.data.result[0].TestTeam_Instruments;
        this.setState({ tableData: updatedTableData });
      } else {
        // กรณีไม่มีข้อมูล กำหนดค่าเป็นว่าง
        const updatedTableData = [...this.state.tableData];
        updatedTableData[7][1] = '';
        this.setState({ tableData: updatedTableData });
      }


    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetInstrumentsOutgasday14 = async () => {
    try {
      const result = await httpClient.get(
        server.InstrumentsOutgasday14_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData4;

      this.setState({ Raw_Dat4: rawData });

      this.setState({
        report4: result.data.result,
        isDisable: false,
      });

      // สร้างอ็อบเจ็กต์ใหม่เพื่ออัปเดตเฉพาะส่วนที่ต้องการ
      const updatedTableData = [...this.state.tableData]; // คัดลอก tableData เดิม
      console.log(result.data.result[0].TestTeam_Instruments);

      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        const updatedTableData = [...this.state.tableData];
        updatedTableData[8][1] = result.data.result[0].TestTeam_Instruments;
        this.setState({ tableData: updatedTableData });
      } else {
        // กรณีไม่มีข้อมูล กำหนดค่าเป็นว่าง
        const updatedTableData = [...this.state.tableData];
        updatedTableData[8][1] = '';
        this.setState({ tableData: updatedTableData });
      }


    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetInstrumentsGhosttest = async () => {
    try {
      const result = await httpClient.get(
        server.InstrumentsGhosttest_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData4;

      this.setState({ Raw_Dat4: rawData });

      this.setState({
        report4: result.data.result,
        isDisable: false,
      });

      // สร้างอ็อบเจ็กต์ใหม่เพื่ออัปเดตเฉพาะส่วนที่ต้องการ
      const updatedTableData = [...this.state.tableData]; // คัดลอก tableData เดิม
      console.log(result.data.result[0].TestTeam_Instruments);

      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        const updatedTableData = [...this.state.tableData];
        updatedTableData[9][1] = result.data.result[0].TestTeam_Instruments;
        this.setState({ tableData: updatedTableData });
      } else {
        // กรณีไม่มีข้อมูล กำหนดค่าเป็นว่าง
        const updatedTableData = [...this.state.tableData];
        updatedTableData[9][1] = '';
        this.setState({ tableData: updatedTableData });
      }


    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetInstrumentsDynamicdiskghost = async () => {
    try {
      const result = await httpClient.get(
        server.InstrumentsDynamicdiskghost_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData4;

      this.setState({ Raw_Dat4: rawData });

      this.setState({
        report4: result.data.result,
        isDisable: false,
      });

      // สร้างอ็อบเจ็กต์ใหม่เพื่ออัปเดตเฉพาะส่วนที่ต้องการ
      const updatedTableData = [...this.state.tableData]; // คัดลอก tableData เดิม
      console.log(result.data.result[0].TestTeam_Instruments);

      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        const updatedTableData = [...this.state.tableData];
        updatedTableData[10][1] = result.data.result[0].TestTeam_Instruments;
        this.setState({ tableData: updatedTableData });
      } else {
        // กรณีไม่มีข้อมูล กำหนดค่าเป็นว่าง
        const updatedTableData = [...this.state.tableData];
        updatedTableData[10][1] = '';
        this.setState({ tableData: updatedTableData });
      }


    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetInstrumentsExtractable = async () => {
    try {
      const result = await httpClient.get(
        server.InstrumentsExtractable_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData4;

      this.setState({ Raw_Dat4: rawData });

      this.setState({
        report4: result.data.result,
        isDisable: false,
      });

      // สร้างอ็อบเจ็กต์ใหม่เพื่ออัปเดตเฉพาะส่วนที่ต้องการ
      const updatedTableData = [...this.state.tableData]; // คัดลอก tableData เดิม
      console.log(result.data.result[0].TestTeam_Instruments);

      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        const updatedTableData = [...this.state.tableData];
        updatedTableData[11][1] = result.data.result[0].TestTeam_Instruments;
        this.setState({ tableData: updatedTableData });
      } else {
        // กรณีไม่มีข้อมูล กำหนดค่าเป็นว่าง
        const updatedTableData = [...this.state.tableData];
        updatedTableData[11][1] = '';
        this.setState({ tableData: updatedTableData });
      }


    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetInstrumentsCorrosion = async () => {
    try {
      const result = await httpClient.get(
        server.InstrumentsCorrosion_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData4;

      this.setState({ Raw_Dat4: rawData });

      this.setState({
        report4: result.data.result,
        isDisable: false,
      });

      // สร้างอ็อบเจ็กต์ใหม่เพื่ออัปเดตเฉพาะส่วนที่ต้องการ
      const updatedTableData = [...this.state.tableData]; // คัดลอก tableData เดิม
      console.log(result.data.result[0].TestTeam_Instruments);

      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        const updatedTableData = [...this.state.tableData];
        updatedTableData[12][1] = result.data.result[0].TestTeam_Instruments;
        this.setState({ tableData: updatedTableData });
      } else {
        // กรณีไม่มีข้อมูล กำหนดค่าเป็นว่าง
        const updatedTableData = [...this.state.tableData];
        updatedTableData[12][1] = '';
        this.setState({ tableData: updatedTableData });
      }


    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetInstrumentsParticlecount = async () => {
    try {
      const result = await httpClient.get(
        server.InstrumentsParticlecount_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData4;

      this.setState({ Raw_Dat4: rawData });

      this.setState({
        report4: result.data.result,
        isDisable: false,
      });

      // สร้างอ็อบเจ็กต์ใหม่เพื่ออัปเดตเฉพาะส่วนที่ต้องการ
      const updatedTableData = [...this.state.tableData]; // คัดลอก tableData เดิม
      console.log(result.data.result[0].TestTeam_Instruments);

      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        const updatedTableData = [...this.state.tableData];
        updatedTableData[13][1] = result.data.result[0].TestTeam_Instruments;
        this.setState({ tableData: updatedTableData });
      } else {
        // กรณีไม่มีข้อมูล กำหนดค่าเป็นว่าง
        const updatedTableData = [...this.state.tableData];
        updatedTableData[13][1] = '';
        this.setState({ tableData: updatedTableData });
      }


    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };

  doGetDataquantityLPC = async () => {
    try {
      const result = await httpClient.get(
        server.DataquantityLPC_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData4;

      this.setState({ Raw_Dat4: rawData });

      this.setState({
        report4: result.data.result,
        isDisable: false,
      });

      // สร้างอ็อบเจ็กต์ใหม่เพื่ออัปเดตเฉพาะส่วนที่ต้องการ
      const updatedTableData = [...this.state.tableData]; // คัดลอก tableData เดิม
      console.log(result.data.result[0].TestTeam_DataQuantity)
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        const updatedTableData = [...this.state.tableData];
        updatedTableData[0][2] = result.data.result[0].TestTeam_DataQuantity;
        this.setState({ tableData: updatedTableData });
      } else {
        // กรณีไม่มีข้อมูล กำหนดค่าเป็นว่าง
        const updatedTableData = [...this.state.tableData];
        updatedTableData[0][2] = '';
        this.setState({ tableData: updatedTableData });
      }


    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetDataquantitySprayLPC = async () => {
    try {
      const result = await httpClient.get(
        server.DataquantitySprayLPC_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData4;

      this.setState({ Raw_Dat4: rawData });

      this.setState({
        report4: result.data.result,
        isDisable: false,
      });

      // สร้างอ็อบเจ็กต์ใหม่เพื่ออัปเดตเฉพาะส่วนที่ต้องการ
      const updatedTableData = [...this.state.tableData]; // คัดลอก tableData เดิม
      console.log(result.data.result[0].TestTeam_DataQuantity)
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        const updatedTableData = [...this.state.tableData];
        updatedTableData[1][2] = result.data.result[0].TestTeam_DataQuantity;
        this.setState({ tableData: updatedTableData });
      } else {
        // กรณีไม่มีข้อมูล กำหนดค่าเป็นว่าง
        const updatedTableData = [...this.state.tableData];
        updatedTableData[1][2] = '';
        this.setState({ tableData: updatedTableData });
      }


    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetDataquantityAPA = async () => {
    try {
      const result = await httpClient.get(
        server.DataquantityAPA_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData4;

      this.setState({ Raw_Dat4: rawData });

      this.setState({
        report4: result.data.result,
        isDisable: false,
      });

      // สร้างอ็อบเจ็กต์ใหม่เพื่ออัปเดตเฉพาะส่วนที่ต้องการ
      const updatedTableData = [...this.state.tableData]; // คัดลอก tableData เดิม
      console.log(result.data.result[0].TestTeam_DataQuantity)
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        const updatedTableData = [...this.state.tableData];
        updatedTableData[2][2] = result.data.result[0].TestTeam_DataQuantity;
        this.setState({ tableData: updatedTableData });
      } else {
        // กรณีไม่มีข้อมูล กำหนดค่าเป็นว่าง
        const updatedTableData = [...this.state.tableData];
        updatedTableData[2][2] = '';
        this.setState({ tableData: updatedTableData });
      }


    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetDataquantityTalcbytape = async () => {
    try {
      const result = await httpClient.get(
        server.DataquantityTalcbytape_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData4;

      this.setState({ Raw_Dat4: rawData });

      this.setState({
        report4: result.data.result,
        isDisable: false,
      });

      // สร้างอ็อบเจ็กต์ใหม่เพื่ออัปเดตเฉพาะส่วนที่ต้องการ
      const updatedTableData = [...this.state.tableData]; // คัดลอก tableData เดิม
      console.log(result.data.result[0].TestTeam_DataQuantity)
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        const updatedTableData = [...this.state.tableData];
        updatedTableData[3][2] = result.data.result[0].TestTeam_DataQuantity;
        this.setState({ tableData: updatedTableData });
      } else {
        // กรณีไม่มีข้อมูล กำหนดค่าเป็นว่าง
        const updatedTableData = [...this.state.tableData];
        updatedTableData[3][2] = '';
        this.setState({ tableData: updatedTableData });
      }


    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetDataquantityFTIR = async () => {
    try {
      const result = await httpClient.get(
        server.DataquantityFTIR_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData4;

      this.setState({ Raw_Dat4: rawData });

      this.setState({
        report4: result.data.result,
        isDisable: false,
      });

      // สร้างอ็อบเจ็กต์ใหม่เพื่ออัปเดตเฉพาะส่วนที่ต้องการ
      const updatedTableData = [...this.state.tableData]; // คัดลอก tableData เดิม
      console.log(result.data.result[0].TestTeam_DataQuantity)
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        const updatedTableData = [...this.state.tableData];
        updatedTableData[4][2] = result.data.result[0].TestTeam_DataQuantity;
        this.setState({ tableData: updatedTableData });
      } else {
        // กรณีไม่มีข้อมูล กำหนดค่าเป็นว่าง
        const updatedTableData = [...this.state.tableData];
        updatedTableData[4][2] = '';
        this.setState({ tableData: updatedTableData });
      }


    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetDataquantityIC = async () => {
    try {
      const result = await httpClient.get(
        server.DataquantityIC_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData4;

      this.setState({ Raw_Dat4: rawData });

      this.setState({
        report4: result.data.result,
        isDisable: false,
      });

      // สร้างอ็อบเจ็กต์ใหม่เพื่ออัปเดตเฉพาะส่วนที่ต้องการ
      const updatedTableData = [...this.state.tableData]; // คัดลอก tableData เดิม
      console.log(result.data.result[0].TestTeam_DataQuantity)
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        const updatedTableData = [...this.state.tableData];
        updatedTableData[5][2] = result.data.result[0].TestTeam_DataQuantity;
        this.setState({ tableData: updatedTableData });
      } else {
        // กรณีไม่มีข้อมูล กำหนดค่าเป็นว่าง
        const updatedTableData = [...this.state.tableData];
        updatedTableData[5][2] = '';
        this.setState({ tableData: updatedTableData });
      }


    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetDataquantityNVR = async () => {
    try {
      const result = await httpClient.get(
        server.DataquantityNVR_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData4;

      this.setState({ Raw_Dat4: rawData });

      this.setState({
        report4: result.data.result,
        isDisable: false,
      });

      // สร้างอ็อบเจ็กต์ใหม่เพื่ออัปเดตเฉพาะส่วนที่ต้องการ
      const updatedTableData = [...this.state.tableData]; // คัดลอก tableData เดิม
      console.log(result.data.result[0].TestTeam_DataQuantity)
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        const updatedTableData = [...this.state.tableData];
        updatedTableData[6][2] = result.data.result[0].TestTeam_DataQuantity;
        this.setState({ tableData: updatedTableData });
      } else {
        // กรณีไม่มีข้อมูล กำหนดค่าเป็นว่าง
        const updatedTableData = [...this.state.tableData];
        updatedTableData[6][2] = '';
        this.setState({ tableData: updatedTableData });
      }


    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetDataquantityOutgasday0 = async () => {
    try {
      const result = await httpClient.get(
        server.DataquantityOutgasday0_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData4;

      this.setState({ Raw_Dat4: rawData });

      this.setState({
        report4: result.data.result,
        isDisable: false,
      });

      // สร้างอ็อบเจ็กต์ใหม่เพื่ออัปเดตเฉพาะส่วนที่ต้องการ
      const updatedTableData = [...this.state.tableData]; // คัดลอก tableData เดิม
      console.log(result.data.result[0].TestTeam_DataQuantity)
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        const updatedTableData = [...this.state.tableData];
        updatedTableData[7][2] = result.data.result[0].TestTeam_DataQuantity;
        this.setState({ tableData: updatedTableData });
      } else {
        // กรณีไม่มีข้อมูล กำหนดค่าเป็นว่าง
        const updatedTableData = [...this.state.tableData];
        updatedTableData[7][2] = '';
        this.setState({ tableData: updatedTableData });
      }


    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetDataquantityOutgasday14 = async () => {
    try {
      const result = await httpClient.get(
        server.DataquantityOutgasday14_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData4;

      this.setState({ Raw_Dat4: rawData });

      this.setState({
        report4: result.data.result,
        isDisable: false,
      });

      // สร้างอ็อบเจ็กต์ใหม่เพื่ออัปเดตเฉพาะส่วนที่ต้องการ
      const updatedTableData = [...this.state.tableData]; // คัดลอก tableData เดิม
      console.log(result.data.result[0].TestTeam_DataQuantity)
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        const updatedTableData = [...this.state.tableData];
        updatedTableData[8][2] = result.data.result[0].TestTeam_DataQuantity;
        this.setState({ tableData: updatedTableData });
      } else {
        // กรณีไม่มีข้อมูล กำหนดค่าเป็นว่าง
        const updatedTableData = [...this.state.tableData];
        updatedTableData[8][2] = '';
        this.setState({ tableData: updatedTableData });
      }


    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetDataquantityGhosttest = async () => {
    try {
      const result = await httpClient.get(
        server.DataquantityGhosttest_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData4;

      this.setState({ Raw_Dat4: rawData });

      this.setState({
        report4: result.data.result,
        isDisable: false,
      });

      // สร้างอ็อบเจ็กต์ใหม่เพื่ออัปเดตเฉพาะส่วนที่ต้องการ
      const updatedTableData = [...this.state.tableData]; // คัดลอก tableData เดิม
      console.log(result.data.result[0].TestTeam_DataQuantity)
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        const updatedTableData = [...this.state.tableData];
        updatedTableData[9][2] = result.data.result[0].TestTeam_DataQuantity;
        this.setState({ tableData: updatedTableData });
      } else {
        // กรณีไม่มีข้อมูล กำหนดค่าเป็นว่าง
        const updatedTableData = [...this.state.tableData];
        updatedTableData[9][2] = '';
        this.setState({ tableData: updatedTableData });
      }


    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetDataquantityDynamicdiskghost = async () => {
    try {
      const result = await httpClient.get(
        server.DataquantityDynamicdiskghost_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData4;

      this.setState({ Raw_Dat4: rawData });

      this.setState({
        report4: result.data.result,
        isDisable: false,
      });

      // สร้างอ็อบเจ็กต์ใหม่เพื่ออัปเดตเฉพาะส่วนที่ต้องการ
      const updatedTableData = [...this.state.tableData]; // คัดลอก tableData เดิม
      console.log(result.data.result[0].TestTeam_DataQuantity)
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        const updatedTableData = [...this.state.tableData];
        updatedTableData[10][2] = result.data.result[0].TestTeam_DataQuantity;
        this.setState({ tableData: updatedTableData });
      } else {
        // กรณีไม่มีข้อมูล กำหนดค่าเป็นว่าง
        const updatedTableData = [...this.state.tableData];
        updatedTableData[10][2] = '';
        this.setState({ tableData: updatedTableData });
      }


    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetDataquantityExtractable = async () => {
    try {
      const result = await httpClient.get(
        server.DataquantityExtractable_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData4;

      this.setState({ Raw_Dat4: rawData });

      this.setState({
        report4: result.data.result,
        isDisable: false,
      });

      // สร้างอ็อบเจ็กต์ใหม่เพื่ออัปเดตเฉพาะส่วนที่ต้องการ
      const updatedTableData = [...this.state.tableData]; // คัดลอก tableData เดิม
      console.log(result.data.result[0].TestTeam_DataQuantity)
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        const updatedTableData = [...this.state.tableData];
        updatedTableData[11][2] = result.data.result[0].TestTeam_DataQuantity;
        this.setState({ tableData: updatedTableData });
      } else {
        // กรณีไม่มีข้อมูล กำหนดค่าเป็นว่าง
        const updatedTableData = [...this.state.tableData];
        updatedTableData[11][2] = '';
        this.setState({ tableData: updatedTableData });
      }


    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetDataquantityCorrosion = async () => {
    try {
      const result = await httpClient.get(
        server.DataquantityCorrosion_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData4;

      this.setState({ Raw_Dat4: rawData });

      this.setState({
        report4: result.data.result,
        isDisable: false,
      });

      // สร้างอ็อบเจ็กต์ใหม่เพื่ออัปเดตเฉพาะส่วนที่ต้องการ
      const updatedTableData = [...this.state.tableData]; // คัดลอก tableData เดิม
      console.log(result.data.result[0].TestTeam_DataQuantity)
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        const updatedTableData = [...this.state.tableData];
        updatedTableData[12][2] = result.data.result[0].TestTeam_DataQuantity;
        this.setState({ tableData: updatedTableData });
      } else {
        // กรณีไม่มีข้อมูล กำหนดค่าเป็นว่าง
        const updatedTableData = [...this.state.tableData];
        updatedTableData[12][2] = '';
        this.setState({ tableData: updatedTableData });
      }


    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetDataquantityParticlecount = async () => {
    try {
      const result = await httpClient.get(
        server.DataquantityParticlecountn_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData4;

      this.setState({ Raw_Dat4: rawData });

      this.setState({
        report4: result.data.result,
        isDisable: false,
      });

      // สร้างอ็อบเจ็กต์ใหม่เพื่ออัปเดตเฉพาะส่วนที่ต้องการ
      const updatedTableData = [...this.state.tableData]; // คัดลอก tableData เดิม
      console.log(result.data.result[0].TestTeam_DataQuantity)
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        const updatedTableData = [...this.state.tableData];
        updatedTableData[13][2] = result.data.result[0].TestTeam_DataQuantity;
        this.setState({ tableData: updatedTableData });
      } else {
        // กรณีไม่มีข้อมูล กำหนดค่าเป็นว่าง
        const updatedTableData = [...this.state.tableData];
        updatedTableData[13][2] = '';
        this.setState({ tableData: updatedTableData });
      }


    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetRemarkLPC = async () => {
    try {
      const result = await httpClient.get(
        server.RemarkLPC_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData4;

      this.setState({ Raw_Dat4: rawData });

      this.setState({
        report4: result.data.result,
        isDisable: false,
      });

      // สร้างอ็อบเจ็กต์ใหม่เพื่ออัปเดตเฉพาะส่วนที่ต้องการ
      const updatedTableData = [...this.state.tableData]; // คัดลอก tableData เดิม
      console.log(result.data.result[0].TestTeam_Remark);

      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        const updatedTableData = [...this.state.tableData];
        updatedTableData[0][3] = result.data.result[0].TestTeam_Remark;
        this.setState({ tableData: updatedTableData });
      } else {
        // กรณีไม่มีข้อมูล กำหนดค่าเป็นว่าง
        const updatedTableData = [...this.state.tableData];
        updatedTableData[0][3] = '';
        this.setState({ tableData: updatedTableData });
      }


    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetRemarkSprayLPC = async () => {
    try {
      const result = await httpClient.get(
        server.RemarkSprayLPC_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData4;

      this.setState({ Raw_Dat4: rawData });

      this.setState({
        report4: result.data.result,
        isDisable: false,
      });

      // สร้างอ็อบเจ็กต์ใหม่เพื่ออัปเดตเฉพาะส่วนที่ต้องการ
      const updatedTableData = [...this.state.tableData]; // คัดลอก tableData เดิม
      console.log(result.data.result[0].TestTeam_Remark);

      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        const updatedTableData = [...this.state.tableData];
        updatedTableData[1][3] = result.data.result[0].TestTeam_Remark;
        this.setState({ tableData: updatedTableData });
      } else {
        // กรณีไม่มีข้อมูล กำหนดค่าเป็นว่าง
        const updatedTableData = [...this.state.tableData];
        updatedTableData[1][3] = '';
        this.setState({ tableData: updatedTableData });
      }


    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetRemarkAPA = async () => {
    try {
      const result = await httpClient.get(
        server.RemarkAPA_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData4;

      this.setState({ Raw_Dat4: rawData });

      this.setState({
        report4: result.data.result,
        isDisable: false,
      });

      // สร้างอ็อบเจ็กต์ใหม่เพื่ออัปเดตเฉพาะส่วนที่ต้องการ
      const updatedTableData = [...this.state.tableData]; // คัดลอก tableData เดิม
      console.log(result.data.result[0].TestTeam_Remark);

      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        const updatedTableData = [...this.state.tableData];
        updatedTableData[2][3] = result.data.result[0].TestTeam_Remark;
        this.setState({ tableData: updatedTableData });
      } else {
        // กรณีไม่มีข้อมูล กำหนดค่าเป็นว่าง
        const updatedTableData = [...this.state.tableData];
        updatedTableData[2][3] = '';
        this.setState({ tableData: updatedTableData });
      }


    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetRemarkTalcbytape = async () => {
    try {
      const result = await httpClient.get(
        server.RemarkTalcbytape_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData4;

      this.setState({ Raw_Dat4: rawData });

      this.setState({
        report4: result.data.result,
        isDisable: false,
      });

      // สร้างอ็อบเจ็กต์ใหม่เพื่ออัปเดตเฉพาะส่วนที่ต้องการ
      const updatedTableData = [...this.state.tableData]; // คัดลอก tableData เดิม
      console.log(result.data.result[0].TestTeam_Remark);

      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        const updatedTableData = [...this.state.tableData];
        updatedTableData[3][3] = result.data.result[0].TestTeam_Remark;
        this.setState({ tableData: updatedTableData });
      } else {
        // กรณีไม่มีข้อมูล กำหนดค่าเป็นว่าง
        const updatedTableData = [...this.state.tableData];
        updatedTableData[3][3] = '';
        this.setState({ tableData: updatedTableData });
      }


    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetRemarkFTIR = async () => {
    try {
      const result = await httpClient.get(
        server.RemarkFTIR_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData4;

      this.setState({ Raw_Dat4: rawData });

      this.setState({
        report4: result.data.result,
        isDisable: false,
      });

      // สร้างอ็อบเจ็กต์ใหม่เพื่ออัปเดตเฉพาะส่วนที่ต้องการ
      const updatedTableData = [...this.state.tableData]; // คัดลอก tableData เดิม
      console.log(result.data.result[0].TestTeam_Remark);

      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        const updatedTableData = [...this.state.tableData];
        updatedTableData[4][3] = result.data.result[0].TestTeam_Remark;
        this.setState({ tableData: updatedTableData });
      } else {
        // กรณีไม่มีข้อมูล กำหนดค่าเป็นว่าง
        const updatedTableData = [...this.state.tableData];
        updatedTableData[4][3] = '';
        this.setState({ tableData: updatedTableData });
      }


    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetRemarkIC = async () => {
    try {
      const result = await httpClient.get(
        server.RemarkIC_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData4;

      this.setState({ Raw_Dat4: rawData });

      this.setState({
        report4: result.data.result,
        isDisable: false,
      });

      // สร้างอ็อบเจ็กต์ใหม่เพื่ออัปเดตเฉพาะส่วนที่ต้องการ
      const updatedTableData = [...this.state.tableData]; // คัดลอก tableData เดิม
      console.log(result.data.result[0].TestTeam_Remark);

      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        const updatedTableData = [...this.state.tableData];
        updatedTableData[5][3] = result.data.result[0].TestTeam_Remark;
        this.setState({ tableData: updatedTableData });
      } else {
        // กรณีไม่มีข้อมูล กำหนดค่าเป็นว่าง
        const updatedTableData = [...this.state.tableData];
        updatedTableData[5][3] = '';
        this.setState({ tableData: updatedTableData });
      }


    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetRemarkNVR = async () => {
    try {
      const result = await httpClient.get(
        server.RemarkNVR_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData4;

      this.setState({ Raw_Dat4: rawData });

      this.setState({
        report4: result.data.result,
        isDisable: false,
      });

      // สร้างอ็อบเจ็กต์ใหม่เพื่ออัปเดตเฉพาะส่วนที่ต้องการ
      const updatedTableData = [...this.state.tableData]; // คัดลอก tableData เดิม
      console.log(result.data.result[0].TestTeam_Remark);

      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        const updatedTableData = [...this.state.tableData];
        updatedTableData[6][3] = result.data.result[0].TestTeam_Remark;
        this.setState({ tableData: updatedTableData });
      } else {
        // กรณีไม่มีข้อมูล กำหนดค่าเป็นว่าง
        const updatedTableData = [...this.state.tableData];
        updatedTableData[6][3] = '';
        this.setState({ tableData: updatedTableData });
      }


    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetRemarkOutgasday0 = async () => {
    try {
      const result = await httpClient.get(
        server.RemarkOutgasday0_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData4;

      this.setState({ Raw_Dat4: rawData });

      this.setState({
        report4: result.data.result,
        isDisable: false,
      });

      // สร้างอ็อบเจ็กต์ใหม่เพื่ออัปเดตเฉพาะส่วนที่ต้องการ
      const updatedTableData = [...this.state.tableData]; // คัดลอก tableData เดิม
      console.log(result.data.result[0].TestTeam_Remark);

      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        const updatedTableData = [...this.state.tableData];
        updatedTableData[7][3] = result.data.result[0].TestTeam_Remark;
        this.setState({ tableData: updatedTableData });
      } else {
        // กรณีไม่มีข้อมูล กำหนดค่าเป็นว่าง
        const updatedTableData = [...this.state.tableData];
        updatedTableData[7][3] = '';
        this.setState({ tableData: updatedTableData });
      }


    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetRemarkOutgasday14 = async () => {
    try {
      const result = await httpClient.get(
        server.RemarkOutgasday14_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData4;

      this.setState({ Raw_Dat4: rawData });

      this.setState({
        report4: result.data.result,
        isDisable: false,
      });

      // สร้างอ็อบเจ็กต์ใหม่เพื่ออัปเดตเฉพาะส่วนที่ต้องการ
      const updatedTableData = [...this.state.tableData]; // คัดลอก tableData เดิม
      console.log(result.data.result[0].TestTeam_Remark);

      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        const updatedTableData = [...this.state.tableData];
        updatedTableData[8][3] = result.data.result[0].TestTeam_Remark;
        this.setState({ tableData: updatedTableData });
      } else {
        // กรณีไม่มีข้อมูล กำหนดค่าเป็นว่าง
        const updatedTableData = [...this.state.tableData];
        updatedTableData[8][3] = '';
        this.setState({ tableData: updatedTableData });
      }


    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetRemarkGhosttest = async () => {
    try {
      const result = await httpClient.get(
        server.RemarkGhosttest_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData4;

      this.setState({ Raw_Dat4: rawData });

      this.setState({
        report4: result.data.result,
        isDisable: false,
      });

      // สร้างอ็อบเจ็กต์ใหม่เพื่ออัปเดตเฉพาะส่วนที่ต้องการ
      const updatedTableData = [...this.state.tableData]; // คัดลอก tableData เดิม
      console.log(result.data.result[0].TestTeam_Remark);

      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        const updatedTableData = [...this.state.tableData];
        updatedTableData[9][3] = result.data.result[0].TestTeam_Remark;
        this.setState({ tableData: updatedTableData });
      } else {
        // กรณีไม่มีข้อมูล กำหนดค่าเป็นว่าง
        const updatedTableData = [...this.state.tableData];
        updatedTableData[9][3] = '';
        this.setState({ tableData: updatedTableData });
      }


    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetRemarkDynamicdiskghost = async () => {
    try {
      const result = await httpClient.get(
        server.RemarkDynamicdiskghost_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData4;

      this.setState({ Raw_Dat4: rawData });

      this.setState({
        report4: result.data.result,
        isDisable: false,
      });

      // สร้างอ็อบเจ็กต์ใหม่เพื่ออัปเดตเฉพาะส่วนที่ต้องการ
      const updatedTableData = [...this.state.tableData]; // คัดลอก tableData เดิม
      console.log(result.data.result[0].TestTeam_Remark);

      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        const updatedTableData = [...this.state.tableData];
        updatedTableData[10][3] = result.data.result[0].TestTeam_Remark;
        this.setState({ tableData: updatedTableData });
      } else {
        // กรณีไม่มีข้อมูล กำหนดค่าเป็นว่าง
        const updatedTableData = [...this.state.tableData];
        updatedTableData[10][3] = '';
        this.setState({ tableData: updatedTableData });
      }


    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetRemarkExtractable = async () => {
    try {
      const result = await httpClient.get(
        server.RemarkExtractable_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData4;

      this.setState({ Raw_Dat4: rawData });

      this.setState({
        report4: result.data.result,
        isDisable: false,
      });

      // สร้างอ็อบเจ็กต์ใหม่เพื่ออัปเดตเฉพาะส่วนที่ต้องการ
      const updatedTableData = [...this.state.tableData]; // คัดลอก tableData เดิม
      console.log(result.data.result[0].TestTeam_Remark);

      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        const updatedTableData = [...this.state.tableData];
        updatedTableData[11][3] = result.data.result[0].TestTeam_Remark;
        this.setState({ tableData: updatedTableData });
      } else {
        // กรณีไม่มีข้อมูล กำหนดค่าเป็นว่าง
        const updatedTableData = [...this.state.tableData];
        updatedTableData[11][3] = '';
        this.setState({ tableData: updatedTableData });
      }


    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetRemarkCorrosion = async () => {
    try {
      const result = await httpClient.get(
        server.RemarkCorrosion_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData4;

      this.setState({ Raw_Dat4: rawData });

      this.setState({
        report4: result.data.result,
        isDisable: false,
      });

      // สร้างอ็อบเจ็กต์ใหม่เพื่ออัปเดตเฉพาะส่วนที่ต้องการ
      const updatedTableData = [...this.state.tableData]; // คัดลอก tableData เดิม
      console.log(result.data.result[0].TestTeam_Remark);

      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        const updatedTableData = [...this.state.tableData];
        updatedTableData[12][3] = result.data.result[0].TestTeam_Remark;
        this.setState({ tableData: updatedTableData });
      } else {
        // กรณีไม่มีข้อมูล กำหนดค่าเป็นว่าง
        const updatedTableData = [...this.state.tableData];
        updatedTableData[12][3] = '';
        this.setState({ tableData: updatedTableData });
      }


    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetRemarkParticlecount = async () => {
    try {
      const result = await httpClient.get(
        server.RemarkParticlecount_URL + "/" + this.state.docNo
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData4;

      this.setState({ Raw_Dat4: rawData });

      this.setState({
        report4: result.data.result,
        isDisable: false,
      });

      // สร้างอ็อบเจ็กต์ใหม่เพื่ออัปเดตเฉพาะส่วนที่ต้องการ
      const updatedTableData = [...this.state.tableData]; // คัดลอก tableData เดิม
      console.log(result.data.result[0].TestTeam_Remark);

      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        const updatedTableData = [...this.state.tableData];
        updatedTableData[13][3] = result.data.result[0].TestTeam_Remark;
        this.setState({ tableData: updatedTableData });
      } else {
        // กรณีไม่มีข้อมูล กำหนดค่าเป็นว่าง
        const updatedTableData = [...this.state.tableData];
        updatedTableData[13][3] = '';
        this.setState({ tableData: updatedTableData });
      }


    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };

  doGetRegister = async () => {
    try {
      const result = await httpClient.get(
        server.Register_URL + "/" + this.state.docNo// เปลี่ยน
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData3;// เปลี่ยน

      this.setState({ Raw_Dat3: rawData });// เปลี่ยน

      this.setState({
        report3: result.data.result,// เปลี่ยนต้องไปเพิ่มข้างบนด้วย
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ textValueRegistertb: result.data.result[0].Register }); // เปลี่ยน
      } else {
        this.setState({ textValueRegistertb: '' }); // เปลี่ยน
      }
    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetSurfacebase = async () => {
    try {
      const result = await httpClient.get(
        server.Surfacebase_URL + "/" + this.state.docNo// เปลี่ยน
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData3;// เปลี่ยน

      this.setState({ Raw_Dat3: rawData });// เปลี่ยน

      this.setState({
        report3: result.data.result,// เปลี่ยนต้องไปเพิ่มข้างบนด้วย
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ textValueBasetb: result.data.result[0].SurfaceArea_Base }); // เปลี่ยน
      } else {
        this.setState({ textValueBasetb: '' }); // เปลี่ยน
      }
    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetSurfaceMBA = async () => {
    try {
      const result = await httpClient.get(
        server.SurfaceMBA_URL + "/" + this.state.docNo// เปลี่ยน
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData3;// เปลี่ยน

      this.setState({ Raw_Dat3: rawData });// เปลี่ยน

      this.setState({
        report3: result.data.result,// เปลี่ยนต้องไปเพิ่มข้างบนด้วย
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ textValueMbatb: result.data.result[0].SurfaceArea_MBA }); // เปลี่ยน
      } else {
        this.setState({ textValueMbatb: '' }); // เปลี่ยน
      }
    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetSurfaceHub = async () => {
    try {
      const result = await httpClient.get(
        server.SurfaceHub_URL + "/" + this.state.docNo// เปลี่ยน
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData3;// เปลี่ยน

      this.setState({ Raw_Dat3: rawData });// เปลี่ยน

      this.setState({
        report3: result.data.result,// เปลี่ยนต้องไปเพิ่มข้างบนด้วย
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ textValueHubtb: result.data.result[0].SurfaceArea_Hub }); // เปลี่ยน
      } else {
        this.setState({ textValueHubtb: '' }); // เปลี่ยน
      }
    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetSurfaceETC = async () => {
    try {
      const result = await httpClient.get(
        server.SurfaceETC_URL + "/" + this.state.docNo// เปลี่ยน
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData3;// เปลี่ยน

      this.setState({ Raw_Dat3: rawData });// เปลี่ยน

      this.setState({
        report3: result.data.result,// เปลี่ยนต้องไปเพิ่มข้างบนด้วย
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ textValueEtctb: result.data.result[0].SurfaceArea_etc }); // เปลี่ยน
      } else {
        this.setState({ textValueEtctb: '' }); // เปลี่ยน
      }
    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetLotnoPartno = async () => {
    try {
      const result = await httpClient.get(
        server.LotnoPartno_URL + "/" + this.state.docNo// เปลี่ยน
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData3;// เปลี่ยน

      this.setState({ Raw_Dat3: rawData });// เปลี่ยน

      this.setState({
        report3: result.data.result,// เปลี่ยนต้องไปเพิ่มข้างบนด้วย
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ textValuePartNotb: result.data.result[0].Lotno_Partno }); // เปลี่ยน
      } else {
        this.setState({ textValuePartNotb: '' }); // เปลี่ยน
      }
    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetLotnoRev = async () => {
    try {
      const result = await httpClient.get(
        server.LotnoRev_URL + "/" + this.state.docNo// เปลี่ยน
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData3;// เปลี่ยน

      this.setState({ Raw_Dat3: rawData });// เปลี่ยน

      this.setState({
        report3: result.data.result,// เปลี่ยนต้องไปเพิ่มข้างบนด้วย
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ textValueRevtb: result.data.result[0].Lotno_Rev }); // เปลี่ยน
      } else {
        this.setState({ textValueRevtb: '' }); // เปลี่ยน
      }
    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetLotnoPlatform = async () => {
    try {
      const result = await httpClient.get(
        server.LotnoPlatform_URL + "/" + this.state.docNo// เปลี่ยน
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData3;// เปลี่ยน

      this.setState({ Raw_Dat3: rawData });// เปลี่ยน

      this.setState({
        report3: result.data.result,// เปลี่ยนต้องไปเพิ่มข้างบนด้วย
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ selectedOptionplatform: result.data.result[0].Lotno_Platform }); // เปลี่ยน
      } else {
        this.setState({ selectedOptionplatform: '' }); // เปลี่ยน
      }
    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetLotnoLotQAno = async () => {
    try {
      const result = await httpClient.get(
        server.LotnoLotQAno_URL + "/" + this.state.docNo// เปลี่ยน
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData3;// เปลี่ยน

      this.setState({ Raw_Dat3: rawData });// เปลี่ยน

      this.setState({
        report3: result.data.result,// เปลี่ยนต้องไปเพิ่มข้างบนด้วย
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ textValueLotnotb: result.data.result[0].Lotno_LotQAno }); // เปลี่ยน
      } else {
        this.setState({ textValueLotnotb: '' }); // เปลี่ยน
      }
    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetLotnoLotMOno = async () => {
    try {
      const result = await httpClient.get(
        server.LotnoLotMOno_URL + "/" + this.state.docNo// เปลี่ยน
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData3;// เปลี่ยน

      this.setState({ Raw_Dat3: rawData });// เปลี่ยน

      this.setState({
        report3: result.data.result,// เปลี่ยนต้องไปเพิ่มข้างบนด้วย
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ textValueLotMotb: result.data.result[0].Lotno_LotMOno }); // เปลี่ยน
      } else {
        this.setState({ textValueLotMotb: '' }); // เปลี่ยน
      }
    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetLotnoMotorOilType = async () => {
    try {
      const result = await httpClient.get(
        server.LotnoMotorOilType_URL + "/" + this.state.docNo// เปลี่ยน
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData3;// เปลี่ยน

      this.setState({ Raw_Dat3: rawData });// เปลี่ยน

      this.setState({
        report3: result.data.result,// เปลี่ยนต้องไปเพิ่มข้างบนด้วย
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ textValueMotoroiltypetb: result.data.result[0].Lotno_MotorOilType }); // เปลี่ยน
      } else {
        this.setState({ textValueMotoroiltypetb: '' }); // เปลี่ยน
      }
    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };

  doGetLotnoSupplierhub = async () => {
    try {
      const result = await httpClient.get(
        server.LotnoSupplierhub_URL + "/" + this.state.docNo// เปลี่ยน
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData3;// เปลี่ยน

      this.setState({ Raw_Dat3: rawData });// เปลี่ยน

      this.setState({
        report3: result.data.result,// เปลี่ยนต้องไปเพิ่มข้างบนด้วย
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ textValueSuppliehubtb: result.data.result[0].Lotno_Supplierhub }); // เปลี่ยน
      } else {
        this.setState({ textValueSuppliehubtb: '' }); // เปลี่ยน
      }
    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetLotnoSupplierbase = async () => {
    try {
      const result = await httpClient.get(
        server.LotnoSupplierbase_URL + "/" + this.state.docNo// เปลี่ยน
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData3;// เปลี่ยน

      this.setState({ Raw_Dat3: rawData });// เปลี่ยน

      this.setState({
        report3: result.data.result,// เปลี่ยนต้องไปเพิ่มข้างบนด้วย
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ textValueSuppliebasetb: result.data.result[0].Lotno_Supplierbase }); // เปลี่ยน
      } else {
        this.setState({ textValueSuppliebasetb: '' }); // เปลี่ยน
      }
    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetLotnoSupplierPCB = async () => {
    try {
      const result = await httpClient.get(
        server.LotnoSupplierPCB_URL + "/" + this.state.docNo// เปลี่ยน
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData3;// เปลี่ยน

      this.setState({ Raw_Dat3: rawData });// เปลี่ยน

      this.setState({
        report3: result.data.result,// เปลี่ยนต้องไปเพิ่มข้างบนด้วย
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ textValueSuppliepcbtb: result.data.result[0].Lotno_SupplierPCB }); // เปลี่ยน
      } else {
        this.setState({ textValueSuppliepcbtb: '' }); // เปลี่ยน
      }
    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetLotnoPCBlotno = async () => {
    try {
      const result = await httpClient.get(
        server.LotnoPCBlotno_URL + "/" + this.state.docNo// เปลี่ยน
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData3;// เปลี่ยน

      this.setState({ Raw_Dat3: rawData });// เปลี่ยน

      this.setState({
        report3: result.data.result,// เปลี่ยนต้องไปเพิ่มข้างบนด้วย
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ textValuePcblottb: result.data.result[0].Lotno_PCBlotno }); // เปลี่ยน
      } else {
        this.setState({ textValuePcblottb: '' }); // เปลี่ยน
      }
    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetLotnoSupplierramp = async () => {
    try {
      const result = await httpClient.get(
        server.LotnoSupplierramp_URL + "/" + this.state.docNo// เปลี่ยน
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData3;// เปลี่ยน

      this.setState({ Raw_Dat3: rawData });// เปลี่ยน

      this.setState({
        report3: result.data.result,// เปลี่ยนต้องไปเพิ่มข้างบนด้วย
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ textValueSupplieramptb: result.data.result[0].Lotno_Supplierramp }); // เปลี่ยน
      } else {
        this.setState({ textValueSupplieramptb: '' }); // เปลี่ยน
      }
    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetLotnoRamplotno = async () => {
    try {
      const result = await httpClient.get(
        server.LotnoRamplotno_URL + "/" + this.state.docNo// เปลี่ยน
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData3;// เปลี่ยน

      this.setState({ Raw_Dat3: rawData });// เปลี่ยน

      this.setState({
        report3: result.data.result,// เปลี่ยนต้องไปเพิ่มข้างบนด้วย
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ textValueRamplottb: result.data.result[0].Lotno_Ramplotno }); // เปลี่ยน
      } else {
        this.setState({ textValueRamplottb: '' }); // เปลี่ยน
      }
    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetLotnoSupplierdiverter = async () => {
    try {
      const result = await httpClient.get(
        server.LotnoSupplierdiverter_URL + "/" + this.state.docNo// เปลี่ยน
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData3;// เปลี่ยน

      this.setState({ Raw_Dat3: rawData });// เปลี่ยน

      this.setState({
        report3: result.data.result,// เปลี่ยนต้องไปเพิ่มข้างบนด้วย
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ textValueSuppliedivertertb: result.data.result[0].Lotno_Supplierdiverter }); // เปลี่ยน
      } else {
        this.setState({ textValueSuppliedivertertb: '' }); // เปลี่ยน
      }
    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetLotnoDiverterlot = async () => {
    try {
      const result = await httpClient.get(
        server.LotnoDiverterlot_URL + "/" + this.state.docNo// เปลี่ยน
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData3;// เปลี่ยน

      this.setState({ Raw_Dat3: rawData });// เปลี่ยน

      this.setState({
        report3: result.data.result,// เปลี่ยนต้องไปเพิ่มข้างบนด้วย
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ textValueDiverterlottb: result.data.result[0].Lotno_Diverterlot }); // เปลี่ยน
      } else {
        this.setState({ textValueDiverterlottb: '' }); // เปลี่ยน
      }
    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetLotnoSupplierIDCS = async () => {
    try {
      const result = await httpClient.get(
        server.LotnoSupplierIDCS_URL + "/" + this.state.docNo// เปลี่ยน
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData3;// เปลี่ยน

      this.setState({ Raw_Dat3: rawData });// เปลี่ยน

      this.setState({
        report3: result.data.result,// เปลี่ยนต้องไปเพิ่มข้างบนด้วย
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ textValueSupplieIDCStb: result.data.result[0].Lotno_SupplierIDCS }); // เปลี่ยน
      } else {
        this.setState({ textValueSupplieIDCStb: '' }); // เปลี่ยน
      }
    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };

  doGetLotnoIDCSlot = async () => {
    try {
      const result = await httpClient.get(
        server.LotnoIDCSlot_URL + "/" + this.state.docNo// เปลี่ยน
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData3;// เปลี่ยน

      this.setState({ Raw_Dat3: rawData });// เปลี่ยน

      this.setState({
        report3: result.data.result,// เปลี่ยนต้องไปเพิ่มข้างบนด้วย
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ textValueIDCSlottb: result.data.result[0].Lotno_IDCSlot }); // เปลี่ยน
      } else {
        this.setState({ textValueIDCSlottb: '' }); // เปลี่ยน
      }
    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetLotnoSHAWashingno = async () => {
    try {
      const result = await httpClient.get(
        server.LotnoSHAWashingno_URL + "/" + this.state.docNo// เปลี่ยน
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData3;// เปลี่ยน

      this.setState({ Raw_Dat3: rawData });// เปลี่ยน

      this.setState({
        report3: result.data.result,// เปลี่ยนต้องไปเพิ่มข้างบนด้วย
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ textValueSHAwashingnotb: result.data.result[0].Lotno_SHAWashingno }); // เปลี่ยน
      } else {
        this.setState({ textValueSHAwashingnotb: '' }); // เปลี่ยน
      }
    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetLotnoOvenSHANo = async () => {
    try {
      const result = await httpClient.get(
        server.LotnoOvenSHANo_URL + "/" + this.state.docNo// เปลี่ยน
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData3;// เปลี่ยน

      this.setState({ Raw_Dat3: rawData });// เปลี่ยน

      this.setState({
        report3: result.data.result,// เปลี่ยนต้องไปเพิ่มข้างบนด้วย
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ textValueOvenshanotb: result.data.result[0].Lotno_OvenSHANo }); // เปลี่ยน
      } else {
        this.setState({ textValueOvenshanotb: '' }); // เปลี่ยน
      }
    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetLotnoOvenMBA = async () => {
    try {
      const result = await httpClient.get(
        server.LotnoOvenMBA_URL + "/" + this.state.docNo// เปลี่ยน
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData3;// เปลี่ยน

      this.setState({ Raw_Dat3: rawData });// เปลี่ยน

      this.setState({
        report3: result.data.result,// เปลี่ยนต้องไปเพิ่มข้างบนด้วย
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ textValueOvenMBAtb: result.data.result[0].Lotno_OvenMBA }); // เปลี่ยน
      } else {
        this.setState({ textValueOvenMBAtb: '' }); // เปลี่ยน
      }
    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetLotnoCO2mcno = async () => {
    try {
      const result = await httpClient.get(
        server.LotnoCO2mcno_URL + "/" + this.state.docNo// เปลี่ยน
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData3;// เปลี่ยน

      this.setState({ Raw_Dat3: rawData });// เปลี่ยน

      this.setState({
        report3: result.data.result,// เปลี่ยนต้องไปเพิ่มข้างบนด้วย
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ textValueCo2mcnotb: result.data.result[0].Lotno_CO2mcno }); // เปลี่ยน
      } else {
        this.setState({ textValueCo2mcnotb: '' }); // เปลี่ยน
      }
    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetLotnoLineno = async () => {
    try {
      const result = await httpClient.get(
        server.LotnoLineno_URL + "/" + this.state.docNo// เปลี่ยน
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData3;// เปลี่ยน

      this.setState({ Raw_Dat3: rawData });// เปลี่ยน

      this.setState({
        report3: result.data.result,// เปลี่ยนต้องไปเพิ่มข้างบนด้วย
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ textValueLinenotb: result.data.result[0].Lotno_Lineno }); // เปลี่ยน
      } else {
        this.setState({ textValueLinenotb: '' }); // เปลี่ยน
      }
    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetLotnoResultunit = async () => {
    try {
      const result = await httpClient.get(
        server.LotnoResultunit_URL + "/" + this.state.docNo// เปลี่ยน
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData3;// เปลี่ยน

      this.setState({ Raw_Dat3: rawData });// เปลี่ยน

      this.setState({
        report3: result.data.result,// เปลี่ยนต้องไปเพิ่มข้างบนด้วย
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ textValueResultunittb: result.data.result[0].Lotno_Resultunit }); // เปลี่ยน
      } else {
        this.setState({ textValueResultunittb: '' }); // เปลี่ยน
      }
    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetPurposeoftest = async () => {
    try {
      const result = await httpClient.get(
        server.Purposeoftest_URL + "/" + this.state.docNo// เปลี่ยน
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData3;// เปลี่ยน

      this.setState({ Raw_Dat3: rawData });// เปลี่ยน

      this.setState({
        report3: result.data.result,// เปลี่ยนต้องไปเพิ่มข้างบนด้วย
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ textValuePurposetb: result.data.result[0].Purposeoftest }); // เปลี่ยน
      } else {
        this.setState({ textValuePurposetb: '' }); // เปลี่ยน
      }
    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetProcessDescription = async () => {
    try {
      const result = await httpClient.get(
        server.ProcessDescription_URL + "/" + this.state.docNo// เปลี่ยน
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData3;// เปลี่ยน

      this.setState({ Raw_Dat3: rawData });// เปลี่ยน

      this.setState({
        report3: result.data.result,// เปลี่ยนต้องไปเพิ่มข้างบนด้วย
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ textValueProcessDescriptiontb: result.data.result[0].ProcessDescription }); // เปลี่ยน
      } else {
        this.setState({ textValueProcessDescriptiontb: '' }); // เปลี่ยน
      }
    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetReferencedata = async () => {
    try {
      const result = await httpClient.get(
        server.Referencedata_URL + "/" + this.state.docNo// เปลี่ยน
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData3;// เปลี่ยน

      this.setState({ Raw_Dat3: rawData });// เปลี่ยน

      this.setState({
        report3: result.data.result,// เปลี่ยนต้องไปเพิ่มข้างบนด้วย
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ textValueReftb: result.data.result[0].Referencedata }); // เปลี่ยน
      } else {
        this.setState({ textValueReftb: '' }); // เปลี่ยน
      }
    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetMgrequest = async () => {
    try {
      const result = await httpClient.get(
        server.Mgrequest_URL +
        "/" +
        this.state.textValueMgrequesttextbox +
        "/" +
        this.state.selectedOptionRadioButtons3 +
        "/" +
        this.state.textValueMgrequesttb +
        "/" +
        this.state.docNo
      );
      // เมื่อการเรียก API สำเร็จ
      this.setState({
        result: result.data.result,
        isDisable: false, // ปลดใช้งานปุ่ม Submit เมื่อสำเร็จ
      });

      return true; // คืนค่า true เพื่อบอกว่าสำเร็จ
    } catch (error) {
      console.error(error);
      // เมื่อเกิดข้อผิดพลาดในการเรียก API
      this.setState({
        isDisable: true, // ปิดใช้งานปุ่ม Submit เมื่อเกิดข้อผิดพลาด
      });

      return false; // คืนค่า false เพื่อบอกว่าเกิดข้อผิดพลาด
    }
  };





  doGetComment = async () => {
    try {
      const result = await httpClient.get(
        server.Comment_URL + "/" + this.state.docNo// เปลี่ยน
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData3;// เปลี่ยน

      this.setState({ Raw_Dat3: rawData });// เปลี่ยน

      this.setState({
        report3: result.data.result,// เปลี่ยนต้องไปเพิ่มข้างบนด้วย
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ textValueCommenttb: result.data.result[0].Comment }); // เปลี่ยน
      } else {
        this.setState({ textValueCommenttb: '' }); // เปลี่ยน
      }

    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };

  doGetNMBsample = async () => {
    try {
      const result = await httpClient.get(
        server.NMBsample_URL + "/" + this.state.docNo// เปลี่ยน
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData3;// เปลี่ยน

      this.setState({ Raw_Dat3: rawData });// เปลี่ยน

      this.setState({
        report3: result.data.result,// เปลี่ยนต้องไปเพิ่มข้างบนด้วย
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ textValueNMBsampletb: result.data.result[0].sample_buildMBA_date }); // เปลี่ยน
      } else {
        this.setState({ textValueNMBsampletb: '' }); // เปลี่ยน
      }

    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetSamplesend = async () => {
    try {
      const result = await httpClient.get(
        server.Samplesend_URL + "/" + this.state.docNo// เปลี่ยน
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData3;// เปลี่ยน

      this.setState({ Raw_Dat3: rawData });// เปลี่ยน

      this.setState({
        report3: result.data.result,// เปลี่ยนต้องไปเพิ่มข้างบนด้วย
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ textValueSamplesendtb: result.data.result[0].Samlplesenddate_Cleanliness }); // เปลี่ยน
      } else {
        this.setState({ textValueSamplesendtb: '' }); // เปลี่ยน
      }

    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetSamplesubmit = async () => {
    try {
      const result = await httpClient.get(
        server.Samplesub_URL + "/" + this.state.docNo// เปลี่ยน
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData3;// เปลี่ยน

      this.setState({ Raw_Dat3: rawData });// เปลี่ยน

      this.setState({
        report3: result.data.result,// เปลี่ยนต้องไปเพิ่มข้างบนด้วย
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ textValueSamplesubtb: result.data.result[0].SamplesubmissiontoMSL_date }); // เปลี่ยน
      } else {
        this.setState({ textValueSamplesubtb: '' }); // เปลี่ยน
      }

    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetCommitted = async () => {
    try {
      const result = await httpClient.get(
        server.Committed_URL + "/" + this.state.docNo// เปลี่ยน
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData3;// เปลี่ยน

      this.setState({ Raw_Dat3: rawData });// เปลี่ยน

      this.setState({
        report3: result.data.result,// เปลี่ยนต้องไปเพิ่มข้างบนด้วย
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ textValueCommitshiptb: result.data.result[0].CommittedShipmentDate }); // เปลี่ยน
      } else {
        this.setState({ textValueCommitshiptb: '' }); // เปลี่ยน
      }

    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetCleanlinessapprovename = async () => {
    try {
      const result = await httpClient.get(
        server.Cleanlinessapprovename_URL + "/" + this.state.docNo// เปลี่ยน
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData3;// เปลี่ยน

      this.setState({ Raw_Dat3: rawData });// เปลี่ยน

      this.setState({
        report3: result.data.result,// เปลี่ยนต้องไปเพิ่มข้างบนด้วย
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ selectedOptionCleanlinessdropdown: result.data.result[0].Cleanliness_name }); // เปลี่ยน
      } else {
        this.setState({ selectedOptionCleanlinessdropdown: '' }); // เปลี่ยน
      }

    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetCleanlinessapproveresult = async () => {
    try {
      const result = await httpClient.get(
        server.Cleanlinessapproveresult_URL + "/" + this.state.docNo// เปลี่ยน
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData3;// เปลี่ยน

      this.setState({ Raw_Dat3: rawData });// เปลี่ยน

      this.setState({
        report3: result.data.result,// เปลี่ยนต้องไปเพิ่มข้างบนด้วย
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ selectedOptionRadiocleanliness: result.data.result[0].Cleanliness_result }); // เปลี่ยน
      } else {
        this.setState({ selectedOptionRadiocleanliness: '' }); // เปลี่ยน
      }

    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };
  doGetCleanlinessapprovereason = async () => {
    try {
      const result = await httpClient.get(
        server.Cleanlinessapprovereason_URL + "/" + this.state.docNo// เปลี่ยน
      );

      // นำข้อมูลที่ได้มาอัปเดต state และ textValueModelNametb ดังนี้
      let rawData = result.data.listRawData3;// เปลี่ยน

      this.setState({ Raw_Dat3: rawData });// เปลี่ยน

      this.setState({
        report3: result.data.result,// เปลี่ยนต้องไปเพิ่มข้างบนด้วย
        isDisable: false,
      });

      // อัปเดต textValueModelNametb ให้มีค่าเท่ากับ this.state.report1
      if (Array.isArray(result.data.result) && result.data.result.length > 0) {
        this.setState({ textValueCleanlinesstb: result.data.result[0].Cleanliness_reason }); // เปลี่ยน
      } else {
        this.setState({ textValueCleanlinesstb: '' }); // เปลี่ยน
      }

    } catch (error) {
      // แสดงข้อผิดพลาด (optional)
      console.error(error);
    }
  };

  async componentDidMount()  {
    // นำค่า "document no" จาก URL
    const urlParams = new URLSearchParams(window.location.search);
    const docNo = urlParams.get("docNo");

    // ตรวจสอบว่าค่า "document no" มีค่าหรือไม่
    if (docNo) {
      await this.setState({ docNo });
  
      try {
       
        this.setState({ isLoading: false });
      } catch (error) {
        console.error("Error loading data:", error);
        this.setState({ isLoading: false });
        // จัดการข้อผิดพลาดตามที่คุณต้องการ
      }
    }
  }






  render() {
    if (this.state.isLoading) {
      // Show loading indicator
      Swal.fire({
        icon: "info",
        title: "Loading Data",
        timer: 3000, // Show loading for 3 seconds
        allowOutsideClick: false,
        showConfirmButton: false, // Hide the "OK" button during loading
        didOpen: async () => {
          Swal.showLoading();
          try {
            await Promise.all([
              this.doGetRegister(),
              this.doGetSection(),
              this.doGetDatatestfor(),
              this.doGetDatatestforreason(),
              this.doGetSamplename(),
              this.doGetMaterial(),
              this.doGetModelname(),
              this.doGetCustomer(),
              this.doGetQty(),
              this.doGetInstrumentsLPC(),
              this.doGetInstrumentsSprayLPC(),
              this.doGetInstrumentsAPA(),
              this.doGetInstrumentsTalcbytape(),
              this.doGetInstrumentsFTIR(),
              this.doGetInstrumentsIC(),
              this.doGetInstrumentsNVR(),
              this.doGetInstrumentsOutgasday0(),
              this.doGetInstrumentsOutgasday14(),
              this.doGetInstrumentsGhosttest(),
              this.doGetInstrumentsDynamicdiskghost(),
              this.doGetInstrumentsExtractable(),
              this.doGetInstrumentsCorrosion(),
              this.doGetInstrumentsParticlecount(),
              this.doGetDataquantityLPC(),
              this.doGetRemarkLPC(),
              this.doGetDataquantitySprayLPC(),
              this.doGetDataquantityAPA(),
              this.doGetDataquantityTalcbytape(),
              this.doGetDataquantityFTIR(),
              this.doGetDataquantityIC(),
              this.doGetDataquantityNVR(),
              this.doGetDataquantityOutgasday0(),
              this.doGetDataquantityOutgasday14(),
              this.doGetDataquantityGhosttest(),
              this.doGetDataquantityDynamicdiskghost(),
              this.doGetDataquantityExtractable(),
              this.doGetDataquantityCorrosion(),
              this.doGetDataquantityParticlecount(),
              this.doGetRemarkSprayLPC(),
              this.doGetRemarkAPA(),
              this.doGetRemarkTalcbytape(),
              this.doGetRemarkFTIR(),
              this.doGetRemarkIC(),
              this.doGetRemarkNVR(),
              this.doGetRemarkOutgasday0(),
              this.doGetRemarkOutgasday14(),
              this.doGetRemarkGhosttest(),
              this.doGetRemarkDynamicdiskghost(),
              this.doGetRemarkExtractable(),
              this.doGetRemarkCorrosion(),
              this.doGetRemarkParticlecount(),
              this.doGetSurfacebase(),
              this.doGetSurfaceMBA(),
              this.doGetSurfaceHub(),
              this.doGetSurfaceETC(),
              this.doGetLotnoPartno(),
              this.doGetLotnoPlatform(),
              this.doGetLotnoRev(),
              this.doGetLotnoLotQAno(),
              this.doGetLotnoMotorOilType(),
              this.doGetLotnoLotMOno(),
              this.doGetLotnoSupplierhub(),
              this.doGetLotnoSupplierbase(),
              this.doGetLotnoSupplierPCB(),
              this.doGetLotnoPCBlotno(),
              this.doGetLotnoSupplierramp(),
              this.doGetLotnoRamplotno(),
              this.doGetLotnoSupplierdiverter(),
              this.doGetLotnoDiverterlot(),
              this.doGetLotnoSupplierIDCS(),
              this.doGetLotnoIDCSlot(),
              this.doGetLotnoSHAWashingno(),
              this.doGetLotnoOvenSHANo(),
              this.doGetLotnoOvenMBA(),
              this.doGetLotnoCO2mcno(),
              this.doGetLotnoLineno(),
              this.doGetLotnoResultunit(),
              this.doGetPurposeoftest(),
              this.doGetProcessDescription(),
              this.doGetReferencedata(),
              this.doGetComment(),
              this.doGetNMBsample(),
              this.doGetSamplesend(),
              this.doGetSamplesubmit(),
              this.doGetCommitted(),
              this.doGetMgapprove(),// เพิ่มม
              this.doGetMgapprovereason(),// เพิ่มม
            this.doGetCleanlinessapprovename(),// เพิ่มม
            this.doGetCleanlinessapproveresult(),// เพิ่มม
            this.doGetCleanlinessapprovereason(),// เพิ่มม
           
            ]);

      // Check if data has been loaded successfully

    } catch (error) {
      console.error("Error loading data:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "An error occurred while loading data. Please try again.",
      });
    } finally {
      // Close the loading indicator
      Swal.close();
    }
  },
});

// Return null during the loading phase
return null;
    }
    const {
      selectedOptionRadiocleanliness,
      textValueCleanlinesstb,
      selectedOptionCleanlinessdropdown,
      textValueMgrequesttb,
      selectedOptionRadioButtons3,
      textValueNMBsampletb,
      textValueSamplesendtb,
      textValueSamplesubtb,
      textValueCommitshiptb,
      textValueTextBox1,
      selectedOptionRadioButtons2,
      selectedOption1,
      textValue1,
      selectedOptionplatform,
      textValueMaterialtb,
      textValueModelNametb,
      textValueQtytb,
      textValueMbatb,
      textValueBasetb,
      textValueHubtb,
      textValueEtctb,
      textValuePartNotb,
      textValueLotnotb,
      textValueLotMotb,
      textValueSuppliehubtb,
      textValueSuppliebasetb,
      textValueSuppliepcbtb,
      textValuePcblottb,
      textValueSupplieramptb,
      textValueRamplottb,
      textValueSuppliedivertertb,
      textValueDiverterlottb,
      textValueSupplieIDCStb,
      textValueMotoroiltypetb,
      textValueIDCSlottb,
      textValueSHAwashingnotb,
      textValueCo2mcnotb,
      textValueResultunittb,
      textValuePurposetb,
      textValueReftb,
      textValueCommenttb,
      textValueLinenotb,
      textValueOvenshanotb,
      textValueRevtb,
      textValueOvenMBAtb,
      textValueProcessDescriptiontb,
      tableData,
      textValueRegistertb,
      docNo,
    } = this.state;
    console.log(this.state.docNo);
    console.log(this.state.textValueMgrequesttextbox);

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
                    <h1>Analysis request</h1>
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
                        Analysis request
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div>
            <div className="row-mb-12" style={{ paddingTop: 50 }}>
              <div className="row">
                <div className="col-1"></div>
                <div
                  className="col-1"
                  style={{ fontFamily: "Times New Roman" }}
                >
                  <h5>No.</h5>
                </div>
                <div className="col-md-2">
                  <div className="input-group">
                    <input
                      value={this.state.docNo}
                      onChange={async (e) => {
                        await this.setState({
                          docNo: e.target.value,
                        });
                      }}
                      type="text"
                      className="form-control"
                      placeholder="input Doc.No"
                    />
                  </div>
                </div>


              </div>

              <div className="row">
                <div className="col-1"></div>
                <div
                  className="col-3"
                  style={{
                    fontFamily: "Times New Roman",
                    paddingTop: 50,
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                >
                  <h4>Analysis Request</h4>
                </div>
                <div className="col-1"></div>
              </div>
            </div>
            <div className="col-12" style={{ paddingTop: 50 }}>
              <div className="row">
                <div className="col-1"></div>
                <div
                  className="col-1"
                  style={{ fontFamily: "Times New Roman" }}
                >
                  <h5>Factory</h5>
                </div>
                <div
                  className="col-1"
                  style={{ fontFamily: "Times New Roman" }}
                >
                  <h5>Bang-pa-in</h5>
                </div>
              </div>
              <div className="row">
                <div className="col-1"></div>
                <div
                  className="col-1"
                  style={{ fontFamily: "Times New Roman" }}
                >
                  <h5>Division : </h5>
                </div>
                <div
                  className="col-3"
                  style={{ fontFamily: "Times New Roman" }}
                >
                  <h5>Spindle motor</h5>
                </div>
              </div>
              <div className="row">
                <div className="col-1"></div>
                <div
                  className="col-1"
                  style={{ fontFamily: "Times New Roman" }}
                >
                  <h5>Requester : </h5>
                </div>
                <div
                  className="col-2"
                  style={{ fontFamily: "Times New Roman", color: "blue" }}
                >
                  <Registertb
                    handleTextChangeRegistertb={this.handleTextChangeRegistertb}
                    textValueRegistertb={textValueRegistertb}
                  />
                </div>


              </div>
              <div className="row">
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div
                  className="col-2"
                  style={{ fontFamily: "Times New Roman", fontSize: 18, paddingTop: 20 }}
                >
                  <Dropdown1
                    handleOptionChangeDropdown1={this.handleOptionChangeDropdown1}
                    selectedOptionDropdown1={this.state.selectedOptionDropdown1}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div
                  className="col-1.5"
                  style={{ fontFamily: "Times New Roman", paddingTop: 30 }}
                >
                  <h5>Data test for : </h5>
                </div>
                <div
                  className="col-2"
                  style={{ fontFamily: "Times New Roman", paddingTop: 30 }}
                >
                  <RadioButtons2
                    handleOptionChangeRadioButtons2={
                      this.handleOptionChangeRadioButtons2
                    }
                    selectedOptionRadioButtons2={selectedOptionRadioButtons2}
                  />
                </div>
                <div style={{ fontFamily: "Times New Roman", paddingTop: 30 }}>
                  <TextBox1
                    handleTextChangeTextBox1={this.handleTextChangeTextBox1}
                    textValueTextBox1={textValueTextBox1}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div
                  className="col-1"
                  style={{ fontFamily: "Times New Roman", paddingTop: 50 }}
                >
                  <h5>Sample Name : </h5>
                </div>
                <div
                  className="col-2"
                  style={{
                    fontFamily: "Times New Roman",
                    color: "blue",
                    paddingTop: 50,
                  }}
                >
                  <Samplenametb
                    handleTextChange={this.handleTextChange}
                    textValue1={textValue1}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div
                  className="col-1"
                  style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
                >
                  <h5>Material : </h5>
                </div>
                <div
                  className="col-2"
                  style={{
                    fontFamily: "Times New Roman",
                    color: "blue",
                    paddingTop: 10,
                  }}
                >
                  <Materialtb
                    handleTextChangeMaterialtb={this.handleTextChangeMaterialtb}
                    textValueMaterialtb={textValueMaterialtb}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div
                  className="col-1"
                  style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
                >
                  <h5>Model Name : </h5>
                </div>
                <div
                  className="col-2"
                  style={{
                    fontFamily: "Times New Roman",
                    color: "blue",
                    paddingTop: 10,
                  }}
                >
                  <ModelNametb
                    handleTextChangeModelNametb={
                      this.handleTextChangeModelNametb
                    }
                    textValueModelNametb={textValueModelNametb}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div
                  className="col-1"
                  style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
                >
                  <h5>Customer : </h5>
                </div>
                <div
                  className="col-2"
                  style={{
                    fontFamily: "Times New Roman",
                    paddingTop: 10,
                    fontSize: 18,
                  }}
                >
                  <Dropdown2
                    handleOptionChange={this.handleOptionChange}
                    selectedOption1={selectedOption1}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div
                  className="col-1"
                  style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
                >
                  <h5>Qty. : </h5>
                </div>
                <div
                  className="col-2"
                  style={{
                    fontFamily: "Times New Roman",
                    color: "blue",
                    paddingTop: 10,
                  }}
                >
                  <Qtytb
                    handleTextChangeQtytb={this.handleTextChangeQtytb}
                    textValueQtytb={textValueQtytb}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-1"></div>
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
                  <Table
                    tableData={this.state.tableData}
                    onTableDataChange={this.handleTableDataChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div
                  className="col-2"
                  style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
                >
                  <h5>Surface Area (cm^2)</h5>
                </div>
              </div>
              <div className="row">
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div
                  className="col-1"
                  style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
                >
                  <h5> Base. : </h5>
                </div>
                <div
                  className="col-2"
                  style={{
                    fontFamily: "Times New Roman",
                    color: "blue",
                    paddingTop: 10,
                  }}
                >
                  <Basetb
                    handleTextChangeBasetb={this.handleTextChangeBasetb}
                    textValueBasetb={textValueBasetb}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div
                  className="col-1"
                  style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
                >
                  <h5> MBA. : </h5>
                </div>
                <div
                  className="col-2"
                  style={{
                    fontFamily: "Times New Roman",
                    color: "blue",
                    paddingTop: 10,
                  }}
                >
                  <Mbatb
                    handleTextChangeMbatb={this.handleTextChangeMbatb}
                    textValueMbatb={textValueMbatb}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div
                  className="col-1"
                  style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
                >
                  <h5> Hub : </h5>
                </div>
                <div
                  className="col-2"
                  style={{
                    fontFamily: "Times New Roman",
                    color: "blue",
                    paddingTop: 10,
                  }}
                >
                  <Hubtb
                    handleTextChangeHubtb={this.handleTextChangeHubtb}
                    textValueHubtb={textValueHubtb}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div
                  className="col-1"
                  style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
                >
                  <h5> etc.: </h5>
                </div>
                <div
                  className="col-2"
                  style={{
                    fontFamily: "Times New Roman",
                    color: "blue",
                    paddingTop: 10,
                  }}
                >
                  <Etctb
                    handleTextChangeEtctb={this.handleTextChangeEtctb}
                    textValueEtctb={textValueEtctb}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div
                  className="col-2"
                  style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
                >
                  <h5>Lot no.</h5>
                </div>
              </div>
              <div className="row">
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div
                  className="col-1"
                  style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
                >
                  <h5> Part no. :</h5>
                </div>
                <div
                  className="col-2"
                  style={{
                    fontFamily: "Times New Roman",
                    color: "blue",
                    paddingTop: 10,
                  }}
                >
                  <PartNotb
                    handleTextChangePartNotb={this.handleTextChangePartNotb}
                    textValuePartNotb={textValuePartNotb}
                  />
                </div>
                <div
                  className="col-1"
                  style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
                >
                  <h5> Rev. :</h5>
                </div>
                <div
                  className="col-1"
                  style={{
                    fontFamily: "Times New Roman",
                    color: "blue",
                    paddingTop: 10,
                  }}
                >
                  <Revtb
                    handleTextChangeRevtb={this.handleTextChangeRevtb}
                    textValueRevtb={textValueRevtb}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div
                  className="col-1"
                  style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
                >
                  <h5> Plat form . :</h5>
                </div>
                <div
                  className="col-2"
                  style={{
                    fontFamily: "Times New Roman",
                    paddingTop: 10,
                    fontsize: 20,
                  }}
                >
                  <Plarformdropdown
                    handleOptionChangeplatform={this.handleOptionChangeplatform}
                    selectedOptionplatform={selectedOptionplatform}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div
                  className="col-1"
                  style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
                >
                  <h5> Lot QA no.: </h5>
                </div>
                <div
                  className="col-2"
                  style={{
                    fontFamily: "Times New Roman",
                    color: "blue",
                    paddingTop: 10,
                  }}
                >
                  <Lotnotb
                    handleTextChangeLotnotb={this.handleTextChangeLotnotb}
                    textValueLotnotb={textValueLotnotb}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div
                  className="col-1"
                  style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
                >
                  <h5> Motor Oil Type.: </h5>
                </div>
                <div
                  className="col-2"
                  style={{
                    fontFamily: "Times New Roman",
                    color: "blue",
                    paddingTop: 10,
                  }}
                >
                  <Motoroiltypetb
                    handleTextChangeMotoroiltypetb={
                      this.handleTextChangeMotoroiltypetb
                    }
                    textValueMotoroiltypetb={textValueMotoroiltypetb}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div
                  className="col-1"
                  style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
                >
                  <h5> Lot MO no.: </h5>
                </div>
                <div
                  className="col-2"
                  style={{
                    fontFamily: "Times New Roman",
                    color: "blue",
                    paddingTop: 10,
                  }}
                >
                  <LotMotb
                    handleTextChangeLotMotb={this.handleTextChangeLotMotb}
                    textValueLotMotb={textValueLotMotb}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div
                  className="col-1"
                  style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
                >
                  <h5> Supplier hub : </h5>
                </div>
                <div
                  className="col-2"
                  style={{
                    fontFamily: "Times New Roman",
                    color: "blue",
                    paddingTop: 10,
                  }}
                >
                  <Suppliehubtb
                    handleTextChangeSuppliehubtb={
                      this.handleTextChangeSuppliehubtb
                    }
                    textValueSuppliehubtb={textValueSuppliehubtb}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div
                  className="col-1"
                  style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
                >
                  <h5> Supplier base: </h5>
                </div>
                <div
                  className="col-2"
                  style={{
                    fontFamily: "Times New Roman",
                    color: "blue",
                    paddingTop: 10,
                  }}
                >
                  <Suppliebasetb
                    handleTextChangeSuppliebasetb={
                      this.handleTextChangeSuppliebasetb
                    }
                    textValueSuppliebasetb={textValueSuppliebasetb}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div
                  className="col-1"
                  style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
                >
                  <h5> Supplier PCB :</h5>
                </div>
                <div
                  className="col-2"
                  style={{
                    fontFamily: "Times New Roman",
                    color: "blue",
                    paddingTop: 10,
                  }}
                >
                  <Suppliepcbtb
                    handleTextChangeSuppliepcbtb={
                      this.handleTextChangeSuppliepcbtb
                    }
                    textValueSuppliepcbtb={textValueSuppliepcbtb}
                  />
                </div>
                <div
                  className="col-1"
                  style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
                >
                  <h5> PCB lot no.:</h5>
                </div>
                <div
                  className="col-1"
                  style={{
                    fontFamily: "Times New Roman",
                    color: "blue",
                    paddingTop: 10,
                  }}
                >
                  <Pcblottb
                    handleTextChangePcblottb={this.handleTextChangePcblottb}
                    textValuePcblottb={textValuePcblottb}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div
                  className="col-1"
                  style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
                >
                  <h5> Supplier ramp :</h5>
                </div>
                <div
                  className="col-2"
                  style={{
                    fontFamily: "Times New Roman",
                    color: "blue",
                    paddingTop: 10,
                  }}
                >
                  <Supplieramptb
                    handleTextChangeSupplieramptb={
                      this.handleTextChangeSupplieramptb
                    }
                    textValueSupplieramptb={textValueSupplieramptb}
                  />
                </div>
                <div
                  className="col-1"
                  style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
                >
                  <h5> Ramp lot no.:</h5>
                </div>
                <div
                  className="col-1"
                  style={{
                    fontFamily: "Times New Roman",
                    color: "blue",
                    paddingTop: 10,
                  }}
                >
                  <Ramplottb
                    handleTextChangeRamplottb={this.handleTextChangeRamplottb}
                    textValueRamplottb={textValueRamplottb}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div
                  className="col-1"
                  style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
                >
                  <h5> Supplier diverter:</h5>
                </div>
                <div
                  className="col-2"
                  style={{
                    fontFamily: "Times New Roman",
                    color: "blue",
                    paddingTop: 10,
                  }}
                >
                  <Suppliedivertertb
                    handleTextChangeSuppliedivertertb={
                      this.handleTextChangeSuppliedivertertb
                    }
                    textValueSuppliedivertertb={textValueSuppliedivertertb}
                  />
                </div>
                <div
                  className="col-1"
                  style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
                >
                  <h5> Diverter lot :</h5>
                </div>
                <div
                  className="col-1"
                  style={{
                    fontFamily: "Times New Roman",
                    color: "blue",
                    paddingTop: 10,
                  }}
                >
                  <Diverterlottb
                    handleTextChangeDiverterlottb={
                      this.handleTextChangeDiverterlottb
                    }
                    textValueDiverterlottb={textValueDiverterlottb}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div
                  className="col-1"
                  style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
                >
                  <h5> Supplier IDCS:</h5>
                </div>
                <div
                  className="col-2"
                  style={{
                    fontFamily: "Times New Roman",
                    color: "blue",
                    paddingTop: 10,
                  }}
                >
                  <SupplieIDCStb
                    handleTextChangeSupplieIDCStb={
                      this.handleTextChangeSupplieIDCStb
                    }
                    textValueSupplieIDCStb={textValueSupplieIDCStb}
                  />
                </div>
                <div
                  className="col-1"
                  style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
                >
                  <h5> IDCS lot :</h5>
                </div>
                <div
                  className="col-1"
                  style={{
                    fontFamily: "Times New Roman",
                    color: "blue",
                    paddingTop: 10,
                  }}
                >
                  <IDCSlottb
                    handleTextChangeIDCSlottb={this.handleTextChangeIDCSlottb}
                    textValueIDCSlottb={textValueIDCSlottb}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div
                  className="col-1.5"
                  style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
                >
                  <h5> SHA Washing no.:</h5>
                </div>
                <div
                  className="col-1"
                  style={{
                    fontFamily: "Times New Roman",
                    color: "blue",
                    paddingTop: 10,
                  }}
                >
                  <SHAwashingnotb
                    handleTextChangeSHAwashingnotb={
                      this.handleTextChangeSHAwashingnotb
                    }
                    textValueSHAwashingnotb={textValueSHAwashingnotb}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div
                  className="col-1"
                  style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
                >
                  <h5> Oven SHA No.:</h5>
                </div>
                <div
                  className="col-2"
                  style={{
                    fontFamily: "Times New Roman",
                    color: "blue",
                    paddingTop: 10,
                  }}
                >
                  <Ovenshanotb
                    handleTextChangeOvenshanotb={
                      this.handleTextChangeOvenshanotb
                    }
                    textValueOvenshanotb={textValueOvenshanotb}
                  />
                </div>
                <div
                  className="col-1"
                  style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
                >
                  <h5> Oven MBA :</h5>
                </div>
                <div
                  className="col-1"
                  style={{
                    fontFamily: "Times New Roman",
                    color: "blue",
                    paddingTop: 10,
                  }}
                >
                  <OvenMBAtb
                    handleTextChangeOvenMBAtb={this.handleTextChangeOvenMBAtb}
                    textValueOvenMBAtb={textValueOvenMBAtb}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div
                  className="col-1"
                  style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
                >
                  <h5> CO2 mc no.:</h5>
                </div>
                <div
                  className="col-2"
                  style={{
                    fontFamily: "Times New Roman",
                    color: "blue",
                    paddingTop: 10,
                  }}
                >
                  <Co2mcnotb
                    handleTextChangeCo2mcnotb={this.handleTextChangeCo2mcnotb}
                    textValueCo2mcnotb={textValueCo2mcnotb}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div
                  className="col-1"
                  style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
                >
                  <h5> Line no.:</h5>
                </div>
                <div
                  className="col-2"
                  style={{
                    fontFamily: "Times New Roman",
                    color: "blue",
                    paddingTop: 10,
                  }}
                >
                  <Linenotb
                    handleTextChangeLinenotb={this.handleTextChangeLinenotb}
                    textValueLinenotb={textValueLinenotb}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div
                  className="col-2"
                  style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
                >
                  <h5> Result unit (IF have):</h5>
                </div>
                <div
                  className="col-2"
                  style={{
                    fontFamily: "Times New Roman",
                    color: "blue",
                    paddingTop: 10,
                  }}
                >
                  <Resultunittb
                    handleTextChangeResultunittb={
                      this.handleTextChangeResultunittb
                    }
                    textValueResultunittb={textValueResultunittb}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-1"></div>
                <div
                  className="col-2"
                  style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
                >
                  <h5> Analysis request contents</h5>
                </div>
              </div>
              <div className="row">
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div
                  className="col-2"
                  style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
                >
                  <h5> Purpose of test :</h5>
                </div>
                <div
                  className="col-2"
                  style={{
                    fontFamily: "Times New Roman",
                    color: "blue",
                    paddingTop: 10,
                  }}
                >
                  <Purposetb
                    handleTextChangePurposetb={this.handleTextChangePurposetb}
                    textValuePurposetb={textValuePurposetb}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div
                  className="col-2"
                  style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
                >
                  <h5>Process Description : </h5>
                </div>
                <div
                  className="col-2"
                  style={{
                    fontFamily: "Times New Roman",
                    color: "blue",
                    paddingTop: 10,
                  }}
                >
                  <ProcessDescriptiontb
                    handleTextChangeProcessDescriptiontb={
                      this.handleTextChangeProcessDescriptiontb
                    }
                    textValueProcessDescriptiontb={textValueProcessDescriptiontb}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div
                  className="col-2"
                  style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
                >
                  <h5>Reference data : </h5>
                </div>
                <div
                  className="col-2"
                  style={{
                    fontFamily: "Times New Roman",
                    color: "blue",
                    paddingTop: 10,
                  }}
                >
                  <Reftb
                    handleTextChangeReftb={this.handleTextChangeReftb}
                    textValueReftb={textValueReftb}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div
                  className="col-2"
                  style={{
                    fontFamily: "Times New Roman",
                    paddingTop: 10,
                    paddingBottom: 50,
                  }}
                >
                  <h5>Comment : </h5>
                </div>
                <div
                  className="col-2"
                  style={{
                    fontFamily: "Times New Roman",
                    color: "blue",
                    paddingTop: 10,
                    paddingBottom: 50,
                  }}
                >
                  <Commenttb
                    handleTextChangeCommenttb={this.handleTextChangeCommenttb}
                    textValueCommenttb={textValueCommenttb}
                  />
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="row-mb-12" style={{ paddingTop: 50 }}>
                <div className="row">
                  <div className="col-1"></div>
                  <div
                    className="col-5"
                    style={{
                      fontFamily: "Times New Roman",
                      fontWeight: "bold",
                      textDecoration: "underline",
                    }}
                  >
                    <h5>Sample build and submission schedule :</h5>
                  </div>
                  {/* <div className="col-1"></div> */}
                </div>
                <div className="row">
                  <div className="col-1"></div>
                  <div className="col-1"></div>
                  <div
                    className="col-2"
                    style={{
                      fontFamily: "Times New Roman",
                      paddingTop: 10,
                    }}
                  >
                    <h5>NMB sample build (MBA) date </h5>
                  </div>
                  <div
                    className="col-5"
                    style={{
                      fontFamily: "Times New Roman",
                      paddingTop: 10,
                    }}
                  >
                    <NMBsampletb
                      handleTextChangeNMBsampletb={
                        this.handleTextChangeNMBsampletb
                      }
                      textValueNMBsampletb={textValueNMBsampletb}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-1"></div>
                  <div className="col-1"></div>
                  <div
                    className="col-2"
                    style={{
                      fontFamily: "Times New Roman",
                      paddingTop: 10,
                    }}
                  >
                    <h5>Samlple send date to Cleanliness </h5>
                  </div>
                  <div
                    className="col-5"
                    style={{
                      fontFamily: "Times New Roman",
                      paddingTop: 10,
                    }}
                  >
                    <Samplesendtb
                      handleTextChangeSamplesendtb={
                        this.handleTextChangeSamplesendtb
                      }
                      textValueSamplesendtb={textValueSamplesendtb}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-1"></div>
                  <div className="col-1"></div>
                  <div
                    className="col-2"
                    style={{
                      fontFamily: "Times New Roman",
                      paddingTop: 10,
                    }}
                  >
                    <h5>Sample submission to MSL date </h5>
                  </div>
                  <div
                    className="col-5"
                    style={{
                      fontFamily: "Times New Roman",
                      paddingTop: 10,
                    }}
                  >
                    <Samplesubtb
                      handleTextChangeSamplesubtb={
                        this.handleTextChangeSamplesubtb
                      }
                      textValueSamplesubtb={textValueSamplesubtb}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-1"></div>
                  <div className="col-1"></div>
                  <div
                    className="col-2"
                    style={{
                      fontFamily: "Times New Roman",
                      paddingTop: 10,
                      paddingBottom: 50,
                    }}
                  >
                    <h5>Committed Shipment Date </h5>
                  </div>
                  <div
                    className="col-5"
                    style={{
                      fontFamily: "Times New Roman",
                      paddingTop: 10,
                      paddingBottom: 50,
                    }}
                  >
                    <Commitshiptb
                      handleTextChangeCommitshiptb={
                        this.handleTextChangeCommitshiptb
                      }
                      textValueCommitshiptb={textValueCommitshiptb}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-1"></div>
                  <div
                    className="col-1.5"
                    style={{
                      fontFamily: "Times New Roman",
                      paddingTop: 10,
                    }}
                  >
                    <h5>Mg. requester</h5>
                  </div>
                  <div className="col-3" style={{ fontFamily: "Times New Roman", paddingTop: 10 }}>
                    <Mgrequesttextbox
                      handleTextChangeMgrequesttextbox={this.handleTextChangeMgrequesttextbox}
                      textValueMgrequesttextbox={this.state.textValueMgrequesttextbox} // เปลี่ยน prop ที่ถูกส่งเข้าไป
                    />
                  </div>


                  <div
                    className="col-3"
                    style={{
                      fontFamily: "Times New Roman",
                      paddingTop: 10,
                    }}
                  >
                    <RadioButtons3
                      handleOptionChangeRadioButtons3={
                        this.handleOptionChangeRadioButtons3
                      }
                      selectedOptionRadioButtons3={selectedOptionRadioButtons3}
                    />
                  </div>
                  <div
                    className="col-1"
                    style={{
                      fontFamily: "Times New Roman",
                      paddingTop: 10,
                    }}
                  >
                    <h5>Reason</h5>
                  </div>
                  <div
                    className="col-1"
                    style={{
                      fontFamily: "Times New Roman",
                      paddingTop: 10,
                    }}
                  >
                    <Mgrequesttb
                      handleTextChangeMgrequesttb={
                        this.handleTextChangeMgrequesttb
                      }
                      
                      textValueMgrequesttb={textValueMgrequesttb}

                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-1"></div>
                  <div
                    className="col-1"
                    style={{
                      fontFamily: "Times New Roman",
                      paddingTop: 10,
                    }}
                  >
                    <h5>Cleanliness</h5>
                  </div>
                  <div
                    className="col-3"
                    style={{
                      fontFamily: "Times New Roman",
                      paddingTop: 10,
                    }}
                  >
                    <Cleanlinessdropdown
                      handleOptionChangeCleanlinessdropdown={
                        this.handleOptionChangeCleanlinessdropdown
                      }
                      selectedOptionCleanlinessdropdown={
                        selectedOptionCleanlinessdropdown
                      }
                    />
                  </div>
                  <div
                    className="col-3"
                    style={{
                      fontFamily: "Times New Roman",
                      paddingTop: 10,
                    }}
                  >
                    <Radiocleanliness
                      handleOptionChangeRadiocleanliness={
                        this.handleOptionChangeRadiocleanliness
                      }
                      selectedOptionRadiocleanliness={
                        selectedOptionRadiocleanliness
                      }
                    />
                  </div>
                  <div
                    className="col-1"
                    style={{
                      fontFamily: "Times New Roman",
                      paddingTop: 10,
                    }}
                  >
                    <h5>Reason</h5>
                  </div>
                  <div
                    className="col-1"
                    style={{
                      fontFamily: "Times New Roman",
                      paddingTop: 10,
                    }}
                  >
                    <Cleanlinesstb
                      handleTextChangeCleanlinesstb={
                        this.handleTextChangeCleanlinesstb
                      }
                      textValueCleanlinesstb={textValueCleanlinesstb}
                    />
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

export default cleanlinessspecialview;
