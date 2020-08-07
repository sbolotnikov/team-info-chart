// This class inherit from Employee.
const Employee = require('./Employee');
class Manager extends Employee {
    constructor(name, id, email, officeN){
        super(name, id, email);
        this.officeNumber = officeN;
    }
// getting the role
    getRole(){
        return "Manager";
    }
//  getting Office Number
    getOfficeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;