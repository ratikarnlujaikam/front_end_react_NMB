import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { httpClient } from "../../utils/HttpClient";
import { key, server, YES } from "../../constants";
import Swal from "sweetalert2";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
    };
  }

  doForgot = async () => {
    let result = await httpClient.post(server.FORGOTPASSWORD_URL, this.state);
    if (result.data.api_result === "ok") {
      console.log(result.data);
      Swal.fire({
        icon: "success",
        title: "Success",
        type: "success",
        text:
          "New password has been sent to your email",
          onClose: () => {
            // Navigate to the login page
            this.props.history.push("/login");;
          },

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
              this.doForgot()
            }}>
          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">
                Enter email to receive a new password
              </p>

              {/* Input email */}
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={(e) => {
                    this.setState({ email: e.target.value });
                  }}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope" />
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

export default ForgotPassword;