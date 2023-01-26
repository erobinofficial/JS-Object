const keyboards = ['Logitech', 'Playstation', 'Xbox One', 'Nintendo Switch'];
for (const keyboard of keyboards){
    // console.log(keyboard);
}

const phone = {Name: 'Pixel', Brand: 'Google', Model: 'Pixel 3', Color: 'Not Pink', Variation: 'USA Verizon'};
const keys = Object.keys(phone);
// console.log(keys);
// for (const key of keys){
//     console.log(key, phone[key]);
// }


/*best way to loop through an object*/

for (const key in phone){
    console.log(key, phone[key]);
}
/* advanced way to loop through an object */
// const keyss = Object.entries(phone);
for(const [key, value] of Object.entries(phone)){
    console.log(key, value);
}