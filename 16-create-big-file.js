// This is a use case of reading a big file using streams
// aka read stream option
// This file just creates the file 'big/txt' in the 'content' directory
// The file '17-streams.js' will perfom the read stream process

const { writeFileSync } = require('fs')
for (let i = 0; i < 10000; i++) {
    writeFileSync('./content/big.txt', `hello world ${i}\n`, { flag: 'a'})
}