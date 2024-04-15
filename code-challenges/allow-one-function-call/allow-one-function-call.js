function once(fn) {
  let alreadyCalled = false;

  return function onceFn(...args) {
    if (alreadyCalled) {
      return undefined;
    } else if (!alreadyCalled) {
      alreadyCalled = true;
      return fn(...args);
    }
  };
}

let fn;
let onceFn;
let result;

fn = (a, b, c) => (a + b + c);
onceFn = once(fn);
result = onceFn(1, 2, 3);

result = onceFn(2, 3, 6);


fn = (a, b, c) => (a * b * c);
onceFn = once(fn);
result = onceFn(5, 7, 4);

result = onceFn(2, 3, 6);

result = onceFn(4, 6, 8);
