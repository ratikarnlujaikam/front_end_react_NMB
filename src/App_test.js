import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";

import ForgotPW from "./components/forgotpassword";
import ChangePW from "./components/changepassword";


import Daily_LAR_by_Model from './components/LARInspection/Daily_LAR_by_Model'
import Monthly_LAR_report_by_Model from "./components/LARInspection/Monthly_LAR_report_by_Model";
import Monthly_LAR_report_all_Model from './components/LARInspection/Monthly_LAR_report_all_Model'
import Product_hold_control from "./components/QAInspection/Product_hold_control";
import QA_lots_status from './components/QAInspection/QA_lots_status'

import Operator_tracking_data from "./components/OPT/Operator_tracking_data";



import Trace_back_function_test  from "./components/QPM/Trace_back_function_test";
import  Trace_back_shipment from "./components/dodata/Trace_back_shipment";



import ROTOR from "./components/ROTOR";
import MOTORDIM from "./components/MOTORDIM";
import MOTORDIMAI from "./components/MOTORDIM/MOTORDIM_AiPress";
import MOTORDIMRTB from "./components/MOTORDIM/MOTORDIM_RTB";
import MOTOREWMS from "./components/MOTOREWMS";
import MOTORHIPOT from "./components/MOTORHIPOT";
import MOTORHE from "./components/MOTORHE";
import STACKHEIGHT from "./components/stack_height";

import Traceback from "./components/traceback";
import dataRotor from "./components/dataanalysis/dataRotor";

import Information from "./components/information";
import dataanalysis from "./components/dataanalysis";
import dataML from "./components/dataML";
import dataML2 from "./components/dataML/dataML2";
import QAInspection from "./components/QAInspection";

import QAInspectionByQANo from "./components/QAInspection/QAInspectionByQANo.";
import Result from "./components/register/Result";
import Header from "./components/header";
import SideMenu from "./components/sidemenu";
import Footer from "./components/footer";
import { key, YES } from "./constants";
import GRotorLine from "./components/GRotorLine/GRotorLine";
import QCAlert from "./components/QCAlert";
import VMI from "./components/VMI";
import RejectByModel from "./components/Rejection/Rejection";
import RejectByQANO from "./components/Rejection/RejectByQANo.";
import MONTHLYQA from "./components/monthlyQA/monthlyQA";
import Vrecode from "./components/Vrecode/Vrecode";



import report_per_producion_team from './components/Rejection/report_per_producion_team'
import MQTByModel from "./components/Rejection/MQTByModel";
import MasterItemNO from "./components/Master/MasterItemNO";
import MasterSupplier from "./components/Master/MasterSupplier";
import MasterLine from "./components/Master/MasterLine";

import Associate_Rule_Mining from "./components/Daily/Associate_Rule_Mining";
import DailyML1 from "./components/Daily/DailyML1";
import Daily_Report_Packing from "./components/packing/Daily_Report_Packing";
import Rejectbyteam from "./components/Rejectbyteam/Rejectbyteam";
import Output_Final_Before_QA from "./components/OutPutCo2/Output_Final_Before_QA";
import Production_hold_record from "./components/OutPutCo2/Production_hold_record";
import Report from "./components/report/report";
import Output_Final_after_QA from "./components/AfterQa1/Output_Final_after_QA";
import Shipmentdata from "./components/Shipmentdata/Shipmentdata";
import Packed_half_pallet from "./components/Packedhalfpallet/Packed_half_pallet";
import For_Inspection_tags_status from "./components/QAInspection/For_Inspection_tags_status";


import  Shipinfo from "./components/shipinfo/shipinfo";
import  updating from "./components/home/updating";

import  CheckData from "./components/checkData/CheckData";
import  Auto_machine_alarm_history from "./components/MC_ERROR/Auto_machine_alarm_history";
import  trace_back_ng from "./components/trace_back_ng/trace_back_ng";
import  MC_ERROR_test from "./components/MC_ERROR/MC_ERROR_test";
import  Request_label_printing_report from "./components/Report_printlabal/Request_label_printing_report";
import  KPIVranking from "./components/KPIVranking/KPIVranking";
import  MLRanking from "./components/MLRanking/MLRanking";

import  Month_Auto_machine_alarm_history from "./components/MC_ERROR/Auto_machine_alarm_history_Month";

import  Engineer from "./components/sidemenu/Engineer";
import  Quality from "./components/sidemenu/Quality";
import  Production from "./components/sidemenu/Production";
import  Data_Analysis from "./components/sidemenu/Data_Analysis";
import  PCMC from "./components/sidemenu/PCMC";
import  PE_MM from "./components/sidemenu/PE_MM";
import Master_ml from "./components/QAInspection/Master_ml";
import Daily_store_issue from "./components/Daily_store_issue/Daily_store_issue";


import register_Master from "./components/register/register_Master";
import trace_Dynamic from "./components/trace_Dynamic_Parallelism/trace_Dynamic_Parallelism";
import Monthly_Operator from "./components/Monthly_Operator/Monthly_Operator";
import Test_graph from "./components/LARInspection/Test_graph";

const SecuredRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn() === true ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

const SecuredLVRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn() === true ? (
        isPowerUser() === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/home" />
        )
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

const isPowerUser = () => {
  if (
    // localStorage.getItem(key.USER_LV) === "MIC_Member" ||
    localStorage.getItem(key.USER_LV) === "admin"
    // localStorage.getItem(key.USER_LV) === "MIC_head"
  ) {
    return true;
  } else {
    return false;
  }
};

const isLoggedIn = () => {
  return localStorage.getItem(key.LOGIN_PASSED) === YES;
};

export default class App extends Component {
  // rcc = react component ใช้ export render ออกหน้าเว็บ
  redirectToLogin = () => {
    return <Redirect to="/login" />;
  };

  render() {
    return (
      
      <Router>
             <Header
 
        />
        {" "}

      
        <div>
          <SideMenu />
          {window.location.pathname === "/home" && <SideMenu />}
          <Switch>
                   
            {/* <SecuredRoute path="/home" component={Home} /> */}
            {/* <SecuredRoute path="/home" component={() => window.location.href = 'http://10.120.122.28:2017/HOME'} /> */}
            {/* <Route exact={true} path="/" component={() => window.location.href = 'http://10.120.122.28:2017/HOME'}  /> */}
            {/* <Route exact={true} path="*" component={() =>window.location.href = 'http://10.120.122.28:2017/HOME'}  /> */}


            <SecuredRoute path="/home" component={() => window.location.href = 'http://192.168.101.67:2025/HOME'} />
            <Route exact={true} path="/" component={() => window.location.href = 'http://192.168.101.67:2025/HOME'} />
            <Route exact={true} path="*" component={() => window.location.href = 'http://192.168.101.67:2025/HOME'} />

           
          </Switch>{" "}
                  
          <Footer />
        </div>
              
      </Router>
    );
  }
}
