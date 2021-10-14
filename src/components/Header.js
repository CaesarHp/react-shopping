import React, { useEffect, useState, useMemo } from "react";

import { Link, useLocation, useHistory } from "react-router-dom";

import { makeStyles } from "@mui/styles";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import { Tabs } from "@mui/material";
import { Tab } from "@mui/material";
import { Drawer } from "@mui/material";
import { IconButton } from "@mui/material";
import { List } from "@mui/material";
import { ListItem } from "@mui/material";
import { ListItemText } from "@mui/material";
import { Divider } from "@mui/material";
import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useScrollTrigger } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const drawerWidth = 240;

const useStyle = makeStyles((theme) => {
  return {
    appbar: {
      padding: "1rem 0",
      backgroundColor: "white",
    },
    toolbar: {
      width: "90%",
      margin: "0 auto",
    },
    offset: {
      ...theme.mixins.toolbar,
      margin: "1rem 0",
    },
    logo: {
      color: theme.palette.grey[800],
      fontWeight: 600,
      textDecoration: "none",
    },
    tabs: {
      marginLeft: "auto",
    },
    tab: {
      minWidth: 120,
      color: theme.palette.grey[800],
    },
    menuBtn: {
      marginLeft: "auto",
    },
    menuIcon: {
      color: theme.palette.grey[800],
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

      ...theme.mixins.toolbar,
      justifyContent: "flex-start",
    },
    divider: {
      backgroundColor: theme.palette.divider,
    },
    drawerBackBtn: {
      marginLeft: theme.spacing(1),
    },
  };
});

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

function Header(props) {
  const classes = useStyle();
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

  const tabs = (
    <Tabs value={activeIndex} indicatorColor="primary" className={classes.tabs}>
      {tabsInfo.map((item, index) => (
        <Tab
          key={index}
          label={item.name}
          component={Link}
          to={item.link}
          className={classes.tab}
        />
      ))}
    </Tabs>
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
      <IconButton
        onClick={toggleDrawerHandler(true)}
        className={classes.menuBtn}
      >
        <MenuIcon className={classes.menuIcon} />
      </IconButton>
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
          <IconButton
            onClick={toggleDrawerHandler(false)}
            className={classes.drawerBackBtn}
          >
            <ArrowBackIosIcon />
          </IconButton>
        </div>
        <Divider className={classes.divider} light />
        {drawList}
      </Drawer>
    </>
  );

  return (
    <>
      <div>
        <ElevationScroll>
          <AppBar elevation={0} position="fixed" className={classes.appbar}>
            <Toolbar className={classes.toolbar}>
              <Typography
                variant="h5"
                component={Link}
                to="/home"
                className={classes.logo}
              >
                Beauty
              </Typography>
              {matches ? drawer : tabs}
            </Toolbar>
          </AppBar>
        </ElevationScroll>
        <div className={classes.offset} />
      </div>
    </>
  );
}

export default Header;
