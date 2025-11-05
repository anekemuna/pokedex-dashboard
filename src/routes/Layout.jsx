import React from "react";
import { Outlet, Link } from "react-router";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <div className="layout">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default Layout;
