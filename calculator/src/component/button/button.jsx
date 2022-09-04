import React from "react";
import styles from "./button.module.css";
const Button = ({ name, colorType, onClick }) => {
  const color = colorType === "number" ? styles.number : styles.operator;
  return (
    <button className={`${styles.button} ${color}`} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
