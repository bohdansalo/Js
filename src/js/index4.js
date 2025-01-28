// let number;

// if (number) {
//   console.log("Перший блок коду");
// } else if (number === 0) {
//   console.log.number;
// } else if (number > 10) {
//   console.log("Число більше 10");
// } else {
//   console.log("Щось інше!");
// }

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const userAge = prompt("Вкажіть свій вік");

// if (Number(userAge)) {
//   console.log(`Ваш вік ${userAge}`);
// } else if (userAge) {
//   alert("Ви ввели некоректні дані!");
// } else {
//   alert("Ви не ввели дані!");
// }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const num1 = 10;
// const num2 = 15;

// const bigestNumber = num1 > num2 ? num1 : num2;

// let secondBigestNumber;
// if (num1 > num2) {
//   secondBigestNumber = num1;
// } else {
//   secondBigestNumber = num2;
// }

// завдання 2

// const userAnswer = prompt("Яка офіційна назва JavaScript?");

// if (userAnswer.toLowerCase() === "ecmascript") {
//   alert("Правильно!");
// } else {
//   alert("Ви не знаєте? ECMAScript!");
// }

// завдання 3

// const number = Number(prompt("Введіть число"));

// if (number > 0) {
//   alert(1);
// } else if (number < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }
// console.log(typeof number);

// завдання 4

// const a = 1;
// const b = 2;

// const result = a + b < 4 ? "Нижче" : "Вище";

// console.log(result);

// завдання 5 творч

// const x1 = 10;
// const x2 = 30;
// const number = 11;

// if (number < x1) {
//   alert("До х1");
// } else if (number > x1 && number < x2) {
//   alert("від х1 до х2");
// } else if (number > x2) {
//   alert("Після х1");
// } else if (number < x1 || number > x2) {
//   alert("до х1 або після х2");
// }

// завдання 6 творч

const isOnline = false;
const isFriend = true;
const isDnd = false;

if (isFriend && isOnline && !isDnd) {
  console.log("open chat");
} else {
  console.log("close chat");
}

// завдання 7 творч

const sub = "pro";

if (sub === "pro" || sub === "vip") {
  console.log("контент надано");
} else {
  console.log("немає доступу до контенту");
}
