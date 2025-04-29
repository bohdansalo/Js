// // const numbers = [1, 2, 3, -4, 5];

// // const total = numbers.reduce((sum, number) => {
// //   return sum + number;
// // }, 0);

// // // 0 + 1
// // // 1 + 2
// // // 3 + 3
// // // 6 + (-4)
// // // 2 + 5
// // // 7
// // console.log(total);
// // // =======================================

// // let sum = 0;

// // for (const number of numbers) {
// //   sum += number;
// // }

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// //   ========= Imperation
// //   let likes = 0

// //   for (const tweet of tweers){
// //     likes += tweet.tweers
// //   }

// // ======== Declaration

// const likes = tweets.reduce((totalLikes, tweet) => {
//   return totalLikes + tweet.likes;
// }, 0);
// console.log(likes);

// // // =======================================

// const tags = [];

// tweets.forEach((tweet) => {
//   tags.push(...tweet.tags);
// });
// console.log(tags);

// // // =======================================

// const totalTags = tweets.reduce((allTags, tweet) => {
//   allTags.push(...tweet.tags);
//   return allTags;
// }, []);

// console.log(totalTags);

// // // =======================================

// const countTags = totalTags.reduce((acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }
//   acc[tag] += 1;

//   return acc;
// }, {});

// console.log(countTags);

///// ============================================================================================================================================================

// const clients = ["Mango", "Ajax", "Apolo", "Poly"];

// // const sortedClients = clients.sort((a, b) => {
// //   console.log("a", a);
// //   console.log("b", b);
// // });

// const sortedClients = clients.sort((next, prev) => {
//   return prev.localeCompare(next);
// });
// console.log(sortedClients);

// const numbers = [10, 25, -7, 112, 1, 2, 3, 4, 5, 6, 7, 8];

// const sortedNumbers = numbers.sort((next, prev) => prev - next);
// console.log(sortedNumbers);

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];
///// ============================================================================================================================================================

// ////=1=////

// const players = [
//   { id: "player-1", name: "Mango", timePlayed: 310, points: 54, online: false },
//   { id: "player-2", name: "Poly", timePlayed: 470, points: 92, online: true },
//   { id: "player-3", name: "Kiwi", timePlayed: 230, points: 48, online: true },
//   { id: "player-4", name: "Ajax", timePlayed: 150, points: 71, online: false },
//   { id: "player-5", name: "Chelsy", timePlayed: 80, points: 48, online: true },
// ];

// // const playersTotalTimeHoursPlay = players.reduce((totalTime, player) => {
// //   return totalTime + player.timePlayed;
// // }, 0);

// // console.log(playersTotalTimeHoursPlay);

// // ////=2=////

// const sortedPlayersByTimePlayed = players.sort(
//   (next, prev) => next.timePlayed - prev.timePlayed
// );
// console.log(sortedPlayersByTimePlayed);
