import {hello} from './commonjs.js';

console.log(hello);

const textElement = document.createElement('p')
textElement.textContent = hello;
document.body.appendChild(textElement);
