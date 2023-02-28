const consoleLog = (req, res, next) => {
  console.log("This is a consoleLog statement");
  next();
};

module.exports = consoleLog;
