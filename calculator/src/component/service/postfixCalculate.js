import Stack from "./stack";

class PostfixCalculate {
  constructor(input) {
    this.infix = input;
  }

  stringToArr(infixString) {
    //오류가 많음
    //1. (3+4)x(4+3) 에서 괄호 연속이 안됨.
    //2. 괄호가 있기에 코드를 좀 더 추상화해야 함.
    const arr = [];
    let num = "";
    let idx = 0;
    while (idx < infixString.length) {
      if (
        infixString[idx] === "+" ||
        infixString[idx] === "-" ||
        infixString[idx] === "x" ||
        infixString[idx] === "/" ||
        infixString[idx] === "(" ||
        infixString[idx] === ")"
      ) {
        num && arr.push(num);
        arr.push(infixString[idx]);
        idx++;
        num = "";
      } else {
        num += infixString[idx];
        idx++;
      }
    }

    num && arr.push(num);
    num = "";
    console.log(arr);
    return arr;
  }

  infixToPostfix() {
    const infixArr = this.stringToArr(this.infix);
    const stack = new Stack();
    const postfix = [];
    //input을 잘 나눠서 배열로 넣는 다른 방법이 필요함.
    infixArr.forEach((element) => {
      console.log(`element ${element}`);
      if (element === "(") {
        stack.push(element);
      } else if (element === ")") {
        while (stack.getLength() !== 0 && stack.peek() !== "(") {
          console.log(`peek ${stack.peek()}`);
          console.log(`stack length ${stack.getLength()}`);
          postfix.push(stack.pop());
          console.log(`postfix ${postfix}`);
        }
        stack.pop();
      } else if (element === "/" || element === "x") {
        //높은 우선순위 연산자인 경우
        //스택이 비어있을 경우
        if (stack.getLength() === 0) {
          stack.push(element);
          //스택이 있을 경우
        } else {
          let peek = stack.peek();
          //현재보다 높은 우선순위 연산자인 경우
          while ((stack.peek() !== "(" && peek === "/") || peek === "x") {
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
          while (stack.getLength() !== 0 && stack.peek() !== "(") {
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
    console.log(postfix);
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
          default:
            console.log("switch default 출력되면 안될텐데..");
        }
      } else {
        stack.push(element);
      }
    });
    return stack.pop();
  }
}

export default PostfixCalculate;
