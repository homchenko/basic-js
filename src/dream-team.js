const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let arr = [];
  for (let i = 0; i < members.length; i++) {
    if(typeof(members[i]) == "string"){
      arr.push(members[i].charAt(0));
    } else continue;
  }
  return arr.sort().join('').toUpperCase();
};
