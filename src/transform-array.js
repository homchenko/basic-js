const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let discardNext = '--discard-next';
  let discardPrev = '--discard-prev';
  let doubleNext = '--double-next';
  let doublePrev = '--double-prev';
  let newArr = [];

  for(let i = 0; i < arr.length; i++){
    if(arr[i] == discardNext){
      arr.splise(arr[i+1], 1);
    } else if(arr[i] == discardPrev){
      arr.splise(arr[i-1], 1);
    } else if(arr[i] == doubleNext){
      newArr.push(arr[i+1]);
    } else if(arr[i] == doublePrev){
      newArr.push(arr[i-1]);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
