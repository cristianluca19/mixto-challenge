const mongoose = require("mongoose");
const User = mongoose.model("User");



exports.register = async (req, res) => {
  const { firstName, lastName,  email, password } = req.body;
  const userExists = await User.findOne({
    email,
  });

  if (userExists) throw "User with same email already exits.";

  const user = new User({
    firstName,
    lastName,
    email,
    password,
  });

  await user.save();

  res.json({
    message: "User registered successfully!",
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({
    email,
    password,
  });

  if (!user) throw "Email and/or Password did not match.";

  res.json({
    message: "User logged in successfully!",
  });
};