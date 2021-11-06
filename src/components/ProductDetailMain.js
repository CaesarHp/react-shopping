import React from "react";
import { useDispatch } from "react-redux";
import { dataActions } from "../store/data-slice";
import { useHistory } from "react-router";

import { Grid } from "@mui/material";
import { Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

import ProductDetailContainer from "./ProductDetailContainer";
import HomeProductCard from "./HomeProductCard";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "10rem 6rem",
  },
  path: {
    cursor: "pointer",
  },
  flexHorizontal: {
    display: "flex",
    marginBottom: "3rem",
  },
}));

function ProductDetailMain({
  name,
  price,
  img,
  category,
  describe,
  brand,
  id,
}) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const history = useHistory();

  const allCategoryHandler = () => {
    dispatch(dataActions.categoryFilter("All Categories"));
    dispatch(dataActions.selectCategory("All Categories"));

    history.push("/shop");
  };

  const selectCategoryHandler = () => {
    dispatch(dataActions.categoryFilter(category));
    dispatch(dataActions.selectCategory(category));

    history.push("/shop");
  };

  return (
    <>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <div className={classes.flexHorizontal}>
              <Typography
                variant="body1"
                onClick={allCategoryHandler}
                className={classes.path}
              >
                Shop
              </Typography>
              <KeyboardArrowRightIcon />
              <Typography
                variant="body1"
                onClick={selectCategoryHandler}
                className={classes.path}
              >
                {category}
              </Typography>
              <KeyboardArrowRightIcon />
              <Typography variant="body1">{name}</Typography>
            </div>
          </Grid>
          <Grid item xs={12}>
            <ProductDetailContainer
              name={name}
              price={price}
              img={img}
              describe={describe}
              brand={brand}
              category={category}
              id={id}
            />
          </Grid>
          <Grid item xs={12}>
            <HomeProductCard />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default ProductDetailMain;
