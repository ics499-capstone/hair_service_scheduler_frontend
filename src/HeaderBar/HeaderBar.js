import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import "./HeaderBar.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#fed8b1",
    zIndex: theme.zIndex.drawer + 1,
    padding: "10px 0px 0px 10px",
  },
  home: {
    fontSize: 17,
    color: "Black",
  },
  title: {
    textAlign: "center",
  },
}));

const HeaderBar = (props) => {
  const classes = useStyles();
  const [varLogin, setVarLogin] = React.useState(true);

  const loginclickHandler = () => {
    if (this.state.varLogin)
      setVarLogin(false);
    else
      setVarLogin(true);
  };

  return (
    <AppBar position="fixed" className={classes.root}>
      <Grid
        container
        direction="row-reverse"
        justify="space-between"
        alignItems="baseline"
      >
          {/* <LoginContainer username={"Login/LogOut"} /> */}
          {/* {varLogin ? (
            <Button href="/Login" onClick={loginclickHandler}>
              Login
            </Button>
          ) : (
            <Button> LogOut</Button>
          )} */}


          {/*
          <Button href="/Login" onClick={loginclickHandler}>
            {varLogin ? "Login" : "LogOut"}
          </Button>
          
          <Button variant="contained" href="/SignUp">
            Sign Up
          </Button>
          */}

          {
            varLogin ? 
            (
              <Grid item xs={2}>
                <Button className={classes.title} href="/Products">
                  Profile
                </Button>
                <Button href="/Signout">
                  Sign out
                </Button>
              </Grid>
            )
            :
            (
              <Grid item xs={2}>
                <Button href="/Login">
                  Login
                </Button>
                <Button variant="contained" href="/SignUp">
                  Sign Up
                </Button>
              </Grid>
            )
          }

          
        
        <Grid item xs={8}>
          <Button className={classes.title} href="/">
            Home
          </Button>
          <Button className={classes.title} href="/Products">
            Product
          </Button>
          <Button className={classes.title} href="/Services">
            Services
          </Button>
          <Button className={classes.title} href="/Contact">
            Contact
          </Button>
          <Button className={classes.title} href="/About">
            About
          </Button>
        </Grid>
        <Grid item xs={2}>
          <h1 className={classes.home}>Beauty</h1>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default HeaderBar;
