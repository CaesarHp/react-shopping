import React from "react";
import { useDispatch } from "react-redux";
import { dataActions } from "../store/data-slice";

import { Grid } from "@mui/material";
import { Typography } from "@material-ui/core";
import { IconButton } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "1rem",
  },
  img: {
    maxWidth: "100%",
    height: "100%",
  },
  contentContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: 400,
    marginBottom: "0.5rem",
  },
  body: {
    fontWeight: 400,
  },
  itemNumberBtn: {
    display: "flex",
    alignItems: "center",
  },
  itemNumber: {
    fontWeight: 400,
    margin: "0 0.8rem",
  },
}));

function ProductCardHorizontal({ name, img, price, number, id }) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(dataActions.addExsitingItem(id));
  };
  const removeItemHandler = () => {};

  return (
    <>
      <div className={classes.root}>
        <Grid container columnSpacing={2}>
          <Grid item xs={4}>
            <img alt={name} src={img} className={classes.img} />
          </Grid>
          <Grid item xs={8}>
            <div className={classes.contentContainer}>
              <div>
                <Typography variant="h5" className={classes.title}>
                  {name}
                </Typography>
                <Typography variant="body1" className={classes.body}>
                  ${price.toFixed(2)}
                </Typography>
              </div>
              <div className={classes.itemNumberBtn}>
                <div>
                  <IconButton size="small" onClick={removeItemHandler}>
                    <RemoveIcon style={{ color: "black" }} />
                  </IconButton>
                </div>
                <Typography variant="body1" className={classes.itemNumber}>
                  {number}
                </Typography>
                <div>
                  <IconButton size="small" onClick={addItemHandler}>
                    <AddIcon style={{ color: "black" }} />
                  </IconButton>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default ProductCardHorizontal;
