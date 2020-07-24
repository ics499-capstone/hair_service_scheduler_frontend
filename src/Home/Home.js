import React, { Component } from "react";
import { Button } from "react-bootstrap";
import history from "../history";
import "./Home.css";
import pic from "./hair.jpg";
import Scheduler from "../Scheduler/Scheduler";

const Home = (props) => {
  const [newform, setNewForm] = React.useState(true);

  const clickscheduler = () => {
    //this.newform = !this.newform;
    setNewForm(false);
    console.log("hello");
  };

  return (
    <div className="Home">
      <img className="banner" alt=" " src={pic} height={600} width={1440} />
      <div className="lander">
        <h1>Welcome to Beauty Salon</h1>
        <p>"A WOMAN WHO CUTS HER IS ABOUT TO CHANGE HER LIFE" -Coco Chanel</p>

        {newform ? (
          <form>
            <Button
              variant="btn btn-success"
              // onClick={() => history.push("/Service")}
              onClick={clickscheduler}
            >
              BOOK NOW
            </Button>
          </form>
        ) : (
          <Scheduler />
          // <h1>hello</h1>
        )}
      </div>
    </div>
  );
};
export default Home;
