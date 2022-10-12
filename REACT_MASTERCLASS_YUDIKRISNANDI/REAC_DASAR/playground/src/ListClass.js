import React, { Component } from "react";

class ListClass extends Component {
  render() {
    return (
      <div>
        <h1>ini dari Component ListClass dengan class</h1>
        <h2>Nama:{this.props.objekprops.nama}</h2>
        <h2>Club:{this.props.objekprops.club}</h2>
      </div>
    );
  }
}
export default ListClass;
