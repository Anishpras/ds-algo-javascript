var FactorialRecursive = function (number) {
    if (number === 1)
        return 1;
    return number * FactorialRecursive(number - 1);
};
console.log(FactorialRecursive(4));
