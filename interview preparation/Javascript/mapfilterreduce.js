Map

const nums = [1,2,3,4,5];
const multiplyByThree = nums.map((num, i, arr) => {
 return num * 3 + i;  
});
console.log(multiplyByThree);


const nums = [1,2,3,4,5];
const
/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Get the sum of all even numbers doubled
const result = numbers
  .filter(num => num % 2 === 0)  // Filter even numbers
  .map(num => num * 2)            // Double the even numbers
  .reduce((acc, num) => acc + num, 0);  // Sum the doubled numbers

console.log(result);


//reduce
const nums = [1,2,3,4,5];

const sum = nums.reduce((acc,curr,i) => {

},0)