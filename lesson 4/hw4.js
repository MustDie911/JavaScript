// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function calc(a, b) {
//     return a * b
// }
//
// let s = calc(2,4);
// console.log(s)

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function calc(r) {
//     return Math.PI * r ** 2;
// }
//
// let s = calc(2);
// console.log(s)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function calc(r, h) {
//     return Math.PI * r * h;
// }
// let s = calc(1,1);
// console.log(s)

// - створити функцію яка приймає масив та виводить кожен його елемент

// function arrPrinter(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         const arrElement = arr[i];
//         console.log(arrElement);
//     }
// }
//
// let arr = [1, 2, 3, 4, 5];
// arrPrinter(arr)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function pPrinter(paragraph) {
//     document.write(`<p>${paragraph}</p>`)
// }
// pPrinter('hello')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function liPrinter(li) {
//     document.write(`<li>${li}</li>`)
// }
// liPrinter("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam cupiditate dolor dolores doloribus ducimus explicabo fugit id incidunt nam necessitatibus ratione sit soluta, totam voluptates voluptatum! Ipsum neque nobis sed!")

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function liPrinter(txt, num) {
//     document.write(`<ul>`)
//     for (let i = 0; i < num; i++) {
//         document.write(`<li>${txt}</li>`)
//     }
//     document.write(`</ul>`)
// }
// liPrinter('lorem',3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function arrList(arr) {
//     document.write(`<ul>`)
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>${arr[i]}</li>`)
//     }
//     document.write(`</ul>`)
//
// }
// let arr = [1,'2',true]
// arrList(arr)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let array =
//     [{id: 1, name: 'Thomas', age: 22}]
//
// function arrList(arr) {
//     for (const arrElement of arr) {
//         document.write(`<div>${arrElement.id} ${arrElement.name} ${arrElement.age}</div>`)
//     }
// }
// arrList(array)

// - створити функцію яка повертає найменьше число з масиву

// function numChecker(array) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] < array[0]) {
//             array[0] = array[i]
//         }
//
//     }
//     return console.log(array[0])
// }
// let arr = [9,1,2,3,4]
// numChecker(arr)

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

// function sumArr(arr) {
//     let res = 0;
//     for (const arrElement of arr) {
//         res = res + arrElement
//     }
//     return res
// }
//
// console.log(sumArr([1, 2, 10]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}

let arr = [11, 22, 33, 44];
console.log(swap(arr, 0, 1));


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

// function exchange(sumUAH, currencyValues, exchangeCurrency) {
//     for (const item of currencyValues) {
//         if (item.currency === exchangeCurrency) {
//            return  sumUAH / item.value
//         }
//     }
// }
//
// let exchange1 = exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD');
// console.log(exchange1)


// function userBuilder(name, age) {
//     let user = {
//         name: name,
//         age: age
//     }
//     return {
//             getInfo: function () {
//                 return `name ${user.name} age - ${user.age}`
//             },
//             setAge: function (age) {
//                 if (age > user.age) {
//                     user.age = age
//                 }
//             },
//         }
// }
// let manipulator = userBuilder('Thomas',22);
// console.log(manipulator.getInfo())
//
// manipulator.setAge(23);
// console.log(manipulator.getInfo())
