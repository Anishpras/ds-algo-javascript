var MaxBinaryHeap = /** @class */ (function () {
    function MaxBinaryHeap() {
        this.values = [];
    }
    MaxBinaryHeap.prototype.insert = function (element) {
        this.values.push(element);
        this.bubbleUp();
    };
    MaxBinaryHeap.prototype.bubbleUp = function () {
        var index = this.values.length - 1;
        var element = this.values[index];
        while (index > 0) {
            var parentIndex = Math.floor((index - 1) / 2);
            var parent_1 = this.values[parentIndex];
            if (element <= parent_1)
                break;
            this.values[parentIndex] = element;
            this.values[index] = parent_1;
            index = parentIndex;
        }
    };
    return MaxBinaryHeap;
}());
