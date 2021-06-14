import React from "react";
import "./footer.styles.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__wrap">
        <div className="footer__description">
          <h2>Ehousebd</h2>
          <p>
            Most trustable ecommerce site in bd. Our first priority is customer
            satisfaction. Hope you will have a greate experience with us.
          </p>
        </div>
        <div className="footer__contact-info">
          <h3>Contact Info</h3>
          <div className="footer-info__box">
            <i class="fas fa-directions fa-2x"></i>
            <div className="box-title">
              <h3>Address</h3>
              <p>Wasa road, Maniknagor</p>
            </div>
          </div>
          <div className="footer-info__box">
            <i class="fas fa-phone-square-alt fa-2x"></i>
            <div className="box-title">
              <h3>Phone</h3>
              <p>Toll Free (123) 456-7890</p>
            </div>
          </div>
          <div className="footer-info__box">
            <i class="far fa-envelope fa-2x"></i>
            <div className="box-title">
              <h3>Email</h3>
              <p>ehouse4bd@gmail.com</p>
            </div>
          </div>
          <div className="footer-info__social-link">
            <a
              href="https://www.github.com/souravahmed/ehousebd-frontend"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link__github"
            >
              <i class="fab fa-github fa-2x"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/sourav-ahmed-1487b5119"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link__linkedin"
            >
              <i class="fab fa-linkedin-in fa-2x"></i>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link__facebook"
            >
              <i class="fab fa-facebook-f fa-2x"></i>
            </a>
          </div>
        </div>
        <div className="footer__useful-link">
          <h3>Useful Link</h3>
          <ul>
            <li>
              <Link to="/about-us">About us</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact us</Link>
            </li>
            <li>
              <Link to="/my-account">My account</Link>
            </li>
          </ul>
        </div>
        <div className="footer__news-letter">
          <h3>Subscribe Newsletter</h3>
          <p>
            Get all the latest information on Events, Sales and Offers. Sign up
            for newsletter today.
          </p>
          <div className="news-letter__form">
            <form action="" method="POST">
              <input
                className="form-control"
                placeholder="Email address"
                type="email"
              />
              <button className="btn btn-pill" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer__copy-right">
        <span>© Ehousebd. © 2021. All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
