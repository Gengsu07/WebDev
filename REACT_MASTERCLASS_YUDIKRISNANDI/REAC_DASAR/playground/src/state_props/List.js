import React from "react";

const List = ({ penonton }) => {
  return (
    <div>
      <h1>ini dari Component List dengan Functional expresion</h1>
      <h3>Nama:{penonton.nama}</h3>
      <h3>Club:{penonton.club}</h3>
    </div>
  );
};

export default List;
