const express = require("express")
const mongoose = require("mongoose")
const app = express()


// routes
app.get('/', (req, res) => {
    res.send('Hello Node API')
})


PORT = 3001

app.listen(PORT, () => {
    console.log(`Listening to port {PORT}`);
})

mongoose.connect().then(() => {
    console.log("Connected to Mongo DB")
}).catch((error) => {
    console.log(error)
})