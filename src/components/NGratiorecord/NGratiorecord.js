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

class NGratiorecord extends Component {
  constructor(props) {
    super(props);

    //set state
    this.state = {
      Process: [],
      listProcess: [],

      listparameter: [], // ตัวเลือกทั้งหมด
      parameter: null, // ค่าเริ่มต้นของ Select
      Model: [],
      listModel: [],
      Year: { label: new Date().getFullYear() }, // ตั้งค่าปีเริ่มต้นเป็นปีปัจจุบัน
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
      columns: [],
      Raw_Dat: [],
      yAxisIndex: [],
      xAxis_shift: [],
      report2: [],
      Raw_Dat2: [],
      listRawData2: [],
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
    // ดึงเดือนปัจจุบัน
    const currentMonth = new Date().getMonth() + 1; // ดึงเดือนปัจจุบัน (1-12)
    const formattedMonth = currentMonth.toString().padStart(2, "0"); // แปลงเป็น 01, 02, ...
    this.setState({
      parameter: {
        label: this.getMonthName(currentMonth),
        value: formattedMonth,
      },
      listparameter: this.generateMonthOptions(),
    });
    await this.getmodel();
    await this.getyear();
  };

  handleSweetAlertConfirm = () => {
    // Additional actions to perform after the user clicks "OK" in SweetAlert
    // For example, you can set a state variable to indicate confirmation:
    this.setState({ sweetAlertConfirmed: true });
  };
  doGetDataReport = async () => {
    const result = await httpClient.get(
      server.VALUE_Y_TOP10MONITORING_URL +
        "/" +
        this.state.Model.label +
        "/" +
        this.state.Year.label +
        "/" +
        this.state.parameter.value
    );

    console.log(result);

    // สร้างแกน X (หมวดหมู่จาก DEFECT_CODE)
    let xAxis = [];
    let yAxisData = [];

    for (let index = 0; index < result.data.result.length; index++) {
      const item = result.data.result[index];
      xAxis.push(item.DEFECT_CODE); // ใส่ DEFECT_CODE ในแกน X
      yAxisData.push(item.NG_QTY); // ใช้ค่า NG_QTY
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
          type: "bar",
          stacked: false,
          events: {
            dataPointSelection: (event, chartContext, config) => {
              // ดึงค่า DEFECT_CODE ที่คลิก
              const defectCode = this.state.xAxis[config.dataPointIndex];
              const Year = this.state.Year.label;
              const Month = this.state.parameter.value;
              const Model = this.state.Model.label;
              console.log(
                "Clicked Defect Code:",
                defectCode,
                Year,
                Month,
                Model
              );

              // เรียกใช้ฟังก์ชันเพื่อส่งค่าไปยัง Form อื่น
              this.handleDefectCodeClick(defectCode, Year, Month, Model);
            },
          },
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
          },
          style: {
            colors: ["#000000"], // Custom color for the data label (black, but can be any color)
            fontSize: "14px", // You can also adjust the font size here
          },
        },
        title: {
          text: `Top 10 Defect Codes`, // ชื่อกราฟ
          align: "left",
          offsetX: 50,
        },
        xaxis: {
          categories: xAxis, // ใส่ DEFECT_CODE ในแกน X
          title: {
            text: "Defect Code",
          },
          labels: {
            style: {
              fontSize: "12px",
            },
          },
        },
        yaxis: {
          title: {
            text: "NG Quantity", // แสดงชื่อแกน Y
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
          "#FA8072", // สีของ Bar
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
  doGetDataReport2 = async () => {
    try {
      const result = await httpClient.get(
        server.TOP10MONITORINGTABLE_URL +
          "/" +
          this.state.Model.label +
          "/" +
          this.state.Year.label +
          "/" +
          this.state.parameter.value
      );

      console.log("Backend Response:", result.data); // Log the entire response

      let rawData = result.data.listRawData2;
      console.log("Raw Data:", rawData); // Log the rawData to check its structure

      if (rawData) {
        let combinedData = [];

        // Iterate through each row in the rawData
        rawData.forEach((row) => {
          let rowData = {
            Model: row.Model,
            PROCESS_CODE: row.PROCESS_CODE,
            DEFECT_CODE: row.DEFECT_CODE,
            Total_NGratio: row.Total_NGratio,
          };

          // Iterate through the date fields and filter out null values
          Object.keys(row).forEach((date) => {
            if (
              date !== "Model" &&
              date !== "PROCESS_CODE" &&
              date !== "DEFECT_CODE" &&
              date !== "Total_NGratio" &&
              row[date] !== null
            ) {
              rowData[date] = row[date];
            }
          });

          // Push the rowData into combinedData
          combinedData.push(rowData);
        });

        // Set the flattened data
        this.setState({ Raw_Dat2: combinedData });
        console.log("Flattened Data:", this.state.Raw_Dat2);
      } else {
        console.log("listRawData2 is undefined or empty");
      }

      this.setState({
        report2: result.data.result,
        isDisable: false,
      });
    } catch (error) {
      console.log("Error in doGetDataReport2:", error);
    }
  };

  renderreport2 = () => {
    if (this.state.report2 != null && this.state.report2.length > 0) {
      return this.state.report2.map((item, index) => (
        <tr key={index} align="center">
          <td>{item.Model}</td>
          <td>{item.PROCESS_CODE}</td>
          <td>{item.DEFECT_CODE}</td>
          <td>{item.Total_NGratio}</td>
          {/* Render dynamic date columns */}
          {Object.keys(item)
            .filter((key) => {
              const datePattern = /^\d{4}-\d{2}-\d{2}$/;
              return datePattern.test(key); // Match only valid date keys
            })
            .map((dateKey, idx) => (
              <td key={idx}>{item[dateKey] !== null ? item[dateKey] : ""}</td> // Handle null values
            ))}
        </tr>
      ));
    }
  };

  handleDefectCodeClick = (defectCode, Year, Month, Model) => {
    // ส่งค่าไปยังฟอร์ม NGratiomonthly ผ่าน React Router
    this.props.history.push("/NGratiomonthlymonitoring", {
      defectCode,
      year: Year,
      month: Month,
      model: Model,
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
  getMonthName(month) {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[month - 1];
  }

  // ฟังก์ชันสร้างตัวเลือกเดือน
  generateMonthOptions() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months.map((month, index) => {
      const value = (index + 1).toString().padStart(2, "0"); // 01, 02, ...
      return { label: month, value: value };
    });
  }

  getmodel = async () => {
    const array = await httpClient.get(server.MODEL_NGratiomonitoring_URL);
    const options = array.data.result.map((d) => ({
      label: d.MODEL,
    }));
    this.setState({ listModel: options });
  };
  getyear = async () => {
    const array = await httpClient.get(server.Year_NGratiomonitoring_URL);
    const options = array.data.result.map((d) => ({
      label: d.Year,
    }));
    this.setState({ listYear: options });
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
    console.log(this.state.Year);
    
    return (
      <div className="content-wrapper">
        <div className="content" style={{ paddingTop: 80 }}>
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>Top 10 Defect Monitoring</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="/Home">Home</a>
                    </li>
                    <li className="breadcrumb-item active">
                      Top 10 Defect Monitoring
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
              <div className="card card-primary card-outline">
                <div className="card-header">
                  <h3 className="card-title">
                    <label>Select Parameter</label>
                  </h3>
                </div>
                <div className="card-body">
                  <div className="row">
                    {/* Model Selection */}
                    <div className="col-md-2">
                      <div className="form-group">
                        <label>Model</label>
                        <Select
                          options={this.state.listModel}
                          value={this.state.Model}
                          onChange={async (selectedOption) => {
                            await this.setState({ Model: selectedOption });
                            console.log("Selected Model:", selectedOption);
                          }}
                          getOptionLabel={(e) => e.label}
                          getOptionValue={(e) => e.value}
                          placeholder="Select Model"
                        />
                      </div>
                    </div>

                    {/* Year Selection */}
                    <div className="col-md-2">
                      <div className="form-group">
                        <label>Year</label>
                        <Select
                          options={this.state.listYear}
                          value={this.state.Year}
                          onChange={async (e) => {
                            await this.setState({ Year: e });
                          }}
                          placeholder="Select Year"
                        />
                      </div>
                    </div>

                    {/* Monthly Selection */}
                    <div className="col-md-2">
                      <div className="form-group">
                        <label>Monthly</label>
                        <Select
                          options={this.state.listparameter}
                          value={this.state.parameter}
                          onChange={async (e) => {
                            await this.setState({ parameter: e });
                            await this.getmodel();
                          }}
                          placeholder="Select Month"
                        />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <button
                        disabled={this.state.isDisable}
                        onClick={async () => {
                          this.setState({ isDisable: true });
                          if (!this.state.Model || !this.state.parameter) {
                            Swal.fire({
                              icon: "error",
                              title: "Missing Selection",
                              text: "Please select both Model and Month",
                            }).then(() => {
                              this.setState({ isDisable: false });
                            });
                          } else {
                            Swal.fire({
                              icon: "info",
                              title: "Loading Data",
                              timer: 60000,
                              allowOutsideClick: false,
                              didOpen: async () => {
                                Swal.showLoading();
                                try {
                                  await this.doGetDataReport();
                                  await this.doGetDataReport2();
                                  if (this.state.yAxisData.length > 0) {
                                    Swal.fire({
                                      icon: "success",
                                      title: "Data Successfully Loaded",
                                      text: "The data was successfully retrieved.",
                                    });
                                  } else {
                                    Swal.fire({
                                      icon: "error",
                                      title: "No Data Found",
                                      text: "No data is available for the selected type. Please try again.",
                                    });
                                  }
                                } catch (error) {
                                  console.error("Data fetching error: ", error);
                                  await Swal.fire({
                                    icon: "error",
                                    title: "Error",
                                    text: "An error occurred while fetching data. Please try again.",
                                    confirmButtonText: "OK",
                                    allowOutsideClick: false,
                                  });
                                } finally {
                                  this.setState({ isDisable: false });
                                }
                              },
                            });
                          }
                        }}
                        type="submit"
                        className="btn btn-primary"
                        style={{ marginTop: 30 }}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* กราฟ */}
              <div className="row">
                <div className="col-12">
                  <div className="row" style={{ width: "100%" }}>
                    <div
                      className="card card-warning"
                      style={{
                        width: "100%",
                        backgroundColor: "#F8F8FF", // สีเหลืองอ่อน
                        border: "1px solid #0099CC", // เส้นขอบสีดำ
                        borderRadius: "10px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <div className="card-body">
                        <ReactApexChart
                          options={this.state.options}
                          series={this.state.seriesY}
                          type="bar" // เปลี่ยนจาก Column เป็น bar
                          height={500}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content" style={{ paddingTop: 5 }}>
                <section className="content-header">
                  <div className="container-fluid">
                    <div className="row mb-1">
                      <div className="col-sm-6">
                        <h1>Detail Top10 Defect Monitoring</h1>
                      </div>
                      <div className="col-sm-6">
                        <CSVLink
                          data={this.state.report2}
                          filename={"Top10 Defect Monitoring.csv"}
                        >
                          <button
                            type="button"
                            className="btn btn-primary"
                            style={{ marginTop: 3 }}
                          >
                            Download Details
                          </button>
                        </CSVLink>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              {/* ตาราง */}
              <div className="col-12">
                <div class="content">
                  <div class="container-fluid">
                    <div className="card card-primary">
                      <div
                        className="card-body table-responsive p-0"
                        style={{
                          height: 600,
                          zIndex: "3",
                          position: "relative",
                          zIndex: "0",
                        }}
                      >
                        <table className="table table-head-fixed text-nowrap table-hover">
                          <thead>
                            <tr>
                              <th>Model</th>
                              <th>Process Code</th>
                              <th>Defect Code</th>
                              <th>Total NG Ratio</th>
                              {/* Dynamically generate table headers for the date columns */}
                              {this.state.report2.length > 0 &&
                                Object.keys(this.state.report2[0])
                                  .filter((key) => {
                                    // Filter keys that look like dates in 'dd/mm/yyyy' format
                                    const datePattern = /^\d{4}-\d{2}-\d{2}$/;
                                    return datePattern.test(key); // Match only valid date keys
                                  })
                                  .map((dateKey, index) => (
                                    <th key={index}>{dateKey}</th> // Display the date as the column header
                                  ))}
                            </tr>
                          </thead>

                          <tbody>{this.renderreport2()}</tbody>
                        </table>
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

export default NGratiorecord;
