import React, { Component } from "react";
import { httpClient } from "../../utils/HttpClient";
import ReactApexChart from "react-apexcharts";


class Report extends Component {
  constructor(props) {
    super(props);
    this.state = {
      table_emp:[],
      series:[],
      options: {},


    };
  }

  componentDidMount= async ()=> {
    let command = await httpClient.get("HoldCo2/HoldoutputCo2");
    // console.log(command.data.result);
    let salary_group = await httpClient.post("testemp/salary_group")
      console.log(salary_group.data.result);
    this.setState({table_emp:command.data.result,

      series: [
        {
	name: "persons",
          data: [
          salary_group.data.result[0].qty,
          salary_group.data.result[1].qty,
          salary_group.data.result[2].qty,
          // salary_group.data.result[3].qty,
          // salary_group.data.result[4].qty,
        ],
        },
      ],

      options: {
        chart: {
          height: 350,
          type: "bar",
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val;
          },
        },
        xaxis: {
          categories: [
            salary_group.data.result[0].salary_range,
            salary_group.data.result[1].salary_range,
            salary_group.data.result[2].salary_range,
            // salary_group.data.result[3].salary_range,
            // salary_group.data.result[4].salary_range,
        ],
        },
        title: {
          align: "center",
          text: "Monthly Inflation in Argentina, 2002",
        },
      },});
  };
  renderTableRow = () => {
    try {
      if (this.state.table_emp !== null) {
        return this.state.table_emp.map((item) => (
          <tr>
            <td>{item.emp_id}</td>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.hire_date}</td>
            <td>{item.job_id}</td>
            <td>{item.salary}</td>
            <td>{item.manager_id}</td>
            <td>{item.dept_id}</td>
          </tr>
        ));
      }
    } catch (error) {}
  };
  render() {
    console.log(this.state.table_emp);
    return <div>
        <div className="content-wrapper">
    <div className="card card-primary">
      <div className="card-header">
        <h3 className="card-title">Data</h3>
      </div>
      <div className="card-body">
        <table className="table table-head-fixed table-hover text-nowrap">
          <thead>
            <tr>
              <th>emp id</th>
              <th>first name</th>
              <th>last name</th>
              <th>Email</th>
              <th>phone</th>
              <th>hire date</th>
              <th>job id</th>
              <th>salary</th>
              <th>manager_id</th>
              <th>dept_id</th>
            </tr>
          </thead>
          {/* <tbody>
            <tr>
              <td>0001</td>
              <td>AA</td>
              <td>0008825</td>
            </tr>
            <tr>
              <td>0002</td>
              <td>VBFEF</td>
              <td>0001111</td>
            </tr>
          </tbody> */}
          {this.renderTableRow()}
        </table>
      </div>
    </div>
  </div>;
  <div className="content-wrapper">
    <div className="card card-primary">
      <div className="card-header">
        <h3 className="card-title">chart</h3>
      </div>
      <div className="chart">
     <div id="chart">
          <ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
     </div>
</div>
    </div>
  </div>;
  </div>

  }
}

export default Report;

