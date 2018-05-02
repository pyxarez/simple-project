/* jslint browser: true */
/* global document */
/* eslint linebreak-style: ["error", "windows"] */

/* Variant without function
 const script = document.createElement('script');
 script.src = 'part1_Scripts_Script.js';
 script.async = false; // чтобы гарантировать порядок
 document.head.appendChild(script);
*/

// Adds script
function addScript(src) {
  const script = document.createElement('script');
  script.src = src;
  script.async = false; // чтобы гарантировать порядок
  document.head.appendChild(script);
}

addScript('part1_Scripts_Script.js'); // Using addScript
