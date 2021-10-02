import { buildHtml } from './src/buildHtml.js';
import {getTeamData} from './src/buildTeam.js';
import {createEmployeeClassObjects} from './src/createEmployeeClassObjects.js';


const runApp = async () => {
	let employeeListData = [];
	let employeeListObjects = [];
	
	await getTeamData(employeeListData);
	createEmployeeClassObjects(employeeListData, employeeListObjects);
	buildHtml(employeeListObjects);
};

runApp();
