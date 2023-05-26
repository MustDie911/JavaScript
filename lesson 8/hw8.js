// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let users = [
//     new User(1, '1', '1', '1@email.com', 380000000001),
//     new User(11, '2', '2', '2@email.com', 380000000002),
//     new User(5, '3', '3', '3@email.com', 380000000003),
//     new User(8, '4', '4', '4@email.com', 380000000004),
//     new User(2, '5', '5', '5@email.com', 380000000005),
//     new User(6, '6', '6', '6@email.com', 380000000006),
//     new User(4, '7', '7', '7@email.com', 380000000007),
//     new User(15, '8', '8', '8@email.com', 380000000008),
//     new User(13, '9', '9', '9@email.com', 380000000009),
//     new User(22, '10', '10', '10@email.com', 380000000010)
// ]

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let filteredUsers = users.filter(value => value.id % 2 === 0)
// console.log(filteredUsers)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sortedUsers = users.sort((a, b) => {
//     return a.id - b.id
// })
// console.log(sortedUsers)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let clients = [
//     new Client(1, '1', '1', '1@email.com', 380000000001, 'ps5, car, bike'),
//     new Client(11, '2', '2', '2@email.com', 380000000002, 'ps5'),
//     new Client(5, '3', '3', '3@email.com', 380000000003, 'laptop'),
//     new Client(8, '4', '4', '4@email.com', 380000000004, 'bike, laptop'),
//     new Client(2, '5', '5', '5@email.com', 380000000005, 'ps5'),
//     new Client(6, '6', '6', '6@email.com', 380000000006, 'phone, car'),
//     new Client(4, '7', '7', '7@email.com', 380000000007, 'ps5, car, bike, phone'),
//     new Client(15, '8', '8', '8@email.com', 380000000008, 'laptop'),
//     new Client(13, '9', '9', '9@email.com', 380000000009, 'ps5'),
//     new Client(22, '10', '10', '10@email.com', 380000000010, 'car')
// ]

// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// let sortedClient = clients.sort((a, b) => {
//     return a.order.length - b.order.length
// })
// console.log(sortedClient)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

// function Car(model, prod, year, maxSpeed, V) {
//     this.model = model;
//     this.prod = prod;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.V = V;
// }
//
// let car = new Car('S', 'Tesla', '2021', 200, 0)
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
// Car.prototype.drive = function () {
//     console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
// }
// car.drive()

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

// Car.prototype.info = function () {
//     console.log(`
//     model - ${this.model}
//     prod - ${this.prod}
//     year - ${this.year}
//     maxSpeed - ${this.maxSpeed}
//     V - ${this.V}`)
// }
// car.info()

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

// Car.prototype.increaseMaxSpeed = function (newSpeed) {
//     this.maxSpeed = newSpeed
//     return console.log(`new Speed - ${newSpeed}`)
// }
//
// car.increaseMaxSpeed(250)

// -- changeYear (newValue) - змінює рік випуску на значення newValue

// Car.prototype.changeYear = function (newValue) {
//     this.year = newValue
//     return console.log(`year - ${newValue}`)
// }
//
// car.changeYear(2022)

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// Car.prototype.addDriver = function (driver) {
//     this.driver = driver
//     return console.log(`new driver - ${driver}`)
// }
// car.addDriver('Tom')
//
// console.log(car)


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:

// class Car {
//     constructor(model, prod, year, maxSpeed, V) {
//         this.model = model;
//         this.prod = prod;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.V = V;
//     }
//
// // -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
//     drive() {
//         console.log(`Їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//
//     info() {
//         console.log(`
//     model - ${this.model}
//     prod - ${this.prod}
//     year - ${this.year}
//     maxSpeed - ${this.maxSpeed}
//     V - ${this.V}`)
//     }
//
// // -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpeed = newSpeed
//         return console.log(`new Speed - ${newSpeed}`)
//     }
//
// // -- changeYear (newValue) - змінює рік випуску на значення newValue
//
//     changeYear(newValue) {
//         this.year = newValue
//         return console.log(`year - ${newValue}`)
//     }
//
// // -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//     addDriver(driver) {
//         this.driver = driver
//         return console.log(`new driver - ${driver}`)
//     }
//
// }
//
// let car = new Car('S', 'Tesla', '2021', 200, 0)
//
// car.drive()
// car.info()
// car.increaseMaxSpeed(250)
// car.changeYear(2022)
// car.addDriver('Tom')
// console.log(car)

//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

function Cinderella(name, age, size) {
    this.name = name;
    this.age = age;
    this.size = size;
}

let cinderellas = [
    new Cinderella('Sofi', 20, 25),
    new Cinderella('Anna', 22, 26),
    new Cinderella('Elizabeth', 18, 27),
    new Cinderella('Kate', 21, 28),
    new Cinderella('Viktoria', 19, 29),
    new Cinderella('Eva', 23, 30),
    new Cinderella('Anastasia', 21, 31),
    new Cinderella('Kler', 22, 32),
    new Cinderella('Regina', 23, 33),
    new Cinderella('Alt', 24, 34),
]
console.log(cinderellas)

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let prince = new Prince('Bob', 22, 31)

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

for (const cinderella of cinderellas) {
    if (cinderella.size === prince.size)
        console.log(cinderella)
}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

let find = cinderellas.find(value => value.size === prince.size)
console.log(find)