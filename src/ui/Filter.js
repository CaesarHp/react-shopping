import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { dataActions } from "../store/data-slice";

import { Button } from "@material-ui/core";
import { Drawer } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { List } from "@material-ui/core";
import { ListSubheader } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { ListItemIcon } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import { Divider } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

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

  const allBrands = useSelector((state) => state.data.brands);
  const allCategories = useSelector((state) => state.data.categories);

  const [drawerState, setDrawerState] = useState(false);

  const dispatch = useDispatch();

  const toggleDrawerHandler = (open) => (event) => {
    setDrawerState(open);
  };

  const selectCategoryHandler = (e) => {
    dispatch(dataActions.categoryFilter(e.target.innerText));

    setDrawerState(false);
  };

  const selectBrandHandler = (e) => {
    dispatch(dataActions.brandFilter(e.target.innerText));

    setDrawerState(false);
  };

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
        <ListItemText primary="View All" style={{ padding: "0.5rem 0" }} />
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
      <ListItem
        button
        dense
        onClick={selectCategoryHandler}
        className={classes.listTypo}
      >
        <ListItemText primary="View All" />
      </ListItem>

      {allBrands.map((item, index) => (
        <ListItem key={index} button dense onClick={selectBrandHandler}>
          {/* <ListItemIcon>
            <Checkbox
              color="default"
              edge="start"
              checked={brandChecked.indexOf(index) !== -1}
              tabIndex={-1}
              disableRipple
            />
          </ListItemIcon> */}
          <ListItemText primary={item.brandName} className={classes.listTypo} />
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
        {/* <Divider className={classes.divider} light />
        <div>
          <Button
            variant="contained"
            disableElevation
            onClick={toggleDrawerHandler(false)}
            className={classes.filterBtn}
          >
            Filter
          </Button>
        </div> */}
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
