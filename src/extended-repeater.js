const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  if (options.repeatTimes == null) {
      options.repeatTimes = 1;
  }

  if (options.additionRepeatTimes == null) {
      options.additionRepeatTimes = 1;
  }

  if (options.separator == null) {
      options.separator = '+';
  }

  if (options.additionSeparator == null) {
      options.additionSeparator = '|';
  }

  if (options.addition === undefined) {
      options.additionRepeatTimes = '';
  }

  let resultStr = '';

  for (let i = 1; i <= options.repeatTimes; i++) {
      if (i < options.repeatTimes) {
          resultStr = resultStr + str;

          for (let i = 1; i <= options.additionRepeatTimes; i++) {
              if (i < options.additionRepeatTimes) {
                  resultStr =
                      resultStr +
                      options.addition +
                      options.additionSeparator;
              } else if (i == options.additionRepeatTimes) {
                  resultStr = resultStr + options.addition;
              }
          }

          resultStr = resultStr + options.separator;
      } else if (i == options.repeatTimes) {
          resultStr = resultStr + str;

          for (let i = 1; i <= options.additionRepeatTimes; i++) {
              if (i < options.additionRepeatTimes) {
                  resultStr =
                      resultStr +
                      options.addition +
                      options.additionSeparator;
              } else if (i == options.additionRepeatTimes) {
                  resultStr = resultStr + options.addition;
              }
          }
      }
  }

  return resultStr;
};
  