import React, { Component } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Table, Badge, Menu, Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./index.css";
import { httpClient } from "../../utils/HttpClient";
import { server, key } from "../../constants";

class Usestate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      dataSub: [],
    };
  }

  GetTable1 = async (event) => {
    const datanew = [];

    let result1 = await httpClient.get(server.STATE1_URL);

    for (let i = 0; i < result1.data.resultstate1.length; i++) {
      const item = result1.data.resultstate1[i];
      datanew.push({
        key: i,
         id: item.id,
        Model: item.Model,
        Barcode: item.Barcode,
        Axial_Play: item.Axial_Play,
        Oil_Top: item.Oil_Top,
        Oil_Bottom: item.Oil_Bottom,
        MC_Axial_Play: item.MC_Axial_Play,
        MC_Oil_Top: item.MC_Oil_Top,
        MC_Oil_Bottom: item.MC_Oil_Bottom,
      });
    }
    this.setState({ data: datanew });
  };

  GetTable2 = async (event) => {
    const columns = [
      { title: "ID", dataIndex: "id", key: "id" },
      { title: "MC1", dataIndex: "MC_Axial_Play", key: "MC_Axial_Play" },
      { title: "MC1", dataIndex: "MC_Oil_Top", key: "MC_Oil_Top" },
      { title: "MC3", dataIndex: "MC_Oil_Bottom", key: "MC_Oil_Bottom" },
    ];
    const data2 = [];
    let result2 = await httpClient.get(server.STATE1_URL);
    for (let i = 0; i < result2.data.resultstate1.length; i++) {
      const item = result2.data.resultstate1[i];
      data2.push({
        key: i,
        id: item.id,
        MC_Axial_Play: item.MC_Axial_Play,
        MC_Oil_Top: item.MC_Oil_Top,
        MC_Oil_Bottom: item.MC_Oil_Bottom,
      });
    }
    this.setState({ dataSub: data2 });
  };

  render() {
 
    const columns = [
      { title: "ID", dataIndex: "id", key: "id" },
      { title: "Model", dataIndex: "Model", key: "Model" },
      { title: "Barcode", dataIndex: "Barcode", key: "Barcode" },
      { title: "Axial_Play", dataIndex: "Axial_Play", key: "Axial_Play" },
      { title: "Oil_Top", dataIndex: "Oil_Top", key: "Oil_Top" },
      { title: "Oil_Bottom", dataIndex: "Oil_Bottom", key: "Oil_Bottom" },
    ];

    const expandedSub = (record) => {
      const columns = [
    
        {
          title: "MC_Axial_Play",
          dataIndex: "MC_Axial_Play",
          key: "MC_Axial_Play",
        },

        { title: "MC_Oil_Top", dataIndex: "MC_Oil_Top", key: "MC_Oil_Top" },

        {
          title: "MC_Oil_Bottom",
          dataIndex: "MC_Oil_Bottom",
          key: "MC_Oil_Bottom",
        },
      ];
      console.log("record", record);
      const data = [];

      const item = this.state.dataSub[record.key];
      data.push({
        key: record.key,
        id: item.id,
        MC_Axial_Play: item.MC_Axial_Play,
        MC_Oil_Top: item.MC_Oil_Top,
        MC_Oil_Bottom: item.MC_Oil_Bottom,
      });

      return <Table columns={columns} dataSource={data} pagination={false} />;
    };

    return (
      <div className="content-wrapper">
        <div class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1 class="m-0 text-dark">SPC data table</h1>
              </div>
            </div>
          </div>
        </div>

        <div class="content">
          <div class="container-fluid">
            <div class="card card-primary">
              <div class="card-header"></div>
              <div class="card-body">
                <div class="col-11">
                  <button
                    onClick={async () => {
                      await this.GetTable1();
                      await this.GetTable2();
                    }}
                  >
                    Submit
                  </button>
                </div>

                <Table
                  className="components-table-demo-nested"
                  columns={columns}
                  expandedRowRender={(record) => expandedSub(record)}
                  rowKey={(record, index) => record.id}
                  dataSource={this.state.data}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    ReactDOM.render(<this.GetTable1 />, document.getElementById("container"));
  }
}

export default Usestate;
