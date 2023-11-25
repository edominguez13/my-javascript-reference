const  { default: TestRunner } = require('jest-runner');

const addFive = require('./addFive'); // the testing file in the same directory

test('Returns the number plus 5', () => {
    expect(addFive(1)).toBe(6);
});