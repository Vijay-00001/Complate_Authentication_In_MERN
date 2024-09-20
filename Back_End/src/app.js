const express = require("express");
const app = express();
require("./Database/connection");
const cookie = require("cookie-parser");
const port = process.env.PORT || 3000;

app.use(cookie());

app.use(express.json());

app.use(require('./Database/Route'));

if(process.env.NODE_ENV == "production"){
    app.use(express.static("Back_End/dist"));
}

app.listen(port,()=>{
    console.log(`Your connection is ready on port ${port}`);
});