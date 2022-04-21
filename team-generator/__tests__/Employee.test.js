const Employee = require('../lib/Employee')

test('creates an employee object', () => {
    const employee = new Employee('Brett', '4', 'email@gmail.com', 'manager');
  
    expect(employee.name).toBe('Brett');
    expect(employee.id).toBe('4');
    expect(employee.email).toBe('email@gmail.com');
    expect(employee.role).toBe('manager');
});

test('gets a description of employee', () => {
    const employee = new Employee('Brett', '4', 'email@gmail.com', 'employee');
  
    expect(employee.getName()).toEqual(expect.stringContaining('Brett'));
    expect(employee.getID()).toEqual(expect.stringContaining('4'));
    expect(employee.getEmail()).toEqual(expect.stringContaining('email@gmail.com'));
    expect(employee.getRole()).toEqual(expect.stringContaining('employee'));
});

