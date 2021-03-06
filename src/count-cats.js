const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  let countCats = 0;
  let earsCats = "^^";
   for (let i = 0; i < array.length; i++) {
     for (let j = 0; j < array.length; j) {
       if(array[i][j] == earsCats){
         countCats++;
       }
     }
   }
   if(earsCats > 0){
     return earsCats;
   } else {
     return 0;
   }
};
