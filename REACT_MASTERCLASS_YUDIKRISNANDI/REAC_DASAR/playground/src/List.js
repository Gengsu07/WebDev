import React from "react";

const List = ({ penonton }) => {
  return (
    <div>
      <h1>ini dari Component List dengan Functional expresion</h1>
      <h2>Nama:{penonton.nama}</h2>
      <h2>Club:{penonton.club}</h2>
    </div>
  );
};

export default List;
