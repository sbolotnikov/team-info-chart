//This class inherit from Employee.
const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
    }
// getting the role
    getRole(){
        return "Engineer";
    }
// getting GitHub account
    getGithub(){
        return this.github;
    }
}

module.exports = Engineer;