const Engineer = require('../lib/Engineer')
test('gets a description of employee', () => {
    const employee = new Engineer('Brett', '4', 'email@gmail.com', 'engineer', 'my-github');
  
    expect(employee.getGithub()).toEqual(expect.stringContaining('my-github'));
    expect(employee.getRole()).toEqual(expect.stringContaining('engineer'));
});
