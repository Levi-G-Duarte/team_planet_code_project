// Import the prompt-sync library to handle user input
const prompt = require("prompt-sync")()
// Import the gravityFactors module which contains factors for different planets
const earthGravityFactors = require("./utils/earthGravityFactors.js")
const alienGravityFactors = require("./utils/alienGravityFactors.js");
// let userUnit;
// Define a function to show user factors based on input type and value
function showUserFactors(factorType, factorSystem, factorMeasurement, factorValue, factorPlanets) {
    // Initialize an object to hold the results
    const results = {}
    // Declare a variable to hold the unit of measurement
    let factor;
    let system;

    switch (factorPlanets) {
        case "solar":
            for (let planets in earthGravityFactors) {
                // Calculate the factor multiplied by the input value and round it to two decimals
                results[planets] = parseFloat((factorValue * earthGravityFactors[planets]).toFixed(2));
            }
            break;
        case "alien":
            for (let planets in alienGravityFactors) {
                // Calculate the factor multiplied by the input value and round it to two decimals
                results[planets] = parseFloat((factorValue * alienGravityFactors[planets]).toFixed(2));
            }
            break;
        default:
            console.error("Not a Planet System, L rizz");
    }
    // Iterate over each item in the gravityFactors object
    // Switch case to determine the measurement unit based on factor type
    switch (factorMeasurement) {
        case "mass":
            measurement = "mass";
            break;
        case "distance":
            measurement = "distance";
            break;
        default:
            console.error("PLZ choose a measurement")
    }

    switch (factorType) {
        case "jump":
            factor = 'jump'
            // for (let units in results) {
            //     console.log(`Your weight on ${planets} is: ${results[planets]}kg`)
            // }
            break;
        case "weight":
            factor = "weight"
            // for (let units in results) {
            //     console.log(`Your weight on ${planets} is: ${results[planets]}lbs`)
            // }
            break;
        default:
            console.error("Not a Factor Type"); 
    }

    switch (factorSystem) {
        case "metric":
            system = "kg"
            break;
        case "imperial":
            system = "cm"
            break;
        default:
            console.error("You suck, L rizz")
    }

    // Iterate over the results and log each one
    for (let planets in results) {
        console.log(`Your ${factor} on ${planets} is ${results[[planets]]}${system}`);
    }
}

function userInput() {
    console.log(`Enter your type of factor: (e.g weight, jump or pushup)`)
    const factorType = prompt(">");
    console.log(`Enter system type: (e.g imperial or metric)`)
    const factorSystem = prompt(">");
    console.log(`Enter measurement type: (e.g distance or mass)`)
    const factorMeasurement = prompt(">")
    console.log(`Enter value:`)
    const factorValue = prompt(">")
    console.log(`Enter planet system: (Solar or Alien)`)
    const factorPlanets = prompt(">")

    showUserFactors(factorType, factorSystem, factorMeasurement, factorValue, factorPlanets)
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