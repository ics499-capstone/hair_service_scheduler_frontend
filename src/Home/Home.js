import React from "react";
import { Button } from "react-bootstrap";
import "./Home.css";
import pic from "./hair.jpg";
import Scheduler from "../Scheduler/Scheduler";

const Home = (props) => {
  const [newform, setNewForm] = React.useState(true);

  const clickscheduler = () => {
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
            <Button variant="btn btn-success" onClick={clickscheduler}>
              BOOK NOW
            </Button>
          </form>
        ) : (
          <Scheduler />
        )}
      </div>
    </div>
  );
};
export default Home;
