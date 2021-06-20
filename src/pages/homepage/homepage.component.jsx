import React, { useEffect } from "react";
import "./homepage.styles.scss";
import Banner from "../../components/banner/banner.component";
import { useSelector, useDispatch } from "react-redux";
import { getFeaturedCategories } from "../../redux";
import Loader from "../../components/loader/loader.component";
import Collection from "../../components/collection/collection.component";

const Homepage = () => {
  const categoryState = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFeaturedCategories());
  }, [dispatch]);

  return (
    <main>
      <Banner />
      {categoryState.loading ? (
        <Loader />
      ) : (
        <Collection
          collection={categoryState.featuredCategories}
          title="Shop by categories"
        />
      )}
    </main>
  );
};

export default Homepage;
