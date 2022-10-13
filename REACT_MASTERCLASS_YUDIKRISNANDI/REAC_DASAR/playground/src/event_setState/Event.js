import React, { Component } from "react";

class EventButton extends Component {
  state = {
    nama: "RUBAH AKU!!!",
    text: "",
  };
  change = (event) => {
    this.setState({ text: event.target.value });
  };
  klik = () => {
    this.setState({ nama: this.state.text });
    this.setState({ text: "" });
  };
  render() {
    return (
      <div>
        <h1>Event</h1>
        <h3>{this.state.nama}</h3>
        <input
          type="text"
          value={this.state.text}
          onChange={this.change}
        ></input>
        <button onClick={this.klik}>Klik disini</button>
      </div>
    );
  }
}

export default EventButton;
