import React, { Component } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

const Todo = ({ tugas, del }) => {
  const delById = (id) => {
    del(id);
  };

  return (
    <div style={TodoStyle}>
      <p>{tugas.title}</p>
      <div style={ButtonStyle}>
        <Button text="edit" varian="green" />
        <Button text="delete" varian="red" action={() => delById(tugas.id)} />
      </div>
    </div>
  );
};
export default Todo;

// Todo.propTypes = {
//   del: PropTypes.func.isRequired,
// };

const TodoStyle = {
  background: "#218DFD",
  margin: "0.5rem 0",
  color: "#ffff",
  padding: "0 1rem",
  height: "3rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
const ButtonStyle = {
  display: "flex",
  justifyContent: "space-between",
};
