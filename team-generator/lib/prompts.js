const managerOfficeNumObj = 
    {
        type: 'input',
        name: 'officeNum',
        message: 'What is the office number of this manager? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter an office number!');
            return false;
          }
        }
      }


const engineerGithubObj = 
    {
      type: 'input',
      name: 'github',
      message: 'What is the github username of this engineer? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('You need to enter a github name!');
          return false;
        }
      }
    }


const internSchoolObj = {
    type: 'input',
    name: 'school',
    message: 'What school does this intern go to? (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('You need to enter a school name!');
        return false;
      }
    }
}

const employeePromptArray = [
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of this employee? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('You need to enter a project name!');
          return false;
        }
      }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the id of this employee (Required)',
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('You need to enter an id!');
              return false;
            }
          }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is theis employees email? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('You need to enter a name!');
          return false;
    }}
    },
    {
      type: 'confirm',
      name: 'confirmAddEmployee',
      message: 'Would you like to add another employee? (Required)',
      default: 'n'
    }
];  

const internOrEngineerPrompt = [
    {
      type: 'list',
      name: 'which',
      message: 'Is this employee a engineer or an intern?',
      choices: ['Engineer', 'Intern'],
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('You need to enter a github name!');
          return false;
        }
      }
    }
  ]

// use object destructuring to copy all arrays
module.exports = {internOrEngineerPrompt, employeePromptArray, engineerGithubObj, internSchoolObj, managerOfficeNumObj}