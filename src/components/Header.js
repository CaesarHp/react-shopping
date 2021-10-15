import React, { useEffect, useState, useMemo } from "react";

import { Link, useLocation, useHistory } from "react-router-dom";

import { makeStyles } from "@mui/styles";
import { styled } from "@mui/material/styles";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import { Tabs } from "@mui/material";
import { Tab } from "@mui/material";
import { Badge } from "@mui/material";
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
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";

const drawerWidth = 240;

const useStyle = makeStyles((theme) => {
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
      fontWeight: 600,
      textDecoration: "none",
      color: theme.palette.grey[900],
    },
    tabs: {
      "& .MuiTabs-indicator": {
        backgroundColor: "black",
        height: "1px",
      },
    },
    headerBtnContainer: {
      display: "flex",
      alignItems: "center",
    },
    headerBtn: {
      margin: "0 0.5rem",
    },
    badge: {
      "& .MuiBadge-badge": {
        backgroundColor: theme.palette.grey[300],
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
    drawerBackBtn: {
      //marginLeft: theme.spacing(1),
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

  const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
    ({ theme }) => ({
      textTransform: "none",
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
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
      <div className={classes.headerBtn}>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </div>
      <div className={classes.headerBtn}>
        <IconButton>
          <Badge badgeContent={1} className={classes.badge}>
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </div>
      <div className={classes.headerBtn}>
        <IconButton>
          <PersonIcon />
        </IconButton>
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
          <IconButton
            onClick={toggleDrawerHandler(false)}
            className={classes.drawerBackBtn}
          >
            <ChevronRightIcon />
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
        </ElevationScroll>
        <div className={classes.offset} />
      </div>
    </>
  );
}

export default Header;
