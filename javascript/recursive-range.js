var recursiveRange = function (num) {
    if (num === 0)
        return 1;
    return num + recursiveRange(num - 1);
};
console.log(recursiveRange(6));
