//
// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function num(a, b, c) {
//     if (a < b && a < c) {
//         return console.log(a)
//     } else if (b < a && b < c) {
//         return console.log(b)
//     } else if (c < a && c < b) {
//         return console.log(c)
//     }
// }
// num(2,3,1)

// let numChecker = (a, b, c) => {
//     if (a < b && a < c) {
//         console.log(a)
//     } else if (b < a && b < c) {
//         console.log(b)
//     } else if (c < a && c < b) {
//         console.log(c)
//     }
// }
// numChecker(2, 3, 4)

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function numChecker(a, b, c) {
//     if (a > b && a > c) {
//         console.log(a)
//     } else if (b > a && b > c) {
//         console.log(b)
//     } else if (c > a && c > b) {
//         console.log(c)
//     }
// }
// numChecker(6,7,5)

// let numChecker = (a, b, c) => {
//     if (a > b && a > c) {
//         console.log(a)
//     } else if (b > a && b > c) {
//         console.log(b)
//     } else if (c > a && c > b) {
//         console.log(c)
//     }
// }
// numChecker(6, 7, 5)

// - створити функцію яка повертає найбільше число з масиву

// function numChecker(num) {
//     for (let i = 0; i < num.length; i++) {
//         if (num[0] > num[1] && num[0] > num[2]) {
//             console.log(num[0])
//         } else if (num[1] > num[0] && num[1] > num[2]) {
//             console.log(num[1])
//         } else {
//             console.log(num[2])
//         }
//     }
// }
//
// let num = [4, 25, 3]
// numChecker(num)

// let numChecker = num => {
//     for (let i = 0; i < num.length; i++) {
//         if (num[0] > num[1] && num[0] > num[2]) {
//             console.log(num[0])
//         } else if (num[1] > num[0] && num[1] > num[2]) {
//             console.log(num[1])
//         } else {
//             console.log(num[2])
//         }
//     }
// }
// let num = [4, 25, 3]
// numChecker(num)

// - створити функцію яка повертає найменьше число з масиву

// function numChecker(num) {
//     for (let i = 0; i < num.length; i++) {
//         if (num[0] < num[1] && num[0] < num[2]) {
//             console.log(num[0])
//         } else if (num[1] < num[0] && num[1] < num[2]) {
//             console.log(num[1])
//         } else {
//             console.log(num[2])
//         }
//     }
// }
//
// let num = [4, 25, 3]
// numChecker(num)

// let numChecker = num => {
//     for (let i = 0; i < num.length; i++) {
//         if (num[0] < num[1] && num[0] < num[2]) {
//             console.log(num[0])
//         } else if (num[1] < num[0] && num[1] < num[2]) {
//             console.log(num[1])
//         } else {
//             console.log(num[2])
//         }
//     }
// }
// let num = [4, 25, 3]
// numChecker(num)

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// function sum(arr) {
//     let arrSum = 0
//     for (let i = 0; i < arr.length; i++) {
//         arrSum = arr[0] + arr[1] + arr[2]
//     }
//     return console.log(arrSum)
//
// }
//
// let arr = [1, 2, 10]
// sum(arr)

// let sum = arr => {
//     let arrSum = 0;
//     for (const arrElement of arr) {
//         arrSum = arrSum + arrElement
//     }
//     return console.log(arrSum)
// }
// let arr = [1,2,10];
// sum(arr)

// - Дано натуральное число n. Выведите все числа от 1 до n.

// function num(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log(i)
//     }
// }
// num(500)

// let num = n => {
//         for (let i = 1; i <= n; i++) {
//         console.log(i)
//     }
// }
// num(5);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

// function num(a, b) {
//     if (a < b) {
//         for (let i = a; i <= b; i++) {
//             console.log(i);
//         }
//     } else {
//         for (let i = a; i >= b; i--) {
//             console.log(i);
//         }
//     }
// }
//
// num(1, 10);
// num(10, 1);

// let num = (a, b) => {
//     if (a < b) {
//         for (let i = a; i <= b; i++) {
//             console.log(i);
//         }
//     } else {
//         for (let i = a; i >= b; i--) {
//             console.log(i);
//         }
//     }
// }
//
// num(1,10);
// num(10,1);

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// function swap(arr, i) {
//     if (i < arr.length - 1) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//     }
//     return arr;
// }
//
// console.log(swap([9, 8, 0, 4], 0));
// console.log(swap([9, 8, 0, 4], 1));
// console.log(swap([9, 8, 0, 4], 2));

// let swap = (arr, i) => {
//     if (i < arr.length - 1) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//     }
//     return arr;
// }
//
// console.log(swap([9, 8, 0, 4], 0));
// console.log(swap([9, 8, 0, 4], 1));
// console.log(swap([9, 8, 0, 4], 2));

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// function swap(arr) {
//     return arr.filter((num) => num !== 0).concat(arr.filter((num) => num === 0));
// }
//
// console.log(swap([1, 0, 6, 0, 3]));
// console.log(swap([0, 1, 2, 3, 4]));
// console.log(swap([0, 0, 1, 0]));
