import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../Language/Language";
import signature from "../../assets/icon/sgomezs.png";
import english from "../../assets/languages/united-states.svg";
import spanish from "../../assets/languages/spain.svg";
import "./Header.css";

export default function Header() {
  const [language, setLanguage] = useState("spanish");
  const [showNavbar, setShowNavBar] = useState(true);
  const { sentences, switchLanguage } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    setShowNavBar(location.pathname === "/");
  }, [location.pathname]);

  const toggleLanguageButton = () => {
    const nextLanguage = language === "spanish" ? "english" : "spanish";
    setLanguage(nextLanguage);
    switchLanguage(nextLanguage);
  };

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <h1
        className="flex-1 font-poppins font-semibold ss:text-[50px]
                   text-[42px] ss:leading-[100px] ml-5"
      >
        <span className="text-gradient">
          <img className="signature" src={signature} alt="signature" />
        </span>
      </h1>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1 mr-10">
        {showNavbar &&
          sentences.navBar.map((item, index) => (
            <li
              key={index}
              className="font-poppins font-normal cursor-pointer text-[14px] mr-3"
            >
              <a href={item.href} className="hover-style_v2 hover-style_v2--normal">
                {item.name}
              </a>
            </li>
          ))}
      </ul>

      <div
        className="language-switcher mr-2"
        onClick={toggleLanguageButton}
        role="button"
        aria-label="Switch language"
        aria-pressed={language === "english"}
      >
        <span
          className={`language-switcher__label ${
            language === "spanish" ? "language-switcher__label--active" : ""
          }`}
        >
          SP
        </span>

        <div className={`language-toggle ${language === "english" ? "is-english" : ""}`}>
          <div className="language-toggle__track">
            <div className="language-toggle__thumb">
              <img
                src={language === "spanish" ? spanish : english}
                alt={language === "spanish" ? "Spanish" : "English"}
                className="language-toggle__flag"
              />
            </div>
          </div>
        </div>

        <span
          className={`language-switcher__label ${
            language === "english" ? "language-switcher__label--active" : ""
          }`}
        >
          EN
        </span>
      </div>
    </nav>
  );
}