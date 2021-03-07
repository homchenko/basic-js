const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  let countCats = 0;
    let earsCats = "^^";
     for (let i = 0; i < array.length; i++) {
       for (let j = 0; j < array[i].length; j++) {
         if(array[i][j] == earsCats){
           countCats++;
         }
       }
     }
     if(countCats > 0){
       return countCats;
     } else {
       return 0;
     }
};
