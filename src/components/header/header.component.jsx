import React, { useEffect } from "react";
import logo from "../../assets/logo.svg";
import "./header.styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux";
import Menu from "../menu/menu.component";
import Search from "../search/search.components";

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
        <img src={logo} alt="Logo" />
      </div>
      <div className="header__center">
        <Search />
        <nav>
          <Menu items={categoriesState.categories} />
        </nav>
      </div>
      <div className="header__right"></div>
    </header>
  );
};

export default Header;
