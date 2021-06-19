import React from "react";
import "../product-section/product-section.styles.scss";
import ProductList from "../product-list/product-list.component";

const ProductSection = ({ category }) => {
  return (
    <div className="product-section">
      <div className="product-section__title">
        <h3>{category.name}</h3>
      </div>
      <ProductList category_slug={category.slug} />
    </div>
  );
};

export default ProductSection;
