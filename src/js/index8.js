// Function expression

// const sum = function (firstNumber, secondNumber) {
//   //   const result = firstNumber + secondNumber;
//   return firstNumber + secondNumber;
// };

// const result = sum(10, 15);
// console.log(result);
// console.log(sum(2, 3));
// --------------------------------------

// sum(2, 3);
// sum(7, 10);
// --------------------------------------

// const fnA = function () {
//   console.log("Почала ви конуватись fnA");
//   fnB();
//   console.log("Продовжила виконуватись [fnA] після виходу з [fnB]");
// };
// const fnB = function () {
//   console.log("виконується [fnB]");
// };
// console.log("Почав виконання [main]");
// fnA();
// console.log("Продовжив виконуватись [main] після виходу з [fnA]");

// --------------------------------------

// const sum = function (firstNumber, secondNumber) {
//   return firstNumber + secondNumber;
// };
// console.log(sum());

// for (let i = 10; i <= 100000; i += 1) {
//   console.log(i);
// }

// --------------------------------------

// const count = function (countFrom, countTo, step = 1) {
//   for (let i = countFrom; i <= countTo; i += step = 1) {
//     console.log(i);
//   }
// };

// console.log(count(1, 5));
// console.log("==================");
// count(2, 7, 2);
// console.log("==================");
// count(1, 50, 10);

// --------------------------------------
// -------------------------------------- variant 1

// let amount = 100;
// let balance = 100;

// if (amount === 0) {
//   console.log("Для проведення операції введіть суму більше нуля");
// } else if (amount > balance) {
//   console.log("Недостатньо коштів на рахунку");
// } else {
//   console.log("Операція зняття коштів проведена");
//   balance = balance - amount;
// }
// // -------------------------------------- variant 2

// const withdraw = function (amount, balance) {
//   if (amount === 0) {
//     console.log("Для проведення операції введіть суму більше нуля");
//     return;
//   }
//   if (amount > balance) {
//     console.log("Недостатньо коштів на рахунку");
//     return;
//   }
//   console.log("Операція зняття коштів проведена");
//   balance = balance - amount;
//   return balance;
// };
// console.log(withdraw(0, 5000));

// // --------------------------------------

// const sum = function (...args) {
//   console.log(args);
//   return;
// };

// console.log(sum(1, 2, 5, 5, 6, 789));

// // -------------------------------------- 1

// const hello1 = function () {
//   return "Привіт JavaScript";
// };
// console.log(hello1());

// // -------------------------------------- 2

// const hello2 = function (name) {
//   return `привіт, ${name}`;
// };
// console.log(message());

// // -------------------------------------- 3

// const mull = function (n, m) {
//   const sum = n + m;
//   const devide = n - m;
//   const multiply = n * m;
//   return [sum, devide, multiply];
// };
// console.log(mull(10, 2));

// // -------------------------------------- 4

// const myAverageScore = function (marks) {
//   let sum = 0;
//   for (let mark of marks) {
//     sum += mark;
//   }
//   const average = sum / marks.lenght;
//   if (average <= 100 && average >= 91) {
//     return "Myavaragescore: A";
//   }
//   if (average <= 90 && average >= 81) {
//     return "Myavaragescore: B";
//   }
//   if (average <= 80 && average >= 71) {
//     return "Myavaragescore: C";
//   }
//   if (average <= 70) {
//     return "Myavaragescore: D";
//   }
//   return "invalid marks";
// };
// console.log(myAverageScore([100, 75, 81, 96]));
// console.log(myAverageScore([45, 63, 85, 70]));
// console.log(myAverageScore([77, 82, 60, 58]));
// console.log(myAverageScore([93, 99, 93, 96]));

// // -------------------------------------- 5

// function findAverage(number) {
//   let sum = 0;
//   for (let number of numbers) {
//     sum = sum + number;
//   }
//   return sum / numbers.lenght;
// }
// console.log(findAverage([100, 25, 55555, 12]));

// // -------------------------------------- 6
const isEven = (num) => {
  let isEven = true;

  if (num % 2 !== 0) {
    isEven = false;
    return isEven;
  }
  return isEven;
};

console.log(isEven(13));
