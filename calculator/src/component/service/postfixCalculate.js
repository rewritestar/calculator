import Stack from "./stack";

class PostfixCalculate {
  constructor(input) {
    this.infix = input;
  }

  stringToArr(infixString) {
    const arr = [];
    let num = "";
    let idx = 0;
    while (idx < infixString.length) {
      if (
        infixString[idx] === "+" ||
        infixString[idx] === "-" ||
        infixString[idx] === "x" ||
        infixString[idx] === "/"
      ) {
        arr.push(num);
        arr.push(infixString[idx]);
        idx++;
        num = "";
        continue;
      } else {
        num += infixString[idx];
        idx++;
      }
    }
    arr.push(num);
    num = "";
    return arr;
  }
  infixToPostfix() {
    const infixArr = this.stringToArr(this.infix);
    const stack = new Stack();
    const postfix = [];

    //input을 잘 나눠서 배열로 넣는 다른 방법이 필요함.
    infixArr.forEach((element) => {
      //높은 우선순위 연산자인 경우
      if (element === "/" || element === "x") {
        //스택이 비어있을 경우
        if (stack.getLength() === 0) {
          stack.push(element);
          //스택이 있을 경우
        } else {
          let peek = stack.peek();
          //현재보다 높은 우선순위 연산자인 경우
          while (peek === "/" || peek === "x") {
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

    //스택에 쌓인 연산자들 꺼내기
    while (stack.getLength() !== 0) {
      postfix.push(stack.pop());
    }

    return postfix;
  }

  calculation() {
    const postfix = this.infixToPostfix();
    const stack = new Stack();
    postfix.forEach((element) => {
      if (
        element === "/" ||
        element === "x" ||
        element === "-" ||
        element === "+"
      ) {
        const secondNum = parseFloat(stack.pop());
        const firstNum = parseFloat(stack.pop());
        switch (element) {
          case "+":
            stack.push(firstNum + secondNum);
            break;
          case "-":
            stack.push(firstNum - secondNum);
            break;
          case "x":
            stack.push(firstNum * secondNum);
            break;
          case "/":
            stack.push(firstNum / secondNum);
            break;
        }
      } else {
        stack.push(element);
      }
    });
    return stack.pop();
  }
}

export default PostfixCalculate;
