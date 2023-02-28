//check username, password in post(login) request
//if it exists, create new JWT
// send back to the front-end

//setup authentication so only the request with JWT can access the dashboard

const jwt = require("jsonwebtoken");
const { BadRequestError } = require("../errors");

const login = async (req, res) => {
  const { username, password } = req.body;

  // mongoose validation
  // Joi
  // check in the controller

  if (!username || !password) {
    throw new BadRequestError("Please provide valid email and password");
  }

  //just for demo. Normally provided by the DB
  const id = new Date().getDate();

  //keep payload small for better user experience
  //for demo, in production use long, complex, and unguessable string value
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  res.status(200).json({ msg: "user created", token });
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorized data. Your lucky number is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
