import React from "react";
import { Navigate } from "react-router-dom";



function ProtectedRoute({ children }) {
  if(localStorage.getItem("auth") == null) return <Navigate
  to="/login/" />;

  const { user } = JSON.parse(localStorage.getItem("auth"));
  return user ? <>{children}</> : <Navigate
    to="/login/" />;
}

export default ProtectedRoute;