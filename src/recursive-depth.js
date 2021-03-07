const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] == "number" || typeof arr[i] == "string") {
        continue;
      } else {
        arr = arr.flat();
      }
      count++;
      i--;
      calculateDepth(arr, count);
    }
    return count;
  }
};
