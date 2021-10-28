import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

import { Button } from "@material-ui/core";
import { Drawer } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { Badge } from "@material-ui/core";
import { Typography } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import ProductCardHorizontal from "./ProductCardHorizontal";

const drawerWidth = 360;

const useStyles = makeStyles((theme) => ({
  root: {},
  badge: {
    "& .MuiBadge-badge": {
      backgroundColor: theme.palette.grey[300],
      color: "black",
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
    padding: theme.spacing(0, 2),
    ...theme.mixins.toolbar,
    justifyContent: "space-between",
  },
  divider: {
    backgroundColor: theme.palette.divider,
    margin: "1rem",
  },
  title: {
    fontWeight: 400,
    marginRight: "2rem",
  },
  body: {
    fontWeight: 300,
  },
  subtotal: {
    fontWeight: 400,
    margin: "1rem",
  },
  noItem: {
    color: theme.palette.grey[600],
    fontWeight: 300,
    margin: "1rem",
  },
  subtotalContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  btnContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  btn: {
    borderRadius: 0,
    padding: "0.8rem 2rem",
    backgroundColor: "black",
    fontWeight: 400,
    textTransform: "none",
    color: "white",
    margin: "1rem",

    "&:hover": {
      backgroundColor: theme.palette.grey[900],
    },
  },
}));

function CartDrawer() {
  const classes = useStyles();

  const cartItem = useSelector((state) => state.data.cart);

  const [drawerState, setDrawerState] = useState(false);

  const toggleDrawerHandler = (open) => (event) => {
    setDrawerState(open);
  };

  const drawer = (
    <>
      <Drawer
        anchor="right"
        open={drawerState}
        onClose={toggleDrawerHandler(false)}
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Typography variant="h5" className={classes.title}>
            Cart
          </Typography>
          <IconButton onClick={toggleDrawerHandler(false)}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider className={classes.divider} light />

        {cartItem.length === 0 ? (
          <Typography variant="body1" className={classes.noItem}>
            No item in cart
          </Typography>
        ) : (
          <ProductCardHorizontal
            name={cartItem.name}
            price={cartItem.price}
            id={cartItem.id}
            number={cartItem.number}
          />
        )}

        <Divider className={classes.divider} light />
        <div className={classes.subtotalContainer}>
          <Typography variant="h6" className={classes.subtotal}>
            Subtotal:
          </Typography>
          <Typography variant="h6" className={classes.subtotal}>
            $0
          </Typography>
        </div>
        <div className={classes.btnContainer}>
          <Button variant="contained" disableElevation className={classes.btn}>
            View Cart
          </Button>
          <Button variant="contained" disableElevation className={classes.btn}>
            Check Out
          </Button>
        </div>
      </Drawer>
    </>
  );

  return (
    <>
      <IconButton onClick={toggleDrawerHandler(true)}>
        <Badge badgeContent={1} className={classes.badge}>
          <ShoppingCartIcon style={{ color: "black" }} />
        </Badge>
      </IconButton>
      {drawer}
    </>
  );
}

export default CartDrawer;
