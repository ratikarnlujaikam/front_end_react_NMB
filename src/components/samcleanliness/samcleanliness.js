// import React, { Component, useState } from "react";
// import { key, server } from "../../constants";
// import { httpClient } from "../../utils/HttpClient";
// import moment from "moment";
// import Select from "react-select";
// import Swal from "sweetalert2";
// import { CheckboxGroup } from "react-bootstrap";
// import nodemailer from 'nodemailer';
// import axios from 'axios';

// function Dropdown1({ handleOptionChangeDropdown1, selectedOptionDropdown1 }) {
//   return (
//     <div className="col-1">
//       <select
//         value={selectedOptionDropdown1}
//         onChange={handleOptionChangeDropdown1}
//       >
//         <option value="">Select section</option>
//         <option value="IQC">IQC</option>
//         <option value="OQA">OQA</option>
//         <option value="QC">QC</option>
//         <option value="PD">PD</option>
//         <option value="PENG">PENG</option>
//         <option value="ENG">ENG</option>
//         <option value="MM">MM</option>
//         <option value="PC">PC</option>
//         <option value="POM">POM</option>
//       </select>
//     </div>
//   );
// }
// function Dropdown2({ handleOptionChangeDropdown2, selectedOptionDropdown2 }) {
//   return (
//     <div className="col-1">
//       <select
//         value={selectedOptionDropdown2}
//         onChange={handleOptionChangeDropdown2}
//       >
//         <option value="">Select Customer</option>
//         <option value="Seagate">Seagate</option>
//         <option value="Luminar">Luminar</option>
//       </select>
//     </div>
//   );
// }

// function Plarformdropdown({
//   handleOptionChangePlarformdropdown,
//   selectedOptionPlarformdropdown,
// }) {
//   return (
//     <div
//       className="col-2"
//       style={{ fontFamily: "Times New Roman", fontsize: 20 }}
//     >
//       <select
//         value={selectedOptionPlarformdropdown}
//         onChange={handleOptionChangePlarformdropdown}
//       >
//         <option value="">Select Platform</option>
//         <option value="NL air">NL air</option>
//         <option value="PSG">PSG</option>
//         <option value="NSG">NSG</option>
//         <option value="ESG">ESG</option>
//       </select>
//     </div>
//   );
// }
// const TextBox1 = ({ handleTextChangeTextBox1, textValueTextBox1 }) => {
//   return (
//     <div>
//       <input
//         type="text"
//         value={textValueTextBox1}
//         onChange={(e) => handleTextChangeTextBox1(e.target.value)}
//       />
//     </div>
//   );
// };
// const TextBoxmail = ({ handleTextChangeTextBoxmail, textValueTextBoxmail }) => {
//   return (
//     <div>
//       <input
//         type="text"
//         value={textValueTextBoxmail}
//         onChange={(e) => handleTextChangeTextBoxmail(e.target.value)}
//       />
//     </div>
//   );
// };
// const Samplenametb = ({
//   handleTextChangeSamplenametb,
//   textValueSamplenametb,
// }) => {
//   return (
//     <div>
//       <input
//         type="text"
//         value={textValueSamplenametb}
//         onChange={(e) => handleTextChangeSamplenametb(e.target.value)}
//       />
//     </div>
//   );
// };
// const ProcessDescriptiontb = ({
//   handleTextChangeProcessDescriptiontb,
//   textValueProcessDescriptiontb,
// }) => {
//   return (
//     <div>
//       <input
//         type="text"
//         value={textValueProcessDescriptiontb}
//         onChange={(e) => handleTextChangeProcessDescriptiontb(e.target.value)}
//       />
//     </div>
//   );
// };
// const Registertb = ({ handleTextChangeRegistertb, textValueRegistertb }) => {
//   return (
//     <div>
//       <input
//         type="text"
//         value={textValueRegistertb}
//         onChange={(e) => handleTextChangeRegistertb(e.target.value)}
//       />
//     </div>
//   );
// };
// const Materialtb = ({ handleTextChangeMaterialtb, textValueMaterialtb }) => {
//   return (
//     <div>
//       <input
//         type="text"
//         value={textValueMaterialtb}
//         onChange={(e) => handleTextChangeMaterialtb(e.target.value)}
//       />
//     </div>
//   );
// };
// const ModelNametb = ({ handleTextChangeModelNametb, textValueModelNametb }) => {
//   return (
//     <div>
//       <input
//         type="text"
//         value={textValueModelNametb}
//         onChange={(e) => handleTextChangeModelNametb(e.target.value)}
//       />
//     </div>
//   );
// };
// const Datecodetb = ({ handleTextChangeDatecodetb, textValueDatecodetb }) => {
//   return (
//     <div>
//       <input
//         type="text"
//         value={textValueDatecodetb}
//         onChange={(e) => handleTextChangeDatecodetb(e.target.value)}
//       />
//     </div>
//   );
// };
// const Qtytb = ({ handleTextChangeQtytb, textValueQtytb }) => {
//   return (
//     <div>
//       <input
//         type="text"
//         value={textValueQtytb}
//         onChange={(e) => handleTextChangeQtytb(e.target.value)}
//       />
//     </div>
//   );
// };
// const Mbatb = ({ handleTextChangeMbatb, textValueMbatb }) => {
//   return (
//     <div>
//       <input
//         type="text"
//         value={textValueMbatb}
//         onChange={(e) => handleTextChangeMbatb(e.target.value)}
//       />
//     </div>
//   );
// };
// const OvenMBAtb = ({ handleTextChangeOvenMBAtb, textValueOvenMBAtb }) => {
//   return (
//     <div>
//       <input
//         type="text"
//         value={textValueOvenMBAtb}
//         onChange={(e) => handleTextChangeOvenMBAtb(e.target.value)}
//       />
//     </div>
//   );
// };
// const Basetb = ({ handleTextChangeBasetb, textValueBasetb }) => {
//   return (
//     <div>
//       <input
//         type="text"
//         value={textValueBasetb}
//         onChange={(e) => handleTextChangeBasetb(e.target.value)}
//       />
//     </div>
//   );
// };
// const Hubtb = ({ handleTextChangeHubtb, textValueHubtb }) => {
//   return (
//     <div>
//       <input
//         type="text"
//         value={textValueHubtb}
//         onChange={(e) => handleTextChangeHubtb(e.target.value)}
//       />
//     </div>
//   );
// };
// const Etctb = ({ handleTextChangeEtctb, textValueEtctb }) => {
//   return (
//     <div>
//       <input
//         type="text"
//         value={textValueEtctb}
//         onChange={(e) => handleTextChangeEtctb(e.target.value)}
//       />
//     </div>
//   );
// };
// const PartNotb = ({ handleTextChangePartNotb, textValuePartNotb }) => {
//   return (
//     <div>
//       <input
//         type="text"
//         value={textValuePartNotb}
//         onChange={(e) => handleTextChangePartNotb(e.target.value)}
//       />
//     </div>
//   );
// };
// const Revtb = ({ handleTextChangeRevtb, textValueRevtb }) => {
//   return (
//     <div>
//       <input
//         type="text"
//         value={textValueRevtb}
//         onChange={(e) => handleTextChangeRevtb(e.target.value)}
//       />
//     </div>
//   );
// };

// const Lotnotb = ({ handleTextChangeLotnotb, textValueLotnotb }) => {
//   return (
//     <div>
//       <input
//         type="text"
//         value={textValueLotnotb}
//         onChange={(e) => handleTextChangeLotnotb(e.target.value)}
//       />
//     </div>
//   );
// };
// const Motoroiltypetb = ({
//   handleTextChangeMotoroiltypetb,
//   textValueMotoroiltypetb,
// }) => {
//   return (
//     <div>
//       <input
//         type="text"
//         value={textValueMotoroiltypetb}
//         onChange={(e) => handleTextChangeMotoroiltypetb(e.target.value)}
//       />
//     </div>
//   );
// };
// const LotMotb = ({ handleTextChangeLotMotb, textValueLotMotb }) => {
//   return (
//     <div>
//       <input
//         type="text"
//         value={textValueLotMotb}
//         onChange={(e) => handleTextChangeLotMotb(e.target.value)}
//       />
//     </div>
//   );
// };
// const Suppliehubtb = ({
//   handleTextChangeSuppliehubtb,
//   textValueSuppliehubtb,
// }) => {
//   return (
//     <div>
//       <input
//         type="text"
//         value={textValueSuppliehubtb}
//         onChange={(e) => handleTextChangeSuppliehubtb(e.target.value)}
//       />
//     </div>
//   );
// };
// const Suppliebasetb = ({
//   handleTextChangeSuppliebasetb,
//   textValueSuppliebasetb,
// }) => {
//   return (
//     <div>
//       <input
//         type="text"
//         value={textValueSuppliebasetb}
//         onChange={(e) => handleTextChangeSuppliebasetb(e.target.value)}
//       />
//     </div>
//   );
// };
// const Suppliepcbtb = ({
//   handleTextChangeSuppliepcbtb,
//   textValueSuppliepcbtb,
// }) => {
//   return (
//     <div>
//       <input
//         type="text"
//         value={textValueSuppliepcbtb}
//         onChange={(e) => handleTextChangeSuppliepcbtb(e.target.value)}
//       />
//     </div>
//   );
// };
// const Pcblottb = ({ handleTextChangePcblottb, textValuePcblottb }) => {
//   return (
//     <div>
//       <input
//         type="text"
//         value={textValuePcblottb}
//         onChange={(e) => handleTextChangePcblottb(e.target.value)}
//       />
//     </div>
//   );
// };
// const Supplieramptb = ({
//   handleTextChangeSupplieramptb,
//   textValueSupplieramptb,
// }) => {
//   return (
//     <div>
//       <input
//         type="text"
//         value={textValueSupplieramptb}
//         onChange={(e) => handleTextChangeSupplieramptb(e.target.value)}
//       />
//     </div>
//   );
// };
// const Ramplottb = ({ handleTextChangeRamplottb, textValueRamplottb }) => {
//   return (
//     <div>
//       <input
//         type="text"
//         value={textValueRamplottb}
//         onChange={(e) => handleTextChangeRamplottb(e.target.value)}
//       />
//     </div>
//   );
// };
// const Suppliedivertertb = ({
//   handleTextChangeSuppliedivertertb,
//   textValueSuppliedivertertb,
// }) => {
//   return (
//     <div>
//       <input
//         type="text"
//         value={textValueSuppliedivertertb}
//         onChange={(e) => handleTextChangeSuppliedivertertb(e.target.value)}
//       />
//     </div>
//   );
// };
// const Diverterlottb = ({
//   handleTextChangeDiverterlottb,
//   textValueDiverterlottb,
// }) => {
//   return (
//     <div>
//       <input
//         type="text"
//         value={textValueDiverterlottb}
//         onChange={(e) => handleTextChangeDiverterlottb(e.target.value)}
//       />
//     </div>
//   );
// };
// const SupplieIDCStb = ({
//   handleTextChangeSupplieIDCStb,
//   textValueSupplieIDCStb,
// }) => {
//   return (
//     <div>
//       <input
//         type="text"
//         value={textValueSupplieIDCStb}
//         onChange={(e) => handleTextChangeSupplieIDCStb(e.target.value)}
//       />
//     </div>
//   );
// };
// const IDCSlottb = ({ handleTextChangeIDCSlottb, textValueIDCSlottb }) => {
//   return (
//     <div>
//       <input
//         type="text"
//         value={textValueIDCSlottb}
//         onChange={(e) => handleTextChangeIDCSlottb(e.target.value)}
//       />
//     </div>
//   );
// };
// const SHAwashingnotb = ({
//   handleTextChangeSHAwashingnotb,
//   textValueSHAwashingnotb,
// }) => {
//   return (
//     <div>
//       <input
//         type="text"
//         value={textValueSHAwashingnotb}
//         onChange={(e) => handleTextChangeSHAwashingnotb(e.target.value)}
//       />
//     </div>
//   );
// };
// const Co2mcnotb = ({ handleTextChangeCo2mcnotb, textValueCo2mcnotb }) => {
//   return (
//     <div>
//       <input
//         type="text"
//         value={textValueCo2mcnotb}
//         onChange={(e) => handleTextChangeCo2mcnotb(e.target.value)}
//       />
//     </div>
//   );
// };
// const Resultunittb = ({
//   handleTextChangeResultunittb,
//   textValueResultunittb,
// }) => {
//   return (
//     <div>
//       <input
//         type="text"
//         value={textValueResultunittb}
//         onChange={(e) => handleTextChangeResultunittb(e.target.value)}
//       />
//     </div>
//   );
// };
// const Purposetb = ({ handleTextChangePurposetb, textValuePurposetb }) => {
//   return (
//     <div>
//       <input
//         type="text"
//         value={textValuePurposetb}
//         onChange={(e) => handleTextChangePurposetb(e.target.value)}
//       />
//     </div>
//   );
// };
// const Reftb = ({ handleTextChangeReftb, textValueReftb }) => {
//   return (
//     <div>
//       <input
//         type="text"
//         value={textValueReftb}
//         onChange={(e) => handleTextChangeReftb(e.target.value)}
//       />
//     </div>
//   );
// };
// const Commenttb = ({ handleTextChangeCommenttb, textValueCommenttb }) => {
//   return (
//     <div>
//       <input
//         type="text"
//         value={textValueCommenttb}
//         onChange={(e) => handleTextChangeCommenttb(e.target.value)}
//       />
//     </div>
//   );
// };
// const Linenotb = ({ handleTextChangeLinenotb, textValueLinenotb }) => {
//   return (
//     <div>
//       <input
//         type="text"
//         value={textValueLinenotb}
//         onChange={(e) => handleTextChangeLinenotb(e.target.value)}
//       />
//     </div>
//   );
// };
// const NMBsampletb = ({ handleDateChangeNMBsampletb, dateValueNMBsampletb }) => {
//   return (
//     <div>
//       <input
//         type="date"
//         value={dateValueNMBsampletb}
//         onChange={(e) => handleDateChangeNMBsampletb(e.target.value)}
//       />
//     </div>
//   );
// };
// const Samplesendtb = ({ handleDateChangeSamplesendtb, dateValueSamplesendtb }) => {
//   return (
//     <div>
//       <input
//         type="date"
//         value={dateValueSamplesendtb}
//         onChange={(e) => handleDateChangeSamplesendtb(e.target.value)}
//       />
//     </div>
//   );
// };

