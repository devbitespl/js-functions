import { employees } from "./data.js";

const __groupBy = (items, key) => {
  return items.reduce((group, item) => {
    // key exists?
    if (!group[key]) {
      group[key] = [];
    }

    const clone = { ...group }; // 1311
    group[key].push(item);
  }, {}); // 1
}; // 1312

const groupBy = (items, key) => {
  return items.reduce((group, item) => {
    if (!group[key]) {
      group[key] = [];
    }
    group[key].push(item); // mutable
  }, {}); // 1
}; // 1
groupBy(employees, "nationality");

// { PL: [...], DE: [...] }
