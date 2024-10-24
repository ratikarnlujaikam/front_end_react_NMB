import React, { Component } from "react";
import { httpClient } from "../../utils/HttpClient";
import { key, server } from "../../constants";

class Download_list extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null // เก็บไฟล์ที่ถูกเลือก
    };
  }

  componentDidMount() {}

  // เมื่อมีการเลือกไฟล์
  handleFileChange = (event) => {
    this.setState({
      selectedFile: event.target.files[0] // เลือกไฟล์ที่ถูกเลือก
    });
  };

  insertfile = async () => {
    if (this.state.selectedFile) {
      const formData = new FormData(); // สร้าง FormData object เพื่อเก็บไฟล์ที่ถูกเลือก
      formData.append("file", this.state.selectedFile); // เพิ่มไฟล์ลงใน FormData object
  
      try {
        // ส่งคำขอ POST ด้วย FormData object ไปยังเซิร์ฟเวอร์
        const response = await httpClient.post(
          server.INSERT_FROM_FILES_URL,
          formData
        );
        console.log(response.data); // แสดงข้อมูลที่ได้รับจากเซิร์ฟเวอร์ใน console
  
        // ดำเนินการต่อไป โดยอาจจะเรียกใช้ฟังก์ชันอื่น ๆ ที่ต้องการ
      } catch (error) {
        console.error("Error inserting file:", error); // แสดงข้อผิดพลาดในการส่งข้อมูลไฟล์ไปยังเซิร์ฟเวอร์
      }
    } else {
      // ถ้าไม่มีไฟล์ที่ถูกเลือก
      console.error("No file selected.");
    }
  };
  
  

  render() {
    return (
      <div className="content-wrapper">
      <div className="content" >
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-9">
    
              </div>
              <div className="col-sm-3">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="/Home">Home</a>
                  </li>
 
                </ol>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div style={{ marginTop: '100px' }}>
        <div className="table-container">
          <table className="custom-table">
            <thead>
              <tr>
                <th>File Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.state.selectedFile ? this.state.selectedFile.name : 'No file selected'}</td>
                <td>
                  {/* Input element สำหรับการเลือกไฟล์ */}
                  <input type="file" onChange={this.handleFileChange} />
                  {/* Button เพื่อเรียกใช้งานฟังก์ชั่น insertfile เมื่อคลิก */}
                  <button onClick={this.insertfile}>Insert File</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
    );
  }
}

export default Download_list;
