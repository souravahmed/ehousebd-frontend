import React, { useEffect } from "react";
import ProductSection from "../ProductSection/ProductSection";
import SideNav from "../SideNav/SideNav";
import { useSelector, useDispatch } from "react-redux";
import { getLatestProducts } from "../../redux";
import Loader from "../../components/Loader";

const Body = () => {
  const productState = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLatestProducts());
  }, [dispatch]);
  return (
    <div>
      <SideNav />
      {productState.loading ? (
        <Loader />
      ) : (
        <ProductSection
          products={productState?.latestProducts}
          sectionTitle="Latest Products"
        />
      )}
    </div>
  );
};

export default Body;
