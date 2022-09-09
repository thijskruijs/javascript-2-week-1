console.log("hello i am linked");

/**
 * Add 2 numbers together
 *  */

function addNumbers(a, b){
    return a + b;
}

addNumbers();

/**
 * Display a message to the user
 *  */

function greetingUsers(){
    return `<span>Hello my friendly user</span>`;
}

greetingUsers();

/**
 * Add 3 numbers together
 * @param {number} a First Value
 * @param {number} b Second Value
 * @param {number} c Third Value 
**/

function addThreeNumbers(a, b, c){
    return a + b + c;
}

addThreeNumbers(10, 20, 90);

/**
 * @return {dataType} returnDescription 
 **/

/**
 * Display cats names
 * @param {string} cat1 First cat name
 * @param {string} cat2 Second cat name
 * @param {string} cat3 Third cat name
 * @param {string} cat4 Fourth cat name
 * @return {string} List of cat names
 **/

function addFourCats(cat1, cat2, cat3, cat4){
    return `<ul>
                <li>${cat1}</li>
                <li>${cat2}</li>
                <li>${cat3}</li>
                <li>${cat4}</li>
            </ul>`
}

addFourCats("milo", "shawn", "max", "felix");

// Example 5

```console.log("Hello world");
```

/**
 * Add four numbers together
 * @param {number} a First Value
 * @param {number} b Second Value
 * @param {number} c Third Value 
 * @param {number} d Fourth Value
 * @return {number} Sum of Numbers
 * @example
 * ```js
 * const a = 20;
 * const b = 80;
 * const c = 1;
 * const d = 9;
 * const sum = addFourNumbers(a, b, c, d);
 * ```
 * //Expect sum to be 110
**/

function addFourNumbers(a, b, c, d){
    return a + b + c + d;
}

addFourNumbers(10, 20, 90, 100);

// Optional parameters

///**
// * @param {dataType} [optionalParamName] optionalParamNameDescription
//*/

/**
 * Multiply two numbers together
 * @param {number} a First Value
 * @param {number} [b] Second Value
 * @return {number} Multiplication of numbers
 */

function multiplyNumbers (a, b = 10) {
    return a * b;
}

multiplyNumbers(1);

// Example 7

/**
 * Adds two numbers
 * @typedef {(number|string)} NumberLike
 */

function addTwoDigits(a, b){
    return a + b;
}

addTwoDigits();

// Complex objects

// Example 8

/**
 * @param {{name: string, role: string}} my logged in user object
 * 
 **/

function handleUserLogin({name, role}){
    loginUserWithToken();
}

function loginUserWithToken()

handleUserLogin();

