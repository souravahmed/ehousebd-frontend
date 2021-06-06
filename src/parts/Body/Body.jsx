import React, { useEffect } from "react";
import ProductSection from "../ProductSection/ProductSection";

import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux";
import Loader from "../../components/Loader";

const Body = () => {
  const productState = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      {productState.loading ? (
        <Loader />
      ) : (
        <ProductSection
          products={productState?.products}
          sectionTitle="Latest Products"
        />
      )}
    </>
  );
};

export default Body;
