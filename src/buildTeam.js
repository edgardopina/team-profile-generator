import inquirer from 'inquirer';
import { teamQuestions, managerQuestions } from '../src/teamQuestions.js';

async function getTeamData(employeeListData) {
   let answers = {
      menuOption: 'Manager',
   };
   employeeListData.push(await inquirer.prompt(managerQuestions, answers));
   return await buildTeam(employeeListData);
}

// parameter employeelist[ ] to enable recursive call to get employees' data
const buildTeam = async (employeeListData = []) => {
	const answers = await inquirer.prompt(teamQuestions);
   if (answers.menuOption !== 'Finish') {
		employeeListData.push(answers);
   }
	return answers.menuOption !== 'Finish' ? buildTeam(employeeListData) : employeeListData;
};


export { buildTeam, getTeamData };
