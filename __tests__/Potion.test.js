const Potion = require('../lib/Potion.js');

test('creates a health potion object', () => {
    const potion = new Potion('health'); // new potion bc we need to create an new potion obj

    expect(potion.name).toBe('health');
    expect(potion.value).toEqual(expect.any(Number));
});

// 2nd failing tests
test('creates a random potion object', () => {
    const potion = new Potion();

    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
});