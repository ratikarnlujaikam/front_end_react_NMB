import React, { Component } from "react";
import { server } from "../../constants";
import { httpClient } from "../../utils/HttpClient";
import Swal from "sweetalert2";
import moment from 'moment';
import ReactApexChart from "react-apexcharts";
var ss = require('simple-statistics')

class GRotorLine extends Component {

  format = (num, decimals) => num.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
 });

  componentDidMount() {
    Swal.fire({
      icon: "info",
      title: "Hello!",
      html: "",
      text: "Please ask me how I'm feeling today",
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> Okay!',
    }).then(() => {
      let timerInterval;
      Swal.fire({
        title: "Let me think for a bit",
        timer: 60000,
        // timerProgressBar: true,
        didOpen: async () => {
          Swal.showLoading();
          await this.doGetData();
          Swal.close();
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then(() => {
        //Header names
        this.setState({ header: "This is how I'm feeling today!" });
        this.setState({ AxialPlay: "Axial Play: " });
        this.setState({ OilFill: "Oil Fill:  " });
        this.setState({ Endcap: "Endcap:  " });
        this.setState({ INT: "INT: " });

        //Set status & color conditioning
        this.setState({ OF_Status: "Placeholder" });
        this.setState({ EC_Status: "Placeholder"});
        this.setState({ INT_Status: "Placeholder" });

        Swal.fire({
          title: "Thank you for waiting!",
          text: "please check out finer details below"
        })
      });
    });
  }

  constructor(props) {
    super(props);

    this.state = {
      selectDate: moment().add("days", -1).format("yyyy-MM-DD"),
      dateSelect: moment().add("days", -1).format("DD-MM-yyyy"),

      // Header for each stations
      header: "",
      header_ask: "",
      button: "Click Here!",
      Axialplay: "",
      OilFill: "",
      Endcap: "",
      INT: "",

      // Status of each stations
      AP1_Status: "",
      AP2_Status: "",
      AP3_Status: "",
      OF_Status: "",
      EC_Status: "",
      INT_Status: "",

      // Color of status
      AP1_Color: "",
      AP2_Color: "",
      AP3_Color: "",
      OF_Color: "",
      EC_Color: "",
      INT_Color: "",

      //BoxPlot
      series: [
        {
          type: 'boxPlot', 
          data: [
            {
              x: 'Press 1',
              y: []
            },
            {
              x: 'Press 2',
              y: []
            },
            {
              x: 'Press 3',
              y: []
            }
          ]}
      ],
      options: {
        chart: {
          type: 'boxPlot',
          height: 350
        },
        title: {
          text: 'Basic BoxPlot Chart',
          align: 'left'
        },
        plotOptions: {
          boxPlot: {
            colors: {
              upper: '#f66e76',
              lower: '#f88e96'
            }
          }
        }
      },


      // Data of each stations
      // AP1
      AP1_Data: [],
      AP1_DataAVG: [],
      AP1_Production: 0,
      AP1_Axial_Play: [],
      AP1_Bad_Cycle_Time: [],
      AP1_Bad_Judge: [],
      AP1_Bad_AP_Over: [],
      AP1_Bad_AP_Under: [],
      AP1_Bad_Pre_AP_Over: [],
      AP1_Bad_Pre_AP_Under: [],
      AP1_Bad_AP_Before_Over: [],
      AP1_Bad_AP_Before_Under: [],
      AP1_Bad_AP_After_Over: [],
      AP1_Bad_AP_After_Under: [],
      AP1_Bad_Adjustments: [],
      AP1_Bad_Cycle_Time_P: null,
      AP1_Bad_Judge_P: null,
      AP1_Bad_AP_Over_P: null,
      AP1_Bad_AP_Under_P: null,
      AP1_Bad_Pre_AP_Over_P: null,
      AP1_Bad_Pre_AP_Under_P: null,
      AP1_Bad_AP_Before_Over_P: null,
      AP1_Bad_AP_Before_Under_P: null,
      AP1_Bad_AP_After_Over_P: null,
      AP1_Bad_AP_After_Under_P: null,
      AP1_Bad_Adjustments_P: null,

      // AP2
      AP2_Data: [],
      AP2_DataAVG: [],
      AP2_Production: 0,
      AP2_Axial_Play: [],
      AP2_Bad_Cycle_Time: [],
      AP2_Bad_Judge: [],
      AP2_Bad_AP_Over: [],
      AP2_Bad_AP_Under: [],
      AP2_Bad_Pre_AP_Over: [],
      AP2_Bad_Pre_AP_Under: [],
      AP2_Bad_AP_Before_Over: [],
      AP2_Bad_AP_Before_Under: [],
      AP2_Bad_AP_After_Over: [],
      AP2_Bad_AP_After_Under: [],
      AP2_Bad_Adjustments: [],
      AP2_Bad_Cycle_Time_P: null,
      AP2_Bad_Judge_P: null,
      AP2_Bad_AP_Over_P: null,
      AP2_Bad_AP_Under_P: null,
      AP2_Bad_Pre_AP_Over_P: null,
      AP2_Bad_Pre_AP_Under_P: null,
      AP2_Bad_AP_Before_Over_P: null,
      AP2_Bad_AP_Before_Under_P: null,
      AP2_Bad_AP_After_Over_P: null,
      AP2_Bad_AP_After_Under_P: null,
      AP2_Bad_Adjustments_P: null,

      // AP3
      AP3_Data: [],
      AP3_DataAVG: [],
      AP3_Production: 0,
      AP3_Axial_Play: [],
      AP3_Bad_Cycle_Time: [],
      AP3_Bad_Judge: [],
      AP3_Bad_AP_Over: [],
      AP3_Bad_AP_Under: [],
      AP3_Bad_Pre_AP_Over: [],
      AP3_Bad_Pre_AP_Under: [],
      AP3_Bad_AP_Before_Over: [],
      AP3_Bad_AP_Before_Under: [],
      AP3_Bad_AP_After_Over: [],
      AP3_Bad_AP_After_Under: [],
      AP3_Bad_Adjustments: [],
      AP3_Bad_Cycle_Time_P: null,
      AP3_Bad_Judge_P: null,
      AP3_Bad_AP_Over_P: null,
      AP3_Bad_AP_Under_P: null,
      AP3_Bad_Pre_AP_Over_P: null,
      AP3_Bad_Pre_AP_Under_P: null,
      AP3_Bad_AP_Before_Over_P: null,
      AP3_Bad_AP_Before_Under_P: null,
      AP3_Bad_AP_After_Over_P: null,
      AP3_Bad_AP_After_Under_P: null,
      AP3_Bad_Adjustments_P: null,


      // Boxplot AP

      AP1_Max: null,
      AP1_Q3: null,
      AP1_Med: null,
      AP1_Q1: null,
      AP1_Min: null,

      AP2_Max: null,
      AP2_Q3: null,
      AP2_Med: null,
      AP2_Q1: null,
      AP2_Min: null,

      AP3_Max: null,
      AP3_Q3: null,
      AP3_Med: null,
      AP3_Q1: null,
      AP3_Min: null,


      OFT1_Data: [],
      OFT2_Data: [],
      OFB1_Data: [],
      OFB2_Data: [],
      ECT_Data: [],
      ECB_Data: [],
      INT1_Data: [],
      INT2_Data: [],
    };
  }
  

  doAskDate = () => {
    if (this.state.header !== "") {
      return (
        <div>
          <h5 className= "float-right">Ask me about the other day!
            <div>
              <input
                value={this.state.selectDate}
                onChange={(e) => {
                  this.setState({ 
                    selectDate: e.target.value,
                    dateSelect: moment(e.target.value).format("DD-MM-yyyy")
                  });
                }}
                type="date"
                className="form-control"
                placeholder="When is it?"
                style={{ marginTop: 10 }}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ marginTop: 10 }}
              onClick={(e) => {
                Swal.fire({
                  title: "Let me think for a bit",
                  timer: 60000,
                  // timerProgressBar: true,
                  didOpen: async () => {
                    Swal.showLoading();
                    await this.doGetData();
                    Swal.close();
                  },
                }).then(() => {
                  this.setState({ header: "This is how I'm feeling on " + this.state.dateSelect });
                  Swal.fire({
                    title: "Thank you for waiting!",
                    text: "please check out finer details below"
                  })
                });
              }}
            >
              Submit
            </button>
          </h5>
        </div>
      );
    }
  };

  doGetData = async () => {
    // Get data from backend
    let result = await httpClient.post(
      server.GRLINE_URL +
      "/" +
      this.state.selectDate
    );
    const result_AP1 = result.data.resultAP1[0]
    const resultAVG_AP1 = result.data.resultAP1AVG[0]
    const result_AP2 = result.data.resultAP2[0]
    const resultAVG_AP2 = result.data.resultAP2AVG[0]
    const result_AP3 = result.data.resultAP3[0]
    const resultAVG_AP3 = result.data.resultAP3AVG[0]

    await this.setState({
      AP1_Data: result_AP1, AP1_DataAVG: resultAVG_AP1, AP1_Production: result.data.resultAP1[0].length,
      AP2_Data: result_AP2, AP2_DataAVG: resultAVG_AP2, AP2_Production: result.data.resultAP2[0].length,
      AP3_Data: result_AP3, AP3_DataAVG: resultAVG_AP3, AP3_Production: result.data.resultAP3[0].length,
    })
    console.log(result)
    console.log(this.state.series[0].data[0]);
    console.log(this.state.AP1_Production);





    // clear old data
    await this.setState({
      AP1_Axial_Play: [],
      AP1_Bad_Cycle_Time: [],
      AP1_Bad_Judge: [],
      AP1_Bad_AP_Over: [],
      AP1_Bad_AP_Under: [],
      AP1_Bad_Pre_AP_Over: [],
      AP1_Bad_Pre_AP_Under: [],
      AP1_Bad_AP_Before_Over: [],
      AP1_Bad_AP_Before_Under: [],
      AP1_Bad_AP_After_Over: [],
      AP1_Bad_AP_After_Under: [],
      AP1_Bad_Adjustments: [],
      AP1_Bad_Cycle_Time_P: null,
      AP1_Bad_Judge_P: null,
      AP1_Bad_AP_Over_P: null,
      AP1_Bad_AP_Under_P: null,
      AP1_Bad_Pre_AP_Over_P: null,
      AP1_Bad_Pre_AP_Under_P: null,
      AP1_Bad_AP_Before_Over_P: null,
      AP1_Bad_AP_Before_Under_P: null,
      AP1_Bad_AP_After_Over_P: null,
      AP1_Bad_AP_After_Under_P: null,
      AP1_Bad_Adjustments_P: null,
      AP2_Axial_Play: [],
      AP2_Bad_Cycle_Time: [],
      AP2_Bad_Judge: [],
      AP2_Bad_AP_Over: [],
      AP2_Bad_AP_Under: [],
      AP2_Bad_Pre_AP_Over: [],
      AP2_Bad_Pre_AP_Under: [],
      AP2_Bad_AP_Before_Over: [],
      AP2_Bad_AP_Before_Under: [],
      AP2_Bad_AP_After_Over: [],
      AP2_Bad_AP_After_Under: [],
      AP2_Bad_Adjustments: [],
      AP2_Bad_Cycle_Time_P: null,
      AP2_Bad_Judge_P: null,
      AP2_Bad_AP_Over_P: null,
      AP2_Bad_AP_Under_P: null,
      AP2_Bad_Pre_AP_Over_P: null,
      AP2_Bad_Pre_AP_Under_P: null,
      AP2_Bad_AP_Before_Over_P: null,
      AP2_Bad_AP_Before_Under_P: null,
      AP2_Bad_AP_After_Over_P: null,
      AP2_Bad_AP_After_Under_P: null,
      AP2_Bad_Adjustments_P: null,
      AP3_Axial_Play: [],
      AP3_Bad_Cycle_Time: [],
      AP3_Bad_Judge: [],
      AP3_Bad_AP_Over: [],
      AP3_Bad_AP_Under: [],
      AP3_Bad_Pre_AP_Over: [],
      AP3_Bad_Pre_AP_Under: [],
      AP3_Bad_AP_Before_Over: [],
      AP3_Bad_AP_Before_Under: [],
      AP3_Bad_AP_After_Over: [],
      AP3_Bad_AP_After_Under: [],
      AP3_Bad_Adjustments: [],
      AP3_Bad_Cycle_Time_P: null,
      AP3_Bad_Judge_P: null,
      AP3_Bad_AP_Over_P: null,
      AP3_Bad_AP_Under_P: null,
      AP3_Bad_Pre_AP_Over_P: null,
      AP3_Bad_Pre_AP_Under_P: null,
      AP3_Bad_AP_Before_Over_P: null,
      AP3_Bad_AP_Before_Under_P: null,
      AP3_Bad_AP_After_Over_P: null,
      AP3_Bad_AP_After_Under_P: null,
      AP3_Bad_Adjustments_P: null,

      series: [
        {
          type: 'boxPlot', 
          data: [
            {
              x: 'Press 1',
              y: []
            },
            {
              x: 'Press 2',
              y: []
            },
            {
              x: 'Press 3',
              y: []
            }
          ]}
      ],
    })
    
    // collect bad data AP1
    for (let i = 0; i < this.state.AP1_Data.length; i++) {

      this.state.AP1_Axial_Play.push(this.state.AP1_Data[i].Axial_Play)

      if (this.state.AP1_Data[i].Cycle_Time > 12) {
        this.state.AP1_Bad_Cycle_Time.push(this.state.AP1_Data[i].Cycle_Time)
      }
      if (this.state.AP1_Data[i].Judge === "NG") {
        this.state.AP1_Bad_Judge.push(this.state.AP1_Data[i].Judge)
      }
      if (this.state.AP1_Data[i].Axial_Play > 16) {
        this.state.AP1_Bad_AP_Over.push(this.state.AP1_Data[i].Axial_Play)
      }
      if (this.state.AP1_Data[i].Axial_Play < 12) {
        this.state.AP1_Bad_AP_Under.push(this.state.AP1_Data[i].Axial_Play)
      }
      if (this.state.AP1_Data[i].Pre_Axial_Play > 190) {
        this.state.AP1_Bad_Pre_AP_Over.push(this.state.AP1_Data[i].Pre_Axial_Play)
      }
      if (this.state.AP1_Data[i].Pre_Axial_Play < 150) {
        this.state.AP1_Bad_Pre_AP_Under.push(this.state.AP1_Data[i].Pre_Axial_Play)
      }
      if (this.state.AP1_Data[i].Axial_Play_Before > 16.5) {
        this.state.AP1_Bad_AP_Before_Over.push(this.state.AP1_Data[i].Axial_Play_Before)
      }
      if (this.state.AP1_Data[i].Axial_Play_Before < 13.5) {
        this.state.AP1_Bad_AP_Before_Under.push(this.state.AP1_Data[i].Axial_Play_Before)
      }
      if (this.state.AP1_Data[i].Axial_Play_1 > 15) {
        this.state.AP1_Bad_AP_After_Over.push(this.state.AP1_Data[i].Axial_Play_1)
      }
      if (this.state.AP1_Data[i].Axial_Play_1 < 12 && this.state.AP1_Data[i].Axial_Play_1 !== 0) {
        this.state.AP1_Bad_AP_After_Under.push(this.state.AP1_Data[i].Axial_Play_1)
      }
      if (this.state.AP1_Data[i].Adjustments > 1) {
        this.state.AP1_Bad_Adjustments.push(this.state.AP1_Data[i].Adjustments)
      }      
    }

    // collect bad data AP2
    for (let i = 0; i < this.state.AP2_Data.length; i++) {

      this.state.AP2_Axial_Play.push(this.state.AP2_Data[i].Axial_Play)
    
      if (this.state.AP2_Data[i].Cycle_Time > 12) {
        this.state.AP2_Bad_Cycle_Time.push(this.state.AP2_Data[i].Cycle_Time)
      }
      if (this.state.AP2_Data[i].Judge === "NG") {
        this.state.AP2_Bad_Judge.push(this.state.AP2_Data[i].Judge)
      }
      if (this.state.AP2_Data[i].Axial_Play > 16) {
        this.state.AP2_Bad_AP_Over.push(this.state.AP2_Data[i].Axial_Play)
          }
      if (this.state.AP2_Data[i].Axial_Play < 12) {
        this.state.AP2_Bad_AP_Under.push(this.state.AP2_Data[i].Axial_Play)
      }
      if (this.state.AP2_Data[i].Pre_Axial_Play > 190) {
        this.state.AP2_Bad_Pre_AP_Over.push(this.state.AP2_Data[i].Pre_Axial_Play)
      }
      if (this.state.AP2_Data[i].Pre_Axial_Play < 150) {
        this.state.AP2_Bad_Pre_AP_Under.push(this.state.AP2_Data[i].Pre_Axial_Play)
      }
      if (this.state.AP2_Data[i].Axial_Play_Before > 16.5) {
        this.state.AP2_Bad_AP_Before_Over.push(this.state.AP2_Data[i].Axial_Play_Before)
      }
      if (this.state.AP2_Data[i].Axial_Play_Before < 13.5) {
        this.state.AP2_Bad_AP_Before_Under.push(this.state.AP2_Data[i].Axial_Play_Before)
      }
      if (this.state.AP2_Data[i].Axial_Play_1 > 15) {
        this.state.AP2_Bad_AP_After_Over.push(this.state.AP2_Data[i].Axial_Play_1)
      }
      if (this.state.AP2_Data[i].Axial_Play_1 < 12 && this.state.AP2_Data[i].Axial_Play_1 !== 0) {
        this.state.AP2_Bad_AP_After_Under.push(this.state.AP2_Data[i].Axial_Play_1)
      }
      if (this.state.AP2_Data[i].Adjustments > 1) {
        this.state.AP2_Bad_Adjustments.push(this.state.AP2_Data[i].Adjustments)
      }      
    }

    // collect bad data AP3
    for (let i = 0; i < this.state.AP3_Data.length; i++) {

      this.state.AP3_Axial_Play.push(this.state.AP3_Data[i].Axial_Play)

      if (this.state.AP3_Data[i].Cycle_Time > 12) {
        this.state.AP3_Bad_Cycle_Time.push(this.state.AP3_Data[i].Cycle_Time)
      }
      if (this.state.AP3_Data[i].Judge === "NG") {
        this.state.AP3_Bad_Judge.push(this.state.AP3_Data[i].Judge)
      }
      if (this.state.AP3_Data[i].Axial_Play > 16) {
        this.state.AP3_Bad_AP_Over.push(this.state.AP3_Data[i].Axial_Play)
      }
      if (this.state.AP3_Data[i].Axial_Play < 12) {
        this.state.AP3_Bad_AP_Under.push(this.state.AP3_Data[i].Axial_Play)
      }
      if (this.state.AP3_Data[i].Pre_Axial_Play > 190) {
        this.state.AP3_Bad_Pre_AP_Over.push(this.state.AP3_Data[i].Pre_Axial_Play)
      }
      if (this.state.AP3_Data[i].Pre_Axial_Play < 150) {
        this.state.AP3_Bad_Pre_AP_Under.push(this.state.AP3_Data[i].Pre_Axial_Play)
      }
      if (this.state.AP3_Data[i].Axial_Play_Before > 16.5) {
        this.state.AP3_Bad_AP_Before_Over.push(this.state.AP3_Data[i].Axial_Play_Before)
      }
      if (this.state.AP3_Data[i].Axial_Play_Before < 13.5) {
        this.state.AP3_Bad_AP_Before_Under.push(this.state.AP3_Data[i].Axial_Play_Before)
      }
      if (this.state.AP3_Data[i].Axial_Play_1 > 15) {
        this.state.AP3_Bad_AP_After_Over.push(this.state.AP3_Data[i].Axial_Play_1)
      }
      if (this.state.AP3_Data[i].Axial_Play_1 < 12 && this.state.AP3_Data[i].Axial_Play_1 !== 0) {
        this.state.AP3_Bad_AP_After_Under.push(this.state.AP3_Data[i].Axial_Play_1)
      }
      if (this.state.AP3_Data[i].Adjustments > 1) {
        this.state.AP3_Bad_Adjustments.push(this.state.AP3_Data[i].Adjustments)
      }      
    }




    // AP1 boxplot max/min
    for (let i = 0; i < this.state.AP1_Axial_Play.length; i++) {
      if (this.state.AP1_Max === null) {
        this.setState({AP1_Max: this.state.AP1_Axial_Play[i]})
      }
      if (this.state.AP1_Min === null) {
        this.setState({AP1_Min: this.state.AP1_Axial_Play[i]})
      }
      if (this.state.AP1_Max < this.state.AP1_Axial_Play[i]) {
        this.setState({AP1_Max: this.state.AP1_Axial_Play[i]})
      }
      if (this.state.AP1_Min > this.state.AP1_Axial_Play[i]) {
        this.setState({AP1_Min: this.state.AP1_Axial_Play[i]})
      }
    }

    // AP2 boxplot max/min
    for (let i = 0; i < this.state.AP2_Axial_Play.length; i++) {
      if (this.state.AP2_Max === null) {
        this.setState({AP2_Max: this.state.AP2_Axial_Play[i]})
      }
      if (this.state.AP2_Min === null) {
        this.setState({AP2_Min: this.state.AP2_Axial_Play[i]})
      }
      if (this.state.AP2_Max > this.state.AP2_Axial_Play[i]) {
        this.setState({AP2_Max: this.state.AP2_Axial_Play[i]})
      }
      if (this.state.AP2_Min < this.state.AP2_Axial_Play[i]) {
        this.setState({AP2_Min: this.state.AP2_Axial_Play[i]})
      }
    }

    // AP3 boxplot max/min
    for (let i = 0; i < this.state.AP3_Axial_Play.length; i++) {
      if (this.state.AP3_Max === null) {
        this.setState({AP3_Max: this.state.AP3_Axial_Play[i]})
      }
      if (this.state.AP3_Min === null) {
        this.setState({AP3_Min: this.state.AP3_Axial_Play[i]})
      }
      if (this.state.AP3_Max > this.state.AP3_Axial_Play[i]) {
        this.setState({AP3_Max: this.state.AP3_Axial_Play[i]})
      }
      if (this.state.AP3_Min < this.state.AP3_Axial_Play[i]) {
        this.setState({AP3_Min: this.state.AP3_Axial_Play[i]})
      }
    }

    // Calculate Data for boxplot
    if (this.state.AP1_Axial_Play.length !== 0) {
      let AP1Q1 = ss.quantile(this.state.AP1_Axial_Play, 0.25)
      this.setState({AP1_Q1: AP1Q1})
      let AP1Q3 = ss.quantile(this.state.AP1_Axial_Play, 0.75)
      this.setState({AP1_Q3: AP1Q3})
      let AP1Med = ss.median(this.state.AP1_Axial_Play)
      this.setState({AP1_Med: AP1Med})

      this.state.series[0].data[0].y.push(this.state.AP1_Min, this.state.AP1_Q1, this.state.AP1_Med, this.state.AP1_Q3, this.state.AP1_Max)

      this.setState({test: 1})

      console.log(this.state.series[0].data[0].y);
    }

    if (this.state.AP2_Axial_Play.length !== 0) {
      let AP2Q1 = ss.quantile(this.state.AP2_Axial_Play, 0.25)
      this.setState({AP2_Q1: AP2Q1})
      let AP2Q3 = ss.quantile(this.state.AP2_Axial_Play, 0.75)
      this.setState({AP2_Q3: AP2Q3})
      let AP2Med = ss.median(this.state.AP2_Axial_Play)
      this.setState({AP2_Med: AP2Med})

      this.state.series[0].data[1].y.push(this.state.AP2_Min, this.state.AP2_Q1, this.state.AP2_Med, this.state.AP2_Q3, this.state.AP2_Max)


      console.log(this.state.series[0].data[1].y);
    }

    if (this.state.AP3_Axial_Play.length !== 0) {
      let AP3Q1 = ss.quantile(this.state.AP3_Axial_Play, 0.25)
      this.setState({AP3_Q1: AP3Q1})
      let AP3Q3 = ss.quantile(this.state.AP3_Axial_Play, 0.75)
      this.setState({AP3_Q3: AP3Q3})
      let AP3Med = ss.median(this.state.AP3_Axial_Play)
      this.setState({AP3_Med: AP3Med})

      this.state.series[0].data[2].y.push(this.state.AP3_Min, this.state.AP3_Q1, this.state.AP3_Med, this.state.AP3_Q3, this.state.AP3_Max)

      console.log(this.state.series[0].data[2].y);
    }

    // Calculate NG% AP1
    await this.setState({
      // AP1
      AP1_Bad_Cycle_Time_P: this.format((this.state.AP1_Bad_Cycle_Time.length/this.state.AP1_Data.length)*100),
      AP1_Bad_Judge_P: this.format((this.state.AP1_Bad_Judge.length/this.state.AP1_Data.length)*100),
      AP1_Bad_AP_Over_P: this.format((this.state.AP1_Bad_AP_Over.length/this.state.AP1_Data.length)*100),
      AP1_Bad_AP_Under_P: this.format((this.state.AP1_Bad_AP_Under.length/this.state.AP1_Data.length)*100),
      AP1_Bad_Pre_AP_Over_P: this.format((this.state.AP1_Bad_Pre_AP_Over.length/this.state.AP1_Data.length)*100),
      AP1_Bad_Pre_AP_Under_P: this.format((this.state.AP1_Bad_Pre_AP_Under.length/this.state.AP1_Data.length)*100),
      AP1_Bad_AP_Before_Over_P: this.format((this.state.AP1_Bad_AP_Before_Over.length/this.state.AP1_Data.length)*100),
      AP1_Bad_AP_Before_Under_P: this.format((this.state.AP1_Bad_AP_Before_Under.length/this.state.AP1_Data.length)*100),
      AP1_Bad_AP_After_Over_P: this.format((this.state.AP1_Bad_AP_After_Over.length/this.state.AP1_Data.length)*100),
      AP1_Bad_AP_After_Under_P: this.format((this.state.AP1_Bad_AP_After_Under.length/this.state.AP1_Data.length)*100),
      AP1_Bad_Adjustments_P: this.format((this.state.AP1_Bad_Adjustments.length/this.state.AP1_Data.length)*100),  
    })
    
    // Calculate NG% AP2
    await this.setState({
      // AP2
      AP2_Bad_Cycle_Time_P: this.format((this.state.AP2_Bad_Cycle_Time.length/this.state.AP2_Data.length)*100),
      AP2_Bad_Judge_P: this.format((this.state.AP2_Bad_Judge.length/this.state.AP2_Data.length)*100),
      AP2_Bad_AP_Over_P: this.format((this.state.AP2_Bad_AP_Over.length/this.state.AP2_Data.length)*100),
      AP2_Bad_AP_Under_P: this.format((this.state.AP2_Bad_AP_Under.length/this.state.AP2_Data.length)*100),
      AP2_Bad_Pre_AP_Over_P: this.format((this.state.AP2_Bad_Pre_AP_Over.length/this.state.AP2_Data.length)*100),
      AP2_Bad_Pre_AP_Under_P: this.format((this.state.AP2_Bad_Pre_AP_Under.length/this.state.AP2_Data.length)*100),
      AP2_Bad_AP_Before_Over_P: this.format((this.state.AP2_Bad_AP_Before_Over.length/this.state.AP2_Data.length)*100),
      AP2_Bad_AP_Before_Under_P: this.format((this.state.AP2_Bad_AP_Before_Under.length/this.state.AP2_Data.length)*100),
      AP2_Bad_AP_After_Over_P: this.format((this.state.AP2_Bad_AP_After_Over.length/this.state.AP2_Data.length)*100),
      AP2_Bad_AP_After_Under_P: this.format((this.state.AP2_Bad_AP_After_Under.length/this.state.AP2_Data.length)*100),
      AP2_Bad_Adjustments_P: this.format((this.state.AP2_Bad_Adjustments.length/this.state.AP2_Data.length)*100),  
    })
  
    // Calculate NG% AP3
    await this.setState({
      // AP3
      AP3_Bad_Cycle_Time_P: this.format((this.state.AP3_Bad_Cycle_Time.length/this.state.AP3_Data.length)*100),
      AP3_Bad_Judge_P: this.format((this.state.AP3_Bad_Judge.length/this.state.AP3_Data.length)*100),
      AP3_Bad_AP_Over_P: this.format((this.state.AP3_Bad_AP_Over.length/this.state.AP3_Data.length)*100),
      AP3_Bad_AP_Under_P: this.format((this.state.AP3_Bad_AP_Under.length/this.state.AP3_Data.length)*100),
      AP3_Bad_Pre_AP_Over_P: this.format((this.state.AP3_Bad_Pre_AP_Over.length/this.state.AP3_Data.length)*100),
      AP3_Bad_Pre_AP_Under_P: this.format((this.state.AP3_Bad_Pre_AP_Under.length/this.state.AP3_Data.length)*100),
      AP3_Bad_AP_Before_Over_P: this.format((this.state.AP3_Bad_AP_Before_Over.length/this.state.AP3_Data.length)*100),
      AP3_Bad_AP_Before_Under_P: this.format((this.state.AP3_Bad_AP_Before_Under.length/this.state.AP3_Data.length)*100),
      AP3_Bad_AP_After_Over_P: this.format((this.state.AP3_Bad_AP_After_Over.length/this.state.AP3_Data.length)*100),
      AP3_Bad_AP_After_Under_P: this.format((this.state.AP3_Bad_AP_After_Under.length/this.state.AP3_Data.length)*100),
      AP3_Bad_Adjustments_P: this.format((this.state.AP3_Bad_Adjustments.length/this.state.AP3_Data.length)*100),  
    })
  
    // AP1 Status
    // No Production
    if (this.state.AP1_Production <= 100) {
      this.setState({
        AP1_Color: "gray",
        AP1_Status: "Press 1 has no production",
      })
    }
    // Red NGs
    else if (this.state.AP1_Bad_Judge_P >= 1.5) {
      this.setState({
        AP1_Color: "red",
        AP1_Status: "Press 1 has high amount NGs",
      })
    }
    // Orange Cycle Time
    else if (this.state.AP1_Bad_Cycle_Time_P >= 10 && this.state.AP1_Bad_AP_After_Over_P >= 10) {
      this.setState({
        AP1_Color: "orange",
        AP1_Status: "Press 1's cycle time is very high due to adjustments",
      })
    }
    // Yellow
    else if (this.state.AP1_Bad_Pre_AP_Over_P >= 50) {
      this.setState({
        AP1_Color: "yellow",
        AP1_Status: "Press 1: Pre Axial Play data is very high",
      })
    }
    // Green
    else {
      this.setState({
        AP1_Color: "green",
        AP1_Status: "Press 1 is doing well!",
      })
    }  

    // AP2 Status
    // No Production
    if (this.state.AP2_Production <= 100) {
      this.setState({
        AP2_Color: "gray",
        AP2_Status: "Press 2 has no production",
      })
    }
    // Red NGs
    else if (this.state.AP2_Bad_Judge_P >= 1.5) {
      this.setState({
        AP2_Color: "red",
        AP2_Status: "Press 2 has high amount NGs",
      })
    }
    // Orange Cycle Time
    else if (this.state.AP2_Bad_Cycle_Time_P >= 10 && this.state.AP2_Bad_AP_After_Over_P >= 10) {
      this.setState({
        AP2_Color: "orange",
        AP2_Status: "Press 2's cycle time is very high due to adjustments",
      })
    }
    // Yellow
    else if (this.state.AP2_Bad_Pre_AP_Over_P >= 50) {
      this.setState({
        AP2_Color: "yellow",
        AP2_Status: "Press 2: Pre Axial Play data is very high",
      })
    }
    // Green
    else {
      this.setState({
        AP2_Color: "green",
        AP2_Status: "Press 2 is doing well!",
      })
    }  

    // AP3 Status
    // No Production
    if (this.state.AP3_Production <= 100) {
      this.setState({
        AP3_Color: "gray",
        AP3_Status: "Press 3 has no production",
      })
    }
    // Red NGs
    else if (this.state.AP3_Bad_Judge_P >= 1.5) {
      this.setState({
        AP3_Color: "red",
        AP3_Status: "Press 3 has high amount NGs",
      })
    }
    // Orange Cycle Time
    else if (this.state.AP3_Bad_Cycle_Time_P >= 10 && this.state.AP3_Bad_AP_After_Over_P >= 10) {
      this.setState({
        AP3_Color: "orange",
        AP3_Status: "Press 3's cycle time is very high due to adjustments",
      })
    }
    // Yellow
    else if (this.state.AP3_Bad_Pre_AP_Over_P >= 50) {
      this.setState({
        AP3_Color: "yellow",
        AP3_Status: "Press 3: Pre Axial Play data is very high",
      })
    }
    // Green
    else {
      this.setState({
        AP3_Color: "green",
        AP3_Status: "Press 3 is doing well!",
      })
    }
  };

  renderTableAP1 = () => {
    console.log(this.state.AP1_DataAVG);
    // console.log(this.state.AP1_Bad_Cycle_Time);
    // console.log(this.state.AP1_Bad_Judge);
    // console.log(this.state.AP1_Bad_AP_Over);
    // console.log(this.state.AP1_Bad_AP_Under_P);
    // console.log(this.state.AP1_Bad_AP_Under);
    // console.log(this.state.AP1_Bad_Pre_AP_Over);
    // console.log(this.state.AP1_Bad_Pre_AP_Under);
    // console.log(this.state.AP1_Bad_AP_Before_Over);
    // console.log(this.state.AP1_Bad_AP_Before_Under);
    // console.log(this.state.AP1_Bad_AP_After_Over);
    // console.log(this.state.AP1_Bad_AP_After_Under);
    // console.log(this.state.AP1_Bad_Adjustments);
    return this.state.AP1_DataAVG.map((item) => (
      <tr>
        <td>{item["Time"]}</td>
        <td style = {{ color: item["Prod"] > 170  ? 'green' : item["Prod"] < 130  ? 'red' : 'black'}}>{item["Prod"]}</td>
        <td style = {{ color: item["Cycle_Time"] > 12  ? 'red' : 'black'}}>{item["Cycle_Time"]}</td>
        <td style = {{ color: item["Judge"] > 5  ? 'red' : 'black'}}>{item["Judge"]}</td>
        <td style = {{ color: item["Axial_Play"] > 16  ? 'red' : item["Axial_Play"] < 12  ? 'red' : 'black'}}>{item["Axial_Play"]}</td>
        <td style = {{ color: item["Pre_Axial_Play"] > 190  ? 'red' : item["Pre_Axial_Play"] < 150  ? 'red' : 'black'}}>{item["Pre_Axial_Play"]}</td>     
        <td style = {{ color: item["Axial_Play_Before"] > 16.5  ? 'red' : item["Axial_Play_Before"] < 13.5  ? 'red' : 'black'}}>{item["Axial_Play_Before"]}</td>
        <td style = {{ color: item["Axial_Play_1"] > 15  ? 'red' : item["Axial_Play_1"] < 12  ? item["Axial_Play_1"] !== 0  ? 'red' : 'black' : 'black'}}>{item["Axial_Play_1"]}</td>
        <td style = {{ color: item["Adjustments"] > 1  ? 'red' : 'black'}}>{item["Adjustments"]}</td>
      </tr>
    ));
  };

  renderTableAP2 = () => {
    console.log(this.state.AP2_DataAVG);
    // console.log(this.state.AP2_Bad_Cycle_Time);
    // console.log(this.state.AP2_Bad_Judge);
    // console.log(this.state.AP2_Bad_AP_Over);
    // console.log(this.state.AP2_Bad_AP_Under_P);
    // console.log(this.state.AP2_Bad_AP_Under);
    // console.log(this.state.AP2_Bad_Pre_AP_Over);
    // console.log(this.state.AP2_Bad_Pre_AP_Under);
    // console.log(this.state.AP2_Bad_AP_Before_Over);
    // console.log(this.state.AP2_Bad_AP_Before_Under);
    // console.log(this.state.AP2_Bad_AP_After_Over);
    // console.log(this.state.AP2_Bad_AP_After_Under);
    // console.log(this.state.AP2_Bad_Adjustments);
    return this.state.AP2_DataAVG.map((item) => (
      <tr>
        <td>{item["Time"]}</td>
        <td style = {{ color: item["Prod"] > 170  ? 'green' : item["Prod"] < 130  ? 'red' : 'black'}}>{item["Prod"]}</td>
        <td style = {{ color: item["Cycle_Time"] > 12  ? 'red' : 'black'}}>{item["Cycle_Time"]}</td>
        <td style = {{ color: item["Judge"] > 5  ? 'red' : 'black'}}>{item["Judge"]}</td>
        <td style = {{ color: item["Axial_Play"] > 16  ? 'red' : item["Axial_Play"] < 12  ? 'red' : 'black'}}>{item["Axial_Play"]}</td>
        <td style = {{ color: item["Pre_Axial_Play"] > 190  ? 'red' : item["Pre_Axial_Play"] < 150  ? 'red' : 'black'}}>{item["Pre_Axial_Play"]}</td>     
        <td style = {{ color: item["Axial_Play_Before"] > 16.5  ? 'red' : item["Axial_Play_Before"] < 13.5  ? 'red' : 'black'}}>{item["Axial_Play_Before"]}</td>
        <td style = {{ color: item["Axial_Play_1"] > 15  ? 'red' : item["Axial_Play_1"] < 12  ? item["Axial_Play_1"] !== 0  ? 'red' : 'black' : 'black'}}>{item["Axial_Play_1"]}</td>
        <td style = {{ color: item["Adjustments"] > 1  ? 'red' : 'black'}}>{item["Adjustments"]}</td>
      </tr>
    ));
  };

  renderTableAP3 = () => {
    console.log(this.state.AP3_DataAVG);
    // console.log(this.state.AP3_Bad_Cycle_Time);
    // console.log(this.state.AP3_Bad_Judge);
    // console.log(this.state.AP3_Bad_AP_Over);
    // console.log(this.state.AP3_Bad_AP_Under_P);
    // console.log(this.state.AP3_Bad_AP_Under);
    // console.log(this.state.AP3_Bad_Pre_AP_Over);
    // console.log(this.state.AP3_Bad_Pre_AP_Under);
    // console.log(this.state.AP3_Bad_AP_Before_Over);
    // console.log(this.state.AP3_Bad_AP_Before_Under);
    // console.log(this.state.AP3_Bad_AP_After_Over);
    // console.log(this.state.AP3_Bad_AP_After_Under);
    // console.log(this.state.AP3_Bad_Adjustments);
    return this.state.AP3_DataAVG.map((item) => (
      <tr>
        <td>{item["Time"]}</td>
        <td style = {{ color: item["Prod"] > 170  ? 'green' : item["Prod"] < 130  ? 'red' : 'black'}}>{item["Prod"]}</td>
        <td style = {{ color: item["Cycle_Time"] > 12  ? 'red' : 'black'}}>{item["Cycle_Time"]}</td>
        <td style = {{ color: item["Judge"] > 5  ? 'red' : 'black'}}>{item["Judge"]}</td>
        <td style = {{ color: item["Axial_Play"] > 16  ? 'red' : item["Axial_Play"] < 12  ? 'red' : 'black'}}>{item["Axial_Play"]}</td>
        <td style = {{ color: item["Pre_Axial_Play"] > 190  ? 'red' : item["Pre_Axial_Play"] < 150  ? 'red' : 'black'}}>{item["Pre_Axial_Play"]}</td>     
        <td style = {{ color: item["Axial_Play_Before"] > 16.5  ? 'red' : item["Axial_Play_Before"] < 13.5  ? 'red' : 'black'}}>{item["Axial_Play_Before"]}</td>
        <td style = {{ color: item["Axial_Play_1"] > 15  ? 'red' : item["Axial_Play_1"] < 12  ? item["Axial_Play_1"] !== 0  ? 'red' : 'black' : 'black'}}>{item["Axial_Play_1"]}</td>
        <td style = {{ color: item["Adjustments"] > 1  ? 'red' : 'black'}}>{item["Adjustments"]}</td>
      </tr>
    ));
  };

  renderStatusAP = () => {

    if (this.state.AP1_Status !== "") {
    return (
      <div className="row">
        <h3>{this.state.AxialPlay} &nbsp; <br/>
          <h3 style={{ color: this.state.AP1_Color }}>&nbsp; &nbsp; &nbsp; &nbsp; {this.state.AP1_Status}</h3>
          <h3 style={{ color: this.state.AP2_Color }}>&nbsp; &nbsp; &nbsp; &nbsp; {this.state.AP2_Status}</h3>
          <h3 style={{ color: this.state.AP3_Color }}>&nbsp; &nbsp; &nbsp; &nbsp; {this.state.AP3_Status}</h3>
        </h3>

      </div>
    );
    }
  };

  renderStatusOF = () => {
    if (this.state.OF_Status !== "") {
    return (
      <div className="row">
        <h3>{this.state.OilFill} &nbsp;</h3>
        <h3 style={{ color: this.state.OF_Color }}>{this.state.OF_Status}</h3>
      </div>
    );
    }
  };

  renderStatusEC = () => {
    if (this.state.EC_Status !== "") {
      return (
      <div className="row">
        <h3>{this.state.Endcap} &nbsp;</h3>
        <h3 style={{ color: this.state.EC_Color }}>{this.state.EC_Status}</h3>
      </div>
      );
    }
  };

  renderStatusINT = () => {
    if (this.state.INT_Status !== "") {
      return (
        <div className="row">
          <h3>{this.state.INT} &nbsp;</h3>
          <h3 style={{ color: this.state.INT_Color }}>{this.state.INT_Status}</h3>
        </div>
      );
    }
  };

  renderBoxPlotAP = () => {
      console.log(this.state.AP1_Axial_Play);
    if (this.state.test === 0) {
      return (
          <div id="chart">
            <ReactApexChart 
              options={this.state.options} 
              series={this.state.series} 
              type="boxPlot" 
              height={350} />
          </div>
      )
      }
  }

  render() {
    return (
      <div className="content-wrapper">
        <div className="content" style={{ paddingTop: 50 }}>
          <section className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1>German Rotor Autoline</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="/Home">Home</a>
                    </li>
                    <li className="breadcrumb-item active">
                      German Rotor Autoline
                    </li>
                  </ol>
                </div>
              </div>
            </div>

          </section>
          <div className="content-header">
            <div class="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="card card-primary card-outline">
                    <div className="card-body">
                      <div className="row">
                        <h1>{this.state.header} &nbsp; &nbsp; &nbsp;</h1>
                      </div>
                      {this.doAskDate()}
                      {this.renderStatusAP()}
                      {this.renderStatusOF()}
                      {this.renderStatusEC()}
                      {this.renderStatusINT()}
                    </div>
                    {this.renderBoxPlotAP()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card-body" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div className="card collapsed-card">
            <div className="card-header border-transparent">
              <h3 className="card-title">Axial Play Press 1</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <i className="fas fa-plus" />
                </button>
              </div>
            </div>

            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table m-0">
                  <thead>
                    <tr>
                      <th>Time </th>
                      <th>Production</th>
                      <th>Cycle Time <i
                        class="fas fa-question-circle"
                        style={{ fontSize: 18, color: "Dodgerblue" }}
                        onClick={() => {
                          Swal.fire({
                            icon: "info",
                            title: "Axial Play Press 1",
                            html:
                              this.state.AP1_Bad_Cycle_Time_P +" % of Cycle Time data are over 12 seconds <br>" 
                          });
                        }}
                      ></i></th>
                      <th>NGs <i
                        class="fas fa-question-circle"
                        style={{ fontSize: 18, color: "Dodgerblue" }}
                        onClick={() => {
                          Swal.fire({
                            icon: "info",
                            title: "Axial Play Press 1",
                            html:
                              this.state.AP1_Bad_Judge_P +" % of Axial Play data are NGs <br>" 
                          });
                        }}
                      ></i></th>
                      <th>Axial Play <i
                        class="fas fa-question-circle"
                        style={{ fontSize: 18, color: "Dodgerblue" }}
                        onClick={() => {
                          Swal.fire({
                            icon: "info",
                            title: "Axial Play Press 1",
                            html:
                              this.state.AP1_Bad_AP_Over_P +" % of Axial Play data are over 16.00 <br>" +
                              this.state.AP1_Bad_AP_Under_P +" % of Axial Play data are under 12.00 <br>" 
                          });
                        }}
                      ></i></th>
                      <th>Pre Axial Play <i
                        class="fas fa-question-circle"
                        style={{ fontSize: 18, color: "Dodgerblue" }}
                        onClick={() => {
                          Swal.fire({
                            icon: "info",
                            title: "Axial Play Press 1",
                            html:
                              this.state.AP1_Bad_Pre_AP_Over_P +" % of Pre Axial Play data are over 190.00 <br>" +
                              this.state.AP1_Bad_Pre_AP_Under_P +" % of Axial Play data are under 150.00 <br>" 
                          });
                        }}
                      ></i></th>
                      <th>Before Adjustment <i
                        class="fas fa-question-circle"
                        style={{ fontSize: 18, color: "Dodgerblue" }}
                        onClick={() => {
                          Swal.fire({
                            icon: "info",
                            title: "Axial Play Press 1",
                            html:
                              this.state.AP1_Bad_AP_Before_Over_P +" % of Before Adjustments data are over 16.50 <br>" +
                              this.state.AP1_Bad_Pre_AP_Under_P +" % of Before Adjustments data are under 13.50 <br>"  
                          });
                        }}
                      ></i></th>
                      <th>After 1st Adjustment <i
                        class="fas fa-question-circle"
                        style={{ fontSize: 18, color: "Dodgerblue" }}
                        onClick={() => {
                          Swal.fire({
                            icon: "info",
                            title: "Axial Play Press 1",
                            html:
                              this.state.AP1_Bad_AP_After_Over_P +" % of After Adjustments data are over 15.00 <br>" +
                              this.state.AP1_Bad_AP_After_Under_P +" % of After Adjustments data are under 12.00 <br>"
                          });
                        }}
                      ></i></th>
                      <th>No. of Adjustments <i
                        class="fas fa-question-circle"
                        style={{ fontSize: 18, color: "Dodgerblue" }}
                        onClick={() => {
                          Swal.fire({
                            icon: "info",
                            title: "Axial Play Press 1",
                            html:
                              this.state.AP1_Bad_AP_After_Over_P +" % of Adjustments data are over 1 <br>"
                          });
                        }}
                      ></i></th>
                    </tr>
                  </thead>
                  <tbody>{this.renderTableAP1()}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="card-body" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div className="card collapsed-card">
            <div className="card-header border-transparent">
              <h3 className="card-title">Axial Play Press 2</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <i className="fas fa-plus" />
                </button>
              </div>
            </div>

            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table m-0">
                  <thead>
                    <tr>
                      <th>Time </th>
                      <th>Production</th>
                      <th>Cycle Time <i
                        class="fas fa-question-circle"
                        style={{ fontSize: 18, color: "Dodgerblue" }}
                        onClick={() => {
                          Swal.fire({
                            icon: "info",
                            title: "Axial Play Press 2",
                            html:
                              this.state.AP2_Bad_Cycle_Time_P +" % of Cycle Time data are over 12 seconds <br>" 
                          });
                        }}
                      ></i></th>
                      <th>NGs <i
                        class="fas fa-question-circle"
                        style={{ fontSize: 18, color: "Dodgerblue" }}
                        onClick={() => {
                          Swal.fire({
                            icon: "info",
                            title: "Axial Play Press 2",
                            html:
                              this.state.AP2_Bad_Judge_P +" % of Axial Play data are NGs <br>" 
                          });
                        }}
                      ></i></th>
                      <th>Axial Play <i
                        class="fas fa-question-circle"
                        style={{ fontSize: 18, color: "Dodgerblue" }}
                        onClick={() => {
                          Swal.fire({
                            icon: "info",
                            title: "Axial Play Press 2",
                            html:
                              this.state.AP2_Bad_AP_Over_P +" % of Axial Play data are over 16.00 <br>" +
                              this.state.AP2_Bad_AP_Under_P +" % of Axial Play data are under 12.00 <br>" 
                          });
                        }}
                      ></i></th>
                      <th>Pre Axial Play <i
                        class="fas fa-question-circle"
                        style={{ fontSize: 18, color: "Dodgerblue" }}
                        onClick={() => {
                          Swal.fire({
                            icon: "info",
                            title: "Axial Play Press 2",
                            html:
                              this.state.AP2_Bad_Pre_AP_Over_P +" % of Pre Axial Play data are over 190.00 <br>" +
                              this.state.AP2_Bad_Pre_AP_Under_P +" % of Axial Play data are under 150.00 <br>" 
                          });
                        }}
                      ></i></th>
                      <th>Before Adjustment <i
                        class="fas fa-question-circle"
                        style={{ fontSize: 18, color: "Dodgerblue" }}
                        onClick={() => {
                          Swal.fire({
                            icon: "info",
                            title: "Axial Play Press 2",
                            html:
                              this.state.AP2_Bad_AP_Before_Over_P +" % of Before Adjustments data are over 16.50 <br>" +
                              this.state.AP2_Bad_Pre_AP_Under_P +" % of Before Adjustments data are under 13.50 <br>"  
                          });
                        }}
                      ></i></th>
                      <th>After 1st Adjustment <i
                        class="fas fa-question-circle"
                        style={{ fontSize: 18, color: "Dodgerblue" }}
                        onClick={() => {
                          Swal.fire({
                            icon: "info",
                            title: "Axial Play Press 2",
                            html:
                              this.state.AP2_Bad_AP_After_Over_P +" % of After Adjustments data are over 15.00 <br>" +
                              this.state.AP2_Bad_AP_After_Under_P +" % of After Adjustments data are under 12.00 <br>"
                          });
                        }}
                      ></i></th>
                      <th>No. of Adjustments <i
                        class="fas fa-question-circle"
                        style={{ fontSize: 18, color: "Dodgerblue" }}
                        onClick={() => {
                          Swal.fire({
                            icon: "info",
                            title: "Axial Play Press 2",
                            html:
                              this.state.AP2_Bad_AP_After_Over_P +" % of Adjustments data are over 1 <br>"
                          });
                        }}
                      ></i></th>
                    </tr>
                  </thead>
                  <tbody>{this.renderTableAP2()}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="card-body" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div className="card collapsed-card">
            <div className="card-header border-transparent">
              <h3 className="card-title">Axial Play Press 3</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <i className="fas fa-plus" />
                </button>
              </div>
            </div>

            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table m-0">
                  <thead>
                    <tr>
                      <th>Time </th>
                      <th>Production</th>
                      <th>Cycle Time <i
                        class="fas fa-question-circle"
                        style={{ fontSize: 18, color: "Dodgerblue" }}
                        onClick={() => {
                          Swal.fire({
                            icon: "info",
                            title: "Axial Play Press 3",
                            html:
                              this.state.AP3_Bad_Cycle_Time_P +" % of Cycle Time data are over 12 seconds <br>" 
                          });
                        }}
                      ></i></th>
                      <th>NGs <i
                        class="fas fa-question-circle"
                        style={{ fontSize: 18, color: "Dodgerblue" }}
                        onClick={() => {
                          Swal.fire({
                            icon: "info",
                            title: "Axial Play Press 3",
                            html:
                              this.state.AP3_Bad_Judge_P +" % of Axial Play data are NGs <br>" 
                          });
                        }}
                      ></i></th>
                      <th>Axial Play <i
                        class="fas fa-question-circle"
                        style={{ fontSize: 18, color: "Dodgerblue" }}
                        onClick={() => {
                          Swal.fire({
                            icon: "info",
                            title: "Axial Play Press 3",
                            html:
                              this.state.AP3_Bad_AP_Over_P +" % of Axial Play data are over 16.00 <br>" +
                              this.state.AP3_Bad_AP_Under_P +" % of Axial Play data are under 12.00 <br>" 
                          });
                        }}
                      ></i></th>
                      <th>Pre Axial Play <i
                        class="fas fa-question-circle"
                        style={{ fontSize: 18, color: "Dodgerblue" }}
                        onClick={() => {
                          Swal.fire({
                            icon: "info",
                            title: "Axial Play Press 3",
                            html:
                              this.state.AP3_Bad_Pre_AP_Over_P +" % of Pre Axial Play data are over 190.00 <br>" +
                              this.state.AP3_Bad_Pre_AP_Under_P +" % of Axial Play data are under 150.00 <br>" 
                          });
                        }}
                      ></i></th>
                      <th>Before Adjustment <i
                        class="fas fa-question-circle"
                        style={{ fontSize: 18, color: "Dodgerblue" }}
                        onClick={() => {
                          Swal.fire({
                            icon: "info",
                            title: "Axial Play Press 3",
                            html:
                              this.state.AP3_Bad_AP_Before_Over_P +" % of Before Adjustments data are over 16.50 <br>" +
                              this.state.AP3_Bad_Pre_AP_Under_P +" % of Before Adjustments data are under 13.50 <br>"  
                          });
                        }}
                      ></i></th>
                      <th>After 1st Adjustment <i
                        class="fas fa-question-circle"
                        style={{ fontSize: 18, color: "Dodgerblue" }}
                        onClick={() => {
                          Swal.fire({
                            icon: "info",
                            title: "Axial Play Press 3",
                            html:
                              this.state.AP3_Bad_AP_After_Over_P +" % of After Adjustments data are over 15.00 <br>" +
                              this.state.AP3_Bad_AP_After_Under_P +" % of After Adjustments data are under 12.00 <br>"
                          });
                        }}
                      ></i></th>
                      <th>No. of Adjustments <i
                        class="fas fa-question-circle"
                        style={{ fontSize: 18, color: "Dodgerblue" }}
                        onClick={() => {
                          Swal.fire({
                            icon: "info",
                            title: "Axial Play Press 3",
                            html:
                              this.state.AP3_Bad_AP_After_Over_P +" % of Adjustments data are over 1 <br>"
                          });
                        }}
                      ></i></th>
                    </tr>
                  </thead>
                  <tbody>{this.renderTableAP3()}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="card-body" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div className="card collapsed-card">
            <div className="card-header border-transparent">
              <h3 className="card-title">Oil Fill</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <i className="fas fa-plus" />
                </button>
              </div>
            </div>

            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table m-0">
                  <thead>
                    <tr>
                      <th>Time</th>
                      <th>Oil Top 1 Fill Time</th>
                      <th>Oil Top 1 Process Time</th>
                      <th>Oil Top 2 Fill Time</th>
                      <th>Oil Top 2 Process Time</th>
                      <th>Oil Bottom 1 Fill Time</th>
                      <th>Oil Bottom 1 Process Time</th>
                      <th>Oil Bottom 2 Fill Time</th>
                      <th>Oil Bottom 2 Process Time</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="card-body" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div className="card collapsed-card">
            <div className="card-header border-transparent">
              <h3 className="card-title">Endcap</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <i className="fas fa-plus" />
                </button>
              </div>
            </div>

            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table m-0">
                  <thead>
                    <tr>
                      <th>Time</th>
                      <th>Endcap Top Pressing Distance</th>
                      <th>Endcap Top Pressing Force</th>
                      <th>Endcap Top Process Time</th>
                      <th>Endcap Bottom Pressing Distance</th>
                      <th>Endcap Bottom Pressing Force</th>
                      <th>Endcap Bottom Process Time</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="card-body" style={{ paddingTop: 0, paddingBottom: 0 }}>
          <div className="card collapsed-card">
            <div className="card-header border-transparent">
              <h3 className="card-title">INT</h3>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <i className="fas fa-plus" />
                </button>
              </div>
            </div>

            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table m-0">
                  <thead>
                    <tr>
                      <th>Time</th>
                      <th>INT 1 Dispensing Time</th>
                      <th>INT 1 Process Time</th>
                      <th>INT 2 Dispensing Time</th>
                      <th>INT 2 Process Time</th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GRotorLine;
