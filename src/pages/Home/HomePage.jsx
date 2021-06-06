import React, { useEffect } from "react";
import ProductSection from "../../parts/ProductSection/ProductSection";

import HeroSection from "../../parts/HeroSection/HeroSection";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../redux";
import Loader from "../../components/Loader";
import SideNav from "../../parts/SideNav/SideNav";

const Home = () => {
  const categoryState = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <>
      <div className="d-flex container">
        <SideNav />
        <HeroSection />
      </div>
      {categoryState.loading ? (
        <Loader />
      ) : (
        <>
          {categoryState.categories.map((category, index) => (
            <ProductSection
              key={index}
              products={category?.products}
              sectionTitle={category.name}
            />
          ))}
        </>
      )}
    </>
  );
};

export default Home;
