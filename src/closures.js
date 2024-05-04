function outer() {
  let arr = []; // STATEFUL
  return function inner() {
    arr.push(Math.random());
    return arr;
  };
}

const innerFn = outer();
console.log(innerFn());
console.log(innerFn());

const incrementer = () => {
  let c = 0;
  return () => {
    return ++c;
  };
};

const inc = incrementer();
console.log(inc()); // 1
console.log(inc()); // 2
console.log(inc()); // 3
console.log(inc()); // 3

const counter = () => {
  let c = 0;
  return {
    inc: () => {
      return ++c;
    },
    dec: () => {
      return --c;
    },
  };
};

const c = counter();
console.log(c.inc()); // 1
console.log(c.inc()); // 2
console.log(c.dec()); // 1
console.log(c.inc()); // 2

const dziwnaLiczba = Math.E;
console.log(dziwnaLiczba);

// const roundTo2 = value =>  Math.round(value * 100) / 100
// const roundTo4 = value =>  Math.round(value * 10000) / 10000
const roundTo = (prec) => (value) => {
  const factor = 10 ** prec;
  return Math.round(value * factor) / factor;
};
const roundTo2 = roundTo(2);
const roundTo4 = roundTo(4);

console.log(Math.round(Math.E * 100) / 100);
console.log(roundTo2(Math.E));
// console.log(roundTo(2)(Math.E))
console.log(roundTo4(Math.E));
