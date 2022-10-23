const mysql = require("mysql")

const db = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "nodejs_g3"
});

// const db_production = mysql.createConnection({
//     host : "192.168.100.29",
//     user : "dsfalkekakDJJD",
//     password : "dfadsfejljoie",
//     database : "nodejs_g3"
// });

db.connect();

module.exports = db;