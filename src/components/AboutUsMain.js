import React from "react";

import { Grid } from "@mui/material";
import { Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import banner1 from "../img/hand-care.jpg";
import banner2 from "../img/body-lotion.jpg";
import HomeService from "../components/HomeService";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "5rem 0",
  },
  spacing: {
    padding: "0 5rem",
    marginBottom: "8rem",
  },
  title: {
    marginBottom: "2rem",
    textAlign: "center",
  },
  body: {
    textAlign: "center",
    fontWeight: 300,
    fontStyle: "italic",
    padding: "0 18rem",
    lineHeight: 1.8,

    [theme.breakpoints.down("md")]: {
      padding: "0 8rem",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "0 2rem",
    },
  },
  img: {
    width: "100%",
    maxHeight: "100%",
  },
  contentContainer: {
    padding: "0 2rem",

    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
  },
  contentTitle: {
    marginBottom: "3rem",
  },
  contentBody: {
    marginBottom: "1rem",
    fontWeight: 300,
    lineHeight: 1.8,
  },
}));

function AboutUsMain() {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <div className={classes.spacing}>
              <Typography variant="h3" className={classes.title}>
                Our Mission
              </Typography>
              <Typography variant="body1" className={classes.body}>
                Start with something pure, something good for you, and something
                that makes you feel pampered like a princess. We’re talking
                about clean beauty gift sets, of course – and we’ve got a
                bouquet of beauties for yourself or someone you love.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className={classes.spacing}>
              <Grid container spacing={6}>
                <Grid item xs={12} md={5}>
                  <img
                    alt="cosmetic-banner"
                    src={banner1}
                    className={classes.img}
                  />
                </Grid>
                <Grid item xs={12} md={7}>
                  <div className={classes.contentContainer}>
                    <Typography variant="h3" className={classes.contentTitle}>
                      Oganic Beauty
                    </Typography>
                    <Typography variant="body1" className={classes.contentBody}>
                      Complexion-perfecting natural foundation enriched with
                      antioxidant-packed superfruits, vitamins, and other
                      skin-nourishing nutrients. Creamy liquid formula sets with
                      a pristine matte finish for soft, velvety smooth skin.
                      Made using clean, natural ingredients, our products are
                      designed for everyone.
                    </Typography>
                    <Typography variant="body1" className={classes.contentBody}>
                      Looking for love in all the wrong places? Start with
                      something pure, something good for you, and something that
                      makes you feel pampered like a princess. We’re talking
                      about clean beauty gift sets, of course – and we’ve got a
                      bouquet of beauties for yourself or someone you love!
                    </Typography>
                    <Typography variant="body1" className={classes.contentBody}>
                      Start with something pure, something good for you, and
                      something that makes you feel pampered like a princess.
                      We’re talking about clean beauty gift sets, of course –
                      and we’ve got a bouquet of beauties for yourself or
                      someone you love.
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>

          <Grid item xs={12}>
            <div style={{ marginBottom: "8rem" }}>
              <HomeService />
            </div>
          </Grid>

          <Grid item xs={12}>
            <div className={classes.spacing}>
              <Grid container spacing={6}>
                <Grid item xs={12} md={7}>
                  <div className={classes.contentContainer}>
                    <Typography variant="h3" className={classes.contentTitle}>
                      Natural Ingredients
                    </Typography>
                    <Typography variant="body1" className={classes.contentBody}>
                      Complexion-perfecting natural foundation enriched with
                      antioxidant-packed superfruits, vitamins, and other
                      skin-nourishing nutrients. Creamy liquid formula sets with
                      a pristine matte finish for soft, velvety smooth skin.
                      Made using clean, natural ingredients, our products are
                      designed for everyone.
                    </Typography>
                    <Typography variant="body1" className={classes.contentBody}>
                      Looking for love in all the wrong places? Start with
                      something pure, something good for you, and something that
                      makes you feel pampered like a princess. We’re talking
                      about clean beauty gift sets, of course – and we’ve got a
                      bouquet of beauties for yourself or someone you love!
                    </Typography>
                    <Typography variant="body1" className={classes.contentBody}>
                      Start with something pure, something good for you, and
                      something that makes you feel pampered like a princess.
                      We’re talking about clean beauty gift sets, of course –
                      and we’ve got a bouquet of beauties for yourself or
                      someone you love.
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={12} md={5}>
                  <img
                    alt="cosmetic-banner"
                    src={banner2}
                    className={classes.img}
                  />
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default AboutUsMain;
