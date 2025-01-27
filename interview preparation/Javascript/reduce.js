let Students = [
    {name: "Piyush",num:3, age:20,marks:40},
    {name:"Tom", num:5, age:26,marks:36},
    {name:"Harry",num:34, age:45,marks:45}
];

let details = Students.reduce((acc,curr)=>acc + curr.marks, 0);
console.log(details);