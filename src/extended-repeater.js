const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  let separator = options.separator ? options.separator : "+";
  let addition = options.addition;
  let additionRepeatTimes = options.additionRepeatTimes
    ? options.additionRepeatTimes
    : 1;
  let additionSeparator = options.additionSeparator
    ? options.additionSeparator
    : "|";
  let newStr = "";
  if (str) {
    if (typeof str != "string") {
      str = str.toString();
    }
    for (let i = 0; i < repeatTimes; i++) {
      newStr = newStr.concat(str);
      if (additionRepeatTimes > 0) {
        for (let j = 0; j < additionRepeatTimes; j++) {
          newStr = newStr.concat(addition).concat(additionSeparator);
        }
        newStr = newStr.substr(0, newStr.length - additionSeparator.length);
      }
      newStr = newStr.concat(separator);
    }
    newStr = newStr.substr(0, newStr.length - separator.length);
    return newStr;
  } else return false;
};
