// This will perform the streaming of the big text file
// |> This is reading data in chunks
const { createReadStream } = require('fs')
// This will log an error because of the incorrect file path '../content' > './content'
const stream = createReadStream('../content/big.txt', {
    highWaterMark: 9000,
})

// default buffer size is 64kb
// last buffer - remainder
// highWaterMark - control size
// This is way of contolling the buffer size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// This sets up the encoding
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })



stream.on('data', (result) => {
    console.log(result)
})
stream.on('error', (err) => console.log(err))
