/* jslint browser: true */
/* global window */
/* eslint linebreak-style: ["error", "windows"] */


function StandardChecking() {
  const standerdName = 'ECMAScript';
  const input = window.prompt('Каково «официальное» название JavaScript?', '');
  if (input !== null && input.toUpperCase() === standerdName.toUpperCase())
    window.alert('Верно!');
  else
   window.alert('Не знаете?\n' + standerdName);
}

function CheckSingOfNumber() {
  const input = window.prompt('Введите некоторое число:', '');
  if (!Number.isNaN(input)) {
    const value = +input;
    let result;
    if (value > 0) result = 1;
    else result = value === 0 ? 0 : -1;
    window.alert(result);
  } else window.alert('Введено не число!');
}

function LoginCheck() {
  const login = 'Админ';
  const password = 'Чёрный Властелин';
  let input = window.prompt('Кто пришел?', '');
  if (input == null) {
    window.alert('Вход отменен.');
    return;
  }

  if (input === login) {
    input = window.prompt('Пароль?', '');
    if (input == null) {
      window.alert('Вход отменен.');
      return;
    }
    if (input === password) {
      window.alert('Добро пожаловать!');
    } else window.alert('Пароль неверен');
  } else window.alert('Я вас не знаю.');
}

function NumberRangeCheck(number) {
  return !(number >= 14 && number <= 90);
  // return number <= 14 && number >= 90);
}

// StandardChecking();
// CheckSingOfNumber();
// LoginCheck();

// window.alert(NumberRangeCheck(91));
