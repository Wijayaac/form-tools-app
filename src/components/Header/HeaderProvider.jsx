import React, { createContext, useState } from "react";

export const HeaderContext = createContext({});

const HeaderProvider = ({ children }) => {
  const [headerData, setHeaderData] = useState({
    pageName: "Form Tools",
    menuItems: [
      { name: "Forms", link: "/forms" },
      { name: "Settings", link: "/setting" },
      { name: "Guide", link: "/guide" },
    ],
  });

  const updateHeaderData = (pageName, menuItems) => {
    setHeaderData({ pageName, menuItems });
  };

  const value = { headerData, updateHeaderData };

  return <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>;
};
export default HeaderProvider;
