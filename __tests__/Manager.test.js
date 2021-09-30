const Manager = require('../lib/Manager');

test('create Manager object', () => {
	const manager = new Manager('Mgr Edgardo Pina', 888777, 'mgr-edgardopina@yahoo.com', 2341);
	expect(manager.name).toBe('Mgr Edgardo Pina');
	expect(manager.id).toBe(888777);
   expect(manager.email).toBe('mgr-edgardopina@yahoo.com');
   expect(manager.officeNumber).toBe(2341)
	expect(manager.getName()).toBe('Mgr Edgardo Pina');
	expect(manager.getId()).toBe(888777);
   expect(manager.getEmail()).toBe('mgr-edgardopina@yahoo.com');
   expect(manager.getOfficeNumber()).toBe(2341);
	expect(manager.getRole()).toBe('Manager');
});
