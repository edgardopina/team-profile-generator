import {htmlTopSection, htmlBottomSection} from '../src/indexHtmlTemplates.js';

function buildHtml(employeeListObjects) {
   let htmlBodySection = ``;
   let uniqueLabel = '';
   let uniqueValue = '';
   let iconClass = "";
   
   employeeListObjects.forEach(element => {
      // let role = element.getRole();
      switch (element.getRole()) {
			case 'Manager':
				uniqueLabel = 'Office number';
            uniqueValue = element.getOfficeNumber();
            iconClass = "bi bi-person-circle";
				break;
         case 'Engineer':
            uniqueLabel = 'GitHub';
            uniqueValue = `<a href="https://github.com/${element.github}" target="_blank" rel="noopener noreferrer"  class='card-link'>${element.getGithub()}</a>`;
            iconClass = "bi bi-wrench";
				break;
         case 'Intern':
            uniqueLabel = 'School';
            uniqueValue = element.getSchool();
            iconClass = "bi bi-eyeglasses";
         
         break;
		}

      htmlBodySection += `
           <div class="card col-12 col-sm-5 col-lg-3">
               <div class="card-body">
                  <h5 class="card-title">${element.name}</h5>
                  <i class="${iconClass}" style="font-size: 1.1rem"><spam> ${element.getRole()}</spam></i>
               </div>
               <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${element.id}</li>
                  <li class="list-group-item">Email: <a href='mailto:${element.email}' class="card-link">${
			element.email
		}</a></li>
                  <li class="list-group-item">${uniqueLabel}: ${uniqueValue}</li>
               </ul>
            </div>
`;
   });

   return htmlTopSection + htmlBodySection + htmlBottomSection;
}

export { buildHtml }
