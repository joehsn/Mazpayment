import React from "react";
import ReactDOM from "react-dom/client";
import Navigator from "./Navigator";
import reportWebVitals from "./reportWebVitals";

const APP = document.getElementById("app");

const root = ReactDOM.createRoot(APP);
root.render(
  <React.StrictMode>
    <Navigator />
  </React.StrictMode>
);

reportWebVitals();
