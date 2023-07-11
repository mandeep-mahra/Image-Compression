const currObject = require('../Backend/src/kMeans.js');


describe('getRandomPixels', () => {
    it('should return an array of random pixels with the specified count', () => {
        // Test input
        const matrix = [
            [100, 200, 300],
            [400, 500, 600],
            [700, 800, 900]
        ];
        const K = 5;

        // Call the getRandomPixels function
        const result = currObject.getRandomPixels(matrix, K);

        // Assertions
        expect(result).toHaveLength(K);
        result.forEach((pixel) => {
            expect(pixel).toHaveLength(2);
            expect(matrix.flat()).toContain(pixel[0]);
            expect(pixel[1]).toBe(1);
        });
    });

    it('should return an array of random pixels with the specified count', () => {
        // Test input
        const matrix = [
            [10, 20, 30],
            [40, 50, 60],
            [70, 80, 90]
        ];
        const K = 3;

        // Call the getRandomPixels function
        const result = currObject.getRandomPixels(matrix, K);

        // Assertions
        expect(result).toHaveLength(K);
        result.forEach((pixel) => {
            expect(pixel).toHaveLength(2);
            expect(matrix.flat()).toContain(pixel[0]);
            expect(pixel[1]).toBe(1);
        });
    });
    
    it('should return an empty array when K is 0', () => {
        // Test input
        const matrix = [
            [10, 20],
            [30, 40]
        ];
        const K = 0;

        // Call the getRandomPixels function
        const result = currObject.getRandomPixels(matrix, K);

        // Assertion
        expect(result).toHaveLength(0);
    });
});