import React, { Component } from "react";
import { server } from "../../constants";
import { httpClient } from "../../utils/HttpClient";
import moment from "moment";
import Swal from "sweetalert2";

class Result extends Component { 
  constructor(props) { 
    super(props); 

    this.state = { 
      data: null, 
    }; 
  } 

  componentDidMount() { 
    this.getData(); 
  } 

  getData = async () => { 
    let result = await httpClient.get(server.queryuser_URL); 
    console.log(result.data.result); 
    this.setState({ data: result.data.result }); 
  }; 

  renderTableData() { 
    if (this.state.data !== null) 
      return this.state.data.map((item) => ( 
        <tr> 
          <td>{item.username}</td> 
          <td>{item.empNumber}</td> 
          <td>{item.position}</td> 
          <td>{item.email}</td> 
          
          <td> 
            <button 
              onClick={async (e) => { 
                e.preventDefault(); 
                Swal 
                  .fire({ 
                    title: "Are you sure?", 
                    text: "You want to delete this!", 
                    icon: "warning", 
                    showCancelButton: true, 
                    confirmButtonColor: "#3085d6", 
                    cancelButtonColor: "#d33", 
                    confirmButtonText: "Yes, delete it!", 
                  }) 
                  .then(async (result) => { 
                    if (result.isConfirmed) { 
                      await httpClient.delete(server.queryuser_URL, { 
                        data: { username: item.username }, 
                      }); 
                      this.getData(); 
                      
                      Swal.fire( 
                        "Deleted!", 
                        "Your file has been deleted.", 
                        "success" 
                      ); 
                    } 
                  }); 
                
              }} 
            > 
              Delete{" "} 
            </button> 
          </td> 
        </tr> 
      )); 
  } 

  render() { 
    return ( 

      <div class="content-wrapper">
      <div className="content" style={{ paddingTop: 70 }}>
      <div className="content-wrapper"> 
        Result 
        <div> 
          <table> 
            <thead> 
              <tr> 
                <th>username</th> 
                <th>Employee No.</th> 
                <th>Position</th>  
                <th>Email</th> 
           
              </tr> 
            </thead> 

            <tbody>{this.renderTableData()}</tbody> 
          </table> 
        </div> 
      </div> 
      </div> 
      </div> 
    ); 
  } 
} 

export default Result;