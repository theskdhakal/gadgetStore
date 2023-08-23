import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { client } = useSelector((state) => state.client);
  return client?.uid ? children : <Navigate to="/register" replace />;
};
