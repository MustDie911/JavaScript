//
// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

// function User(id, name, username, email, address, phone, website, company) {
//     this.id = id;
//     this.name = name;
//     this.username = username;
//     this.email = email;
//     this.address = address;
//     this.phone = phone;
//     this.website = website;
//     this.company = company;
// }
//
// let user1 = new User(
//     1,
//     'Leanne Graham',
//     'Bret',
//     'Sincere@april.biz',
//     {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//             lat: '-37.3159',
//             lng: '81.1496'
//         }
//     },
//     '1-770-736-8031 x56442',
//     'hildegard.org',
//     {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
//     }
// );
//
// console.log(user1);


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту

// function Tag(titleOfTag, action, attrs) {
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = attrs;
// }
//
// // Таким чином описати теги
//
// // -a
// let a = new Tag('<a>',
//     'Тег < a > является одним из важных элементов HTML и предназначен для создания ссылок',
//     [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш'},
//         {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области'}
//     ])
// console.log(a)
//
// // -div
// let div = new Tag('<div>',
//     'Элемент < div > является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого',
//     [
//         {titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега < div >'},
//         {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому'}
//     ])
// console.log(div)
//
// // -h1
// let h1 = new Tag('<h1>',
//     'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка',
//     [
//         {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка'}]
// )
// console.log(h1)
// // -span
// let span = new Tag('<span>',
//     'Тег < span > предназначен для определения строчных элементов документа',
//     'Для этого тега доступны универсальные атрибуты и события'
// )
// console.log(span)

// Приклад результуючого об'єкту

// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
// }