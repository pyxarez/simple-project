/* jslint browser: true */
/* global window */
/* eslint linebreak-style: ["error", "windows"] */

console.log('Some notification');
console.info('Some information');
console.warn('Some warning');
console.error('Some error');

const defaultName = 'Name';
let name = window.prompt('Enter your name:', defaultName);
if (name == null) name = 'Anonimus';

let msg = `${name}, you've pressed `;
if (window.confirm('Choose the\nbutton!')) {
  msg += 'OK!';
} else {
  msg += 'Cancel!';
}
window.alert(msg);
