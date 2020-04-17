var mysql = require("mysql")
var inquirer = require("inquirer")


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "ems_DB"
});

connection.connect(function(err){
    if(err) throw err;
    console.log ("Connected as ID " + connection.threadId + "\n");
    addDepartment(10,"Legal")
    viewDepartments()
});


function viewDepartments(){
    connection.query("SELECT * FROM department", function(err,res){
        if(err) throw err;
        console.log(res)
    })
}

function addDepartment(id,newDept){
    connection.query(`INSERT INTO department(id,name) VALUES (${id},"${newDept}")`, function (err){
        if(err) throw err;
        console.log("Success!")
    })
}