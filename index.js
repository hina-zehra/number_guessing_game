#! /usr/bin/env node
import inquirer from "inquirer";
let favNumber = 25;
let yourGuess = await inquirer.prompt([
    { message: "guess the correct number",
        type: "number",
        name: "yourNumber" },
]);
if (yourGuess.yourNumber === favNumber) {
    console.log("congrats , you guessed it right!");
}
else if (yourGuess.yourNumber <= 24) {
    console.log("you're close , keep guessing ");
}
else if (yourGuess.yourNumber >= 26) {
    console.log("ahan i think you're on the wrong track , you're going far from the target.");
}
else {
    console.log("oops wrong guess");
}
