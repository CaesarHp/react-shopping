import React, { useEffect, useState, useMemo } from "react";

import { Link, useLocation, useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import { styled } from "@mui/material/styles";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Tabs } from "@material-ui/core";
import { Tab } from "@material-ui/core";
import { Badge } from "@material-ui/core";
import { Drawer } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import { List } from "@material-ui/core";
import { ListItem } from "@material-ui/core";
import { ListItemIcon } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { useTheme } from "@material-ui/core";
import { useMediaQuery } from "@material-ui/core";
import { useScrollTrigger } from "@material-ui/core";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";

import CartDrawer from "../ui/CartDrawer";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    appbar: {
      padding: "1rem 0",
    },
    toolbar: {
      width: "90%",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-between",
    },
    offset: {
      ...theme.mixins.toolbar,
      margin: "1rem 0",
    },
    logo: {
      fontWeight: 400,
      textDecoration: "none",
      color: "black",
      letterSpacing: "2px",
    },
    tabs: {
      "& .MuiTabs-indicator": {
        backgroundColor: "black",
        height: "2px",
      },
    },
    headerBtnContainer: {
      display: "flex",
      alignItems: "center",
    },
    headerBtn: {
      margin: "0 0.5rem",

      [theme.breakpoints.down("sm")]: {
        margin: 0,
      },
    },
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
      padding: theme.spacing(0, 1),
      ...theme.mixins.toolbar,
      justifyContent: "flex-start",
    },
    divider: {
      backgroundColor: theme.palette.divider,
    },
  };
});

const ScrollHandler = (props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
    target: props.window ? window() : undefined,
  });

  return React.cloneElement(props.children, {
    style: {
      backgroundColor: trigger ? "white" : "transparent",
      transition: trigger ? "0.3s" : "0.5s",
      boxShadow: trigger ? "0px 1px 5px rgba(0, 0, 0, .2)" : "none",
    },
  });
};

function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const location = useLocation();
  const history = useHistory();

  const [activeIndex, setActiveIndex] = useState(0);
  const [drawerState, setDrawerState] = useState(false);

  useEffect(() => {
    if (location.pathname === "/home") {
      setActiveIndex(0);
    } else if (location.pathname.includes("/shop")) {
      setActiveIndex(1);
    } else if (location.pathname.includes("/our-story")) {
      setActiveIndex(2);
    } else if (location.pathname === "/contact") {
      setActiveIndex(3);
    } else {
      setActiveIndex(0);
    }
  }, [location]);

  const toggleDrawerHandler = (open) => (event) => {
    setDrawerState(open);
  };

  const tabsInfo = useMemo(
    () => [
      {
        name: "Home",
        link: "/home",
      },
      {
        name: "Shop",
        link: "/shop",
      },
      {
        name: "Our Story",
        link: "/our-story",
      },
      {
        name: "Contact",
        link: "/contact",
      },
    ],
    []
  );

  const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: "none",
      fontWeight: 500,
      fontSize: theme.typography.pxToRem(15),
      //marginRight: theme.spacing(1),
      color: "black",
      "&.Mui-selected": {
        color: "black",
      },
      "&.Mui-focusVisible": {
        backgroundColor: "black",
      },
    })
  );

  const tabs = (
    <div>
      <Tabs value={activeIndex} className={classes.tabs}>
        {tabsInfo.map((item, index) => (
          <StyledTab
            key={index}
            label={item.name}
            component={Link}
            to={item.link}
          />
        ))}
      </Tabs>
    </div>
  );

  const btn = (
    <div className={classes.headerBtnContainer}>
      {matches ? null : (
        <div className={classes.headerBtn}>
          <IconButton>
            <SearchIcon style={{ color: "black" }} />
          </IconButton>
        </div>
      )}

      {matches ? null : (
        <div className={classes.headerBtn}>
          <IconButton>
            <PersonIcon style={{ color: "black" }} />
          </IconButton>
        </div>
      )}

      <div className={classes.headerBtn}>
        <CartDrawer />
      </div>

      {matches ? (
        <IconButton
          onClick={toggleDrawerHandler(true)}
          className={classes.menuBtn}
        >
          <MenuIcon className={classes.menuIcon} />
        </IconButton>
      ) : null}
    </div>
  );

  const drawList = (
    <List>
      {tabsInfo.map((item, index) => (
        <ListItem
          key={index}
          button
          onClick={() => {
            history.push(item.link);
            setDrawerState(false);
          }}
        >
          <ListItemText primary={item.name} className={classes.drawerTypo} />
        </ListItem>
      ))}
    </List>
  );

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
          <IconButton onClick={toggleDrawerHandler(false)}>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider className={classes.divider} light />
        {drawList}
        <Divider className={classes.divider} light />
        <List>
          <ListItem button>
            <ListItemIcon>
              <SearchIcon style={{ color: "black" }} />
            </ListItemIcon>
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PersonIcon style={{ color: "black" }} />
            </ListItemIcon>
          </ListItem>
        </List>
      </Drawer>
    </>
  );

  return (
    <>
      <div>
        <ScrollHandler {...props}>
          <AppBar
            elevation={0}
            color="transparent"
            position="fixed"
            className={classes.appbar}
          >
            <Toolbar className={classes.toolbar}>
              <Typography
                variant="h5"
                component={Link}
                to="/home"
                className={classes.logo}
              >
                La Beauté
              </Typography>
              {matches ? drawer : tabs}
              {btn}
            </Toolbar>
          </AppBar>
        </ScrollHandler>
      </div>
    </>
  );
}

export default Header;
