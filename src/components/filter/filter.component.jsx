import React from "react";
import "./filter.styles.scss";

const Filter = ({ handleOnChange, filterObj }) => {
  let filterKeys = [];
  if (filterObj) {
    filterKeys = Object.keys(filterObj);
  }
  return (
    <div className="vertical-filter">
      <div className="vertical-filter__title">
        <h2>Filters</h2>
      </div>
      {filterKeys?.map((filterKey, index) => (
        <div key={index} className="vertical-filter__type">
          <h2>{filterKey}</h2>
          {filterObj[filterKey]?.map((option) => (
            <div key={option.name} className="type__filter-level">
              <input
                type="checkbox"
                className="checkbox"
                onChange={handleOnChange}
                value={option.name}
              />
              <label>{option.display_name}</label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Filter;
