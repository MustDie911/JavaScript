// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

// let arr = [1, 2, 3, 4, 5, 6, 'seven', 'eight', true, false];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);
// console.log(arr[7]);
// console.log(arr[8]);
// console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

// let book1 = {
//     title: 'atlas shrugged',
//     pageCount: 600,
//     genre: 'novel'
// }
// let book2 = {
//     title: 'harry potter',
//     pageCount: 500,
//     genre: 'novel'
// }
// let book3 = {
//     title: 'hunger games',
//     pageCount: 900,
//     genre: 'novel',
// }

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом.
// Кожен автор має поля name та age.

// let book4 = {
//     title: "The Great Gatsby",
//     pageCount: 180,
//     genre: "novel",
//     authors: [
//         {
//             name: "F. Scott Fitzgerald",
//             age: 44,
//         }
//     ]
// };
//
// let book5 = {
//     title: "The Churchill Factor",
//     pageCount: 180,
//     genre: "novel",
//     authors: [
//         {
//             name: "Boris Johnson",
//             age: 58,
//         }
//     ]
// };
//
// let book6 = {
//     title: "1984",
//     pageCount: 328,
//     genre: "dystopian",
//     authors: [
//         {
//             name: "George Orwell",
//             age: 46,
//         }
//     ]
// };


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

// let arr2 = [
//     {
//         name: 'Artem',
//         username: 'thomas123',
//         password: 'qweasdzxc12310',
//     },
//     {
//         name: 'Boris',
//         username: 'boris123',
//         password: 'qweasdzxc1239',
//     },
//     {
//         name: 'Anton',
//         username: 'anton123',
//         password: 'qweasdzxc1238',
//     },
//     {
//         name: 'Dmitro',
//         username: 'dmitro123',
//         password: 'qweasdzxc1237',
//     },
//     {
//         name: 'Roman',
//         username: 'roman123',
//         password: 'qweasdzxc1236',
//     },
//     {
//         name: 'John',
//         username: 'john123',
//         password: 'qweasdzxc1235',
//     },
//     {
//         name: 'Bob',
//         username: 'bob123',
//         password: 'qweasdzxc1234',
//     },
//     {
//         name: 'Alan',
//         username: 'alan123',
//         password: 'qweasdzxc1233',
//     },
//     {
//         name: 'Anna',
//         username: 'anna123',
//         password: 'qweasdzxc1232',
//     },
//     {
//         name: 'Alis',
//         username: 'alis123',
//         password: 'qweasdzxc1231',
//     }
// ]
// for (let i = 0; i < arr2.length; i++) {
//     console.log(arr2[i].password);
// }

// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let x = 1;
//
// if (x !== 0) {
//     console.log('Вірно')
// } else {
//     console.log('Невірно')
// }
// x = 0;
// if (x !== 0) {
//     console.log('Вірно')
// } else {
//     console.log('Невірно')
// }
// x = -3;
// if (x !== 0) {
//     console.log('Вірно')
// } else {
//     console.log('Невірно')
// }


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).


// let time = 11;
// let quarter;
//
// if (time >= 0 && time < 15) {
//     quarter = 1;
// } else if (time >= 15 && time < 30) {
//     quarter = 2;
// } else if (time >= 30 && time < 45) {
//     quarter = 3;
// } else {
//     quarter = 4;
// }
// console.log(`Час ${time} хвилин попадає в ${quarter} чверть`);


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).


// let day = 22;
// let decade;
//
// if (day >= 0 && day < 10) {
//     decade = 1;
// } else if (day >= 10 && day < 20) {
//     decade = 2;
// } else {
//     decade = 3;
// }
// console.log(`День ${day}  попадає в ${decade} декаду`);


// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let day = +prompt('Введіть номер дня тижня (1-7)');
// switch (day){
//     case 1:
//         document.write('Monday');
//         break;
//     case 2:
//         document.write('Tuesday');
//         break;
//     case 3:
//         document.write('Wednesday');
//         break;
//     case 4:
//         document.write('Thursday');
//         break;
//     case 5:
//         document.write('Friday');
//         break;
//     case 6:
//         document.write('Saturday');
//         break;
//     case 7:
//         document.write('Sunday');
//         break;
//     default:
//         document.write('Введено некоректний номер дня');
// }


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа

// let num1 = +prompt("Введіть перше число:");
// let num2 = +prompt("Введіть друге число:");
//
// if (num1 > num2) {
//     console.log("Максимальне число " + num1);
// } else if (num2 > num1) {
//     console.log("Максимальне число " + num2);
// } else {
//     console.log("Числа рівні");
// }

//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"
//         якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

// let x = '1'
// x = x || "default"
// console.log(x)


// За допомоги іф перевірити кожен його елемент на тривалість навчання.
// У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".


// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// for (let i = 0; i < coursesAndDurationArray.length; i++) {
//     if (coursesAndDurationArray[i].monthDuration > 5) {
//         console.log('Супер');
//     }
// }