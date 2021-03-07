const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (date) {
    let m = date.getMonth();
    if (m < 2 || m == 11) return "winter";
    else if (m < 5) return "spring";
    else if (m < 8) return "summer";
    else if (m < 11) return "autumn";
  } else {
    return 'Unable to determine the time of year!'
  }
};
