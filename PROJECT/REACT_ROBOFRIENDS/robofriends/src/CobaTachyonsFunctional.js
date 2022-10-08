import React, { Component } from "react";

const CobaTachyonsFunctional = (props) => {
  return (
    <div className="bg-green tc ba washed-green">
      <h1>
        Ini Dari Aplikasi Kedua <strong>CobaTachyonsFunctional</strong>
      </h1>
      <h2>Latihan pakai Tachyons dan Jadi Functional bukan Class</h2>
      <p>{props.keterangan}</p>
    </div>
  );
};

export default CobaTachyonsFunctional;
