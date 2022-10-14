import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import FormInput from "./component/FormInput";
import TodoList from "./component/ToDoList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todo: [
        { id: 1, title: "Sholat" },
        { id: 2, title: "Belajar Pagi" },
        { id: 3, title: "Sarapan" },
        { id: 4, title: "Berangkat Kantor" },
      ],
      input: "",
    };
  }
  FormInputOnType = (event) => {
    this.setState({ input: event.target.value });
  };
  FormInputOnClick = (event) => {
    this.setState({ input: "" });
  };
  ButtonDelete = (id) => {
    this.setState({
      todo: this.state.todo.filter((item) => {
        return item.id !== id;
      }),
    });
  };
  ButtonAdd = (event) => {
    const id = this.state.todo.length;
    const newData = {
      id: id + 1,
      title: event,
    };
    this.setState({ todo: [...this.state.todo, newData] });
    this.setState({ input: "" });
  };

  render() {
    return (
      <div className="app">
        <div className="logo">
          <img src={logo} alt="Logo"></img>
          <h3>Task List</h3>
          <div className="todo">
            <TodoList todo={this.state.todo} del={this.ButtonDelete} />
          </div>
          <div className="forminput">
            <FormInput
              input={this.state.input}
              onclick={this.FormInputOnClick}
              searchChange={this.FormInputOnType}
              add={this.ButtonAdd}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
