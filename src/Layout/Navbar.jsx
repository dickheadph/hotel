import React from "react";
import Logo from "../Images/logo.jpg";
import { FaBars } from "react-icons/fa";
function Navbar() {
  return (
    <>
      <div className="">
        <nav className="flex justify-around items-center bg-black py-4 text-white px-4">
          <img src={Logo} alt="" width={"50px"} />
          {/* <button className="flex items-center py-1 px-3 bg-transparent border-[1px] border-white rounded-sm text-sm">
            <MdOutlineArrowBack />
            &nbsp;&nbsp;Back
          </button> */}
          <h1 className="text-lg font-semibold">Hilton Hotel</h1>
          <FaBars size="22px" />
        </nav>
      </div>
    </>
  );
}

export default Navbar;
