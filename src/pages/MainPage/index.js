import React from "react";
import "./index.css";

export default function MainPage() {
  return (
    <div className="root">
      <h1>React i18n practice</h1>
      <h2>"Hello world!"</h2>

      <div className="buttonContainer">
        <button>English</button>
        <button>Korean</button>
        <button>Japanese</button>
        <button>Chinese</button>
      </div>
    </div>
  );
}
