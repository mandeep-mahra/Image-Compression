const path = require('path');

// Get the current directory
const currentDirectory = __dirname;
console.log('Current directory:', currentDirectory);

// Move back one directory
const parentDirectory = path.resolve(currentDirectory, '..');
console.log('Parent directory:', parentDirectory);
