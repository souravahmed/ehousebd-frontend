import React from "react";
import "./filter.styles.scss";

const Filter = ({ handleOnChange, filters }) => {
  return (
    <div className="vertical-filter">
      <div className="vertical-filter__title">
        <h2>Filters</h2>
      </div>
      {filters.map((filter, index) => (
        <div key={index} className="vertical-filter__type">
          <h2>{filter.filterType}</h2>
          {filter.filterOptions.map((option) => (
            <div key={option.id} className="type__filter-level">
              <input
                type="checkbox"
                className="checkbox"
                onChange={handleOnChange}
                value={option.name}
              />
              <label>{option.name}</label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Filter;
