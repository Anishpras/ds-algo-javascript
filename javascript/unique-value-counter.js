var countUniqueValues = function (array) {
    if (array.length === 0)
        return 0;
    var firstPointerIndex = 0;
    var secondPointerIndex = 1;
    for (var value in array) {
        if (array[firstPointerIndex] === array[secondPointerIndex]) {
            secondPointerIndex++;
        }
        else if (array[firstPointerIndex] !== array[secondPointerIndex]) {
            firstPointerIndex++;
            array[firstPointerIndex] = array[secondPointerIndex];
            secondPointerIndex++;
            //   firstPointerIndex += 1;
            //   array[firstPointerIndex] = array[secondPointerIndex];
            //   secondPointerIndex += 1;
        }
    }
    return firstPointerIndex;
};
// console.log(countUniqueValues([1, 1, 1, 1, 1, 2, 5, 5]));
var countUniqueValuesRefactored = function (array) {
    if (array.length === 0)
        return 0;
    var i = 0;
    for (var j = 1; j < array.length; j++) {
        if (array[i] !== array[j]) {
            i++;
            array[i] = array[j];
        }
    }
    return i + 1;
};
console.log(countUniqueValuesRefactored([1, 1, 1, 1, 1, 2, 5, 5]));
console.log(countUniqueValuesRefactored([]));
