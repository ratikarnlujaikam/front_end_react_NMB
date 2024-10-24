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
const generatePDF1 = async (docNo) => {
  const pdf = new jsPDF("p", "pt", "a6");

  const content = document.getElementById("pdf-content");

  const canvas = await html2canvas(content);
  const imgData = canvas.toDataURL("image/png");

  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();
  const ratio = canvas.width / canvas.height;

  // Calculate the size and position of the image to center it with a 3 cm margin
  const margin = 2 * 28.35; // 1 cm = 28.35 pt
  const imgHeight = pdfHeight - 2 * margin;
  const imgWidth = imgHeight * ratio;
  const positionX = (pdfWidth - imgWidth) / 2;
  const positionY = margin;

  pdf.addImage(imgData, "PNG", positionX, positionY, imgWidth, imgHeight);

  // Use the docNo parameter as the fileName
  const fileName = docNo + "-1";

  pdf.save(fileName);
};
const generatePDF2 = async (docNo) => {
  const pdf = new jsPDF("p", "pt", "a6");

  const content = document.getElementById("pdf-content");

  const canvas = await html2canvas(content);
  const imgData = canvas.toDataURL("image/png");

  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();
  const ratio = canvas.width / canvas.height;

  // Calculate the size and position of the image to center it with a 3 cm margin
  const margin = 2 * 28.35; // 1 cm = 28.35 pt
  const imgHeight = pdfHeight - 2 * margin;
  const imgWidth = imgHeight * ratio;
  const positionX = (pdfWidth - imgWidth) / 2;
  const positionY = margin;

  pdf.addImage(imgData, "PNG", positionX, positionY, imgWidth, imgHeight);

  // Use the docNo parameter as the fileName
  const fileName = docNo + "-2";

  pdf.save(fileName);
};
const generatePDF3 = async (docNo) => {
  const pdf = new jsPDF("p", "pt", "a6");

  const content = document.getElementById("pdf-content");

  const canvas = await html2canvas(content);
  const imgData = canvas.toDataURL("image/png");

  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();
  const ratio = canvas.width / canvas.height;

  // Calculate the size and position of the image to center it with a 3 cm margin
  const margin = 2 * 28.35; // 1 cm = 28.35 pt
  const imgHeight = pdfHeight - 2 * margin;
  const imgWidth = imgHeight * ratio;
  const positionX = (pdfWidth - imgWidth) / 2;
  const positionY = margin;

  pdf.addImage(imgData, "PNG", positionX, positionY, imgWidth, imgHeight);

  // Use the docNo parameter as the fileName
  const fileName = docNo + "-3";

  pdf.save(fileName);
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

const Qrcode = ({ qrCodeData1 }) => {
  const generateQRCode = (data) => {
    const apiEndpoint = `https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent(
      data
    )}`;
    return <img src={apiEndpoint} alt="QR Code" />;
  };
  return <div>{generateQRCode(qrCodeData1)}</div>;
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


class Cleanlinessspecial extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

    };
  }
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





  render() {
    const {
      selectedOption1,
      textValue1,
      selectedOption2,
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
    console.log(this.state.tableData);

    const qrCodeData1 =
      
      textValue1 +
      "\t" +
      textValueMaterialtb +
      "\t" +
      textValueModelNametb +
      "\t" +
      selectedOption1 +
      "\t" +
      textValueQtytb +
      "\t" + 
      "\t" +
      this.state.tableData[0][0] +
      "\t" +
      this.state.tableData[0][1] +
      "\t" +
      this.state.tableData[0][2] +
      "\t" +
      this.state.tableData[0][3] +
      "\t" +
      this.state.tableData[2][0] +
      "\t" +
      this.state.tableData[2][1] +
      "\t" +
      this.state.tableData[2][2] +
      "\t" +
      this.state.tableData[2][3] +
      "\t" +
      this.state.tableData[3][0] +
      "\t" +
      this.state.tableData[3][1] +
      "\t" +
      this.state.tableData[3][2] +
      "\t" +
      this.state.tableData[3][3] +
      "\t" +
      this.state.tableData[4][0] +
      "\t" +
      this.state.tableData[4][1] +
      "\t" +
      this.state.tableData[4][2] +
      "\t" +
      this.state.tableData[4][3] +
      "\t" +
      this.state.tableData[5][0] +
      "\t" +
      this.state.tableData[5][1] +
      "\t" +
      this.state.tableData[5][2] +
      "\t" +
      this.state.tableData[5][3] +
      "\t" +
      this.state.tableData[6][0] +
      "\t" +
      this.state.tableData[6][1] +
      "\t" +
      this.state.tableData[6][2] +
      "\t" +
      this.state.tableData[6][3] +
      "\t" +
      this.state.tableData[7][0] +
      "\t" +
      this.state.tableData[7][1] +
      "\t" +
      this.state.tableData[7][2] +
      "\t" +
      this.state.tableData[7][3] +
      "\t" +
      this.state.tableData[11][0] +
      "\t" +
      this.state.tableData[11][1] +
      "\t" +
      this.state.tableData[11][2] +
      "\t" +
      this.state.tableData[11][3] +
      "\t" +
      this.state.tableData[12][0] +
      "\t" +
      this.state.tableData[12][1] +
      "\t" +
      this.state.tableData[12][2] +
      "\t" +
      this.state.tableData[12][3] +
      "\t" + "\t" + "\t" + "\t" +
      "\t" +
      textValueBasetb +
      "\r" +
      textValueMbatb +
      "\r" +
      textValueHubtb +
      "\r" +
      textValueEtctb +
      "\t" +
      "PartNo : " + textValuePartNotb +
      " " + "Rev : " + textValueRevtb +
      "\r" +
      "Platform : " + selectedOptionplatform +
      "\r" +
      "Motoroiltype : " + textValueMotoroiltypetb +
      "\r" +
      "LotMo : " + textValueLotMotb +
      "\r" +
      "Lot QA no. : " + textValueLotnotb +
      "\r" +
      "Suppliehub : " + textValueSuppliehubtb +
      "\r" +
      "Suppliebase : " + textValueSuppliebasetb +
      "\r" +
      "Suppliepcb : " + textValueSuppliepcbtb +
      " " + "Pcb lot no : " + textValuePcblottb +
      "\r" +
      "Supplieramp : " + textValueSupplieramptb +
      " " + "Pcb lot no : " + textValueRamplottb +
      "\r" +
      "Suppliediverter : " + textValueSuppliedivertertb +
      " " + "Diverter lot no : " + textValueDiverterlottb +
      "\r" +
      "SupplieIDCS : " + textValueSupplieIDCStb +
      " " + "IDCS lot no : " + textValueIDCSlottb +
      "\r" +
      "SHA washing no : " + textValueSHAwashingnotb +
      "\r" +
      "Co2 mc no : " + textValueCo2mcnotb +
      "\r" +
      "Oven SHA No : " + textValueOvenshanotb +
      "\r" +
      "Oven MBA No : " + textValueOvenMBAtb +
      "\r" +
      "Line no : " + textValueLinenotb +
      "\t" +
      textValueResultunittb +
      "\t" +
      textValuePurposetb +
      "\t" +
      textValueProcessDescriptiontb +
      "\t" +
      textValueReftb +
      "\t" +
      textValueCommenttb;

    const qrCodeData2 =
      "\t" + " "
      + "\t" +
      textValue1 +
      "\t" +
      textValueMaterialtb +
      "\t" +
      textValueModelNametb +
      "\t" +
      selectedOption1 +
      "\t" +
      textValueQtytb +
      "\t" + " " +
      "\t" +
      this.state.tableData[9][0] +
      "\t" +
      this.state.tableData[9][1] +
      "\t" +
      this.state.tableData[9][2] +
      "\t" +
      this.state.tableData[9][3] +
      "\t" +
      this.state.tableData[10][0] +
      "\t" +
      this.state.tableData[10][1] +
      "\t" +
      this.state.tableData[10][2] +
      "\t" +
      this.state.tableData[10][3] +
      "\t" + "\t" + "\t" + "\t" +
      "\t" +
      textValueBasetb +
      "\r" +
      textValueMbatb +
      "\r" +
      textValueHubtb +
      "\r" +
      textValueEtctb +
      "\t" +
      "PartNo : " + textValuePartNotb +
      " " + "Rev : " + textValueRevtb +
      "\r" +
      "Platform : " + selectedOptionplatform +
      "\r" +
      "Motoroiltype : " + textValueMotoroiltypetb +
      "\r" +
      "LotMo : " + textValueLotMotb +
      "\r" +
      "Lot QA no. : " + textValueLotnotb +
      "\r" +
      "Suppliehub : " + textValueSuppliehubtb +
      "\r" +
      "Suppliebase : " + textValueSuppliebasetb +
      "\r" +
      "Suppliepcb : " + textValueSuppliepcbtb +
      " " + "Pcb lot no : " + textValuePcblottb +
      "\r" +
      "Supplieramp : " + textValueSupplieramptb +
      " " + "Pcb lot no : " + textValueRamplottb +
      "\r" +
      "Suppliediverter : " + textValueSuppliedivertertb +
      " " + "Diverter lot no : " + textValueDiverterlottb +
      "\r" +
      "SupplieIDCS : " + textValueSupplieIDCStb +
      " " + "IDCS lot no : " + textValueIDCSlottb +
      "\r" +
      "SHA washing no : " + textValueSHAwashingnotb +
      "\r" +
      "Co2 mc no : " + textValueCo2mcnotb +
      "\r" +
      "Oven SHA No : " + textValueOvenshanotb +
      "\r" +
      "Oven MBA No : " + textValueOvenMBAtb +
      "\r" +
      "Line no : " + textValueLinenotb +
      "\t" +
      textValueResultunittb +
      "\t" +
      textValuePurposetb +
      "\t" +
      textValueProcessDescriptiontb +
      "\t" +
      textValueReftb +
      "\t" +
      textValueCommenttb;

    const qrCodeData3 =
      "\t" + " "
      + "\t" +
      textValue1 +
      "\t" +
      textValueMaterialtb +
      "\t" +
      textValueModelNametb +
      "\t" +
      selectedOption1 +
      "\t" +
      textValueQtytb +
      "\t" + " " +
      "\t" +
      this.state.tableData[1][0] +
      "\t" +
      this.state.tableData[1][1] +
      "\t" +
      this.state.tableData[1][2] +
      "\t" +
      this.state.tableData[1][3] +
      "\t" +
      this.state.tableData[8][0] +
      "\t" +
      this.state.tableData[8][1] +
      "\t" +
      this.state.tableData[8][2] +
      "\t" +
      this.state.tableData[8][3] +
      "\t" +
      this.state.tableData[13][0] +
      "\t" +
      this.state.tableData[13][1] +
      "\t" +
      this.state.tableData[13][2] +
      "\t" +
      this.state.tableData[13][3] +
      "\t" + "\t" + "\t" + "\t" +
      "\t" +
      textValueBasetb +
      "\r" +
      textValueMbatb +
      "\r" +
      textValueHubtb +
      "\r" +
      textValueEtctb +
      "\t" +
      "PartNo : " + textValuePartNotb +
      " " + "Rev : " + textValueRevtb +
      "\r" +
      "Platform : " + selectedOptionplatform +
      "\r" +
      "Motoroiltype : " + textValueMotoroiltypetb +
      "\r" +
      "LotMo : " + textValueLotMotb +
      "\r" +
      "Lot QA no. : " + textValueLotnotb +
      "\r" +
      "Suppliehub : " + textValueSuppliehubtb +
      "\r" +
      "Suppliebase : " + textValueSuppliebasetb +
      "\r" +
      "Suppliepcb : " + textValueSuppliepcbtb +
      " " + "Pcb lot no : " + textValuePcblottb +
      "\r" +
      "Supplieramp : " + textValueSupplieramptb +
      " " + "Pcb lot no : " + textValueRamplottb +
      "\r" +
      "Suppliediverter : " + textValueSuppliedivertertb +
      " " + "Diverter lot no : " + textValueDiverterlottb +
      "\r" +
      "SupplieIDCS : " + textValueSupplieIDCStb +
      " " + "IDCS lot no : " + textValueIDCSlottb +
      "\r" +
      "SHA washing no : " + textValueSHAwashingnotb +
      "\r" +
      "Co2 mc no : " + textValueCo2mcnotb +
      "\r" +
      "Oven SHA No : " + textValueOvenshanotb +
      "\r" +
      "Oven MBA No : " + textValueOvenMBAtb +
      "\r" +
      "Line no : " + textValueLinenotb +
      "\t" +
      textValueResultunittb +
      "\t" +
      textValuePurposetb +
      "\t" +
      textValueProcessDescriptiontb +
      "\t" +
      textValueReftb +
      "\t" +
      textValueCommenttb;



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
                  <div className="input-group ">
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
                <button
                  disabled={this.state.isDisable}
                  onClick={(e) => {
                    console.log("Button clicked");
                    this.doGetModelname();
                    this.doGetSamplename();// เพิ่ม
                    this.doGetMaterial();// เพิ่ม
                    this.doGetCustomer();// เพิ่ม
                    this.doGetQty();// เพิ่ม
                    this.doGetInstrumentsLPC();// เพิ่ม
                    this.doGetSurfacebase();// เพิ่ม
                    this.doGetSurfaceMBA();// เพิ่ม
                    this.doGetSurfaceHub();// เพิ่ม
                    this.doGetSurfaceETC();// เพิ่ม
                    this.doGetLotnoPartno();// เพิ่ม
                    this.doGetLotnoRev();// เพิ่ม
                    this.doGetLotnoPlatform();// เพิ่ม
                    this.doGetLotnoLotQAno();// เพิ่ม
                    this.doGetLotnoMotorOilType();// เพิ่ม
                    this.doGetLotnoLotMOno();// เพิ่ม
                    this.doGetLotnoSupplierhub();// เพิ่ม
                    this.doGetLotnoSupplierbase();// เพิ่ม
                    this.doGetLotnoSupplierPCB();// เพิ่ม
                    this.doGetLotnoPCBlotno();// เพิ่ม
                    this.doGetLotnoSupplierramp();// เพิ่ม
                    this.doGetLotnoRamplotno();// เพิ่ม
                    this.doGetLotnoSupplierdiverter();// เพิ่ม
                    this.doGetLotnoDiverterlot();// เพิ่ม
                    this.doGetLotnoSupplierIDCS();// เพิ่ม
                    this.doGetLotnoIDCSlot();// เพิ่ม
                    this.doGetLotnoSHAWashingno();// เพิ่ม
                    this.doGetLotnoOvenSHANo();// เพิ่ม
                    this.doGetLotnoOvenMBA();// เพิ่ม
                    this.doGetLotnoCO2mcno();// เพิ่ม
                    this.doGetLotnoLineno();// เพิ่ม
                    this.doGetLotnoResultunit();// เพิ่ม
                    this.doGetPurposeoftest();// เพิ่ม
                    this.doGetProcessDescription();// เพิ่ม
                    this.doGetReferencedata();// เพิ่ม
                    this.doGetComment();// เพิ่ม
                    this.doGetRegister();// เพิ่ม
                    this.doGetDataquantityLPC();// เพิ่ม
                    this.doGetRemarkLPC();// เพิ่ม
                    this.doGetInstrumentsSprayLPC();// เพิ่ม
                    this.doGetInstrumentsAPA();// เพิ่ม
                    this.doGetInstrumentsTalcbytape();// เพิ่ม
                    this.doGetInstrumentsFTIR();// เพิ่ม
                    this.doGetInstrumentsIC();// เพิ่ม
                    this.doGetInstrumentsNVR();// เพิ่ม
                    this.doGetInstrumentsOutgasday0();// เพิ่ม
                    this.doGetInstrumentsOutgasday14();// เพิ่ม
                    this.doGetInstrumentsGhosttest();// เพิ่ม
                    this.doGetInstrumentsDynamicdiskghost();// เพิ่ม
                    this.doGetInstrumentsExtractable();// เพิ่ม
                    this.doGetInstrumentsCorrosion();// เพิ่ม
                    this.doGetInstrumentsParticlecount();// เพิ่ม
                    this.doGetDataquantitySprayLPC();// เพิ่ม
                    this.doGetDataquantityAPA();// เพิ่ม
                    this.doGetDataquantityTalcbytape();// เพิ่ม
                    this.doGetDataquantityFTIR();// เพิ่ม
                    this.doGetDataquantityIC();// เพิ่ม
                    this.doGetDataquantityNVR();// เพิ่ม
                    this.doGetDataquantityOutgasday0();// เพิ่ม
                    this.doGetDataquantityOutgasday14();// เพิ่ม
                    this.doGetDataquantityGhosttest();// เพิ่ม
                    this.doGetDataquantityDynamicdiskghost();// เพิ่ม
                    this.doGetDataquantityExtractable();// เพิ่ม
                    this.doGetDataquantityCorrosion();// เพิ่ม
                    this.doGetDataquantityParticlecount();// เพิ่มม
                    this.doGetRemarkSprayLPC();// เพิ่ม
                    this.doGetRemarkAPA();// เพิ่ม
                    this.doGetRemarkTalcbytape();// เพิ่ม
                    this.doGetRemarkFTIR();// เพิ่ม
                    this.doGetRemarkIC();// เพิ่ม
                    this.doGetRemarkNVR();// เพิ่ม
                    this.doGetRemarkOutgasday0();// เพิ่ม
                    this.doGetRemarkOutgasday14();// เพิ่ม
                    this.doGetRemarkGhosttest();// เพิ่ม
                    this.doGetRemarkDynamicdiskghost();// เพิ่ม
                    this.doGetRemarkExtractable();// เพิ่ม
                    this.doGetRemarkCorrosion();// เพิ่ม
                    this.doGetRemarkParticlecount();// เพิ่มม


                  }}
                  type="submit"
                  className="btn btn-primary"
                  style={{ marginTop: 1 }}
                >
                  Search
                </button>
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
                  <h5>Qrcode : </h5>
                </div>
              </div>
              <div className="row">
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div
                  className="col-3"
                  style={{
                    fontFamily: "Times New Roman",
                    paddingTop: 30,
                  }}
                >
                  <h5>Main cleanliness test, full option : </h5>
                </div>
                <div
                  style={{
                    paddingBottom: 20,
                  }}
                >
                  <div
                    id="pdf-content"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "50vh",
                    }}
                  >
                    {/* นี่คือส่วนของ QR Code ที่คุณต้องการแสดงใน PDF */}
                    <QRCode value={qrCodeData1} size={300} />

                  </div>
                  <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                    <button onClick={() => generatePDF1(this.state.docNo)}>Download PDF full option</button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div
                  className="col-3"
                  style={{
                    fontFamily: "Times New Roman",
                    paddingTop: 10,
                  }}
                >
                  <h5>Ghost test : </h5>
                </div>
                <div
                  style={{
                    paddingBottom: 20,
                  }}
                >
                  <div
                    id="pdf-content"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "50vh",
                    }}
                  >
                    {/* นี่คือส่วนของ QR Code ที่คุณต้องการแสดงใน PDF */}
                    <QRCode value={qrCodeData2} size={300} />

                  </div>
                  <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                    <button onClick={() => generatePDF2(this.state.docNo)}>Download PDF Ghost test</button>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-1"></div>
                <div className="col-1"></div>
                <div
                  className="col-3"
                  style={{
                    fontFamily: "Times New Roman",
                    paddingTop: 10,
                  }}
                >
                  <h5>others special : </h5>
                </div>
                <div
                  style={{
                    paddingBottom: 20,
                  }}
                >
                  <div
                    id="pdf-content"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "50vh",
                    }}
                  >
                    {/* นี่คือส่วนของ QR Code ที่คุณต้องการแสดงใน PDF */}
                    <QRCode value={qrCodeData3} size={300} />

                  </div>
                  <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                    <button onClick={() => generatePDF3(this.state.docNo)}>Download PDF others special</button>
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

export default Cleanlinessspecial;
