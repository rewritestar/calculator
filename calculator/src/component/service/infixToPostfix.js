import Stack from "./stack";
import StringToArray from "./stringToArray";
class InfixToPostfix {
  constructor(input) {
    this.infix = input;
  }

  calculation() {
    const sta = new StringToArray(this.infix);
    const infixArr = sta.stringToArr();

    const stack = new Stack();
    const postfix = [];

    //input을 잘 나눠서 배열로 넣는 다른 방법이 필요함.
    infixArr.forEach((element) => {
      //높은 우선순위 연산자인 경우
      if (element === "/" || element === "x" || element === "%") {
        //스택이 비어있을 경우
        if (stack.getLength() === 0) {
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
        if (stack.getLength() === 0) {
          stack.push(element);
        } else {
          //현재보다 높은 우선순위 연산자인 경우
          while (stack.getLength() !== 0) {
            postfix.push(stack.pop());
          }
          stack.push(element);
        }
        //문자열인 경우
      } else {
        postfix.push(element);
      }
    });
    postfix.push(stack.pop());
    return postfix;
  }
}

export default InfixToPostfix;
