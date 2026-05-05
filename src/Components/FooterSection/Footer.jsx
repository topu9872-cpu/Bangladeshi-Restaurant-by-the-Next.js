// components/Footer.jsx
import React from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="mt-4 w-100% mx-auto">
      <div className="overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 150"
          className="w-full h-30"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 C240,150 480,0 720,80 C960,150 1200,20 1440,80 L1440,150 L0,150 Z"
            className="fill-[#3b1208]"
          />
        </svg>
      </div>

      <div className="bg-[#3b1208] text-white px-6 md:px-16 py-8 my-0">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 font-serif italic">
              🍛 Bangladeshi
            </h2>

            <div className="flex gap-3 mt-4">
              <div className="w-9 h-9 rounded-full text-3xl hover:text-red-500 bg-white text-black flex items-center justify-center cursor-pointer">
                <RiInstagramFill />
              </div>
              <div className="w-9 h-9 text-3xl rounded-full  hover:text-blue-500 bg-white text-black flex items-center justify-center cursor-pointer">
                <FaFacebook />
              </div>
              <div className="w-9 h-9 text-3xl rounded-full  hover:text-black bg-white text-black flex items-center justify-center cursor-pointer">
                <FaXTwitter />
              </div>
              <div className="w-9 h-9 text-3xl rounded-full  hover:text-red-500 bg-white text-black flex items-center justify-center cursor-pointer">
                <FaYoutube />
              </div>
            </div>
          </div>

         
          <div>
            <h3 className="text-lg font-semibold mb-4">Utility Links</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li className="hover:underline ">Order</li>
              <li className="hover:underline ">Blog</li>
              <li className="hover:underline ">Menu</li>
              <li className="hover:underline ">Support</li>
              <li className="hover:underline ">Table Reservation</li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-sm opacity-80 leading-6">
              123 Green Street, Uttora, Dhaka, Bangladesh <br />
              Banglideshirestaurant@email.com <br />
              +880191 987-654-3210
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
