USE ems_DB;

INSERT INTO department (name)
VALUES ("HR"), ("Finance"), ("Engineering"), ("Product"), ("Sales");

INSERT INTO role(title, salary, department_id)
VALUES ("HR Manager",80000,1),("Finance Manager",120320,2),
("Finance Manager",120320,2),
("SWE", 100000,3),
("Associate Product Manager", 90221,4),
("Field Sales", 75000, 5);


INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ("Ana", "Macaroni", 1,1),
("Mark", "Zucchini",3,1),
("Cori", "Anders",4,2),
("Courtney", "Canned",5,2);

