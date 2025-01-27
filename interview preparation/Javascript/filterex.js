let Students = [
    {name: "Piyush",num:3, age:20},
    {name:"Tom", num:5, age:26},
    {name:"Harry",num:34, age:45}
];

const details = Students.filter((stu)=>stu.age > 36 && stu.num>5);
console.log(details);