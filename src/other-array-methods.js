import { employees } from "./data.js";

console.log(employees.length);

employees.includes("A");
employees.find((e) => e.nationality == "PL");
employees.forEach((e) => console.log(e));

for (const e of employees) {
  console.log(e);
}
