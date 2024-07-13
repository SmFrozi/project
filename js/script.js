'use strict';

// a = 15;
// console.log(a);

// let number = 5;
// const leftBorderWidth = 1;

// number = 10
// console.log(number);

// const obj = {
//     a: 50
// };

// obj.a = 10;

// console.log(obj);

// console.log(name);
// var name = 'Ivan';


// {
//     var result = 50;
// }

// console.log(result);

// const vehicleBodyWidth = 5000;
// const vehicleBodyLength = 4000;

// console.log("Ширина кузова автомобиля: " + vehicleBodyWidth + ", длина: " + vehicleBodyLength);

// let number = 4.6;

// console.log(-4 / 0);
// // Ответ будет: -Infinity
// console.log('string' * 9);
// // Ответ будет: NaN

// const persone = `5`;

// const bool = false;

// // console.log(something);

// let und;
// console.log(und);
// // Ответ будет: undefined

// const obj = {
//     name: "John",
//     age: 25,
//     isMarried: false
// };

// // console.log(obj.name);
// console.log(obj["name"]);

// let arr = ['plum.png', 'orange.jpg', 6, 'apple.bmp', {}, []];
// console.log(arr[1]);

// const arr = ['a', 'b', 'c'];

// arr[10] = '3456';

// console.log(arr[10]);

// const arrObj = {
//     a: 'a',
//     "1": 'b',
//     2: 'c'
//     abc: {
//         df: [{}, {}],
//         def: {

//         };
//     };
// };
// const b = 'b';

// // arrObj.b = '1234';
// arrObj[b] = '1234';

// console.log(arrObj.b);
// console.log(arrObj[1]);

// // const obj = { a: 1, b: 2, };

// const obj = {
//     Anna: 500,
//     "Alice": 800,
// };

// const result = confirm("Are you here ?");
// console.log(result);

// const answer = prompt("Вам есть 18?", "18");
// console.log(answer + 5);

// const answers = [];

// answers[0] = prompt("Как ваше имя?", "");
// answers[1] = prompt("Как ваше фамилия?", "");
// answers[2] = prompt("Сколько вам лет?", "");

// console.log(typeof (answers));

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = "Ivan";

// alert(`Привет, ${user}`);



// console.log('arr' + " - object");
// console.log(4 + +"5");

// let incr = 10,
//     decr = 10;

// console.log(++incr);
// console.log(--decr);


// console.log(5 % 2);

// console.log(2 + 2 * 2 !== '6');

// const isChecked = false,
//     isClose = false;

// console.log(isChecked || !isClose);



// const numberOfFilms = +prompt("Сколько ты фильмов посмотрел", "");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt("Один из последних просмотренных фильмов?", "");
// const b = prompt("На сколько оцените его?", "");
// const c = prompt("Один из последних просмотренных фильмов?", "");
// const d = prompt("На сколько оцените");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);

// if (4 == 9) {
//     console.log("Ok!");
// } else {
//     console.log("Error");
// }

// const num = 50;

// if (num < 49) {
//     console.log("Error");
// } else if (num > 100) {
//     console.log("Слишком много");
// } else {
//     console.log("Ok!");
// }

// (num === 50) ? console.log("OK!") : console.log("Error");

// const num = 50;

// switch (num) {
//     case 49:
//         console.log("Неверно");
//         break;
//     case 100:
//         console.log("Неверно");
//         break;
//     case 51:
//         console.log("В точку");
//         break;
//     default:
//         console.log("Не в этот раз");
//         break;
// }

// const hamburger = true;
// const fries = true;

// if (hamburger && fries) {
//     console.log("Я сыт!");
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 1;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && "afassikgnag");


// if (hamburger === 3 && cola && fries) {
//     console.log("Все сыты!");
// } else {
//     console.log("Мы уходим!")
// }

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//     console.log("Все довольны!");
// } else {
//     console.log("Мы уходим!");
// }

// console.log(hamburger || cola || fries);

// let johnReport, alexReport, samReport, mariaReport = 'Done';

// console.log(johnReport || alexReport || samReport || mariaReport);



// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         continue;
//     }
//     console.log(i);

// }

// for (let i = 1; i < 3; i++) {
//     console.log(i);
//     for (let j = 1; j < 3; j++) {
//         console.log(j);

//     }
// }

// *
// **
// ***
// ****
// *****

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }

//     result += '\n';
// }

// console.log(result);

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level:${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level:${j}`);
//         for (let k = 0; k < 5; k++) {
//             if (k === 2) continue first;
//             console.log(`Third level:${k}`);

//         }
//     }
// }