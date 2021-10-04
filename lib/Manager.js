// get parent class Employee 
import Employee from '../lib/Employee.js';
// const Employee = require('../lib/Employee.js');

// Manager class definition, inherits from Employee class
// this.officeNumber - Manager's office number
class Manager extends Employee {
	constructor(name, id, email, officeNumber) {
		super(name, id, email);
		this.officeNumber = officeNumber;
	}

	getOfficeNumber() {
		return this.officeNumber;
   }
   
	getRole() {
		return 'Manager';
	}
}

export default Manager;
// module.exports = Manager;
