const employee = {
  id: 12345,
  firstName: "Sarah",
  lastName: "Johnson",
  position: "Software Engineer",
  department: "Engineering",
  skills: ["JavaScript", "React", "Node.js", "TypeScript"],
  contact: {
    email: "sarah.j@company.com",
    phone: "555-123-4567",
    office: "Building B, Room 203",
  },
  startDate: "2021-03-15",
  salary: 85000,
  isFullTime: true,
};
let {
  id,
  department,
  skills,
  contact,
  contact: { email, phone },
} = employee;
console.log(id);
console.log(department);
console.log(skills);
console.log(skills[0]);
console.log(email);
console.log(contact.office);
console.log(phone);
