const inquirer = require("inquirer");
const utilities = require("./utilities");
const {
  initialQuestion,
  internQuestions,
  engineerQuestions,
  managerQuestions,
  teamNameQuestion,
} = require("./questions");
const Intern = require("../lib/Intern");
const Engineer = require("../lib/Engineer");
const Manager = require("../lib/Manager");
const buildPage = require("./writeHtml");

const start = async () => {
  let inProgress = true;
  let answers = await inquirer.prompt(initialQuestion);
  const employeeArray = [];

  while (inProgress) {
    if (answers.member === "int") {
      const { name, id, email, school } = await inquirer.prompt(
        internQuestions
      );
      const intern = new Intern({
        name,
        id,
        email,
        school,
      });
      employeeArray.push(intern);
      answers = await inquirer.prompt(initialQuestion);
    }

    if (answers.member === "eng") {
      const { name, id, email, github } = await inquirer.prompt(
        engineerQuestions
      );
      const engineer = new Engineer({
        name,
        id,
        email,
        github,
      });
      employeeArray.push(engineer);
      answers = await inquirer.prompt(initialQuestion);
    }

    if (answers.member === "man") {
      const { name, id, email, officeNumber } = await inquirer.prompt(
        managerQuestions
      );
      const manager = new Manager({
        name,
        id,
        email,
        officeNumber,
      });
      employeeArray.push(manager);
      answers = await inquirer.prompt(initialQuestion);
    }

    if (answers.member === "dfn") {
      inProgress = false;
    }
  }

  console.log(employeeArray);
  const teamName = await inquirer.prompt(teamNameQuestion);

  console.log(teamName);
  const html = buildPage(employeeArray, teamName);

  utilities.writeToFile("generatedHTML.html", html);
};

start();
