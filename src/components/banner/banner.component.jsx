import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductBanners } from "../../redux";
import UrlUtils from "../../utils/UrlUtils";
import CarouselUtils from "../../utils/CarouselUtils";
import "./banner.styles.scss";
import Loader from "../loader/loader.component";

const Banner = () => {
  const bannerState = useSelector((state) => state.banner);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductBanners());
  }, [dispatch]);

  return (
    <section className="hero">
      {bannerState.loading ? (
        <Loader />
      ) : (
        <>
          {bannerState?.banners.map((banner, index) => (
            <img
              key={index}
              src={UrlUtils.joinMediaUrl(banner.image_path)}
              alt={CarouselUtils.getImageNameFromPath(banner.image_path)}
            />
          ))}
        </>
      )}
    </section>
  );
};

export default Banner;
