const managerQuestions = [
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

//   {
//     type: "confirm",
//     name: "installationIncluded",
//     message: "Do I need to install your application?",
//   },
//   {
//     type: "confirm",
//     name: "testIncluded",
//     message: "Are there tests for this application?",
//   },
//   {
//     type: "input",
//     name: "tests",
//     message: "How do I test your application?",
//     when: (answers) => answers.testIncluded,
//   },
//   {
//     type: "list",
//     name: "license",
//     message: "What license is required for this project?",
//     choices: [
//       {
//         name: "MIT",
//         value: "mit",
//       },
//       {
//         name: "GitHub",
//         value: "github",
//       },
//       {
//         name: "BossMan",
//         value: "bossman",
//       },
//       {
//         name: "No License Required",
//         value: "none",
//       },
//     ],
//   },
//   {
//     type: "input",
//     name: "githubName",
//     message: "What is your GitHub username?",
//   },
//   {
//     type: "input",
//     name: "email",
//     message: "What is your email address?",
//   },
// ];
