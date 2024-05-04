import { employees } from "./data.js";

console.log(employees.length);

// type Predicate<T> = (t: T) => boolean
const isPolish = (e) => e.nationality == "PL";
const isFrench = (e) => e.nationality == "FR";
const isAmerican = (e) => e.nationality == "US";

const isPermanent = (e) => e.contractType == "permanent";

const negate = (predicateFn) => (item) =>
  !predicateFn(item);

const and =
  (...predicateFns) =>
  (item) =>
    predicateFns.every((pfn) => pfn(item));

const or =
  (...predicateFns) =>
  (item) =>
    predicateFns.some((pfn) => pfn(item));

const isEuropean = negate(isAmerican);

console.log(employees.filter(isEuropean).length);

// FR, permanent

// (1)
// const frenchPermanent = employees
//   .filter(isFrench)
//   .filter(isPermanent);
// (2)
// const frenchPermanent = employees
//   .filter(e => isFrench(e) && isPermanent(e))
// (3)
const isFrenchPermanent = and(isFrench, isPermanent);
const frenchPermanent = employees.filter(isFrenchPermanent);

console.log(frenchPermanent.length);

const hasSkill = (skill) => (e) => e.skills.includes(skill);
const knowsHTML = hasSkill("HTML");
// const doesntKnowHTML = negate(hasSkill('HTML'))
// const knowsHTMLagain = negate(negate(hasSkill('HTML')))

// fullstack = frontend AND backend
// frontend = HTML AND JavaScript
// backend = .net OR Java
const isFrontend = and(
  hasSkill("HTML"),
  hasSkill("JavaScript")
);
const isBackend = or(hasSkill(".net"), hasSkill("Java"));
const isFullstack = and(isFrontend, isBackend);

console.log(employees.filter(isFullstack).length);
