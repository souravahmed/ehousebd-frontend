import React from "react";
import "./product-section-list.styles.scss";
import { useSelector } from "react-redux";
import ProductSection from "../product-section/product-section.component";

const ProductSectionList = () => {
  const categoryState = useSelector((state) => state.category);
  return (
    <section className="product-section-list">
      {categoryState.categories.map((category) => (
        <ProductSection key={category.id} category={category} />
      ))}
    </section>
  );
};

export default ProductSectionList;
