import React, { useEffect } from "react";
import logo from "../../assets/logo.svg";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux";

const Header = () => {
  const categoriesState = useSelector((state) => state.category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    const header = document.getElementById("header");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

  return (
    <header className="header" id="header">
      <div className="logo-container">
        <img src={logo} alt="ehousebd" />
      </div>
      <div className="header-center">
        <input className="text" type="text" placeholder="Search product here" />

        <div className="hamburger">
          <i className="fas fa-bars fa-x"></i>
        </div>
        <nav className="nav">
          <ul className="nav__list">
            {categoriesState.loading === false &&
              categoriesState.categories.map((category, index) => (
                <li key={index}>
                  <Link to={`/category/${category.slug}`}>{category.name}</Link>
                </li>
              ))}
          </ul>
        </nav>
      </div>
      <div className="header-right">
        <div className="login">
          <i className="far fa-user fa-2x"></i>
        </div>
        <div className="cart">
          <i className="fas fa-shopping-bag fa-2x"></i>
          <span className="badge">5</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
