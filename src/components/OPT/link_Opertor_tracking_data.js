import React, { Component } from "react";
import { key, server } from "../../constants";
import { httpClient } from "../../utils/HttpClient";
import moment from "moment";
import { CSVLink } from "react-csv";
class link_Opertor_tracking_data extends Component {
  constructor(props) {
    super(props);

    this.state = {
      startDate: moment().format("YYYY-MM-DD"),
      line: "",
      Raw_Dat: [],
      report: [],
      loading: false, // เพิ่มสถานะการโหลด
    };
  }
  componentDidMount = async () => {
    const { location } = this.props;
    const { state } = location;
    const urlPrams = new URLSearchParams(window.location.search);

    if (urlPrams.toString() !== "") {
      console.log(urlPrams);
      const startDate_like = urlPrams.get("startDate");
      const line_like = urlPrams.get("line");

      this.setState(
        {
          startDate: startDate_like,
          line: line_like,
          Raw_Dat: [],
        },
        () => {
          // ดึงข้อมูลหลังจากตั้งค่า state
          this.doGetData();
        }
      );
    }
  };

  doGetData = async () => {
    this.setState({ loading: true }); // ตั้งค่า loading เป็น true เมื่อเริ่มดึงข้อมูล
    try {
      const result = await httpClient.get(
        server.REPORTLINK_URL +
          "/" +
          this.state.startDate +
          "/" +
          this.state.line
      );
      console.log(result);

      let rawData = result.data.listRawData;
      console.log(rawData);
      console.log(rawData.length);
      for (let i = 1; i < rawData.length; i++) {
        rawData[0].push(...rawData[i]);
      }
      this.setState({ Raw_Dat: rawData[0] });
      console.log(this.state.Raw_Dat);

      // อัพเดต state
      this.setState({
        report: result.data.result,
        isDisable: false,
      });
    } catch (error) {
      console.error(error);
      this.setState({ loading: false });
    }
  };

  tablereport = () => {
    if (this.state.report.length > 0) {
      return this.state.report.map((item, index) => (
        <tr key={index}>
          {" "}
          {/* เพิ่ม key ในแต่ละแถว */}
          <td>{item["Date"]}</td>
          <td>{item["Time"]}</td>
          <td>{item["Line_No"]}</td>
          <td>{item["Emp_Code"]}</td>
          <td>{item["Emp_Name"]}</td>
          <td>{item["Process_Name"]}</td>
          <td>{item["shift"]}</td>
        </tr>
      ));
    }
    return (
      <tr>
        <td colSpan="7">No data available</td>
      </tr>
    );
    {
      /* ถ้าไม่มีข้อมูล */
    }
  };

  render() {
    return (
      <div className="content-wrapper">
        <div className="content" style={{ paddingTop: 70 }}>
          <secsion className="content-header">
            <div className="container-fluid">
              <div className="row mb-2"></div>
            </div>
          </secsion>
          
          <div className="row align-items-center">
  {/* ลิงก์ Back */}
  <div className="col-md-8">
    <a
      href="#"
      onClick={() => {
        this.props.history.push(
          `/Operator_tracking_data?&startDate=${this.state.startDate}`
        );
      }}
    >
      <i className="fa fa-arrow-left"></i> back to Yield Monitoring By Team
    </a>
  </div>

  {/* ปุ่ม Download */}
  <div className="col-md-2 text-end">
    <CSVLink
      data={this.state.Raw_Dat}
      filename={"Daily_operator_record.csv"}
    >
      <button
        type="button"
        className="btn btn-primary"
      >
        Download
      </button>
    </CSVLink>
  </div>
</div>


          <div className="content">
            <div className="container-fluid">
              <div className="card card-primary">
                <div className="row">
                  <div
                    className="card-body table-responsive p-0"
                    style={{ height: 800 }}
                  >
                    <table className="table table-head-fixed text-nowrap table-hover">
                      <thead>
                        <tr align="center">
                          <th width="100">Date</th>
                          <th width="100">Time</th>
                          <th width="100">Line_No</th>
                          <th width="100">Emp_Code</th>
                          <th width="100">Emp_Name</th>
                          <th width="100">Process_Name</th>
                          <th width="100">shift</th>
                        </tr>
                      </thead>
                      <tbody>{this.tablereport()}</tbody>
                    </table>
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
export default link_Opertor_tracking_data;
