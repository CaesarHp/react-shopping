import React from "react";

import { Typography } from "@material-ui/core";
import { Grid } from "@mui/material";
import { useTheme } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import LocalShippingRoundedIcon from "@mui/icons-material/LocalShippingRounded";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import QuestionAnswerRoundedIcon from "@mui/icons-material/QuestionAnswerRounded";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "black",
    padding: "4rem 6rem",
    textAlign: "center",
  },
  serviceContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    color: theme.palette.grey[300],
    fontWeight: 300,
    marginBottom: "1rem",
  },
  body: {
    fontWeight: 300,
    color: theme.palette.grey[300],
  },
}));

function HomeService() {
  const classes = useStyles();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <div className={classes.root}>
        <Grid container rowSpacing={matches ? 4 : 0}>
          <Grid item xs={12} md={4}>
            <div className={classes.serviceContainer}>
              <LocalShippingRoundedIcon
                style={{
                  fontSize: "3rem",
                  color: "#e0e0e0",
                  marginBottom: "1.5rem",
                }}
              />
              <Typography variant="h5" className={classes.title}>
                Free Delivery
              </Typography>
              <Typography variant="body2" className={classes.body}>
                Free delivery for all orders over $49.99.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.serviceContainer}>
              <CardGiftcardIcon
                style={{
                  fontSize: "3rem",
                  color: "#e0e0e0",
                  marginBottom: "1.5rem",
                }}
              />
              <Typography variant="h5" className={classes.title}>
                Lovely Gift
              </Typography>
              <Typography variant="body2" className={classes.body}>
                Free gifts and samples for our members.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <div className={classes.serviceContainer}>
              <QuestionAnswerRoundedIcon
                style={{
                  fontSize: "3rem",
                  color: "#e0e0e0",
                  marginBottom: "1.5rem",
                }}
              />
              <Typography variant="h5" className={classes.title}>
                Customer Service
              </Typography>
              <Typography variant="body2" className={classes.body}>
                Live chat and phone call are available all day
              </Typography>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default HomeService;
