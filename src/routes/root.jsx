import React from "react";
import { Outlet } from "react-router-dom";
import { Header, HeaderProvider } from "../components/Header";

const Root = () => {
  return (
    <>
      <HeaderProvider>
        <Header />
        {/* TODO: Add more layout here */}
        <Outlet />
      </HeaderProvider>
    </>
  );
};

export default Root;
