class Stack {
  constructor() {
    this.arr = [];
    this.length = 0;
  }
  push(item) {
    this.arr.push(item);
    this.length += 1;
  }
  pop() {
    if (this.length > 0) {
      this.length -= 1;
      return this.arr.pop();
    } else {
      return;
    }
  }
  peek() {
    return this.arr[this.length - 1];
  }
}

export default Stack;
