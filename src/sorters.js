import { employees } from "./data.js";

console.log(employees.length);

const employeesAscSalary = employees.sort(
  (e1, e2) => e1.salary - e2.salary
);

const arr = [1, 4, 7, 8, 2, 7, 3, 9, 34];
arr.sort((v1, v2) => v2 - v1); // MUTABLE

const another = [...arr].sort((v1, v2) => v2 - v1); // IMMUTABLE
const another2 = arr.toSorted((v1, v2) => v2 - v1); // IMMUTABLE

console.log(
  [1, 4, 7, 8, 2, 7, 3, 9, 34].sort((v1, v2) => v2 - v1)
);
