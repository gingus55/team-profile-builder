const initialQuestions = [
  {
    type: "input",
    name: "manager",
    message: "Enter your team manager name:",
  },
  {
    type: "input",
    name: "managerId",
    message: "Enter your employer ID:",
  },
  {
    type: "input",
    name: "managerEmail",
    message: "Enter your email address:",
  },
  {
    type: "input",
    name: "managerOffice",
    message: "Enter your office number:",
  },
  {
    type: "list",
    name: "member",
    message: "Who would you like to add to your team?",
    choices: [
      {
        name: "Engineer",
        value: "eng",
      },
      {
        name: "Manager",
        value: "man",
      },
      {
        name: "Intern",
        value: "int",
      },
      {
        name: "Done for now",
        value: "dfn",
      },
    ],
  },
];

const internQuestions = [
  {
    type: "input",
    name: "internName",
    message: "Enter your interns name:",
  },
  {
    type: "input",
    name: "internId",
    message: "Enter your interns ID:",
  },
  {
    type: "input",
    name: "internEmail",
    message: "Enter your interns email address:",
  },
  {
    type: "input",
    name: "internSchool",
    message: "Enter your interns school:",
  },
  {
    type: "list",
    name: "member",
    message: "Who would you like to add to your team?",
    choices: [
      {
        name: "Engineer",
        value: "eng",
      },
      {
        name: "Manager",
        value: "man",
      },
      {
        name: "Intern",
        value: "int",
      },
      {
        name: "Done for now",
        value: "dfn",
      },
    ],
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "engineerName",
    message: "Enter your engineers name:",
  },
  {
    type: "input",
    name: "engineerId",
    message: "Enter your engineers ID:",
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "Enter your engineers email address:",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your engineers GitHub username:",
  },
  {
    type: "list",
    name: "member",
    message: "Who would you like to add to your team?",
    choices: [
      {
        name: "Engineer",
        value: "eng",
      },
      {
        name: "Manager",
        value: "man",
      },
      {
        name: "Intern",
        value: "int",
      },
      {
        name: "Done for now",
        value: "dfn",
      },
    ],
  },
];

const managerQuestions = [
  {
    type: "input",
    name: "managerName",
    message: "Enter your managers name:",
  },
  {
    type: "input",
    name: "managerId",
    message: "Enter your managers ID:",
  },
  {
    type: "input",
    name: "managerEmail",
    message: "Enter your managers email address:",
  },
  {
    type: "input",
    name: "managerOffice",
    message: "Enter your managers office number:",
  },
  {
    type: "list",
    name: "member",
    message: "Who would you like to add to your team?",
    choices: [
      {
        name: "Engineer",
        value: "eng",
      },
      {
        name: "Manager",
        value: "man",
      },
      {
        name: "Intern",
        value: "int",
      },
      {
        name: "Done for now",
        value: "dfn",
      },
    ],
  },
];

module.exports = {
  initialQuestions,
  internQuestions,
  engineerQuestions,
  managerQuestions,
};
