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
    border: "1px solid #eee",
  },
  media: {
    height: 0,
    padding: "18rem 8rem 0 8rem",
  },
  contentContainer: {
    textAlign: "center",
    maxWidth: "16rem",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "center",
    padding: "1rem",
  },
  btn: {
    borderRadius: 0,
    backgroundColor: "black",
    fontWeight: 400,
    textTransform: "none",

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
          <Card elevation={0} className={classes.root}>
            <CardActionArea>
              <CardMedia className={classes.media} image={img} title={name} />

              <CardContent className={classes.contentContainer}>
                <Typography gutterBottom variant="h5" component="h2">
                  {name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  ${price}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions className={classes.btnContainer}>
              <Button
                variant="contained"
                size="medium"
                color="primary"
                disableElevation
                className={classes.btn}
              >
                View More
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
