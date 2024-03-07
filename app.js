require('dotenv').config()
const express = require('express');
const connectDB = require('./database/database');
const app = express()
const port = process.env.PORT;

connectDB()
app.listen(port, () => {
    console.log(`Server is up and listening on port ${port}`)
})