const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const buildStart = ({ teamName }) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100;300;500&display=swap" rel="stylesheet">
<link href="./fontawesome/css/all.css" rel="stylesheet">
    <link href="../dist/mock.css" rel="stylesheet" />
    <title>Document</title>
  </head>
  <body>
    <header>${teamName}</header>
    <main class="card-container">`;

const buildEnd = () => `
    </main>
  </body>
</html>`;

const buildManager = ({ name, id, email, officeNumber }) => `
<div class="card">
        <div class="card-title">
          <div id="nameText">${name}</div>
          <div><i class="fas fa-mug-hot"></i>Manager</div>
        </div>
        <div class="card-info-container">
          <div class="contacts">ID: ${id}</div>
          <div class="contacts"><a href="mailto: ${email}">Email: ${email}</a></div>
          <div class="contacts">Office: ${officeNumber}</div>
        </div>
      </div>`;

const buildEngineer = ({ name, id, email, github }) => `
<div class="card">
        <div class="card-title">
          <div id="nameText">${name}</div>
          <div><i class="fas fa-hard-hat"></i>Engineer</div>
        </div>
        <div class="card-info-container">
          <div class="contacts">ID: ${id}</div>
          <div class="contacts"><a href="mailto:${email}">Email: ${email}</a></div>
          <div class="contacts"><a href="https://github.com/${github}">GitHub Username: ${github}</a></div>
        </div>
      </div>`;

const buildIntern = ({ name, id, email, school }) => `
<div class="card">
        <div class="card-title">
          <div id="nameText">${name}</div>
          <div><i class="fas fa-graduation-cap"></i>Intern</div>
        </div>
        <div class="card-info-container">
          <div class="contacts">ID: ${id}</div>
          <div class="contacts"><a href="mailto:${email}">Email: ${email}</a></div>
          <div class="contacts">School: ${school}</div>
        </div>
      </div>`;

const buildPage = (array, teamName) => {
  // build entire page
  const start = buildStart(teamName);

  let htmlString = "";

  array.forEach((element) => {
    if (element instanceof Manager) {
      const manCard = buildManager(element);
      htmlString += manCard;
    }
    if (element instanceof Engineer) {
      const engCard = buildEngineer(element);
      htmlString += engCard;
    }
    if (element instanceof Intern) {
      const intCard = buildIntern(element);
      htmlString += intCard;
    }
  });
  const end = buildEnd();

  const complete = start + htmlString + end;

  return complete;
};

module.exports = buildPage;
