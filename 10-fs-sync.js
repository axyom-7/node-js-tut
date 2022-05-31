// Interacting with different files
// Another way of importing modules
// This is the synchronous method
//      - What happens is that the code is being read line by line and if a 
//      user is working with our app and the task takes a long time, then other users won't
//      be able to do anything with the app and thus the app will crash
//      - It starts a task, runs through it, completes the task and then starts another task
//      - In this example, a user is reading the two files and then creating one
const { readFileSync, writeFileSync} = require('fs')
console.log('start');
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')
// What this will do is search the indicated folder to see if the indicated file exists and if it does
// it will log the file name, otherwise it will create the file with the indicated value
writeFileSync(
    './content/result-sync.txt', 
    `Here is the result :  ${first}, ${second}`, 
    { flag: 'a' }
)
console.log('done with this task');
console.log('starting the next one');

// Result of the log should be:
// start
// done with this task
// starting the next one
