import React from "react";
import "./search.styles.scss";

const Search = () => {
  return (
    <div className="search-box">
      <div className="search-box__bar">
        <input type="search" placeholder="Search here" />
      </div>
      <div className="search-box__search">
        <button>
          <i className="fas fa-search fa-2x"></i>
        </button>
      </div>
    </div>
  );
};

export default Search;
