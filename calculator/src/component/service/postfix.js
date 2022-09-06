import Stack from "./stack";

class Postfix {
  constructor(input) {
    this.infix = input;
  }
  stringToArr() {
    const arr = [];
    let num = "";
    let idx = 0;
    console.log(`원본 문자열 ${this.infix}`);
    while (idx < this.infix.length) {
      console.log(this.infix[idx]);
      if (
        this.infix[idx] === "+" ||
        this.infix[idx] === "-" ||
        this.infix[idx] === "x" ||
        this.infix[idx] === "/" ||
        this.infix[idx] === "%"
      ) {
        console.log("연산자");
        arr.push(num);
        arr.push(this.infix[idx]);
        idx++;
        num = "";
        continue;
      } else {
        console.log("피연산자");
        num += this.infix[idx];
        idx++;
      }
    }
    arr.push(num);
    num = "";
    console.log(arr);
  }

  calculation() {
    //console.log(`원본 문자열 ${this.infix}`);
    /*
    const stack = new Stack();
    const postfix = [];
    console.log(this.infix);
    //연산자가 사라지는 문제가 발생
    //input을 잘 나눠서 배열로 넣는 다른 방법이 필요함.
    const arr = this.infix.split(/x|\/|%|\+|-/);
    console.log(arr);
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
    }
    );
    console.log(`convert ${postfix}`);
    */
  }
}

export default Postfix;
