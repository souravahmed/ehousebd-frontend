import React from "react";
import CarouselUtils from "../../utils/CarouselUtils";
import UrlUtils from "../../utils/UrlUtils";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const productThumbnail = product.product_image_gallery[0].thumbnail;
  return (
    <div className="product-card">
      <div className="product-card__image">
        <img
          src={UrlUtils.joinMediaUrl(productThumbnail)}
          alt={CarouselUtils.getImageNameFromPath(productThumbnail)}
        />
      </div>
      <div className="product-card__details">
        <h4>{product.display_name}</h4>
        <p>{product.short_description}</p>
        <div className="product-card__price">
          <h4>Price:</h4>
          <span>{product.price} Tk</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
