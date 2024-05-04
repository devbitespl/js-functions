import { employees } from "./data.js";

console.log(employees.length);

const salaries = employees.map((e) => e.salary);
const nationalities = employees.map((e) => e.nationality);

console.log(salaries.length);

// const skills = employees.map(e => e.skills)
// const skills = employees.map(e => e.skills).flat()
const skills = employees.flatMap((e) => e.skills);

// flat: [[1,2], [3,4]] -> [1,2,3,4]
console.log(skills.length);
