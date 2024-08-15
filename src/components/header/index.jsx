import React from "react";
import { PATH_URL } from "../../utils/constant";
import { useNavigate } from "react-router-dom";
import "./index.scss"

const Header = () => {

  const navigate = useNavigate();

  function handleLogout() {
    localStorage.clear();
    navigate(`/${PATH_URL.signIn}`);
  }

  const homeIn = () => {
    navigate(`/${PATH_URL.homePage}`);
  }

  return (


  <div className="header">
    <div className="logo">
      <img src="facebook.png" alt="Facebook Logo" onClick={homeIn} />
    </div>
    <h1 className="title">facebook</h1>
    <button className="logout-button" onClick={handleLogout}>Logout</button>
  </div>
  );
};

export default Header;