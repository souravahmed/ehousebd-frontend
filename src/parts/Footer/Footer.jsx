import React from "react";
import "../Footer/Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container my-5">
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#3e4145" }}
      >
        <section
          className="d-flex justify-content-between p-4"
          style={{ backgroundColor: "#6351ce" }}
        >
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a
              href="https://www.facebook.com/sourav.ahmeddiu"
              target="_blank"
              rel="noreferrer"
              className="text-white me-4"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/sourav-ahmed-1487b5119"
              target="_blank"
              rel="noreferrer"
              className="text-white me-4"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/souravahmed/"
              className="text-white me-4"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Ehousebd</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto hr-line" />
                <p>Ehousebd a trustable ecommerce platform</p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto hr-line" />
                <p>
                  <NavLink className="text-white" to="/">
                    About us
                  </NavLink>
                </p>
                <p>
                  <NavLink className="text-white" to="/">
                    Term & Policy
                  </NavLink>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr className="mb-4 mt-0 d-inline-block mx-auto hr-line" />
                <p>
                  <i className="fas fa-home mr-3"></i> Wasa Road, Maniknagor,
                  Dhaka-1203
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> support@ehousebd.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> +012 356 447
                </p>
                <p>
                  <i className="fas fa-print mr-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center p-3 copy-right-bg-color">
          © 2020 Copyright: Ehousebd
        </div>
      </footer>
    </div>
  );
};

export default Footer;
