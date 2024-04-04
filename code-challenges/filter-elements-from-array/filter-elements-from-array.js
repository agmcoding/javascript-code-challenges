function filter(arr, fn) {
  let filteredArr = [];
  let result;

  for (let index = 0; index < arr.length; index++) {
    result = fn(arr[index], index);

    if (result) {
      filteredArr.push(arr[index]);
    }
  }
  return filteredArr;
}

let arr;
let fn;
let newArray;

arr = [0, 10, 20, 30];
fn = function greaterThan10(n) {
  return n > 10;
};

newArray = filter(arr, fn);

arr = [1, 2, 3];
fn = function firstIndex(n, i) {
  return i === 0;
};

newArray = filter(arr, fn);

arr = [-2, -1, 0, 1, 2];
fn = function plusOne(n) {
  return n + 1;
};

newArray = filter(arr, fn);
