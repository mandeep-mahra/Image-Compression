const currObject = require('../Backend/src/kMeans.js');

describe('changeToClosest', () => {
    it('should update the matrix with the closest cluster values', () => {
      // Test input
      const matrix = [
        [10, 20, 30],
        [40, 50, 60],
        [70, 80, 90]
      ];
      const K = 2;
  
      // Make a copy of the original matrix for comparison
      const originalMatrix = JSON.parse(JSON.stringify(matrix));
  
      // Call the changeToClosest function
      currObject.changeToClosest(matrix, K);
  
      // Assertions
      expect(matrix).not.toEqual(originalMatrix);
      // Additional assertions based on the expected behavior of the changeToClosest function
    });
  });