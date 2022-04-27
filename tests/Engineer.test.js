const Engineer = require("../script").Engineer;

describe("Engineer", () => {
    it("should have a name, id, email, github, and role should be engineer"), () => {
        const employee = new Engineer("Name", "42", "Name@e.mail", "engGit");

        expect(employee.getName()).toEqual("Name");
        expect(employee.getId()).toEqual("42");
        expect(employee.getEmail()).toEqual("Name@e.mail")
        expect(employee.getGit()).toEqual("engGit");
        expect(employee.getRole()).toEqual("Engineer");
    }

})