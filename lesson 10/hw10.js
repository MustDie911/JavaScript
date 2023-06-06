// Стоврити форму з трьома полями для name,surname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

// let userForm = document.forms.userForm;
// userForm.onsubmit = function (e) {
//     e.preventDefault();
//     let user = {
//         name: this.name.value,
//         surname: this.surname.value,
//         age: this.age.value
//     }
//     let h3Element = document.createElement('h3');
//     h3Element.innerText = `Name: ${user.name}, Surname: ${user.surname}, Age: ${user.surname}`
//     document.body.append(h3Element)
// }


// є сторінка, на якій є блок, в якому знаходиьтся цифра.
// написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

// let reloadCounter = document.getElementById("reloadCounter");
// let currentCount = localStorage.getItem('reloadCounter') || 0;
// let count = +currentCount;
// count += 1;
// reloadCounter.innerText = count;
// localStorage.setItem('reloadCounter', count.toString())


//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

// let array = [];
// for (let i = 1; i <= 100; i++) {
//     array.push({id: i});
// }
//
// let container = document.getElementById('container');
// let prevButton = document.getElementById('prevButton');
// let nextButton = document.getElementById('nextButton');
//
// let currentIndex = 0;
// let displayCount = 10;
//
// function displayObjects(startIndex) {
//     container.innerHTML = ''; // Очищаємо контейнер
//
//     let endIndex = Math.min(startIndex + displayCount, array.length);
//
//     for (let i = startIndex; i < endIndex; i++) {
//         let objectDiv = document.createElement('div');
//         objectDiv.innerText = 'ID: ' + array[i].id;
//         container.appendChild(objectDiv);
//     }
// }
//
// displayObjects(currentIndex);
//
// prevButton.addEventListener('click', function () {
//     if (currentIndex > 0) {
//         currentIndex -= displayCount;
//         displayObjects(currentIndex);
//     }
// });
// nextButton.addEventListener('click', function () {
//     if (currentIndex + displayCount < array.length) {
//         currentIndex += displayCount;
//         displayObjects(currentIndex);
//     }
// });


// - Створити довільний елемент з id = text та створити кнопку.
// Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

// let textElement = document.getElementById('text');
// let hideButton = document.getElementById('hideButton');
//
// hideButton.addEventListener('click', function() {
//     textElement.style.display = 'none';
// });

//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

// let ageChecker = document.forms.ageChecker;
// ageChecker.onsubmit = function (e) {
//     e.preventDefault();
//     if (+this.age.value < 18) {
//         return alert('Ваш вік менше 18')
//     }
// }

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.

// const formTable = document.form
// formTable.onsubmit = function (event) {
//     event.preventDefault()
//     let rows = document.form.row.value
//     let cols = document.form.place.value
//     let content = document.form.content.value
//     let table = document.createElement('table')
//     for (let i = 0; i < rows; i++) {
//         let tr = document.createElement('tr')
//         for (let j = 0; j < cols; j++) {
//             let td = document.createElement('td')
//             td.innerText = content
//             tr.appendChild(td)
//         }
//         table.appendChild(tr)
//     }
//     document.body.appendChild(table)
// }

// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається

// const money = document.getElementById('money')
// let arrTime = localStorage.getItem('moneys') || []
// arrTime = JSON.parse(arrTime)
// if (arrTime) {
//     let date = new Date().getTime()
//     let price = arrTime[arrTime.length - 1].price
//     if (date - arrTime[arrTime.length - 1].date > 10000) {
//         price += 10
//         arrTime.push({ date: date, price: price })
//     }
// } else {
//     arrTime = [{ date: new Date().getTime(), price: 100 }]
// }
// money.innerText = arrTime[arrTime.length - 1].price
// arrTime = JSON.stringify(arrTime)
// localStorage.setItem('moneys', arrTime)