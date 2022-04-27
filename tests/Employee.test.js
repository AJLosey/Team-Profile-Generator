
const Employee = require("../classes").Employee;

describe("Employee", () => {
    it("should have a name, id, email, and role should be employee", () => {
        const employee = new Employee("Name", "42", "Name@e.mail");

        expect(employee.getName()).toEqual("Name");
        expect(employee.getId()).toEqual("42");
        expect(employee.getEmail()).toEqual("Name@e.mail")
        expect(employee.getRole()).toEqual("Employee");
    })

})