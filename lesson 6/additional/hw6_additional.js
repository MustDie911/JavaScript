// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// let cutString = ((str, n) => {
//     let value = [];
//     for (let i = 0; i < str.length; i += n) {
//         value.push(str.slice(i, i + n))
//     }
//     return value
// })
// console.log(cutString('наслаждение', 3))

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый


////А чому при (str, 7) "Каждый" без пробілу ?

// let delete_characters= (str, length) =>{
//     return str.slice(0, length);
// }
//
// let str ='Каждый охотник желает знать';
// console.log(delete_characters(str, 6)); // 'Каждый'


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let insert_dash = str => str.toUpperCase().replaceAll(' ', '-')
//
// let str = "HTML JavaScript PHP";
// console.log(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let camel = str =>str.charAt(0).toUpperCase() + str.slice(1);
// let arr = 'test'
// console.log(camel(arr))

// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
//
// const validationName = (str) => str.replaceAll("..",' ')
//     .replaceAll("---", ' ')
//     .replaceAll("__", ' ')
//
// console.log(validationName(n1))

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// let randomArr = () => {
//     let arr = []
//     for (let i = 0; i < 100; i++) {
//         arr.push((Math.random() * 100).toFixed())
//     }
//     return arr
// }
// let randomArray = randomArr()
// console.log(randomArray)

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// let randomArr = () => {
//     let arr = []
//     for (let i = 0; i < 100; i++) {
//         arr.push((Math.random() * 100).toFixed())
//         arr.sort((a, b) => a - b)
//     }
//     return arr
// }
// let randomArray = randomArr()
// console.log(randomArray)


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)

// let randomArr = () => {
//     let arr = []
//     for (let i = 0; i < 10; i++) {
//         arr.push((Math.random() * 100).toFixed())
//     }
//     return arr
// }
// let randomArray = randomArr()
//
// let  filterRandomArray = randomArray.filter(x => x!==0 && x %2 ===0? x: null)
// console.log(filterRandomArray)


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let capitalize = (str) => {
//     let arr = str.trim().split(' ')
//     let newStr = ''
//     for (let i = 0; i < arr.length; i++){
//         newStr += arr[i][0].toUpperCase() + arr[i].substring(1) + ' '
//     }
//     return newStr.trim()
// }
//
// console.log(capitalize("lorem ipsum"))

// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
// наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

// let validator = (str) => {
//     str = str.toLowerCase()
//     let arr = str.split("@")
//     let arr2 = arr[1].split(".")
//     if (arr.length <= 1 || arr.length >= 3) {
//         return false
//     } else return arr2[0].length >= 2;
// }
//
// console.log(validator('someemail@gmail.com'))


// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.


// - є масив

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

// console.log(coursesArray.sort((a,b)=>a.modules.length - b.modules.length))


// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// console.log(count(str, symb)) // 5

// let checker = (str, find) => str.split(" ").filter(x => x.includes(find)).length
// console.log(checker("Астрономия это наука о небесных объектах", "а"))

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

// const cutStringTwo = (str, n) => str.trim().split(" ").splice(0, n).join(" ")
// let str = "Сила тяжести приложена к центру масс тела";
// console.log(cutStringTwo(str, 5))

// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).

let books = [
    {
        title: "To Kill a Mockingbird",
        pages: 281,
        authors: ["Harper Lee"],
        genres: ["Southern Gothic", "bildungsroman", "test", "test2"],
    },
    {
        title: "1984",
        pages: 328,
        authors: ["George Orwell"],
        genres: ["Dystopian", "Political fiction"],
    },
    {
        title: "Animal Farm",
        pages: 112,
        authors: ["George Orwell", "test"],
        genres: ["Political satire"],
    },
    {
        title: "Brave New World",
        pages: 311,
        authors: ["Aldous Huxley"],
        genres: ["Dystopian", "Science fiction"],
    },
    {
        title: "Fahrenheit 451",
        pages: 158,
        authors: ["Ray Bradbury"],
        genres: ["Dystopian", "Science fiction"],
    }
];

// -знайти наібльшу книжку.
console.log(books.sort((a, b) => b.pages - a.pages)[0])
// - знайти книжку/ки з найбільшою кількістю жанрів

console.log(books.sort((a, b) => b.genres.length - a.genres.length)[0])

// - знайти книжку/ки з найдовшою назвою
console.log(books.sort((a, b) => b.title.trim().length - a.title.trim().length)[0])
// - знайти книжку/ки які писали 2 автори
console.log(books.filter(x => x.authors.length === 2))

// - знайти книжку/ки які писав 1 автор
console.log(books.filter(x => x.authors.length === 1))

// - вісортувати книжки по кількості сторінок по зростанню
console.log(books.sort((a, b) => a.pages - b.pages))
