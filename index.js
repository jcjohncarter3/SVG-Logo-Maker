const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter a text",
    },
    {
        type: "input",
        name: "textColor",
        message: "Enter a color for the text",
    },
    {   type: "list",
        name: "shape",
        message: "Choose a shape",
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Enter shape color",
    },
    
];

function init() {
    inquirer.prompt (questions).then (answers => {
        console.log (answers)
        

    });
 };

 init(); 