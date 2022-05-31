// GLOBALS      - NO WINDOW IN NODE !!!!

// __dirname    - the path to current directory
// __filename   - the current file name
// require      - a function to use modules (CommonJS)
// module       - gives info about current module (file)
// process      - gives info about env where the program is being executed

console.log(__dirname)
setInterval(()=>{
    console.log('hello world')
}, 1000)