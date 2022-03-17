import React from "react";
import { useTranslation } from "react-i18next";
import "./index.css";

export default function MainPage() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="root">
      <h1>React i18n practice</h1>
      <h2>{t("helloWorld")}</h2>

      <div className="buttonContainer">
        <button type="button" onClick={() => changeLanguage("en")}>
          English
        </button>
        <button type="button" onClick={() => changeLanguage("ko")}>
          Korean
        </button>
        <button type="button" onClick={() => changeLanguage("ja")}>
          Japanese
        </button>
        <button type="button" onClick={() => changeLanguage("zh")}>
          Chinese
        </button>
      </div>
    </div>
  );
}
