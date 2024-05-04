import { employees } from "./data.js";

console.log(employees.length);

const isPolish = (e) => e.nationality == "PL";

employees.some; // "istnieje"
employees.every; // "dla każdego"

const exists = employees.some(isPolish);
const forAll = employees.every(isPolish);

console.log({ exists, forAll });

const hasAtLeast1Skill = (e) => e.skills.length > 0;

const allEmployeesHaveAtLeast1Skill = employees.every(
  hasAtLeast1Skill
);
console.log({ allEmployeesHaveAtLeast1Skill });
