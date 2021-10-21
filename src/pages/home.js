import React from "react";

import HomeBanner from "../components/HomeBanner";
import HomeProductCard from "../components/HomeProductCard";
import HomeService from "../components/HomeService";
import HomeCategory from "../components/HomeCategory";
import HomeBottomBanner from "../components/HomeBottomBanner";

function Home() {
  return (
    <>
      <HomeBanner />
      <HomeProductCard />
      <HomeService />
      <HomeCategory />
      <HomeBottomBanner />
    </>
  );
}

export default Home;
