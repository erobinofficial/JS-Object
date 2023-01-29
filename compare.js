const first = { b: 1, a: 2, c: 3 };
const second = { a: 4, b: 5, c: 6 };

const compareObject = (first, second) => {
  const firstKeys = Object.keys(first);
  const secondKeys = Object.keys(second);
    console.log(firstKeys);
    console.log(secondKeys);
  if (firstKeys.length === secondKeys.length) {
    for (const key of firstKeys) {
      if (first[key] !== second[key]) {
        return false;
      }
    }
    return true;
  }
  else{
    return false;
  }
}
console.log(compareObject(first, second));