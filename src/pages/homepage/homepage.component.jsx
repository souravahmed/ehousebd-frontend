import React from "react";
import "./homepage.styles.scss";
import Banner from "../../components/banner/banner.component";
import ProductSectionList from "../../components/product-section-list/product-section-list.component";

const Homepage = () => {
  return (
    <main>
      <Banner />
      <ProductSectionList />
    </main>
  );
};

export default Homepage;
