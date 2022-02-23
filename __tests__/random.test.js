// practice test to check if two nums are equal. 
// const checkIfEqual = require('../lib/random.js');
// test('checks if 10 is equal to 10', () => {
//     expect(checkIfEqual(10, 10)).toBe(true);
// });

// random number test to make sure we get a num from 1 to 10. 
const randomNumber = require('../lib/random.js');
test('gets random number between 1 and 10', () => {
    expect(randomNumber()).toBeGreaterThanOrEqual(1);
    expect(randomNumber()).toBeLessThanOrEqual(10);
});