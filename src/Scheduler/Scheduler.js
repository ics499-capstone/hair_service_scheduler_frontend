import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import "./Scheduler.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Scheduler = (props) => {
  const classes = useStyles();
  const [time, setTime] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleChange = (event) => {
    setTime(event.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: 30 }}>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Typography
            component="div"
            style={{ backgroundColor: "#fed8b1", height: "40vh" }}
          >
            {" "}
            <h2>Scheduler Page</h2>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-helper-label">Time</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={time}
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>10:00 AM</MenuItem>
                <MenuItem value={1}>1:00 PM</MenuItem>
                <MenuItem value={3}>3:00 PM</MenuItem>
              </Select>
              <FormHelperText>Select a time</FormHelperText>
            </FormControl>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              {/* <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date picker inline"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              /> */}
            </MuiPickersUtilsProvider>
          </Typography>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default Scheduler;
