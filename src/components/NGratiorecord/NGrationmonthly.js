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

class NGratiomonthly extends Component {

  constructor(props) {
    super(props);

    //set state
    this.state = {
      Process: [],
      listProcess: [],

      listparameter: [], // ตัวเลือกทั้งหมด
      parameter: null,   // ค่าเริ่มต้นของ Select
      model: [],
      listModel: [],
      Year: [{ label: new Date().getFullYear() }], // ตั้งค่าปีเริ่มต้นเป็นปีปัจจุบัน
      year : [],
      Line: [],
      listLine: [],

      Serialnumber: [],
      listSerial: [],
      fixture: [],
      listfixture: [],
      machine: [],
      listmachine: [],
      noData: [],

      value_y: [],

      report: [],
      xAxis: [],
      yAxis1: [],
      seriesY: [],
      series2: [],
      series3: [],
      series4: [],
      series_: [],
      series_shift: [],
      seriesCleanroom: [],
      options: {},
      options_pp: {},
      options2: {},
      options3: {},
      options4: {},
      options_shift: {},
      chart: [],

      Raw_Dat: [],
      yAxisIndex: [],
      xAxis_shift: [],
      month : [],
    
      
      listMonth: [],
      listModel: [],

      listYear: [],
      listMonth: [],
      selectedMaxYear: "",
      selectedMaxMonth: "",
      show_link: "",
      optionSelected: null,
      isDisable: false,
      countdownEnabled: false, // เพิ่ม state สำหรับการเปิด/ปิด countdown
      intervalId: null, // เพิ่ม state สำหรับเก็บ ID ของ interval
      countdownTime: 50, // 5 นาทีในวินาที
    };
  }

  componentDidMount = async () => {
    const { state } = this.props.location; // ดึงค่าจาก state
  
    const defectCode = state?.defectCode || "N/A";
    const year = state?.year || "N/A";
    const month = state?.month || "N/A";
    const model = state?.model || "N/A";
  
    // แสดงค่าที่รับมาใน Console (สำหรับตรวจสอบ)
    console.log("Defect Code:", defectCode);
    console.log("Year:", year);
    console.log("Month:", month);
    console.log("Model:", model);
  
    // ตั้งค่าที่รับมาใน state
    this.setState({
      defectCode,
      year,
      month,
      model,
    },
    async () => {
        // เมื่อ state ถูกตั้งค่าเสร็จสิ้นแล้ว ให้เรียก doGetDataReport
        await this.doGetDataReport();
      }
);
   
  };
  

