// get modules
import {buildHtml} from './src/buildHtml.js';
import {getTeamData} from './src/buildTeam.js';
import {createEmployeeClassObjects} from './src/createEmployeeClassObjects.js';
import {writeToFile} from './src/writeToFile.js';

// starts app
const runApp = async () => {
	let employeeListData = []; // inquirer reponses placeholder
	
	await getTeamData(employeeListData); // gets team data from inquirer
	let employeeListObjects = createEmployeeClassObjects(employeeListData); // create class objects from inquirer data
	let htmlPage = buildHtml(employeeListObjects); // build html page from class objects list
	await writeToFile('./dist/index.html', htmlPage); // write index.html file
};

runApp();
