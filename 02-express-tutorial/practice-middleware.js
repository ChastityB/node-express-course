const consoleLog = (req, res, next) => {
  console.log("This is a statement");
  next();
};

module.exports = consoleLog;
