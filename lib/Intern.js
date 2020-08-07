// This class  inherit from Employee.
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
// getting the role 
    getRole(){
        return "Intern";
    }
// getting the school name
    getSchool(){
        return this.school;
    }
}

module.exports = Intern;
