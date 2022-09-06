import Stack from "./stack";

class Postfix {
  constructor(input) {
    this.infix = input;
  }
  calculation() {
    const stack = new Stack();
    const postfix = [];
    console.log(this.infix);
    const arr = this.infix.split("x|/|%|+|-");

    console.log(`origin ${arr}`);
    arr.forEach((element) => {
      console.log(`element ${element}`);
      //높은 우선순위 연산자인 경우
      if (element === "/" || element === "x" || element === "%") {
        //스택이 비어있을 경우
        if (stack.length === 0) {
          stack.push(element);
          //스택이 있을 경우
        } else {
          let peek = stack.peek();
          //현재보다 높은 우선순위 연산자인 경우
          while (peek === "/" || peek === "x" || peek === "%") {
            postfix.push(stack.pop());
            peek = stack.peek();
          }
          stack.push(element);
        }
        //낮은 우선순위 연산자인 경우
      } else if (element === "-" || element === "+") {
        //스택이 비어있을 경우
        if (stack.length === 0) {
          stack.push(element);
        } else {
          //현재보다 높은 우선순위 연산자인 경우
          while (stack.length === 0) {
            postfix.push(stack.pop());
          }
          stack.push(element);
        }
        //문자열인 경우
      } else {
        postfix.push(element);
      }
    });
    console.log(`convert ${postfix}`);
  }
}

export default Postfix;
