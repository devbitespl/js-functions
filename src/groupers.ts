import { employees } from "./data.js";

console.log(employees.length);

employees.groupBy;

type Employees = { nationality: string }[];
const groupped = Object.groupBy(
  employees as Employees,
  (e) => e.nationality
);
