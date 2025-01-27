let Students = [
    {name: "Piyush",num:3, age:20},
    {name:"Tom", num:5, age:26},
    {name:"Harry",num:34, age:45}
];
const names = Students.map((stu) => stu.name.toUpperCase());
console.log(names);

