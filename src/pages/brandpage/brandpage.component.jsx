import React, { useEffect } from "react";
import "./brand.styles.scss";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getBrandProducts, getProductFilters } from "../../redux";
import ProductList from "../../components/product-list/product-list.component";
import Loader from "../../components/loader/loader.component";
import Filter from "../../components/filter/filter.component";

const BrandPage = () => {
  const { brandSlug } = useParams();
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product);

  useEffect(() => {
    Promise.all([
      dispatch(getBrandProducts(brandSlug)),
      dispatch(getProductFilters()),
    ]);
  }, [brandSlug, dispatch]);

  return (
    <div className="brand-container">
      <h1>Brand: {brandSlug}</h1>
      {productState.loading ? (
        <Loader />
      ) : (
        <div className="brand-wrapper">
          <Filter filterObj={productState.productFilters} />
          <ProductList products={productState.brandProducts} />
        </div>
      )}
    </div>
  );
};

export default BrandPage;
