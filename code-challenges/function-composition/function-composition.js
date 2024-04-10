function compose(functions) {
  return function fn(x) {
    if (functions.length === 0) {
      return x;
    }

    let result = x;

    for (let index = (functions.length - 1); index >= 0; index--) {
      result = functions[index](result);
    }
    return result;
  }
}

let functions;
let x;
let fn;
let result;


functions = [x => x + 1, x => x * x, x => 2 * x];
x = 4;

fn = compose(functions);
result = fn(x);


functions = [x => 10 * x, x => 10 * x, x => 10 * x];
x = 1;

fn = compose(functions);
result = fn(x)


functions = [];
x = 42;

fn = compose(functions);
result = fn(x);
