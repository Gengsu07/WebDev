//forEach
let array = [1, 5, 6, 3, 7];

let newArray = [];
const double = array.forEach((num) => {
  newArray.push(num * 5);
});
console.log("foreach", newArray);

//map
const ply5 = array.map((num) => {
  return num * 5;
});
console.log("map", ply5);

//filter
const filtered = array.filter((num) => {
  return num % 2 === 0;
});
console.log("filtered", filtered);

//reduce
const reduce = array.reduce((accum, num) => {
  return accum + num;
}, 0);
//0 dibelakang merupakan initial value sebg acuum
console.log("reduce", reduce);
