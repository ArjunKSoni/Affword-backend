var express = require('express');
var router = express.Router();
const Secret = require("../model/user")
const jwt = require('jsonwebtoken');

/* GET users listing. */
router.post('/signup',async function(req, res, next) {
  const newUser=new Secret({
    UID:req.body.uid,
    Email:req.body.email
  })
  await newUser.save();
  const user=await Secret.findOne({UID:req.body.uid});
  res.send(jwt.sign({id:user._id,token:user.UID}, process.env.TOKEN_SECRET));
});

router.post('/login',async function(req, res, next) {
  const user=await Secret.findOne({UID:req.body.uid});
  res.send(jwt.sign({id:user._id,token:user.UID}, process.env.TOKEN_SECRET));
});

module.exports = router;
