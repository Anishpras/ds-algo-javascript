var factorialRecursive = function (num) {
    if (num === 0)
        return 1;
    return num * factorialRecursive(num - 1);
};
console.log(factorialRecursive(5));
// Solution 
function factorial(x) {
    if (x < 0)
        return 0;
    if (x <= 1)
        return 1;
    return x * factorial(x - 1);
}
