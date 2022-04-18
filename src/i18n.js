import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { locizePlugin } from "locize";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(locizePlugin)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    react: {
      bindI18n: "languageChanged editorSaved",
    },
  });

export default i18n;
