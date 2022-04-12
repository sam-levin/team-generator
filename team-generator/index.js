const { write } = require('fs');
const { prompt } = require('inquirer');
const inquirer = require('inquirer');
const { reduceRight } = require('lodash');
const { title } = require('process');
//const {writeFile} = require("./src/html-template")



function Employee(name, id) {
    this.name = name,
    this.id = id
}

const teamArray = [];

const promptEmployee = () => {
    console.log(`
  =================
  Add a New Employee
  =================
  `);
  
    // If there's no 'employees' array , create one
    return inquirer
      .prompt([
        {
            type: 'checkbox',
            name: 'role',
            message: 'What role does this person have?',
            choices: ['Engineer', 'Intern']
          },
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
          type: 'confirm',
          name: 'addNewEmployee',
          message: 'Would you like to enter another employee?',
          default: false
        }
      ])
      .then(projectData => {
        teamArray.push(projectData); // this needs to be constructing an object with the variables 
        console.log(teamArray)
        if (projectData.addNewEmployee) {
          return promptEmployee();
        } else {
          return teamArray;
        }
      });
};


const promptManager = () => {
    console.log(`
  =================
  Add your Manager Data
  =================
  `);
      return inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is the managers name? (Required)',
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('You need to enter a name!');
              return false;
            }
          }
        },
        {
          type: 'confirm',
          name: 'confirmAddEmployee',
          message: 'Would you like to enter another employee?',
          default: false
        },
        {
          type: 'input',
          name: 'id',
          message: 'What is the managers id? (Required)',
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('You need to enter a name!');
              return false;
        }}
        }
      ])
      .then(projectData => {
        const manager = new Employee(projectData.name, projectData.id)
        teamArray.push(manager);
        console.log(teamArray)
        if (projectData.confirmAddEmployee)
             {
          return promptEmployee();
        } else {
          return teamArray;
        }
      });
};



    

promptManager()
    .then(teamData => {
        console.log(teamData)
    });
    
    /*    return generatePage(portfolioData);
    })
    .then(pageHTML => {
      return writeFile(pageHTML);
    })*/


    /* Basically, what I need to happen is a node file, that when called will ask for first the manager
        then it will ask for other employees, or to finish building the team
            if intern is selected, the intern will be created, then pushed to array of employees
            if engineer is selected, the engineer will be created
            these will all create objects
            html file will create page 
                for each employee in array
                    create a card

    */