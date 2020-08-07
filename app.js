// dependencies
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
// global array and variables to keep track that there is at least 1 Manager and Engineer
var employees = [];
let isManager = false;
let isEngineer = false;
var teamName = "";
// Asking user questions about team members, validate them and store in employees array
function inputEmployeeInfo() {
    let employeeData = {};
    inquirer.prompt(questionsArr).then(response => {
        if (response.employeePosition === "Manager") {
            employeeData = new Manager(response.employeeName, response.employeeID, response.email, response.officeNumber);
            isManager = true
        } else if (response.employeePosition === "Engineer") {
            employeeData = new Engineer(response.employeeName, response.employeeID, response.email, response.gitHubAddress);
            isEngineer = true;
        } else {
            employeeData = new Intern(response.employeeName, response.employeeID, response.email, response.school);
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
// getting the name of the team and validate it
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

