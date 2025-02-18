// const qvery = "Welcome to Bahamas!";

// const arrOfmessage = message.split("");
// console.log(arrOfmessage);

// console.log(arrOfmessage.join("-"));

// ===============================

// const qvery = "Welcome to Bahamas!";
// const params = qvery.toLowerCase().split(" ").join("+");\

// console.log(params);

// ===============================

// const fruits = ["cherry", "strawberry", "apple", "orange"];

// // indexOF

// console.log(fruits.indexOf("cherry"));

// // includes

// console.log(fruits.includes(true))

// ===============================

// const fruits = ["cherry", "strawberry", "apple", "orange"];

// fruits.push("banana"); // Дадає елемент в кінець масиву
// console.log(fruits);

// fruits.pop(); // Видаляє елемент в кінець масиву (пустий видаляє в кінці рядку)
// console.log(fruits);

// fruits.unshift("lemon"); // Додає на початок масиву
// console.log(fruits);

// fruits.shift(); // Видаляє початок масиву
// console.log(fruits);

// ===============================

// const fruits = ["cherry", "strawberry", "apple", "orange"];

// // fruits.slice(1, 2); // виводить вибрані рядки

// const newFruits = fruits.slice(0, 3); // виводить вибрані рядки

// console.log(newFruits);

// ===============================
// const fruits = ["cherry", "strawberry", "apple", "orange"];
// const deletedIndex = fruits.indexOf("apple");

// fruits.splice(2, 0, "banana", "lemone");
// console.log(fruits);

// ===============================

// const fruits = ["cherry", "strawberry"];
// const fruits2 = ["apple", "orange"];

// const allFruits = fruits.concat(fruits2);
// console.log(allFruits);

// =============================== 1

// const numbers = [12, 33, 22, 11, 55];
// numbers.push(11);
// console.log(numbers);

// =============================== 2

// const text = ["Перше Число", "Друге Число", "Третє Число"];
// const deletedText = text.pop();
// console.log(text);

// =============================== 3

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const five = numbers.slice(0, 5);
// console.log(five);

// =============================== 4

// const number = [1, 2, 3, 4, 5];
// const findIndex = number.indexOf(3);
// console.log(findIndex);

// =============================== 5

// const animals = ["Lion", "tiger", "dog", "cat", "monkey"];
// const result = animals.join(", ");

// console.log(result);

// =============================== 6

// const title = "Top 10 benefits of React framework";
// // const result = title.toLowerCase().split(" ").join("-");

// const titleToLower = title.toLowerCase();
// const arrTitle = titleToLower.split(" ");
// const result = arrTitle.join("-");

// console.log(result);

// =============================== 7

// const array1 = [5, 10, 15, 20];
// const array2 = [10, 20, 30];

// const firstArrayLenght = array1.length;
// const secondArrayLenght = array2.length;

// const result = firstArrayLenght + secondArrayLenght;

// console.log(result);

// two

// const resultArray = array1.concat(array2);
// console.log(resultArray);

// =============================== 8
// const message = "Welcome to Ukraine!";

// const messageArray = message.split("");
// console.log(messageArray);
// console.log(messageArray.indexOf("1"));

// const messageString = messageArray.join("");
// console.log(messageString);

// =============================== 9

// const userGaming = ["monesy", "donk", "simple"];

// // for (let i = 0; i < userGaming.length; i++) {
// //   userGaming[i] = `${userGaming[i]}-${i + 1}`;
// // }
// // console.log(userGaming);
// let counter = 1;
// const newUserGaming = [];
// for (const player of userGaming) {
//   newUserGaming.push(`${player}-${counter}`);
//   counter += 1;
// }
// console.log(newUserGaming);

// =============================== 10
// const styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");
// console.log(styles);
// styles.splice(1, 1, "Класика");
// styles.shift();
// styles.unshift("Pen", "Perri");
// console.log(styles);
