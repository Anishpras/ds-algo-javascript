var reverseRecursion = function (string) {
    if (string.length === 0)
        return string;
    return reverseRecursion(string.slice(1)) + string[0];
};
