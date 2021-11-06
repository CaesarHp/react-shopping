import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { dataActions } from "../store/data-slice";
import { useHistory } from "react-router";

import { Button } from "@material-ui/core";
import { Drawer } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { List } from "@material-ui/core";
import { ListSubheader } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemSecondaryAction } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { Divider } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CheckIcon from "@mui/icons-material/Check";

const drawerWidth = 340;

const useStyles = makeStyles((theme) => ({
  root: {},
  btn: {
    borderRadius: 0,
    fontSize: "1rem",
    padding: "0.8rem 2rem",
    fontWeight: 400,
    textTransform: "none",
    color: "black",
    marginLeft: "2rem",
    borderColor: "black",

    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
      marginTop: "2rem",
    },
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  listTypo: {
    fontWeight: 400,
  },
  divider: {
    backgroundColor: theme.palette.divider,
    margin: "1rem",
  },
  filterBtn: {
    borderRadius: 0,
    padding: "0.8rem 2rem",
    backgroundColor: "black",
    fontWeight: 400,
    textTransform: "none",
    color: "white",
    margin: "1rem 0 2rem 1rem",

    "&:hover": {
      backgroundColor: theme.palette.grey[900],
    },
  },
}));

function Filter() {
  const classes = useStyles();

  const history = useHistory();

  const allBrands = useSelector((state) => state.data.brands);
  const allCategories = useSelector((state) => state.data.categories);

  const [drawerState, setDrawerState] = useState(false);

  const dispatch = useDispatch();

  const toggleDrawerHandler = (open) => (event) => {
    setDrawerState(open);
  };

  const selectCategoryHandler = (e) => {
    dispatch(dataActions.categoryFilter(e.target.innerText));
    dispatch(dataActions.selectCategory(e.target.innerText));

    setDrawerState(false);
  };

  const selectBrandHandler = (e) => {
    dispatch(dataActions.brandFilter(e.target.innerText));
    dispatch(dataActions.selectBrand(e.target.innerText));

    setDrawerState(false);
  };

  const selectedCategory = useSelector((state) => state.data.selectedCategory);
  const selectedBrand = useSelector((state) => state.data.selectedBrand);

  const categoryList = (
    <List
      component="nav"
      subheader={
        <ListSubheader
          component="div"
          disableSticky={true}
          id="nested-list-subheader"
        >
          Filter by category
        </ListSubheader>
      }
    >
      <ListItem
        button
        dense
        onClick={selectCategoryHandler}
        className={classes.listTypo}
      >
        <ListItemText
          primary="All Categories"
          style={{ padding: "0.5rem 0" }}
        />
      </ListItem>
      {allCategories.map((item, index) => (
        <ListItem
          key={index}
          button
          dense
          onClick={selectCategoryHandler}
          className={classes.listTypo}
        >
          <ListItemText primary={item} style={{ padding: "0.5rem 0" }} />
          <ListItemSecondaryAction>
            {selectedCategory === item ? <CheckIcon /> : null}
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );

  const brandList = (
    <List
      component="nav"
      subheader={
        <ListSubheader
          component="div"
          disableSticky={true}
          id="nested-list-subheader"
        >
          Filter by brand
        </ListSubheader>
      }
    >
      <ListItem button dense className={classes.listTypo}>
        <ListItemText
          primary="All Brands"
          onClick={selectBrandHandler}
          style={{ padding: "0.5rem 0" }}
        />
      </ListItem>

      {allBrands.map((item, index) => (
        <ListItem key={index} button dense onClick={selectBrandHandler}>
          <ListItemText
            primary={item.brandName}
            style={{ padding: "0.5rem 0" }}
          />
          <ListItemSecondaryAction>
            {selectedBrand === item.brandName ? <CheckIcon /> : null}
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );

  const drawer = (
    <>
      <Drawer
        anchor="left"
        open={drawerState}
        onClose={toggleDrawerHandler(false)}
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={toggleDrawerHandler(false)}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider className={classes.divider} light />
        {categoryList}
        <Divider className={classes.divider} light />
        {brandList}
      </Drawer>
    </>
  );

  return (
    <>
      <Button
        variant="outlined"
        disableElevation
        onClick={toggleDrawerHandler(true)}
        className={classes.btn}
      >
        Filter
      </Button>
      {drawer}
    </>
  );
}

export default Filter;
