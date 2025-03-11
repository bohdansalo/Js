//

// students.length = 0;

// // створення об'єкту
// const hotel = {
//   name: "Resort",
//   stars: 5,
//   pool: true,
//   copacity: 500,
// };

// console.log(hotel.copacity);
// console.log(hotel["name"]);

// зміна значення певної властивості
// hotel.capacity = 200;

// створення нової властивості
// hotel.pool = true;

// console.log(hotel);

// Короткі властивості
// const catName = "Сніжок";
// const catColor = "while";

// const cat = {
//   catName,
//   catColor,
//   catAge: 5,
// };

// console.log(cat);

// // Обчислювальні властивості
// const newCat = {
//   [`First-${catName}`]: "Сніжок",
//   catColor,
//   catAge: 5,
// };

// console.log(newCat);

// const hotel = {
//   name: "Resort",
//   stars: 5,
//   capacity: 500,

// Метод об'єкту

//   showHotelName() {
//     console.log(this);
//   },
//   changeRating(newRating) {
//     this.stars = newRating;
//   },
// };

// hotel.showHotelName();
// hotel.changeRating(4);
// console.log(hotel);

// const person = {
//   name: "Timyr",
//   age: 15,
//   sayName() {
//     console.log(this.name);
//   },
//   run() {
//     // код для бігу
//   },
// };
// person.run();

// ====================   1
// const persone = {
//   age: 15,
//   name: "Tim",
//   gender: "male",
//   showInfo() {
//     console.log(
//       `Персона з ім'ям ${this.name}, вік ${this.age}, гендер ${this.gender}`
//     );
//   },
// };
// console.log(persone);

// ====================   2

// const car = {
//   brand: "Chevrole",
//   model: "Impala",
//   year: 1967,
//   color: "black",

//   showData() {
//     console.log(
//       `інформацуія про машину:
//     Марка: ${this.brand},
//     модель: ${this.model},
//     Рік випуску: ${this.year},
//     Кольор: ${this.color}`
//     );
//   },
// };
// car.showData();

// ====================   3

// const movie = {
//   title: "Avatar",
//   director: "Кэмерон, Джеймс",
//   year: 2009,
//   genre: "Фантастика",

//   showCinemaInfo() {
//     console.log(
//       `назва фільму ${this.title}, автор фільму ${this.director}, рік випуску ${this.year}, жанр фільму ${this.genre}`
//     );
//   },
// };

// movie.showCinemaInfo();

// ====================   4
// const laptop = {
//   brand: "Apple",
//   model: "MacBook Pro",
//   processor: "m1",
//   ram: "8gb",

//   getlaptopInfo() {
//     return `Ноутбук ${this.brand}, ${this.model}, Процесор ${this.processor}, Оперативна пам'ять ${this.ram}`;
//   },
// };

// laptop.getlaptopInfo();
// console.log(laptop.getlaptopInfo());

// alert(laptop.getlaptopInfo());

// ====================   5

// const house = {
//   address: "Вулиця Тараса Шевченка 22",
//   floors: "Ламінат",
//   color: "Сірий",
//   yearBuilt: 1990,

//   getAddress() {
//     return this.adress;
//   },
// };
// house.color - "gray";
// console.log(house.getAdress());
// console.log(house);

// ====================   6

// const booл = {
//   title: "shatter me",
//   author: "T. Mafi",
//   year: 2011,
//   genre: "utopia",

//   updateProps(key, newValue) {
//     this[key] = newValue;
//   },
// };

// booл.updateProps("year", 2023);
// console.log(bool);

// ====================   7

// const restaurant = {
//   name: "Rosemary",
//   cuisine: "Traditional",
//   address: "Street 32",
//   rating: 5,

//   changeAddress(newAddress) {
//     this.address = newAddress;
//   },
//   changeRating(newRating) {
//     if (newRating >= 0 && newRating <= 5) {
//       this.rating = newRating;
//     }
//   },
// };

// restaurant.changeAddress("street 22");
// restaurant.changeRating(0);
// console.log(restaurant);

// ====================   8

const students = [
  {
    name: "Vanya",
    age: 15,
    gender: "man",
    grade: 752,
  },
  {
    name: "Artem",
    age: 16,
    gender: "man",
    grade: 1039,
  },
  {
    name: "Uliana",
    age: 16,
    gender: "woman",
    grade: 1092,
  },
];

const getAverageGrabe = (students) => {
  let sum = 0;
  for (const student of students) {
    sum += student.grade;
  }
  return sum / students.length;
};

console.log(getAverageGrabe(students));
