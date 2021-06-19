import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/product/productAction";
import ProductCard from "../product-card/product-card.component";
import "./product-list.styles.scss";

const ProductList = ({ category_slug }) => {
  const productState = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts({ category_slug: category_slug }));
  }, [dispatch, category_slug]);

  return (
    <div className="product-container">
      {productState[category_slug]?.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
