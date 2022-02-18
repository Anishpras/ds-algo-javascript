var powerRecursive = function (num, power) {
    if (power === 0)
        return 1;
    return num * powerRecursive(num, power - 1);
};
console.log(powerRecursive(2, 3));
