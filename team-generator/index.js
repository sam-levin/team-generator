const fs = require ('fs')
const { prompt } = require('inquirer');
const inquirer = require('inquirer');
//const {writeFile} = require("./src/html-template")
const Engineer = require(`./lib/Engineer`)
const Intern = require(`./lib/Intern`)
const Manager = require(`./lib/Manager`);
const { employeePromptArray, managerOfficeNumObj, internOrEngineerPrompt, engineerGithubObj, internSchoolObj } = require('./lib/prompts');
//const // this should use object destructuring to copy all arrays = require (`./lib/prompts`)
const teamArray = [];
// look into async await 
const {template, writeFile} = require(`./src/page-template`)


const internOrEngineer = () => {
  return inquirer
    .prompt (internOrEngineerPrompt)
    .then (choice => {
      if (choice.which === 'Engineer' ) {
        promtEngineer();
      } else {
        promtIntern();
      }
    })
}

const promtEngineer = () => {
  console.log(`
  =================
  Add your Engineer Data
  =================
  `);
  let engineerQsArray = [... employeePromptArray]
  engineerQsArray.splice(3,0,engineerGithubObj)
  return inquirer
    .prompt(engineerQsArray)
  .then (promptData => {
      const engineer = new Engineer(promptData.name, promptData.id, promptData.email, "Engineer", promptData.github);
      teamArray.push(engineer)
      if (promptData.confirmAddEmployee)
           {
        return internOrEngineer();
      } else {
        writeFile(template(teamArray));
      }
    });
}

const promptManager = () => {
  console.log(`
=================
Add your Manager Data
=================
`);
let managerQsArray = [... employeePromptArray];
managerQsArray.splice(3,0,managerOfficeNumObj)
    return inquirer
    .prompt(managerQsArray)
    .then(projectData => {
      const manager = new Manager(projectData.name, projectData.id, projectData.email, "Manager", projectData.officeNum)
      teamArray.push(manager);
      if (projectData.confirmAddEmployee)
           {
        return internOrEngineer();
      } else {
        writeFile(template(teamArray));
      }
    });
};

const promtIntern = () => {
  console.log(`
  =================
  Add your Intern Data
  =================
  `);
  let internQsArray = [... employeePromptArray]
  internQsArray.splice(3,0,internSchoolObj)
  return inquirer
    .prompt(internQsArray)
  .then (promptData => {
      const intern = new Intern(promptData.name, promptData.id, promptData.email, "Engineer", promptData.school);
      teamArray.push(intern)
      if (promptData.confirmAddEmployee)
           {
        return internOrEngineer();
      } else {
        writeFile(template(teamArray));
      }
    });
}

const start = () => {
  promptManager();
}   

start();