const and__every =
  (...predicateFns) =>
  (item) =>
    predicateFns.every((pfn) => pfn(item));

const or__some =
  (...predicateFns) =>
  (item) =>
    predicateFns.some((pfn) => pfn(item));

// TODO: zaimplementuj
const and__some = () => {};
const and__reduce = () => {};
const and__find = () => {};
const and__filter = () => {};
const and__forLoop = () => {};

// TODO: zaimplementuj
const or__every = () => {};
const or__reduce = () => {};
const or__find = () => {};
const or__filter = () => {};
const or__forLoop = () => {};
