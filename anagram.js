const anagramChecker = (stringOne, stringTwo) => {
  if (stringOne.length !== stringTwo.length) return false;
  let firstStringObject = {};
  let secondStringObject = {};

  for (let char of stringOne) {
    firstStringObject[char] = ++firstStringObject[char] || 1;
  }

  for (let char of stringTwo) {
    secondStringObject[char] = ++secondStringObject[char] || 1;
  }

  for (key in firstStringObject) {
    if (!(key in secondStringObject)) {
      return false;
    }
    if (firstStringObject[key] !== secondStringObject[key]) {
      return false;
    }
  }
  return true;
};

console.log(anagramChecker(" ", "hg"));
