const Intern = require('../lib/Intern');

test('create Intern object', () => {
	const intern = new Intern('Int Edgardo Pina', 111777, 'int-edgardopina@yahoo.com', 'UofU');
	expect(intern.name).toBe('Int Edgardo Pina');
	expect(intern.id).toBe(111777);
	expect(intern.email).toBe('int-edgardopina@yahoo.com');
	expect(intern.school).toBe('UofU');
	expect(intern.getName()).toBe('Int Edgardo Pina');
	expect(intern.getId()).toBe(111777);
	expect(intern.getEmail()).toBe('int-edgardopina@yahoo.com');
	expect(intern.getSchool()).toBe('UofU');
	expect(intern.getRole()).toBe('Intern');
});
