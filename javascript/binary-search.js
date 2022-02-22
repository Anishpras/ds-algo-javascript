function binarySearch(arr, val) {
    // add whatever parameters you deem necessary - good luck!
    var left = 0;
    var right = arr.length - 1;
    var middle = Math.floor((left + right) / 2);
    while (arr[middle] !== val) {
        if (val < arr[middle]) {
            right = middle - 1;
            middle = Math.floor((left + right) / 2);
        }
        left = middle + 1;
        middle = Math.floor((left + right) / 2);
    }
    if (arr[middle] === val) {
        return middle;
    }
    return -1;
}
console.log(binarySearch([1, 2, 3, 4, 5], 8));
