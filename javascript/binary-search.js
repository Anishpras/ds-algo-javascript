function binarySearch(arr, val) {
    // add whatever parameters you deem necessary - good luck!
    var left = 0;
    var right = arr.length - 1;
    var middle = (left + right) / 2;
    while (left < right) {
        if (arr[middle] === val)
            return middle;
        if (arr[middle] < val) {
            left = middle;
            middle = (left + right) / 2;
        }
        right = middle;
        middle = (left + right) / 2;
    }
    return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5], 5));
