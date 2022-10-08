import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Coba from "./Coba";
import "tachyons";
import CobaTachyonsFunctional from "./CobaTachyonsFunctional";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Coba keterangan={"properties(props) di app=Coba di index.js"} />
    <CobaTachyonsFunctional
      keterangan={"properties(props) di app=CobaTachyonsFunctional di index.js"}
    />

    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
