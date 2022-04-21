const { employeePromptArray } = require("../lib/prompts");
const fs = require ('fs')


const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/index.html', fileContent, err => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }

      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: 'File created!'
      });
    });
  });
};

const template = (teamObject) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Teammaker Demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  
  <header>
    <nav class="bg-primary text-light p-3">
      <h2>Team Members</h2>
    </nav>
  </header>

  <div class="employees container-fluid">
  ${generateEmployeeData(teamObject)}
  </div>

 `
  
}

const extraObj = (employeeObj) => {
  if (employeeObj.role === "Manager") {
    return (`Office number : ${employeeObj.officeNum}`)
  } else if (employeeObj.role === "Engineer") {
    return (`Github : <a href="github.com/">${employeeObj.github}</a>`)
  } else {
    return (`School : ${employeeObj.school}`)
  }

}

const createCard = (employeeObj) => {
  return `
  <div class="card m-3">
    <div class="card-header text-light p-2 bg-primary">
        <h3>${employeeObj.name}</h3>
        <h3>Role: ${employeeObj.role}</h3>
    </div>
    <div class="card-body p-2">
        <h6>Employee ID: ${employeeObj.id}</h6>
        <h6>Email this Employee at <a href="mailto:${employeeObj.email}">${employeeObj.email}</a></h6>
        <h6>${extraObj(employeeObj)}</h6>
    </div>
</div>
  `
}


const generateEmployeeData = (finishedEmployeeArray) => {
  let employeeString = ``
  for (i = 0; i < finishedEmployeeArray.length; i++ ) {
    let newEmployeeCard = createCard(finishedEmployeeArray[i])
    //console.log(newEmployeeCard)
    employeeString += newEmployeeCard
  }  

  return employeeString;
}





const generateProjects = projectsArr => {
    return `
      <section class="my-3" id="portfolio">
        <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
        <div class="flex-row justify-space-between">
        ${projectsArr
          .filter(({ feature }) => feature)
          .map(({ name, description, languages, link }) => {
            return `
            <div class="col-12 mb-2 bg-dark text-light p-3">
              <h3 class="portfolio-item-title text-light">${name}</h3>
              <h5 class="portfolio-languages">
                Built With:
                ${languages.join(', ')}
              </h5>
              <p>${description}</p>
              <a href="${link}" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
            </div>
          `;
          })
          .join('')}
  
        ${projectsArr
          .filter(({ feature }) => !feature)
          .map(({ name, description, languages, link }) => {
            return `
            <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
              <h3 class="portfolio-item-title text-light">${name}</h3>
              <h5 class="portfolio-languages">
                Built With:
                ${languages.join(', ')}
              </h5>
              <p>${description}</p>
              <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
            </div>
          `;
          })
          .join('')}
        </div>
      </section>
    `;
  };


module.exports = {generateEmployeeData, template, createCard, writeFile}