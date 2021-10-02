import { writeFile } from 'fs';

// function to write 'data' to '/path/to/fileName' file
function writeToFile(fileName, data) {
	return new Promise((resolve, reject) => {
		writeFile(fileName, data, err => {
			// if error, reject the Promise and send the error to  Promise's `.catch()` method
			if (err) {
				reject(err);
				return; // return to prevent  the Promise from accidentally executing the resolve() function as well
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
