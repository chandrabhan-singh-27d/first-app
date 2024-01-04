import { EventEmitter } from 'events';

const customEvent = new EventEmitter();

customEvent.on('response', (name, id) => {
    console.log(`Data received on event for user:${name} with id:${id}`);
});
customEvent.on('response', () => {
    console.log("Some other logic");
});

customEvent.emit('response', "Chandra", 28);