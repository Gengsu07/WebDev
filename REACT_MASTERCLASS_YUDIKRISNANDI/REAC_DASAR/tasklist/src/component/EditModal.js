import React, { Component } from "react";
import Button from "./Button";
import "../style/EditModal.css";

class EditModal extends Component {
  render() {
    return (
      <div className="modal-container">
        <div className="modal-box">
          <h3>Edit Task</h3>
          <div className="boxinput">
            <input className="input" type="text" />
          </div>
          <div className="btn-group">
            <Button text="save" varian="blue" />
            <Button text="cancel" varian="red" />
          </div>
        </div>
      </div>
    );
  }
}

export default EditModal;
