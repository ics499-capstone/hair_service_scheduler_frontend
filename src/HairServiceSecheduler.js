import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import HeaderBar from "./HeaderBar/HeaderBar";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(5),
  },
}));

const HairService_secheduler = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <HeaderBar />
        </Grid>
        {/* <Grid item xs={10}>
          {showApplication ? (
            <LoginContainer loginclickHandler={this.loginclickHandler} />
          ) : (
            <h1>Welcome to Beauty Salon</h1>
          )}
        </Grid> */}
      </Grid>
    </div>
  );
};
export default HairService_secheduler;
