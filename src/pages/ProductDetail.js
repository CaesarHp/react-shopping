import React from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

import ProductDetailMain from "../components/ProductDetailMain";

function ProductDetail() {
  const params = useParams();

  const allProducts = useSelector((state) => state.data.allProductsInfo);

  const productInfo = allProducts.find((item) => item.id === params.productId);

  const history = useHistory();

  if (!productInfo) {
    history.push("/notfound");
    return null;
  }

  return (
    <>
      <ProductDetailMain
        name={productInfo.name}
        price={productInfo.price}
        img={productInfo.img}
      />
    </>
  );
}

export default ProductDetail;
