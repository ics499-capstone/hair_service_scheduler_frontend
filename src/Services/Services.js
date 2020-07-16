import React, { Component } from "react";
import pic from "./services_image.jpg";
import "./Services.css";

class Services extends Component {
  render() {
    return (
      <div>
        <img className="banner" alt=" " src={pic} height={550} width={1440} />
        <div className="lander">
          <h1> Our Services </h1>
          <p>CUT AND STYLE</p>
          <p>COLOR</p>
          <p>TEXTURE</p>
          <p>EXTENSIONS</p>
          <p>SKINCARE</p>
          <p>WAXING</p>
          <p>MAKEUP</p>
        </div>
      </div>
    );
  }
}

export default Services;
