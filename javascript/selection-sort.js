var selectionSort = function (array) {
    var swap = function (array, idx1, idx2) {
        var _a;
        _a = [array[idx2], array[idx1]], array[idx1] = _a[0], array[idx2] = _a[1];
    };
    for (var i = 0; i < array.length; i++) {
        var lowest = i;
        for (var j = i + 1; j < array.length; j++) {
            if (array[j] < array[lowest]) {
                lowest = j;
            }
        }
        if (i !== lowest)
            swap(array, i, lowest);
    }
    return array;
};
console.log(selectionSort([1, 5, 3, 2, 4]));
