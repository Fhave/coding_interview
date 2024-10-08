const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user')

export.signup = async (res, req) => {
  const { username, password } = req.body;

  if(!username){
    return res.status(400).json("Usernaem required")
  }
  if(!password){
    return res.status(400).json("Password required")
  }

  try{
    const existingUser = await User.findOne({ username });
    if(existingUser) {
      return res.status(400).json("Username already exists")
    }
    const hash = await bcrypt.hash(password, 10);
    const user = new User({username, password: hash})
    await user.save();
    res.status(200).json('User signup successful')
  } catch(err) {
    console.log(err)
    res.status(500).json('Server Error')
  }
}

export.login = async (res, req) => {
  const { username, password } = req.body;

  if(!username){
    return res.status(400).json("Username required")
  }
  if(!password){
    return res.status(400).json("Password required")
  }

  try{
    const user = await User.findOne({ username });
    if(!user) {
      return res.status(400).json("No account with this username")
    }
    const match = await bcrypt.compare(password, user.password);
    if(!match){
      return res.status(400).json("Wrong password")
    }
    res.status(200).json('User login successful')
  } catch(err) {
    console.log(err)
    res.status(500).json('Server Error')
  }
}