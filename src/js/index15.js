// const animal = {
//   legs: 4,
//   tail: true,
// };

// // const dog = {
// //   legs: 4,
// //   name: "Poly",
// // };

// const dog = Object.create(animal);
// dog.sayHello = function () {
//   console.log("Гав");
// };
// console.log("Dog", dog);

// const haski = Object.create(dog);
// console.log("Haski", haski);

// haski.sayHello();

// console.log(dog.hasOwnProperty("legs"));

// const User = function (name, email) {
//   this.name = name;
//   this.email = email;
// };

// User.prototype.getMail = function () {
//   return this.email;
// };

// user_001.prototype.status = "base";

// const user_725 = new User("Poly", "poly@gmail.com");
// const user_001 = new User("Mango", "mango@gmail.com");

// user_725.status = "pro";
// console.log(user_001.getMail());

// class User {
//   #password;
//   #status;
//   constructor({ name, password }) {
//     this.name = name;
//     this.#password = password;
//     this.#status = "base";
//   }

//   getPassword() {
//     return this.#password;
//   }

//   set password(newPassword) {
//     if (newPassword === "") {
//       console.log("Пароль не може бути пустим");
//       return;
//     }
//     this.#password = newPassword;
//     console.log("Password updated");
//   }

//   get status() {
//     return `В данного користувача підписка рівня ${this.#status}`;
//   }

//   set status(newStatus) {
//     this.#status = newStatus;
//     console.log(
//       `Рівень підписки користувача ${this.name} оновленно до ${this.#status}`
//     );
//   }

//   getStatusInfo() {
//     return `В данного користувача підписка рівня ${this.#status}`;
//   }

//   updateStatus(newStatus) {
//     this.status = newStatus;
//   }
// }

// const user_002 = new User({ name: "Diego", password: "12345678_" });
// const user_010 = new User({ name: "Marcus", password: "87654321_" });

// user_010.updateStatus("plus");

// console.log(user_002.status);
// console.log(user_002.password);

// Створіть клас Person, що містить властивості firstName та lastName. Додайте метод getFullName(), який повертає повне ім'я у форматі "firstName lastName"

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// const person1 = new Person("John", "Doe");
// console.log(person1.getFullName());

// Створіть клас Rectangle, що містить властивості width та height. Додайте метод getArea(), який повертає площу прямокутника.

// class Rectangle {
//   constructor({ width, heigth }) {
//     this.width = width;
//     this.heigth = heigth;
//   }
//   getArea() {
//     return this.width * this.heigth;
//   }
// }

// const rectangle1 = new Rectangle({ width: 10, heigth: 5 });
// console.log(rectangle1.getArea()); // 50

// class User {
//   static takenMails = [];

//   static Roles = {
//     ADMIN: "admin",
//     BASE_USER: "user",
//     EDITOR: "content-creator",
//   };

//   static isTakenMail(email) {
//     return User.#takenMails.includes(email);
//   }

//   #email;
//   #role;
//   constructor({ email, role }) {
//     this.#email = email;
//     this.#role = role;
//     if (!User.isTakenMail(email)) {
//       User.#takenMails.push(email);
//     }
//   }
// }

// const user_002 = new User({ email: "email@email.com", role: User.Roles.ADMIN });
// const user_010 = new User({
//   email: "vlad@gmail.com",
//   role: User.Roles.EDITOR,
// });
