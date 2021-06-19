import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getProductVariantsByCategorySlug } from "../../redux";
import Filter from "../../components/filter/filter.component";
import ProductList from "../../components/product-list/product-list.component";
import CommonUtils from "../../utils/CommonUtils";
import "./categorypage.styles.scss";

const CategoryPage = () => {
  const { categorySlug } = useParams();
  const dispatch = useDispatch();
  const variantState = useSelector((state) => state.variantByCategory);
  const filter = variantState?.variants_by_category;
  const [filterState, setFilterState] = useState([]);

  useEffect(() => {
    dispatch(getProductVariantsByCategorySlug(categorySlug));
  }, [dispatch, categorySlug]);

  useEffect(() => {
    setFilterState(CommonUtils.getFilters(filter));
  }, [filter]);

  useEffect(() => {
    console.log("calling");
  }, [filterState]);

  const handleOnChange = (e) => {
    const filterOption = e.target.value;
    const updatedCheckedState = filterState.map((item) => {
      let filterType = { filterType: item.filterType };
      filterType["filterOptions"] = item.filterOptions.map((option) => {
        if (option.name === filterOption) {
          option.isChecked = !option.isChecked;
        }
        return option;
      });
      return filterType;
    });
    setFilterState(updatedCheckedState);
  };

  return (
    <div className="category-container">
      <Filter handleOnChange={handleOnChange} filters={filterState} />
      <ProductList category_slug={categorySlug} />
    </div>
  );
};

export default CategoryPage;
