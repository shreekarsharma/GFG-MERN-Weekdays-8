let employment = {
  title: "Senior Developer",
  department: "Engineering",
  yearsEmployed: 5,
  skills: ["JavaScript", "Python", "React", "Node.js", "SQL"],
  projects: { name: "Website Redesign", completed: true },
};
// Shallow Copy
let employment_copy = { ...employment };

employment_copy.title = "Junior Developer";

console.log(employment_copy.title);
console.log(employment.title);

employment_copy.projects.name = 'Ecommerce';
console.log(employment_copy.projects.name);
console.log(employment.projects.name); // issue

