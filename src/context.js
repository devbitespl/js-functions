function f1() {
  console.log(this);
}
function enclosing() {
  const f2 = () => {
    console.log(this); // LEXICAL scope
  };
  f2();
}

const person = {
  name: "John",
  speak() {
    return `Hi, I'm ${this.name}`;
  },
  // speak: () => {
  //   return `Hi, I'm ${this.name}`;
  // },
};

const makeSound = person.speak;

console.log(makeSound());
console.log(person.speak());

const dog = {
  name: "Fluffy",
};
dog.bark = makeSound;
dog.bark = person.speak;

console.log(dog.bark());

const nested = {
  dog,
};
console.log(nested.dog.bark());

makeSound.apply;
makeSound.bind;
makeSound.call;
