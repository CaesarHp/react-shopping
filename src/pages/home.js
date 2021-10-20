import React from "react";

import HomeBanner from "../components/HomeBanner";
import HomeProductCard from "../components/HomeProductCard";
import HomeService from "../components/HomeService";
import HomeCategory from "../components/HomeCategory";

function Home() {
  return (
    <>
      <HomeBanner />
      <HomeProductCard />
      <HomeService />
      <HomeCategory />
    </>
  );
}

export default Home;
