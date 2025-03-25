// // const hotel = {
// //   name: "Resolt",
// //   stars: 5,
// //   capacity: 200,
// //   pool: true,
// // };

// // const keys = Object.keys(hotel);
// // console.log(keys);

// // // for (const key of keys) {
// // //   console.log(hotel[key]);
// // // }

// // const hotelValues = Object.values(hotel);
// // console.log(hotelValues);

// // const hotelEntries = Object.entries(hotel);
// // console.log(hotelEntries);

// // [
// //   ["name", "Resolt"],
// //   ["stars", "5"],
// // ];

// // // for (const key in hotel) {
// // //   if (key === "pool") console.log("Цей об'єкт містить інформацію про басейн");
// // // }

// // // console.log(hotel["name"]);

// // const numbers = [1, 5, 6, 3, 15];

// // const maxNumber = Math.max(...numbers);
// // console.log(maxNumber);

// // const minNumber = Math.min(...numbers);
// // console.log(minNumber);

// // const a = 10;
// // let b = a;
// // b += 1;

// // console.log(a);
// // console.log(b);

// // const numbers2 = [1, 2, 3];

// // numbers2.push(4);
// // console.log(numbers2);
// // console.log(numbers);

// // const hotel = {
// //   name: "Resolt",
// //   stars: 5,
// //   capacity: 100,
// // };

// // const hotel2 = { ...hotel, name: "New name" };

// // console.log(hotel);
// // console.log(hotel2);

// // const numbers3 = [...numbers.slice(0, 1), 100, ...numbers, splice(1)];
// // console.log(numbers2);

// const numbers1 = [1, 2, 3];

// const numbers2 = [5, 7, 9];
// // const numbers = numbers1.concat(numbers2)
// const numbers = [...numbers1, ...numbers2]; // Об'днування масивів оператора
// console.log(numbers);

// const hotel = {
//   name: "Resolt",
//   stars: 5,
//   capacity: 200,
//   pool: true,
// };

// console.log(hotel.hasOwnProperties("pool"));

// task 1

// const countProperties = function (obj) {
//   return Object.keys(obj).length;
// };

// const person = {
//   name: "Alice",
//   age: 30,
//   city: "Kyiv",
//   country: "Ukraine",
//   job: "Developer",
//   experience: 5,
//   skills: ["JavaScript", "React", "Node.js"],
//   isEmployed: true,
//   salary: 3000,
//   languages: { english: "B2", ukrainian: "native" },
//   hobby: "Photography",
// };

// console.log(countProperties(person));

// task 2

// const friends = [
//   { name: "Mango", online: false },
//   { name: "Kiwi", online: true },
//   { name: "Poly", online: false },
//   { name: "Ajax", online: false },
// ];

// const findFriendByName = (friends, friendsName) => {
//   for (const friend of friends) {
//     if (friend.name === friendsName) {
//       return friend;
//     }
//   }
//   return null;
// };

// console.log(findFriendByName(friends, "Kiwi"));

// task 3

// const getAllNames = function (friends) {
//   const friendsName = [];
//   for (const friend of friends) {
//     friendsName.push(friend.name);
//   }
//   return friendsName;
// };

// console.log(getAllNames(friends));

// task 4

// const getOnlineFriends = (friends) => {
//   const onlineFriend = [];
//   for (const friend of friends) {
//     if (friend.online) {
//       onlineFriend.push(friend.name);
//     }
//   }
//   return onlineFriend;
// };

// console.log(getOnlineFriends(friends));

// task 5

const getFriendsByStatus = function (friends) {
  const friendByStat = {
    onlineFriends: [],
    offlineFriends: [],
  };
  for (const friend of friends) {
    if (friend.online) {
      friendByStat.onlineFriends.push(friend.name);
    } else {
      friendByStat.offlineFriends.push(friend.name);
    }
  }
  return friendByStat;
};
console.log(getFriendsByStatus(friend));
