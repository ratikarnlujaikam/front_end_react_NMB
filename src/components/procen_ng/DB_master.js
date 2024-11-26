import React, { Component } from "react";
import { key, server } from "../../constants";
import { httpClient } from "../../utils/HttpClient";
import Chart from "react-apexcharts";
import moment from "moment";
import Select from "react-select";
import Swal from "sweetalert2";
import { CSVLink } from "react-csv";
import ReactDOM from "react-dom";
import ReactApexChart from "react-apexcharts";
import ApexCharts from "apexcharts";

//npm install @mui/material @emotion/react @emotion/styled

class Procen_ng extends Component {
  constructor(props) {
    super(props);

    //set state
    this.state = {
      year: [],
      Month: [],
      report: [],
      xAxis: [],
      yAxis1: [],
      seriesY: [],
      series2: [],
      series_: [],
      seriesCleanroom: [],
      options: {},
      options_pp: {},
      options2: {},
      chart: [],
      rawData: [],

      Raw_Dat: [],
      yAxisIndex: [],

      startDate: moment().format("yyyy-MM-DD"), //moment().add("days", -6).format("yyyy-MM-DD"),
      finishDate: moment().format("yyyy-MM-DD"), //moment().format("yyyy-MM-DD"),
      listyear: [],
      listMonth: [],
      listModel: [],
      onClose: [],
      listYear: [],
      listMonth: [],
      selectedMaxYear: "",
      selectedMaxMonth: "",

      optionSelected: null,
      isDisable: false,
      countdownEnabled: false, // เพิ่ม state สำหรับการเปิด/ปิด countdown
      intervalId: null, // เพิ่ม state สำหรับเก็บ ID ของ interval
      countdownTime: 300, // 5 นาทีในวินาที
    };
  }

