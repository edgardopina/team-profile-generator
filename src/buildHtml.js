import {htmlTopSection, htmlBottomSection} from '../src/indexHtmlTemplates.js';

function buildHtml(employeeListObjects) {
   let htmlBodySection = ``;
   let uniqueLabel = '';
   let uniqueValue = '';

   employeeListObjects.forEach(element => {
      // let role = element.getRole();
      switch (element.getRole()) {
			case 'Manager':
				uniqueLabel = 'Office number';
				uniqueValue = element.getOfficeNumber();
				break;
			case 'Engineer':
				uniqueLabel = 'GitHub';
				uniqueValue = element.getGithub();
				break;
			case 'Intern':
				uniqueLabel = 'School';
				uniqueValue = element.getSchool();
				break;
		}

      htmlBodySection += `
           <div class="card col-4" style="width: 25rem">
               <img src="..." class="card-img-top" alt="..." />
               <div class="card-body">
                  <h5 class="card-title">${element.name}</h5>
                  <p class="card-text">${element.getRole()}</p>
               </div>
               <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${element.id}</li>
                  <li class="list-group-item">Email: <a href="#" class="card-link">${element.email}</a></li>
                  < class="list-group-item">${uniqueLabel}: ${uniqueValue}
               </ul>
            </div>
`;
   });

   return htmlTopSection + htmlBodySection + htmlBottomSection;
}

export { buildHtml }
