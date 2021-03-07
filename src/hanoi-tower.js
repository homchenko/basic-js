const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let t = Math.pow(2, disksNumber) - 1;
  let s = Math.floor(3600/turnsSpeed*t);
  let obj = {turns: t, seconds:s};
  return obj;
};
