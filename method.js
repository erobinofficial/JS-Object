const person = {
  name: "Razu Chakraborty",
  address: "Jessore",
  age: 22,
  gender: "male",
  hobbies: ["coding", "Pinch Mara", "Travelling"],
  behaviours: function () {
    return `I'm ${this.name} and I'm ${this.age}`;
  },
  overLap: function (hobbiess) {
    this.behaviours();
    return `${this.name} and My hobbies is ${hobbiess}`;
  },
};
// console.log(person.name);
// person.behaviours();
const behaviours = person.behaviours();
const overLap = person.overLap("Pinch Mara");
console.log(overLap);
