import React from "react";
import logo from "../../assets/logo.svg";
import "../Header/Header.css";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light navbar-bg">
        <NavLink className="navbar-brand ps-2" to="/">
          <img src={logo} alt="Logo" height="80" width="80" />
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex ms-auto w-75">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search Product"
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-search"
              >
                <i className="fas fa-search"></i>
              </button>
            </div>
          </form>
          <div className="ms-auto">
            <NavLink className="pe-4 login-link" to="/login">
              <i className="far fa-user fa-2x"></i>
              <span className="login-span">Login</span>
            </NavLink>
          </div>
          <div className="me-auto">
            <NavLink to="/cart">
              <span className="badge rounded-pill bg-dark badge-align-top">
                5
              </span>
              <i className="fas fa-shopping-cart fa-2x"></i>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
