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
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>

  <div class="employees">
  ${generateEmployeeData(teamObject)}
  </div>

 `
  
}


const createCard = (employeeObj) => {
  return `
  <div class="card">
    <div class="card-main">
        <h3>${employeeObj.name}</h3>
        <h4>${employeeObj.role}</h4>
    </div>
    <div class="card-details">
        <h6>${employeeObj.id}</h6>
        <h6>${employeeObj.email}</h6>
        <h6>Extra</h6>
    </div>
</div>
  `
}


const generateEmployeeData = (finishedEmployeeArray) => {
  let employeeString = ``
  for (i = 0; i < finishedEmployeeArray.length; i++ ) {
    let newEmployeeCard = createCard(finishedEmployeeArray[i])
    //console.log(newEmployeeCard)
    employeeString.concat(newEmployeeCard)
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

// module.exports = templateData => {
//     // destructure page data by section
//     const { projects, about, ...header } = templateData;
  
//     return `
//     <!DOCTYPE html>
//     <html lang="en">
  
//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <meta http-equiv="X-UA-Compatible" content="ie=edge">
//       <title>Portfolio Demo</title>
//       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
//       <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
//       <link rel="stylesheet" href="style.css">
//     </head>
  
//     <body>
//       <header>
//         <div class="container flex-row justify-space-between align-center py-3">
//           <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
//         </div>
//       </header>
//       <main class="container my-5">
//         ${generateTeamMembers(teamMembers)}
//       </main>
//       <footer class="container text-center py-3">
//         <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${header.name}</h3>
//       </footer>
//     </body>
//     </html>
//     `;
//   };