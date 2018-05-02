/* jslint browser: true */
/* global window */
/* eslint linebreak-style: ["error", "windows"] */

console.log('Recursion started.');

// ------------------------------------------------------------

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10

function SumToRecursion(limit) {
  console.log(limit);
  if (limit > 1) return limit + SumToRecursion(limit - 1)
  return limit;
}

function SumTo(limit) {
  let result = 0;
  for (let i = 1; i <= limit; i++) {
    result += i;
    console.log(i);
  }
  return result;
}

// window.alert(SumToRecursion(10));
// console.log('__________');
// window.alert(SumTo(10));
// ------------------------------------------------------------

// n! = n * (n - 1) * (n - 2) * ...*1

function FactorialRecursion(number) {
  console.log(number);
  if (number > 1) return number * FactorialRecursion(number - 1)
  return number;
}

function Factorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
    console.log(i);
  }
  return result;
}

// window.alert(FactorialRecursion(10));
// console.log('__________');
// window.alert(Factorial(10));
// ------------------------------------------------------------

// Fn = Fn-1 + Fn-2

function FibonachiRecursion(number) {
  console.log(number);
  if (number <= 2) return 1;
  return FibonachiRecursion(number - 1) + FibonachiRecursion(number - 2);
}

function Fibonachi(number) {
  let first = 1;
  console.log(first);
  let current = 1;
  console.log(current);
  for (let i = 1; i <= number - 2; i++) {
    let temp = current;
    current = first + current;
    first = temp;
    console.log(current);
  }
  return current;
}

console.log(FibonachiRecursion(10));
console.log('__________');
console.log(Fibonachi(10));
