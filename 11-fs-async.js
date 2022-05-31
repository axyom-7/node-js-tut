// Interacting with different files
// Another way of importing modules
// This is the asynchronous method
//      - What happens here is that the moment the task is started, it is offloaded and continue with
//      the rest of the code
//      - It starts a task, offloads it and then starts another task
//      - In this example, the user is able to access the functionality and the app is able to server other users
const { readFile, writeFile} = require('fs')

console.log('start');
// With the asynchornous method, a callback is required
//  - This essentially means that we run that callback when we are done running whatever other functions
//  - It is also known as 'callback hell' (These are nested callbacks)
readFile('./content/first.txt','utf8', (err, result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt', 'utf8',(err, result)=>{
        if(err) {
            console.log(err)
        }
        const second = result
        writeFile(
            './content/result-async.txt',
            `Here is the result :  ${first}, ${second}`
            ,(err, result)=>{
                if(err) {
                    console.log(err)
                    return
                }
                console.log('done with this task');
            }
        )
    })
})
console.log('starting next task');

// Result of the log should be:
// start
// starting next task
// done with this task
