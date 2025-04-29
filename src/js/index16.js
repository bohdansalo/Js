// // const title = document.body.children[0].children[0];

// // console.dir(title);

// // title.parentNode.classList.add("container");

// //===================================================

// const title = document.body.children[0].children[0];
// const box = title.parentNode;

// // console.log(box.lastElementChild);

// console.log(title.previousElementSibling);

// const textTitle = document.querySelector("[data-title]");
// const elements = document.querySelectorAll("ul a");
// console.log(elements);

// elements.forEach((link) => (link.style.fontSize = "3em"));

// //===================================================

// const checkbox = document.querySelector("[type='checkbox']");

// // console.log(checkbox.checked);
// // // ===
// // const image = document.querySelector("img");
// // image.alt = "Rocket";
// // console.log(image.src);
// // // ===

// const title = document.querySelector(".title");
// // title.style.backgroundColor = "green";
// // console.log(title.style.backgroundColor);
// console.log(title.classList);

// //===================================================

// const title = document.querySelector(".title");

// // // Робота з класами

// title.classList.add("section-title"); // // додавання класу
// title.classList.remove("title"); // // Видалення класу
// title.classList.toggle("togle"); // // Додає клас, якщо такого немає, якщо є то він його видаляє
// title.classList.contains("section-title"); // // перевіряє наяваність класу true||false
// title.classList.replace("title", "big-title"); // //  заміна класу

// const nav = document.querySelector(".site-nav");
// nav.style.backgroundColor = "yellow";

// const firstLink = document.querySelectorAll(".site-nav a"[0]);
// firstLink.classList.add("site-nav_link");

// const targetLink = '[href="https://"]';
// targetLink.style.fontSize = "2em";
// console.log(targetLink);

// ===== 2 ========

// const allLink = document.querySelectorAll("ul a");

// allLink.forEach((link) => {
//   console.log(link.href);

//   if (link.href.includes("://") && !link.href.includes("127.0.0")) {
//     link.style.color = "orange";
//   }
// });

// console.log(allLink);
