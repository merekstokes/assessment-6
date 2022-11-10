const {shuffleArray, array} = require('./utils')

describe('shuffleArray should', () => {
    test('be an array', () => {
        Array.isArray(shuffleArray);
    });
    test('be the same length as the argument sent in', () => {
        array.length == shuffleArray.length
    });
})