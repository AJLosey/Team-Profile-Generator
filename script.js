
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab


// THEN I exit the application, and the HTML is generated


// **Important**: Make sure that you remove `dist` from the `.gitignore` file so that Git will track this folder and include it when you push up to your application's repository.

// The application must include `Employee`, `Manager`, `Engineer`, and `Intern` classes. The tests for these classes (in the `_tests_` directory) must ALL pass.

// The first class is an `Employee` parent class with the following properties and methods:

// * `name`

// * `id`

// * `email`

// * `getName()`

// * `getId()`

// * `getEmail()`

// * `getRole()`&mdash;returns `'Employee'`

// The other three classes will extend `Employee`.

// In addition to `Employee`'s properties and methods, `Manager` will also have the following:

// * `officeNumber`

// * `getRole()`&mdash;overridden to return `'Manager'`

// In addition to `Employee`'s properties and methods, `Engineer` will also have the following:

// * `github`&mdash;GitHub username

// * `getGithub()`

// * `getRole()`&mdash;overridden to return `'Engineer'`

// In addition to `Employee`'s properties and methods, `Intern` will also have the following:

// * `school`

// * `getSchool()`

// * `getRole()`&mdash;overridden to return `'Intern'`

// Finally, although it’s not a requirement, consider adding validati

var inquirer = require('inquirer');



inquirer
    .prompt([
        {
            type: "input",
            message: "Who is your project manager?",
            name: "manageName"
        },
        {
            type: "input",
            message: "What is their employee ID?",
            name: "manageID"
        },
        {
            type: "input",
            message: "What is their email?",
            name: "manageEmail"
        },
        {
            type: "input",
            message: "What is their office number?",
            name: "manageOffice"
        },
    ])
    .then((answers) => {
        const manager = new Manager(answers.manangeName, answers.manageID, answers.manageEmail, answers.manageOffice);

        manager.addHTML();

        inquirerLoop();

    })
    .catch(error => console.log(error));

const inquirerLoop = function () {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Do you want to add an engineer or an intern?",
                name: "engineerOrIntern",
                choices: ["engineer", "intern", "finish"]
            },
        ])
        .then((answers) => {
            if (answers.engineerOrIntern == "engineer") {
                inquirerEngineer();
            }
            if (answers.engineerOrIntern == "intern") {
                inquirerIntern();
            }

        })
        .catch(error => console.log(error));
}

const inquirerEngineer = function () {
    inquirer
        // THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
        .prompt([
            {
                type: "input",
                message: "What is the engineer's name?",
                name: "engName"
            },
            {
                type: "input",
                message: "What is their employee ID?",
                name: "engID"
            },
            {
                type: "input",
                message: "What is their email?",
                name: "engEmail"
            },
            {
                type: "input",
                message: "What is their github account?",
                name: "engGit"
            },

        ])
        .then((answers) => {
            //let engineer = new Engineer (answers.engName)
            //engineer.addHTML
            console.log(answers);
            inquirerLoop();

        })
        .catch(error => console.log(error));
}

const inquirerIntern = function () {
    inquirer
        // THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
        .prompt([
            {
                type: "input",
                message: "What is the intern's name?",
                name: "intName"
            },
            {
                type: "input",
                message: "What is their employee ID?",
                name: "intID"
            },
            {
                type: "input",
                message: "What is their email?",
                name: "intEmail"
            },
            {
                type: "input",
                message: "What is their school name?",
                name: "intSchool"
            },

        ])
        .then((answers) => {
            //let intern = new Intern (answers.intName)
            //intern.addHTML
            console.log(answers);
            inquirerLoop();
        })
        .catch(error => console.log(error));
}

class Employee {
    constructor(eName, id, email) {
        this.name = eName;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee"
    }
    addHTML() {

        let text = `<div class="card row m-5">
        <div class="card-body">
        <ul class="list-group">
        <li class="list-group-item">Name: ${this.name}</li>
        <li class="list-group-item">ID: ${this.id}</li>
        <li class="list-group-item">email: <a href = "mailto: ${this.email}>${this.email}</a> </li>
        <li class="list-group-item">${this.getRole()}</li>
      </ul>
        </div>
      </div>`

        $("#content").append(text)
    }
}

class Manager extends Employee {
    constructor(eName, id, email, officeNum) {
        this.officeNum = officeNum;
        super(eName, id, email)
    }
    getRole() {
        return "Manager"
    }
    addHTML() {

        let text = `<div class="card row m-5">
        <div class="card-body">
        <ul class="list-group">
        <li class="list-group-item">Name: ${this.name}</li>
        <li class="list-group-item">ID: ${this.id}</li>
        <li class="list-group-item">Office: ${this.officeNum}</li>
        <li class="list-group-item">email: <a href = "mailto: ${this.email}>${this.email}</a> </li>
        <li class="list-group-item">${this.getRole()}</li>
      </ul>
        </div>
      </div>`

        $("#content").append(text)
    }
}

class Engineer extends Employee {
    constructor(eName, id, email, github) {
        this.github = github;
        super(eName, id, email)
    }
    getRole() {
        return "Engineer"
    }
    getGit() {
        return this.github;
    }
    addHTML() {

        let text = `<div class="card row m-5">
        <div class="card-body">
        <ul class="list-group">
        <li class="list-group-item">Name: ${this.name}</li>
        <li class="list-group-item">ID: ${this.id}</li>
        <li class="list-group-item">github: <a href="${this.getGit()}">${this.getGit()}</a></li>
        <li class="list-group-item">email: <a href="mailto: ${this.email}>${this.email}</a> </li>
        <li class="list-group-item">${this.getRole()}</li>
      </ul>
        </div>
      </div>`

        $("#content").append(text)
    }
}

class Intern extends Employee {
    constructor(eName, id, email, school) {
        this.school = school;
        super(eName, id, email)
    }
    getRole() {
        return "Intern"
    }
    getSchool() {
        return this.school;
    }
    addHTML() {

        let text = `<div class="card row m-5">
        <div class="card-body">
        <ul class="list-group">
        <li class="list-group-item">Name: ${this.name}</li>
        <li class="list-group-item">ID: ${this.id}</li>
        <li class="list-group-item">school: ${this.getSchool()}</li>
        <li class="list-group-item">email: <a href="mailto: ${this.email}>${this.email}</a> </li>
        <li class="list-group-item">${this.getRole()}</li>
      </ul>
        </div>
      </div>`

        $("#content").append(text)
    }
}

module.exports.Employee = Employee
module.exports.Engineer = Engineer
module.exports.Intern = Intern
module.exports.Manager = Manager



    //todo: make classes

    //todo: use inquirer input to make instances of those classes

    //todo: add classes to html

