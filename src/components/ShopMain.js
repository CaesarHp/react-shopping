import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { dataActions } from "../store/data-slice";

import { Grid } from "@mui/material";
import { Pagination } from "@material-ui/lab";

import { makeStyles } from "@material-ui/core/styles";

import ShopHeader from "./ShopHeader";
import ShopProductCard from "./ShopProductCard";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "6rem 2rem",

    [theme.breakpoints.down("md")]: {
      padding: "4rem 2rem",
    },

    [theme.breakpoints.down("sm")]: {
      padding: "2rem",
    },
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
  },
}));

function ShopMain() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const pageNumber = useSelector((state) => state.data.currentPageNumber);
  const pages = useSelector((state) => state.data.pages);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const pageChangeHandler = (event, value) => {
    dispatch(dataActions.changePage(value));

    scrollToTop();
  };

  return (
    <>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <ShopHeader />
          </Grid>
          <Grid item xs={12}>
            <ShopProductCard />
          </Grid>
          <Grid item xs={12}>
            <div className={classes.pagination}>
              <Pagination
                count={pages}
                page={pageNumber}
                onChange={pageChangeHandler}
              />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default ShopMain;
