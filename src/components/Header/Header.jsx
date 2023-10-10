import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { HeaderContext } from "./HeaderProvider";
import style from "./Header.module.css";

const Header = () => {
  const { headerData } = useContext(HeaderContext);
  const { pageName, menuItems } = headerData;

  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <div className={style.logo}>{pageName && <p>{pageName}</p>}</div>
        <div className={style.nav}>
          {menuItems &&
            menuItems.map((item) => (
              <NavLink key={item.link} to={item.link} className={`${style.link} ${style[item.style]}`}>
                {item.name}
              </NavLink>
            ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
