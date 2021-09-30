const Employee = require('../lib/Employee');

test('create Employee object', () => {
   const employee = new Employee('Edgardo Pina', 777, 'edgardopina@yahoo.com');
   expect(employee.name).toBe('Edgardo Pina');
   expect(employee.id).toBe(777);
   expect(employee.email).toBe('edgardopina@yahoo.com');
   expect(employee.getName()).toBe('Edgardo Pina');
   expect(employee.getId()).toBe(777);
   expect(employee.getEmail()).toBe('edgardopina@yahoo.com');
   expect(employee.getRole()).toBe('Employee');
});

