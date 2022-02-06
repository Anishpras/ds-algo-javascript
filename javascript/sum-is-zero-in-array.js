var sumZero = function (array) {
    var left = 0;
    var right = array.length - 1;
    while (left < right) {
        var sum = array[left] + array[right];
        if (sum === 0) {
            return [array[left], array[right]];
        }
        else if (sum > 0) {
            right--;
        }
        else {
            left++;
        }
    }
    return "No two numbers add up to zero";
};
console.log(sumZero([-4, -3, -2, -1, 0, 5, 10]));
