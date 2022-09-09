// JSON

// 1. javascript to JSON

// JSON.stringify()

// Example 1.

const userDetails = {
    name:"Thijs",
    id: 1234,
    isStudent: true,
    section: "Front-End Development"
}

console.log("userDetails JS format", userDetails);

const userDataJSON = JSON.stringify(userDetails);

console.log("userDetails JSON format", userDataJSON);

// JSON.parse() - Converts JSON data to JS format

const userDataBackToJS = JSON.parse(userDataJSON);

console.log("JSON format converted back to JS", userDataBackToJS);

// Create a JSON data object and convert is to JS

const itemDetails = {
    name:"Bike",
    id: 619,
    isElectric: false,
    section: "All-Mountain Bike"
}

const itemDetailsJSON = JSON.stringify(itemDetails);

const itemDetailsBacktoJS = Json.parse(itemDetailsJSON);


// Teacher example

const myObjectJSON = '{"name":"Thijs", "id":619, "isStudent":true}';

const myObjectJS = JSON.parse(myObjectJSON);
console.log("JSON object converted to JS", myObjectJS);

