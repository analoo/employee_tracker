var mysql = require("mysql")
var inquirer = require("inquirer")
var cTable = require('console.table');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "ems_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    promptUser();


});

function promptUser(){
    return inquirer.prompt({
        type: "list",
        message: "What would you like to do?",
        name: "option",
        choices: ["View Roles", "View Employees", "View Departments", "Add Roles", "Add Employees", "Add Departments", "Update Employee Role"]

    }).then(function (res) {
        switch (res.option) {
            case ("View Roles"):
                viewRoles();
                break;
            case ("View Employees"):
                viewEmployees();
                break;
            case ("View Departments"):
                viewDepartments();
                break;
            case ("Add Roles"):
                addRoles();
                break;
            case ("Add Employees"):
                addEmployees();
                break;
            case ("Add Departments"):
                addDepartment();
                break;
            case ("Update Employee Role"):
                updateRole();
                break;
            default:
                console.log("You picked default")
        }

    })
}




function viewDepartments() {
    connection.query("SELECT * FROM department", function (err, res) {
        if (err) throw err;
        var parsedRes = cTable.getTable(res.map(element => { return { id: element.id, department: element.name } }));
        console.log(parsedRes)
        promptUser()
    })
}


function addDepartment() {
    inquirer.prompt({
        type: "input",
        name: "dept_name",
        message: "What is the name of this new dept?"
    })
    .then(function (data) {
        connection.query(`INSERT INTO department (name) VALUES ("${data.dept_name}")`, function (err) {
            if (err) throw err;
            console.log("Successfully added this new department!")
            viewDepartments()
        });

    });
};


function viewRoles() {
    connection.query("SELECT role.id as role_id, title, salary, department_ID, department.name FROM role LEFT JOIN department on role.department_ID = department.id", function (err, res) {
        if (err) throw err;
        var parsedRes = cTable.getTable(res.map(element => { return { id: element.role_id, title: element.title, salary: element.salary, department: element.name } }));
        console.log(parsedRes)
        promptUser()

    })
}

function addRoles() {
    inquirer.prompt([{
        type: "input",
        name: "title",
        message: "What is the title of the role?"
    }, {
        type: "input",
        name: "salary",
        message: "What is the annualized salary?"
    }, {
        type: "input",
        name: "dept_id",
        message: "What department id does this role belong to?"
    }])
    .then(function (data) {
    connection.query(`INSERT INTO role(title,salary, department_id) VALUES ("${data.title}", ${data.salary}, ${data.dept_id})`, function (err) {
        console.log("Success! - You added a new role")
        viewRoles()
    });

});
};


function viewEmployees() {
    connection.query(`SELECT employee.id as employeeID, first_name, last_name, role.title, role.salary, department.name as department, manager_ID
    FROM employee
    LEFT JOIN role on employee.role_ID = role.id
    LEFT JOIN department on role.department_ID = department.id`, function (err, res) {
        if (err) throw err;
        var parsedRes = cTable.getTable(res.map(element => { return { id: element.employeeID, name: element.first_name + " " + element.last_name, title: element.title, salary: element.salary, manager: element.manager_ID ,department: element.department } }));
        console.log(parsedRes)
        promptUser()

    })
}


function addEmployees() {
    inquirer.prompt([{
        type: "input",
        name: "first",
        message: "First Name: "
    }, {
        type: "input",
        name: "last",
        message: "Last Name: "
    }, {
        type: "input",
        name: "role_id",
        message: "Role id:"
    },
    {
        type: "input",
        name: "mgr_id",
        message: "Manager id:"
    }])
    .then(function (data) {
    connection.query(`INSERT INTO employee(first_name,last_name, role_id, manager_id) VALUES ("${data.first}", "${data.last}",${data.role_id}, ${data.mgr_id})`, function (err) {
        if (err) throw err;
        console.log("Success! - You added a new employee")
        viewEmployees()
    });

});
};


function updateRole(ee_id, role_id) {
    connection.query(`UPDATE employee SET role_ID = ${role_id} WHERE id=${ee_id}`)
    viewEmployees()
}