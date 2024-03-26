
function createCounter(init = 0) {
  let count = init;
  return {
    increment() {
      return ++count;
    },
    decrement() {
      return --count;
    },
    reset() {
      count = init;
      return count;
    }
  };
}

const counter = createCounter(5);
counter.increment();
counter.reset();
counter.decrement();
