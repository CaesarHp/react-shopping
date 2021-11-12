import React from "react";
import { useDispatch } from "react-redux";
import { dataActions } from "../store/data-slice";
import { useSelector } from "react-redux";

import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "15rem",
  },
}));

const SORT_BY = [
  {
    value: "Featured",
  },
  {
    value: "Most Popular",
  },
  {
    value: "Price Low to High",
  },
  {
    value: "Price High to Low",
  },
];

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#616161",
      backgroundColor: "none",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#616161",
    },
    "& .MuiSelect-select:focus": {
      backgroundColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black",
        borderRadius: 0,
      },
      "&:hover fieldset": {
        borderColor: "#757575",
      },
      "&.Mui-focused fieldset": {
        border: "1px solid #616161",
      },
    },
  },
})(TextField);

function Sort() {
  const classes = useStyles();

  const dispatch = useDispatch();

  const sortChangeHandler = (e) => {
    dispatch(dataActions.sort(e.target.value));
  };

  const selectedSortValue = useSelector((state) => state.data.sortValue);

  return (
    <>
      <div>
        <CssTextField
          id="sort"
          select
          label="Sort By"
          variant="outlined"
          value={selectedSortValue}
          onChange={sortChangeHandler}
          className={classes.root}
        >
          {SORT_BY.map((option, index) => (
            <MenuItem key={index} value={option.value}>
              {option.value}
            </MenuItem>
          ))}
        </CssTextField>
      </div>
    </>
  );
}

export default Sort;
