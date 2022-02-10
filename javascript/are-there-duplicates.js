// const areThereDuplicatesFrequencyCounter = () => {
//   let collection = {};
//   for (let val in arguments) {
//     collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
//   }
//   for (let key in collection) {
//     if (collection[key] > 1) return true;
//   }
//   return false;
// };
// const areThereDuplicatesMultiplePointers = (...args) => {
//   args.sort((a, b) => a > b);
//   let start = 0;
//   let next = 1;
//   while (next < args.length) {
//     if (args[start] === args[next]) {
//       return true;
//     }
//     start++;
//     next++;
//   }
//   return false;
// };
// const areThereDuplicatesOneLiner = (...arguments) => {
//   return new Set(arguments).size !== arguments.length;
// };
// console.log(areThereDuplicatesOneLiner(2, 3, 4, 2));
