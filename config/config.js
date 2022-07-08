const dotenv = require("dotenv").config();
console.log(process.env.USERNAME, process.env.PASS)
module.exports = {
    mdbUSERNAME : process.env.USERNAME, 
    mdbPASS : process.env.PASS,
    mdbPORT : process.env.PORT
}