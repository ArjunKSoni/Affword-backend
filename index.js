var express = require('express');
require("./mongooConnect")
const dotenv = require('dotenv');
const cors=require("cors")
dotenv.config();

var usersRouter = require('./routes/users');

var app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', usersRouter);



app.listen(5000,()=>{
  console.log(`successfully listening on port`,5000);
})
