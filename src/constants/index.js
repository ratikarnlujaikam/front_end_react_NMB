

// App_Init
export const APP_INIT = "APP_INIT";
export const APP_TITLE = "NMB Covid19 command center";

// Login Page
export const HTTP_LOGIN_FETCHING = "HTTP_LOGIN_FETCHING";
export const HTTP_LOGIN_SUCCESS = "HTTP_LOGIN_SUCCESS";
export const HTTP_LOGIN_FAILED = "HTTP_LOGIN_FAILED";

// Register Page
export const HTTP_REGISTER_FETCHING = "HTTP_REGISTER_FETCHING";
export const HTTP_REGISTER_SUCCESS = "HTTP_REGISTER_SUCCESS";
export const HTTP_REGISTER_FAILED = "HTTP_REGISTER_FAILED";

// Division code
export const HTTP_DIVCODE_FETCHING = "HTTP_DIVCODE_FETCHING";
export const HTTP_DIVCODE_SUCCESS = "HTTP_DIVCODE_SUCCESS";
export const HTTP_DIVCODE_FAILED = "HTTP_DIVCODE_FAILED";

// Error Code
export const E_PICKER_CANCELLED = "E_PICKER_CANCELLED";
export const E_PICKER_CANNOT_RUN_CAMERA_ON_SIMULATOR =
  "E_PICKER_CANNOT_RUN_CAMERA_ON_SIMULATOR";
export const E_PERMISSION_MISSING = "E_PERMISSION_MISSING";
export const E_PICKER_NO_CAMERA_PERMISSION = "E_PICKER_NO_CAMERA_PERMISSION";
export const E_USER_CANCELLED = "E_USER_CANCELLED";
export const E_UNKNOWN = "E_UNKNOWN";
export const E_DEVELOPER_ERROR = "E_DEVELOPER_ERROR";
export const TIMEOUT_NETWORK = "ECONNABORTED"; // request service timeout
export const NOT_CONNECT_NETWORK = "NOT_CONNECT_NETWORK";

//////////////// Localization Begin ////////////////
export const NETWORK_CONNECTION_MESSAGE =
  "Cannot connect to server, Please try again.";
export const NETWORK_TIMEOUT_MESSAGE =
  "A network timeout has occurred, Please try again.";
export const UPLOAD_PHOTO_FAIL_MESSAGE =
  "An error has occurred. The photo was unable to upload.";




export const apiUrl = "http://localhost:2010/"; //localhost port 2010
export const Url = "http://localhost:3000/"; //Port frontend
export const apiUrl_python = "http://192.168.101.120:2028/"; //deploy บางปะอิน 

//SPD 
// export const apiUrl = "http://192.168.101.120:2026/"; //deploy บางปะอิน 
// export const Url = "http://192.168.101.120:2027/"; //deploy บางปะอิน 
// export const apiUrl_python = "http://192.168.101.120:2028/"; //deploy บางปะอิน 

//nmb 
// export const apiUrl = "http://10.120.122.28:2016/"; //deploy บางปะอิน 
// export const Url = "http://10.120.122.28:2017/"; //deploy บางปะอิน 
// export const apiUrl_python = "http://10.120.122.28:2012/"; //deploy บางปะอิน 

//Test
// export const apiUrl = "http://10.120.122.28:51/"; //deploy บางปะอิน 
// export const Url = "http://10.120.122.28:52/"; //deploy บางปะอิน 
// export const apiUrl_python = "http://10.120.122.28:2012/"; //deploy บางปะอิน 

export const YES = "YES";
export const NO = "NO";
export const OK = "ok";
export const NOK = "nok";

