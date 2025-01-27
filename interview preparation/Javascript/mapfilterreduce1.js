
//return the name of students marks who scored more than 36
let Students1 = [
    {name: "Piyush",num:3, age:20,marks:40},
    {name:"Tom", num:5, age:26,marks:36},
    {name:"Harry",num:34, age:45,marks:45}
];

const names = Students1.filter((stu) => stu.marks>36).map((stu)=>stu.name);
console.log(names)