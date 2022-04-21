const Manager = require('../lib/Manager')

test('gets a description of employee', () => {
    const employee = new Manager('Brett', '4', 'email@gmail.com', 'manager');
  
    expect(employee.getRole()).toEqual(expect.stringContaining('manager'));
});
