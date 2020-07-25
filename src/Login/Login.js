import React, { Component } from "react";
import axios from "axios";
import history from "../history";
import { Redirect } from "react-router";

import "./Login.css";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      loggedIn: false,
    };

    // this.loginHandler = this.loginHandler.bind(this);
    // this.changeHandler = this.changeHandler.bind(this);
  }
  Login = () => {
    this.props.useHistory.push("/");
  };

  // login() {
  //   if (this.state.email && this.state.passWord) {
  //     PostData("login", this.state).then((result) => {
  //       let responseJson = result;
  //       if (responseJson.userData) {
  //         sessionStorage.setItem("userData", JSON.stringify(responseJson));
  //         this.setState({ redirectToReferrer: true });
  //       }
  //     });
  //   }
  //   PostData("login", this.state).then((result) => {
  //     let responseJson = result;
  //     console.log(responseJson);
  //   });
  // }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  loginHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://localhost:5000/auth/login", this.state)
      .then((response) => {
        console.log(response);
        window.location = "/";

        // let responseJson = response;
        // if (responseJson.userData) {
        //   sessionStorage.setItem("userData", JSON.stringify(responseJson));
        //   this.setState({ redirectToReferrer: true });
        // }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { username, password } = this.state;
    // if (this.state.redirectToReferrer) {
    //   return <Redirect to={"/home"} />;
    // }

    // if (sessionStorage.getItem("userData")) {
    //   return <Redirect to={"/home"} />;
    // }

    return (
      <div>
        <div style={{ display: "flex", justifyContent: "center", padding: 30 }}>
          <h2>Login</h2>
          <br />
        </div>
        <form className="form" onSubmit={this.loginHandler}>
          <label className="label">Username</label>
          <input
            className="input"
            type="text"
            name="username"
            value={username}
            placeholder="username"
            onChange={this.changeHandler}
          />{" "}
          <br />
          <label className="label">Password</label>
          <input
            className="input"
            type="text"
            name="password"
            value={password}
            placeholder="Password"
            onChange={this.changeHandler}
          />
          <br />
          <button type="login"> Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
