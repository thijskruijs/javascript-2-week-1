/* console.log();
console.clear();
console.warn();
console.error();
console.table();

// 1

console.log("Hello I am here");

const name = "Thijs";

console.log(name);

const responseDataOne = [
    {
        name: "Thijs",
        age: "24"
    },
    {
        name: "emil",
        age: "29"
    },
]

const responseDataTwo = [
    {
        name: "Thijs",
        age: "24"
    },
    {
        name: "emil",
        age: "29"
    },
]

console.log("responseDataOne: ",responseDataOne);
console.log("responseDataTwo: ",responseDataTwo);

console.log(1+2);

const sum = 1 + 2;

console.log("my " + "name " + "is " + sum + " Thijs ");

console.log('my name is Thijs ${sum}');

// console.clear();

// console.table():

console.log(responseDataOne);
console.table(responseDataOne);

console.time(); //This starts the timer
console.timeEnd(); //This ends the timer

function counter(){
    for (let i =1; i < 3; i++) {
        console.log(i);
    }
}

console.time("myTimer");
counter();
console.timeEnd("myTimer");

console.time("myTimer");
counter();
console.timeEnd("myTimer");

console.time("myTimer");
counter();
console.timeEnd("myTimer");
*/

/*function sum(num1, num2) {
    return num1 + num2;
}

let number1 = 10;
console.log(number1);
let number2= 20;
console.log(number2);

let total = sum(number1, number2);

console.log("total: ",total)
*/
/*
function getAverage(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}

let myAverage = getAverage(2, 4, 5);
console.log("myAverage: ",myAverage);
*/

/*const myArray = [1, 3, 4, 5];

function getArrAverage(arr) {
    var total = 0;
    for (var i = 0; i<arr.length; i++){
        total +=arr[i];
    }
    console.log("total ", total);
    const numberOfItemsInArr = arr.length;
    console.log("numberOfItemsInArr ", numberOfItemsInArr);
    let average = total / numberOfItemsInArr;
    return average;
}

const resultAverage = getArrAverage(myArray);
console.log("resultAverage: ", resultAverage)

// when you make an API call

function getCatFacts() {
    fetch ("https://catfact.ninja/facts")
    .then(response => {
        return response.json();
    })
    .then(jsonResponse => {
        console.log(jsonResponse);
        console.log(jsonResponse.data);
        console.log(jsonResponse.links);
    }).catch(error => {   
    }
    )
}

getCatFacts();
*/



async function getcattyfacts(){
    const response = await fetch("https://catfact.ninja/facts");
    console.log("response: ",response);
    const catfacts = await response.json();
    console.log(catfacts);
    console.log(catfacts.data);
    return catfacts;
}