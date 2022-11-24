import React from "react";
import Logo from "../Images/logo.jpg";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <>
      <footer className="rounded-t-2xl bg-white">
        <div className="flex justify-evenly items-center ">
          <img src={Logo} alt="" width={"50px"} />
          <div>
            <h1 className="text-lg font-semibold">Hilton Hotel</h1>
            <p className="text-center">Hotel & Resorts</p>
          </div>
          <ul className="flex justify-evenly space-x-3">
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaTwitter />
            </li>
            <li>
              <FaInstagram />
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
