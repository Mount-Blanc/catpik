const express = require("express");
const bcrypt = require("bcrypt");
const users = [];

exports.postRegister = (req, res, next) => {
  const { username, password } = req.body;
  console.log(password)
  const userCredentials = password;
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      console.error("Error hashing password:", err);
      return;
    }
    console.log(hash)
  });
  users.push(userCredentials);
  res.json({ message: "User Registered Successfully" });
  next();
};
