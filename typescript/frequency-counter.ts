const frequencyCounter = (arrayNumberOne, arrayNumberTwo) => {
  if (arrayNumberOne.length !== arrayNumberTwo.length) return false;

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arrayNumberOne) {
    frequencyCounter1[val] = ++frequencyCounter1[val] || 1;
  }

  for (let val of arrayNumberTwo) {
    frequencyCounter2[val] = ++frequencyCounter2[val] || 1;
  }

  console.log(frequencyCounter1);
  console.log(frequencyCounter2);

  for (let key in frequencyCounter1) {
    //@ts-ignore
    if (!(key ** 2 in frequencyCounter2)) {
      console.log("Here it not matched");
      return false;
    }
    //@ts-ignore
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      console.log("Hey, not matched here.");
      return false;
    }
  }
  return true;
};

console.log(frequencyCounter([2, 3, 4, 5], [9, 25, 19, 4]));

// function same(arr1, arr2) {
//   if (arr1.length !== arr2.length) {
//     return false;
//   }
//   let frequencyCounter1 = {};
//   let frequencyCounter2 = {};
//   for (let val of arr1) {
//     frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
//   }
//   for (let val of arr2) {
//     frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
//   }
//   console.log(frequencyCounter1);
//   console.log(frequencyCounter2);
//   for (let key in frequencyCounter1) {
//     if (!(key ** 2 in frequencyCounter2)) {
//       return false;
//     }
//     if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(same([2, 3, 4, 5], [9, 25, 16, 4]));
// // same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11]);
