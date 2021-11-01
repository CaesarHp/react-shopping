import React from "react";

import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { styled } from "@material-ui/styles";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    marginBottom: theme.spacing(3),
  },
  btn: {
    borderRadius: 0,
    padding: "0.8rem 2rem",
    backgroundColor: "black",
    fontWeight: 400,
    textTransform: "none",
    color: "white",

    "&:hover": {
      backgroundColor: theme.palette.grey[900],
    },
  },
}));

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#616161",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#616161",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "black",
      borderRadius: 0,
    },
    "&:hover fieldset": {
      borderColor: "black",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid black",
    },
  },
});

function FormUi() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <form className={classes.form}>
          <CssTextField
            variant="outlined"
            id="name"
            label="Full Name"
            required
            className={classes.input}
          />

          <CssTextField
            variant="outlined"
            id="email"
            label="Email Address"
            required
            className={classes.input}
          />
          <CssTextField
            variant="outlined"
            id="phone"
            label="Phone"
            className={classes.input}
          />
          <CssTextField
            variant="outlined"
            id="subject"
            label="Subject"
            className={classes.input}
          />
          <CssTextField
            id="message"
            label="Message"
            multiline
            rows={5}
            placeholder="Enter your message..."
            variant="outlined"
            required
            className={classes.input}
          />
          <div>
            <Button
              variant="contained"
              color="primary"
              disableElevation
              className={classes.btn}
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default FormUi;
