var express = require('express');
var router = express.Router();
const Secret = require("../model/user")
const jwt = require('jsonwebtoken');

/* GET users listing. */
router.post('/signup', async function (req, res, next) {
  const prevuser = await Secret.findOne({ UID: req.body.uid });
  if (!prevuser) {
    const newUser = new Secret({
      UID: req.body.uid,
      Email: req.body.email,
      Name: req.body.name
    })
    await newUser.save();
    const user = await Secret.findOne({ UID: req.body.uid });
    return res.send(jwt.sign({ id: user._id, token: user.UID, name: user.Name }, process.env.TOKEN_SECRET));
  }
  return res.send(jwt.sign({ id: prevuser._id, token: prevuser.UID, name: prevuser.Name }, process.env.TOKEN_SECRET));

});

router.post('/login', async function (req, res, next) {
  const user = await Secret.findOne({ UID: req.body.uid });
  res.send(jwt.sign({ id: user._id, token: user.UID, name: user.Name }, process.env.TOKEN_SECRET));
});

module.exports = router;
