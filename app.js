var mysql = require("mysql")
var inquirer = require("inquirer")


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    username: "root",
    password: "password",
    database: "ems_DB"
});

connection.connect(function(err){
    if(err) throw err;
    console.log ("Connected as ID " + connection.threadId + "\n");
}