import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";

import PaymentMain from "../components/PaymentMain";

function Payment() {
  const cartInfo = useSelector((state) => state.data.cartItem);

  return (
    <>{cartInfo.length !== 0 ? <PaymentMain /> : <Redirect to="/cart" />}</>
  );
}

export default Payment;
