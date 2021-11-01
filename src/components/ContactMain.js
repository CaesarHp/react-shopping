import React from "react";

import { Grid } from "@mui/material";
import { Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import ContactForm from "../ui/ContactForm";
import ContactInfo from "../ui/ContactInfo";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "5rem",
  },
  title: {
    marginBottom: "2rem",
  },
  divider: {
    backgroundColor: theme.palette.divider,
    margin: "2rem 0",
  },
  iconContainer: {
    display: "flex",
    marginBottom: theme.spacing(3),
    color: "black",
  },
  contactInfo: {
    fontWeight: 400,
    marginLeft: theme.spacing(2),
  },
}));

function ContactMain() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid
          container
          columnSpacing={{ xs: 0, lg: 6 }}
          rowSpacing={{ xs: 6, lg: 0 }}
        >
          <Grid item xs={12} lg={8}>
            <Typography variant="h5" className={classes.title}>
              Give Us Some Feedback
            </Typography>
            <ContactForm />
          </Grid>
          <Grid item xs={12} lg={4}>
            <Typography variant="h5" className={classes.title}>
              Contact Us
            </Typography>
            <ContactInfo
              iconContainer={classes.iconContainer}
              contactInfo={classes.contactInfo}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default ContactMain;
