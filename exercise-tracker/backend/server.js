const express = require('express');
const cors = require("cors");

//for .env file
require ("dotenv").config();

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

//mongodbconnection
const mongoose = require('mongoose');
const uri = process.env.ATLAS_URI
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex:true});
console.log( mongoose.connection.readyState);//to check if mongodb is connected or not

const usersRouter = require("./models/user.model")
const exercisesRouter = require ("./models/exercise.model")

app.use ("/users", usersRouter)
app.use ("/exercises", exercisesRouter)

app.listen(port, () => {
  console.log(`server is running on port :${port}`)
})