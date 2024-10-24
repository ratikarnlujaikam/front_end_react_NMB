import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { httpClient } from "../../utils/HttpClient";
import { key, server, YES } from "../../constants";
import Swal from "sweetalert2";
import Header from "../header/header"; // Update the path accordingly

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      empNumber: "",
      password: "",
      email: "",
      pwType: "password",
      pwIcon: "fas fa-eye",
    };
  }

  componentDidMount = () => {
    this.autoLogin();
  };

  autoLogin = () => {
    if (localStorage.getItem(key.LOGIN_PASSED) === YES) {
      this.props.history.push("/home");
    }
  };

  doLogin = async () => {
    let result = await httpClient.post(server.LOGIN_URL, this.state);
    console.log(result.data);
    if (result.data.login_result === "pass") {
      localStorage.setItem(key.LOGIN_PASSED, YES);
      localStorage.setItem(key.JWT_TOKEN, result.data.jwt);
      localStorage.setItem(key.USER_LV, result.data.resultlogin.levelUser);
      localStorage.setItem(key.USER_NAME, result.data.resultlogin.empNumber);

      // Pass username and empNumber as props
      this.props.history.push({
        pathname: "/home",
        state: {
          username: result.data.resultlogin.username,
          empNumber: result.data.resultlogin.empNumber,
          email: result.data.resultlogin.email,
        },
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "ID/Password is incorrect!!",
      });
    }
    console.log("Username:", result.data.resultlogin.username);
    console.log("empNumber:", result.data.resultlogin.empNumber);
    
  };


  componentDidMount() {

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
            onSubmit={(e) => {
              e.preventDefault();
              this.doLogin();
            }}
          >
            <div className="card">
              <div className="card-body login-card-body">
                <p className="login-box-msg">Sign in to start your session</p>

                {/* Input empNumber */}
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Employee No."
                    onChange={(e) => {
                      this.setState({ empNumber: e.target.value }, () => {});
                    }}
                    required
                  />
                  {/* Additional text */}
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user" />
                    </div>
                  </div>
                </div>

                {/* Input password */}
                <div className="input-group mb-3">
                  <input
                    type={this.state.pwType}
                    className="form-control"
                    placeholder="Password"
                    onChange={(e) => {
                      this.setState({ password: e.target.value });
                    }}
                    required
                  ></input>

                  <div className="input-group-append">
                    <div className="input-group-text">
                      <i
                        class={this.state.pwIcon}
                        style={{
                          color:
                            this.state.pwIcon == "fas fa-eye"
                              ? "dodgerBlue"
                              : "red",
                        }}
                        onClick={() => {
                          if (this.state.pwType == "password") {
                            this.setState({ pwType: "text" });
                            this.setState({ pwIcon: "fas fa-eye-slash" });
                          } else {
                            this.setState({ pwType: "password" });
                            this.setState({ pwIcon: "fas fa-eye" });
                          }
                          console.log(this.state.pwIcon);
                        }}
                      ></i>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {/* Remember Me Box */}
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">Remember Me</label>
                    </div>
                  </div>
                  {/* Sign In button*/}
                  <div className="col-4">
                    <button type="submit" className="btn btn-primary btn-block">
                      Sign In
                    </button>
                  </div>
                  {/* /.col */}
                </div>

                <p className="mb-1">
                  <Link to="/changepassword" className="text-center">
                    Change new password
                  </Link>
                  {/* <a href="forgot-password.html">I forgot my password</a> */}
                </p>

                <p className="mb-1">
                <Link to="/forgot" className="text-center">
                I forgot my password
                  </Link>
        
                  {/* <Link to="/forgot" className="text-center">
                  I forgot my password
                </Link> */}

                  {/* <a href="forgot-password.html">I forgot my password</a> */}
                </p>

                <p className="mb-0">
                  <Link to="/register" className="text-center">
                    Register a new membership
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
