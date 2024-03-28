function map(arr, fn) {
  const newArray = [];

  for(let index = 0; index < arr.length; index++) {
    newArray[index] = fn(arr[index], index);
  }

  return newArray;
}


let arr;
let fn;
let newArray;


arr = [1, 2, 3];
fn = function plusOne(n) {
  return n + 1;
};
newArray = map(arr, fn);


arr = [1, 2, 3];
fn = function plusI(n, i) {
  return n + i;
};
newArray = map(arr, fn);


arr = [10, 20, 30]
fn = function constant() {
  return 42;
};
newArray = map(arr, fn);

