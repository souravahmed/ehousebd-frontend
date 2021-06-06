import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux";
import ProductSection from "../../parts/ProductSection/ProductSection";
import Loader from "../../components/Loader";
import CategoryStateUtils from "../../utils/CategoryStateUtils";
import DropDownFilter from "../../components/DropDownFilter";
import DropDownUtils from "../../utils/DropDownUtils";

const CategoryPage = () => {
  const { categorySlug } = useParams();
  const [orderByAscOrDesc, setOrderByAscOrDesc] = useState("");
  const productState = useSelector((state) => state.product);
  const categoryState = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getProducts({
        filterBy: categorySlug,
        orderBy: orderByAscOrDesc,
        sortBy: "price",
      })
    );
  }, [categorySlug, orderByAscOrDesc, dispatch]);

  const handleOnChange = (e) => {
    setOrderByAscOrDesc(e.target.value);
  };

  return (
    <>
      {productState?.loading ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="d-flex mt-4 justify-content-end">
            <div className="me-2">
              <h4>Sort By:</h4>
            </div>
            <div>
              <DropDownFilter
                dropdownOptions={DropDownUtils.generateDefaultOptions()}
                callback={handleOnChange}
                value={orderByAscOrDesc}
              />
            </div>
          </div>
          <ProductSection
            products={productState?.products}
            sectionTitle={CategoryStateUtils.getCategoryNameBySlug(
              categoryState.categories,
              categorySlug
            )}
          />
        </div>
      )}
    </>
  );
};

export default CategoryPage;
