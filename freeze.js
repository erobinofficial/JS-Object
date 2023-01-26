const phone = {Name: 'Pixel', Brand: 'Google', Model: 'Pixel 3', Color: 'Not Pink', Variation: 'USA Verizon'};
const keys = Object.keys(phone);
// console.log(keys);
const values = Object.values(phone);
console.log(values);
const pairs = Object.entries(phone);
// console.log(pairs);

// console.log(phone);
// Object.freeze(phone);
// Object.seal(phone);
// delete phone.Color;
phone.Price = 999;
phone.Model = 'Pixel 4';
// console.log(phone);