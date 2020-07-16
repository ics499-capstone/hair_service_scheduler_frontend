import React, { Component } from "react";
import axios from "axios";
import "./SignUp.css";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      passWord: "",
      email: "",
      passWordConfirm: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
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
    const {
      firstName,
      lastName,
      passWord,
      email,
      passWordConfirm,
    } = this.state;
    return (
      <div>
        <div style={{ display: "flex", justifyContent: "center", padding: 30 }}>
          <h2>User Registration</h2>
          <br />
        </div>

        <form className="form" onSubmit={this.submitHandler}>
          <label className="label">First Name</label>
          <input
            className="input"
            type="text"
            name="firstName"
            value={firstName}
            onChange={this.changeHandler}
          />
          <br />
          <label className="label">Last Name</label>
          <input
            className="input"
            type="text"
            name="lastName"
            value={lastName}
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
            type="password"
            name="passWord"
            value={passWord}
            onChange={this.changeHandler}
          />
          <br />
          <label className="label">Password Confirm</label>
          &nbsp;&nbsp;
          <input
            className="input"
            type="passwordConfirm"
            name="passwordConfirm"
            value={passWordConfirm}
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
