const someRecursive = (arr: number[] | string[], callback: Function) => {
  if (arr.length === 0) return false;
  if (callback(arr[0])) return true;
  return someRecursive(arr.splice(1), callback);
};
