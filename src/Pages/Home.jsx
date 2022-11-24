import React from "react";
import Navbar from "../Layout/Navbar";
import Background from "../Images/background.png";
import Main from "../Images/main.jpg";
import { TfiAngleRight } from "react-icons/tfi";
import Footer from "../Layout/Footer";
import "../index.css";
function Home() {
  return (
    <>
      <div>
        <Navbar />
        <img
          src={Background}
          className="object-cover w-full h-[740px] md:h-[870px] -z-0"
          alt=""
        />
        <div className="m-6 md:m-12">
          <div className="border-[3px] top-[15%] border-white w-auto mr-5 absolute">
            <img src={Main} alt="" className="object-cover w-full" />
          </div>
          <div className="absolute top-[43%] md:top-[63%] text-white">
            <h1 className="font-bold text-xl">Hilton, Chicago</h1>
            <p className="font-semibold text-sm">720 South Michigan Avenue</p>
            <p className="font-semibold text-sm">Chicago, Illinois, 60605</p>
            <p className="underline text-sm">1-312-922-4400</p>
            <div className="w-[380px] md:w-[680px] mt-10 rounded-lg">
              <ul className="text-black text-lg rounded-2xl bg-white">
                <li className="list underline-b-[1px] border-b-[2px] rounded-t-2xl">
                  <p className="font-extrabold">Map</p>
                  <TfiAngleRight />
                </li>
                <li className="list underline-b-[1px] border-b-[2px]">
                  <p className="font-extrabold">Photo Gallery</p>
                  <TfiAngleRight />
                </li>
                <li className="list underline-b-[1px] border-b-[2px]">
                  <p className="font-extrabold">Amenities</p>
                  <TfiAngleRight />
                </li>
                <li className="list underline-b-[1px] border-b-[2px] rounded-b-2xl">
                  <p className="font-extrabold">Commercial Bldgs.</p>
                  <TfiAngleRight />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
