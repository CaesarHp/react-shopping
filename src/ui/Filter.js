import React from "react";
import { useState } from "react";

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
    fontWeight: 500,
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

const FILTER_INFO_CATEGORY = [
  { name: "Body Wash", number: 2 },
  { name: "Hand Care", number: 2 },
  { name: "Moisturizers", number: 2 },
  { name: "Skin Care", number: 2 },
];

const FILTER_INFO_BRAND = [
  { name: "Aesop", number: 2 },
  { name: "Biotherm", number: 2 },
  { name: "CLINIQUE", number: 2 },
  { name: "Dr. Jart+", number: 2 },
  { name: "Estée Lauder", number: 2 },
  { name: "Guerlain", number: 2 },
  { name: "innisfree", number: 2 },
  { name: "L'Occitane", number: 2 },
];

function Filter() {
  const classes = useStyles();

  const [drawerState, setDrawerState] = useState(false);

  const [categoryChecked, setCategoryChecked] = React.useState([]);
  const [brandChecked, setBrandChecked] = React.useState([]);

  const toggleDrawerHandler = (open) => (event) => {
    setDrawerState(open);
  };

  const toggleCategoryHandler = (value) => () => {
    const currentIndex = categoryChecked.indexOf(value);
    const newChecked = [...categoryChecked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setCategoryChecked(newChecked);
  };

  const toggleBrandHandler = (value) => () => {
    const currentIndex = brandChecked.indexOf(value);
    const newChecked = [...brandChecked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setBrandChecked(newChecked);
  };

  const categoryList = (
    <List
      component="nav"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Filter by category
        </ListSubheader>
      }
    >
      {FILTER_INFO_CATEGORY.map((item, index) => (
        <ListItem
          key={index}
          button
          dense
          onClick={toggleCategoryHandler(index)}
          className={classes.listTypo}
        >
          <ListItemIcon>
            <Checkbox
              edge="start"
              color="default"
              checked={categoryChecked.indexOf(index) !== -1}
              tabIndex={-1}
              disableRipple
            />
          </ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItem>
      ))}
    </List>
  );

  const brandList = (
    <List
      component="nav"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Filter by brand
        </ListSubheader>
      }
    >
      {FILTER_INFO_BRAND.map((item, index) => (
        <ListItem key={index} button dense onClick={toggleBrandHandler(index)}>
          <ListItemIcon>
            <Checkbox
              color="default"
              edge="start"
              checked={brandChecked.indexOf(index) !== -1}
              tabIndex={-1}
              disableRipple
            />
          </ListItemIcon>
          <ListItemText primary={item.name} className={classes.listTypo} />
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
        <Divider className={classes.divider} light />
        <div>
          <Button
            variant="contained"
            disableElevation
            onClick={toggleDrawerHandler(false)}
            className={classes.filterBtn}
          >
            Filter
          </Button>
        </div>
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
