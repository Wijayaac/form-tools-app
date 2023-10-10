import React from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <div>
        <h1>React Router Contacts</h1>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Root;
