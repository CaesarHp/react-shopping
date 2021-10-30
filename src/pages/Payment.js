import React from "react";

import AllPageTopBanner from "../ui/AllPageTopBanner";
import PaymentMain from "../components/PaymentMain";

function Payment() {
  return (
    <>
      <AllPageTopBanner
        title={"Organic Beauty"}
        body={"Our formulations have proven efficacy"}
      />
      <PaymentMain />
    </>
  );
}

export default Payment;
