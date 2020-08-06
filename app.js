const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const questionsArr = require('./lib/questions')
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
var employees = [];
let isManager = false;
let isEngineer = false;
var teamName = "";
function inputEmployeeInfo() {
    let employeeData = {};
    inquirer.prompt(questionsArr).then(response => {
        if (response.employeePosition === "Manager") {
            employeeData = new Manager(response.employeeName, employees.length + 1, response.email, response.officeNumber);
            isManager = true
        } else if (response.employeePosition === "Engineer") {
            employeeData = new Engineer(response.employeeName, employees.length + 1, response.email, response.gitHubAddress);
            isEngineer = true;
        } else {
            employeeData = new Intern(response.employeeName, employees.length + 1, response.email, response.school);
        }
        employees.push(employeeData);
        if (response.nextE) {
            inputEmployeeInfo();
        } else {

            if (isManager === false) {
                console.log("There is no manager on team");
                inputEmployeeInfo();
            } else if (isEngineer === false) {
                console.log("There is no engineers on team");
                inputEmployeeInfo();
            } else {
                fs.writeFile(outputPath, render(employees, teamName), (er) => {
                    if (er) return console.log(er);
                    console.log(`team.html completed...Look for ${outputPath}`);
                });
                return
            }
        }


    });
};
function getTeamName() {
    inquirer.prompt([
        {
            type: "input",
            message: "Please input your team name.",
            name: "teamName",
            validate: teamName => {
                if (teamName.length < 1) {
                    return "Team name is too short";
                }
                else {
                    return true;
                }
            },
        },
    ]).then(response => {
        teamName = response.teamName;
        inputEmployeeInfo();
    });
}
getTeamName();
// inputEmployeeInfo();


// fs.writeFile(`Team_${response.name}.html`, render(employees), (er) => {






    // console.log(`Team_${response.repo}.html completed...Look for ./output/Team_${response.repo}.html`); 
// });






// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
