const os = require("os");
const { writeFile } = require("fs");

const thisSentence = require("./practice2");
const user = os.userInfo().username;

//create practice.txt, then userInfo()
writeFile(
  "./content/practice.txt",
  `${thisSentence} ${user}`,
  (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
  }
);
