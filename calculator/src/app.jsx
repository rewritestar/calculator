import { useState } from "react";
import styles from "./app.module.css";
import NumberButton from "./component/number_button/number_button";
import OperatorButton from "./component/operator_button/operator_button";

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
        <input readOnly className={styles.show} type="text" value={input} />
        <section className={styles.buttons}>
          <div className={styles.buttons_container}>
            <OperatorButton name="C" onClick={onReset} />
            <OperatorButton name="<=" />
            <OperatorButton name="%" />
            <OperatorButton name="/" />
          </div>
          <div className={styles.buttons_container}>
            <NumberButton name="7" onClick={onNumberClick} />
            <NumberButton name="8" onClick={onNumberClick} />
            <NumberButton name="9" onClick={onNumberClick} />
            <OperatorButton name="x" />
          </div>
          <div className={styles.buttons_container}>
            <NumberButton name="4" onClick={onNumberClick} />
            <NumberButton name="5" onClick={onNumberClick} />
            <NumberButton name="6" onClick={onNumberClick} />
            <OperatorButton name="-" />
          </div>
          <div className={styles.buttons_container}>
            <NumberButton name="1" onClick={onNumberClick} />
            <NumberButton name="2" onClick={onNumberClick} />
            <NumberButton name="3" onClick={onNumberClick} />
            <OperatorButton name="+" />
          </div>
          <div className={styles.buttons_container}>
            <OperatorButton name="(" />
            <NumberButton name="0" onClick={onNumberClick} />
            <OperatorButton name=")" />
            <OperatorButton name="=" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
