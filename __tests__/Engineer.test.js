// Get Engineer Class definition
const Engineer = require('../lib/Engineer');

// Test case for Engineer object creation
test('create Engineer object', () => {
	const engineer = new Engineer('Eng Edgardo Pina', 999777, 'eng-edgardopina@yahoo.com', 'edgardopina');
	expect(engineer.name).toBe('Eng Edgardo Pina');
	expect(engineer.id).toBe(999777);
	expect(engineer.email).toBe('eng-edgardopina@yahoo.com');
	expect(engineer.github).toBe('edgardopina');
	expect(engineer.getName()).toBe('Eng Edgardo Pina');
	expect(engineer.getId()).toBe(999777);
	expect(engineer.getEmail()).toBe('eng-edgardopina@yahoo.com');
	expect(engineer.getGithub()).toBe('edgardopina');
	expect(engineer.getRole()).toBe('Engineer');
});
