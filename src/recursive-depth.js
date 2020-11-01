const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
      if (Array.isArray(arr)) {
          let counter = 1;
          arr.forEach((element) => {
              counter = Math.max(this.calculateDepth(element) + 1, counter);
          });
          return counter;
      } else {
          return 0;
      }
  }
};