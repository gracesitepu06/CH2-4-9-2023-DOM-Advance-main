// let student1 = {
//   name: "Ale",
//   age: 28,
//   programming: ["PHP", "C++", "Golang", "JS", "Java"],
// };

// let student2 = {
//   name: "Yoga",
//   age: 55,
//   programming: ["Love", "JS"],
// };

// let student3 = {
//   name: "Fadhlan",
//   age: 8,
//   programming: ["India", "JS"],
// };

// constructor function
function studentFSW(name, age, programming) {
  this.name = name;
  this.age = age;
  this.programming = programming;
}

//initialize obj
var student1 = new studentFSW("Hafizh", 20, ["Java"]);
var student2 = new studentFSW("Adrian", 20, ["JavaScript"]);
var student3 = new studentFSW("Diki", 18, ["Physical Touch"]);

console.log(student2);
