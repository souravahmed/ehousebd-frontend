import React, { useEffect } from "react";
import logo from "../../assets/logo.svg";
import "./header.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux";
import Menu from "../menu/menu.component";
import Search from "../search/search.components";
import { Link } from "react-router-dom";

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
      <div className="header__left">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="header__center">
        <Search />
        <nav>
          <Menu items={categoriesState.categories} />
        </nav>
      </div>
      <div className="header__right">
        <Link to="">
          <i className="far fa-user fa-2x"></i>
        </Link>
        <Link to="">
          <i className="fas fa-shopping-cart fa-2x"></i>
          <span className="badge">0</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