  componentDidMount = async () => {
    await this.doGetDataReport();
    this.setState({ countdownEnabled: false });
    this.setState({ countdownEnabled: true }, () => {
      // Additional logic to handle the checked state
      this.startInterval();
      const currentDate = new Date().toISOString().split("T")[0];
      this.setState({ startDate: currentDate });
    });
  };
  doGetDataReport = async () => {
    try {
      const result = await httpClient.get(server.DBMASTER_URL);
      console.log(result);

      let rawData = result.data.listRawData;
      console.log(rawData[0][0].NG);

      const result_1Array = result.data.result_1;
      console.log(result_1Array);

      for (let i = 1; i < rawData.length; i++) {
        rawData[0].push(...rawData[i]);
      }

      this.setState({
        Raw_Dat: rawData[0],
        report: result.data.result,
        rawData,
        result_1Array,
        isDisable: false,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
 


  stopInterval() {
    clearInterval(this.intervalId);
  }

  startInterval() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        countdownTime: prevState.countdownTime - 1,
      }));

      if (this.state.countdownTime <= 0) {
        // เมื่อเวลาครบถ้วน, ให้ทำการ Summit ข้อมูล
        this.doGetDataReport();
        // และรีเซ็ตเวลานับถอยหลังเป็น 5 นาทีใหม่
        this.setState({ countdownTime: 300 }); // 5 นาทีในวินาที
      }
    }, 1000); // 1 วินาที
  }

  stopInterval() {
    clearInterval(this.intervalId);
  }

  handleButtonClick = (data) => {
   
    Swal.fire({
      title: "NG Value",
      text: `The NG value is: ${data[1].Status}`,
      icon: "info",
    });

    console.log("data :", data);

  };

  render() {
    const { data } = this.props;

    const filterResultByLine = (line, result_1Array) => {
      console.log("Input Line:", line);
      console.log("Input Data:", result_1Array);

      const filteredResults = result_1Array.filter(
        (item) => item.Line.trim().toLowerCase() === line.trim().toLowerCase()
      );

      const sortedResults = filteredResults.sort((a, b) => b["%NG"] - a["%NG"]);

      console.log("Filtered and Sorted Results:", sortedResults);

      if (sortedResults.length === 0) {
        return {
          Process: "N/A",
          "Total NG": 0,
        };
      }

      const aggregatedValues = sortedResults.reduce(
        (acc, curr) => {
          acc.Total += (
            <span style="color: red; font-weight: bold;">${curr["Total"]}</span>
          );

          acc.Process += `
            <span style="color: black; font-weight: bold;">${curr.Process.padEnd(
              20
            )}:</span>
            <span style="color: red; font-weight: bold;">${curr["Total NG"]
              .toString()
              .padEnd(10)} </span>
            <span style="color: black; font-weight: bold;"> Qty</span>
            <span style="color: red; font-weight: bold;">${curr["%NG"].toFixed(
              2
            )}%</span>
            <br>`;

          acc.TotalNG += curr["Total NG"];
          return acc;
        },
        { Process: "", TotalNG: 0, Total: "" }
      );

      console.log("Aggregated Values:", aggregatedValues);

      return {
        Process: aggregatedValues.Process.trim(),
        "Total NG": aggregatedValues.TotalNG,
        Total: aggregatedValues.Total,
      };
    };

    return (
      <div className="content-wrapper">
        <div className="content" style={{ paddingTop: 30 }}>
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  {/* <h2>Monthly LAR report all Model</h2> */}
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="/Home">Home</a>
                    </li>
                    <li className="breadcrumb-item active">
                      {/* Monthly LAR report all Model */}
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div class="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="row">{/* Select Critiria "Year" */}</div>
                </div>
                <h1> Master Dashboard Monitoring</h1>
                <div className="row">
                  <div className="card-body">
                    <div className="col-10">
                      <div className="row" style={{ marginBottom: "5px" }}>
                        <label>Refresh Auto </label>
                        <p>
                          {Math.floor(this.state.countdownTime / 60)} :{" "}
                          {this.state.countdownTime % 60}
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-1">
                        <label
                          className="btn btn-warning text-center"
                          style={{
                            padding: "10px",
                            margin: "10px",
                            width: "100%", // Set a fixed width for the button
                          }}
                        >
                          ZONE 1
                        </label>
                      </div>
                      {this.state.Raw_Dat.filter(
                        (item) => item.Line.substring(0, 1) === "1"
                      ) // Filter items for ZONE 1
                        .map((item, index) => {
                          // Extract the substring from the Line property
                          const lineSubstring = item.Line.substring(0, 5); // Adjust the index as needed

                          return (
                            <div key={index} className="col-md-1">
                              <button
                                className="btn btn-warning text-center"
                                style={{
                                  backgroundColor: item.Line_running === 'NO PLAN' ? "#555555" : item.Status === 'Failed' ? "red" : "green",
                                  color: "white",
                                  padding: "10px",
                                  margin: "8px",
                                  width: "100px", // Set a fixed width for the button
                                }}
                                onClick={() => {
                                  if (item.Status !== null && item.Status !== undefined) {
                                   
                          
                                    
                                   
                                    Swal.fire({
                                      title: `<a href="/Test_graph?&line=${encodeURIComponent(item.Line)}&startDate=${encodeURIComponent(this.state.startDate)}&to_link=${encodeURIComponent("OEE")}" title="link to Production Report's Traceability Web Page"><span style="color: blue; font-weight: bold;">Line ${item.Line}</span><br>`,

                                      html: `
                                      <span style="font-weight: bold; text-align: center; color: ${
                                        item.Status === 'Failed' ? "red" : "green"
                                      };">
                                        Status ${item.Status === 'Failed' ? 'Failed' : 'Passed'}
                                      </span><br>
                                      <div>
                                        You can click to see details.
                                        <span style="margin-left: 5px;">🔍</span> <!-- Using emoji as icon -->
                                      </div>
                                      <div>
                                        <div>                                         
                                         <span style="font-weight: bold; text-align: center; color: ${item.Airleak  == null  ? 'red' : 'black'};">
  Airleak ${item.Airleak !== null 
    ? (item.Airleak === 'NO PROCESS' 
        ? " : -" 
        : (item.Airleak === 'Passed' ? " : Passed" : "Failed"))
    : " : Failed"}
</span><br>
<span style="font-weight: bold; text-align: center; color: ${item.Helium == null ? 'red' : 'black'};">
  Helium ${item.Helium !== null 
    ? (item.Helium === 'NO PROCESS' 
        ? " : -" 
        : (item.Helium !== null  ? " : Passed" : "Failed"))
    : " : Failed"}
</span><br>
<span style="font-weight: bold; text-align: center; color: ${item.Dymension  == null  ? 'red' : 'black'};">
  Dymension ${item.Dymension !== null 
    ? (item.Dymension === 'NO PROCESS' 
        ? " : -" 
        : (item.Dymension !== null  ? " : Passed" : "Failed"))
    : " : Failed"}
</span><br>
<span style="font-weight: bold; text-align: center; color: ${item.Hipot  == null ? 'red' : 'black'};">
  Hipot ${item.Hipot !== null 
    ? (item.Hipot === 'NO PROCESS' 
        ? " : -" 
        : (item.Hipot !== null  ? " : Passed" : "Failed"))
    : " : Failed"}
</span><br>
<span style="font-weight: bold; text-align: center; color: ${item.EWMS  == null  ? 'red' : 'black'};">
  EWMS ${item.EWMS !== null 
    ? (item.EWMS === 'NO PROCESS' 
        ? " : -" 
        : (item.EWMS !== null  ? " : Passed" : "Failed"))
    : " : Failed"}
</span><br>
<span style="font-weight: bold; text-align: center; color: ${item.Gmeter  == null ? 'red' : 'black'};">
  Gmeter ${item.Gmeter !== null 
    ? (item.Gmeter === 'NO PROCESS' 
        ? " : -" 
        : (item.Gmeter !== null  ? " : Passed" : ": Failed"))
    : " : Failed"}
</span><br>
                                        </div>
                                      </div>
                                    `
                                    ,
                                    }).then((result) => {
                                      if (result.dismiss !== Swal.DismissReason.cancel) {
                                        // "Close" button is clicked
                                        // Add your logic here if needed
                                        console.log("Close button is clicked");
                                      }
                                    });
                                  } else {
                                    console.error("Master value is null or undefined");
                                  }
                                }}
                              >
                                <h2>{lineSubstring}</h2>{" "}
                                {/* Display the extracted substring */}
                                <p>
                                {item.Line_running === 'NO PLAN' 
  ? 'No plan'  
  : (item.Status === 'Passed' || item.Status === 'Failed'
      ? `${item.Status}` 
      : "N/A")}

                                </p>
                              </button>
                            </div>
                          );
                          
                        })}
                    </div>
                    <div className="row">
                      <div className="col-md-1">
                        <label
                          className="btn btn-warning text-center"
                          style={{
                            padding: "10px",
                            margin: "5px",
                            width: "100%",
                          }}
                        >
                          ZONE 2
                        </label>
                      </div>
                      {this.state.Raw_Dat.filter(
                        (item) => item.Line.substring(0, 1) === "2"
                      ) // Filter items for ZONE 1
                        .map((item, index) => {
                          // Extract the substring from the Line property
                          const lineSubstring = item.Line.substring(0, 5); // Adjust the index as needed

                          return (
                            <div key={index} className="col-md-1">
                            <button
                              className="btn btn-warning text-center"
                              style={{
                                backgroundColor: item.Line_running === 'NO PLAN' ? "#555555" : item.Status === 'Failed' ? "red" : "green",
                                color: "white",
                                padding: "10px",
                                margin: "8px",
                                width: "100px", // Set a fixed width for the button
                              }}
                              onClick={() => {
                                if (item.Status !== null && item.Status !== undefined) {
                                 
                        
                                  
                                 
                                  Swal.fire({
                                    title: `<a href="/Test_graph?&line=${encodeURIComponent(item.Line)}&startDate=${encodeURIComponent(this.state.startDate)}&to_link=${encodeURIComponent("OEE")}" title="link to Production Report's Traceability Web Page"><span style="color: blue; font-weight: bold;">Line ${item.Line}</span><br>`,

                                    html: `
  <span style="font-weight: bold; text-align: center; color: ${
    item.Status === 'Failed' ? "red" : "green"
  };">
    Status ${item.Status === 'Failed' ? 'Failed' : 'Passed'}
  </span><br>
  <div>
    You can click to see details.
    <span style="margin-left: 5px;">🔍</span> <!-- Using emoji as icon -->
  </div>
  <div>
    <div>                                         
    <span style="font-weight: bold; text-align: center; color: ${item.Airleak  == null  ? 'red' : 'black'};">
  Airleak ${item.Airleak !== null 
    ? (item.Airleak === 'NO PROCESS' 
        ? " : -" 
        : (item.Airleak === 'Passed' ? " : Passed" : "Failed"))
    : " : Failed"}
</span><br>
<span style="font-weight: bold; text-align: center; color: ${item.Helium  == null ? 'red' : 'black'};">
  Helium ${item.Helium !== null 
    ? (item.Helium === 'NO PROCESS' 
        ? " : -" 
        : (item.Helium !== null  ? " : Passed" : "Failed"))
    : " : Failed"}
</span><br>
<span style="font-weight: bold; text-align: center; color: ${item.Dymension  == null ? 'red' : 'black'};">
  Dymension ${item.Dymension !== null 
    ? (item.Dymension === 'NO PROCESS' 
        ? " : -" 
        : (item.Dymension !== null  ? " : Passed" : "Failed"))
    : " : Failed"}
</span><br>
<span style="font-weight: bold; text-align: center; color: ${item.Hipot  == null ? 'red' : 'black'};">
  Hipot ${item.Hipot !== null 
    ? (item.Hipot === 'NO PROCESS' 
        ? " : -" 
        : (item.Hipot !== null  ? " : Passed" : "Failed"))
    : " : Failed"}
</span><br>
<span style="font-weight: bold; text-align: center; color: ${item.EWMS  == null ? 'red' : 'black'};">
  EWMS ${item.EWMS !== null 
    ? (item.EWMS === 'NO PROCESS' 
        ? " : -" 
        : (item.EWMS !== null  ? " : Passed" : "Failed"))
    : " : Failed"}
</span><br>
<span style="font-weight: bold; text-align: center; color: ${item.Gmeter  == null ? 'red' : 'black'};">
  Gmeter ${item.Gmeter !== null 
    ? (item.Gmeter === 'NO PROCESS' 
        ? " : -" 
        : (item.Gmeter !== null  ? " : Passed" : ": Failed"))
    : " : Failed"}
</span><br>
    </div>
  </div>
`
,
                                  }).then((result) => {
                                    if (result.dismiss !== Swal.DismissReason.cancel) {
                                      // "Close" button is clicked
                                      // Add your logic here if needed
                                      console.log("Close button is clicked");
                                    }
                                  });
                                } else {
                                  console.error("Master value is null or undefined");
                                }
                              }}
                            >
                              <h2>{lineSubstring}</h2>{" "}
                              {/* Display the extracted substring */}
                              <p>
                                {item.Line_running === 'NO PLAN' 
  ? 'No plan'  
  : (item.Status === 'Passed' || item.Status === 'Failed'
      ? `${item.Status}` 
      : "N/A")}

                                </p>
                            </button>
                          </div>
                          );
                        })}
                    </div>
                    <div className="row">
                      <div className="col-md-1">
                        <label
                          className="btn btn-warning text-center"
                          style={{
                            padding: "10px",
                            margin: "5px",
                            width: "100%",
                          }}
                        >
                          ZONE 3
                        </label>
                      </div>
                      {this.state.Raw_Dat.filter(
                        (item) => item.Line.substring(0, 1) === "3"
                      ) // Filter items for ZONE 1
                        .map((item, index) => {
                          // Extract the substring from the Line property
                          const lineSubstring = item.Line.substring(0, 5); // Adjust the index as needed

                          return (
                            <div key={index} className="col-md-1">
                            <button
                              className="btn btn-warning text-center"
                              style={{
                                backgroundColor: item.Line_running === 'NO PLAN' ? "#555555" : item.Status === 'Failed' ? "red" : "green",
                                color: "white",
                                padding: "10px",
                                margin: "8px",
                                width: "100px", // Set a fixed width for the button
                              }}
                              onClick={() => {
                                if (item.Status !== null && item.Status !== undefined) {
                                 
                        
                                  
                                 
                                  Swal.fire({
                                    title: `<a href="/Test_graph?&line=${encodeURIComponent(item.Line)}&startDate=${encodeURIComponent(this.state.startDate)}&to_link=${encodeURIComponent("OEE")}" title="link to Production Report's Traceability Web Page"><span style="color: blue; font-weight: bold;">Line ${item.Line}</span><br>`,

                                    html: `
  <span style="font-weight: bold; text-align: center; color: ${
    item.Status === 'Failed' ? "red" : "green"
  };">
    Status ${item.Status === 'Failed' ? 'Failed' : 'Passed'}
  </span><br>
  <div>
    You can click to see details.
    <span style="margin-left: 5px;">🔍</span> <!-- Using emoji as icon -->
  </div>
  <div>
    <div>                                         
   <span style="font-weight: bold; text-align: center; color: ${item.Airleak  == null  ? 'red' : 'black'};">
  Airleak ${item.Airleak !== null 
    ? (item.Airleak === 'NO PROCESS' 
        ? " : -" 
        : (item.Airleak === 'Passed' ? " : Passed" : "Failed"))
    : " : Failed"}
</span><br>
<span style="font-weight: bold; text-align: center; color: ${item.Helium  == null ? 'red' : 'black'};">
  Helium ${item.Helium !== null 
    ? (item.Helium === 'NO PROCESS' 
        ? " : -" 
        : (item.Helium !== null  ? " : Passed" : "Failed"))
    : " : Failed"}
</span><br>
<span style="font-weight: bold; text-align: center; color: ${item.Dymension  == null  ? 'red' : 'black'};">
  Dymension ${item.Dymension !== null 
    ? (item.Dymension === 'NO PROCESS' 
        ? " : -" 
        : (item.Dymension !== null  ? " : Passed" : "Failed"))
    : " : Failed"}
</span><br>
<span style="font-weight: bold; text-align: center; color: ${item.Hipot  == null  ? 'red' : 'black'};">
  Hipot ${item.Hipot !== null 
    ? (item.Hipot === 'NO PROCESS' 
        ? " : -" 
        : (item.Hipot !== null  ? " : Passed" : "Failed"))
    : " : Failed"}
</span><br>
<span style="font-weight: bold; text-align: center; color: ${item.EWMS  == null  ? 'red' : 'black'};">
  EWMS ${item.EWMS !== null 
    ? (item.EWMS === 'NO PROCESS' 
        ? " : -" 
        : (item.EWMS !== null  ? " : Passed" : "Failed"))
    : " : Failed"}
</span><br>
<span style="font-weight: bold; text-align: center; color: ${item.Gmeter  == null ? 'red' : 'black'};">
  Gmeter ${item.Gmeter !== null 
    ? (item.Gmeter === 'NO PROCESS' 
        ? " : -" 
        : (item.Gmeter !== null  ? " : Passed" : ": Failed"))
    : " : Failed"}
</span><br>
    </div>
  </div>
`
,
                                  }).then((result) => {
                                    if (result.dismiss !== Swal.DismissReason.cancel) {
                                      // "Close" button is clicked
                                      // Add your logic here if needed
                                      console.log("Close button is clicked");
                                    }
                                  });
                                } else {
                                  console.error("Master value is null or undefined");
                                }
                              }}
                            >
                              <h2>{lineSubstring}</h2>{" "}
                              {/* Display the extracted substring */}
                              <p>
                                {item.Line_running === 'NO PLAN' 
  ? 'No plan'  
  : (item.Status === 'Passed' || item.Status === 'Failed'
      ? `${item.Status}` 
      : "N/A")}

                                </p>
                            </button>
                          </div>
                          );
                        })}
                    </div>
                    <div className="row">
                      <div className="col-md-1">
                        <label
                          className="btn btn-warning text-center"
                          style={{
                            padding: "10px",
                            margin: "5px",
                            width: "100%",
                          }}
                        >
                          ZONE 4
                        </label>
                      </div>
                      {this.state.Raw_Dat.filter(
                        (item) => item.Line.substring(0, 1) === "4"
                      ) // Filter items for ZONE 1
                        .map((item, index) => {
                          // Extract the substring from the Line property
                          const lineSubstring = item.Line.substring(0, 5); // Adjust the index as needed

                          return (
                            <div key={index} className="col-md-1">
                            <button
                              className="btn btn-warning text-center"
                              style={{
                                backgroundColor: item.Line_running === 'NO PLAN' ? "#555555" : item.Status === 'Failed' ? "red" : "green",
                                color: "white",
                                padding: "10px",
                                margin: "8px",
                                width: "100px", // Set a fixed width for the button
                              }}
                              onClick={() => {
                                if (item.Status !== null && item.Status !== undefined) {
                                 
                        
                                  
                                 
                                  Swal.fire({
                                    title: `<a href="/Test_graph?&line=${encodeURIComponent(item.Line)}&startDate=${encodeURIComponent(this.state.startDate)}&to_link=${encodeURIComponent("OEE")}" title="link to Production Report's Traceability Web Page"><span style="color: blue; font-weight: bold;">Line ${item.Line}</span><br>`,

                                    html: `
  <span style="font-weight: bold; text-align: center; color: ${
    item.Status === 'Failed' ? "red" : "green"
  };">
    Status ${item.Status === 'Failed' ? 'Failed' : 'Passed'}
  </span><br>
  <div>
    You can click to see details.
    <span style="margin-left: 5px;">🔍</span> <!-- Using emoji as icon -->
  </div>
  <div>
    <div>                                         
    <span style="font-weight: bold; text-align: center; color: ${item.Airleak  == null  ? 'red' : 'black'};">
  Airleak ${item.Airleak !== null 
    ? (item.Airleak === 'NO PROCESS' 
        ? " : -" 
        : (item.Airleak === 'Passed' ? " : Passed" : "Failed"))
    : " : Failed"}
</span><br>
<span style="font-weight: bold; text-align: center; color: ${item.Helium  == null  ? 'red' : 'black'};">
  Helium ${item.Helium !== null 
    ? (item.Helium === 'NO PROCESS' 
        ? " : -" 
        : (item.Helium !== null  ? " : Passed" : "Failed"))
    : " : Failed"}
</span><br>
<span style="font-weight: bold; text-align: center; color: ${item.Dymension  == null ? 'red' : 'black'};">
  Dymension ${item.Dymension !== null 
    ? (item.Dymension === 'NO PROCESS' 
        ? " : -" 
        : (item.Dymension !== null  ? " : Passed" : "Failed"))
    : " : Failed"}
</span><br>
<span style="font-weight: bold; text-align: center; color: ${item.Hipot  == null ? 'red' : 'black'};">
  Hipot ${item.Hipot !== null 
    ? (item.Hipot === 'NO PROCESS' 
        ? " : -" 
        : (item.Hipot !== null  ? " : Passed" : "Failed"))
    : " : Failed"}
</span><br>
<span style="font-weight: bold; text-align: center; color: ${item.EWMS  == null  ? 'red' : 'black'};">
  EWMS ${item.EWMS !== null 
    ? (item.EWMS === 'NO PROCESS' 
        ? " : -" 
        : (item.EWMS !== null  ? " : Passed" : "Failed"))
    : " : Failed"}
</span><br>
<span style="font-weight: bold; text-align: center; color: ${item.Gmeter  == null ? 'red' : 'black'};">
  Gmeter ${item.Gmeter !== null 
    ? (item.Gmeter === 'NO PROCESS' 
        ? " : -" 
        : (item.Gmeter !== null  ? " : Passed" : ": Failed"))
    : " : Failed"}
</span><br>
    </div>
  </div>
`
,
                                  }).then((result) => {
                                    if (result.dismiss !== Swal.DismissReason.cancel) {
                                      // "Close" button is clicked
                                      // Add your logic here if needed
                                      console.log("Close button is clicked");
                                    }
                                  });
                                } else {
                                  console.error("Master value is null or undefined");
                                }
                              }}
                            >
                              <h2>{lineSubstring}</h2>{" "}
                              {/* Display the extracted substring */}
                              <p>
                                {item.Line_running === 'NO PLAN' 
  ? 'No plan'  
  : (item.Status === 'Passed' || item.Status === 'Failed'
      ? `${item.Status}` 
      : "N/A")}

                                </p>
                            </button>
                          </div>
                          );
                        })}
                    </div>

                    {/* Insert Xbar Chart */}
                  </div>
                </div>

                {/* Table*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Procen_ng;
