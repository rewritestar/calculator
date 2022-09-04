import { useState } from "react";
import styles from "./app.module.css";
import Button from "./component/button/button";

function App() {
  const [input, setInput] = useState("");
  const onNumberClick = (e) => {
    const number = e.target.innerText;
    let newInput = input;
    newInput += number;
    setInput(newInput);
  };
  const onReset = (e) => {
    setInput("");
  };
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <input className={styles.show} type="text" value={input} />
        <section className={styles.buttons}>
          <div className={styles.buttons_container}>
            <Button name="C" colorType="operator" onClick={onReset} />
            <Button name="<=" colorType="operator" onClick={onReset} />
            <Button name="%" colorType="operator" onClick={onReset} />
            <Button name="/" colorType="operator" onClick={onReset} />
          </div>
          <div className={styles.buttons_container}>
            <Button name="7" colorType="number" onClick={onNumberClick} />
            <Button name="8" colorType="number" onClick={onNumberClick} />
            <Button name="9" colorType="number" onClick={onNumberClick} />
            <Button name="x" colorType="operator" onClick={onReset} />
          </div>
          <div className={styles.buttons_container}>
            <Button name="4" colorType="number" onClick={onNumberClick} />
            <Button name="5" colorType="number" onClick={onNumberClick} />
            <Button name="6" colorType="number" onClick={onNumberClick} />
            <Button name="-" colorType="operator" onClick={onReset} />
          </div>
          <div className={styles.buttons_container}>
            <Button name="1" colorType="number" onClick={onNumberClick} />
            <Button name="2" colorType="number" onClick={onNumberClick} />
            <Button name="3" colorType="number" onClick={onNumberClick} />
            <Button name="+" colorType="operator" onClick={onReset} />
          </div>
          <div className={styles.buttons_container}>
            <Button name="(" colorType="operator" onClick={onReset} />
            <Button name="0" colorType="number" onClick={onNumberClick} />
            <Button name=")" colorType="operator" onClick={onReset} />
            <Button name="=" colorType="operator" onClick={onReset} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
