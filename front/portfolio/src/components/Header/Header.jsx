import React from "react";
import "./Header.css";

import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { FaRocket, FaGraduationCap } from "react-icons/fa";
import { navLinks } from "../constants";
import { useState } from "react";
import menu from "../../assets/menu.svg";
import close from "../../assets/close.svg";
import english from "../../assets/languages/united-states.svg";
import spanish from "../../assets/languages/spain.svg";

function Header() {
  const [toggle, setToggle] = useState(false);
  const [language, setLanguage] = useState('spanish');

  const toggleLanguageButton = () => {
    setLanguage((prevLanguage) =>
      prevLanguage === "spanish" ? "english" : "spanish"
    );
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <h1
        className="flex-1 font-poppins font-semibold ss:text-[50px]
                       text-[42px]  ss:leading-[100px] ml-5 "
      >
        <span className="text-gradient">
          SG <br className="sm:block hidden" />
        </span>
      </h1>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 mr-10">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] 
            ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} `}
          >
            <a href={`#${nav.id}`} className="secciones">
              {nav.title}
            </a>
          </li>
        ))}
      </ul>

      {/* <div class="border border-gray-500 rounded-lg p-4">
        <div class="flex">
          <span class="">Spanish</span>
          <img src={spanish} class="w-[30px] h-[30px] " />
        </div>

        <div class="flex">
          <span class="">English</span>
          <img src={english} class="w-[30px] h-[30px] " />
        </div>
      </div> */}



      <span className={`transition-opacity duration-200 ease-in-out opacity-100`}>
        SP
      </span>

      <div className="flex items-center cursor-pointer" onClick={toggleLanguageButton}>
        <div className={`relative w-24 h-12 flex items-center bg-gray-300 rounded-full p-1 transition-all duration-300 ease-in-out ${
            language === "english" ? "justify-end" : "justify-start"}`}>
          <img
            src={language === "spanish" ? spanish : english}
            className="w-[30px] h-[30px] rounded-full bg-white shadow-md"
            alt={language}
          />
        </div>
      </div>
      
      <span className={`transition-opacity duration-200 ease-in-out opacity-100`}>
        EN
      </span>
    </nav>
  );
}

export default Header;
