// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
//     - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// let s = (a, b) => a * b
// console.log(s(2, 5));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// let s = (r)=>Math.PI*r**2;
// console.log(s(2));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// let s = (r, h) => 2 * h * Math.PI * r
// console.log(s(2, 3));

// - створити функцію яка приймає масив та виводить кожен його елемент

// let iterator = (arr)=>{
//     for (let i = 0; i < arr.length; i++) {
//         const arrElement = arr[i];
//         console.log(arrElement)
//     }
// }
//
// let arr = [1,2,3,4,'5',true];
// iterator(arr)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let pPrinter = (pTxt) => {
//     document.write(`<p>${pTxt}</p>`)
// }
//
// let p = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi deleniti dolores eaque et fugiat labore, laudantium neque nesciunt, nulla odio pariatur porro praesentium quaerat quas quo repellendus sunt vero voluptatum?'
// pPrinter(p)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// let liPrinter = (li) =>{
//     document.write(`<ul>`)
//     document.write(`<li>${li}</li>`)
//     document.write(`<li>${li}</li>`)
//     document.write(`<li>${li}</li>`)
//     document.write(`</ul>`)
// }
//
// let li = 'lorem';
// liPrinter(li)


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// let liPrinter = (liTxt, num) => {
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         let numIndex = num[i];
//         document.write(`<li>${liTxt}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// let txt = `lorem`
// liPrinter(txt, 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let arrList = (arr) => {
//     document.write(`<ul>`)
//     for (const arrElement of arr) {
//         document.write(`<li>${arrElement}</li>`)
//     }
//     document.write(`</ul>`)
// }
//
// let arr = [1, 2, 3, '4', true];
// arrList(arr)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let iterator = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         const arrElement = arr[i];
//         document.write(`<div>${arrElement.id}.${arrElement.name}, age: ${arrElement.age} </div>`)
//     }
// }
// let arr = [
//     {id: 1, name: 'Thomas', age: 21},
//     {id: 2, name: 'Thomas1', age: 23},
//     {id: 3, name: 'Thomas2', age: 24}]
//
// iterator(arr);


// - створити функцію яка повертає найменьше число з масиву

// let calc = (num) => {
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
// let num = [2,1,3]
// calc(num)

//---------------------------or-----------------------------

// let numChecker = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < arr[0]) {
//             arr[0] = arr[i]
//         }
//     }
//     return console.log(arr[0])
// }
//
// let arr = [100, 200, 1, 2, 5, 99];
// numChecker(arr);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// let sum = (arr) => {
//     let test = 0;
//     for (const arrElement of arr) {
//         test = test + arrElement
//     }
//     return console.log(test)
// }
//
// let arr = [1,2,10]
// sum(arr)

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

// let swap = (arr, index1, index2) => {
//     let tst = arr[index1]
//     arr[index1] = arr[index2];
//     arr[index2] = tst;
//     return console.log(arr)
// }
//
// let arr = [11, 22, 33, 44]
// swap(arr, 0, 1)


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

// let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
//     for (const item of currencyValues) {
//         if (item.currency === exchangeCurrency) {
//             return sumUAH / item.value
//         }
//     }
// }
// console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'EUR'));

