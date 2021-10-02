import Employee from '../lib/Employee.js';

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
