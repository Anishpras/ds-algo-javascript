// TODO : Count number of characters in the string.
/*
An alphanumeric string will be passed and we need to count the number of characters in the string.
*/

const countCharacters = (string) => {
  let result = {};
  for (let char of string) {
    char = char.toLowerCase();
    if (isAlphanumeric(char)) {
      result[char] = ++result[char] || 1;
    }
  }
  return result;
};

const isAlphanumeric = (char) => {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
};

countCharacters("Hello There Anish !!");
console.log(countCharacters("Hello There Anish !!"));
