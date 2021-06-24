import React, { useEffect } from "react";
import "./homepage.styles.scss";
import Banner from "../../components/banner/banner.component";
import { useSelector, useDispatch } from "react-redux";
import {
  getFeaturedCategories,
  getBrands,
  getFeaturedProducts,
} from "../../redux";
import Loader from "../../components/loader/loader.component";
import Collection from "../../components/collection/collection.component";
import ProductList from "../../components/product-list/product-list.component";

const Homepage = () => {
  const categoryState = useSelector((state) => state.category);
  const productState = useSelector((state) => state.product);
  const brandState = useSelector((state) => state.brand);
  const dispatch = useDispatch();

  useEffect(() => {
    Promise.all([
      dispatch(getFeaturedCategories()),
      dispatch(getBrands()),
      dispatch(getFeaturedProducts()),
    ]);
  }, [dispatch]);

  return (
    <main>
      <Banner />
      {categoryState.loading ? (
        <Loader />
      ) : (
        <>
          <Collection
            key={1}
            collection={categoryState.featuredCategories}
            title="Shop by categories"
            collection_type="categories"
          />
          <Collection
            key={2}
            collection={brandState.brands}
            title="Shop by brands"
            collection_type="brands"
          />
          <ProductList
            products={productState.featuredProducts}
            title="Featured Products"
          />
        </>
      )}
    </main>
  );
};

export default Homepage;
