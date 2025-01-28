let cost;

const sub = "pro";

// if (sub === "vip") {
//   cost = 10;
// } else if ((sub = "base")) {
//   cost = 3;
// } else if (sub === "pro") {
//   cost = 5;
// } else {
//   alert("Такої підписки не існує!");
// }

// switch (sub) {
//   case "vip":
//     cost = 10;
//     break;
//   case "base":
//     cost = 3;
//     break;
//   case "pro":
//     cost = 5;
//     break;
//   default:
//     alert("Такої підписки не існує!");
// }

// console.log(cost);

// 1
let textContent;

const browser = "Safari";

switch (browser) {
  case "Edge":
    textContent = "You've got the Edge!";
    break;
  case "Chrome":
  case "Firefox":
  case "Safari":
  case "Opera":
    textContent = "Ми підтримуємо і ці браузери";
    break;
  default:
    textContent = "Маємо надію, що ця сторінка виглядає добре!";
}

// 2

// let result;

// const a = Number(prompt("Введіть ціле число (1 3 ):"));

// switch (a) {
//   case 0:
//     result = 0;
//     break;
//   case 1:
//     result = 1;
//     break;
//   case 2:
//   case 3:
//     result = "2,3";
//     break;
//   default:
//     result = "Невідоме значення";
// }

// console.log(result);

// 3

// const number = Number(prompt("Веддіть ціле число"));

// if (number >= 55 && number <= 99) {
//   console.log("Число потрапляє в діапазон");
// } else {
//   console.log("Число не потрапляє в діапазон");
// }

// console.log(typeof number);

// 4

const age = 55;

if (age >= 0 && age <= 16) {
  console.log("Діти");
} else if (age >= 17 && age <= 60) {
  console.log("дорослі");
} else if (age >= 61 && age <= 100) {
  console.log("пенсіонери");
}
