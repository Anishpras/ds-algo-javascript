var naiveSearch = function (string, toSearch) {
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        for (var j = 0; j < toSearch.length; j++) {
            if (toSearch[j] !== string[i + j])
                break;
            if (j === toSearch.length - 1)
                count++;
        }
    }
    return count;
};
console.log(naiveSearch("hello worldworld", "world"));
