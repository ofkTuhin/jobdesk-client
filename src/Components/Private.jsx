import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const login = localStorage.getItem("login");

  const location = useLocation();
  if (!login) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default Private;
