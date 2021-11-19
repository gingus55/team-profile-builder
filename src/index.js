const inquirer = require("inquirer");
const utilities = require("./utilities");
const {
  initialQuestions,
  internQuestions,
  engineerQuestions,
  managerQuestions,
} = require("./questions");

const start = async () => {
  const answers = await inquirer.prompt(initialQuestions);
  const employeeArray = [];

  console.log(answers);
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
