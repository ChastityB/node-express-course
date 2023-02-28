const jwt = require("jsonwebtoken");
const { BadRequestError } = require("../errors");

const logon = async (req, res) => {
  const { name, password } = req.body;

  if (!name || !password) {
    throw new BadRequestError("Please provide valid name and password");
  }

  const id = new Date().getDate();

  const token = jwt.sign({ id, name }, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
  res.status(200).json({ token });
};

const hello = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, ${req.user.name}`,
    secret: `Here is your authorized data. Your lucky number is ${luckyNumber}`,
  });
};

module.exports = {
  logon,
  hello,
};
