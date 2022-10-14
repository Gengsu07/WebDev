import React, { Component } from "react";
import "../style/Button.css";

const Button = ({ text, varian, action }) => {
  return (
    <div>
      <button className={`btn btn-${varian}`} type="button" onClick={action}>
        {text}
      </button>
    </div>
  );
};
export default Button;
