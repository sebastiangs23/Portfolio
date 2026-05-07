import { createContext, useContext, useState } from "react";
import { sentences } from "../../utils/utils";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("spanish");

  function switchLanguage(lang) {
    setLanguage(lang);
  }

  return (
    <LanguageContext.Provider
      value={{ language, switchLanguage, sentences: sentences[language] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
