// Local Storage lecture 

// How to set a local storage variable

localStorage.setItem("name","Thijs");

// How to get local storage data

// Retrieve data - getItem

const firstName = localStorage.getItem('name');

console.log(firstName);

// Remove local storage // removeItem

localStorage.removeItem('name');

// 3 item local storage

localStorage.setItem("name","Thijs");
localStorage.setItem("age","24");
localStorage.setItem("city","Oslo");

const dataArray = '[{"name":"Thijs", "id":619, "isStudent":true}, {"name":"Thomas", "id":620, "isStudent":true}]'

localStorage.setItem("userArray", dataArray)

let dataArrayNew = localStorage.getItem("userArray");

console.log("dataArrayNew", dataArrayNew);

// localstorage.clear()





// Create a vite project
// Add tailwindCSS
// Create a button which toggles in between light and dark theme
// If you click on the button it will make the bg of the body dark, 
// and if you click again it will turn light again



