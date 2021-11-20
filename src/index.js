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

  while (inProgress) {
    let answers = await inquirer.prompt(initialQuestions);
    const employeeArray = [];
    employeeArray.push(answers);
    console.log(employeeArray);

    if (answers.member === "int") {
      answers = await inquirer.prompt(internQuestions);
      employeeArray.push(answers);
      console.log(employeeArray);
    }

    if (answers.member === "eng") {
      const answers = await inquirer.prompt(engineerQuestions);
      employeeArray.push(answers);
      console.log(employeeArray);
    }

    if (answers.member === "man") {
      const answers = await inquirer.prompt(managerQuestions);
      employeeArray.push(answers);
      console.log(employeeArray);
    } else {
      inProgress = false;
    }
  }

  // console.log(answers);
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
