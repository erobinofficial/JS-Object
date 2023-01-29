/* const evenOdd = (num1, num2) => {
  const result1 = num1 + 7;
  const result2 = num2 + 5;
  const finalResult = result1 + result2;
  if (finalResult % 2 === 0) {
    return true;
  }
  return false;
};
// console.log(evenOdd(2, 2));

// map
let numbers = [14, 28, 35, 42, 56];
let dividedNumbers = numbers.map((number) => number / 7);
// console.log(dividedNumbers);

// filter
let cost = [100, 400, 50, 40, 700];
let smallCost = cost.filter((costItem) => costItem < 200);
// console.log(smallCost);

// reduce
let sample = [1, 2, 3];

let sum = sample.reduce((sum, ele) => sum + ele);
// console.log(sum) */

const loadPhotos = async () => {
  const url = "https://jsonplaceholder.typicode.com/photos";
  const res = await fetch(url);
  const data = await res.json();
  displayPhotos(data);
};
loadPhotos();
const displayPhotos = photos =>{
    // console.log(photos);
    const div = document.getElementById('display-photos');
    photos.map(photo => {
        const imageDiv = document.createElement('div');
        imageDiv.innerHTML = `<img src=${photo.thumbnailUrl} alt=${photo.thumbnailUrl}/>`;
        div.appendChild(imageDiv);
    })
}