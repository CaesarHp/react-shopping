import React from "react";

import Grid from "@mui/material/Grid";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { styled } from "@material-ui/styles";
import { useTheme } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";

import { makeStyles } from "@material-ui/core";

import ContactInfo from "../ui/ContactInfo";
import SocialMedia from "../ui/SocialMedia";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "4rem 0",
    color: "white",
    backgroundColor: "black",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      padding: "4rem 0",
    },
  },
  title: {
    color: theme.palette.grey[300],
    marginBottom: theme.spacing(3),
  },
  body: {
    color: theme.palette.grey[300],
    fontWeight: 200,
  },
  aboutContainer: {
    width: "80%",
  },
  socialIconContainer: {
    marginTop: "2rem",
    color: theme.palette.grey[200],
  },
  iconContainer: {
    display: "flex",
    marginBottom: theme.spacing(3),
    color: theme.palette.grey[200],
  },
  contactInfo: {
    fontWeight: 200,
    marginLeft: theme.spacing(2),
  },
  input: {
    marginBottom: theme.spacing(3),
  },
  btn: {
    borderRadius: 0,
    padding: "1rem 2rem",
    fontWeight: 400,
    color: "#f5f5f5",
    border: "1px solid #f5f5f5",

    "&:hover": {
      border: "1px solid #eeeeee",
      color: "#eeeeee",
      backgroundColor: theme.palette.grey[800],
    },
  },
  copyright: {
    color: theme.palette.grey[300],
    fontWeight: 200,
    marginTop: "2rem",
  },
}));

const CssTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    backgroundColor: "#eeeeee",
  },
  "& label.Mui-focused": {
    color: "#616161",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#616161",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#bdbdbd",
    },
    "&:hover fieldset": {
      borderColor: "#757575",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#616161",
    },
  },
});

function Footer() {
  const classes = useStyles();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <div className={classes.root}>
        <Grid
          container
          justifyContent="center"
          rowSpacing={matches ? 4 : 0}
          //columnSpacing={matches ? 0 : 4}
        >
          <Grid item xs={12} md={4}>
            <Grid container justifyContent="center">
              <Grid item className={classes.aboutContainer}>
                <Typography
                  variant="h6"
                  component="h1"
                  className={classes.title}
                >
                  La Beauté
                </Typography>
                <Typography variant="body2" className={classes.body}>
                  Our formulations have proven efficacy, contain organic
                  ingredients only and are 100% cruelty free.
                </Typography>

                <SocialMedia
                  socialIconContainer={classes.socialIconContainer}
                  iconSize="medium"
                />

                <Typography variant="body2" className={classes.copyright}>
                  © 2021 La Beauté. All Rights Reserved
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container justifyContent="center">
              <Grid item>
                <Typography variant="h6" className={classes.title}>
                  Contact
                </Typography>

                <ContactInfo
                  iconContainer={classes.iconContainer}
                  contactInfo={classes.contactInfo}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <Grid container justifyContent="center">
              <Grid item>
                <Typography variant="h6" className={classes.title}>
                  Subscribition
                </Typography>
                <form className={classes.form} noValidate autoComplete="off">
                  <CssTextField
                    variant="filled"
                    id="email"
                    label="Email Address"
                    required
                    fullWidth
                    InputProps={{ disableUnderline: true }}
                    className={classes.input}
                  />
                </form>
                <Button
                  variant="outlined"
                  size="large"
                  color="primary"
                  disableElevation
                  className={classes.btn}
                >
                  Subscribe
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Footer;
