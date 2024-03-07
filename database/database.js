const mysql = require('mysql2')

const con = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE
});

const connectDB = () => {
    con.connect(function (err) {
        if (err) {
            console.log("Error in database connection", err);
        }
        else {
            console.log("Mysql connected successfully");
        }
    });
}
module.exports = connectDB