import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 0,
  },
  media: {
    height: 0,
    padding: "15rem 4rem 0 4rem",
  },
  contentContainer: {
    textAlign: "center",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
  },
  btn: {
    borderRadius: 0,
    backgroundColor: "black",
    fontWeight: 400,

    "&:hover": {
      backgroundColor: theme.palette.grey[900],
    },
  },
}));

export default function ProductCard({ name, price, img }) {
  const classes = useStyles();

  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <Card className={classes.root}>
            <CardActionArea>
              <Grid container>
                <Grid item xs={12}>
                  <CardMedia
                    className={classes.media}
                    image={img}
                    title="cosmetic"
                  />
                </Grid>

                <Grid item xs={12}>
                  <CardContent className={classes.contentContainer}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Price: ${price}
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </CardActionArea>
            <CardActions className={classes.btnContainer}>
              <Button
                variant="contained"
                size="medium"
                color="primary"
                disableElevation
                className={classes.btn}
              >
                View more
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
