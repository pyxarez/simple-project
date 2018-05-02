/* jslint browser: true */
/* global window */
/* eslint linebreak-style: ["error", "windows"] */
/* jslint bitwise: true */

function isInteger(value) {
  return (+value ^ 0) === +value;
}

window.alert(isInteger(1)); // true
window.alert(isInteger('2')); // true
