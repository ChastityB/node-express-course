const { createReadStream } = require("fs");

//create an instance
const stream = createReadStream("./content/big.txt", {
  highWaterMark: 90000,
  encoding: "utf-8",
});

//highWaterMark controls the buffer size

//reading file in chunks rather than one big file
stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => console.log(err));
