import React from "react";
import "./menu.styles.scss";
import { Link } from "react-router-dom";

const Menu = ({ items, is_children }) => {
  return (
    <>
      <ul className={is_children ? "nav-list__drop" : "nav-list"}>
        {items.map((item) => (
          <li key={item.name} className="nav-list__item">
            {item.parent === null && <> {item.display_name}</>}
            {item.parent !== null && (
              <Link to="">
                {item.display_name}
                {item.children.length > 0 && <i class="fas fa-arrow-right"></i>}
              </Link>
            )}

            {item.children.length !== 0 && (
              <Menu items={item.children} is_children={true} />
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Menu;
