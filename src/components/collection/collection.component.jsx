import React from "react";
import UrlUtils from "../../utils/UrlUtils";
import "./collection.styles.scss";
import { Link } from "react-router-dom";

const Collection = ({ title, collection }) => {
  return (
    <div className="cl-container">
      <div className="cl-container__title">
        <h2>{title}</h2>
      </div>
      <div className="cl__collection">
        {collection?.map((item) => (
          <div key={item.id} className="collection__item">
            <Link to={item.slug}>
              <img
                src={UrlUtils.joinMediaUrl(item.image_path)}
                alt={item.name}
              />
            </Link>
            <h4>{item.display_name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
