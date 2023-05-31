let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

// let test = [];
// for (const user of users) {
//     test.push(user.address);
// }
// console.log(test)

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

// for (const user of users) {
//     let userDiv = document.createElement('div');
//     let h3 = document.createElement('h3');
//     h3.innerText = `${user.name}
//     ${user.age}
//     ${user.status}
//     ${user.address.city + ' ' + user.address.country + ' ' + user.address.street + ' ' + user.address.houseNumber}`
//     userDiv.append(h3)
//     document.body.append(userDiv)
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

// for (let i = 0; i < users.length; i++) {
//     let user = users[i];
//     let userDiv = document.createElement("div");
//     let nameDiv = document.createElement("div");
//     let ageDiv = document.createElement("div");
//     let statusDiv = document.createElement("div");
//     let addressDiv = document.createElement("div");
//     nameDiv.textContent = "Ім'я: " + user.name;
//     ageDiv.textContent = "Вік: " + user.age;
//     statusDiv.textContent = "Статус: " + user.status;
//     addressDiv.textContent = `${user.address.city + ' ' + user.address.country + ' ' + user.address.street + ' ' + user.address.houseNumber}`;
//     userDiv.append(nameDiv,ageDiv,statusDiv,addressDiv);
//     document.body.append(userDiv)
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// for (let i = 0; i < users.length; i++) {
//     let user = users[i];
//     let userDiv = document.createElement("div");
//     let nameDiv = document.createElement("div");
//     let ageDiv = document.createElement("div");
//     let statusDiv = document.createElement("div");
//     let addressDiv = document.createElement("div");
//     nameDiv.textContent = "Ім'я: " + user.name;
//     ageDiv.textContent = "Вік: " + user.age;
//     statusDiv.textContent = "Статус: " + user.status;
//     const cityDiv = document.createElement("div");
//     const countryDiv = document.createElement("div");
//     const streetDiv = document.createElement("div");
//     const houseNumberDiv = document.createElement("div");
//     cityDiv.textContent = user.address.city;
//     countryDiv.textContent = user.address.country;
//     streetDiv.textContent = user.address.street;
//     houseNumberDiv.textContent = user.address.houseNumber;
//     userDiv.append(nameDiv,ageDiv,statusDiv);
//     addressDiv.append(cityDiv,countryDiv,streetDiv,houseNumberDiv);
//     userDiv.appendChild(addressDiv);
//     document.body.append(userDiv)
// }

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.


// let contentBlock = document.getElementById("content");
// let headings = document.querySelectorAll(".rules h2");
// let list = document.createElement("ul");
// for (let i = 0; i < headings.length; i++) {
//     let heading = headings[i];
//     let listItem = document.createElement("li");
//     listItem.textContent = heading.textContent;
//     list.appendChild(listItem);
// }
// contentBlock.appendChild(list);
// document.body.append(list)


// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

let contentBlock = document.getElementById("content");

for (let i = 0; i < rules.length; i++) {
    let rule = rules[i];
    let ruleBlock = document.createElement("div");
    ruleBlock.className = "rules rule" + (i + 1);
    let titleBlock = document.createElement("h2");
    titleBlock.textContent = rule.title;
    let bodyBlock = document.createElement("p");
    bodyBlock.textContent = rule.body;

    ruleBlock.appendChild(titleBlock);
    ruleBlock.appendChild(bodyBlock);

    contentBlock.appendChild(ruleBlock);
}