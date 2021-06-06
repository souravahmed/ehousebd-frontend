import React from "react";
import Carousel from "../../components/Carousel";
import CarouselUtils from "../../utils/CarouselUtils";
import { useEffect } from "react";
import { getProductBanners } from "../../redux";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../components/Loader";

const HeroSection = () => {
  const productBannerState = useSelector((state) => state.productBanner);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductBanners());
  }, [dispatch]);

  return (
    <div className="d-flex">
      {productBannerState.loading ? (
        <Loader />
      ) : (
        <Carousel
          imagesPath={CarouselUtils.convertProductBanner(
            productBannerState?.productBanners
          )}
          inlineImageCss={{
            objectFit: "fill",
            height: "400px",
          }}
        />
      )}
    </div>
  );
};

export default HeroSection;
