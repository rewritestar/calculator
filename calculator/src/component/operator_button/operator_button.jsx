import React from "react";
import styles from "./operator_button.module.css";
const OperatorButton = ({ name, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    {name}
  </button>
);

export default OperatorButton;
