import React from "react";
import logo from "../../assets/image/logo.JPG";

export const Footer = () => {
  return (
    <div className="footer bg-mycolor">
      <div className="bg-[#67e8f9]">
        <button
          className=" text-center d-flex justify-content-center align-items-center"
          style={{ height: "4.6vh", width: "100%" }}
        >
          <h5>BACK TO TOP</h5>
        </button>
      </div>

      <div className="px-5 py-2 text-center d-flex justify-content-around align-items-center">
        <div>
          <h5>Get to Know Us</h5>
          <ul>
            <li>About Us</li>
            <li>Frequently asked question</li>
          </ul>
        </div>

        <div className="main-menu">
          <h5>Main-Menu</h5>
          <ul>
            <li>Categories</li>
            <li>Deals</li>
            <li>New Arrivals</li>
            <li>Clearance</li>
          </ul>
        </div>

        <div className="social-media">
          <h5>Social Media</h5>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
      <hr className="text-white" />

      <div className="lower-footer d-flex justify-content-center align-items-center">
        <img src={logo} alt=" " style={{ width: "45px" }} />
        <p>All Right Reserved !!</p>
      </div>
    </div>
  );
};
