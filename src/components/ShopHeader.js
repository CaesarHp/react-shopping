import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { dataActions } from "../store/data-slice";

import { Grid } from "@mui/material";
import { Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import Sort from "../ui/Sort";
import Filter from "../ui/Filter";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "0 2rem",
  },
  path: {
    textDecoration: "none",
    color: "black",
    cursor: "pointer",
  },
  headerContainer: {
    display: "flex",

    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
      marginBottom: "2rem",
    },
  },
  btnContainer: {
    display: "flex",
    justifyContent: "flex-end",

    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  flexHorizontal: {
    display: "flex",
    alignItems: "center",
  },
}));

function ShopHeader() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const selectedCategory = useSelector((state) => state.data.selectedCategory);
  const selectedBrand = useSelector((state) => state.data.selectedBrand);

  const backToCategoryHandler = () => {
    dispatch(dataActions.selectBrand(""));
    dispatch(dataActions.categoryFilter(selectedCategory));
  };
  const backToShopHandler = () => {
    dispatch(dataActions.categoryFilter("All Categories"));
  };

  return (
    <>
      <div className={classes.root}>
        <Grid container alignItems="center">
          <Grid item xs={12} lg={6}>
            <div className={classes.headerContainer}>
              <div className={classes.flexHorizontal}>
                <Typography
                  variant="body1"
                  onClick={backToShopHandler}
                  className={classes.path}
                >
                  Shop
                </Typography>
                <KeyboardArrowRightIcon />
                <Typography
                  variant="body1"
                  onClick={selectedBrand !== "" ? backToCategoryHandler : null}
                  className={classes.path}
                >
                  {selectedCategory === ""
                    ? "All Categories"
                    : selectedCategory}
                </Typography>
                {selectedBrand === "" ? null : <KeyboardArrowRightIcon />}
                <Typography variant="body1">
                  {selectedBrand === "" ? null : selectedBrand}
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} lg={6}>
            <div className={classes.btnContainer}>
              <Sort />
              <Filter />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default ShopHeader;
