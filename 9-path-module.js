const path = require('path')

// This will return the platform specific seperator
console.log(path.sep);
// This returns the join method and a normalized path
const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath);
// Getting the basename of a file
const base = path.basename(filePath)
console.log(base);
// Getting the absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);