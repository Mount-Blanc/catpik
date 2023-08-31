const express = require('express');
const users= [];

exports.postRegister = (req,res,next) => {
    const { username, password} = req.body
    users.push({username,password})
    console.log(users)
    res.json({message:"User Registered Successfully"})
    next()
}

