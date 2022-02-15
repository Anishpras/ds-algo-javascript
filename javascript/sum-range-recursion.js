var sumRange = function (number) {
    if (number === 1)
        return 1;
    return number + sumRange(number - 1);
};
console.log(sumRange(4));
