const events = require('events');

const myEvent = new events.EventEmitter();

myEvent.on('someEvent', (message) => {
    console.log(`an ${message} occured!`)
})

myEvent.emit('someEvent', 'event')