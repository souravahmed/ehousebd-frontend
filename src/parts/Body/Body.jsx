import React from "react";
import ProductSection from "../ProductSection/ProductSection";

import { useSelector } from "react-redux";
import Loader from "../../components/Loader";

const Body = () => {
  const categoryState = useSelector((state) => state.category);
  return (
    <>
      {categoryState.loading ? (
        <Loader />
      ) : (
        <>
          {categoryState.categories.map((category) => (
            <ProductSection
              products={category?.products}
              sectionTitle={category.name}
            />
          ))}
        </>
      )}
    </>
  );
};

export default Body;
