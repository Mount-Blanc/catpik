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
    users.push({username,password:hashedPassword});

    console.log(users)
  });
  res.json({ message: "User Registered Successfully" });
  next();
};
