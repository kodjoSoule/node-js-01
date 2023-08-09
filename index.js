// Import stylesheets
import './style.css';
const calcule = require('./calcule');
const { mult, div } = require('./calcule');
let result;
//result = calcule.somme(10, 5);
console.log(`Resultat : ${result}`);

result = mult(10, 5);
console.log(`Resultat : ${result}`);

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
