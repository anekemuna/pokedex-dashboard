import React from "react";
import { Outlet, Link } from "react-router";

const Layout = () => {
  return (
    <div className="layout">
        <h4>Checking Layout and Routing works now </h4>
      <Outlet />
    </div>
  );
};

export default Layout;
