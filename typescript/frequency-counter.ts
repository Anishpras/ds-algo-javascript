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

// console.log(frequencyCounter([2, 3, 4, 5], [9, 25, 19, 4]));

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


function sameFrequency2(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }

  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}

console.log(sameFrequency2(225, 522));
