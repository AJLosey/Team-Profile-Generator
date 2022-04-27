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

        return `<div class="card row m-5">
        <div class="card-body">
        <ul class="list-group">
        <li class="list-group-item">Name: ${this.name}</li>
        <li class="list-group-item">ID: ${this.id}</li>
        <li class="list-group-item">email: <a href = "mailto: ${this.email}">${this.email}</a> </li>
        <li class="list-group-item">${this.getRole()}</li>
      </ul>
        </div>
      </div>`

    }
}



class Manager extends Employee {
    constructor(eName, id, email, officeNum) {
        super(eName, id, email)
        this.officeNum = officeNum;

    }
    getRole() {
        return "Manager";
    }
    addHTML() {

        return `<div class="card row m-5">
        <div class="card-body">
        <ul class="list-group">
        <li class="list-group-item">Name: ${this.name}</li>
        <li class="list-group-item">ID: ${this.id}</li>
        <li class="list-group-item">Office: ${this.officeNum}</li>
        <li class="list-group-item">email: <a href = "mailto: ${this.email}">${this.email}</a> </li>
        <li class="list-group-item">${this.getRole()}</li>
      </ul>
        </div>
      </div>`;


    }
}

class Engineer extends Employee {
    constructor(eName, id, email, github) {
        super(eName, id, email)
        this.github = github;

    }
    getRole() {
        return "Engineer";
    }
    getGit() {
        return this.github;
    }
    addHTML() {

        return `<div class="card row m-5">
        <div class="card-body">
        <ul class="list-group">
        <li class="list-group-item">Name: ${this.name}</li>
        <li class="list-group-item">ID: ${this.id}</li>
        <li class="list-group-item">github: <a href="${this.getGit()}">${this.getGit()}</a></li>
        <li class="list-group-item">email: <a href="mailto: ${this.email}">${this.email}</a> </li>
        <li class="list-group-item">${this.getRole()}</li>
      </ul>
        </div>
      </div>`;


    }
}

class Intern extends Employee {
    constructor(eName, id, email, school) {
        super(eName, id, email)
        this.school = school;

    }
    getRole() {
        return "Intern";
    }
    getSchool() {
        return this.school;
    }
    addHTML() {

        return `<div class="card row m-5">
        <div class="card-body">
        <ul class="list-group">
        <li class="list-group-item">Name: ${this.name}</li>
        <li class="list-group-item">ID: ${this.id}</li>
        <li class="list-group-item">school: ${this.getSchool()}</li>
        <li class="list-group-item">email: <a href="mailto: ${this.email}">${this.email}</a> </li>
        <li class="list-group-item">${this.getRole()}</li>
      </ul>
        </div>
      </div>`;
    }
}

module.exports.Employee = Employee
module.exports.Engineer = Engineer
module.exports.Intern = Intern
module.exports.Manager = Manager