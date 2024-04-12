function argumentsLength(...args) {
  return args.length;
}

let result;

result = argumentsLength(5);


result = argumentsLength({}, null, "3");
