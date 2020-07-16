import React, { Component } from "react";
import axios from "axios";

import "./Login.css";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      passWord: "",
    };

    // this.login = this.login.bind(this);
    // this.onChange = this.onChange.bind(this);
  }

  //login() {
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
  //}

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  loginHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { email, passWord } = this.state;
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
          <label className="label">Email</label>
          <input
            className="input"
            type="text"
            name="email"
            value={email}
            placeholder="email"
            onChange={this.changeHandler}
          />{" "}
          <br />
          <label className="label">Password</label>
          <input
            className="input"
            type="password"
            name="password"
            value={passWord}
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
