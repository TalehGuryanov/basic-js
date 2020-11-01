const CustomError = require('../extensions/custom-error');

module.exports = function getSeason(date) {

    if (typeof date === 'undefined') {
        return 'Unable to determine the time of year!';
    }
    if (Object.prototype.toString.call(date) !== '[object Date]') {
        throw new Error();
    }

    if (2 <= date.getMonth() && date.getMonth() <= 4) {
        return 'spring';
    } else if (5 <= date.getMonth() && date.getMonth() <= 7) {
        return 'summer';
    } else if (8 <= date.getMonth() && date.getMonth() <= 10) {
        return 'autumn';
    } else {
        return 'winter';
    }
};