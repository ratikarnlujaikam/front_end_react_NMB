import React, { Component } from "react";
import axios from "axios";
import { httpClient } from "../../utils/HttpClient";
import { server } from "../../constants";
import Swal from "sweetalert2";

class Changepassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      empNumber: "",
      oldPassword: "",
      newPassword: "",
      confirmPassword: "",
      oldpwType: "password",
      oldpwIcon: "fas fa-eye",
      newpwType: "password",
      newpwIcon: "fas fa-eye",
      repwType: "password",
      repwIcon: "fas fa-eye",
    };
  }

  doChangePassword = async () => {
    if (this.state.newPassword === this.state.confirmPassword) {
      let result = await httpClient.post(server.CHANGEPASSWORD_URL, this.state);
      console.log(result.data);
      Swal.fire({
        icon: "success",
        title: "Success",
        type: "success",
        text:
          "Your new password has been change completed.",
      });
      this.props.history.push("/login");
    } else {
      Swal.fire({
        icon: "error",
        title: "The passwords you entered did not match!!",
      });
    }
  };

  getData = async () => {
    let result = await axios.get("http://localhost:2010/api/authorize/user");
    console.log(result);
  };

  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <div className="login-page">
        <div className="login-box">
          <div className="login-logo">
            <a href="../../index2.html">
              <b>MinebeaMitsumi</b>
            </a>
          </div>
          <form
            onSubmit = { (e) => {
              e.preventDefault();
              this.doChangePassword()
            }}>
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Change new password</p>

              {/* Input empNo */}
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Employee No."
                  onChange={(e) => {
                    this.setState({ empNumber: e.target.value });
                  }}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>

              {/* Input oldPW */}
              <div className="input-group mb-3">
                <input
                  type={this.state.oldpwType}
                  className="form-control"
                  placeholder="Old Password"
                  onChange={(e) => {
                    this.setState({ oldPassword: e.target.value });
                  }}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <i class={this.state.oldpwIcon}
                      style = {{ color: this.state.oldpwIcon === "fas fa-eye" ? 'dodgerBlue' : 'red'}}
                      onClick={ () => {
                        if (this.state.oldpwType === "password") {
                          this.setState({oldpwType: "text"})
                          this.setState({oldpwIcon: "fas fa-eye-slash"})
                        } else {
                          this.setState({oldpwType: "password"})
                          this.setState({oldpwIcon: "fas fa-eye"})
                        }
                        console.log(this.state.oldpwIcon)
                      }}></i>
                  </div>
                </div>
              </div>

              {/* Input newPW */}
              <div className="input-group mb-3">
                <input
                  type={this.state.newpwType}
                  className="form-control"
                  placeholder="New password"
                  onChange={(e) => {
                    this.setState({ newPassword: e.target.value });
                  }}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <i class={this.state.newpwIcon}
                      style = {{ color: this.state.newpwIcon === "fas fa-eye" ? 'dodgerBlue' : 'red'}}
                      onClick={ () => {
                        if (this.state.newpwType === "password") {
                          this.setState({newpwType: "text"})
                          this.setState({newpwIcon: "fas fa-eye-slash"})
                        } else {
                          this.setState({newpwType: "password"})
                          this.setState({newpwIcon: "fas fa-eye"})
                        }
                        console.log(this.state.newpwIcon)
                      }}></i>
                  </div>
                </div>
              </div>

              {/* Input renewPW */}
              <div className="input-group mb-3">
                <input
                  type={this.state.repwType}
                  className="form-control"
                  placeholder="Confirm password"
                  onChange={(e) => {
                    this.setState({ confirmPassword: e.target.value });
                  }}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                  <i class={this.state.repwIcon}
                      style = {{ color: this.state.repwIcon === "fas fa-eye" ? 'dodgerBlue' : 'red'}}
                      onClick={ () => {
                        if (this.state.repwType === "password") {
                          this.setState({repwType: "text"})
                          this.setState({repwIcon: "fas fa-eye-slash"})
                        } else {
                          this.setState({repwType: "password"})
                          this.setState({repwIcon: "fas fa-eye"})
                        }
                        console.log(this.state.repwIcon)
                      }}></i>
                  </div>
                </div>
              </div>

              <div className="row">
                {/* Sign In button*/}
                <div className="col-4">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                  >
                    Submit
                  </button>
                </div>
                {/* /.col */}
              </div>
            </div>
          </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Changepassword;