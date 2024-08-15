// Import the prompt-sync library to handle user input
const prompt = require('prompt-sync')();
// Import the gravityFactors module which contains factors for different planets
const gravityFactors = require('./utils/earthGravityFactors.js');
// Define a function to show user factors based on input type and value
function calculateThing(factor, unit) {
    let results = {};
    let measurement;

    for (let planet in gravityFactors) {
        results[planet] = parseFloat((unit * gravityFactors[planet]).toFixed(2));
    };

    switch (factor) {
        case 'jump':
            measurement = 'cm';
            break;
        case 'weight':
            measurement = 'kg';
            break;
        default:
            measurement = 'units';
            break;
    }
    for (let planet in results) {
        console.log(`Your ${factor} on ${planet} is ${results[planet]}${measurement}`);
    };
};
function getUserInput() {
    console.log('Enter a factor: jump, weight, or other.');
    let param1 = prompt(">");
    // console.log(param1);
    console.log('Enter a unit: ');
    let param2 = prompt(">");
    // console.log(param2);
    calculateThing(param1, param2)
};
global.calculateThing = calculateThing;
global.getUserInput = getUserInput;
    // Initialize an object to hold the results
    // Declare a variable to hold the unit of measurement
    // Iterate over each item in the gravityFactors object
        // Calculate the factor multiplied by the input value and round it to two decimals
    // Switch case to determine the measurement unit based on factor type
    // Iterate over the results and log each one

// Define a function to get user inputs for factor type and value
    // Prompt the user to enter the type of factor they want to calculate
    // Prompt the user to enter the numerical value of the factor
    // Call the showUserFactors function with the user inputs and the gravity factors
// Expose getUserFactors globally
