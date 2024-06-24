import React from "react";
import "./Header.css";
import { navLinks } from "../constants";
import { useState } from "react";
import english from "../../assets/languages/united-states.svg";
import spanish from "../../assets/languages/spain.svg";

function Header() {
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
          SGS <br className="sm:block hidden" />
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

      <span className={`transition-opacity duration-200 ease-in-out opacity-100 mr-2`}>
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
      
      <span className={`transition-opacity duration-200 ease-in-out opacity-100 ml-2`}>
        EN
      </span>
    </nav>
  );
}

export default Header;
