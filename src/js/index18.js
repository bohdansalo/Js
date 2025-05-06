// const btn = document.querySelector("[data-button]");
// const removeBtn = document.querySelector("[data-remove-handler]");

// const handleClick = () => {
//   alert("Ви клікнули на кнопку!");
// };

// btn.addEventListener("click", handleClick);

// const handleClickRemove = () => {
//   btn.removeEventListener("click", handleClick);
//   btn.remove();
// };
// removeBtn.addEventListener("click", handleClickRemove);

// const searchForm = document.querySelector("[data-searchForm]");

// const handleSubmit = (event) => {
//   event.preventDefault();
//   console.log("Відбувається пошук");
//   setTimeout(() => {
//     console.log("Нічого не знайдено!");
//   }, 3000);
// };

// searchForm.addEventListener("submit", handleSubmit);

// const form = document.querySelector(".js-register-form");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const currentForm = event.target;

//   const { email, password, subscription } = currentForm.elements;
//   console.log("Пошта", email.value);
//   console.log("Пароль", password.value);
//   console.log("Підписка", subscription.value);
// });

// const formInput = document.querySelector("[data-textInput]");
// const formCheckbox = document.querySelector("[data-check]");
// const output = document.querySelector("[data-output]");

// formInput.addEventListener("input", (event) => {
//   const text = event.target.value;
//   output.textContent = text;
// });

// formInput.addEventListener("submit", (event) => {
//   const text = event.target.value;
//   output.textContent = text;
// });

// formCheckbox.addEventListener("change", (event) => {
//   const text = event.target.value;
//   output.textContent = text;
//   console.log("Change");
// });

// formInput.addEventListener("blur", (event) => {
//   event.target.style.outline = "3px solid red";
// });

// formInput.addEventListener("focus", (event) => {
//   event.target.style.outline = "3px solid red";
// });

// ================ 1 ==========

const button = document.querySelector("[data-btn]");

const handelColorChange = (event) => {
  const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb( ${r},${g},${b})`;
  };

  event.target.style.backgroundColor = randomColor();
};
button.addEventListener("click", handelColorChange);
