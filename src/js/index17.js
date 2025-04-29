// const container = document.querySelector(".container");

// const paragraph = document.createElement("p");
// const title = container.querySelector("h2");

// paragraph.classList.add("text");
// paragraph.textContent =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit.";

// const link = document.createElement("a");
// link.href = "https://www.google.com.ua/?hl=uk";
// link.textContent = "Google";

// container.append(paragraph, link);

// container.before(); // перед контейнером елемента який викликаємо
// container.after(); // після контейнера елемента який викликаємо
// title.remove() // видалення з DOM
// document.createElement("") // створення елементів тегів і тд.

// container.innerHTML = "<img src='./src/img/cat.png' alt = 'Cat'>";

// const buttons = [
//   { label: "Button 1", colorBg: "gold" },
//   { label: "Button 2", colorBg: "aqua" },
//   { label: "Button 3", colorBg: "green" },
//   { label: "Button 4", colorBg: "red" },
//   { label: "Button 5", colorBg: "orange" },
//   { label: "Button 6", colorBg: "tomato" },
//   { label: "Button 7", colorBg: "cyan" },
//   { label: "Button 8", colorBg: "white" },
//   { label: "Button 9", colorBg: "purple" },
// ];

// const btnList = document.querySelector(".btn-list");

// ===============================================

// Шаблонізація через innerHTML

// const btnListHtml = buttons
//   .map(
//     (button) =>
//       `<li><button style="background-color: ${button.colorBg}">${button.label}</button></li>`
//   )
//   .join("");

// btnList.innerHTML = btnListHtml;

// ===============================================

// Шаблонізація через CreateElement

// buttons.forEach((button) => {
//   const btn = document.createElement("button");
//   btn.textContent = button.label;
//   btn.style.backgroundColor = button.colorBg;
//   btnList.append(btn);
// });

// btnList.append(...btnHtml)

// ===============================================

// container.insertAdjacentHTML("afterbegin", "<p class = 'text'>Hello!</p>");
// container.insertAdjacentElement("beforeend", "title");

// const img = container.querySelector(".img");
// console.log(img.setAttribute("style"));
// console.log(img.removeAttribute("style"));
// console.log(img.attributes);

// const sumAction = document.querySelector("[data-action='+']");
// console.log(sumAction.dataset);

// =======================  1 ========================
const colorPickerOptions = [
  { label: "red", color: "#F44336" },
  { label: "green", color: "#4CAF50" },
  { label: "blue", color: "#2196F3" },
  { label: "grey", color: "#607D8B" },
  { label: "pink", color: "#E91E63" },
  { label: "indigo", color: "#3F51B5" },
];

const colorPicker = document.querySelector(".js-color-picker");

// const colorPickers = [];
// colorPickerOptions.forEach((option) => {
//   const a = document.createElement("a");
//   a.textContent = option.label;
//   a.style.color = option.color;
//   a.setAttribute("href", "#");
//   colorPicker.push(a);
// });

// colorPicker.append(...colorPicker);

// =======================  2 ========================
const colorPickerHtml = colorPickerHtml
  .map(
    (option) =>
      `<a href="#" style = "color: ${option.color}>${option.label}</a>"`
  )
  .join("");
console.log(colorPickerHtml);
colorPicker.innerHTML = colorPickerHtml;
// =======================  3 ========================

// =======================  4 ========================
