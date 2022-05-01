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
    MaxBinaryHeap.prototype.extractMax = function () {
        var max = this.values[0];
        var end = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    };
    MaxBinaryHeap.prototype.sinkDown = function () {
        var index = 0;
        var length = this.values.length;
        var element = this.values[0];
        while (true) {
            var leftChildIndex = 2 * index + 1;
            var rightChildIndex = 2 * index + 2;
            var leftChild = void 0, rightChild = void 0;
            var swap = null;
            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if (leftChild > element) {
                    swap = leftChildIndex;
                }
            }
            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if ((swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)) {
                    swap = rightChildIndex;
                }
            }
            if (swap === null)
                break;
            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    };
    return MaxBinaryHeap;
}());
