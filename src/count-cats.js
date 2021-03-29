const CustomError = require("../extensions/custom-error");

// module.exports = function countCats(backyard) {
//   let count = 0;
//   for (let i = 0; i < backyard.length; i++) {
//     for (let j = 0; j < backyard[i].length; j++){
//       if (backyard[i][j] == "^^") {
        
//         count++;
//         return (count);
//       }
//       else { return 0;}
//     }
//   }
  
// };
module.exports = function countCats(backyard) {
  let count = 0;
  for (let subArr of backyard) {
    subArr.forEach((item) => {
      if (item == "^^") {
        count++;
      }
    });
    
  }
  return count;
};
