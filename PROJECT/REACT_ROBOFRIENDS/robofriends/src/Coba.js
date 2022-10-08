import React, { Component } from "react";
import "./Coba.css";

class Coba extends React.Component {
  render() {
    return (
      <div className="main">
        <h1 className="blue"> Coba Aplikasi React Pertama</h1>
        <h3> by: Sugeng Wahyudi</h3>
        <p>{this.props.keterangan}</p>
      </div>
    );
  }
}

export default Coba;
