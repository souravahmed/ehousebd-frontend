import React from "react";
import UrlUtils from "../../utils/UrlUtils";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-card__image">
        <img
          src={UrlUtils.joinMediaUrl(product.product_attributes[0].image_path)}
          alt={product.display_name}
        />
      </div>
      <div className="product-card__details">
        <h4>{product.display_name}</h4>
        <p>{product.short_desc}</p>
        <div className="product-card__price">
          <h4>Price:</h4>
          <span>{product.product_attributes[0].price} Tk</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
