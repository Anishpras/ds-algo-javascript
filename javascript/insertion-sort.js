var insertionSort = function (array) {
    for (var i = 1; i < array.length; i++) {
        var currentVal = array[i];
        var j = void 0;
        for (j = i - 1; j >= 0 && array[j] > currentVal; j--) {
            array[j + 1] = array[j];
        }
        array[j + 1] = currentVal;
    }
    return array;
};
console.log(insertionSort([1, 5, 3, 2, 4]));
