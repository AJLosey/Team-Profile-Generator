const Manager = require("../classes").Manager;

describe("Manager", () => {
    it("should have a name, id, email, github, and role should be manager", () => {
        const employee = new Manager("Name", "42", "Name@e.mail", "007");

        expect(employee.getName()).toEqual("Name");
        expect(employee.getId()).toEqual("42");
        expect(employee.getEmail()).toEqual("Name@e.mail")
        expect(employee.getRole()).toEqual("Manager");
    })

})