
const { isNumber, isString } = require("util");

const questionsArr = [
    {
        type: "list",
        message: "Please choose your position in the team.",
        choices: ["Manager", "Engineer", "Intern"],
        default: 0,
        name: "employeePosition"
    },
    {
        type: "input",
        message: "Please enter your name.",
        name: "employeeName",
        validate: employeeName => {
            let alphaExp = /^[A-Za-z0-9][A-Za-z0-9]+([\ A-Za-z0-9][A-Za-z0-9]+)*/;
            if (!employeeName.match(alphaExp)) {
                return "Please use letters and numbers";
            } else {
                return true

            }
        }
    },
    // {
    //     type: "input",
    //     message: "Please enter your emploee ID.",
    //     name: "employeeID",
    //     validate: employeeID => {
    //         let alphaExp = /^[0-9]/;
    //         if (!employeeID.match(alphaExp)) {
    //             return "It should only have numbers";
    //         } else {
    //             return true;
    //         }
    //     }
    // },
    {
        type: "input",
        message: "Enter your email address.",
        name: "email",
        validate: email => {
            let alphaExp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
            if (!email.match(alphaExp)) {
                return "Please enter a valid e-mail";
            } else {
                return true;
            }
        }
    },
    {
        type: "input",
        message: "Please input your Github username.",
        name: "gitHubAddress",
        validate: gitHubAddress => {
            let alphaExp = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
            if (!gitHubAddress.match(alphaExp)) {
                return "Use alphanumeric characters or hyphens.No consecutive hyphens.No begin or end with a hyphen. Max length 39";
            } else {
                return true;
            }
        },
        when: function (response) { return response.employeePosition === "Engineer" }
    },
    {
        type: "input",
        message: "Please input your office number.",
        name: "officeNumber",
        validate: officeNumber => {
            let alphaExp = /^[0-9]/;
            if (!officeNumber.match(alphaExp)) {
                return "It should only have numbers";
            } else {
                return true;
            }
        },
        when: function (response) { return response.employeePosition === "Manager" }
    },
    {
        type: "input",
        message: "Please input your school.",
        name: "school",
        validate: school => {
            if (school.length < 1) {
                return "Name is too short";
            }
            else {
                return true;
            }
        },
        when: function (response) { return response.employeePosition === "Intern" }
    },
    {
        type: "confirm",
        message: " Would you like to enter another Employee data?",
        name: "nextE",
    },

];
module.exports = questionsArr;