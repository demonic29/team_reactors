import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div>
      <div className="">
        <NavBar></NavBar>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
