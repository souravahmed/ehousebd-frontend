import React from "react";
import "./search.styles.scss";

const Search = () => {
  return (
    <div className="search-box">
      <div className="search-box__bar">
        <input type="search" />
      </div>
      <div className="search-box__search">
        <button>
          <i class="fas fa-search fa-2x"></i>
        </button>
      </div>
    </div>
  );
};

export default Search;
