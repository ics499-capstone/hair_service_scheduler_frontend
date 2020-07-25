import React, { Component } from "react";
import axios from "axios";
import "./SignUp.css";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      password: "",
      email: "",
      passwordConfirm: "",
      username: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://localhost:5000/auth/register", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const {
      firstname,
      lastname,
      password,
      email,
      passwordConfirm,
      username,
    } = this.state;
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "center", padding: 30 }}>
          <h2>User Registration</h2>
          <br />
        </div>

        <form className="form" onSubmit={this.submitHandler}>
          <label className="label">User Name</label>
          <input
            className="input"
            type="text"
            name="username"
            value={username}
            onChange={this.changeHandler}
          />
          <br />
          <label className="label">First Name</label>
          <input
            className="input"
            type="text"
            name="firstname"
            value={firstname}
            onChange={this.changeHandler}
          />
          <br />
          <label className="label">Last Name</label>
          <input
            className="input"
            type="text"
            name="lastname"
            value={lastname}
            onChange={this.changeHandler}
          />
          <br />
          <label className="label">Email</label>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input
            className="input"
            type="text"
            name="email"
            value={email}
            onChange={this.changeHandler}
          />
          <br />
          <label className="label">Password</label>
          <input
            className="input"
            type="text"
            name="password"
            value={password}
            onChange={this.changeHandler}
          />
          <br />
          <label className="label">Password Confirm</label>
          &nbsp;&nbsp;
          <input
            className="input"
            type="text"
            name="passwordConfirm"
            value={passwordConfirm}
            onChange={this.changeHandler}
          />
          <br />
          <button type="submit"> Submit</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
