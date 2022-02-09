var maxSubArraySum = function (array, num) {
    var maxSum = 0;
    var tempSum = 0;
    if (array.length < num)
        return null;
    for (var i = 0; i < num; i++) {
        maxSum += array[i];
    }
    tempSum = maxSum;
    for (var i = num; i < array.length; i++) {
        tempSum = tempSum - array[i - num] + array[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
};
console.log(maxSubArraySum([2, 3, 5, 6, 7, 2, 3, 4], 3));
