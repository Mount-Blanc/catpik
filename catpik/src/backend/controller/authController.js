const express = require("express");
const bcrypt = require("bcrypt");
const users = [];

exports.postRegister = (req, res, next) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.error("Error hashing password:", err);
      return;
    }
    users.push({ username, password: hashedPassword });
    console.log(users);
  });

  res.json({ message: "User Registered Successfully" });
};

exports.login = (req, res) => {
  const { username, password } = req.body;

  console.log("Received username:", username);

  const user = users.find((user) => user.username === username);
  console.log("Found array:", users);

  if (user && bcrypt.compareSync(password, user.password)) {
    req.session.user = user;
    return res.status(200).json({ message: "Login Successful" });
  } else return res.status(500).json({ message: "Error in Login" });
};

exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
      res.status(500).json({ message: "Internal server error" });
    } else {
      res.status(200).json({ message: "Logout successful" });
    }
  });
};
