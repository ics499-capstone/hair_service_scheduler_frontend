import React, { Component } from "react";
import { Button } from "react-bootstrap";
import history from "../history";
import "./Home.css";
import pic from "./hair.jpg";

export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <img className="banner" alt=" " src={pic} height={600} width={1440} />
        <div className="lander">
          <h1>Welcome to Beauty Salon</h1>
          <p>"A WOMAN WHO CUTS HER IS ABOUT TO CHANGE HER LIFE" -Coco Chanel</p>
          <form>
            <Button
              variant="btn btn-success"
              onClick={() => history.push("/Services")}
            >
              BOOK NOW
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
