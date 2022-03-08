var pivot = function (arr, start, end) {
    if (start === void 0) { start = 0; }
    if (end === void 0) { end = arr.length + 1; }
    var swap = function (arr, idx1, idx2) {
        var _a;
        _a = [arr[idx2], arr[idx1]], arr[idx1] = _a[0], arr[idx2] = _a[1];
    };
    var pivot = arr[start];
    var swapIdx = start;
    for (var i = start + 1; i < end; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
};
console.log(pivot([3, 8, 2, 1, 5, 7, 6, 4]));
