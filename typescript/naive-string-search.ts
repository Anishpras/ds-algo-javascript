const naiveSearch = (string: string, toSearch: string) => {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < toSearch.length; j++) {
      if (toSearch[j] !== string[i+j]) break;
      if (j === toSearch.length - 1) count++;
    }
  }

  return count;
};

console.log(naiveSearch("hello worldworld", "world"));
