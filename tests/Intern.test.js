const Intern = require("../classes").Intern;

describe("Intern", () => {
    it("should have a name, id, email, github, and role should be intern", () => {
        const employee = new Intern("Name", "42", "Name@e.mail", "school");

        expect(employee.getName()).toEqual("Name");
        expect(employee.getId()).toEqual("42");
        expect(employee.getEmail()).toEqual("Name@e.mail")
        expect(employee.getSchool()).toEqual("school");
        expect(employee.getRole()).toEqual("Intern");
    })

})