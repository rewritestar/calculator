import React from "react";
import styles from "./number_button.module.css";
const NumberButton = ({ name, onClick }) => (
  <button className={styles.button} onClick={onClick}>
    {name}
  </button>
);

export default NumberButton;
