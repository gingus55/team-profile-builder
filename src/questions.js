const initialQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter your team manager name:",
  },
  {
    type: "input",
    name: "id",
    message: "Enter your employer ID:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
  },
  {
    type: "input",
    name: "office",
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
    name: "name",
    message: "Enter your interns name:",
  },
  {
    type: "input",
    name: "id",
    message: "Enter your interns ID:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your interns email address:",
  },
  {
    type: "input",
    name: "school",
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
    name: "name",
    message: "Enter your engineers name:",
  },
  {
    type: "input",
    name: "id",
    message: "Enter your engineers ID:",
  },
  {
    type: "input",
    name: "email",
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
    name: "name",
    message: "Enter your managers name:",
  },
  {
    type: "input",
    name: "id",
    message: "Enter your managers ID:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your managers email address:",
  },
  {
    type: "input",
    name: "office",
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
