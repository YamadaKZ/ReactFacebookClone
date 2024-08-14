import React from "react";
import Header from "../components/header";

const MainLayout = ({ children }) => {

  return (
    <div>
      <div>
        <Header/>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
