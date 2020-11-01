const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {

  let i = 0;
  matrix.forEach((element) => {
      if (typeof element === 'object') {
          element.forEach((element) => {
              if (element === '^^') {
                  i++;
              }
          });
      }
      if (element === '^^') {
          i++;
      }
  });
  return i;
};
