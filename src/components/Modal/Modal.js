import React, { Component } from "react";
import styles from "./Modal.module.css";

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.onClose();
    }
  };

  render() {
    return (
      <div className={styles.Overlay}>
        <div className={styles.Modal}>{this.props.children}</div>
      </div>
    );
  }
}
