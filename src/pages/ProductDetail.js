import React from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

import ProductDetailMain from "../components/ProductDetailMain";

function ProductDetail() {
  const params = useParams();

  console.log(params);

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
        category={productInfo.category}
        describe={productInfo.describe}
        brand={productInfo.brand}
        id={productInfo.id}
      />
    </>
  );
}

export default ProductDetail;
