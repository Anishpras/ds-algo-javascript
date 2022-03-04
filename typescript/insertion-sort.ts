const insertionSort = (array: number[]) => {
  for (let i = 1; i < array.length; i++) {
    let currentVal = array[i];
    let j;
    for (j = i - 1; j >= 0 && array[j] > currentVal; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = currentVal;
  }

  return array;
};
console.log(insertionSort([1, 5, 3, 2, 4]));
