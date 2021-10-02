import fs from 'fs';
function buildHtml(employeeListObjects) {
	const htmlTopSection = `
<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
      <title>My Team</title>
   </head>
   <body>
      <header id="header">
         <h1>My Team</h1>
      </header>
      <div class="container">
         <div class="row">
`;

	const htmlBottomSection = `
            </div>
         </div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.1/js/bootstrap.min.js"></script>
   </body>
</html>
`;
   let htmlBodySection = ``;

	employeeListObjects.forEach(element => {
		let role = element.getRole();
		let uniqueLabel = '';
		let uniqueValue = '';

		switch (role) {
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

	console.log('htmlPage', htmlPage);
}

export { buildHtml };
