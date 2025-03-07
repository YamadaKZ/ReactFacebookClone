import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Protected = () => {
  const token = useSelector((state) => state.auth?.token);
  

  return token ? <Outlet /> : <Navigate to="/signin" />;
};

export default Protected;


// import { Navigate, Outlet } from "react-router-dom";

// const Protected = () => {
//   const token = localStorage.getItem("token");

//   return token ? <Outlet /> : <Navigate to="/signin" />;
// };

// export default Protected;