  handleSweetAlertConfirm = () => {
    // Additional actions to perform after the user clicks "OK" in SweetAlert
    // For example, you can set a state variable to indicate confirmation:
    this.setState({ sweetAlertConfirmed: true });
  };
  doGetDataReport = async () => {
    const { model, year, month, defectCode} = this.state;
    const result = await httpClient.get(
        server.VALUE_Y_TOP10MONTHLYMONITORING_URL +
        "/" +
        this.state.model +
        "/" +
        this.state.year +
        "/" +
        this.state.month +
         "/" +
        this.state.defectCode
    );
  
    console.log(result);
  
    // สร้างแกน X (หมวดหมู่จาก DEFECT_CODE)
    let xAxis = [];
    let yAxisData = [];
  
    for (let index = 0; index < result.data.result.length; index++) {
      const item = result.data.result[index];
      xAxis.push(item.DDATE); // ใส่ DEFECT_CODE ในแกน X
      yAxisData.push(item.NGratio); // ใช้ค่า NG_QTY
    }
  
    console.log("xAxis (DEFECT_CODE): ", xAxis);
    console.log("yAxisData (NG_QTY): ", yAxisData);
  
    this.setState({
      report: result.data.result,
      noData: false, // Reset the flag for no data
      xAxis,
      yAxisData,
      isDisable: false,
      options: {
        chart: {
          height: 500,
          type: "bar", // ใช้ Bar chart
          stacked: false,
        },
        plotOptions: {
          bar: {
            horizontal: false, // แสดง Bar chart ในแนวตั้ง
            columnWidth: "60%", // กำหนดความกว้างของแต่ละ bar
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: true, // แสดงค่า NG_QTY บน Bar
          formatter: function (val) {
            return `${Number(val).toFixed(3)}%`; // แสดงค่า NG_QTY เป็นเปอร์เซ็นต์ 3 ตำแหน่ง
          },style: {
            colors: ['#000000'], // Custom color for the data label (black, but can be any color)
            fontSize: '14px', // You can also adjust the font size here
          },
        },
        title: {
          text: `${defectCode}`, // ชื่อกราฟ
          align: "middle",
          offsetX: 50,
          style: {
            colors: ['#000000'], // Custom color for the data label (black, but can be any color)
            fontSize: '24px', // You can also adjust the font size here
          },
        },
        xaxis: {
          categories: xAxis, // ใส่ DEFECT_CODE ในแกน X
          title: {
            text: "Date",
          },
          labels: {
            style: {
              fontSize: "12px",
            },
          },
        },
        yaxis: {
          title: {
            text: "NG ratio", // แสดงชื่อแกน Y
          },
          labels: {
            formatter: function (val) {
              return `${Number(val).toFixed(3)}%`; // แสดงค่า NG_QTY เป็นเปอร์เซ็นต์ 3 ตำแหน่ง
            },
          },
        },
        tooltip: {
          followCursor: true,
          fixed: {
            enabled: false,
          },
          y: {
            formatter: function (val) {
              return `${Number(val).toFixed(3)}%`; // แสดงเปอร์เซ็นต์ใน tooltip
            },
          },
        },
        legend: {
          position: "bottom",
        },
        colors: [
          "#FFC0CB", // สีของ Bar
        ],
      },
      seriesY: [
        {
          name: "NG_QTY",
          type: "bar", // ชนิด Bar chart
          data: yAxisData, // ใส่ค่า NG_QTY
        },
      ],
    });
  };
  
  
  
  getMaxValue = (options) => {
    let max = -Infinity;
    let maxOption = null;

    for (const option of options) {
      const value = parseFloat(option.label);
      if (!isNaN(value) && value > max) {
        max = value;
        maxOption = option;
      }
    }

    return maxOption;
  };
  

 
  stopInterval() {
    clearInterval(this.intervalId);
  }

  // ฟังก์ชันเพื่อ refreath
  handleRefresh = () => {
    // สร้าง Date ใหม่
    const currentDate = new Date();

    // ทำการ setState ให้ this.state.startDate เป็นวันปัจจุบัน
    this.setState(
      { startDate: currentDate.toISOString().split("T")[0] },
      () => {
        // เรียกฟังก์ชันที่ต้องการทำหลังจาก setState เสร็จสิ้น
        this.doGetDataReport();
      }
    );
  };

  // ฟังก์ชันที่เรียกเมื่อต้องการ refreath

  startInterval() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        countdownTime: prevState.countdownTime - 1,
      }));

      if (this.state.countdownTime <= 0) {
        // เมื่อเวลาครบถ้วน, ให้ทำการ Summit ข้อมูล
        this.handleRefresh();
        // และรีเซ็ตเวลานับถอยหลังเป็น 5 นาทีใหม่
        this.setState({ countdownTime: 300 }); // 5 นาทีในวินาที
      }
    }, 1000); // 1 วินาที
  }

  stopInterval() {
    clearInterval(this.intervalId);
  }



  render() {
    return (
      <div className="content-wrapper">
        <div className="content" style={{ paddingTop: 80 }}>
          <section className="content-header">
            <div className="container-fluid">
            <div className="row mb-2">
               
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-left">
                    <li className="breadcrumb-item">
                      <a href="/NGratiomonitoring">Back to Top 10 Defect Monitoring</a>
                    </li>
                  </ol>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>  Defect monthly Monitoring</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="/Home">Home</a>
                    </li>
                    <li className="breadcrumb-item active">
                       Defect monthly Monitoring
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </section>
        </div>
    
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">

    
              {/* กราฟ */}
              <div className="row">
                <div className="col-12">
                  <div className="row" style={{ width: "100%" }}>
                    <div
                      className="card card-warning"
                      style={{
                        width: "100%",
                        backgroundColor: "#FFFFE0", // สีเหลืองอ่อน
                        border: "1px solid #000000", // เส้นขอบสีดำ
                        borderRadius: "10px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <div className="card-body">
                        <ReactApexChart
                          options={this.state.options}
                          series={this.state.seriesY}
                          type="bar" // เปลี่ยนจาก Column เป็น bar
                          height={700}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              {/* ตาราง */}
              {/* สามารถเพิ่มโค้ดสำหรับตารางได้ที่นี่ */}
            </div>
          </div>
        </div>
      </div>
    );
    
  }
}  

export default NGratiomonthly;
