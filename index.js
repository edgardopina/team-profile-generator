import { buildHtml } from './src/buildHtml.js';
import {getTeamData} from './src/buildTeam.js';
import {createEmployeeClassObjects} from './src/createEmployeeClassObjects.js';
import {writeToFile} from './src/writeToFile.js';


const runApp = async () => {
	let employeeListData = [];
	let employeeListObjects = [];
	
	await getTeamData(employeeListData);
	createEmployeeClassObjects(employeeListData, employeeListObjects);
	writeToFile('./dist/index.html', buildHtml(employeeListObjects));
};

runApp();
