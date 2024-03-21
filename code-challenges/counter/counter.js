function createCounter(num) {
  return function counter() {
    return num++;
  };
}

const counter = createCounter(10);
counter();
counter();
counter();
