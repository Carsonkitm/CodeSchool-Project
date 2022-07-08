const mongoose = require('mongoose');

const db = mongoose.connection;
//pull in the password and username
const config = require('../config/config');

//connect to mongo with this function
async function connect(username, password) {
    //let connectString = `mongodb+srv://${username}:${password}@cluster0.hcczi.mongodb.net/?retryWrites=true&w=majority`;
    let connectString = `mongodb+srv://${username}:${password}@cluster0.hcczi.mongodb.net/?retryWrites=true&w=majority`;
    console.log("attemping connection to", username, password);
    try{
        console.log("trying to connect to mongo")
        let result = await mongoose.connect( connectString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    }catch (err) {
        console.log("ERROR CONNECTING TO MONGO", err)
        throw "mongo didnt connect"
    }
}

//when it connects it should give me this message
function onConnect(cb) {
    db.once("open", () => {
        console.log(`mongo connection open on port ${PORT}`);
        cb();
    });
}

module.exports = {
    connect,
    onConnect
}