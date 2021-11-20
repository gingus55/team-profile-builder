const inquirer = require("inquirer");
const utilities = require("./utilities");
const {
  initialQuestions,
  internQuestions,
  engineerQuestions,
  managerQuestions,
} = require("./questions");

const start = async () => {
  let inProgress = true;
  let answers = await inquirer.prompt(initialQuestions);
  const employeeArray = [];

  while (inProgress) {
    employeeArray.push(answers);
    // console.log(employeeArray);

    if (answers.member === "int") {
      answers = await inquirer.prompt(internQuestions);
    }

    if (answers.member === "eng") {
      answers = await inquirer.prompt(engineerQuestions);
    }

    if (answers.member === "man") {
      answers = await inquirer.prompt(managerQuestions);
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
