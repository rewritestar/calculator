class StringToArray {
  constructor(string) {
    this.infixString = string;
  }
  stringToArr() {
    const arr = [];
    let num = "";
    let idx = 0;
    console.log(`원본 문자열 ${this.infixString}`);
    while (idx < this.infixString.length) {
      console.log(this.infixString[idx]);
      if (
        this.infixString[idx] === "+" ||
        this.infixString[idx] === "-" ||
        this.infixString[idx] === "x" ||
        this.infixString[idx] === "/" ||
        this.infixString[idx] === "%"
      ) {
        console.log("연산자");
        arr.push(num);
        arr.push(this.infixString[idx]);
        idx++;
        num = "";
        continue;
      } else {
        console.log("피연산자");
        num += this.infixString[idx];
        idx++;
      }
    }
    arr.push(num);
    num = "";
    return arr;
  }
}

export default StringToArray;
