import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({}));

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
  {
    value: "Product Name A to Z",
  },
  {
    value: "Product Name Z to A",
  },
];

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#616161",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#616161",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#bdbdbd",
      borderRadius: 0,
    },
    "&:hover fieldset": {
      borderColor: "#757575",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid #616161",
    },
  },
});

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
          value={sort}
          onChange={sortChangeHandler}
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
