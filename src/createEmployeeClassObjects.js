import Manager from '../lib/Manager.js';
import Engineer from '../lib/Engineer.js';
import Intern from '../lib/Intern.js';

function createClassObjects(menuOption, employeeListData, employeeListObjects) {
	let employeeTypeList = employeeListData.filter(element => element.menuOption === menuOption);
	employeeTypeList.forEach(element => {
		switch (menuOption) {
			case 'Manager':
				employeeListObjects.push(new Manager(element.name, element.id, element.email, element.officeNumber));
				break;
			case 'Engineer':
				employeeListObjects.push(new Engineer(element.name, element.id, element.email, element.github));
				break;
			case 'Intern':
				employeeListObjects.push(new Intern(element.name, element.id, element.email, element.school));
				break;
		}
	});
}

function createEmployeeClassObjects(employeeListData, employeeListObjects) {
	createClassObjects('Manager', employeeListData, employeeListObjects);
	createClassObjects('Engineer', employeeListData, employeeListObjects);
	createClassObjects('Intern', employeeListData, employeeListObjects);
}

export {createEmployeeClassObjects};