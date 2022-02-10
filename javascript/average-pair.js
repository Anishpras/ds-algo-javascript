var avgPair = function (arr, num) {
    var start = 0;
    var end = arr.length - 1;
    while (start < end) {
        var avg = (arr[start] + arr[end]) / 2;
        if (avg === num) {
            return true;
        }
        else if (avg < num) {
            start++;
        }
        else
            end--;
    }
    return false;
};
