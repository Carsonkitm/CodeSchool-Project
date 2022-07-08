//config holds the username and password variables
const config = require('./config/config');

const app = require("./server");

//pulls in methods below
const { connect, onConnect } = require("./persist/connect");

onConnect(() => {
    console.log("trying to connect -- index.js")
    app.listen(8080, () => {
        console.log("serving on port 8080")
    });
});

try {
    console.log('trying to connect')
    connect(
        config.mdbUSERNAME,
        config.mdbPASS
    )
} catch (err) {
    console.log(err);
    throw "didnt start"
}