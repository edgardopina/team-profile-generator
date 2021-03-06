import { writeFile } from 'fs';

// wrapper function to create a promise when using fs.writeFile
function writeToFile(fileName, data) {
	return new Promise((resolve, reject) => {
		writeFile(fileName, data, err => {
			// if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
			if (err) {
				reject(err);
				// return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
				return;
			}
			// if everything went well, resolve the Promise and send the successful data to the `.then()` method
			resolve({
				ok: true,
				message: 'File created!',
			});
		});
	});
}

export { writeToFile };
