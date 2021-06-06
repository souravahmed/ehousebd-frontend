import React from "react";
import "../../parts/SideNav/SideNav.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCategories } from "../../redux";
import Loader from "../../components/Loader";
import { NavLink } from "react-router-dom";

const SideNav = () => {
  const categoryState = useSelector((state) => state.category);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <>
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
        </div>
      )}
    </>
  );
};

export default SideNav;
