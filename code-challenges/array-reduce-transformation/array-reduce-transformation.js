function reduce(nums, fn, init) {
  if (nums.length === 0) {
    return init;
  }

  let accum = init;

  for (let index = 0; index < nums.length; index++) {
    accum = fn(accum, nums[index]);
  }
  return accum;
}

let nums;
let fn;
let init;
let result;

nums = [1, 2, 3, 4];
fn = function sum(accum, curr) {
  return accum + curr;
};
init = 0;

result = reduce(nums, fn, init);


nums = [1, 2, 3, 4];
fn = function sum(accum, curr) {
  return accum + (curr * curr);
};
init = 100;

result = reduce(nums, fn, init);


nums = [];
fn = function sum(accum, curr) {
  return 0;
};
init = 25;

result = reduce(nums, fn, init);

