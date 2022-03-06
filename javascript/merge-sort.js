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
console.log(merge([1, 3, 5, 8], [2, 7, 8, 9, 10]));
