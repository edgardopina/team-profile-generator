// get Modules
import Manager from '../lib/Manager.js';
import Engineer from '../lib/Engineer.js';
import Intern from '../lib/Intern.js';


// creates employee class objects from inquirer data responses (employeeListData)
function createEmployeeClassObjects(employeeListData) {
	let employeeListObjects = []; // array of employee class objects (Managers, Engineers & Interns)

	// create 'Manager' objects
	employeeListObjects = [...createClassObjects('Manager', employeeListData)];

	// creates 'Engineer' objects and join them with 'Manager' objects
	employeeListObjects = [...employeeListObjects, ...createClassObjects('Engineer', employeeListData)];

	// creates 'Intern' objects and join them with 'Manager' and 'Engineer' objects
	employeeListObjects = [...employeeListObjects, ...createClassObjects('Intern', employeeListData)];

	return employeeListObjects; // returns all inquirer data concerted as class objects
}

// create class objects from inquirer data responses (employeeListData) that match class 'menuOption'
// menuOption carries the class type ('Manager', 'Engineer', 'Intern')
function createClassObjects(menuOption, employeeListData) {
	let employeeListObjects = []; // array of employee class objects (Managers, Engineers & Interns)

	// Process Inquirer responses from employeeListData by filtering the elements that match with menuOption
	// ('Manager' or 'Engineer' or 'Intern') and creates new sub-array  employeeTypeList
	let employeeTypeList = employeeListData.filter(element => element.menuOption === menuOption);

	// Create new CLASS objects forEach employeeType and push to new array employeeListObjects
	// each employeeType has a unique property such as officeNumber, github or school.
	employeeTypeList.forEach(element => {
		if (menuOption === 'Manager') {
			let manager = new Manager(element.name, element.id, element.email, element.officeNumber);
			employeeListObjects.push(manager);
		} else if (menuOption === 'Engineer') {
			let engineer = new Engineer(element.name, element.id, element.email, element.github);
			employeeListObjects.push(engineer);
		} else if (menuOption === 'Intern') {
			let intern = new Intern(element.name, element.id, element.email, element.school);
			employeeListObjects.push(intern);
		}
	});
	
	// Returns array of CLASS objects that match employeeType === menuOption ('Manager', 'Engineer', 'Intern').
	return employeeListObjects;
}

export { createEmployeeClassObjects };
