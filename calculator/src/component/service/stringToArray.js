class StringToArray {
  constructor(string) {
    this.infixString = string;
  }
  stringToArr() {
    const arr = [];
    let num = "";
    let idx = 0;
    while (idx < this.infixString.length) {
      if (
        this.infixString[idx] === "+" ||
        this.infixString[idx] === "-" ||
        this.infixString[idx] === "x" ||
        this.infixString[idx] === "/" ||
        this.infixString[idx] === "%"
      ) {
        arr.push(num);
        arr.push(this.infixString[idx]);
        idx++;
        num = "";
        continue;
      } else {
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
