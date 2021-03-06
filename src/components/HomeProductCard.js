import React from "react";
import { useSelector } from "react-redux";

import Slider from "react-slick";

import ProductCard from "../ui/ProductCard";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

// import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "6rem 0",
  },
  titleContainer: {
    textAlign: "center",
    width: "50%",
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
  },
  title: {
    color: "black",
    fontWeight: 400,
    marginBottom: "3rem",
  },
  cardContainer: {
    width: "80%",
  },
  arrowNext: {
    color: "black",
    position: "absolute",
    cursor: "pointer",
    top: "40%",
    right: "-5%",
    zIndex: 1000,

    [theme.breakpoints.down("sm")]: {
      right: "-10%",
    },
  },
  arrowPrev: {
    color: "black",
    position: "absolute",
    cursor: "pointer",
    top: "40%",
    left: "-5%",
    zIndex: 1000,

    [theme.breakpoints.down("sm")]: {
      left: "-10%",
    },
  },
}));

export default function HomeProductCard() {
  const classes = useStyles();

  const cardInfo = useSelector((state) => state.data.newArrivalsInfo);

  const NextArrow = ({ onClick }) => {
    return (
      <div className={classes.arrowNext} onClick={onClick}>
        <ArrowForwardIosIcon />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className={classes.arrowPrev} onClick={onClick}>
        <ArrowBackIosNewIcon />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className={classes.root}>
        <div className={classes.titleContainer}>
          <Typography variant="h3" component="h2" className={classes.title}>
            New Arrivals
          </Typography>
        </div>
        <div className={classes.cardContainer}>
          <Slider {...settings}>
            {cardInfo.map((item, index) => (
              <ProductCard
                key={index}
                name={item.name}
                price={item.price}
                img={item.img}
                id={item.id}
              />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}