export const server = {
  LOGIN_URL: `api/authorize/login`,

  REGISTER_URL: `api/authorize/register`,
  FORGOTPASSWORD_URL: `api/authorize/forgot`,
  CHANGEPASSWORD_URL: `api/authorize/changePassword`,
  USER_URL: `api/authorize/user`,
  YIELD_URL: `api/production_result/yield`,


  /*********************************************************Engineer********************************************************************/


//Master ItemNO
  MASTERGROUP_URL: `api/MasterItemNO/ModelGroup`,
  MASTERITEMNO_URL: `api/MasterItemNO/ItemNo`,
  MASTER_URL: `api/MasterItemNO/Master`,
//Master Supplier
  MASTERSUPPLIER_URL: `api/MasterSupplier/Supplier`,
  MASTERMODELGROUP_URL: `api/MasterSupplier/ModelGroup`,
  MASTERSUP_URL: `api/MasterSupplier/Master`,
//Master Line
  GROUP_URL: `api/Masterline/ModelGroup`,
  LINE_URL: `api/Masterline/Line`,
  MASTERLINE_URL: `api/Masterline/Masterline`,

//master_ml
  MODELMasterURL: `api/Master_ML/model`,
  Process_URL: `api/Master_ML/Process`,
  parameter_URL: `api/Master_ML/Parameter`,
  no_parameter_URL: `api/Master_ML/no_parameter`,
  INSERT_Master_URL: `api/Master_ML/INSERT_Master`,
  REPORT_Master_ML_URL: `api/Master_ML/report`,
  
//Loging_ML
  UPDATE_Master_URL: `api/Master_ML/update`,
  LOGIN_api_Master_ML_URL: `api/Master_ML/login`,
  REGISTER_Master_ML_URL: `api/Master_ML/register`,
  

/************************************************************Quality********************************************************************/  
  //QAInspection
  MODELQA_URL: `api/QAInspection/model`,
  INSTYPE_URL: `api/QAInspection/insType`,
  REPORT_URL: `api/QAInspection/report`,
  REPORT2_URL: `api/QAInspection/report2`,

  //Rejection
  REJECTMODEL_URL: `api/Rejection/model`,
  REJECTTYPE_URL: `api/Rejection/insType`,
  REJECTBYMODEL_URL: `api/Rejection/RejectByModel`,
  REJECTBYQA_URL: `api/Rejection/RejectByQANO`,



  // MASTER_URL: `api/production_result/master`,

  // DATAAVG_URL: `api/production_result/selectDate`,
  // MODEL_URL: `api/production_result/selectmodel`,
  // PARAMETER_URL: `api/production_result/selectparameter`,
  // PART_URL: `api/production_result/selectpart`,
  // LINE_URL: `api/production_result/selectproductionline`,


  // DATA MONITORING
  MATCHING_URL: `api/production_result/matching`,
  MATCHINGDAY_URL: `api/production_result/matchingday`,

  MATCHMODEL_URL: `api/production_result/matchingmodel`,
  MATCHPARAM_URL: `api/production_result/matchingparameter`,
  MATCHPART_URL: `api/production_result/matchingpart`,
  MATCHLINE_URL: `api/production_result/matchingline`,
  MATCHMACHINE_URL: `api/production_result/matchingmachine`,

  //MOTOR DIM
  MOTORDIM_URL: `api/motor_dim/motordim`,
  MOTORDIMDAY_URL: `api/motor_dim/motordimday`,

  MOTORDIMMODEL_URL: `api/motor_dim/motordimmodel`,
  MOTORDIMLINE_URL: `api/motor_dim/motordimline`,
  MOTORDIMPARAM_URL: `api/motor_dim/motordimparameter`,
  MOTORDIMMACHINE_URL: `api/motor_dim/motordimmachine`,

  //MOTOR DIM with AiPress
  MOTORDIMAI_URL: `api/motor_dim_AiPress/motordim`,
  MOTORDIMAIDAY_URL: `api/motor_dim_AiPress/motordimday`,

  MOTORDIMAIMODEL_URL: `api/motor_dim_AiPress/motordimmodel`,
  MOTORDIMAILINE_URL: `api/motor_dim_AiPress/motordimline`,
  MOTORDIMAIPARAM_URL: `api/motor_dim_AiPress/motordimparameter`,
  MOTORDIMAIMACHINE_URL: `api/motor_dim_AiPress/motordimmachine`,
  MOTORDIMAIPRESS_URL: `api/motor_dim_AiPress/aiPress`,

  //MOTOR DIM with RTB Single plate
  MOTORDIMRTB_URL: `api/motor_dim_RTB/motordim`,
  MOTORDIMRTBDAY_URL: `api/motor_dim_RTB/motordimday`,

  MOTORDIMRTBMODEL_URL: `api/motor_dim_RTB/motordimmodel`,
  MOTORDIMRTBLINE_URL: `api/motor_dim_RTB/motordimline`,
  MOTORDIMRTBPARAM_URL: `api/motor_dim_RTB/motordimparameter`,
  MOTORDIMRTBMACHINE_URL: `api/motor_dim_RTB/motordimmachine`,
  MOTORDIMRTBAI_URL: `api/motor_dim_RTB/RTB`,

  //MOTOR EWMS
  MOTOREWMS_URL: `api/motor_EWMS/motorEWMS`,
  MOTOREWMSDAY_URL: `api/motor_EWMS/motorEWMSday`,

  MOTOREWMSMODEL_URL: `api/motor_EWMS/motorEWMSmodel`,
  MOTOREWMSLINE_URL: `api/motor_EWMS/motorEWMSline`,
  MOTOREWMSPARAM_URL: `api/motor_EWMS/motorEWMSparameter`,
  MOTOREWMSMACHINE_URL: `api/motor_EWMS/motorEWMSmachine`,

  //MOTOR HIPOT
  MOTORHIPOT_URL: `api/motor_hipot/motorhipot`,
  MOTORHIPOTDAY_URL: `api/motor_hipot/motorhipotday`,

  MOTORHIPOTMODEL_URL: `api/motor_hipot/motorhipotmodel`,
  MOTORHIPOTLINE_URL: `api/motor_hipot/motorhipotline`,
  MOTORHIPOTPARAM_URL: `api/motor_hipot/motorhipotparameter`,
  MOTORHIPOTMACHINE_URL: `api/motor_hipot/motorhipotmachine`,

  //MOTOR HELIUM
  MOTORHE_URL: `api/motor_He/motorHe`,
  MOTORHEDAY_URL: `api/motor_He/motorHeday`,

  MOTORHEMODEL_URL: `api/motor_He/motorHemodel`,
  MOTORHELINE_URL: `api/motor_He/motorHeline`,
  MOTORHEPARAM_URL: `api/motor_He/motorHeparameter`,
  MOTORHEMACHINE_URL: `api/motor_He/motorHemachine`,

  //STACK HEIGHT
  STACKHI_URL: `api/stack_height/stackHeight`,
  STACKHIDAY_URL: `api/stack_height/stackHeightday`,

  STACKHIMODEL_URL: `api/stack_height/stackHeightModel`,
  STACKHILINE_URL: `api/stack_height/stackHeightLine`,
  STACKHIPARAM_URL: `api/stack_height/stackHeightParameter`,
  STACKHIMACHINE_URL: `api/stack_height/stackHeightMachine`,



  //SPECIFICATION CONTROL
  SPECCONTROL_URL: `api/iSpindle/specControl`,
  SPECMODEL_URL: `api/iSpindle/specModel`,
  SPECMODELNAME_URL: `api/iSpindle/specModelName`,
  SPECPARA_URL: `api/iSpindle/specPara`,
  SPECPART_URL: `api/iSpindle/specPart`,
  SPECMC_URL: `api/iSpindle/specMC`,

  //CONTROLLIMIT
  CONTROLLIMIT_URL: `api/iSpindle/ControlLimit`,
  MODELCONTROL_URL: `api/iSpindle/Modelforcontrollimit`,
  PARTCONTROL_URL: `api/iSpindle/Partforcontrollimit`,
  PARACONTROL_URL: `api/iSpindle/Paraforcontrollimit`,
  LINECONTROL_URL: `api/iSpindle/Lineforcontrollimit`,

  //EMAILALARM
  MODELEMAIL_URL: `api/iSpindle/ModelEmail`,
  PARTEMAIL_URL: `api/iSpindle/PartEmail`,
  PARAEMAIL_URL: `api/iSpindle/ParaEmail`,
  LINEEMAIL_URL: `api/iSpindle/LineEmail`,
  EMAILALARM_URL: `api/iSpindle/emailAlarm`,

  // DATA ANALYSIS (MOTOR)
  MOTORANALYSIS_URL: `api/dataanalysis/motordata`,
  MOTORANALYSISDAY_URL: `api/dataanalysis/motordataday`,

  MOTORPROCESS_URL: `api/dataanalysis/motorprocess`,
  MOTORMODEL_URL: `api/dataanalysis/motormodel`,
  MOTORLINE_URL: `api/dataanalysis/motorline`,
  MOTORMC_URL: `api/dataanalysis/motormc`,

  // DATA ANALYSIS (ROTOR)
  ROTORANALYSIS_URL: `api/dataanalysis/rotordata`,
  ROTORANALYSISDAY_URL: `api/dataanalysis/rotordataday`,

  ROTORPROCESS_URL: `api/dataanalysis/rotorprocess`,
  ROTORMODEL_URL: `api/dataanalysis/rotormodel`,
  ROTORLINE_URL: `api/dataanalysis/rotorline`,
  ROTORMC_URL: `api/dataanalysis/rotormc`,

  // GR Line
  GRLINE_URL: `api/grline/grline`,

  //DieCast
  DIECAST_URL: `api/diecast/diecast`,
  DIECASTDAY_URL: `api/diecast/diecastDay`,
  DIECASTMODEL_URL: `api/diecast/diecastModel`,
  DIECASTMACHINE_URL: `api/diecast/diecastMachine`,
  DIECASTPARAMETER_URL: `api/diecast/diecastParameter`,

  // VMI
  VMI_URL: `api/VMI/autoVMI`,
  VMIDAY_URL: `api/VMI/autoVMIDay`,

  VMIMODEL_URL: `api/VMI/VMIModel`,
  VMILINE_URL: `api/VMI/VMILine`,
  VMIPROCESS_URL: `api/VMI/VMIProcess`,

  // DATA ML 
  MOTORML_URL: `api/ML/dataML`,
  MODELML_URL: `api/ML/model`,
  LINEML_URL: `api/ML/line`,
  KPOVML_URL: `api/ML/KPOV`,
  DATASOURCEKPOV_URL: `api/ML/dataSourceKPOV`,
  DATASOURCEMBA_URL: `api/ML/dataSourceMBA`,
  DATASOURCEROTOR_URL: `api/ML/dataSourceRotor`,
  DATASOURCEBASE_URL: `api/ML/dataSourceBase`,
  PARAMML_URL: `api/ML/parameter`,

  // DATA ML2
  MOTORML2_URL: `api/ML2/dataML`,
  MODELML2_URL: `api/ML2/model`,
  LINEML2_URL: `api/ML2/line`,
  PARAMML2_URL: `api/ML2/parameter`,



  //mouthlyQA
  MODELMONTHLYQA_URL: `api/monthlyQA/model`,
  INSTYPEQA_URL: `api/monthlyQA/insType`,
  MONTHLYQA_URL: `api/monthlyQA/monthlyQA`,



  ITEMNOS_URL: `api/Vrecode/ItemNos`, 
  DATECODE_URL: `api/Vrecode/Datecode`, 
  DATECODEALL_URL: `api/Vrecode/DatecodeAll`, 

  MOVEMENTQA_URL: `api/Movement/QaNumberAll`, 
  RESULT_URL: `api/Movement/result`, 
  ITEMNOSMOVEMENT_URL: `api/Movement/ItemNos`, 

  DEFECTYEAR_URL: `api/defectNG/year`,
  DEFECTMONTH_URL: `api/defectNG/Month`,
  DEFECTMODEL_URL: `api/defectNG/model`,
  DEFECTMTYPE_URL: `api/defectNG/insType`,
  DEFECTNG_URL: `api/defectNG/DefectNG`,

  LARYEAR_URL: `api/LAR/year`,
  LARMONTH_URL: `api/LAR/Month`,
  LAR_URL: `api/LAR/LARPP`,

  MQTYEAR_URL: `api/MQT/year`,
  MQTMONTH_URL: `api/MQT/Month`,
  MQT_URL: `api/MQT/LARPP`,

  MQTYEARMODEL_URL: `api/MQTByModel/year`,
  MQTMONTHMODEL_URL: `api/MQTByModel/Month`,
  MQTMODEL_URL: `api/MQTByModel/MQTByModel`,
  MQTEMP_URL: `api/MQTByModel/EMP`,



  LARMODEL_URL: `api/LARMonth/model`,
  LARTYPE_URL: `api/LARMonth/insType`,
  LARYEAR_URL: `api/LARMonth/year`,
  LARMONTHLY_URL: `api/LARMonth/LARMonth`,

  MLMODEL_URL: `api/DailyML/Model`,
  MLLINE_URL: `api/DailyML/Line`,
  MLDATE_URL: `api/DailyML/DateDailyML`,
  MLDAILY_URL: `api/DailyML/DailyMLfail`,
  MLDAILYDATE_URL: `api/DailyML/DailyMLDate`,
  MLACCURACY_URL: `api/DailyML/accuracyML`,
  REFERENCE_URL: `api/DailyML/Reference`,
  DESCRIBEML_URL: `api/DailyML/DescribeML`,


  MLMODEL_1_URL: `api/DailyML1/Model`,
  MLLINE_1_URL: `api/DailyML1/Line`,
  MLDATE_1_URL: `api/DailyML1/DateDailyML`,
  MLDAILY_1_URL: `api/DailyML1/DailyMLfail`,
  MLDAILYDATE_1_URL: `api/DailyML1/DailyMLDate`,
  MLACCURACY_1_URL: `api/DailyML1/accuracyML`,
  REFERENCE_1_URL: `api/DailyML1/Reference`,

  PACKINGMODEL_URL: `api/Dailypacking/Model`,
  PACKINGT1_URL: `api/Dailypacking/report1`,
  PACKINGT2_URL: `api/Dailypacking/report2`,
  PACKINGT3_URL: `api/Dailypacking/report3`,

  REJECTTEAM_URL: `api/Rejectbyteam/RejectTeam`,

  //output co2
  MODELCO2_URL: `api/OutPutCo2/Model`,
  LINECO2_URL: `api/OutPutCo2/Line`,
  SUMOUTPUTCO2_URL: `api/OutputCo2/SumOutputCo2`,
  DETAILCO2_URL: `api/OutputCo2/DetailOutputCo2`,
  
  HOLDCO2_URL: `api/HoldCo2/HoldoutputCo2`,
  HOLDDETAIL_URL: `api/HoldCo2/DetailHoldCo2`,

  CHECK_DATA: `api/checkData/Dimension_WR`,
  DYNAMIC_URL: `api/checkData/Dynamic_Parallelism_Tester`,
  CHECKEWMS_URL: `api/checkData/EWMS`,
  CHECKEHIPOT_URL: `api/checkData/Hipot`,



  

  MODELAFTERQA_URL: `api/AfterQA/Model`,
  LINEAFTERQA_URL: `api/AfterQA/Line`,
  SUMQAINSPECTION_URL: `api/AfterQA/SumQainspection`,
  DETAILQAINSPECTION_URL: `api/AfterQA/DetailQainspection`,

  MODELSHIPMENTDATA_URL: `api/shipmentdata/model`,
  SHIPMENTBYMODEL_URL: `api/shipmentdata/Shipmentdata`,
  SHIPMENTBYINVOIDID_URL: `api/shipmentdata/invoidid`,
  SHIPMENTBYLOTQA_URL: `api/shipmentdata/lotqanumber`,

  HOLDPALLETBYLOTQA_URL : `api/Packed_Half_Pallet/lotqanumber`,
  HOLDPALLETSUM_URL : `api/Packed_Half_Pallet/packed_half_Sum`,
  HOLDPALLETDETAIL_URL : `api/Packed_Half_Pallet/packed_half_Detail`,
  MODELPACKPALLET_URL : `api/Packed_Half_Pallet/model`,

  //status
  PRINTFOR_URL: `api/Status1/print`,
  OUTPUTCO2_URL: `api/Status1/Co2`,
  QA_URL: `api/Status1/QA`,
  Tray_Record_URL: `api/Status1/Tray_Record`,
  INTOPALLET_URL: `api/Status1/Into_Pallet`,
  PCMC_URL: `api/Status1/PCMC`,
  TRAY_PACKING_URL: `api/Status1/Tray_Packing`,
  QAHOLD_STATUS_URL: `api/Status1/report2`,
  Unpacking_URL :`api/Status1/Unpacking`, 

  SHIFTOPT_URL: `api/OPT/shift`,
  REPORTOPT_URL: `api/OPT/report`,

  QPMBYLOTQA_URL : `api/QPM/lotQA`,
  QPMBYBARCODEMOTOR_URL : `api/QPM/barcodemotor`,

  DODATABYLOTQA_URL : `api/QPM/dobylotqa`,
  DODATABYINVOID_URL : `api/QPM/dobyinvoid`,

  SHIPINFOBYLOTQA_URL : `api/QPM/shipinfobylotqa`,
  SHOPINFOBYINVOID_URL : `api/QPM/shipinfobyinvoid`,



    //QAInspection
    ModelHoldQA_URL: `api/QAInspectionHOLD/model`,
    LINEQAHOLD_URL: `api/QAInspectionHOLD/Line`,
    StatusQAHOLD_URL: `api/QAInspectionHOLD/Status`,
    Access_byHOLD_URL: `api/QAInspectionHOLD/Access_by`,
    QAHOLD_URL: `api/QAInspectionHOLD/report2`,
    HOLDNUMBER_URL: `api/QAInspectionHOLD/report3`,
    REPORTHOLD_URL: `api/QAInspectionHOLD/report`,
    CHECKBOXALL_URL: `api/QAInspectionHOLD/HOLDALL`,
    HOLDFORPC_URL: `api/QAInspectionHOLD/HoldForpc`,


    japan_URL: `api_MLjapan/api/process`,

    //MC_Error
    ERRORTable_URL: `api/MC_Error/Table`,
    MC_ERROR_Line_URL: `api/MC_Error/Line`,
    MC_ERROR_URL: `api/MC_Error/MC_ERROR`,
    MC_ERROR_NG_URL: `api/MC_Error/MC_ERROR_where_NG`,



    MONTH_ERRORTable_URL: `api/MC_Error_Month/Table`,
    MONTH_MC_ERROR_Line_URL: `api/MC_Error_Month/Line`,
    MONTH_MC_ERROR_MONTH_URL: `api/MC_Error_Month/month_Error`,
    MONTH_MC_ERROR_Year_URL: `api/MC_Error_Month/year_Error`,
    MONTH_MC_ERROR_URL: `api/MC_Error_Month/MC_ERROR`,
    MONTH_MC_ERROR_NG_URL: `api/MC_Error_Month/MC_ERROR_NG`,

    //Report_printlable
    MODELLABAL_URL: `api/Report_printlabal/model`,
    LINELABAL_URL: `api/Report_printlabal/Line`,
    CONFIRMLABAL_URL: `api/Report_printlabal/confirm`,
    REPORTprintlabal_URL: `api/Report_printlabal/report`,
   
  //status_web
    STATUS_WEB_URL: `api/HOME/Status_web`,

    TABLEML3_URL : `api/MLranking/table`,
    MOTORML3_URL : `api/MLranking/dataML`,
    MODELML3_URL : `api/MLranking/model`,
    LINEML3_URL : `api/MLranking/line`,
    PARAMML3_URL : `api/MLranking/parameter`,


      //TRACEBACK
  DATAMODEL: `api/api_production_result_001/dataModel`,
  DATAPARAMETER: `api/api_production_result_001/dataParameter`,
  DATALINE: `api/api_production_result_001/dataLine`,

  
  ROTOR_DAY_URL: `api/api_production_result_001/stackHeight`,


  
    //MC_Error
    PACKING_URL: `api/Dailypacking/Model`,
    Table_Temp_URL: `api/trace_back_ng/Table`,
    NG_Line_URL: `api/trace_back_ng/Line`,
    NG_URL: `api/trace_back_ng/MC_ERROR`,




    //
    MODEL_NAME_STORE_ISSUE_URL: `api/store_issue/ModelGroup`,
    ITEMNO__NAME_STORE_ISSUE_URL: `api/store_issue/ItemNo`,
    STORE_ISSUE_URL: `api/store_issue/Master`,


    LINE_TRACE_DYNAMIC_URL: `api/Trace_Dynamic/LINE`,
    GETLINE_TRACE_DYNAMIC_URL: `api/Trace_Dynamic/getline_model`,
    Trace_Dynamic_process_URL: `api/Trace_Dynamic/process`,
    Trace_Dynamic_model_URL: `api/Trace_Dynamic/model`,
    Trace_Dynamic_URL: `api/Trace_Dynamic/Master`,
    Trace_Dynamic_moter_URL: `api/Trace_Dynamic/moter`,


    Monthly_Operator_YEAR_URL: `api/Monthly_Operator/year`,
    Monthly_Operator_MONTH_URL: `api/Monthly_Operator/Month`,
    Monthly_Operator_URL: `api/Monthly_Operator/LARPP`,
    Operator_GroupName_URL: `api/Monthly_Operator/GroupName`,
    Operator_line_URL: `api/Monthly_Operator/line`,



    Lgraph_output_Line_URL: `api/graph_output/Line`,
    graph_output_URL: `api/graph_output/LARPP`,


    Compare_Output_Line_URL: `api/Compare_Output/Line`,
    Compare_Output_process_URL: `api/Compare_Output/process`,
    Compare_Output_URL: `api/Compare_Output/LARPP`,

    Compare_Output_month_Line_URL: `api/graph_Compare_month/Line`,
    Compare_Output_process_month_URL: `api/graph_Compare_month/process`,
    Compare_Output_month_URL: `api/graph_Compare_month/LARPP`,
    Compare_Output_month_Design_URL: `api/graph_Compare_month/design`,

    Compare_Output_day_Line_URL: `api/graph_Compare_day/Line`,
    Compare_Output_day_URL: `api/graph_Compare_day/LARPP`,



    graph_output_packing_URL: `api/Packing_output/output`,



    percen_ng_URL: `api/percen_ng/LARPP`,
    percen_output_URL: `api/percen_output/LARPP`,
    percen_OEE_URL: `api/percen_OEE/LARPP`,
    percen_OEE_monthly_URL: `api/percen_OEE/monthly`,
    percen_error_URL: `api/percen_error/LARPP`,
    percen_Downtime_URL: `api/percen_Downtime/LARPP`,

    DOCNO_URL : `api/Cleanlinesssample/DocNo`,
    SAMCLEANLINESS_URL : `api/Cleanlinesssample/Samcleanliness`,
    SAMCLEANLINESSTEST_URL : `api/Cleanlinesssample/Special`,
    Modelname_URL : `api/Cleanlinesssample/Modelname`,
    Samplename_URL : `api/Cleanlinesssample/Samplename`,
    Material_URL : `api/Cleanlinesssample/Material`,
    Customer_URL : `api/Cleanlinesssample/Customer`,
    Qty_URL : `api/Cleanlinesssample/Qty`,
    InstrumentsLPC_URL : `api/Cleanlinesssample/InstrumentsLPC`,
    InstrumentsSprayLPC_URL : `api/Cleanlinesssample/InstrumentsSprayLPC`,
    InstrumentsAPA_URL : `api/Cleanlinesssample/InstrumentsAPA`,
    InstrumentsTalcbytape_URL : `api/Cleanlinesssample/InstrumentsTalcbytape`,
    InstrumentsFTIR_URL : `api/Cleanlinesssample/InstrumentsFTIR`,
    InstrumentsIC_URL : `api/Cleanlinesssample/InstrumentsIC`,
    InstrumentsNVR_URL : `api/Cleanlinesssample/InstrumentsNVR`,
    InstrumentsOutgasday0_URL : `api/Cleanlinesssample/InstrumentsOutgasday0`,
    InstrumentsOutgasday14_URL : `api/Cleanlinesssample/InstrumentsOutgasday14`,
    InstrumentsGhosttest_URL : `api/Cleanlinesssample/InstrumentsGhosttest`,
    InstrumentsDynamicdiskghost_URL : `api/Cleanlinesssample/InstrumentsDynamicdiskghost`,
    InstrumentsExtractable_URL : `api/Cleanlinesssample/InstrumentsExtractable`,
    InstrumentsCorrosion_URL : `api/Cleanlinesssample/InstrumentsCorrosion`,
    InstrumentsParticlecount_URL : `api/Cleanlinesssample/InstrumentsParticlecount`,
    DataquantityLPC_URL : `api/Cleanlinesssample/DataquantityLPC`,
    DataquantitySprayLPC_URL : `api/Cleanlinesssample/DataquantitySprayLPC`,
    DataquantityAPA_URL : `api/Cleanlinesssample/DataquantityAPA`,
    DataquantityTalcbytape_URL : `api/Cleanlinesssample/DataquantityTalcbytape`,
    DataquantityFTIR_URL : `api/Cleanlinesssample/DataquantityFTIR`,
    DataquantityIC_URL : `api/Cleanlinesssample/DataquantityIC`,
    DataquantityNVR_URL : `api/Cleanlinesssample/DataquantityNVR`,
    DataquantityOutgasday0_URL : `api/Cleanlinesssample/DataquantityOutgasday0`,
    DataquantityOutgasday14_URL : `api/Cleanlinesssample/DataquantityOutgasday14`,
    DataquantityGhosttest_URL : `api/Cleanlinesssample/DataquantityGhosttest`,
    DataquantityDynamicdiskghost_URL : `api/Cleanlinesssample/DataquantityDynamicdiskghost`,
    DataquantityExtractable_URL : `api/Cleanlinesssample/DataquantityExtractable`,
    DataquantityCorrosion_URL : `api/Cleanlinesssample/DataquantityCorrosion`,
    DataquantityParticlecountn_URL : `api/Cleanlinesssample/DataquantityParticlecount`,
    RemarkLPC_URL : `api/Cleanlinesssample/RemarkLPC`,
    RemarkSprayLPC_URL : `api/Cleanlinesssample/RemarkSprayLPC`,
    RemarkAPA_URL : `api/Cleanlinesssample/RemarkAPA`,
    RemarkTalcbytape_URL : `api/Cleanlinesssample/RemarkTalcbytape`,
    RemarkFTIR_URL : `api/Cleanlinesssample/RemarkFTIR`,
    RemarkIC_URL : `api/Cleanlinesssample/RemarkIC`,
    RemarkNVR_URL : `api/Cleanlinesssample/RemarkNVR`,
    RemarkOutgasday0_URL : `api/Cleanlinesssample/RemarkOutgasday0`,
    RemarkOutgasday14_URL : `api/Cleanlinesssample/RemarkOutgasday14`,
    RemarkGhosttest_URL : `api/Cleanlinesssample/RemarkGhosttest`,
    RemarkDynamicdiskghost_URL : `api/Cleanlinesssample/RemarkDynamicdiskghost`,
    RemarkExtractable_URL : `api/Cleanlinesssample/RemarkExtractable`,
    RemarkCorrosion_URL : `api/Cleanlinesssample/RemarkCorrosion`,
    RemarkParticlecount_URL : `api/Cleanlinesssample/RemarkParticlecount`,
    Surfacebase_URL : `api/Cleanlinesssample/Surfacebase`,
    SurfaceMBA_URL : `api/Cleanlinesssample/SurfaceMBA`,
    SurfaceHub_URL : `api/Cleanlinesssample/SurfaceHub`,
    SurfaceETC_URL : `api/Cleanlinesssample/SurfaceETC`,
    LotnoPartno_URL : `api/Cleanlinesssample/LotnoPartno`,
    LotnoPlatform_URL : `api/Cleanlinesssample/LotnoPlatform`,
    LotnoLotQAno_URL : `api/Cleanlinesssample/LotnoLotQAno`,
    LotnoRev_URL : `api/Cleanlinesssample/LotnoRev`,
    LotnoMotorOilType_URL : `api/Cleanlinesssample/LotnoMotorOilType`,
    LotnoLotMOno_URL : `api/Cleanlinesssample/LotnoLotMOno`,
    LotnoSupplierhub_URL : `api/Cleanlinesssample/LotnoSupplierhub`,
    LotnoSupplierbase_URL : `api/Cleanlinesssample/LotnoSupplierbase`,
    LotnoSupplierPCB_URL : `api/Cleanlinesssample/LotnoSupplierPCB`,
    LotnoPCBlotno_URL : `api/Cleanlinesssample/LotnoPCBlotno`,
    LotnoSupplierramp_URL : `api/Cleanlinesssample/LotnoSupplierramp`,
    LotnoRamplotno_URL : `api/Cleanlinesssample/LotnoRamplotno`,
    LotnoSupplierdiverter_URL : `api/Cleanlinesssample/LotnoSupplierdiverter`,
    LotnoDiverterlot_URL : `api/Cleanlinesssample/LotnoDiverterlot`,
    LotnoSupplierIDCS_URL : `api/Cleanlinesssample/LotnoSupplierIDCS`,
    LotnoIDCSlot_URL : `api/Cleanlinesssample/LotnoIDCSlot`,
    LotnoSHAWashingno_URL : `api/Cleanlinesssample/LotnoSHAWashingno`,
    LotnoOvenSHANo_URL : `api/Cleanlinesssample/LotnoOvenSHANo`,
    LotnoOvenMBA_URL : `api/Cleanlinesssample/LotnoOvenMBA`,
    LotnoCO2mcno_URL : `api/Cleanlinesssample/LotnoCO2mcno`,
    LotnoLineno_URL : `api/Cleanlinesssample/LotnoLineno`,
    LotnoResultunit_URL : `api/Cleanlinesssample/LotnoResultunit`,
    Purposeoftest_URL : `api/Cleanlinesssample/Purposeoftest`,
    ProcessDescription_URL : `api/Cleanlinesssample/ProcessDescription`,
    Referencedata_URL : `api/Cleanlinesssample/Referencedata`,
    Comment_URL : `api/Cleanlinesssample/Comment`,
    Register_URL : `api/Cleanlinesssample/Register`,
    SAMCLEANLINESSTESTsprayLPC_URL : `api/Cleanlinesssample/SprayLPC`,
    SAMCLEANLINESSTESTAPA_URL : `api/Cleanlinesssample/APA`,
    SAMCLEANLINESSTESTTalcbytape_URL : `api/Cleanlinesssample/Talcbytape`,
    SAMCLEANLINESSTESTFTIR_URL : `api/Cleanlinesssample/FTIR`,
    SAMCLEANLINESSTESTIC_URL : `api/Cleanlinesssample/IC`,
    SAMCLEANLINESSTESTNVR_URL : `api/Cleanlinesssample/NVR`,
    SAMCLEANLINESSTESTOutgasday0_URL : `api/Cleanlinesssample/Outgasday0`,
    SAMCLEANLINESSTESTOutgasday14_URL : `api/Cleanlinesssample/Outgasday14`,
    SAMCLEANLINESSTESTGhosttest_URL : `api/Cleanlinesssample/Ghosttest`,
    SAMCLEANLINESSTESTDynamicdiskghost_URL : `api/Cleanlinesssample/Dynamicdiskghost`,
    SAMCLEANLINESSTESTExtractable_URL : `api/Cleanlinesssample/Extractable`,
    SAMCLEANLINESSTESTCorrosion_URL : `api/Cleanlinesssample/Corrosion`,
    SAMCLEANLINESSTESTParticlecount_URL : `api/Cleanlinesssample/Particlecount`,
    SAMCLEANLINESSTESTdocno_URL : `api/Cleanlinesssample/document`,
    Samcleanlinesssend_URL : `api/mailcleanliness/sendmail1`,
    cleanlinessspecialsendData_URL : `api/mailcleanliness/sendmailapprove`,
    cleanlinessspecialapprove_URL : `api/mailcleanliness/sendmailcleanlinessapprove`,
    Section_URL : `api/Cleanlinesssample/Section`,
    NMBsample_URL : `api/Cleanlinesssample/NMBsample`,
    Samplesend_URL : `api/Cleanlinesssample/Samplesend`,
    Samplesub_URL : `api/Cleanlinesssample/Samplesub`,
    Committed_URL : `api/Cleanlinesssample/Committed`,
    Mgrequest_URL : `api/Cleanlinesssample/Mgrequest`,
    Mgrequest2_URL : `api/Cleanlinesssample/Mgrequest2`,
    Mgrequest3_URL : `api/Cleanlinesssample/Mgrequest3`,
    Mgrequest4_URL : `api/Cleanlinesssample/Mgrequest4`,
    Mgrequest5_URL : `api/Cleanlinesssample/Mgrequest5`,
    Mgrequest6_URL : `api/Cleanlinesssample/Mgrequest6`,
    Mgrequest7_URL : `api/Cleanlinesssample/Mgrequest7`,
    Mgrequest8_URL : `api/Cleanlinesssample/Mgrequest8`,
    Mgrequest9_URL : `api/Cleanlinesssample/Mgrequest9`,
    Mgrequest10_URL : `api/Cleanlinesssample/Mgrequest10`,
    Mgrequest11_URL : `api/Cleanlinesssample/Mgrequest11`,
    Mgrequest12_URL : `api/Cleanlinesssample/Mgrequest12`,
    Mgrequest13_URL : `api/Cleanlinesssample/Mgrequest13`,
    Mgrequest14_URL : `api/Cleanlinesssample/Mgrequest14`,
    Datatestfor_URL : `api/Cleanlinesssample/Datatestfor`,
    Datatestforreason_URL : `api/Cleanlinesssample/Datatestforreason`,
    Mgapprove_URL : `api/Cleanlinesssample/Mgapprove`,
    Mgapprovereason_URL : `api/Cleanlinesssample/Mgapprovereason`,
    Cleanlinessapprove_URL : `api/Cleanlinesssample/Cleanlinessapprove`,
    Cleanlinessapprove2_URL : `api/Cleanlinesssample/Cleanlinessapprove2`,
    Cleanlinessapprove3_URL : `api/Cleanlinesssample/Cleanlinessapprove3`,
    Cleanlinessapprove4_URL : `api/Cleanlinesssample/Cleanlinessapprove4`,
    Cleanlinessapprove5_URL : `api/Cleanlinesssample/Cleanlinessapprove5`,
    Cleanlinessapprove6_URL : `api/Cleanlinesssample/Cleanlinessapprove6`,
    Cleanlinessapprove7_URL : `api/Cleanlinesssample/Cleanlinessapprove7`,
    Cleanlinessapprove8_URL : `api/Cleanlinesssample/Cleanlinessapprove8`,
    Cleanlinessapprove9_URL : `api/Cleanlinesssample/Cleanlinessapprove9`,
    Cleanlinessapprove10_URL : `api/Cleanlinesssample/Cleanlinessapprove10`,
    Cleanlinessapprove11_URL : `api/Cleanlinesssample/Cleanlinessapprove11`,
    Cleanlinessapprove12_URL : `api/Cleanlinesssample/Cleanlinessapprove12`,
    Cleanlinessapprove13_URL : `api/Cleanlinesssample/Cleanlinessapprove13`,
    Cleanlinessapprove14_URL : `api/Cleanlinesssample/Cleanlinessapprove14`,
    Mgrequestresult_URL : `api/Cleanlinesssample/Mgrequesterresult`,
    Mgrequestreason_URL : `api/Cleanlinesssample/Mgrequesterreason`,
    Cleanlinessapprovename_URL : `api/Cleanlinesssample/Cleanlinessname`,
    Cleanlinessapproveresult_URL : `api/Cleanlinesssample/Cleanlinessresult`,
    Cleanlinessapprovereason_URL : `api/Cleanlinesssample/Cleanlinessreason`,
    DataCleanliness_URL : `api/Cleanlinesssample/Datacleanliness`,
    DataCleanlinessseagate_URL : `api/Cleanlinesssample/Datacleanlinessseagate`,
    DataCleanlinessLuminar_URL : `api/Cleanlinesssample/DatacleanlinessLuminar`,
    DataCleanlinessdatetoCL_URL : `api/Cleanlinesssample/DataCleanlinessdatetoCL`,
    Datacleanlinessshipmentdate_URL : `api/Cleanlinesssample/Datacleanlinessshipmentdate`,
    Datacleanlinessapproval_URL : `api/Cleanlinesssample/Datacleanlinessapproval`,
    DatacleanlinessReject_URL : `api/Cleanlinesssample/DatacleanlinessReject`,
    DatacleanlinesswaitingMG_URL : `api/Cleanlinesssample/DatacleanlinesswaitingMG`,
    DatacleanlinesswaitingCL_URL : `api/Cleanlinesssample/DatacleanlinesswaitingCL`,
    Viewdatabase_URL : `api/Cleanlinesssample/Viewdatabase`,
    Viewdatabaseaccept_URL : `api/Cleanlinesssample/Viewdatabaseaccept`,
    Viewdatabasecheckpoint_URL : `api/Cleanlinesssample/Viewdatabasecheckpoint`,
    UploadFile_URL : `api/Cleanlinesssample/uploadfile`,
    Mailrequest_URL : `api/Cleanlinesssample/Mailrequest`,


    LARYEAR_UPDATE_URL: `api/LAR_BY_MODEL_UPDATE/year`,
    LARMONTH_UPDATE_URL: `api/LAR_BY_MODEL_UPDATE/Month`,
    LAR_UPDATE_URL: `api/LAR_BY_MODEL_UPDATE/LAR_UPDATE`,

    MC_ERROR_percen_URL: `api/MC_Error_percen/MC_ERROR`,
    MC_ERROR_percen_year_URL: `api/MC_Error_percen//MC_ERROR_YEAR`,
    MC_ERROR_by_process_URL: `api/MC_Error_percen/MC_ERROR_by_process`,
    MC_ERROR_by_process_year_URL: `api/MC_Error_percen/by_process_year`,


 INSERT_FROM_FILES_URL: `api/insert_from_file/insert`,

//graph_downtime//
graph_downtime_daily_Line_URL: `api/graph_downtime/Line`,
graph_downtime_daily_URL: `api/graph_downtime/daily`,
graph_downtime_month_URL: `api/graph_downtime/monthly`,

//graph_SPC//
PROCESS_SPC_URL: `api/spc_master/Process`,
PARAMETER_SPC_URL: `api/spc_master/Parameter`,
MODEL_SPC_URL: `api/spc_master/model`,
LINE_SPC_URL: `api/spc_master/Line`,
SERIAL_SPC_URL: `api/spc_master/Serial`,
MACHINE_SPC_URL: `api/spc_master/machine`,
VALUE_Y_SPC_URL: `api/spc_master/graph_spc_master`,


//Report_printlable
CODE_AS_400_Component_name__URL: `api/code_AS400/model`,
CODE_AS_400_Vendor_Name_URL: `api/code_AS400/Line`,
CODE_AS_400_URL: `api/code_AS400/confirm`,
CODE_AS400_URL: `api/code_AS400/report`,

//Alarm training
MODELALARMTRAINING : `api/alarmtraining/Model`,
LINEALARMTRAINING : `api/alarmtraining/Line`,
ALARMTRAININGALL : `api/alarmtraining/Alarmdetail`,
ALARMTRAININGMODEL : `api/alarmtraining/AlarmTraning`,
ALARMTRAININGEMPNO : `api/alarmtraining/AlarmEmpNo`,


MODELREPORTTRAINING : `api/reportojt/Model`,
LINEREPORTTRAINING : `api/reportojt/Line`,
REPORTTRAININGMODEL : `api/reportojt/Reportojt`,


//Unpacking_sorting_QANumber
UNPACK_SORTING_QANUMBER: `api/Unpacking/Unpacking_sorting_QANumber`,
UNPACKMODEL: `api/Unpacking/Model`,
UNPACK_SORTING_MODEL: `api/Unpacking/Unpacking_sorting`,

//LAR_by_team
GRAPH_LAR_BYTEAM_URL: `api/graph_LAR_byteam/output`, 
GET_SUPPORT_URL: `api/graph_LAR_byteam/Support`, 
GRAPH_DAILY_LAR_BY_TEAM_URL: `api/graph_LAR_byteam/output_daily`, 


//graph_trendmaster//
PROCESS_TRENDMASTER_URL: `api/trend_master/Process`,
PARAMETER_TRENDMASTER_URL: `api/trend_master/Parameter`,
MODEL_TRENDMASTER_URL: `api/trend_master/model`,
LINE_TRENDMASTER_URL: `api/trend_master/Line`,
SERIAL_TRENDMASTER_URL: `api/trend_master/Serial`,
MACHINE_TRENDMASTER_URL: `api/trend_master/machine`,
FIXTURE_TRENDMASTER_URL: `api/trend_master/fixture`,
VALUE_Y_TRENDMASTER_URL: `api/trend_master/graph_trend_master`,

//side_manu
DROPDOWN_DIVISION_URL: `api/side_menu/dropdown_Division`,
INSERT_SIDEMENU_URL: `api/side_menu/api_insert_sidemenu`,
ENG_URL: `api/side_menu/Engineer`,

//Downtime
DOWNTIME_URL: `api/downtime`,
DOWNTIME_GETPROCESS: `api/downtime/process`,
DOWNTIME_GETLINE: `api/downtime/line`,
// DOWNRIME_IMPORT_URL 

//Missing part 
MISSING_PART_URL: `api/missing_part`,
MISSING_PART_GETCOMPONENT: `api/missing_part/component`,
MISSING_PART_GETLINE: `api/missing_part/line`,

// DOWNRIME_IMPORT_URL 
IMPORTMENT_DOWNTIME_PART_URL: `api/importment_downtime/`,

//PC check inventory
MODELPC_URL : `api/pc_inventory/Model`,
LOCATIONPC_URL : `api/pc_inventory/Location`,
SUMMARYPC_URL : `api/pc_inventory/Summary`,
SUMMARYPCDETAIL_URL : `api/pc_inventory/Summarydetail`,
STATUSPC_URL : `api/pc_inventory/Status`,

//DB Master
DBMASTER_URL: `api/DBMaster/DBMaster`,

//PC check inventory
MODELPC_URL : `api/pc_inventory/Model`,
LOCATIONPC_URL : `api/pc_inventory/Location`,
SUMMARYPC_URL : `api/pc_inventory/Summary`,
SUMMARYPCDETAIL_URL : `api/pc_inventory/Summarydetail`,
STATUSPC_URL : `api/pc_inventory/Status`,
MBAFG_URL : `api/pc_inventory/MBAFG`,
};

export const key = {
  LOGIN_PASSED: `LOGIN_PASSED`,
  API_KEY: `API_KEY`,
  USER_LV: `USER_LV`,
  USER_NAME: "USER_NAME",
  USER_EMP: "USER_EMP",
  JWT_TOKEN: "JWT_TOKEN",
};
