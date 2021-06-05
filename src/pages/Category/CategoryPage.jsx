import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByCategory } from "../../redux";
import ProductSection from "../../parts/ProductSection/ProductSection";
import Loader from "../../components/Loader";
import CategoryStateUtils from "../../utils/CategoryStateUtils";

const CategoryPage = () => {
  const { categorySlug } = useParams();
  const productsByCategoryState = useSelector((state) => state.product);
  const categoryState = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsByCategory(categorySlug));
  }, [categorySlug, dispatch]);

  return (
    <>
      {productsByCategoryState?.loading ? (
        <Loader />
      ) : (
        <ProductSection
          products={productsByCategoryState?.productsByCategory}
          sectionTitle={CategoryStateUtils.getCategoryNameBySlug(
            categoryState,
            categorySlug
          )}
        />
      )}
    </>
  );
};

export default CategoryPage;
