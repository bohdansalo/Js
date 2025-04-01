// // // const dirtyMultiply = (array, value) => {
// // //   for (let i = 0; i < array.length; i += 1) {
// // //     array[i] = array[i] * value;
// // //   }
// // // };

// // // const numbers = [1, 2, 3, 4, 5];

// // // dirtyMultiply(numbers, 2);

// // // // Відбулася мутація вихідних даних
// // // console.log(numbers); // [2, 4, 6, 8, 10]

// // // const clearMultiply = (array, value) => {
// // //   const modifyNumbers = [];

// // //   for (const number of array) {
// // //     modifyNumbers.push(number * value);
// // //   }

// // //   return modifyNumbers;
// // // };

// // // const numbers2 = [1, 2, 3, 4, 5];
// // // console.log(clearMultiply(numbers2, 2));
// // // console.log(numbers2);

// // const numbers = [1, 2, 3, 4, 5];

// // number.forEach((number, index, array) => {
// //   console.log(`Значення: ${number}, індекс: ${index}, масив: ${array} `);
// // });

// // // Перебирає масив, повертає

// // const modifyNumbers = numbers.map((number) => number + 5);
// // console.log(modifyNumbers, numbers);

// // // const modifyNumbersFunc = (array, value) => {
// // //   const result = [];
// // //   for (const number of array) {
// // //     result.push(number + value);
// // //   }
// // //   return result;
// // // };

// // const users = [
// //   { name: "Mango", isActive: true },
// //   { name: "Poly", isActive: false },
// //   { name: "Ajax", isActive: true },
// //   { name: "Mango", isActive: false },
// // ];

// // const names = users.map(({ name }) => name);
// // console.log(names);

// // // ================================================
// // // переберає масив, залишає елементи які задовільняюь умову, не змінює оригінальній масив
// // const filteredUsers = users.filter((user) => user.isActive);
// // console.log(filteredUsers);

// // const filteredUsersByName = users.filter((user) => user.name === "P");
// // console.log(filteredUsersByName);

// // const filteredNumbers = users.filter((number) => number > 2);
// // console.log(filteredNumbers);

// // // ================================================
// // // переберає масив, повертає елемент, який задовільняє умову. Зупиняється після знаходження першого елементу
// // const findUsersByName = users.find((user) => user.name === "Mango");
// // console.log(findUsersByName);

// // // ================================================
// // // Перебирає масив, повертає true, якщо всі елементи задовільняють умову

// // const isNumbersMoreZero = numbers.every((number) => number > 0);
// // console.log(isNumbersMoreZero);

// // const isAllUsersActive = users.every((user) => user.isActive);
// // console.log(isAllUsersActive);

// // // Перебирає масив, повертає true, якщо хочаб один елемент задовільняє умову

// // const isUserActive = users.some((user) => user.isActive);
// // console.log(isUserActive);

// // ====================================================================== 1
// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];

// const namePlayers = players.map((player) => player.name);
// console.log(namePlayers);

// // ====================================================================== 2

// const updatePlayers = players.map((player) => {
//   return { ...player, points: Math.round(player.points * 1.1) };
// });

// console.log(updatePlayers);
// // ====================================================================== 3
// const changeTimePlayedById = (players, playerId, additionalTime) => {
//   const result = players.map((player) =>
//     player.id === playerId
//       ? { ...player, timePlayed: (player.timePlayed += additionalTime) }
//       : player
//   );
//   return result;
// };
// console.log(changeTimePlayedById(players, "player-5", 40));

// // ====================================================================== 4

// const playerOnline = players.filter(({ online }) => online);
// console.log(playerOnline);
// // ====================================================================== 5

// const playerOffline = players.filter(({ online }) => !online);
// console.log(playerOffline);
// // ====================================================================== 6

// // const hardUsers = players.filter(({ timePlayed }) => timePlayed > 250);
// // ====================================================================== 7

// const findPlayerById = (players, playerId) => {
//   return players.find(({ id }) => id === playerId);
// };
// console.log(findPlayerById(players, "player-3"));
