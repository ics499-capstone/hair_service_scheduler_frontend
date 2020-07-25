import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "12px 5px 10px 2px",
  },
}));

const LoginContainer = (props) => {
  const classes = useStyles();
  const [varLogin, setVarLogin] = React.useState(true);

  const loginclickHandler = () => {
    setVarLogin(false);
  };

  return (
    <div>
      {/* {varLogin ? (
        <Button color="secondary" onClick={loginclickHandler} href="/Login">
          Login
        </Button>
      ) : (
        <Button> LogOut</Button>
      )}

      <Button variant="contained" color="secondary" href="/SignUp">
        Sign Up
      </Button> */}
    </div>
  );
};

export default LoginContainer;
//hello
