const Calculator = require('../calculator');
const assert = require('assert');

describe('Calculator', () => {
    describe('#add', () => {
        it('should add two numbers together', () => {
            assert.equal(6, Calculator.add(2, 4));
        });

        it('adds a negative and a positive number');
    });

    describe('#subtract', () => {
        it('finds the difference between two numbers');
    });

    describe('#power', () => {
        it('raises the power of one number to the power of another number');

    });

    describe('#sum', () => {
        it('computes the sum of an empty array');

        it('computes the sum of an array of one number');

        it('computes the sum of an array of two numbers');

        it('computes the sum of an array of many numbers');
    });

    describe('#multiply', () => {
        it('multiplies two numbers');

        it('multiplies several numbers');
    });

    describe('#factorial', () => {
        it('computes the factorial of 0');

        it('computes the factorial of 1');

        it('computes the factorial of 2');

        it('computes the factorial of 5');

        it('computes the factorial of 10');
    });
});