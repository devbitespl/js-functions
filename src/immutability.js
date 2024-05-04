const person = { name: "John", age: 40 };
// person.age++ // mutation

const newPerson = { ...person, age: person.age + 1 };
console.log({ newPerson });

const newPerson2 = { ...person, skills: ["guitar"] };
console.log({ newPerson2 });

const { age, ...deletedProperty } = person;

const arr = [1, 2, 3, 4, 5];
// const newArr = arr.push(6) // mutation
console.log({ arr });

const newArr = [0, ...arr, 6];
console.log({ newArr });

const [, ...withoutTheFirstOne] = arr;
console.log({ withoutTheFirstOne });
