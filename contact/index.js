const express = require('express')
const {urlencoded} = require('body-parser')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
// const {errorhandler} = require('./middlewares/errorMid')
const port = process.env.PORT || 8100

connectDB()
const app = express()

//be able to pass data to the database
app.use(express.json())
app.use(urlencoded({ extended:false}))

//this the  route the user will go through to get the data
app.use('/', require('./routes/routesContact.js'))

// app.use(errorhandler)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})