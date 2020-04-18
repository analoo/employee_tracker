var mysql = require("mysql")
var inquirer = require("inquirer")


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "ems_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected as ID " + connection.threadId + "\n");

});


function viewDepartments() {
    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        var parsedRes = res.map(element => { return { id: element.id, department: element.name } });
        return parsedRes.forEach(element => console.log(element.id + " | " + element.department))
    })
}



function addDepartment(id, newDept) {
    connection.query(`INSERT INTO department(id,name) VALUES (${id},"${newDept}")`, function (err) {
        if (err) throw err;
        console.log("Success!")
        viewDepartments()
    });
};


function viewRoles() {
    connection.query("SELECT role.id as role_id, title, salary, department_ID, department.name FROM role LEFT JOIN department on role.department_ID = department.id", function (err, res) {
        if (err) throw err;
        console.log(res)
        var parsedRes = res.map(element => { return { id: element.role_id, title: element.title, salary: element.salary, department: element.name } });
        return parsedRes.forEach(element => console.log(element.id + " | " + element.title+ " | " + element.salary+ " | " + element.department))
    })
}

function addRoles(id, title, salary, department){
    connection.query(`INSERT INTO role(id,title,salary, department_id) VALUES (${id}, "${title}", ${salary}, ${department})`, function (err){
        console.log("Success! - You added a new role")
        viewRoles() 
    })
}