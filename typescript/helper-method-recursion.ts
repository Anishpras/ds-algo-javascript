const collectOddValues = (arr: number[]) => {
  let result = [];
  const helper = (helperInput: number[]) => {
    if (helperInput.length === 0) return;

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  };
  helper(arr);

  return result;
};

console.log(collectOddValues([4, 4, 2, 3, 1, 5, 7, 8, 9]));

function collectOddValuesPureRecursion(arr){
    let newArr = [];
    
    if(arr.length === 0) {
        return newArr;
    }
        
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0]);
    }
        
    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}