import React, { Component } from "react";
import { httpClient } from "../../utils/HttpClient";
import { server } from "../../constants";
import Swal from "sweetalert2";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      empNumber: "",
      email: "",
      password: "",
      rePassword: "",
      position: "",
    };
  }

  // HandleClickSuccess() {
  //   Swal.fire({
  //     icon: "success",
  //     title: "Success",
  //     type: "success",
  //     text:
  //       "Congratulations!,your registration has been succesfully completed.",
  //   });
  // }

  doRegister = async () => {
    if (this.state.rePassword === this.state.password) {
      let result = await httpClient.post(server.REGISTER_URL, this.state);
      console.log(result.data);
      if (result.data.api_result === 'ok') {
        this.props.history.push("/login");
      Swal.fire({
        icon: "success",
        title: "Success",
        type: "success",
        text:
          "Congratulations!,your registration has been successfully completed.",
      });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          type: "error",
          text:
            "Error, account with this email or employee number already exists.",
        });
      }
      
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password do not match!",
      });
    }
  };

  render() {
    return (
      <div className="register-page">
        <div className="register-box">
          <div className="card card-outline card-primary">
            <div className="card-header text-center">
              <a href="../../index2.html" className="h3">
                <b>Account Registration</b>
              </a>
            </div>
            <form
              onSubmit = { (e) => {
                e.preventDefault();
                this.doRegister()
              }}>
            <div className="card-body">
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
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  onChange={(e) => {
                    this.setState({ username: e.target.value });
                  }}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Position (e.g. Engineer, QC)"
                  onChange={(e) => {
                    this.setState({ position: e.target.value });
                  }}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user" />
                  </div>
                </div>
              </div>

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

              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={(e) => {
                    this.setState({ password: e.target.value });
                  }}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>

              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Retype password"
                  onChange={(e) => {
                    this.setState({ rePassword: e.target.value });
                  }}
                  required
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      name="terms"
                      defaultValue="agree"
                    />
                    <label htmlFor="agreeTerms">
                      I agree to the <a href="terms">Terms and Conditions</a>
                    </label>
                  </div>
                </div>
                {/* /.col */}
                <div className="col-4">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block"
                  >
                    Register
                  </button>
                </div>
                {/* /.col */}
              </div>

              <a href="login.html" className="text-center">
                I already have a membership
              </a>
            </div>
            </form>
            {/* /.form-box */}
          </div>
        </div>
      </div>
    );
  }
}

export default Register;