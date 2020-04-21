# Employee Tracker READ ME
        
## Summary
        
This is a command line interface that allows members of the HR team to add and view departments, roles and employee information. The data is stored in SQL.

<img src='https://img.shields.io/static/v1?label=License&message=MIT&color=brightgreen'> 

## Site Picture

![site](/assets/site_image.gif)

## Table of Contents

- [Technologies Used](#Technologies-Used)
- [Learning Points](#Learning-Points)
- [Use](#Use)
- [Installation](#Installation)
- [Code Snippets](#Code-Snippets)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [Author](#Author)
        
## Technologies Used
- mysql - used to store and retrieve data
- Javascript / Node - used to build an interactive command line interfase tool
- HTML and Bootstrap - used in provided code
- Git - version control system for tracking changes to code
- Github - to host the repository
- Heroku - to host the deployed site

## Learning Points
- It is fairly simple to create a CLI that retrieves data from a database.
- Complexity comes from how user friendly the application is and with properly timing information from the user and the sql queries.

## Dependencies
```
mysql
inquirer
console.table
```

## Installation
- You will need to download this folder into your computer either by cloning the git repository or downloading the files are a zip.
- Once the files are accessible in tour local computer, navigate inside the employee tracker folder and do an install of the following packages by using: 
```
npm install mysql
npm install inquirer
npm install console.table
```
- Once you have successfully installed those packages, you can run the program by typing the following command to your terminal
```
node app.js
```
        
        
## Usage
- There is seed data for department, role and employee on the assets folder that can be used to run view functionality.
- In order to create employees, the relevant role and department data needs to exist in the role and department tables.
- The recommended order for adding data is to start with departments, then role then employees.

## Code Snippet
The code below was used in the application a few times and it highlights my increased comfort with map functions. It also shows the use of console.table which allows json data to be parsed into a nice looking table without much effort.

```
       var parsedRes = cTable.getTable(res.map(element => { return { id: element.employeeID, name: element.first_name + " " + element.last_name, title: element.title, salary: element.salary, manager: element.manager_ID ,department: element.department } }));
        console.log(parsedRes)
        ```
        
         
## Contributors
            
None
         
        
## Author
[GitHub](https://github.com/analoo)

<img src='https://avatars3.githubusercontent.com/u/8609011?v=4' alt = "my-avatar" style = "width: 40px; border-radius: 15px;"/>
       
        
