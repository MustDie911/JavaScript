// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log

let a = 'hello';
console.log(a);

let b = 'owu';
console.log(b);

let c = 'com';
console.log(c);

let d = 'ua';
console.log(d);

let e = 1;
console.log(e);

let f = 10;
console.log(f);

let g = -999;
console.log(g);

let h = 123;
console.log(h);

let i = 3.14;
console.log(i);

let j = 2.7;
console.log(j);

let k = 16;
console.log(k);

let l = true;
console.log(l);

let m = false;
console.log(m);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Artem';
let middleName = 'Stanislavovic';
let lastName = 'Kozak';

let person = `${lastName} ${firstName} ${middleName}`;
console.log(person)


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a1 = 100;
console.log(typeof a1);

let b1 = '100';
console.log(typeof b1);

let c1 = true;
console.log(typeof c1);


// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let name = prompt('Ведіть ваше ім`я');
let nameMiddle = prompt('Ваше по-батькові');
let age = +prompt('Ваш вік');

let person1 = `Привіт, мене звати ${name} ${nameMiddle}. Мені ${age} років`;
document.write(person1);
console.log(person1);
