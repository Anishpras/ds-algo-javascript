const countUniqueValues = (array) => {
  let firstPointerIndex = 0;
  let secondPointerIndex = 1;

  for (value in array) {
    if (array[firstPointerIndex] === array[secondPointerIndex]) {
      secondPointerIndex++;
    } else if (array[firstPointerIndex] !== array[secondPointerIndex]) {
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

console.log(countUniqueValues([1, 1, 1, 1, 1, 2, 5, 5]));
