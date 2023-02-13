import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="bg">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="search">
            <span className="pt-2 pe-4 fw-bold">EN</span>
            <input
              type="text"
              className="searchTerm"
              placeholder="Search..."
            />
            <button type="submit" className="searchButton">
              <i className="fa fa-search"></i>
            </button>
          </div>
          <div className="logo">
            <h1 className="fw-bold">LOGO</h1>
          </div>
          <div className="loginRegistration">
            <span>REGISTRATION</span>
            <span className="ps-4">SIGN UP</span>
            <i className="fa-solid fa-cart-shopping ps-4"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
