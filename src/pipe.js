const roundTo = (prec) => (value) =>
  Math.round(value * 10 ** prec) / 10 ** prec;
const roundTo2 = roundTo(2);
const percentLabel = (value) => `${roundTo2(value * 100)}%`;

console.log(percentLabel(0.23));

const highestTaxValues = {
  taxPL: 0.23, // -> "23%"
  taxDE: 0.19, // -> "19%"
  taxFR: 0.2,
  taxUK: 0.2,
};

console.log(Object.keys(highestTaxValues));
console.log(Object.entries(highestTaxValues));

// const highestTaxLabels = Object.fromEntries(
//   Object.entries(highestTaxValues).map(([key, value]) => [
//     key,
//     percentLabel(value),
//   ])
// );

// const step1 = Object.entries(highestTaxValues);
// const step2 = step1.map(([key, value]) => [
//   key,
//   percentLabel(value),
// ]);
// const highestTaxLabels = Object.fromEntries(step2);

// const pipe = (...fns) =>
//   (value) => fns[2](fns[1](fns[0](value)));
const pipe =
  (...fns) =>
  (value) =>
    fns.reduce((result, fn) => fn(result), value);

// pipe: LEFT TO RIGHT
// compose: RIGHT TO LEFT

const getHighestTaxLabels = pipe(
  Object.entries,
  (pair) =>
    pair.map(([key, value]) => [key, percentLabel(value)]),
  Object.fromEntries
);

const highestTaxLabels = getHighestTaxLabels(
  highestTaxValues
);

console.log(highestTaxLabels);
