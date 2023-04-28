import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({ children }) => {
  const isAuth = false;
  const location = useLocation();
  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default Private;
