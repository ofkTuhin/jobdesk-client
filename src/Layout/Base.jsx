import React from "react";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";

const Base = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

export default Base;
