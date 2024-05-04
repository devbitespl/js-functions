import { employees } from "./data.js";

const items = [{ val: 1234 }, { val: 456 }, { val: 4756 }];

// 0, [x,y,z] -> 1234
// 1234, [y,z] -> 1690
// 1690, [z] -> 6446
// 6446

// const sum = items.reduce((ACC, ITEM) => NACC, INIT)
// const sum = items.reduce((ACC, ITEM) => { return NACC }, INIT)
const sum = items.reduce(
  (valueSum, item) => valueSum + item.val,
  0
);
console.log({ sum });

const employeeSalarySum = employees.reduce(
  (sum, e) => sum + e.salary,
  0
);
console.log({ employeeSalarySum });

const isPolish = (e) => e.nationality == "PL";
const exists = employees.some(isPolish); // istnieje co najmniej jeden ...
const forAll = employees.every(isPolish);

// NIE, ?,?,?
// NIE, TAK, ?, ? -> TAK

const some = (items, predicate) =>
  items.reduce(
    (foundAlready, item) => foundAlready || predicate(item),
    false
  );

const map = (items, mapperFn) =>
  items.reduce((newArray, item) => {
    newArray.push(mapperFn(item));
    return newArray;
  }, []);

const salaries = map(employees, (e) => e.salary);
console.log({ salaries });

const filter = (items, predicate) =>
  items.reduce((newArray, item) => {
    if (predicate(item)) {
      newArray.push(item);
    }
    return newArray;
  }, []);

const Poles = filter(
  employees,
  (e) => e.nationality == "PL"
);
console.log(Poles.length);
