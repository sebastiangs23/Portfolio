import React from "react";
import "./Header.css";
import { useState } from "react";
import english from "../../assets/languages/united-states.svg";
import spanish from "../../assets/languages/spain.svg";
import { useLanguage } from "../Language/Language";

function Header() {
  const [language, setLanguage] = useState("spanish");
  const [animating, setAnimating] = useState(false);
  const { sentences, switchLanguage } = useLanguage();

  const toggleLanguageButton = () => {
    setAnimating(true);

    if(language == "spanish"){
      switchLanguage("english");
      setLanguage("english");
    }else {
      switchLanguage("spanish");
      setLanguage("spanish");
    };
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
        <li className="font-poppins font-normal cursor-pointer text-[14px] mr-3">
          <a href="#home" className="hover-style_v2">
            {sentences.start}
          </a>
        </li>
        <li className="font-poppins font-normal cursor-pointer text-[14px] mr-3">
          <a href="#desarrollo" className="hover-style_v2">
            {sentences.background_}
          </a>
        </li>
        <li className="font-poppins font-normal cursor-pointer text-[14px] mr-3">
          <a href="#projectos" className="hover-style_v2">
            {sentences.projects}
          </a>
        </li>
        <li className="font-poppins font-normal cursor-pointer text-[14px]">
          <a href="#tecnologias" className="hover-style_v2">
            {sentences.technologies}
          </a>
        </li>
      </ul>

      <span
        className={`transition-opacity duration-200 ease-in-out opacity-100 mr-2`}
      >
        SP
      </span>

      <div
        className="flex items-center cursor-pointer"
        onClick={toggleLanguageButton}
      >
        <div
          className={`relative w-24 h-12 flex items-center bg-gray-300 rounded-full p-1 ${
            language === "english" ? "justify-end" : "justify-start"
          }`}
        >
          <img
            src={language === "spanish" ? spanish : english}
            alt={language}
            className={`
            w-[30px] h-[30px] rounded-full bg-white shadow-md
            transition-all duration-500
            ${animating ? "girar" : ""}
          `}
          />
        </div>
      </div>

      <span
        className={`transition-opacity duration-200 ease-in-out opacity-100 ml-2 mr-2`}
      >
        EN
      </span>
    </nav>
  );
}

export default Header;
