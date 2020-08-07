//the main parent Employee class

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
// getting Name
    getName() {
        return this.name;
    }
// getting ID
    getId() {
        return this.id;
    }
// getting email
    getEmail() {
        return this.email;
    }
// getting the role
    getRole() {
        return "Employee";
    }
}


module.exports = Employee;