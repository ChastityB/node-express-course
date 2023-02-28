const { readFile, writeFile, read } = require("fs");

console.log("start");
readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf-8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});
console.log("starting next task");

//another way to do this async
// const { readFile, writeFile } = require("fs").promises;
// // const util = require("util");
// // const readFilePromise = util.promisify(readFile);
// // const writeFilePromise = util.promisify(writeFile);
// // const getText = (path) => {
// //   return new Promise((resolve, reject) => {
// //     readFile(path, "utf-8", (err, data) => {
// //       if (err) {
// //         reject(err);
// //       } else {
// //         resolve(data);
// //       }
// //     });
// //   });
// // };
// // getText("./content/first.txt")
// //   .then((result) => console.log(result))
// //   .catch((err) => console.log(err));

// const start = async () => {
//   try {
//     const first = await readFile("./content/first.txt", "utf-8");
//     const second = await readFile("./content/second.txt", "utf-8");
//     await writeFile(
//       "./content/result-mind-grenade.txt",
//       `THIS IS AWESOME : ${first} ${second}`
//     );
//     console.log(first, second);
//   } catch (error) {
//     console.log(error);
//   }
// };

// start();
