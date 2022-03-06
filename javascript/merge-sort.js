var merge = function (array1, array2) {
    var final = [];
    var i = 0, j = 0;
    while (i < array1.length && j < array2.length) {
        if (array1[i] >= array2[j]) {
            final.push(array2[j]);
            j++;
        }
        else {
            final.push(array1[i]);
            i++;
        }
    }
    while (i < array1.length) {
        final.push(array1[i]);
        i++;
    }
    while (j < array2.length) {
        final.push(array2[j]);
        j++;
    }
    return final;
};
var mergeSort = function (array) {
    if (array.length <= 1) {
        return array;
    }
    var mid = Math.floor(array.length / 2);
    var left = mergeSort(array.slice(0, mid));
    var right = mergeSort(array.slice(mid));
    return merge(left, right);
};
console.log(mergeSort([1, 3, 5, 8, 34, 56, 78, 22, 3, 4, 7, 99]));
