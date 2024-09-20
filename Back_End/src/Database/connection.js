const mongoose = require("mongoose");
require("mongodb");
require("dotenv").config();
const url = process.env.DATA_BASE;
// const url = "mongodb+srv://Ecommerce:do3aeEXDmAUdgjZa@createmongodb.po7skj3.mongodb.net/Ecommerce?retryWrites=true&w=majority";


const connection = mongoose.connect(url).then(()=>{
    console.log("Connection Successfull.....")
}).catch((err)=>{
    console.log("Connection Failed.....")
});

module.exports = connection;
