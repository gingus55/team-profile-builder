const inquirer = require("inquirer");
const utilities = require("./utilities");
const {
  initialQuestions,
  internQuestions,
  engineerQuestions,
  managerQuestions,
} = require("./questions");
const Intern = require("../lib/Intern");
const Engineer = require("../lib/Engineer");
const Manager = require("../lib/Manager");

const start = async () => {
  let inProgress = true;
  let answers = await inquirer.prompt(initialQuestions);
  const employeeArray = [];

  while (inProgress) {
    employeeArray.push(answers);
    // console.log(employeeArray);

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
      console.log(intern);
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
      console.log(engineer);
    }

    if (answers.member === "man") {
      const { name, id, email, office } = await inquirer.prompt(
        managerQuestions
      );
      const manager = new Manager({
        name,
        id,
        email,
        office,
      });
      console.log(manager);
    }

    if (answers.member === "dfn") {
      employeeArray.push(answers);
      inProgress = false;
    }
  }

  console.log(employeeArray);
  // if (answers.installationIncluded) {
  //   let active = true;
  //   while (active) {
  //     installationInstructions = await inquirer.prompt(installQuestions);
  //     if (installationInstructions.continue) {
  //       instructionsArray.push(installationInstructions.step);
  //     } else {
  //       instructionsArray.push(installationInstructions.step);
  //       active = false;
  //     }
  //   }
  // }
  // const readmeDoc = writeReadme(readmeAnswers, instructionsArray);

  // utilities.writeToFile("generatedREADME.md", readmeDoc);
};

start();
