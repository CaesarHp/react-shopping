import React from "react";

import AllPageTopBanner from "../ui/AllPageTopBanner";
import ShopMain from "../components/ShopMain";

function Shop() {
  return (
    <>
      <AllPageTopBanner
        title={"Shop"}
        body={
          "Our formulations have proven efficacy, contain organic ingredients only and are 100% cruelty free."
        }
      />
      <ShopMain />
    </>
  );
}

export default Shop;
