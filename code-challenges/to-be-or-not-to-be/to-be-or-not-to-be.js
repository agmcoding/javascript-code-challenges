function expect(firstValue) {
  return {
    // Object method shorthand, ES6 syntax -> eslint.org/docs/latest/rules/object-shorthand
    toBe(secondValue) {
      if (firstValue === secondValue) return true;
      else {
        throw new Error("Not Equal");
      }
    },
    // Object method shorthand, ES6 syntax -> eslint.org/docs/latest/rules/object-shorthand
    notToBe(secondValue) {
      if (firstValue !== secondValue) return true;
      else {
        throw new Error("Equal");
      }
    }
  };
}

expect(5).toBe(5);
expect(5).notToBe(null);
expect(5).toBe(null);
