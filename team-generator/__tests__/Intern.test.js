const Intern = require('../lib/Intern')

test('gets a description of employee', () => {
    const employee = new Intern('Brett', '4', 'email@gmail.com', 'employee','UW');
  
    expect(employee.getSchool()).toEqual(expect.stringContaining('UW'));
    expect(employee.getRole()).toEqual(expect.stringContaining('employee'));
});
