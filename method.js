const person = {
  name: "Razu Chakraborty",
  address: "Jessore",
  age: 22,
  balance: 10000,
  gender: "male",
  hobbies: ["coding", "Pinch Mara", "Travelling"],
  behaviours: function () {
    return `I'm ${this.name} and I'm ${this.age}.`;
  },
  overLap: function (hobbiess) {
    return `${this.behaviours()} My hobbies is ${hobbiess}`;
  },
  book: function (amount) {
    this.balance = this.balance - amount;
    return this.balance;    
  }
};
// console.log(person.name);
// console.log(person.behaviours());
const behaviours = person.behaviours();
const overLap = person.overLap("Pinch Mara");
console.log(overLap);
// console.log(person.book(900));

