// TODO: zaimplementuj
function finanseStorage() {}

let f1 = finanseStorage();
console.log(f1.getBalance()); // -> 0
f1.saveIncome(1500);
f1.saveIncome(525);
console.log(f1.getBalance()); // -> 2025
f1.saveIncome(300);
console.log(f1.getBalance()); // -> 2325
f1.saveOutcome(599.99);
console.log(f1.getBalance()); // -> 1725.01
f1.saveOutcome(49.99);
f1.saveOutcome(824.91);
f1.saveOutcome(174.4);
console.log(f1.getBalance()); // -> 675.71

let f2 = finanseStorage();
console.log(f2.getBalance()); // -> 0
f2.saveIncome(1000);
f2.saveOutcome(29.99);
f2.saveOutcome(718.85);
f2.saveIncome(150);
console.log(f2.getBalance()); // -> 401.16
f2.saveOutcome(396.81);
f2.saveIncome(72);
console.log(f2.getBalance()); // -> 76.35
