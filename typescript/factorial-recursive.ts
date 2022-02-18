const factorialRecursive = (num: number) => {
  if (num === 0) return 1;

  return num * factorialRecursive(num - 1);
};

console.log(factorialRecursive(5));
