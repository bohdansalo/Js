// // const handleKeyPress = (event) => {

//   console.log(event);
//   if (event.code === "Escape") {
//     console.log("You tape true key");
//   }
//   if (event.code === "KeyW") {
//     console.log("Forward");
//   }
// };
// document.addEventListener("keydown", handleKeyPress);

// const letters = ["a", "b", "c", "d", "f", "g", "w", "l", "v", "t"];
// const randomIndex = Math.floor(Math.random() * (letters.length - 1));
// const currentLetters = letters[randomIndex];

// // console.log(currentLetters);
// alert(`Спробуй вгадати цю клавішу комп'ютера`);

// const handleLetters = (event) => {
//   console.log(event);
//   if (event.key === currentLetters) {
//     alert("Клавіша підійшла!");
//   } else {
//     alert("Клавіша не вірна");
//   }
// };

// document.addEventListener("keydown", handleLetters);

// const handleKeyPress = (event) => {
//   console.log(event);
//   if (event.shiftkey && event.code === "KeyR") {
//     console.log("Press true combo");
//   }
// };

// document.addEventListener("keydown", handleKeyPress);

// const elem = document.querySelector(".element");

// const handleEventOut = (event) => {
//   elem.style.backgroundColor = "purple";
// };

// const handleEventIn = (event) => {
//   elem.style.backgroundColor = "gold";
// };

// elem.addEventListener("mouseout", handleEventOut);  // Вихід з елемента
// elem.addEventListener("mouseover", handleEventIn); //  Вхід в елемент

// const handleEvent = (event) => {
//   console.log(event);
// };
// elem.addEventListener("mousemove", handleEvent); // рух мишки
// elem.addEventListener("dblclick", handleEvent); //  Двійний клік

// ========= 1 ===============

// const clearBtn = document.querySelector(".js-clear");
// const output = document.querySelector(".js-output");

// const handleClear = () => {
//   output.textContent = "";
// };
// const handleOutput = (e) => {
//   if (e.key === "backspace") return;

//   output.textContent += e.key;
// };

// clearBtn.addEventListener("keydown", handleOutput);
// clearBtn.addEventListener("click", handleClear);

// ========= 2 ===============

// const input = document.querySelector("#input");
// const message = document.querySelector("#message");

// function handleInputMessage() {
//   message.textContent += input.value;
// }

// document.addEventListener("keydown", handleInputMessage);

// ========= 3 ===============

const element = document.querySelector("#box");

const handleColorChange = (event) => {
  console.log(event);
  if (event.code === "keyY") {
    element.style.backgroundColor = "yellow";
  }
  if (event.code === "keyG") {
    element.style.backgroundColor = "green";
  }
};
document.addEventListener("keydown", handleColorChange);
