import Carousel from "../../components/Carousel";
import React from "react";
import CarouselUtils from "../../utils/CarouselUtils";
import "../ProductSection/ProductSection.css";

const ProductSection = ({ products, sectionTitle }) => {
  return (
    <div className="container">
      <div
        className="d-flex me-auto w-30 justify-content-center"
        style={{ margin: "40px 0px" }}
      >
        <h3>{sectionTitle}</h3>
      </div>
      <div className="d-flex flex-wrap">
        {products?.map((product, index) => (
          <div key={index} className="card custom-card">
            <Carousel
              imagesPath={CarouselUtils.convertProductImages(
                product.product_image_gallery
              )}
            />

            <div className="card-body">
              <h5 className="card-title">{product.display_name}</h5>
              <p className="card-text">{product.short_description}</p>
              <p className="h6">Price: {product.price} TK </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
