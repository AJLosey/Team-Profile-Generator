
var text2 = ``

const { Engineer, Intern, Manager } = require(`./classes.js`)
const fs = require('fs');
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
        const manager = new Manager(answers.manageName, answers.manageID, answers.manageEmail, answers.manageOffice);

        text2 += manager.addHTML();

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
            if (answers.engineerOrIntern == "finish") {
                var text1 = `<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>Team Generator</title>
  </head>
  <body>
  <div class="m-5">
    ${text2}
   
  </body>
</html>
`
                fs.writeFileSync("index.html", text1);
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
            let engineer = new Engineer(answers.engName, answers.engID, answers.engEmail, answers.engGit);

            text2 += engineer.addHTML();
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
            let intern = new Intern(answers.intName, answers.intID, answers.intEmail, answers.intSchool);

            text2 += intern.addHTML();
            console.log(answers);
            inquirerLoop();
        })
        .catch(error => console.log(error));
}



