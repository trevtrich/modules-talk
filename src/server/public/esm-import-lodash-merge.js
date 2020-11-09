import lodashMerge from 'https://unpkg.com/lodash-es/merge';
//import lodashMerge from 'https://cdn.skypack.dev/lodash.merge';

const textElement = document.createElement('p')
textElement.textContent = JSON.stringify(lodashMerge({a: 'a'}, {b: 'b'}), null, 2);
document.body.appendChild(textElement);
