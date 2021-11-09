import React from "react";

import AllPageTopBanner from "../ui/AllPageTopBanner";
import AboutUsMain from "../components/AboutUsMain";

function AboutUs() {
  return (
    <>
      <AllPageTopBanner
        title={"About Us"}
        body={"Our formulations have proven efficacy"}
      />
      <AboutUsMain />
    </>
  );
}

export default AboutUs;
