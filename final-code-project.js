// Import the prompt-sync library to handle user input
const prompt = require("prompt-sync")()
// Import the gravityFactors module which contains factors for different planets
const gravityFactors = require("./utils/earthGravityFactors.js")
// let userUnit;
// Define a function to show user factors based on input type and value
function showUserFactors(factorType, factorSystem, factorMeasurement, factorValue, factorPlanet) {
    // Initialize an object to hold the results
    const results = {}
    // Declare a variable to hold the unit of measurement
    let measurement
    // let unit = userUnit;
    // let planets;

    // Iterate over each item in the gravityFactors object
    for (let planets in gravityFactors) {
        // Calculate the factor multiplied by the input value and round it to two decimals
        // results[planets] = parseFloat((gravityFactors[planets] * input).toFixed(2));
        results[planets] = parseFloat((factorUnit * gravityFactors[planets]).toFixed(2));
    }
    // Switch case to determine the measurement unit based on factor type
    switch (factorType) {
        case "jump":
            measurement = 'cm'
            // for (let units in results) {
            //     console.log(`Your weight on ${planets} is: ${results[planets]}kg`)
            // }
            break;
        case "weight":
            measurement = "kg"
            // for (let units in results) {
            //     console.log(`Your weight on ${planets} is: ${results[planets]}lbs`)
            // }
            break;
        default:
            measurement = "units"
    }
    // Iterate over the results and log each one
    for (let planets in results) {
        console.log(`Your ${factorType} on ${planets} is ${results[planets]}${measurement}`);
    }
}

function userInput() {
    console.log(`Enter your type of factor:`)
    const factorType = prompt(">");
    console.log(`Enter system of measurement:`)
    const factorSystem = prompt(">");

    showUserFactors(factorType, factorUnit)
}
// Define a function to get user inputs for factor type and value
    // Prompt the user to enter the type of factor they want to calculate
    // Prompt the user to enter the numerical value of the factor
    // Call the showUserFactors function with the user inputs and the gravity factors
// Expose getUserFactors globally
global.showUserFactors = showUserFactors;
global.userInput = userInput;
//Make note that this is another function for the API


//factorType = weight, jump, pushup
//factorSystem = metric or imperail
//factorMeasurement = distance, mass
//factorValue = userValue
//factorPlanets = Alien or Solar