// const Samplesubtb = ({ handleDateChangeSamplesubtb, dateValueSamplesubtb }) => {
//   return (
//     <div>
//       <input
//         type="date"
//         value={dateValueSamplesubtb}
//         onChange={(e) => handleDateChangeSamplesubtb(e.target.value)}
//       />
//     </div>
//   );
// };


// const Commitshiptb = ({ handleDateChangeCommitshiptb, dateValueCommitshiptb }) => {
//   return (
//     <div>
//       <input
//         type="date"
//         value={dateValueCommitshiptb}
//         onChange={(e) => handleDateChangeCommitshiptb(e.target.value)}
//       />
//     </div>
//   );
// };


// const Ovenshanotb = ({ handleTextChangeOvenshanotb, textValueOvenshanotb }) => {
//   return (
//     <div>
//       <input
//         type="text"
//         value={textValueOvenshanotb}
//         onChange={(e) => handleTextChangeOvenshanotb(e.target.value)}
//       />
//     </div>
//   );
// };

// const RadioButtons1 = ({
//   handleOptionChangeRadioButtons1,
//   selectedOptionRadioButtons1,
// }) => {
//   return (
//     <div style={{ fontFamily: "Times New Roman" }}>
//       <label style={{ fontFamily: "Times New Roman" }}>
//         <input
//           type="radio"
//           value="Bang-pa-in"
//           checked={selectedOptionRadioButtons1 === "Bang-pa-in"}
//           onChange={() => handleOptionChangeRadioButtons1("Bang-pa-in")}
//         />
//         Bang-pa-in
//       </label>
//     </div>
//   );
// };
// const RadioButtonsdivision = ({
//   handleOptionChangeRadioButtonsdivision,
//   selectedOptionRadioButtonsdivision,
// }) => {
//   return (
//     <div style={{ fontFamily: "Times New Roman" }}>
//       <label style={{ fontFamily: "Times New Roman" }}>
//         <input
//           type="radio"
//           value="Spindle Motor"
//           checked={selectedOptionRadioButtonsdivision === "Spindle Motor"}
//           onChange={() =>
//             handleOptionChangeRadioButtonsdivision("Spindle Motor")
//           }
//         />
//         Spindle Motor
//       </label>
//     </div>
//   );
// };
// const RadioButtons2 = ({
//   handleOptionChangeRadioButtons2,
//   selectedOptionRadioButtons2,
// }) => {
//   return (
//     <div>
//       <div className="row">
//         <div>
//           <label>
//             <input
//               type="radio"
//               value="Customer"
//               checked={selectedOptionRadioButtons2 === "Customer"}
//               onChange={() => handleOptionChangeRadioButtons2("Customer")}
//             />
//             Customer
//           </label>
//         </div>
//         <div>
//           <label>
//             <input
//               type="radio"
//               value="Internal for"
//               checked={selectedOptionRadioButtons2 === "Internal for"}
//               onChange={() => handleOptionChangeRadioButtons2("Internal for")}
//             />
//             Internal for
//           </label>
//         </div>
//       </div>
//     </div>
//   );
// };


// function Table({ onTableDataChange }) {
//   const [headers, setHeaders] = useState([
//     "Test item",
//     "Instruments",
//     "Data Quantity",
//     "Remark",
//     "Select", // New header for the checkbox column
//   ]);

//   const [data, setData] = useState([
//     ["LPC", "", "", "", false],
//     ["Spray LPC", "", "", "", false],
//     ["APA", "", "", "", false],
//     ["Talc by tape", "", "", "", false],
//     ["FTIR", "", "", "", false],
//     ["IC", "", "", "", false],
//     ["NVR", "", "", "", false],
//     ["Outgas day 0", "", "", "", false],
//     ["Outgas day 14", "", "", "", false],
//     ["Ghost test", "", "", "", false],
//     ["Dynamic disk ghost", "", "", "", false],
//     ["Extractable", "", "", "", false],
//     ["Corrosion", "", "", "", false],
//     ["Particle count", "", "", "", false],
//   ]);

//   const handleHeaderChange = (event, index) => {
//     const newHeaders = [...headers];
//     newHeaders[index] = event.target.value;
//     setHeaders(newHeaders);
//   };

