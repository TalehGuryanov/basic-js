const CustomError = require('../extensions/custom-error');

const chainMaker = {
    simpleChain: [],

    getLength() {
        return this.simpleChain.length;
    },

    addLink(value) {
        stringAtt = `( ${value} )`;
        this.simpleChain.push(stringAtt);

        return this;
    },

    removeLink(position) {
        if (typeof position === 'number') {
            this.simpleChain.splice(position - 1, 1);
            return this;
        } else {
            this.simpleChain = [];
            throw Error();
        }
    },

    reverseChain() {
        
        this.simpleChain.reverse();
        return this;
    },

    finishChain() {
        
        let arrToStr = this.simpleChain.join('~~');
        this.simpleChain = [];
        return arrToStr;
    },
};

module.exports = chainMaker;
