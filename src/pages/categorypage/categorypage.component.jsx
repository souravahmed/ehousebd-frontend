//import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
//import { useDispatch, useSelector } from "react-redux";

//import Filter from "../../components/filter/filter.component";
//import ProductList from "../../components/product-list/product-list.component";
//import CommonUtils from "../../utils/CommonUtils";
import "./categorypage.styles.scss";
import { Switch, Route, useRouteMatch } from "react-router-dom";

const CategoryPage = () => {
  const { categorySlug } = useParams();
  const { subCategorySlug } = useParams();
  // const dispatch = useDispatch();
  const { path } = useRouteMatch();

  // useEffect(() => {
  //   setFilterState(CommonUtils.getFilters(filter));
  // }, [filter]);

  // const handleOnChange = (e) => {
  //   const filterOption = e.target.value;
  //   const updatedCheckedState = filterState.map((item) => {
  //     let filterType = { filterType: item.filterType };
  //     filterType["filterOptions"] = item.filterOptions.map((option) => {
  //       if (option.name === filterOption) {
  //         option.isChecked = !option.isChecked;
  //       }
  //       return option;
  //     });
  //     return filterType;
  //   });
  //   setFilterState(updatedCheckedState);
  // };

  return (
    <div className="category-container">
      {/* <Filter handleOnChange={handleOnChange} filters={filterState} />
      <ProductList category_slug={categorySlug} /> */}
      {/* <h1>{categorySlug}</h1> */}
      <h1>{categorySlug}</h1>
      <h2>{subCategorySlug}</h2>
      <Switch>
        <Route path={`${path}/:subCategorySlug`}>
          <CategoryPage />
        </Route>
      </Switch>
    </div>
  );
};

export default CategoryPage;
