// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function calc(a, b) {
//     let area = a * b;
//     return area
// }
//
// let res = calc(3, 6);
// console.log(res)

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function calc(r) {
//     let area = Math.PI*(r**2);
//     return area;
// }
//
// let res = calc(4);
// console.log(res)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function calc(r,h) {
//     let area = 2*Math.PI*r*h;
//     return area;
// }
// let res = calc(2,4);
// console.log(res);

// - створити функцію яка приймає масив та виводить кожен його елемент

// function arrPrinter(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }
//
// let arr = [1,2,3,4,5]
// arrPrinter(arr)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function pPrinter(paragraph) {
//     document.write(`<p>${paragraph}</p>`)
// }
// pPrinter('hello')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function ulPrinter(textUl) {
//     document.write(`<ul>`)
//     document.write(`<li>${textUl}</li>`)
//     document.write(`<li>${textUl}</li>`)
//     document.write(`<li>${textUl}</li>`)
//     document.write(`</ul>`)
// }
// ulPrinter('hello')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function ulPrinter(text, count) {
//     let ul = '<ul>';
//     for (let i = 0; i < count; i++) {
//         ul = ul + '<li>' + text + '</li>';
//     }
//     ul = ul + '</ul>';
//     return ul;
// }
//
// document.write(ulPrinter('someText', 100))

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function arrPrinter(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<ul>`)
//         document.write(`<li>${arr[i]}</li>`)
//         document.write(`</ul>`)
//     }
// }
//
// let arr = [1,2,3,4,true,'123']
// arrPrinter(arr)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// function userList(arr) {
//     for (const user of arr) {
//         document.write(`<div>${user.id},${user.name},${user.age}</div>`)
//     }
// }
//
// let users = [
//     {id: 1, name: 'asd', age: 22},
//     {id: 2, name: 'qwe', age: 23},
//     {id: 3, name: 'zxc', age: 24}
// ]
// userList(users)

// - створити функцію яка повертає найменьше число з масиву

// function findSmallestNumber(numbers) {
//     let smallestNumber = numbers[0];
//
//     for (let i = 1; i < numbers.length; i++) {
//         if (numbers[i] < smallestNumber) {
//             smallestNumber = numbers[i];
//         }
//     }
//
//     return smallestNumber;
// }
// const numbers = [10, 5, 3, 8, 2];
//
// let smallestNumber = findSmallestNumber(numbers);
// console.log(smallestNumber);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// function sum(arr) {
//     let result = 0;
//
//     for (let i = 0; i < arr.length; i++) {
//         result += arr[i];
//     }
//
//     return result;
// }
//
// const arr = [1, 2, 10];
// console.log(sum(arr));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// function swap(arr, index1, index2) {
//     let temp = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = temp;
//     return arr;
// }
//
// let arr = [11, 22, 33, 44];
// console.log(swap(arr, 0, 1));


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

// function exchange(sumUAH, currencyValues, exchangeCurrency) {
//     let exchangeRate = 1;
//     for (let i = 0; i < currencyValues.length; i++) {
//         if (currencyValues[i].currency === exchangeCurrency) {
//             exchangeRate = currencyValues[i].value;
//             break;
//         }
//     }
//     return sumUAH / exchangeRate;
// }
//
// let sumUAH = 10000;
// let currencyValues = [{ currency: 'USD', value: 40 }, { currency: 'EUR', value: 42 }];
// let exchangeCurrency = 'USD';
// console.log(exchange(sumUAH, currencyValues, exchangeCurrency)); // 250

