import React from "react";
import styles from "./Button.module.css";

function Button({ onBtnClick }) {
  return (
    <button type="button" className={styles.Button} onClick={onBtnClick}>
      Load more
    </button>
  );
}

export default Button;
