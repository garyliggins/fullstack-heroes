const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended: true}))

//mongoose config set up
require('./config/mongoose.config');

//routes set up


app.listen(port, () => console.log(`your server is running for full stack super heroes on port ${port}`) )