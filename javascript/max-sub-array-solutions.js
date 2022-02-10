function maxSubarraySum(arr, num) {
    if (arr.length < num)
        return null;
    var total = 0;
    for (var i = 0; i < num; i++) {
        total += arr[i];
    }
    var currentTotal = total;
    for (var i = num; i < arr.length; i++) {
        currentTotal += arr[i] - arr[i - num];
        total = Math.max(total, currentTotal);
    }
    return total;
}
