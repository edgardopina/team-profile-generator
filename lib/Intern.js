// Get parent Employee class
import Employee from '../lib/Employee.js';
// const Employee = require('../lib/Employee.js');

// Intern class definition, inherits from Employee class
// this.school - Intern's school name
class Intern extends Employee {
	constructor(name, id, email, school) {
		super(name, id, email);
		this.school = school;
	}

	getSchool() {
		return this.school;
	}

	getRole() {
		return 'Intern';
	}
}

export default Intern;
// module.exports = Intern;
