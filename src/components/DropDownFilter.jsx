import React from "react";
import PropTypes from "prop-types";

const DropDownFilter = ({ dropdownOptions, callback, value }) => {
  return (
    <select
      className="form-select rounded-pill"
      onChange={callback}
      value={value}
    >
      {dropdownOptions.map((dropdownOption, index) => (
        <option key={index} value={dropdownOption.value}>
          {dropdownOption.name}
        </option>
      ))}
    </select>
  );
};

export default DropDownFilter;

DropDownFilter.propTypes = {
  dropdownOptions: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  callback: PropTypes.func,
  value: PropTypes.string,
};
