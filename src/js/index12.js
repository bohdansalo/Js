// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
//   location: {
//     country: "Spain",
//     city: "Barcelona",
//     address: "123 Beach Road",
//   },
//   amenities: ["Pool", "Spa", "Free Wi-Fi", "Gym", "Restaurant"],
//   rooms: {
//     single: { count: 20, pricePerNight: 80 },
//     double: { count: 50, pricePerNight: 120 },
//     suite: { count: 30, pricePerNight: 250 },
//   },

//   rating: {
//     guests: 9.2,
//     booking: 8.9,
//     tripAdvisor: 4.5,
//   },

//   contact: {
//     phone: "+34 123 456 789",
//     email: "info@resorthotel.com",
//   },
//   available: true,
// };

// // const {
// //   name = "Hotel",
// //   contact,
// //   location: { country },
// //   pool = "Інформація відсутня",
// // } = hotel;

// // const getInfo = (hotel) =>
// //   `${hotel.name} має ${hotel.stars} зірок: ${hotel.contact.phone}`;

// // const getInfoNew = ({ name, stars, contact: { phone } }) =>
// //   `${name} має ${stars} зірок. Зв'язатися можна за тел: ${phone}`;

// // console.log(info);

// // Декстуризація об'єкта

// // const {
// //   name = hotelName,
// //   contact,
// //   location: { country },
// //   pool = "Інформація відсутня",
// // } = hotel;

// // // Декстуризація масива

// // const students = [
// //   ["Артем", "Черкашин"],
// //   ["Богдан", "Сало"],
// //   ["Ваня", "Харченко"],
// // ];

// // for (const [name, surName] of students) {
// //   console.log(surName, name);
// // }

// // const {
// //   name = hotelName,
// //   contact,
// //   location: { country },
// //   ...rest
// // } = hotel;

// // console.log(rest);

// // ===================== 1
// const user = {
//   name: "John",
//   age: 30,
//   email: "john@example.com",
// };
// const { name, age, email } = user;

// console.log(user);

// // ===================== 2

// const car = {
//   make: "Toyota",
//   model: "Camry",
//   year: 2020,
//   features: ["power windows", "rear camera", "navigation"],
//   safety: {
//     airbags: true,
//     antilock_brakes: true,
//     stability_control: true,
//   },
// };

// const {
//   make,
//   model,
//   year,
//   features: [window, camera, navigator],
//   safety: { airbags, antilock_brakes, stability_control },
// } = car;

// console.log(model);
// console.log(camera);
// console.log(stability_control);

// // ===================== 3

// // const movie = {
// //     title: 'The Shawshank Redemption',
// //     director: {
// //       name: 'Frank Darabont',
// //       nationality: 'American'
// //     },
// //     actors: ['Tim Robbins', 'Morgan Freeman'],
// //     release_year: 1994,
// //     ratings: {
// //       imdb: 9.3,
// //       rotten_tomatoes: 90
// //     }
// //   }

// //   const {
// //     title,
// //      director:{name, nationality},
// //      actors: [firstActor,secondActor],
// //      release_year,
// //      rating:{ imdb,rotten_tomatoes},

// // }
// // console.log(title,director:{name,nationality},actors,release_year)

// // ===================== 4

// const address = {
//   street: "Main St",
//   city: "New York",
//   country: "USA",
// };

// const getCountry = ({ country }) => country;

// console.log(getCountry(address));

// // ===================== 5

// const data = {
//   users: [
//     { name: "John", age: 25 },
//     { name: "Jane", age: 17 },
//     { name: "Bob", age: 30 },
//   ],
// };

// const getUsername = ({ users }) => {
//   const userNames = [];

//   for (const { name } of users) {
//     userNames.push(name);
//   }

//   return userNames;
// };
// console.log(getUsername(data));

// // ===================== 6

// const courses = {
//   total: 3,
//   list: [
//     { title: "JavaScript Basics", hours: 10 },
//     { title: "React Advanced", hours: 20 },
//     { title: "Node.js Fundamentals", hours: 15 },
//   ],
// };

// const countHours = ({ list }) => {
//   const totalHours = 0;

//   for (const { hours } of list) {
//     totalHours += hours;
//   }

//   return totalHours;
// };
// console.log(countHours(courses));

// // ===================== 7

// const userProfile = {
//   name: "John Doe",
//   address: {
//     street: "123 Main St",
//     city: "Los Angeles",
//     country: "USA",
//   },
// };

// const userProfile2 = {
//   name: "John Doe",
//   address: {
//     street: "123 Main St",
//     country: "USA",
//   },
// };

// const getLocation = function ({
//   address: { city = "Невідоме місто", country = "Невідома країна" },
// } = {}) {
//   return { city, country };
// };
// console.log(getLocation(userProfile));
// console.log(getLocation(userProfile2));

// // ===================== 8

// const person = {
//   name: "Nelli",
//   surname: "Laroy",
//   age: 25,
// };
// const personInfo = ({ name, surname, age }) => {
//   return `Мене звати ${name} ${surname} і мені ${age} років`;
// };

// console.log(personInfo(person));

// // ===================== 9

// const student = {
//     name: 'Bruce',
//     surname: 'Lee',
//     grades: [4, 5, 3]
//   };

//   const calculateAverageGrade = ({grades}) {
//     const totalSum = 0
//     for (const grade of grades){
//         totalSum += grade
//     }
//     return totalSum / grades.length
//   }

//   console.log(calculateAverageGrade(student))
