var productOfArray = function (array) {
    var result = 1;
    var helper = function (arr) {
        if (arr.length === 0)
            return;
        result *= arr[0];
        helper(arr.slice(1));
    };
    helper(array);
    return result;
};
console.log(productOfArray([1, 2, 3, 4, 5]));
