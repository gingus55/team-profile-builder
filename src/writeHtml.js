const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

const buildStart = () => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="mock.css" rel="stylesheet" />
    <title>Document</title>
  </head>
  <body>
    <header>Title</header>
    <main class="card-container">`;

const buildEnd = () => `
    </main>
  </body>
</html>`;

const buildManager = ({ name, id, email, officeNumber }) => `
<div class="card">
        <div class="card-title">
          <div>${name}</div>
          <div>Manager</div>
        </div>
        <div class="card-info-container">
          <div class="contacts">ID:${id}</div>
          <div class="contacts">Email:${email}</div>
          <div class="contacts">Office:${officeNumber}</div>
        </div>
      </div>`;

const buildEngineer = ({ name, id, email, github }) => `
<div class="card">
        <div class="card-title">
          <div>${name}</div>
          <div>Engineer</div>
        </div>
        <div class="card-info-container">
          <div class="contacts">ID:${id}</div>
          <div class="contacts">Email:${email}</div>
          <div class="contacts">GitHub Username:${github}</div>
        </div>
      </div>`;

const buildIntern = ({ name, id, email, school }) => `
<div class="card">
        <div class="card-title">
          <div>${name}</div>
          <div>Intern</div>
        </div>
        <div class="card-info-container">
          <div class="contacts">ID:${id}</div>
          <div class="contacts">Email:${email}</div>
          <div class="contacts">School:${school}</div>
        </div>
      </div>`;

const buildPage = (array) => {
  // build entire page
  const start = buildStart();

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
