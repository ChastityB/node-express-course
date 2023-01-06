const EventEmitter = require("events");

//instance of our class
const customEmitter = new EventEmitter();

//on listen for specific event
//omit will omit that event

//first listen to the event
customEmitter.on("response", (name, id) => {
  console.log(`data received user ${name} with id: ${id}`);
});

customEmitter.on("response", () => {
  console.log("some other logic here");
});

//emit the response
customEmitter.emit("response", "john", 34);
