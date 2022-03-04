const selectionSort = (array: number[]) => {
  const swap = (array: number[], idx1: number, idx2: number) => {
    [array[idx1], array[idx2]] = [array[idx2], array[idx1]];
  };
  for (let i = 0; i < array.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[lowest]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(array, i, lowest);
  }

  return array;
};

console.log(selectionSort([1, 5, 3, 2, 4]));