//   const handleCellChange = (event, rowIndex, colIndex) => {
//     const newData = [...data];
//     if (colIndex === headers.length - 1) {
//       // Handle checkbox changes
//       newData[rowIndex][colIndex] = event.target.checked;
//     } else {
//       // Handle other cell changes
//       newData[rowIndex][colIndex] = event.target.value;
//     }
//     setData(newData);
//     onTableDataChange(newData);
//   };

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             {headers.map((header, index) => (
//               <th key={index}>
//                 <input
//                   type="text"
//                   value={header}
//                   onChange={(event) => handleHeaderChange(event, index)}
//                 />
//               </th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((row, rowIndex) => (
//             <tr key={rowIndex}>
//               {row.map((cell, colIndex) => (
//                 <td key={colIndex}>
//                   {colIndex === headers.length - 1 ? (
//                     <input
//                       type="checkbox"
//                       checked={cell}
//                       onChange={(event) =>
//                         handleCellChange(event, rowIndex, colIndex)
//                       }
//                     />
//                   ) : (
//                     <input
//                       type="text"
//                       value={cell}
//                       onChange={(event) =>
//                         handleCellChange(event, rowIndex, colIndex)
//                       }
//                     />
//                   )}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// const currentDate = new Date();
// const formattedDate = `${currentDate.getFullYear().toString().slice(-2)}${(currentDate.getMonth() + 1).toString().padStart(2, '0')}`;

// class Samcleanliness extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedOptionDropdown1: [],
//       selectedOptionDropdown2: [],
//       selectedOptionMgrequestdropdown: [],
//       selectedOptionCleanlinessdropdown: [],
//       selectedOptionKZWteamdropdown: [],
//       selectedOptionPlarformdropdown: [],
//       textValueTextBox1: "",
//       textValueTextBoxmail: "",
//       textValueSamplenametb: "",
//       textValueRegistertb: "",
//       textValueMgrequesttb: "",
//       textValueCleanlinesstb: "",
//       textValueMaterialtb: "",
//       textValueModelNametb: "",
//       textValueQtytb: "",
//       textValueMbatb: "",
//       textValueBasetb: "",
//       textValueHubtb: "",
//       textValueEtctb: "",
//       textValuePartNotb: "",
//       textValueLotnotb: "",
//       textValueMotoroiltypetb: "",
//       textValueLotMotb: "",
//       textValueSuppliehubtb: "",
//       textValueSuppliebasetb: "",
//       textValueSuppliepcbtb: "",
//       textValuePcblottb: "",
//       textValueSupplieramptb: "",
//       textValueRamplottb: "",
//       textValueSuppliedivertertb: "",
//       textValueDiverterlottb: "",
//       textValueSupplieIDCStb: "",
//       textValueIDCSlottb: "",
//       textValueSHAwashingnotb: "",
//       textValueCo2mcnotb: "",
//       textValueResultunittb: "",
//       textValuePurposetb: "",
//       textValueReftb: "",
//       textValueCommenttb: "",
//       textValueLinenotb: "",
//       textValueOvenshanotb: "",
//       selectedOptionRadioButtons1: [],
//       dateValueNMBsampletb: "",
//       dateValueSamplesendtb: "",
//       textValueSamplesubtb: "",
//       selectedOptionRadioButtonsdivision: [],
//       selectedOptionRadioButtons2: [],
//       selectedOptionRadiocleanliness: [],
//       textValueMaterialtb: "",
//       textValueDatecodetb: "",
//       textValueRevtb: "",
//       selectedOptionRadioButtons3: [],
//       textValueOvenMBAtb: "",
//       textValueProcessDescriptiontb: "",
//       textValueTextBox1: "",
//       tableData: [
//         ["LPC" / "" / "" / ""],
//         ["Spray LPC" / "" / "" / ""],
//         ["APA" / "" / "" / ""],
//         ["Talc by tape" / "" / "" / ""],
//         ["FTIR" / "" / "" / ""],
//         ["IC" / "" / "" / ""],
//         ["NVR" / "" / "" / ""],
//         ["Outgas day 0" / "" / "" / ""],
//         ["Outgas day 14" / "" / "" / ""],
//         ["Ghost test" / "" / "" / ""],
//         ["Dynamic disk ghost" / "" / "" / ""],
//         ["Extractable" / "" / "" / ""],
//         ["Corrosion" / "" / "" / ""],
//         ["Particle count" / "" / "" / ""],
//       ],
//       docNo: [],
//       emailSent: false,
//       dateValueCommitshiptb: "",
//       optionSelected: null,
//       isDisable: false
//     };
//   }


//   componentDidMount = async () => {
//     await this.getModel();
//   };
//   handleDateChangeCommitshiptb = (data) => {
//     this.setState({ dateValueCommitshiptb: data });
//   };
//   handleTextChangeTextBox1 = (data) => {
//     this.setState({ textValueTextBox1: data });
//   };
//   handleTextChangeTextBoxmail = (data) => {
//     this.setState({ textValueTextBoxmail: data });
//   };
//   handleTextChangeProcessDescriptiontb = (data) => {
//     this.setState({ textValueProcessDescriptiontb: data });
//   };
//   handleTextChangeOvenMBAtb = (data) => {
//     this.setState({ textValueOvenMBAtb: data });
//   };
//   handleTableDataChange = (data) => {
//     this.setState({ tableData: data });
//   };
//   handleOptionChangeRadiocleanliness = (data) => {
//     this.setState({ selectedOptionRadiocleanliness: data });
//   };
//   handleOptionChangeRadioButtons2 = (data) => {
//     this.setState({ selectedOptionRadioButtons2: data });
//   };
//   handleOptionChangeRadioButtons3 = (data) => {
//     this.setState({ selectedOptionRadioButtons3: data });
//   };
//   handleOptionChangeRadioButtonsdivision = (data) => {
//     this.setState({ selectedOptionRadioButtonsdivision: data });
//   };
//   handleTextChangeMaterialtb = (data) => {
//     this.setState({ textValueMaterialtb: data });
//   };
//   handleTextChangeRevtb = (data) => {
//     this.setState({ textValueRevtb: data });
//   };
//   handleTextChangeDatecodetb = (data) => {
//     this.setState({ textValueDatecodetb: data });
//   };
//   handleDateChangeSamplesubtb = (data) => {
//     this.setState({ dateValueSamplesubtb: data });
//   };
//   handleDateChangeSamplesendtb = (data) => {
//     this.setState({ dateValueSamplesendtb: data });
//   };
//   handleDateChangeNMBsampletb = (data) => {
//     this.setState({ dateValueNMBsampletb: data });
//   };
//   handleOptionChangeRadioButtons1 = (data) => {
//     this.setState({ selectedOptionRadioButtons1: data });
//   };
//   handleTextChangeOvenshanotb = (data) => {
//     this.setState({ textValueOvenshanotb: data });
//   };
//   handleTextChangeLinenotb = (data) => {
//     this.setState({ textValueLinenotb: data });
//   };
//   handleTextChangeCommenttb = (data) => {
//     this.setState({ textValueCommenttb: data });
//   };
//   handleTextChangeReftb = (data) => {
//     this.setState({ textValueReftb: data });
//   };
//   handleTextChangePurposetb = (data) => {
//     this.setState({ textValuePurposetb: data });
//   };
//   handleTextChangeResultunittb = (data) => {
//     this.setState({ textValueResultunittb: data });
//   };
//   handleTextChangeCo2mcnotb = (data) => {
//     this.setState({ textValueCo2mcnotb: data });
//   };
//   handleTextChangeSHAwashingnotb = (data) => {
//     this.setState({ textValueSHAwashingnotb: data });
//   };
//   handleTextChangeIDCSlottb = (data) => {
//     this.setState({ textValueIDCSlottb: data });
//   };
//   handleTextChangeSupplieIDCStb = (data) => {
//     this.setState({ textValueSupplieIDCStb: data });
//   };
//   handleTextChangeDiverterlottb = (data) => {
//     this.setState({ textValueDiverterlottb: data });
//   };
//   handleTextChangeSuppliedivertertb = (data) => {
//     this.setState({ textValueSuppliedivertertb: data });
//   };
//   handleTextChangeRamplottb = (data) => {
//     this.setState({ textValueRamplottb: data });
//   };
//   handleTextChangeSupplieramptb = (data) => {
//     this.setState({ textValueSupplieramptb: data });
//   };
//   handleTextChangePcblottb = (data) => {
//     this.setState({ textValuePcblottb: data });
//   };
//   handleTextChangeSuppliepcbtb = (data) => {
//     this.setState({ textValueSuppliepcbtb: data });
//   };
//   handleTextChangeSuppliebasetb = (data) => {
//     this.setState({ textValueSuppliebasetb: data });
//   };
//   handleTextChangeSuppliehubtb = (data) => {
//     this.setState({ textValueSuppliehubtb: data });
//   };
//   handleTextChangeLotMotb = (data) => {
//     this.setState({ textValueLotMotb: data });
//   };
//   handleTextChangeMotoroiltypetb = (data) => {
//     this.setState({ textValueMotoroiltypetb: data });
//   };
//   handleTextChangeLotnotb = (data) => {
//     this.setState({ textValueLotnotb: data });
//   };
//   handleTextChangePartNotb = (data) => {
//     this.setState({ textValuePartNotb: data });
//   };
//   handleTextChangeEtctb = (data) => {
//     this.setState({ textValueEtctb: data });
//   };
//   handleTextChangeHubtb = (data) => {
//     this.setState({ textValueHubtb: data });
//   };
//   handleTextChangeBasetb = (data) => {
//     this.setState({ textValueBasetb: data });
//   };
//   handleTextChangeMbatb = (data) => {
//     this.setState({ textValueMbatb: data });
//   };
//   handleTextChangeQtytb = (data) => {
//     this.setState({ textValueQtytb: data });
//   };
//   handleTextChangeModelNametb = (data) => {
//     this.setState({ textValueModelNametb: data });
//   };
//   handleTextChangeCleanlinesstb = (data) => {
//     this.setState({ textValueCleanlinesstb: data });
//   };
//   handleTextChangeMgrequesttb = (data) => {
//     this.setState({ textValueMgrequesttb: data });
//   };
//   handleTextChangeRegistertb = (data) => {
//     this.setState({ textValueRegistertb: data });
//   };
//   handleTextChangeSamplenametb = (data) => {
//     this.setState({ textValueSamplenametb: data });
//   };

//   handleTextChangeTextBox1 = (data) => {
//     this.setState({ textValueTextBox1: data });
//   };
//   handleOptionChangePlarformdropdown = (event) => {
//     const data = event.target.value;
//     this.setState({ selectedOptionPlarformdropdown: data });
//   };
//   handleOptionChangeKZWteamdropdown = (event) => {
//     const data = event.target.value;
//     this.setState({ selectedOptionKZWteamdropdown: data });
//   };
//   handleOptionChangeCleanlinessdropdown = (event) => {
//     const data = event.target.value;
//     this.setState({ selectedOptionCleanlinessdropdown: data });
//   };
//   handleOptionChangeMgrequestdropdown = (event) => {
//     const data = event.target.value;
//     this.setState({ selectedOptionMgrequestdropdown: data });
//   };
//   handleOptionChangeDropdown2 = (event) => {
//     const data = event.target.value;
//     this.setState({ selectedOptionDropdown2: data });
//   };
//   handleOptionChangeDropdown1 = (event) => {
//     const data = event.target.value;
//     this.setState({ selectedOptionDropdown1: data });

//   };
//   getModel = async () => {
//     const array = await httpClient.get(server.DOCNO_URL);
//     const options = array.data.result.map((d) => ({
//       label: d.No,
//     }));
//     this.setState({ docNo: options });
//   };

//   doGetdocno = async () => {

//     const result = await httpClient.get(
//       server.SAMCLEANLINESSTESTdocno_URL +
//       "/" +
//       this.state.selectedOptionDropdown1 +
//       "/" +
//       this.state.docNo[0].label



//     );
//   };

//   sendDataToBackend1 = async () => {

//     const result = await httpClient.get(
//       server.Samcleanlinesssend_URL +
//       "/" +
//       this.state.selectedOptionDropdown1 +
//       "/" +
//       this.state.textValueRegistertb +
//       "/" +
//       this.state.docNo[0].label 
     
     
//     );

//   };

//   doGetData = async () => {
//     try {
//       const result = await httpClient.get(
//         server.SAMCLEANLINESSTEST_URL +
//         "/" +
//         this.state.selectedOptionDropdown1 +
//         "/" +
//         this.state.textValueRegistertb +
//         "/" +
//         this.state.selectedOptionRadioButtons2 +
//         "/" +
//         this.state.textValueTextBox1 +
//         "/" +
//         this.state.textValueSamplenametb +
//         "/" +
//         this.state.textValueMaterialtb +
//         "/" +
//         this.state.textValueModelNametb +
//         "/" +
//         this.state.textValueDatecodetb +
//         "/" +
//         this.state.selectedOptionDropdown2 +
//         "/" +
//         this.state.textValueQtytb +
//         "/" +
//         this.state.tableData[0][0] +
//         "/" +
//         this.state.tableData[0][1] +
//         "/" +
//         this.state.tableData[0][2] +
//         "/" +
//         this.state.tableData[0][3] +
//         "/" +
//         this.state.textValueBasetb +
//         "/" +
//         this.state.textValueMbatb +
//         "/" +
//         this.state.textValueHubtb +
//         "/" +
//         this.state.textValueEtctb +
//         "/" +
//         this.state.textValuePartNotb +
//         "/" +
//         this.state.textValueRevtb +
//         "/" +
//         this.state.selectedOptionPlarformdropdown +
//         "/" +
//         this.state.textValueLotnotb +
//         "/" +
//         this.state.textValueMotoroiltypetb +
//         "/" +
//         this.state.textValueLotMotb +
//         "/" +
//         this.state.textValueSuppliehubtb +
//         "/" +
//         this.state.textValueSuppliebasetb +
//         "/" +
//         this.state.textValueSuppliepcbtb +
//         "/" +
//         this.state.textValuePcblottb +
//         "/" +
//         this.state.textValueSupplieramptb +
//         "/" +
//         this.state.textValueRamplottb +
//         "/" +
//         this.state.textValueSuppliedivertertb +
//         "/" +
//         this.state.textValueDiverterlottb +
//         "/" +
//         this.state.textValueSupplieIDCStb +
//         "/" +
//         this.state.textValueIDCSlottb +
//         "/" +
//         this.state.textValueSHAwashingnotb +
//         "/" +
//         this.state.textValueOvenshanotb +
//         "/" +
//         this.state.textValueOvenMBAtb +
//         "/" +
//         this.state.textValueCo2mcnotb +
//         "/" +
//         this.state.textValueLinenotb +
//         "/" +
//         this.state.textValueResultunittb +
//         "/" +
//         this.state.textValuePurposetb +
//         "/" +
//         this.state.textValueProcessDescriptiontb +
//         "/" +
//         this.state.textValueReftb +
//         "/" +
//         this.state.textValueCommenttb +
//         "/" +
//         this.state.dateValueNMBsampletb +
//         "/" +
//         this.state.dateValueSamplesendtb +
//         "/" +
//         this.state.dateValueSamplesubtb +
//         "/" +
//         this.state.dateValueCommitshiptb +
//         "/" +
//         this.state.docNo[0].label +
//         "/" +
//         this.state.textValueTextBoxmail


//       );

//       // ... โค้ดอื่น ๆ ที่คุณมี

//       this.setState({
//         result: result.data.result,
//         isDisable: false,
//       });

//       return true; // ส่งค่า true เมื่อทุกอย่างสำเร็จ
//     } catch (error) {
//       console.error(error);

//       // ในกรณีที่เกิดข้อผิดพลาด คุณสามารถแสดงข้อความข้อผิดพลาดดังนี้
//       Swal.fire({
//         icon: "error",
//         title: "Error",
//         text: "Incomplete information,please try again ",
//       });

//       return false; // ส่งค่า false เมื่อเกิดข้อผิดพลาด
//     }
//   };
//   doGetData2 = async () => {
//     try {
//       const result = await httpClient.get(
//         server.SAMCLEANLINESSTESTsprayLPC_URL +
//         "/" +
//         this.state.selectedOptionDropdown1 +
//         "/" +
//         this.state.textValueRegistertb +
//         "/" +
//         this.state.selectedOptionRadioButtons2 +
//         "/" +
//         this.state.textValueTextBox1 +
//         "/" +
//         this.state.textValueSamplenametb +
//         "/" +
//         this.state.textValueMaterialtb +
//         "/" +
//         this.state.textValueModelNametb +
//         "/" +
//         this.state.textValueDatecodetb +
//         "/" +
//         this.state.selectedOptionDropdown2 +
//         "/" +
//         this.state.textValueQtytb +
//         "/" +
//         this.state.tableData[1][0] +
//         "/" +
//         this.state.tableData[1][1] +
//         "/" +
//         this.state.tableData[1][2] +
//         "/" +
//         this.state.tableData[1][3] +
//         "/" +
//         this.state.textValueBasetb +
//         "/" +
//         this.state.textValueMbatb +
//         "/" +
//         this.state.textValueHubtb +
//         "/" +
//         this.state.textValueEtctb +
//         "/" +
//         this.state.textValuePartNotb +
//         "/" +
//         this.state.textValueRevtb +
//         "/" +
//         this.state.selectedOptionPlarformdropdown +
//         "/" +
//         this.state.textValueLotnotb +
//         "/" +
//         this.state.textValueMotoroiltypetb +
//         "/" +
//         this.state.textValueLotMotb +
//         "/" +
//         this.state.textValueSuppliehubtb +
//         "/" +
//         this.state.textValueSuppliebasetb +
//         "/" +
//         this.state.textValueSuppliepcbtb +
//         "/" +
//         this.state.textValuePcblottb +
//         "/" +
//         this.state.textValueSupplieramptb +
//         "/" +
//         this.state.textValueRamplottb +
//         "/" +
//         this.state.textValueSuppliedivertertb +
//         "/" +
//         this.state.textValueDiverterlottb +
//         "/" +
//         this.state.textValueSupplieIDCStb +
//         "/" +
//         this.state.textValueIDCSlottb +
//         "/" +
//         this.state.textValueSHAwashingnotb +
//         "/" +
//         this.state.textValueOvenshanotb +
//         "/" +
//         this.state.textValueOvenMBAtb +
//         "/" +
//         this.state.textValueCo2mcnotb +
//         "/" +
//         this.state.textValueLinenotb +
//         "/" +
//         this.state.textValueResultunittb +
//         "/" +
//         this.state.textValuePurposetb +
//         "/" +
//         this.state.textValueProcessDescriptiontb +
//         "/" +
//         this.state.textValueReftb +
//         "/" +
//         this.state.textValueCommenttb +
//         "/" +
//         this.state.dateValueNMBsampletb +
//         "/" +
//         this.state.dateValueSamplesendtb +
//         "/" +
//         this.state.dateValueSamplesubtb +
//         "/" +
//         this.state.dateValueCommitshiptb +
//         "/" +
//         this.state.docNo[0].label +
//         "/" +
//         this.state.textValueTextBoxmail



//       );

//       // ... โค้ดอื่น ๆ ที่คุณมี

//       this.setState({
//         result: result.data.result,
//         isDisable: false,
//       });

//       return true; // ส่งค่า true เมื่อทุกอย่างสำเร็จ
//     } catch (error) {
//       console.error(error);

//       // ในกรณีที่เกิดข้อผิดพลาด คุณสามารถแสดงข้อความข้อผิดพลาดดังนี้
//       Swal.fire({
//         icon: "error",
//         title: "Error",
//         text: "Incomplete information,please try again ",
//       });

//       return false; // ส่งค่า false เมื่อเกิดข้อผิดพลาด
//     }
//   };
//   doGetData3 = async () => {
//     try {
//       const result = await httpClient.get(
//         server.SAMCLEANLINESSTESTAPA_URL +
//         "/" +
//         this.state.selectedOptionDropdown1 +
//         "/" +
//         this.state.textValueRegistertb +
//         "/" +
//         this.state.selectedOptionRadioButtons2 +
//         "/" +
//         this.state.textValueTextBox1 +
//         "/" +
//         this.state.textValueSamplenametb +
//         "/" +
//         this.state.textValueMaterialtb +
//         "/" +
//         this.state.textValueModelNametb +
//         "/" +
//         this.state.textValueDatecodetb +
//         "/" +
//         this.state.selectedOptionDropdown2 +
//         "/" +
//         this.state.textValueQtytb +
//         "/" +
//         this.state.tableData[2][0] +
//         "/" +
//         this.state.tableData[2][1] +
//         "/" +
//         this.state.tableData[2][2] +
//         "/" +
//         this.state.tableData[2][3] +
//         "/" +
//         this.state.textValueBasetb +
//         "/" +
//         this.state.textValueMbatb +
//         "/" +
//         this.state.textValueHubtb +
//         "/" +
//         this.state.textValueEtctb +
//         "/" +
//         this.state.textValuePartNotb +
//         "/" +
//         this.state.textValueRevtb +
//         "/" +
//         this.state.selectedOptionPlarformdropdown +
//         "/" +
//         this.state.textValueLotnotb +
//         "/" +
//         this.state.textValueMotoroiltypetb +
//         "/" +
//         this.state.textValueLotMotb +
//         "/" +
//         this.state.textValueSuppliehubtb +
//         "/" +
//         this.state.textValueSuppliebasetb +
//         "/" +
//         this.state.textValueSuppliepcbtb +
//         "/" +
//         this.state.textValuePcblottb +
//         "/" +
//         this.state.textValueSupplieramptb +
//         "/" +
//         this.state.textValueRamplottb +
//         "/" +
//         this.state.textValueSuppliedivertertb +
//         "/" +
//         this.state.textValueDiverterlottb +
//         "/" +
//         this.state.textValueSupplieIDCStb +
//         "/" +
//         this.state.textValueIDCSlottb +
//         "/" +
//         this.state.textValueSHAwashingnotb +
//         "/" +
//         this.state.textValueOvenshanotb +
//         "/" +
//         this.state.textValueOvenMBAtb +
//         "/" +
//         this.state.textValueCo2mcnotb +
//         "/" +
//         this.state.textValueLinenotb +
//         "/" +
//         this.state.textValueResultunittb +
//         "/" +
//         this.state.textValuePurposetb +
//         "/" +
//         this.state.textValueProcessDescriptiontb +
//         "/" +
//         this.state.textValueReftb +
//         "/" +
//         this.state.textValueCommenttb +
//         "/" +
//         this.state.dateValueNMBsampletb +
//         "/" +
//         this.state.dateValueSamplesendtb +
//         "/" +
//         this.state.dateValueSamplesubtb +
//         "/" +
//         this.state.dateValueCommitshiptb +
//         "/" +
//         this.state.docNo[0].label +
//         "/" +
//         this.state.textValueTextBoxmail



//       );

//       // ... โค้ดอื่น ๆ ที่คุณมี

//       this.setState({
//         result: result.data.result,
//         isDisable: false,
//       });

//       return true; // ส่งค่า true เมื่อทุกอย่างสำเร็จ
//     } catch (error) {
//       console.error(error);

//       // ในกรณีที่เกิดข้อผิดพลาด คุณสามารถแสดงข้อความข้อผิดพลาดดังนี้
//       Swal.fire({
//         icon: "error",
//         title: "Error",
//         text: "Incomplete information,please try again ",
//       });

//       return false; // ส่งค่า false เมื่อเกิดข้อผิดพลาด
//     }
//   };
//   doGetData4 = async () => {
//     try {
//       const result = await httpClient.get(
//         server.SAMCLEANLINESSTESTTalcbytape_URL +
//         "/" +
//         this.state.selectedOptionDropdown1 +
//         "/" +
//         this.state.textValueRegistertb +
//         "/" +
//         this.state.selectedOptionRadioButtons2 +
//         "/" +
//         this.state.textValueTextBox1 +
//         "/" +
//         this.state.textValueSamplenametb +
//         "/" +
//         this.state.textValueMaterialtb +
//         "/" +
//         this.state.textValueModelNametb +
//         "/" +
//         this.state.textValueDatecodetb +
//         "/" +
//         this.state.selectedOptionDropdown2 +
//         "/" +
//         this.state.textValueQtytb +
//         "/" +
//         this.state.tableData[3][0] +
//         "/" +
//         this.state.tableData[3][1] +
//         "/" +
//         this.state.tableData[3][2] +
//         "/" +
//         this.state.tableData[3][3] +
//         "/" +
//         this.state.textValueBasetb +
//         "/" +
//         this.state.textValueMbatb +
//         "/" +
//         this.state.textValueHubtb +
//         "/" +
//         this.state.textValueEtctb +
//         "/" +
//         this.state.textValuePartNotb +
//         "/" +
//         this.state.textValueRevtb +
//         "/" +
//         this.state.selectedOptionPlarformdropdown +
//         "/" +
//         this.state.textValueLotnotb +
//         "/" +
//         this.state.textValueMotoroiltypetb +
//         "/" +
//         this.state.textValueLotMotb +
//         "/" +
//         this.state.textValueSuppliehubtb +
//         "/" +
//         this.state.textValueSuppliebasetb +
//         "/" +
//         this.state.textValueSuppliepcbtb +
//         "/" +
//         this.state.textValuePcblottb +
//         "/" +
//         this.state.textValueSupplieramptb +
//         "/" +
//         this.state.textValueRamplottb +
//         "/" +
//         this.state.textValueSuppliedivertertb +
//         "/" +
//         this.state.textValueDiverterlottb +
//         "/" +
//         this.state.textValueSupplieIDCStb +
//         "/" +
//         this.state.textValueIDCSlottb +
//         "/" +
//         this.state.textValueSHAwashingnotb +
//         "/" +
//         this.state.textValueOvenshanotb +
//         "/" +
//         this.state.textValueOvenMBAtb +
//         "/" +
//         this.state.textValueCo2mcnotb +
//         "/" +
//         this.state.textValueLinenotb +
//         "/" +
//         this.state.textValueResultunittb +
//         "/" +
//         this.state.textValuePurposetb +
//         "/" +
//         this.state.textValueProcessDescriptiontb +
//         "/" +
//         this.state.textValueReftb +
//         "/" +
//         this.state.textValueCommenttb +
//         "/" +
//         this.state.dateValueNMBsampletb +
//         "/" +
//         this.state.dateValueSamplesendtb +
//         "/" +
//         this.state.dateValueSamplesubtb +
//         "/" +
//         this.state.dateValueCommitshiptb +
//         "/" +
//         this.state.docNo[0].label +
//         "/" +
//         this.state.textValueTextBoxmail



//       );

//       // ... โค้ดอื่น ๆ ที่คุณมี

//       this.setState({
//         result: result.data.result,
//         isDisable: false,
//       });

//       return true; // ส่งค่า true เมื่อทุกอย่างสำเร็จ
//     } catch (error) {
//       console.error(error);

//       // ในกรณีที่เกิดข้อผิดพลาด คุณสามารถแสดงข้อความข้อผิดพลาดดังนี้
//       Swal.fire({
//         icon: "error",
//         title: "Error",
//         text: "Incomplete information,please try again ",
//       });

//       return false; // ส่งค่า false เมื่อเกิดข้อผิดพลาด
//     }
//   };
//   doGetData5 = async () => {
//     try {
//       const result = await httpClient.get(
//         server.SAMCLEANLINESSTESTFTIR_URL +
//         "/" +
//         this.state.selectedOptionDropdown1 +
//         "/" +
//         this.state.textValueRegistertb +
//         "/" +
//         this.state.selectedOptionRadioButtons2 +
//         "/" +
//         this.state.textValueTextBox1 +
//         "/" +
//         this.state.textValueSamplenametb +
//         "/" +
//         this.state.textValueMaterialtb +
//         "/" +
//         this.state.textValueModelNametb +
//         "/" +
//         this.state.textValueDatecodetb +
//         "/" +
//         this.state.selectedOptionDropdown2 +
//         "/" +
//         this.state.textValueQtytb +
//         "/" +
//         this.state.tableData[4][0] +
//         "/" +
//         this.state.tableData[4][1] +
//         "/" +
//         this.state.tableData[4][2] +
//         "/" +
//         this.state.tableData[4][3] +
//         "/" +
//         this.state.textValueBasetb +
//         "/" +
//         this.state.textValueMbatb +
//         "/" +
//         this.state.textValueHubtb +
//         "/" +
//         this.state.textValueEtctb +
//         "/" +
//         this.state.textValuePartNotb +
//         "/" +
//         this.state.textValueRevtb +
//         "/" +
//         this.state.selectedOptionPlarformdropdown +
//         "/" +
//         this.state.textValueLotnotb +
//         "/" +
//         this.state.textValueMotoroiltypetb +
//         "/" +
//         this.state.textValueLotMotb +
//         "/" +
//         this.state.textValueSuppliehubtb +
//         "/" +
//         this.state.textValueSuppliebasetb +
//         "/" +
//         this.state.textValueSuppliepcbtb +
//         "/" +
//         this.state.textValuePcblottb +
//         "/" +
//         this.state.textValueSupplieramptb +
//         "/" +
//         this.state.textValueRamplottb +
//         "/" +
//         this.state.textValueSuppliedivertertb +
//         "/" +
//         this.state.textValueDiverterlottb +
//         "/" +
//         this.state.textValueSupplieIDCStb +
//         "/" +
//         this.state.textValueIDCSlottb +
//         "/" +
//         this.state.textValueSHAwashingnotb +
//         "/" +
//         this.state.textValueOvenshanotb +
//         "/" +
//         this.state.textValueOvenMBAtb +
//         "/" +
//         this.state.textValueCo2mcnotb +
//         "/" +
//         this.state.textValueLinenotb +
//         "/" +
//         this.state.textValueResultunittb +
//         "/" +
//         this.state.textValuePurposetb +
//         "/" +
//         this.state.textValueProcessDescriptiontb +
//         "/" +
//         this.state.textValueReftb +
//         "/" +
//         this.state.textValueCommenttb +
//         "/" +
//         this.state.dateValueNMBsampletb +
//         "/" +
//         this.state.dateValueSamplesendtb +
//         "/" +
//         this.state.dateValueSamplesubtb +
//         "/" +
//         this.state.dateValueCommitshiptb +
//         "/" +
//         this.state.docNo[0].label +
//         "/" +
//         this.state.textValueTextBoxmail



//       );

//       // ... โค้ดอื่น ๆ ที่คุณมี

//       this.setState({
//         result: result.data.result,
//         isDisable: false,
//       });

//       return true; // ส่งค่า true เมื่อทุกอย่างสำเร็จ
//     } catch (error) {
//       console.error(error);

//       // ในกรณีที่เกิดข้อผิดพลาด คุณสามารถแสดงข้อความข้อผิดพลาดดังนี้
//       Swal.fire({
//         icon: "error",
//         title: "Error",
//         text: "Incomplete information,please try again ",
//       });

//       return false; // ส่งค่า false เมื่อเกิดข้อผิดพลาด
//     }
//   };
//   doGetData6 = async () => {
//     try {
//       const result = await httpClient.get(
//         server.SAMCLEANLINESSTESTIC_URL +
//         "/" +
//         this.state.selectedOptionDropdown1 +
//         "/" +
//         this.state.textValueRegistertb +
//         "/" +
//         this.state.selectedOptionRadioButtons2 +
//         "/" +
//         this.state.textValueTextBox1 +
//         "/" +
//         this.state.textValueSamplenametb +
//         "/" +
//         this.state.textValueMaterialtb +
//         "/" +
//         this.state.textValueModelNametb +
//         "/" +
//         this.state.textValueDatecodetb +
//         "/" +
//         this.state.selectedOptionDropdown2 +
//         "/" +
//         this.state.textValueQtytb +
//         "/" +
//         this.state.tableData[5][0] +
//         "/" +
//         this.state.tableData[5][1] +
//         "/" +
//         this.state.tableData[5][2] +
//         "/" +
//         this.state.tableData[5][3] +
//         "/" +
//         this.state.textValueBasetb +
//         "/" +
//         this.state.textValueMbatb +
//         "/" +
//         this.state.textValueHubtb +
//         "/" +
//         this.state.textValueEtctb +
//         "/" +
//         this.state.textValuePartNotb +
//         "/" +
//         this.state.textValueRevtb +
//         "/" +
//         this.state.selectedOptionPlarformdropdown +
//         "/" +
//         this.state.textValueLotnotb +
//         "/" +
//         this.state.textValueMotoroiltypetb +
//         "/" +
//         this.state.textValueLotMotb +
//         "/" +
//         this.state.textValueSuppliehubtb +
//         "/" +
//         this.state.textValueSuppliebasetb +
//         "/" +
//         this.state.textValueSuppliepcbtb +
//         "/" +
//         this.state.textValuePcblottb +
//         "/" +
//         this.state.textValueSupplieramptb +
//         "/" +
//         this.state.textValueRamplottb +
//         "/" +
//         this.state.textValueSuppliedivertertb +
//         "/" +
//         this.state.textValueDiverterlottb +
//         "/" +
//         this.state.textValueSupplieIDCStb +
//         "/" +
//         this.state.textValueIDCSlottb +
//         "/" +
//         this.state.textValueSHAwashingnotb +
//         "/" +
//         this.state.textValueOvenshanotb +
//         "/" +
//         this.state.textValueOvenMBAtb +
//         "/" +
//         this.state.textValueCo2mcnotb +
//         "/" +
//         this.state.textValueLinenotb +
//         "/" +
//         this.state.textValueResultunittb +
//         "/" +
//         this.state.textValuePurposetb +
//         "/" +
//         this.state.textValueProcessDescriptiontb +
//         "/" +
//         this.state.textValueReftb +
//         "/" +
//         this.state.textValueCommenttb +
//         "/" +
//         this.state.dateValueNMBsampletb +
//         "/" +
//         this.state.dateValueSamplesendtb +
//         "/" +
//         this.state.dateValueSamplesubtb +
//         "/" +
//         this.state.dateValueCommitshiptb +
//         "/" +
//         this.state.docNo[0].label +
//         "/" +
//         this.state.textValueTextBoxmail



//       );

//       // ... โค้ดอื่น ๆ ที่คุณมี

//       this.setState({
//         result: result.data.result,
//         isDisable: false,
//       });

//       return true; // ส่งค่า true เมื่อทุกอย่างสำเร็จ
//     } catch (error) {
//       console.error(error);

//       // ในกรณีที่เกิดข้อผิดพลาด คุณสามารถแสดงข้อความข้อผิดพลาดดังนี้
//       Swal.fire({
//         icon: "error",
//         title: "Error",
//         text: "Incomplete information,please try again ",
//       });

//       return false; // ส่งค่า false เมื่อเกิดข้อผิดพลาด
//     }
//   };
//   doGetData7 = async () => {
//     try {
//       const result = await httpClient.get(
//         server.SAMCLEANLINESSTESTNVR_URL +
//         "/" +
//         this.state.selectedOptionDropdown1 +
//         "/" +
//         this.state.textValueRegistertb +
//         "/" +
//         this.state.selectedOptionRadioButtons2 +
//         "/" +
//         this.state.textValueTextBox1 +
//         "/" +
//         this.state.textValueSamplenametb +
//         "/" +
//         this.state.textValueMaterialtb +
//         "/" +
//         this.state.textValueModelNametb +
//         "/" +
//         this.state.textValueDatecodetb +
//         "/" +
//         this.state.selectedOptionDropdown2 +
//         "/" +
//         this.state.textValueQtytb +
//         "/" +
//         this.state.tableData[6][0] +
//         "/" +
//         this.state.tableData[6][1] +
//         "/" +
//         this.state.tableData[6][2] +
//         "/" +
//         this.state.tableData[6][3] +
//         "/" +
//         this.state.textValueBasetb +
//         "/" +
//         this.state.textValueMbatb +
//         "/" +
//         this.state.textValueHubtb +
//         "/" +
//         this.state.textValueEtctb +
//         "/" +
//         this.state.textValuePartNotb +
//         "/" +
//         this.state.textValueRevtb +
//         "/" +
//         this.state.selectedOptionPlarformdropdown +
//         "/" +
//         this.state.textValueLotnotb +
//         "/" +
//         this.state.textValueMotoroiltypetb +
//         "/" +
//         this.state.textValueLotMotb +
//         "/" +
//         this.state.textValueSuppliehubtb +
//         "/" +
//         this.state.textValueSuppliebasetb +
//         "/" +
//         this.state.textValueSuppliepcbtb +
//         "/" +
//         this.state.textValuePcblottb +
//         "/" +
//         this.state.textValueSupplieramptb +
//         "/" +
//         this.state.textValueRamplottb +
//         "/" +
//         this.state.textValueSuppliedivertertb +
//         "/" +
//         this.state.textValueDiverterlottb +
//         "/" +
//         this.state.textValueSupplieIDCStb +
//         "/" +
//         this.state.textValueIDCSlottb +
//         "/" +
//         this.state.textValueSHAwashingnotb +
//         "/" +
//         this.state.textValueOvenshanotb +
//         "/" +
//         this.state.textValueOvenMBAtb +
//         "/" +
//         this.state.textValueCo2mcnotb +
//         "/" +
//         this.state.textValueLinenotb +
//         "/" +
//         this.state.textValueResultunittb +
//         "/" +
//         this.state.textValuePurposetb +
//         "/" +
//         this.state.textValueProcessDescriptiontb +
//         "/" +
//         this.state.textValueReftb +
//         "/" +
//         this.state.textValueCommenttb +
//         "/" +
//         this.state.dateValueNMBsampletb +
//         "/" +
//         this.state.dateValueSamplesendtb +
//         "/" +
//         this.state.dateValueSamplesubtb +
//         "/" +
//         this.state.dateValueCommitshiptb +
//         "/" +
//         this.state.docNo[0].label +
//         "/" +
//         this.state.textValueTextBoxmail



//       );

//       // ... โค้ดอื่น ๆ ที่คุณมี

//       this.setState({
//         result: result.data.result,
//         isDisable: false,
//       });

//       return true; // ส่งค่า true เมื่อทุกอย่างสำเร็จ
//     } catch (error) {
//       console.error(error);

//       // ในกรณีที่เกิดข้อผิดพลาด คุณสามารถแสดงข้อความข้อผิดพลาดดังนี้
//       Swal.fire({
//         icon: "error",
//         title: "Error",
//         text: "Incomplete information,please try again ",
//       });

//       return false; // ส่งค่า false เมื่อเกิดข้อผิดพลาด
//     }
//   };
//   doGetData8 = async () => {
//     try {
//       const result = await httpClient.get(
//         server.SAMCLEANLINESSTESTOutgasday0_URL +
//         "/" +
//         this.state.selectedOptionDropdown1 +
//         "/" +
//         this.state.textValueRegistertb +
//         "/" +
//         this.state.selectedOptionRadioButtons2 +
//         "/" +
//         this.state.textValueTextBox1 +
//         "/" +
//         this.state.textValueSamplenametb +
//         "/" +
//         this.state.textValueMaterialtb +
//         "/" +
//         this.state.textValueModelNametb +
//         "/" +
//         this.state.textValueDatecodetb +
//         "/" +
//         this.state.selectedOptionDropdown2 +
//         "/" +
//         this.state.textValueQtytb +
//         "/" +
//         this.state.tableData[7][0] +
//         "/" +
//         this.state.tableData[7][1] +
//         "/" +
//         this.state.tableData[7][2] +
//         "/" +
//         this.state.tableData[7][3] +
//         "/" +
//         this.state.textValueBasetb +
//         "/" +
//         this.state.textValueMbatb +
//         "/" +
//         this.state.textValueHubtb +
//         "/" +
//         this.state.textValueEtctb +
//         "/" +
//         this.state.textValuePartNotb +
//         "/" +
//         this.state.textValueRevtb +
//         "/" +
//         this.state.selectedOptionPlarformdropdown +
//         "/" +
//         this.state.textValueLotnotb +
//         "/" +
//         this.state.textValueMotoroiltypetb +
//         "/" +
//         this.state.textValueLotMotb +
//         "/" +
//         this.state.textValueSuppliehubtb +
//         "/" +
//         this.state.textValueSuppliebasetb +
//         "/" +
//         this.state.textValueSuppliepcbtb +
//         "/" +
//         this.state.textValuePcblottb +
//         "/" +
//         this.state.textValueSupplieramptb +
//         "/" +
//         this.state.textValueRamplottb +
//         "/" +
//         this.state.textValueSuppliedivertertb +
//         "/" +
//         this.state.textValueDiverterlottb +
//         "/" +
//         this.state.textValueSupplieIDCStb +
//         "/" +
//         this.state.textValueIDCSlottb +
//         "/" +
//         this.state.textValueSHAwashingnotb +
//         "/" +
//         this.state.textValueOvenshanotb +
//         "/" +
//         this.state.textValueOvenMBAtb +
//         "/" +
//         this.state.textValueCo2mcnotb +
//         "/" +
//         this.state.textValueLinenotb +
//         "/" +
//         this.state.textValueResultunittb +
//         "/" +
//         this.state.textValuePurposetb +
//         "/" +
//         this.state.textValueProcessDescriptiontb +
//         "/" +
//         this.state.textValueReftb +
//         "/" +
//         this.state.textValueCommenttb +
//         "/" +
//         this.state.dateValueNMBsampletb +
//         "/" +
//         this.state.dateValueSamplesendtb +
//         "/" +
//         this.state.dateValueSamplesubtb +
//         "/" +
//         this.state.dateValueCommitshiptb +
//         "/" +
//         this.state.docNo[0].label +
//         "/" +
//         this.state.textValueTextBoxmail



//       );

//       // ... โค้ดอื่น ๆ ที่คุณมี

//       this.setState({
//         result: result.data.result,
//         isDisable: false,
//       });

//       return true; // ส่งค่า true เมื่อทุกอย่างสำเร็จ
//     } catch (error) {
//       console.error(error);

//       // ในกรณีที่เกิดข้อผิดพลาด คุณสามารถแสดงข้อความข้อผิดพลาดดังนี้
//       Swal.fire({
//         icon: "error",
//         title: "Error",
//         text: "Incomplete information,please try again ",
//       });

//       return false; // ส่งค่า false เมื่อเกิดข้อผิดพลาด
//     }
//   };
//   doGetData9 = async () => {
//     try {
//       const result = await httpClient.get(
//         server.SAMCLEANLINESSTESTOutgasday14_URL +
//         "/" +
//         this.state.selectedOptionDropdown1 +
//         "/" +
//         this.state.textValueRegistertb +
//         "/" +
//         this.state.selectedOptionRadioButtons2 +
//         "/" +
//         this.state.textValueTextBox1 +
//         "/" +
//         this.state.textValueSamplenametb +
//         "/" +
//         this.state.textValueMaterialtb +
//         "/" +
//         this.state.textValueModelNametb +
//         "/" +
//         this.state.textValueDatecodetb +
//         "/" +
//         this.state.selectedOptionDropdown2 +
//         "/" +
//         this.state.textValueQtytb +
//         "/" +
//         this.state.tableData[8][0] +
//         "/" +
//         this.state.tableData[8][1] +
//         "/" +
//         this.state.tableData[8][2] +
//         "/" +
//         this.state.tableData[8][3] +
//         "/" +
//         this.state.textValueBasetb +
//         "/" +
//         this.state.textValueMbatb +
//         "/" +
//         this.state.textValueHubtb +
//         "/" +
//         this.state.textValueEtctb +
//         "/" +
//         this.state.textValuePartNotb +
//         "/" +
//         this.state.textValueRevtb +
//         "/" +
//         this.state.selectedOptionPlarformdropdown +
//         "/" +
//         this.state.textValueLotnotb +
//         "/" +
//         this.state.textValueMotoroiltypetb +
//         "/" +
//         this.state.textValueLotMotb +
//         "/" +
//         this.state.textValueSuppliehubtb +
//         "/" +
//         this.state.textValueSuppliebasetb +
//         "/" +
//         this.state.textValueSuppliepcbtb +
//         "/" +
//         this.state.textValuePcblottb +
//         "/" +
//         this.state.textValueSupplieramptb +
//         "/" +
//         this.state.textValueRamplottb +
//         "/" +
//         this.state.textValueSuppliedivertertb +
//         "/" +
//         this.state.textValueDiverterlottb +
//         "/" +
//         this.state.textValueSupplieIDCStb +
//         "/" +
//         this.state.textValueIDCSlottb +
//         "/" +
//         this.state.textValueSHAwashingnotb +
//         "/" +
//         this.state.textValueOvenshanotb +
//         "/" +
//         this.state.textValueOvenMBAtb +
//         "/" +
//         this.state.textValueCo2mcnotb +
//         "/" +
//         this.state.textValueLinenotb +
//         "/" +
//         this.state.textValueResultunittb +
//         "/" +
//         this.state.textValuePurposetb +
//         "/" +
//         this.state.textValueProcessDescriptiontb +
//         "/" +
//         this.state.textValueReftb +
//         "/" +
//         this.state.textValueCommenttb +
//         "/" +
//         this.state.dateValueNMBsampletb +
//         "/" +
//         this.state.dateValueSamplesendtb +
//         "/" +
//         this.state.dateValueSamplesubtb +
//         "/" +
//         this.state.dateValueCommitshiptb +
//         "/" +
//         this.state.docNo[0].label +
//         "/" +
//         this.state.textValueTextBoxmail



//       );

//       // ... โค้ดอื่น ๆ ที่คุณมี

//       this.setState({
//         result: result.data.result,
//         isDisable: false,
//       });

//       return true; // ส่งค่า true เมื่อทุกอย่างสำเร็จ
//     } catch (error) {
//       console.error(error);

//       // ในกรณีที่เกิดข้อผิดพลาด คุณสามารถแสดงข้อความข้อผิดพลาดดังนี้
//       Swal.fire({
//         icon: "error",
//         title: "Error",
//         text: "Incomplete information,please try again ",
//       });

//       return false; // ส่งค่า false เมื่อเกิดข้อผิดพลาด
//     }
//   };
//   doGetData10 = async () => {
//     try {
//       const result = await httpClient.get(
//         server.SAMCLEANLINESSTESTGhosttest_URL +
//         "/" +
//         this.state.selectedOptionDropdown1 +
//         "/" +
//         this.state.textValueRegistertb +
//         "/" +
//         this.state.selectedOptionRadioButtons2 +
//         "/" +
//         this.state.textValueTextBox1 +
//         "/" +
//         this.state.textValueSamplenametb +
//         "/" +
//         this.state.textValueMaterialtb +
//         "/" +
//         this.state.textValueModelNametb +
//         "/" +
//         this.state.textValueDatecodetb +
//         "/" +
//         this.state.selectedOptionDropdown2 +
//         "/" +
//         this.state.textValueQtytb +
//         "/" +
//         this.state.tableData[9][0] +
//         "/" +
//         this.state.tableData[9][1] +
//         "/" +
//         this.state.tableData[9][2] +
//         "/" +
//         this.state.tableData[9][3] +
//         "/" +
//         this.state.textValueBasetb +
//         "/" +
//         this.state.textValueMbatb +
//         "/" +
//         this.state.textValueHubtb +
//         "/" +
//         this.state.textValueEtctb +
//         "/" +
//         this.state.textValuePartNotb +
//         "/" +
//         this.state.textValueRevtb +
//         "/" +
//         this.state.selectedOptionPlarformdropdown +
//         "/" +
//         this.state.textValueLotnotb +
//         "/" +
//         this.state.textValueMotoroiltypetb +
//         "/" +
//         this.state.textValueLotMotb +
//         "/" +
//         this.state.textValueSuppliehubtb +
//         "/" +
//         this.state.textValueSuppliebasetb +
//         "/" +
//         this.state.textValueSuppliepcbtb +
//         "/" +
//         this.state.textValuePcblottb +
//         "/" +
//         this.state.textValueSupplieramptb +
//         "/" +
//         this.state.textValueRamplottb +
//         "/" +
//         this.state.textValueSuppliedivertertb +
//         "/" +
//         this.state.textValueDiverterlottb +
//         "/" +
//         this.state.textValueSupplieIDCStb +
//         "/" +
//         this.state.textValueIDCSlottb +
//         "/" +
//         this.state.textValueSHAwashingnotb +
//         "/" +
//         this.state.textValueOvenshanotb +
//         "/" +
//         this.state.textValueOvenMBAtb +
//         "/" +
//         this.state.textValueCo2mcnotb +
//         "/" +
//         this.state.textValueLinenotb +
//         "/" +
//         this.state.textValueResultunittb +
//         "/" +
//         this.state.textValuePurposetb +
//         "/" +
//         this.state.textValueProcessDescriptiontb +
//         "/" +
//         this.state.textValueReftb +
//         "/" +
//         this.state.textValueCommenttb +
//         "/" +
//         this.state.dateValueNMBsampletb +
//         "/" +
//         this.state.dateValueSamplesendtb +
//         "/" +
//         this.state.dateValueSamplesubtb +
//         "/" +
//         this.state.dateValueCommitshiptb +
//         "/" +
//         this.state.docNo[0].label +
//         "/" +
//         this.state.textValueTextBoxmail



//       );

//       // ... โค้ดอื่น ๆ ที่คุณมี

//       this.setState({
//         result: result.data.result,
//         isDisable: false,
//       });

//       return true; // ส่งค่า true เมื่อทุกอย่างสำเร็จ
//     } catch (error) {
//       console.error(error);

//       // ในกรณีที่เกิดข้อผิดพลาด คุณสามารถแสดงข้อความข้อผิดพลาดดังนี้
//       Swal.fire({
//         icon: "error",
//         title: "Error",
//         text: "Incomplete information,please try again ",
//       });

//       return false; // ส่งค่า false เมื่อเกิดข้อผิดพลาด
//     }
//   };
//   doGetData11 = async () => {
//     try {
//       const result = await httpClient.get(
//         server.SAMCLEANLINESSTESTDynamicdiskghost_URL +
//         "/" +
//         this.state.selectedOptionDropdown1 +
//         "/" +
//         this.state.textValueRegistertb +
//         "/" +
//         this.state.selectedOptionRadioButtons2 +
//         "/" +
//         this.state.textValueTextBox1 +
//         "/" +
//         this.state.textValueSamplenametb +
//         "/" +
//         this.state.textValueMaterialtb +
//         "/" +
//         this.state.textValueModelNametb +
//         "/" +
//         this.state.textValueDatecodetb +
//         "/" +
//         this.state.selectedOptionDropdown2 +
//         "/" +
//         this.state.textValueQtytb +
//         "/" +
//         this.state.tableData[10][0] +
//         "/" +
//         this.state.tableData[10][1] +
//         "/" +
//         this.state.tableData[10][2] +
//         "/" +
//         this.state.tableData[10][3] +
//         "/" +
//         this.state.textValueBasetb +
//         "/" +
//         this.state.textValueMbatb +
//         "/" +
//         this.state.textValueHubtb +
//         "/" +
//         this.state.textValueEtctb +
//         "/" +
//         this.state.textValuePartNotb +
//         "/" +
//         this.state.textValueRevtb +
//         "/" +
//         this.state.selectedOptionPlarformdropdown +
//         "/" +
//         this.state.textValueLotnotb +
//         "/" +
//         this.state.textValueMotoroiltypetb +
//         "/" +
//         this.state.textValueLotMotb +
//         "/" +
//         this.state.textValueSuppliehubtb +
//         "/" +
//         this.state.textValueSuppliebasetb +
//         "/" +
//         this.state.textValueSuppliepcbtb +
//         "/" +
//         this.state.textValuePcblottb +
//         "/" +
//         this.state.textValueSupplieramptb +
//         "/" +
//         this.state.textValueRamplottb +
//         "/" +
//         this.state.textValueSuppliedivertertb +
//         "/" +
//         this.state.textValueDiverterlottb +
//         "/" +
//         this.state.textValueSupplieIDCStb +
//         "/" +
//         this.state.textValueIDCSlottb +
//         "/" +
//         this.state.textValueSHAwashingnotb +
//         "/" +
//         this.state.textValueOvenshanotb +
//         "/" +
//         this.state.textValueOvenMBAtb +
//         "/" +
//         this.state.textValueCo2mcnotb +
//         "/" +
//         this.state.textValueLinenotb +
//         "/" +
//         this.state.textValueResultunittb +
//         "/" +
//         this.state.textValuePurposetb +
//         "/" +
//         this.state.textValueProcessDescriptiontb +
//         "/" +
//         this.state.textValueReftb +
//         "/" +
//         this.state.textValueCommenttb +
//         "/" +
//         this.state.dateValueNMBsampletb +
//         "/" +
//         this.state.dateValueSamplesendtb +
//         "/" +
//         this.state.dateValueSamplesubtb +
//         "/" +
//         this.state.dateValueCommitshiptb +
//         "/" +
//         this.state.docNo[0].label +
//         "/" +
//         this.state.textValueTextBoxmail



//       );

//       // ... โค้ดอื่น ๆ ที่คุณมี

//       this.setState({
//         result: result.data.result,
//         isDisable: false,
//       });

//       return true; // ส่งค่า true เมื่อทุกอย่างสำเร็จ
//     } catch (error) {
//       console.error(error);

//       // ในกรณีที่เกิดข้อผิดพลาด คุณสามารถแสดงข้อความข้อผิดพลาดดังนี้
//       Swal.fire({
//         icon: "error",
//         title: "Error",
//         text: "Incomplete information,please try again ",
//       });

//       return false; // ส่งค่า false เมื่อเกิดข้อผิดพลาด
//     }
//   };
//   doGetData12 = async () => {
//     try {
//       const result = await httpClient.get(
//         server.SAMCLEANLINESSTESTExtractable_URL +
//         "/" +
//         this.state.selectedOptionDropdown1 +
//         "/" +
//         this.state.textValueRegistertb +
//         "/" +
//         this.state.selectedOptionRadioButtons2 +
//         "/" +
//         this.state.textValueTextBox1 +
//         "/" +
//         this.state.textValueSamplenametb +
//         "/" +
//         this.state.textValueMaterialtb +
//         "/" +
//         this.state.textValueModelNametb +
//         "/" +
//         this.state.textValueDatecodetb +
//         "/" +
//         this.state.selectedOptionDropdown2 +
//         "/" +
//         this.state.textValueQtytb +
//         "/" +
//         this.state.tableData[11][0] +
//         "/" +
//         this.state.tableData[11][1] +
//         "/" +
//         this.state.tableData[11][2] +
//         "/" +
//         this.state.tableData[11][3] +
//         "/" +
//         this.state.textValueBasetb +
//         "/" +
//         this.state.textValueMbatb +
//         "/" +
//         this.state.textValueHubtb +
//         "/" +
//         this.state.textValueEtctb +
//         "/" +
//         this.state.textValuePartNotb +
//         "/" +
//         this.state.textValueRevtb +
//         "/" +
//         this.state.selectedOptionPlarformdropdown +
//         "/" +
//         this.state.textValueLotnotb +
//         "/" +
//         this.state.textValueMotoroiltypetb +
//         "/" +
//         this.state.textValueLotMotb +
//         "/" +
//         this.state.textValueSuppliehubtb +
//         "/" +
//         this.state.textValueSuppliebasetb +
//         "/" +
//         this.state.textValueSuppliepcbtb +
//         "/" +
//         this.state.textValuePcblottb +
//         "/" +
//         this.state.textValueSupplieramptb +
//         "/" +
//         this.state.textValueRamplottb +
//         "/" +
//         this.state.textValueSuppliedivertertb +
//         "/" +
//         this.state.textValueDiverterlottb +
//         "/" +
//         this.state.textValueSupplieIDCStb +
//         "/" +
//         this.state.textValueIDCSlottb +
//         "/" +
//         this.state.textValueSHAwashingnotb +
//         "/" +
//         this.state.textValueOvenshanotb +
//         "/" +
//         this.state.textValueOvenMBAtb +
//         "/" +
//         this.state.textValueCo2mcnotb +
//         "/" +
//         this.state.textValueLinenotb +
//         "/" +
//         this.state.textValueResultunittb +
//         "/" +
//         this.state.textValuePurposetb +
//         "/" +
//         this.state.textValueProcessDescriptiontb +
//         "/" +
//         this.state.textValueReftb +
//         "/" +
//         this.state.textValueCommenttb +
//         "/" +
//         this.state.dateValueNMBsampletb +
//         "/" +
//         this.state.dateValueSamplesendtb +
//         "/" +
//         this.state.dateValueSamplesubtb +
//         "/" +
//         this.state.dateValueCommitshiptb +
//         "/" +
//         this.state.docNo[0].label +
//         "/" +
//         this.state.textValueTextBoxmail



//       );

//       // ... โค้ดอื่น ๆ ที่คุณมี

//       this.setState({
//         result: result.data.result,
//         isDisable: false,
//       });

//       return true; // ส่งค่า true เมื่อทุกอย่างสำเร็จ
//     } catch (error) {
//       console.error(error);

//       // ในกรณีที่เกิดข้อผิดพลาด คุณสามารถแสดงข้อความข้อผิดพลาดดังนี้
//       Swal.fire({
//         icon: "error",
//         title: "Error",
//         text: "Incomplete information,please try again ",
//       });

//       return false; // ส่งค่า false เมื่อเกิดข้อผิดพลาด
//     }
//   };
//   doGetData13 = async () => {
//     try {
//       const result = await httpClient.get(
//         server.SAMCLEANLINESSTESTCorrosion_URL +
//         "/" +
//         this.state.selectedOptionDropdown1 +
//         "/" +
//         this.state.textValueRegistertb +
//         "/" +
//         this.state.selectedOptionRadioButtons2 +
//         "/" +
//         this.state.textValueTextBox1 +
//         "/" +
//         this.state.textValueSamplenametb +
//         "/" +
//         this.state.textValueMaterialtb +
//         "/" +
//         this.state.textValueModelNametb +
//         "/" +
//         this.state.textValueDatecodetb +
//         "/" +
//         this.state.selectedOptionDropdown2 +
//         "/" +
//         this.state.textValueQtytb +
//         "/" +
//         this.state.tableData[12][0] +
//         "/" +
//         this.state.tableData[12][1] +
//         "/" +
//         this.state.tableData[12][2] +
//         "/" +
//         this.state.tableData[12][3] +
//         "/" +
//         this.state.textValueBasetb +
//         "/" +
//         this.state.textValueMbatb +
//         "/" +
//         this.state.textValueHubtb +
//         "/" +
//         this.state.textValueEtctb +
//         "/" +
//         this.state.textValuePartNotb +
//         "/" +
//         this.state.textValueRevtb +
//         "/" +
//         this.state.selectedOptionPlarformdropdown +
//         "/" +
//         this.state.textValueLotnotb +
//         "/" +
//         this.state.textValueMotoroiltypetb +
//         "/" +
//         this.state.textValueLotMotb +
//         "/" +
//         this.state.textValueSuppliehubtb +
//         "/" +
//         this.state.textValueSuppliebasetb +
//         "/" +
//         this.state.textValueSuppliepcbtb +
//         "/" +
//         this.state.textValuePcblottb +
//         "/" +
//         this.state.textValueSupplieramptb +
//         "/" +
//         this.state.textValueRamplottb +
//         "/" +
//         this.state.textValueSuppliedivertertb +
//         "/" +
//         this.state.textValueDiverterlottb +
//         "/" +
//         this.state.textValueSupplieIDCStb +
//         "/" +
//         this.state.textValueIDCSlottb +
//         "/" +
//         this.state.textValueSHAwashingnotb +
//         "/" +
//         this.state.textValueOvenshanotb +
//         "/" +
//         this.state.textValueOvenMBAtb +
//         "/" +
//         this.state.textValueCo2mcnotb +
//         "/" +
//         this.state.textValueLinenotb +
//         "/" +
//         this.state.textValueResultunittb +
//         "/" +
//         this.state.textValuePurposetb +
//         "/" +
//         this.state.textValueProcessDescriptiontb +
//         "/" +
//         this.state.textValueReftb +
//         "/" +
//         this.state.textValueCommenttb +
//         "/" +
//         this.state.dateValueNMBsampletb +
//         "/" +
//         this.state.dateValueSamplesendtb +
//         "/" +
//         this.state.dateValueSamplesubtb +
//         "/" +
//         this.state.dateValueCommitshiptb +
//         "/" +
//         this.state.docNo[0].label +
//         "/" +
//         this.state.textValueTextBoxmail



//       );

//       // ... โค้ดอื่น ๆ ที่คุณมี

//       this.setState({
//         result: result.data.result,
//         isDisable: false,
//       });

//       return true; // ส่งค่า true เมื่อทุกอย่างสำเร็จ
//     } catch (error) {
//       console.error(error);

//       // ในกรณีที่เกิดข้อผิดพลาด คุณสามารถแสดงข้อความข้อผิดพลาดดังนี้
//       Swal.fire({
//         icon: "error",
//         title: "Error",
//         text: "Incomplete information,please try again ",
//       });

//       return false; // ส่งค่า false เมื่อเกิดข้อผิดพลาด
//     }
//   };
//   doGetData14 = async () => {
//     try {
//       const result = await httpClient.get(
//         server.SAMCLEANLINESSTESTParticlecount_URL +
//         "/" +
//         this.state.selectedOptionDropdown1 +
//         "/" +
//         this.state.textValueRegistertb +
//         "/" +
//         this.state.selectedOptionRadioButtons2 +
//         "/" +
//         this.state.textValueTextBox1 +
//         "/" +
//         this.state.textValueSamplenametb +
//         "/" +
//         this.state.textValueMaterialtb +
//         "/" +
//         this.state.textValueModelNametb +
//         "/" +
//         this.state.textValueDatecodetb +
//         "/" +
//         this.state.selectedOptionDropdown2 +
//         "/" +
//         this.state.textValueQtytb +
//         "/" +
//         this.state.tableData[13][0] +
//         "/" +
//         this.state.tableData[13][1] +
//         "/" +
//         this.state.tableData[13][2] +
//         "/" +
//         this.state.tableData[13][3] +
//         "/" +
//         this.state.textValueBasetb +
//         "/" +
//         this.state.textValueMbatb +
//         "/" +
//         this.state.textValueHubtb +
//         "/" +
//         this.state.textValueEtctb +
//         "/" +
//         this.state.textValuePartNotb +
//         "/" +
//         this.state.textValueRevtb +
//         "/" +
//         this.state.selectedOptionPlarformdropdown +
//         "/" +
//         this.state.textValueLotnotb +
//         "/" +
//         this.state.textValueMotoroiltypetb +
//         "/" +
//         this.state.textValueLotMotb +
//         "/" +
//         this.state.textValueSuppliehubtb +
//         "/" +
//         this.state.textValueSuppliebasetb +
//         "/" +
//         this.state.textValueSuppliepcbtb +
//         "/" +
//         this.state.textValuePcblottb +
//         "/" +
//         this.state.textValueSupplieramptb +
//         "/" +
//         this.state.textValueRamplottb +
//         "/" +
//         this.state.textValueSuppliedivertertb +
//         "/" +
//         this.state.textValueDiverterlottb +
//         "/" +
//         this.state.textValueSupplieIDCStb +
//         "/" +
//         this.state.textValueIDCSlottb +
//         "/" +
//         this.state.textValueSHAwashingnotb +
//         "/" +
//         this.state.textValueOvenshanotb +
//         "/" +
//         this.state.textValueOvenMBAtb +
//         "/" +
//         this.state.textValueCo2mcnotb +
//         "/" +
//         this.state.textValueLinenotb +
//         "/" +
//         this.state.textValueResultunittb +
//         "/" +
//         this.state.textValuePurposetb +
//         "/" +
//         this.state.textValueProcessDescriptiontb +
//         "/" +
//         this.state.textValueReftb +
//         "/" +
//         this.state.textValueCommenttb +
//         "/" +
//         this.state.dateValueNMBsampletb +
//         "/" +
//         this.state.dateValueSamplesendtb +
//         "/" +
//         this.state.dateValueSamplesubtb +
//         "/" +
//         this.state.dateValueCommitshiptb +
//         "/" +
//         this.state.docNo[0].label +
//         "/" +
//         this.state.textValueTextBoxmail



//       );

//       // ... โค้ดอื่น ๆ ที่คุณมี

//       this.setState({
//         result: result.data.result,
//         isDisable: false,
//       });

//       return true; // ส่งค่า true เมื่อทุกอย่างสำเร็จ
//     } catch (error) {
//       console.error(error);

//       // ในกรณีที่เกิดข้อผิดพลาด คุณสามารถแสดงข้อความข้อผิดพลาดดังนี้
//       Swal.fire({
//         icon: "error",
//         title: "Error",
//         text: "Incomplete information,please try again ",
//       });

//       return false; // ส่งค่า false เมื่อเกิดข้อผิดพลาด
//     }
//   };
















//   render() {
//     const {
//       selectedOptionRadioButtons1,
//       selectedOptionRadioButtonsdivision,
//       selectedOptionDropdown1,
//       textValueRegistertb,
//       selectedOptionRadioButtons2,
//       textValueSamplenametb,
//       textValueMaterialtb,
//       textValueModelNametb,
//       textValueDatecodetb,
//       selectedOptionDropdown2,
//       textValueQtytb,
//       textValueBasetb,
//       textValueMbatb,
//       textValueHubtb,
//       textValueEtctb,
//       textValuePartNotb,
//       textValueRevtb,
//       selectedOptionPlarformdropdown,
//       textValueLotnotb,
//       textValueMotoroiltypetb,
//       textValueLotMotb,
//       textValueSuppliebasetb,
//       textValueSuppliehubtb,
//       textValueSuppliepcbtb,
//       textValuePcblottb,
//       textValueSupplieramptb,
//       textValueRamplottb,
//       textValueSuppliedivertertb,
//       textValueDiverterlottb,
//       textValueSupplieIDCStb,
//       textValueIDCSlottb,
//       textValueSHAwashingnotb,
//       textValueCo2mcnotb,
//       textValueResultunittb,
//       textValuePurposetb,
//       textValueReftb,
//       textValueCommenttb,
//       textValueLinenotb,
//       dateValueNMBsampletb,
//       dateValueSamplesendtb,
//       dateValueSamplesubtb,
//       dateValueCommitshiptb,
//       textValueOvenshanotb,
//       textValueOvenMBAtb,
//       textValueProcessDescriptiontb,
//       textValueTextBox1,
//       textValueTextBoxmail,
//       sendDataToBackend1,
//       docNo,
//     } = this.state;


//     return (
//       <div className="content" style={{ paddingTop: 50 }}>
//         <div className="card card-primary card-outline">
//           <div className="card-header">
//             <section className="content-header">
//               <div className="container-fluid">
//                 <div className="row mb-2">
//                   <div className="col-5"></div>
//                   <div
//                     className="col-sm-4"
//                     style={{
//                       fontFamily: "Times New Roman",
//                       textDecoration: "underline",
//                     }}
//                   >
//                     <h1>Analysis request</h1>
//                   </div>
//                   <div className="col-sm-3">
//                     <ol className="breadcrumb float-sm-right">
//                       <li
//                         className="breadcrumb-item"
//                         style={{ fontFamily: "Times New Roman" }}
//                       >
//                         <a href="/Home">Home</a>
//                       </li>
//                       <li className="breadcrumb-item active">
//                         Analysis request
//                       </li>
//                     </ol>
//                   </div>
//                 </div>
//               </div>
//             </section>
//           </div>
//           <div className="row-mb-12" style={{ paddingTop: 50 }}>
//             <div className="row">
//               <div className="col-1"></div>
//               <div className="col-1" style={{ fontFamily: "Times New Roman" }}>
//                 <h5>No.</h5>
//               </div>
//               <h5 style={{ fontFamily: "Times New Roman", fontSize: 18 }}>
//                 {selectedOptionDropdown1}
//               </h5>
//               <h5 style={{ fontFamily: "Times New Roman", fontSize: 18 }}>{formattedDate}</h5>
              

//               {this.state.docNo.map((option, index) => (
//                 <h5
//                   style={{ fontFamily: "Times New Roman", fontSize: 18 }}
//                   key={index}
//                 >
//                   {option.label}
//                 </h5>
//               ))}
//             </div>

//             <div className="row">
//               <div className="col-1"></div>
//               <div
//                 className="col-3"
//                 style={{
//                   fontFamily: "Times New Roman",
//                   paddingTop: 50,
//                   fontWeight: "bold",
//                   textDecoration: "underline",
//                 }}
//               >
//                 <h4>Analysis Request</h4>
//               </div>
//               <div className="col-1"></div>
//             </div>
//           </div>
//           <div className="col-12" style={{ paddingTop: 50 }}>
//             <div className="row">
//               <div className="col-1"></div>
//               <div className="col-1" style={{ fontFamily: "Times New Roman" }}>
//                 <h5>Factory</h5>
//               </div>
//               <div className="col-1" style={{ fontFamily: "Times New Roman" }}>
//                 <RadioButtons1
//                   handleOptionChangeRadioButtons1={
//                     this.handleOptionChangeRadioButtons1
//                   }
//                   selectedOptionRadioButtons1={selectedOptionRadioButtons1}
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-1"></div>
//               <div className="col-1" style={{ fontFamily: "Times New Roman" }}>
//                 <h5>Division : </h5>
//               </div>
//               <div className="col-3" style={{ fontFamily: "Times New Roman" }}>
//                 <RadioButtonsdivision
//                   handleOptionChangeRadioButtonsdivision={
//                     this.handleOptionChangeRadioButtonsdivision
//                   }
//                   selectedOptionRadioButtonsdivision={
//                     selectedOptionRadioButtonsdivision
//                   }
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div className="col-1" style={{ fontFamily: "Times New Roman" }}>
//                 <h5>Section : </h5>
//               </div>
//               <div
//                 className="col-2"
//                 style={{ fontFamily: "Times New Roman", fontSize: 18 }}
//               >
//                 <Dropdown1
//                   handleOptionChangeDropdown1={this.handleOptionChangeDropdown1}
//                   selectedOptionDropdown1={selectedOptionDropdown1}
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-1"></div>
//               <div className="col-1" style={{ fontFamily: "Times New Roman" }}>
//                 <h5>Requester : </h5>
//               </div>
//               <div
//                 className="col-2"
//                 style={{ fontFamily: "Times New Roman", color: "blue" }}
//               >
//                 <Registertb
//                   handleTextChangeRegistertb={this.handleTextChangeRegistertb}
//                   textValueRegistertb={textValueRegistertb}
//                 />
//               </div>
//               <div className="col-1"></div>
//               <div className="col-1.5" style={{ fontFamily: "Times New Roman" }}>
//                 <h5> Mail Requester : </h5>
//               </div>
//               <div
//                 className="col-2"
//                 style={{ fontFamily: "Times New Roman", color: "blue" }}
//               >
//                 <TextBoxmail
//                   handleTextChangeTextBoxmail={this.handleTextChangeTextBoxmail}
//                   textValueTextBoxmail={textValueTextBoxmail}
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-1"></div>
//               <div
//                 className="col-1"
//                 style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
//               >
//                 <h5>Sample : </h5>
//               </div>
//               <div
//                 className="col-2"
//                 style={{
//                   fontFamily: "Times New Roman",
//                   color: "Red",
//                   paddingTop: 10,
//                 }}
//               >
//                 <h5>Special</h5>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div
//                 className="col-1.5"
//                 style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
//               >
//                 <h5>Data test for : </h5>
//               </div>
//               <div
//                 className="col-2"
//                 style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
//               >
//                 <RadioButtons2
//                   handleOptionChangeRadioButtons2={
//                     this.handleOptionChangeRadioButtons2
//                   }
//                   selectedOptionRadioButtons2={selectedOptionRadioButtons2}
//                 />
//               </div>
//               <div style={{ fontFamily: "Times New Roman", paddingTop: 10 }}>
//                 <TextBox1
//                   handleTextChangeTextBox1={this.handleTextChangeTextBox1}
//                   textValueTextBox1={textValueTextBox1}
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div
//                 className="col-1.5"
//                 style={{ fontFamily: "Times New Roman", paddingTop: 20 }}
//               >
//                 <h5>Sample Name : </h5>
//               </div>
//               <div
//                 className="col-2"
//                 style={{
//                   fontFamily: "Times New Roman",
//                   color: "blue",
//                   paddingTop: 20,
//                 }}
//               >
//                 <Samplenametb
//                   handleTextChangeSamplenametb={
//                     this.handleTextChangeSamplenametb
//                   }
//                   textValueSamplenametb={textValueSamplenametb}
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div
//                 className="col-1.5"
//                 style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
//               >
//                 <h5>Material :   </h5>
//               </div>
//               <div
//                 className="col-2"
//                 style={{
//                   fontFamily: "Times New Roman",
//                   color: "blue",
//                   paddingTop: 10,
//                 }}
//               >
//                 <Materialtb
//                   handleTextChangeMaterialtb={this.handleTextChangeMaterialtb}
//                   textValueMaterialtb={textValueMaterialtb}
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div
//                 className="col-1.5"
//                 style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
//               >
//                 <h5>Model Name : </h5>
//               </div>
//               <div
//                 className="col-2"
//                 style={{
//                   fontFamily: "Times New Roman",
//                   color: "blue",
//                   paddingTop: 10,
//                 }}
//               >
//                 <ModelNametb
//                   handleTextChangeModelNametb={this.handleTextChangeModelNametb}
//                   textValueModelNametb={textValueModelNametb}
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div
//                 className="col-1"
//                 style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
//               >
//                 <h5>Date code : </h5>
//               </div>
//               <div
//                 className="col-2"
//                 style={{
//                   fontFamily: "Times New Roman",
//                   color: "blue",
//                   paddingTop: 10,
//                 }}
//               >
//                 <Datecodetb
//                   handleTextChangeDatecodetb={this.handleTextChangeDatecodetb}
//                   textValueDatecodetb={textValueDatecodetb}
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div
//                 className="col-1"
//                 style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
//               >
//                 <h5>Customer : </h5>
//               </div>
//               <div
//                 className="col-2"
//                 style={{
//                   fontFamily: "Times New Roman",
//                   paddingTop: 10,
//                   fontSize: 18,
//                 }}
//               >
//                 <Dropdown2
//                   handleOptionChangeDropdown2={this.handleOptionChangeDropdown2}
//                   selectedOptionDropdown2={selectedOptionDropdown2}
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div
//                 className="col-1"
//                 style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
//               >
//                 <h5>Qty. : </h5>
//               </div>
//               <div
//                 className="col-2"
//                 style={{
//                   fontFamily: "Times New Roman",
//                   color: "blue",
//                   paddingTop: 10,
//                 }}
//               >
//                 <Qtytb
//                   handleTextChangeQtytb={this.handleTextChangeQtytb}
//                   textValueQtytb={textValueQtytb}
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div
//                 className="col-1"
//                 style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
//               >
//                 <h5>Test Team : </h5>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div
//                 className="col-10"
//                 style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
//               >
//                 <Table onTableDataChange={this.handleTableDataChange} />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div
//                 className="col-2"
//                 style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
//               >
//                 <h5>Surface Area (cm^2)</h5>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div
//                 className="col-1"
//                 style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
//               >
//                 <h5> Base. : </h5>
//               </div>
//               <div
//                 className="col-2"
//                 style={{
//                   fontFamily: "Times New Roman",
//                   color: "blue",
//                   paddingTop: 10,
//                 }}
//               >
//                 <Basetb
//                   handleTextChangeBasetb={this.handleTextChangeBasetb}
//                   textValueBasetb={textValueBasetb}
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div
//                 className="col-1"
//                 style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
//               >
//                 <h5> MBA. : </h5>
//               </div>
//               <div
//                 className="col-2"
//                 style={{
//                   fontFamily: "Times New Roman",
//                   color: "blue",
//                   paddingTop: 10,
//                 }}
//               >
//                 <Mbatb
//                   handleTextChangeMbatb={this.handleTextChangeMbatb}
//                   textValueMbatb={textValueMbatb}
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div
//                 className="col-1"
//                 style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
//               >
//                 <h5> Hub : </h5>
//               </div>
//               <div
//                 className="col-2"
//                 style={{
//                   fontFamily: "Times New Roman",
//                   color: "blue",
//                   paddingTop: 10,
//                 }}
//               >
//                 <Hubtb
//                   handleTextChangeHubtb={this.handleTextChangeHubtb}
//                   textValueHubtb={textValueHubtb}
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div
//                 className="col-1"
//                 style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
//               >
//                 <h5> etc.: </h5>
//               </div>
//               <div
//                 className="col-2"
//                 style={{
//                   fontFamily: "Times New Roman",
//                   color: "blue",
//                   paddingTop: 10,
//                 }}
//               >
//                 <Etctb
//                   handleTextChangeEtctb={this.handleTextChangeEtctb}
//                   textValueEtctb={textValueEtctb}
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div
//                 className="col-2"
//                 style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
//               >
//                 <h5>Lot no.</h5>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div
//                 className="col-1"
//                 style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
//               >
//                 <h5> Part no. :</h5>
//               </div>
//               <div
//                 className="col-2"
//                 style={{
//                   fontFamily: "Times New Roman",
//                   color: "blue",
//                   paddingTop: 10,
//                 }}
//               >
//                 <PartNotb
//                   handleTextChangePartNotb={this.handleTextChangePartNotb}
//                   textValuePartNotb={textValuePartNotb}
//                 />
//               </div>
//               <div
//                 className="col-1"
//                 style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
//               >
//                 <h5> Rev. :</h5>
//               </div>
//               <div
//                 className="col-1"
//                 style={{
//                   fontFamily: "Times New Roman",
//                   color: "blue",
//                   paddingTop: 10,
//                 }}
//               >
//                 <Revtb
//                   handleTextChangeRevtb={this.handleTextChangeRevtb}
//                   textValueRevtb={textValueRevtb}
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div
//                 className="col-1"
//                 style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
//               >
//                 <h5> Plat form . :</h5>
//               </div>
//               <div
//                 className="col-2"
//                 style={{
//                   fontFamily: "Times New Roman",
//                   paddingTop: 10,
//                   fontsize: 20,
//                 }}
//               >
//                 <Plarformdropdown
//                   handleOptionChangePlarformdropdown={
//                     this.handleOptionChangePlarformdropdown
//                   }
//                   selectedOptionPlarformdropdown={
//                     selectedOptionPlarformdropdown
//                   }
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div
//                 className="col-1"
//                 style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
//               >
//                 <h5> Lot QA no.: </h5>
//               </div>
//               <div
//                 className="col-2"
//                 style={{
//                   fontFamily: "Times New Roman",
//                   color: "blue",
//                   paddingTop: 10,
//                 }}
//               >
//                 <Lotnotb
//                   handleTextChangeLotnotb={this.handleTextChangeLotnotb}
//                   textValueLotnotb={textValueLotnotb}
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div
//                 className="col-1.5"
//                 style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
//               >
//                 <h5> Motor Oil Type.: </h5>
//               </div>
//               <div
//                 className="col-2"
//                 style={{
//                   fontFamily: "Times New Roman",
//                   color: "blue",
//                   paddingTop: 10,
//                 }}
//               >
//                 <Motoroiltypetb
//                   handleTextChangeMotoroiltypetb={
//                     this.handleTextChangeMotoroiltypetb
//                   }
//                   textValueMotoroiltypetb={textValueMotoroiltypetb}
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div
//                 className="col-1.5"
//                 style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
//               >
//                 <h5> Lot MO no.: </h5>
//               </div>
//               <div
//                 className="col-2"
//                 style={{
//                   fontFamily: "Times New Roman",
//                   color: "blue",
//                   paddingTop: 10,
//                 }}
//               >
//                 <LotMotb
//                   handleTextChangeLotMotb={this.handleTextChangeLotMotb}
//                   textValueLotMotb={textValueLotMotb}
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div
//                 className="col-1"
//                 style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
//               >
//                 <h5> Supplier hub : </h5>
//               </div>
//               <div
//                 className="col-2"
//                 style={{
//                   fontFamily: "Times New Roman",
//                   color: "blue",
//                   paddingTop: 10,
//                 }}
//               >
//                 <Suppliehubtb
//                   handleTextChangeSuppliehubtb={
//                     this.handleTextChangeSuppliehubtb
//                   }
//                   textValueSuppliehubtb={textValueSuppliehubtb}
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div
//                 className="col-1"
//                 style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
//               >
//                 <h5> Supplier base: </h5>
//               </div>
//               <div
//                 className="col-2"
//                 style={{
//                   fontFamily: "Times New Roman",
//                   color: "blue",
//                   paddingTop: 10,
//                 }}
//               >
//                 <Suppliebasetb
//                   handleTextChangeSuppliebasetb={
//                     this.handleTextChangeSuppliebasetb
//                   }
//                   textValueSuppliebasetb={textValueSuppliebasetb}
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div
//                 className="col-1"
//                 style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
//               >
//                 <h5> Supplier PCB :</h5>
//               </div>
//               <div
//                 className="col-2"
//                 style={{
//                   fontFamily: "Times New Roman",
//                   color: "blue",
//                   paddingTop: 10,
//                 }}
//               >
//                 <Suppliepcbtb
//                   handleTextChangeSuppliepcbtb={
//                     this.handleTextChangeSuppliepcbtb
//                   }
//                   textValueSuppliepcbtb={textValueSuppliepcbtb}
//                 />
//               </div>
//               <div
//                 className="col-1"
//                 style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
//               >
//                 <h5> PCB lot no.:</h5>
//               </div>
//               <div
//                 className="col-1"
//                 style={{
//                   fontFamily: "Times New Roman",
//                   color: "blue",
//                   paddingTop: 10,
//                 }}
//               >
//                 <Pcblottb
//                   handleTextChangePcblottb={this.handleTextChangePcblottb}
//                   textValuePcblottb={textValuePcblottb}
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div
//                 className="col-1"
//                 style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
//               >
//                 <h5> Supplier ramp :</h5>
//               </div>
//               <div
//                 className="col-2"
//                 style={{
//                   fontFamily: "Times New Roman",
//                   color: "blue",
//                   paddingTop: 10,
//                 }}
//               >
//                 <Supplieramptb
//                   handleTextChangeSupplieramptb={
//                     this.handleTextChangeSupplieramptb
//                   }
//                   textValueSupplieramptb={textValueSupplieramptb}
//                 />
//               </div>
//               <div
//                 className="col-1"
//                 style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
//               >
//                 <h5> Ramp lot no.:</h5>
//               </div>
//               <div
//                 className="col-1"
//                 style={{
//                   fontFamily: "Times New Roman",
//                   color: "blue",
//                   paddingTop: 10,
//                 }}
//               >
//                 <Ramplottb
//                   handleTextChangeRamplottb={this.handleTextChangeRamplottb}
//                   textValueRamplottb={textValueRamplottb}
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div
//                 className="col-1"
//                 style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
//               >
//                 <h5> Supplier diverter:</h5>
//               </div>
//               <div
//                 className="col-2"
//                 style={{
//                   fontFamily: "Times New Roman",
//                   color: "blue",
//                   paddingTop: 10,
//                 }}
//               >
//                 <Suppliedivertertb
//                   handleTextChangeSuppliedivertertb={
//                     this.handleTextChangeSuppliedivertertb
//                   }
//                   textValueSuppliedivertertb={textValueSuppliedivertertb}
//                 />
//               </div>
//               <div
//                 className="col-1"
//                 style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
//               >
//                 <h5> Diverter lot :</h5>
//               </div>
//               <div
//                 className="col-1"
//                 style={{
//                   fontFamily: "Times New Roman",
//                   color: "blue",
//                   paddingTop: 10,
//                 }}
//               >
//                 <Diverterlottb
//                   handleTextChangeDiverterlottb={
//                     this.handleTextChangeDiverterlottb
//                   }
//                   textValueDiverterlottb={textValueDiverterlottb}
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div
//                 className="col-1"
//                 style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
//               >
//                 <h5> Supplier IDCS:</h5>
//               </div>
//               <div
//                 className="col-2"
//                 style={{
//                   fontFamily: "Times New Roman",
//                   color: "blue",
//                   paddingTop: 10,
//                 }}
//               >
//                 <SupplieIDCStb
//                   handleTextChangeSupplieIDCStb={
//                     this.handleTextChangeSupplieIDCStb
//                   }
//                   textValueSupplieIDCStb={textValueSupplieIDCStb}
//                 />
//               </div>
//               <div
//                 className="col-1"
//                 style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
//               >
//                 <h5> IDCS lot :</h5>
//               </div>
//               <div
//                 className="col-1"
//                 style={{
//                   fontFamily: "Times New Roman",
//                   color: "blue",
//                   paddingTop: 10,
//                 }}
//               >
//                 <IDCSlottb
//                   handleTextChangeIDCSlottb={this.handleTextChangeIDCSlottb}
//                   textValueIDCSlottb={textValueIDCSlottb}
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div
//                 className="col-1.5"
//                 style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
//               >
//                 <h5> SHA Washing no.:</h5>
//               </div>
//               <div
//                 className="col-1"
//                 style={{
//                   fontFamily: "Times New Roman",
//                   color: "blue",
//                   paddingTop: 10,
//                 }}
//               >
//                 <SHAwashingnotb
//                   handleTextChangeSHAwashingnotb={
//                     this.handleTextChangeSHAwashingnotb
//                   }
//                   textValueSHAwashingnotb={textValueSHAwashingnotb}
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div
//                 className="col-1"
//                 style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
//               >
//                 <h5> Oven SHA No.:</h5>
//               </div>
//               <div
//                 className="col-2"
//                 style={{
//                   fontFamily: "Times New Roman",
//                   color: "blue",
//                   paddingTop: 10,
//                 }}
//               >
//                 <Ovenshanotb
//                   handleTextChangeOvenshanotb={this.handleTextChangeOvenshanotb}
//                   textValueOvenshanotb={textValueOvenshanotb}
//                 />
//               </div>
//               <div
//                 className="col-1"
//                 style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
//               >
//                 <h5> Oven MBA :</h5>
//               </div>
//               <div
//                 className="col-1"
//                 style={{
//                   fontFamily: "Times New Roman",
//                   color: "blue",
//                   paddingTop: 10,
//                 }}
//               >
//                 <OvenMBAtb
//                   handleTextChangeOvenMBAtb={this.handleTextChangeOvenMBAtb}
//                   textValueOvenMBAtb={textValueOvenMBAtb}
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div
//                 className="col-1"
//                 style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
//               >
//                 <h5> CO2 mc no.:</h5>
//               </div>
//               <div
//                 className="col-2"
//                 style={{
//                   fontFamily: "Times New Roman",
//                   color: "blue",
//                   paddingTop: 10,
//                 }}
//               >
//                 <Co2mcnotb
//                   handleTextChangeCo2mcnotb={this.handleTextChangeCo2mcnotb}
//                   textValueCo2mcnotb={textValueCo2mcnotb}
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div
//                 className="col-1"
//                 style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
//               >
//                 <h5> Line no.:</h5>
//               </div>
//               <div
//                 className="col-2"
//                 style={{
//                   fontFamily: "Times New Roman",
//                   color: "blue",
//                   paddingTop: 10,
//                 }}
//               >
//                 <Linenotb
//                   handleTextChangeLinenotb={this.handleTextChangeLinenotb}
//                   textValueLinenotb={textValueLinenotb}
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div
//                 className="col-2"
//                 style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
//               >
//                 <h5> Result unit (IF have):</h5>
//               </div>
//               <div
//                 className="col-2"
//                 style={{
//                   fontFamily: "Times New Roman",
//                   color: "blue",
//                   paddingTop: 10,
//                 }}
//               >
//                 <Resultunittb
//                   handleTextChangeResultunittb={
//                     this.handleTextChangeResultunittb
//                   }
//                   textValueResultunittb={textValueResultunittb}
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-1"></div>
//               <div
//                 className="col-2"
//                 style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
//               >
//                 <h5> Analysis request contents</h5>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div
//                 className="col-2"
//                 style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
//               >
//                 <h5> Purpose of test :</h5>
//               </div>
//               <div
//                 className="col-2"
//                 style={{
//                   fontFamily: "Times New Roman",
//                   color: "blue",
//                   paddingTop: 10,
//                 }}
//               >
//                 <Purposetb
//                   handleTextChangePurposetb={this.handleTextChangePurposetb}
//                   textValuePurposetb={textValuePurposetb}
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div
//                 className="col-2"
//                 style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
//               >
//                 <h5>Process Description : </h5>
//               </div>
//               <div
//                 className="col-2"
//                 style={{
//                   fontFamily: "Times New Roman",
//                   color: "blue",
//                   paddingTop: 10,
//                 }}
//               >
//                 <ProcessDescriptiontb
//                   handleTextChangeProcessDescriptiontb={
//                     this.handleTextChangeProcessDescriptiontb
//                   }
//                   textValueProcessDescriptiontb={textValueProcessDescriptiontb}
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div
//                 className="col-2"
//                 style={{ fontFamily: "Times New Roman", paddingTop: 10 }}
//               >
//                 <h5>Reference data : </h5>
//               </div>
//               <div
//                 className="col-2"
//                 style={{
//                   fontFamily: "Times New Roman",
//                   color: "blue",
//                   paddingTop: 10,
//                 }}
//               >
//                 <Reftb
//                   handleTextChangeReftb={this.handleTextChangeReftb}
//                   textValueReftb={textValueReftb}
//                 />
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-1"></div>
//               <div className="col-1"></div>
//               <div
//                 className="col-2"
//                 style={{
//                   fontFamily: "Times New Roman",
//                   paddingTop: 10,
//                   paddingBottom: 50,
//                 }}
//               >
//                 <h5>Comment : </h5>
//               </div>
//               <div
//                 className="col-2"
//                 style={{
//                   fontFamily: "Times New Roman",
//                   color: "blue",
//                   paddingTop: 10,
//                   paddingBottom: 50,
//                 }}
//               >
//                 <Commenttb
//                   handleTextChangeCommenttb={this.handleTextChangeCommenttb}
//                   textValueCommenttb={textValueCommenttb}
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="col-12">
//             <div className="row-mb-12" style={{ paddingTop: 50 }}>
//               <div className="row">
//                 <div className="col-1"></div>
//                 <div
//                   className="col-5"
//                   style={{
//                     fontFamily: "Times New Roman",
//                     fontWeight: "bold",
//                     textDecoration: "underline",
//                   }}
//                 >
//                   <h5>Sample build and submission schedule :</h5>
//                 </div>
//                 {/* <div className="col-1"></div> */}
//               </div>
//               <div className="row">
//                 <div className="col-1"></div>
//                 <div className="col-1"></div>
//                 <div
//                   className="col-2"
//                   style={{
//                     fontFamily: "Times New Roman",
//                     paddingTop: 10,
//                   }}
//                 >
//                   <h5>NMB sample build (MBA) date </h5>
//                 </div>
//                 <div
//                   className="col-5"
//                   style={{
//                     fontFamily: "Times New Roman",
//                     paddingTop: 10,
//                   }}
//                 >
//                   <NMBsampletb
//                     handleDateChangeNMBsampletb={
//                       this.handleDateChangeNMBsampletb
//                     }
//                     dateValueNMBsampletb={dateValueNMBsampletb}
//                   />
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col-1"></div>
//                 <div className="col-1"></div>
//                 <div
//                   className="col-2"
//                   style={{
//                     fontFamily: "Times New Roman",
//                     paddingTop: 10,
//                   }}
//                 >
//                   <h5>Samlple send date to Cleanliness </h5>
//                 </div>
//                 <div
//                   className="col-5"
//                   style={{
//                     fontFamily: "Times New Roman",
//                     paddingTop: 10,
//                   }}
//                 >
//                   <Samplesendtb
//                     handleDateChangeSamplesendtb={
//                       this.handleDateChangeSamplesendtb
//                     }
//                     dateValueSamplesendtb={dateValueSamplesendtb}
//                   />
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col-1"></div>
//                 <div className="col-1"></div>
//                 <div
//                   className="col-2"
//                   style={{
//                     fontFamily: "Times New Roman",
//                     paddingTop: 10,
//                   }}
//                 >
//                   <h5>Sample submission to MSL date </h5>
//                 </div>
//                 <div
//                   className="col-5"
//                   style={{
//                     fontFamily: "Times New Roman",
//                     paddingTop: 10,
//                   }}
//                 >
//                   <Samplesubtb
//                     handleDateChangeSamplesubtb={
//                       this.handleDateChangeSamplesubtb
//                     }
//                     dateValueSamplesubtb={dateValueSamplesubtb}
//                   />
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col-1"></div>
//                 <div className="col-1"></div>
//                 <div
//                   className="col-2"
//                   style={{
//                     fontFamily: "Times New Roman",
//                     paddingTop: 10,
//                     paddingBottom: 50,
//                   }}
//                 >
//                   <h5>Committed Shipment Date </h5>
//                 </div>
//                 <div
//                   className="col-5"
//                   style={{
//                     fontFamily: "Times New Roman",
//                     paddingTop: 10,
//                     paddingBottom: 50,
//                   }}
//                 >
//                   <Commitshiptb
//                     handleDateChangeCommitshiptb={
//                       this.handleDateChangeCommitshiptb
//                     }
//                     dateValueCommitshiptb={dateValueCommitshiptb}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="col-12">
//             <div className="row-mb-12" style={{ paddingTop: 50 }}>
//             </div>
//             <div
//               className="col-12 text-center"
//               style={{
//                 fontFamily: "Times New Roman",
//                 paddingBottom: 50,
//               }} >
//               <button
//                 disabled={this.state.isDisable}
//                 onClick={async (e) => {
//                   try {
//                     const isSuccess1 = await this.doGetData(); // เรียกใช้งาน getData และรับค่า isSuccess1
//                     const isSuccess2 = await this.doGetData2(); // เรียกใช้งาน this.doGetData2() และรับค่า isSuccess2
//                     const isSuccess3 = await this.doGetData3(); // เรียกใช้งาน getData และรับค่า isSuccess1
//                     const isSuccess4 = await this.doGetData4(); // เรียกใช้งาน this.doGetData2() และรับค่า isSuccess2
//                     const isSuccess5 = await this.doGetData5(); // เรียกใช้งาน getData และรับค่า isSuccess1
//                     const isSuccess6 = await this.doGetData6(); // เรียกใช้งาน this.doGetData2() และรับค่า isSuccess2
//                     const isSuccess7 = await this.doGetData7(); // เรียกใช้งาน getData และรับค่า isSuccess1
//                     const isSuccess8 = await this.doGetData8(); // เรียกใช้งาน this.doGetData2() และรับค่า isSuccess2
//                     const isSuccess9 = await this.doGetData9(); // เรียกใช้งาน getData และรับค่า isSuccess1
//                     const isSuccess10 = await this.doGetData10(); // เรียกใช้งาน this.doGetData2() และรับค่า isSuccess2
//                     const isSuccess11 = await this.doGetData11(); // เรียกใช้งาน getData และรับค่า isSuccess1
//                     const isSuccess12 = await this.doGetData12(); // เรียกใช้งาน this.doGetData2() และรับค่า isSuccess2
//                     const isSuccess13 = await this.doGetData13(); // เรียกใช้งาน getData และรับค่า isSuccess1
//                     const isSuccess14 = await this.doGetData14(); // เรียกใช้งาน this.doGetData2() และรับค่า isSuccess2

//                     if (isSuccess1 || isSuccess2 || isSuccess3 || isSuccess4 || isSuccess5 || isSuccess6 || isSuccess7 || isSuccess8 || isSuccess9 || isSuccess10 || isSuccess11 || isSuccess12 || isSuccess13 || isSuccess14) {
//                       Swal.fire({
//                         icon: "success",
//                         title: "Success",
//                         text: "Data success",
//                       }).then(() => {
//                         this.doGetdocno();
//                         this.sendDataToBackend1();
//                         console.log(this.sendDataToBackend1);
//                         window.location.reload();
//                       });
//                     }

//                   } catch (error) {
//                     console.error(error);
//                   }
//                 }}
//                 type="submit"
//                 className="btn btn-primary"
//                 style={{ marginTop: 30 }}
//               >
//                 Submit
//               </button>


//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Samcleanliness;
