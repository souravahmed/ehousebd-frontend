import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux";
import ProductSection from "../../parts/ProductSection/ProductSection";
import Loader from "../../components/Loader";
import CategoryStateUtils from "../../utils/CategoryStateUtils";
import DropDownFilter from "../../components/DropDownFilter";
import DropDownUtils from "../../utils/DropDownUtils";
import SideNav from "../../parts/SideNav/SideNav";

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
          <div className="d-flex mt-2 justify-content-between">
            <SideNav />
            <div className="d-flex ">
              <div className="me-2">
                <h5>Sort By:</h5>
              </div>
              <div className="ms-2">
                <DropDownFilter
                  dropdownOptions={DropDownUtils.generateDefaultOptions()}
                  callback={handleOnChange}
                  value={orderByAscOrDesc}
                />
              </div>
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
