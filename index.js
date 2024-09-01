const fs = require("fs");
const inquirer = require("inquirer");
const {Shape, Circle, Square, Triangle} = require("./lib/shapes")
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
        
        // const circle = new Circle(answers.text, answers.textColor, answers.shapeColor);
        // console.log(circle.render())

        if (answers.shape === "Circle"){
            const circle = new Circle(answers.text, answers.textColor, answers.shapeColor);
        console.log(circle.render())
        writeToFile("logo.svg", circle.render() )
        } else if (answers.shape === "Square") {
            const square = new Square(answers.text, answers.textColor, answers.shapeColor);
            console.log(square.render())
            writeToFile("logo.svg", square.render() )
        } else if (answers.shape === "Triangle") {
            const triangle = new Triangle(answers.text, answers.textColor, answers.shapeColor);
            console.log(triangle.render())
            writeToFile("logo.svg", triangle.render() )
        }

    });
 };

 function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data, err => {
        if (err) {
          console.error(err);
        } else {
          // file written successfully
          console.log("Generated logo.svg");
        }
      });

}

 
 init(); 