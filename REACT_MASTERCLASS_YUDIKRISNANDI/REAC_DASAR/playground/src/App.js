import logo from "./logo.svg";
import React, { Component } from "react";
import List from "./List";
import ListClass from "./ListClass";

class App extends Component {
  constructor() {
    super();
    this.state = {
      penonton: {
        id: 1,
        vip: false,
        nama: "Maniac",
        club: "NeverLose",
        level: ["low", "medium", "hight"],
      },
    };
  }
  pesan = () => {
    return <h1>hehehe</h1>;
  };
  render() {
    return (
      <div>
        <List penonton={this.state.penonton} />
        <ListClass objekprops={this.state.penonton}>ini children</ListClass>
      </div>
    );
  }
}

export default App;
