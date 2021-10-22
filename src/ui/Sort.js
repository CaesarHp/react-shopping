import React, { useState } from "react";

import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

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

  const [sort, setSort] = useState("Featured");

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const sortChangeHandler = (e) => {
    setSort(e.target.value);
  };

  return (
    <>
      <div>
        <CssTextField
          id="sort"
          select
          label="Sort By"
          variant="outlined"
          value={sort}
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
