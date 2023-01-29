const razuJahan = {
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
  const mehediJahan = {
    name: "Mehedi Chakraborty",
    address: "Ghatail",
    age: 18,
    balance: 15000,
  }
  const result = razuJahan.book.call(mehediJahan, 600);

console.log(result);