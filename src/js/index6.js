// const studens = [
//   "Богдан",
//   "Даня",
//   "Ваня",
//   "Артем",
//   "Максим",
//   "Ульяна",
//   "Кирил",
// ];

// for (let i = 0; i < studens.length; i++) {
//   studens[i] = `${i + 1}.${studens[i]}`;
// }

// console.log(studens);

// ,

// const studens = [
//   ["Богдан", 15],
//   [("Ваня", 11)],
//   [("Вова", 15)],
//   [("Артем", 15)],
//   [("Кирил", 14)],
//   [("Даня", 17)],
//   [("Максим", 15)],
//   [("Даніїл", 15)],
//   [("Уляна", 16)],
// ];

// for (let student of studens) {
//   for (let innerStudent of student) {
//     console.log(innerStudent);
//   }
// }

// console.log("===============");
// for (let i = 0; i < studens.length; i++) {
//   for (j = 0; j < studens[i].length; j++) {
//     console.log(studens[i][j]);
//   }
// }

//////////////////////////// 1
// const arr1 = [1, 5, "4", "hello"];
// const arr2 = [true, 2, {}, ["a"], 222];

// console.log(arr1[1]);
// console.log(arr2[1]);

// console.log(arr1[1] + arr2[1]);

//////////////////////////// 2

// const fruits = ["яблуко", "Груша", "банан", "апельсин"];

// console.log(fruits[0]);
// fruits[fruits.length - 1] = "слива";
// console.log(fruits);

//////////////////////////// 3

// const programingLanguage = ["js", "c++", "python"];

// for (let i = 0; i < programingLanguage.length; i++) {
//   console.log(programingLanguage[1]);
// }

// for (let element of programingLanguage) {
//   console.log((element = 0));
// }

//////////////////////////// 4

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;
// for (let number of card) {
//   total += number;
// }
// console.log(total);
// // //////////////////////////////////////////////// OR
// for (let i = 0; i < cart.length; i++) {
//   total += cart[i];
// }
// console.log(total);

//////////////////////////// 5

// const arr1 = ["123", "ggwp", "5432"];

// arr1[arr1.length] = "22";
// for (const elem of arr1) {
//   console.log(elem);
// }

//////////////////////////// 6

// for (const element of arr2) {
//   console.log(element, typeof element);
// }

//////////////////////////// 7
// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
// let total = 0;

// for (let number of numbers) {
//   if (number % 2 === 0) {
//     total += number;
//   }
// }
// console.log(total);

//////////////////////////// 8

// const logins = ["whyaquamarine", "JoiZu", "mollystutu", "kruisher"];
// const targetLogin = "JoiZu";
// let found = false;

// for (let i = 0; i < logins.length; i++) {
//   if (logins[i] === targetLogin) {
//     console.log(`Користувач ${targetLogin} знайдено.`);
//     found = true;
//     break;
//   }
// }
// if (!found) {
//   console.log(`Користувач ${targetLogin} не знайдено.`);
// }

//////////////////////////// 9
