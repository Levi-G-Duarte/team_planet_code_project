// Import the prompt-sync library to handle user input
const prompt = require("./prompt-sync")
// Import the gravityFactors module which contains factors for different planets
const gravityFactors = require("./gravityFactors")
let userUnit; 
// Define a function to show user factors based on input type and value
function calucalteValue(input) {
    // Initialize an object to hold the results
    let results = {}
    // Declare a variable to hold the unit of measurement
    let unit = userUnit;
    
    // Iterate over each item in the gravityFactors object
    for (let planets in gravityFactors) {
        // Calculate the factor multiplied by the input value and round it to two decimals
        results[planets] = parseFloat((gravityFactors[planets] * input).toFixed(2));
    }
    // Switch case to determine the measurement unit based on factor type
    switch (unit) {
        case "kg":
            for (let units in results) {
                console.log(`Your weight on ${planets} is: ${results[planets]}kg`)
            }
            break;
        case "lbs":
            for (let units in results) {
                console.log(`Your weight on ${planets} is: ${results[planets]}lbs`)
            }
            break;
    }
    // Iterate over the results and log each one
}

function userInput() {
    console.log("Enter your type of unit: ")
    const userUnit = prompt(">");
    console.log(`Enter value: ${userUnit}`)
    const userValue = prompt(">");
    }
// Define a function to get user inputs for factor type and value
    // Prompt the user to enter the type of factor they want to calculate
    // Prompt the user to enter the numerical value of the factor
    // Call the showUserFactors function with the user inputs and the gravity factors
// Expose getUserFactors globally

//Make note that this is another function for the API