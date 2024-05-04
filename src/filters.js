import { employees } from "./data.js";

console.log(employees.length);

const isPolish = (e) => e.nationality == "PL";

const polishEmployees = employees.filter(
  // (e) => e.nationality == "PL"
  isPolish
);

console.log(polishEmployees.length);

console.log(employees[0] == polishEmployees[0]);

console.log(
  employees.filter((e) => e.skills.length >= 3).length
);

// falsy values: false, 0, -0, NaN, null, undefined, ''
// truthy values: wszystko co NIE jest falsy
