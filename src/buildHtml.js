// get HTML templates
import {htmlTopSection, htmlBottomSection} from '../src/indexHtmlTemplates.js';


// builds HTML content from array employeeListObjects
function buildHtml(employeeListObjects) {
	let htmlBodySection = ``; // placeholder for dinamically generated HTML code

	// process each class-object
	employeeListObjects.forEach(element => {
		// variables to handle data differences between objects
		let uniqueLabel = '';
		let uniqueValue = '';
		let iconClass = '';

		// dinamically generates unique data values that depend on the employee's role
		switch (element.getRole()) {
			case 'Manager':
				uniqueLabel = 'Office Number: ';
				uniqueValue = element.getOfficeNumber();
				iconClass = 'bi bi-person-circle';
				break;
			case 'Engineer':
				uniqueLabel = 'GitHub: ';
				uniqueValue = `
               <a href='https://github.com/${element.getGithub()}' target='_blank' rel='noopener noreferrer' class='card-link'>${element.getGithub()}</a>
            `;
				iconClass = 'bi bi-wrench';
				break;
			case 'Intern':
				uniqueLabel = 'School: ';
				uniqueValue = element.getSchool();
				iconClass = 'bi bi-eyeglasses';
				break;
		}

		// dinamically build HTML 'cards' for each employee object ('Manager', 'Engineer', 'Intern');
		htmlBodySection += `
            <div class="card col-12 col-sm-5 col-lg-3">
               <div class="card-body">
                  <h5 class="card-title">${element.getName()}</h5>
                  <i class="${iconClass}"><spam> ${element.getRole()}</spam></i>
               </div>
               <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${element.getId()}</li>
                  <li class="list-group-item">Email: <a href="mailto:${element.getEmail()}" class="card-link">${element.getEmail()}</a></li>
                  <li class="list-group-item">${uniqueLabel}${uniqueValue}</li>
               </ul>
            </div>
`;
	});

	// Merges HTML templates (top & bottom sections) with dynamically generated HTML page (htmlBodySection)
	return htmlTopSection + htmlBodySection + htmlBottomSection;
}

export { buildHtml };
