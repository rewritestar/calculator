import { useRef, useState } from "react";
import styles from "./app.module.css";
import Button from "./component/button/button";
import PostfixCalculate from "./component/service/postfixCalculate";

function App() {
  const [input, setInput] = useState("");
  let reset = useRef(false);
  const onNumberClick = (e) => {
    if (reset.current) {
      const newInput = e.target.innerText;
      setInput(newInput);
      reset.current = false;
      return;
    }
    const number = e.target.innerText;
    const newInput = input + number;
    setInput(newInput);
  };
  const onResetClick = (e) => {
    setInput("");
  };
  const onDeleteClick = (e) => {
    const newInput = input.slice(0, -1);
    setInput(newInput);
  };
  const onOperatorClick = (e) => {
    const operator = e.target.innerText;
    //연산 결과값에다 바로 연산을 실행시킬 때를 대비.
    if (reset.current) {
      const newInput = input + operator;
      setInput(newInput);
      reset.current = false;
      return;
    }

    const prev = input.slice(-1);
    //연산자가 중첩되지 않도록 만듦
    if (
      prev === "/" ||
      prev === "x" ||
      prev === "-" ||
      prev === "+" ||
      prev === "%"
    ) {
      return;
    }
    const newInput = input + operator;
    setInput(newInput);
  };
  const onEqualClick = (e) => {
    if (reset.current) {
      return;
    }
    const prev = input.slice(-1);
    if (
      prev === "/" ||
      prev === "x" ||
      prev === "-" ||
      prev === "+" ||
      prev === "%"
    ) {
      alert("완성되지 않은 수식입니다.");
      return;
    }
    const postfixCalculate = new PostfixCalculate(input);
    setInput(postfixCalculate.calculation());
    reset.current = true;
  };
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <input className={styles.show} type="text" defaultValue={input} />
        <section className={styles.buttons}>
          <div className={styles.buttons_container}>
            <Button name="C" colorType="operator" onClick={onResetClick} />
            <Button name="<=" colorType="operator" onClick={onDeleteClick} />
            <Button name="🦄" colorType="operator" />
            <Button name="/" colorType="operator" onClick={onOperatorClick} />
          </div>
          <div className={styles.buttons_container}>
            <Button name="7" colorType="number" onClick={onNumberClick} />
            <Button name="8" colorType="number" onClick={onNumberClick} />
            <Button name="9" colorType="number" onClick={onNumberClick} />
            <Button name="x" colorType="operator" onClick={onOperatorClick} />
          </div>
          <div className={styles.buttons_container}>
            <Button name="4" colorType="number" onClick={onNumberClick} />
            <Button name="5" colorType="number" onClick={onNumberClick} />
            <Button name="6" colorType="number" onClick={onNumberClick} />
            <Button name="-" colorType="operator" onClick={onOperatorClick} />
          </div>
          <div className={styles.buttons_container}>
            <Button name="1" colorType="number" onClick={onNumberClick} />
            <Button name="2" colorType="number" onClick={onNumberClick} />
            <Button name="3" colorType="number" onClick={onNumberClick} />
            <Button name="+" colorType="operator" onClick={onOperatorClick} />
          </div>
          <div className={styles.buttons_container}>
            <Button name="(" colorType="operator" onClick={onOperatorClick} />
            <Button name="0" colorType="number" onClick={onNumberClick} />
            <Button name=")" colorType="operator" onClick={onOperatorClick} />
            <Button name="=" colorType="operator" onClick={onEqualClick} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
