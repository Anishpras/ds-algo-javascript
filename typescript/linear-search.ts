const linearSearch = (array: number[] | string[], value: number | string) => {
  //   for (let i = 0; i < array.length; i++) {
  //     if (array[i] === value) {
  //       return i;
  //     }
  //   }

  //   return -1;

  for (let item in array) {
    if (array[item] === value) {
      return parseInt(item);
    }
  }
  return -1;
};

console.log(linearSearch([1, 2, 3, 4, 5], 5));
