const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, role, officeNum) {
        super(name, id, email, role);
        this.officeNum = officeNum;
    }
}


module.exports = Manager