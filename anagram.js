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

  for (let key in firstStringObject) {
    if (!(key in secondStringObject)) {
      return false;
    }
    if (firstStringObject[key] !== secondStringObject[key]) {
      return false;
    }
  }
  return true;
};

// console.log(anagramChecker("gh", "hg"));

const validAnagram = (stringOne, stringTwo) => {
  if (stringOne.length !== stringTwo.length) return false;

  let lookup = {};

  for (let charIndex in stringOne) {
    letter = stringOne[charIndex];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let charIndex in stringTwo) {
    letter = stringTwo[charIndex];
    if (!lookup[letter]) return false;
    lookup[letter] -= 1;
  }
  return true;
};

console.log(validAnagram("ghr", "hgr"));
