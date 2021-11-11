import React from "react";

import AllPageTopBanner from "../ui/AllPageTopBanner";
import AboutUsMain from "../components/AboutUsMain";

function AboutUs() {
  return (
    <>
      <AllPageTopBanner
        title={"About Us"}
        body={
          "Our formulations have proven efficacy, contain organic ingredients only and are 100% cruelty free."
        }
      />
      <AboutUsMain />
    </>
  );
}

export default AboutUs;
