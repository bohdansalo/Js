// // String
// const string = "JavaScript !";

// console.log(string.length); //рахує кількість символів в рядку, довжина

// console.log(string.toLowerCase()); //приводить всі символи до нижнього регістру

// console.log(string.toUpperCase()); //приводить всі символи до високого регістру

// console.log(string.indexOf("script")); //повертає індекс першого збігу підрядка

// console.log(string.toLowerCase().indexOf("scriptd"));

// console.log(string.includes("java")); // повертає true and false в залежності від того чи містить наш рядок підряток(перевіряє чи містить рядок)

// console.log(string.startsWith("Script")); // чи починається рядок з підрядка

// console.log(string.endsWith("Script")); // чи закінчується рядок з підрядка

// console.log(string.trim()); // забираэ зайві пробіли на початку та кінці

// const stringNumber = "1";

// console.log(stringNumber.padStart(3, "0")); // цей метод доповнює поточний рядок іншим рядком поки отриманий рядок не досягне заданої довжини доповнює на початку
// console.log(stringNumber.padEnd(4, "!")); // цей метод доповнює поточний рядок іншим рядком поки отриманий рядок не досягне заданої довжини доповнює на кінець

// const str1 = "Hello";
// const str2 = "World";
// // console.log(str1 + str2);
// const templateStr = `${str1} ${str2}`;

// const userName = "Богдан";
// const welcomeMessage = `привіт, ${userName.toUpperCase()}! Вітаємо на сайті!`;
// console.log(welcomeMessage);

// Завдання 1
// const stringName = "Богдан Сало";
// console.log(stringName.length);

// Завдання 2
// const stringUsername = "богдан";
// console.log(stringUsername.toUpperCase());

// Завдання 3
// const userName = "Богдан Сало";
// console.log(userName.charAt(0));
// Завдання 4
// const stringName = "Богдан Сало";
// console.log(stringName.indexOf(" "));

// Завдання 5
// const stringName = "Влад";
// const stringUsername = stringName.replace(stringName.charAt(0), ">");
// console.log(stringUsername);

// // Завдання 6
// const textString = "JavaScript";
// console.log(textString.substring(0, 4));

// //Custom  2.1
// const customerName = "Богдан";
// const customerSecond = "Сало";
// const time = "17.00";
// const roomNumber = "26";
// const message = `Гість ${customerName} ${customerSecond} посилання в ${time} номер ${roomNumber}`;
// console.log(message);

// //Custom 2.2
// const notTrimmedSentense = `  Hello World  `;
// const trimmedSentense = notTrimmedSentense.trim();
// console.log(trimmedSentense);

// //Custom 2.3
// const newMessage = "Ваш баланс поповнено на 10000000";
// console.log(newMessage.length);

//Super Custom 2.1
const blacklistedWord1 = "спам";
const blacklistedWord2 = "розпродаж";

const string1 = "Привіт, я Ілон Маск, це не спам, пропоную тобі мільйон!";
const string2 = "Найбільший РОЗПРОДАЖ цього тижня, не пропустіть!";
const string3 = "Рекламна кампанія #jsIsAwesome";

if (
  string1.toLocaleLowerCase().includes(blacklistedWord1) &&
  string1.toLocaleLowerCase().includes(blacklistedWord2)
) {
  console.log("Повідомення містить спам або рекламу");
} else {
  console.log("Повідомення не містить небажаного контенту");
}
checkSpan(string2);
