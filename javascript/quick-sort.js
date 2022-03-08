function pivot(arr, start, end) {
    if (start === void 0) { start = 0; }
    if (end === void 0) { end = arr.length - 1; }
    var swap = function (arr, idx1, idx2) {
        var _a;
        _a = [arr[idx2], arr[idx1]], arr[idx1] = _a[0], arr[idx2] = _a[1];
    };
    // We are assuming the pivot is always the first element
    var pivot = arr[start];
    var swapIdx = start;
    for (var i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);
    return swapIdx;
}
function quickSort(arr, left, right) {
    if (left === void 0) { left = 0; }
    if (right === void 0) { right = arr.length - 1; }
    if (left < right) {
        var pivotIndex = pivot(arr, left, right); //3
        //left
        quickSort(arr, left, pivotIndex - 1);
        //right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}
console.log(quickSort([100, -3, 2, 4, 6, 9, 1, 2, 5, 3, 23]));
// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
//  3,2,1    6,9,5
//      3      6
//  2,1      5  9
//    2
//  1
