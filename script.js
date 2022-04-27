
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab




// WHEN I select the engineer option

// WHEN I select the intern option

// WHEN I decide to finish building my team
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
        //const manager = new Manager(answers.manangeName)
        //manager.addHTML
        
       inquirerLoop();

    })
    .catch(error => console.log(error));

const inquirerLoop = function(){
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
    if(answers.engineerOrIntern == "engineer"){
        inquirerEngineer();
    }
    if(answers.engineerOrIntern == "intern"){
        inquirerIntern();
    }

    })
    .catch(error => console.log(error));   
}

const inquirerEngineer = function() {
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

const inquirerIntern = function() {
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

// class Employee {
//     constructor(eName) {
//         this.eName = eName;

//     }


// }

// class Manager extends Employee {
//     constructor(eName) {
//         super(eName)

//     }

// }

    //todo: prompt information for manage

    //todo: figure out how to give option for engineer or intern

    //todo: make classes 
    
    //todo: create tests

    //todo: use inquirer input to make instances of those classes

    //todo: add classes to html

