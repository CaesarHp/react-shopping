import React from "react";
import { useDispatch } from "react-redux";
import { dataActions } from "../store/data-slice";

import { Grid } from "@mui/material";
import { Typography } from "@material-ui/core";
import { IconButton } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ClearIcon from "@mui/icons-material/Clear";

const useStyles = makeStyles((theme) => ({
  root: {},
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
  center: {
    display: "flex",
    justifyContent: "center",
  },
  title: {
    fontWeight: 400,
    padding: "1rem",
  },
  body: {
    fontWeight: 400,
    padding: "1rem",
  },
  itemNumberBtn: {
    display: "flex",
    alignItems: "center",
    border: "1.5px solid black",
    padding: "0.8rem",
  },
  itemNumber: {
    fontWeight: 400,
    margin: "0 0.8rem",
  },
}));

function CartProductCard({ name, img, price, retail, number, id }) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const addItemHandler = () => {
    dispatch(dataActions.addExsitingItem(id));
  };
  const removeItemHandler = () => {
    dispatch(dataActions.removeItemFromCart(id));
  };
  const clearItemHandler = () => {
    dispatch(dataActions.clearItemFromCart(id));
  };

  return (
    <>
      <div className={classes.root}>
        <Grid container alignItems="center">
          <Grid item xs={1}>
            <img alt={name} src={img} className={classes.img} />
          </Grid>

          <Grid item xs={4}>
            <Typography variant="body1" className={classes.title}>
              {name}
            </Typography>
          </Grid>

          <Grid item xs={2}>
            <div className={classes.center}>
              <Typography variant="body1" className={classes.body}>
                ${retail}
              </Typography>
            </div>
          </Grid>

          <Grid item xs={2}>
            <div className={classes.center}>
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

          <Grid item xs={2}>
            <div className={classes.center}>
              <Typography variant="body1" className={classes.body}>
                ${price.toFixed(2)}
              </Typography>
            </div>
          </Grid>

          <Grid item xs={1}>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <IconButton size="small" onClick={clearItemHandler}>
                <ClearIcon style={{ color: "grey" }} />
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default CartProductCard;
