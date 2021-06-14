import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductBanners } from "../../redux";
import UrlUtils from "../../utils/UrlUtils";
import CarouselUtils from "../../utils/CarouselUtils";
import "./banner.styles.scss";

const Banner = () => {
  const productBannerState = useSelector((state) => state.productBanner);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductBanners());
  }, [dispatch]);

  return (
    <section className="hero">
      {productBannerState.loading === false && (
        <img
          src={UrlUtils.joinMediaUrl(
            productBannerState?.productBanners[0]?.banner_path
          )}
          alt={CarouselUtils.getImageNameFromPath(
            productBannerState?.productBanners[0]?.banner_path
          )}
        />
      )}
    </section>
  );
};

export default Banner;
