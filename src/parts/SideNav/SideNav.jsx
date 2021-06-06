import React from "react";
import "../../parts/SideNav/SideNav.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories, getProductBanners } from "../../redux";
import Loader from "../../components/Loader";
import Carousel from "../../components/Carousel";
import CarouselUtils from "../../utils/CarouselUtils";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  const categoryState = useSelector((state) => state.category);
  const productBannerState = useSelector((state) => state.productBanner);
  const dispatch = useDispatch();

  useEffect(() => {
    Promise.all([dispatch(getCategories()), dispatch(getProductBanners())]);
  }, [dispatch]);

  return (
    <div className="container">
      {categoryState?.loading ? (
        <Loader />
      ) : (
        <div className="d-flex">
          <ul className="nav flex-column">
            <div className="nav-item category-title">
              <h3>Category</h3>
            </div>
            <li className="nav-item">
              {categoryState?.categories?.map((category, index) => (
                <NavLink
                  className="nav-link"
                  key={index}
                  to={"/category/" + category.slug}
                >
                  {category.name}
                </NavLink>
              ))}
            </li>
          </ul>
          <Carousel
            imagesPath={CarouselUtils.convertProductBanner(
              productBannerState?.productBanners
            )}
            inlineImageCss={{
              objectFit: "fill",
              height: "400px",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default SideNav;
