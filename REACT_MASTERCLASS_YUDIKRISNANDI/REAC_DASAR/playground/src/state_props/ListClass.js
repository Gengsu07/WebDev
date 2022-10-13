import React, { Component } from "react";

class ListClass extends Component {
  render() {
    return (
      <div>
        <h1>ini dari Component ListClass dengan class</h1>
        <h3>Nama:{this.props.objekprops.nama}</h3>
        <h3>Club:{this.props.objekprops.club}</h3>
      </div>
    );
  }
}
export default ListClass;
