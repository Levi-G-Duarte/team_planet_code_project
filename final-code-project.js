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
};

// let isMatch = false;
// let validWords = [];
function userInput() {
    let factorType;
    let factorSystem;
    let factorMeasurement;
    let factorValue;
    let factorPlanets;

    while (true) {

        // console.log(`Enter your type of factor: (e.g weight, jump or pushup)`);
        // factorType = prompt("> ").trim().toLowerCase();
        // if (factorType === "weight" || factorType === "jump" || factorType === "pushup") {
        //     break;
        // } else {
        //     console.log("Enter a valid factor.");
        //     factorType = prompt("> ").trim().toLowerCase();
        // }

        console.log(`Enter a type of factor: (e.g. weight, jump, or pushup)`);
        factorType = prompt("> ").trim().toLowerCase();
        if (factorType === "weight" || factorType === "jump" ||  factorType === "pushup") {
            console.log("select");
        } else {
            console.log("sigma")
            factorType = prompt("> ").trim().toLowerCase();
        }
        
        if (factorType === "pushup") {
            factorMeasurement = "repetitions";
            break; 
        } else if (factorSystem != "metric" || factorSystem != "imperial") {
            console.log("Entmeer a valid factor.");
            factorSystem = prompt("> ").trim().toLowerCase
            break;
        }
       
        if (factorType != "pushup") {
            console.log(`Enter system type: (e.g imperial or metric)`);
            factorSystem = prompt("> ").trim().toLowerCase();
        }
        console.log(`Enter measurement type: (e.g distance or mass)`);
        factorMeasurement = prompt("> ").trim().toLowerCase();
        if (factorMeasurement != "distance" || factorMeasurement != "mass") {
            console.log("Your an L");
        } else {
            break;
        }
        console.log(`Enter value:`);
        factorValue = prompt("> ").trim();
        if (!isNaN(parse(factorValue))) {
            console.log("Your an L");
        } else {
            break;
        }
        console.log(`Enter planet system: (solar or alien)`);
        factorPlanets = prompt("> ").trim().toLowerCase();;
        if (factorPlanets != "solar" || factorPlanets != "alien") {
            console.log("Your an L");
        } else {
            break;
        }
        break;
    };
    
    showUserFactors(factorType, factorSystem, factorMeasurement, factorValue, factorPlanets);
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
// if (isMatch == true) {
//     for (let i = 0; i < validWords - 1; i++) {
//         if (validWords[i] === userInput) {
//             isMatch = true;
//         } break;
//     }
// }
// else {
//     console.log("Try Again!")
// }
// break;