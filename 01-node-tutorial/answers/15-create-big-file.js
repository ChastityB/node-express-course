const { writeFileSync } = require("fs");
for (let i = 0; i < 100000; i++) {
  writeFileSync("./content/big.txt", `hello world ${i}\n`, { flag: "a" });
}

//remember that the flag allows you to append files rather than replace them
