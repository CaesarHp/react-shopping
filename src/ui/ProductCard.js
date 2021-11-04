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
    //border: "1px solid #eee",
  },
  media: {
    height: 0,
    padding: "18rem 8rem 0 8rem",
  },
  contentContainer: {
    textAlign: "center",
    maxWidth: "16rem",
  },
  title: {
    fontWeight: 500,
    padding: "1rem 0",
  },
  body: {
    fontWeight: 300,
    paddingBottom: "1rem",
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

export default function ProductCard({ name, price, img, id }) {
  const classes = useStyles();

  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <Card elevation={0} className={classes.root}>
            <CardActionArea component={Link} to={`/shop/${id}`}>
              <CardMedia className={classes.media} image={img} title={name} />

              <CardContent className={classes.contentContainer}>
                <Typography
                  variant="body1"
                  component="h2"
                  className={classes.title}
                >
                  {name}
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  className={classes.body}
                >
                  ${price}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
