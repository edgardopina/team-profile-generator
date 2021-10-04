// get Modules
import inquirer from 'inquirer';
import { teamQuestions, managerQuestions } from '../src/teamQuestions.js';
import { mockUpTeamAnswers, mockUpManagerAnswers } from '../src/inquirerMockUpData.js';

// uses inquirer to get 'Manager' data team members ('Engineer' and 'Interm') data
async function getTeamData(employeeListData) {
	let answers = {
		menuOption: 'Manager', // creates manager selection for initial prompt
	};

	// ToDo: for MOCK-UP processing replace replace 'answers' by 'mockUpManagerAnswers'

	// gets 'Manager' data
	employeeListData.push(await inquirer.prompt(managerQuestions, answers));

	// ToDo: for MOCK-UP processing replace un-comment line #18 and comment line #21
	// employeeListData.push(...mockUpTeamAnswers);

	// get team's data by recursively calling 'getTeamData' function
	await buildTeam(employeeListData);
}


// function to recursively prompt for team data;  parameter employeeListData enables recursive
// call by accumulating/pushing the previous responses with the new prompts responses
const buildTeam = async (employeeListData = []) => {
	
	// get team member's data with inquirer
	const answers = await inquirer.prompt(teamQuestions);

	// if user selected 'Engineer' or 'Intern' push inquirer's data
	if (answers.menuOption !== 'Finish') {
		employeeListData.push(answers);
	}

	// are we done? NO-recursive call for another employee : YES-return employee list
	return answers.menuOption !== 'Finish' ? buildTeam(employeeListData) : employeeListData;
};

export { buildTeam, getTeamData };
