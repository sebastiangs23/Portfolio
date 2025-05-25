import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../Language/Language";
import signature from '../../assets/icon/sgomezs.png';
import english from "../../assets/languages/united-states.svg";
import spanish from "../../assets/languages/spain.svg";
import "./Header.css";

function Header() {
  const [language, setLanguage] = useState("spanish");
  const [animating, setAnimating] = useState(false);
  const [showNavbar, setShowNavBar] = useState(true);
  const { sentences, switchLanguage } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    location.pathname !== '/' ? setShowNavBar(false) : setShowNavBar(true);
  }, [location.pathname]);

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
          <img className="signature" src={signature} alt="signature" />
        </span>
      </h1>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 mr-10">
        {showNavbar && sentences.navBar.map((item, index) => {
          return (
            <li key={index} className="font-poppins font-normal cursor-pointer text-[14px] mr-3">
              <a href={item.href} className="hover-style_v2 hover-style_v2--normal">
                {item.name}
              </a>
            </li>
          )
        }) }
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
