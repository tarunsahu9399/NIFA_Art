import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Header1() {
  return (
    <div className="flex items-center flex-wrap md:justify-around justify-center bg-gradient-to-r from-pink-700 via-pink-600 to-pink-500 text-white px-10 py-2 ">
      <div>
        <h1>Welcome to the National Institute of Fine Arts</h1>
      </div>
      <div className="flex items-end">
        <div className="flex items-center mx-2">
          <FaPhoneAlt className="mx-2" /> <span>9555112200</span>
        </div>
        <div className="flex items-center mx-2">
          <FaPhoneAlt className="mx-2" /> <span>9810130552</span>
        </div>
      </div>
      <div className="flex items-center ">
        <div className="flex items-center mx-2">
          <IoMdMail className="mx-2" /> <span>admission@nifafinearts.com</span>
        </div>
        <div className="flex">
          <FaFacebookF size={20} className="mx-2"/>
          <IoLogoTwitter size={20} className="mx-2"/>
          <FaInstagram size={20} className="mx-2"/>
          <FaYoutube size={20} className="mx-2"/>
        </div>
      </div>
    </div>
  );
}

export default Header1;
