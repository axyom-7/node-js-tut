// This sets up our own events

// this is the event emitter
const EventEmitter = require('events')

const customEmitter = new EventEmitter()

// on -> this listens for a specific event
customEmitter.on('response', (name,id)=>{
    console.log(`data recieved user ${name} with id:${id}`);
})
customEmitter.on('response', ()=>{
    console.log(`some other logic here `);
})
// emit -> this will emit the event
// Note -> order matters when emitting!!!
//      - You can also pass in arguments when emitting the event
customEmitter.emit('response', 'john', 34)
