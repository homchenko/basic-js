const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let discardNext = "--discard-next";
  let discardPrev = "--discard-prev";
  let doubleNext = "--double-next";
  let doublePrev = "--double-prev";
  let newArr = [];

  if (Array.isArray(arr)) 
  try {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == discardNext) {
        i+=2;
      } else if (arr[i] == discardPrev) {
        newArr.pop();
      } else if (arr[i] == doubleNext && i == arr.length-1){
        break;
      } else if (arr[i] == doubleNext) {
        newArr.push(arr[i + 1]);
      } else if (arr[i] == doublePrev && i != 0) {
        newArr.push(arr[i - 1]);
      } else if(arr[i] == doublePrev && i == 0){
        continue;
      } else {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  } catch {
    //return err.message;
  }
};
