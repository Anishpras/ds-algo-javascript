const merge = (array1, array2) => {
  let final = [];
  let i = 0,
    j = 0;
  while (i < array1.length && j < array2.length) {
    if (array1[i] >= array2[j]) {
      final.push(array2[j]);
      j++;
    } else {
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

const mergeSort = (array) => {
  if (array.length <= 1) {
    return array;
  }
  let mid = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, mid));
  let right = mergeSort(array.slice(mid));
  return merge(left, right);
};

console.log(mergeSort([1, 3, 5, 8, 34, 56, 78, 22, 3, 4, 7, 99]));
