import React from "react";
import UrlUtils from "../utils/UrlUtils";

const Carousel = ({ imagesPath, inlineImageCss }) => {
  const carouselId = UrlUtils.getCarouselId();
  return (
    <div
      id={carouselId}
      className="carousel slide shadow"
      data-bs-interval="2000"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={UrlUtils.joinMediaUrl(imagesPath[0]?.path)}
            alt={imagesPath[0]?.alt}
            className="d-block w-100"
            style={inlineImageCss}
          />
        </div>

        {imagesPath.map(
          (imagePath, index) =>
            index !== 0 && (
              <div key={index} className="carousel-item">
                <img
                  src={UrlUtils.joinMediaUrl(imagePath.path)}
                  alt={imagePath.alt}
                  className="d-block w-100"
                  style={inlineImageCss}
                />
              </div>
            )
        )}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={"#" + carouselId}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={"#" + carouselId}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
