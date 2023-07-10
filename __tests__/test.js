const KMeansMatrixConverter = require('../Backend/src/kMeans.js')

test("Accepts an Array of values and returns a matrix of values with the given dimensions.", () => {
    expect(JSON.stringify(KMeansMatrixConverter.arrayToMatrix([1,2,3,4,5,6,7,8,9], 3, 3)))
    .toBe(JSON.stringify([ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]));
});
test("Accepts an Array of values and returns a matrix of values with the given dimensions.", () => {
    expect(JSON.stringify(KMeansMatrixConverter.arrayToMatrix([1,2,3], 3, 1)))
    .toBe(JSON.stringify([ [1, 2, 3] ]));
});

