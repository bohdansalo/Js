// const sum = function (a, b) {
//   return a + b;
// };

// const arrowSum = (a, b) => {
//   return a + b;
// };

// console.log(arrowSum(5, 7));

// const squer = (x) => x * x;
// console.log(squer(5));

// const numbers = [1, 2, 34];

// function getArrayLenght(arr) {
//   return arr.lenght;
// }

// const getArrayLenght = (arr) => arr.lenght;
// console.log(getArrayLenght(numbers));

// =================

// const print = function (message, callback) {
//   callback(message);
// };

// =================

// const prettyPrint = (message) => {
//   console.log(message + "!");
// };

// print("Hello", prettyPrint);

// const getAverageScore = (getSum, ...args) => {
//   const sum = getSum(args);
//   return sum / args.length;
// };
// const getSum = (numbers) => {
//   let sum = 0;
//   for (const number of numbers) {
//     sum = sum + number;
//   }
//   return sum;
// };
// const result = getAverageScore(getSum, 1, 3, 5);
// console.log(result);

// =================

// const students = [
//   "Ваня",
//   "Давид",
//   "Даня",
//   "Максим",
//   "Данііл",
//   "Богдан",
//   "Вова",
//   "Уляна",
//   "Артем",
// ];

// const shortName = students.filter((student) => student.length <= 4);

// const myFilter = (arr, callback) => {
//   const filteredElements = [];
//   for (const element of arr) {
//     const isPassed = callback(element);

//     if (isPassed) {
//       filteredElements.push(element);
//     }
//   }
//   return filteredElements;
// };

// const result = myFilter(students, (student) => student[student.length]) === "Я";
// console.log(result);

// ================= 1

// const squareFunction = (numbers, callback) => {
//   const arraySquareNumbers = [];
//   for (const number of numbers) {
//     const squareNumber = callback(number);
//     arraySquareNumbers.push(squareNumber);
//   }

//   return arraySquareNumbers;
// };

// console.log(squareFunction([5, 6, 7], (number) => number * number));

// ================= 2

// const arr = [1, 2, 3, 4, 5];
// const sumArray = (arr, callback) => {
//   const sum = callback(arr);
//   return sum;
// };

// const cb = (numbers) => {
//   let sum = 0;
//   for (const number of numbers) {
//     sum += number;
//   }
//   return sum;
// };

// sumArray(arr, cb);

// console.log(sumArray(arr, cb));

// ================= 3

const arr = [1, 2, 3, 4, 5];
const multiplyArray = (arr, num, callback) => {
  const result = [];

  for (const number of arr) {
    const multiply = callback(number, num);
    result.push(multiply);
  }
  return result;
};

const newArray = multiplyArray(arr, 3, (a, b) => a * b);
console.log(newArray);
