const john = {
  firstname: "John",
  lastname: "Lennon",
};

const paul = {
  firstname: "Paul",
  lastname: "McCartney",
};

const musician = {
  profession: "musician",
  salary: 5000,
};

// TODO: ZAIMPLEMENTUJ
// funkcję która tworzy nowy obiekt na podstawie 2 istniejących
const merge2objects = () => {};
// merge2objects(john, musician) -> {
//   firstname: "John",
//   lastname: "Lennon",
//   profession: "musician",
//   salary: 5000
// }

// TODO: ZAIMPLEMENTUJ
// funkcję która tworzy nowy obiekt na podstawie WIELU (2+) istniejących
const mergeManyObjects = () => {};
// mergeManyObjects({ id: 8492745921 }, john, musician) -> {
//     id: 8492745921,
//     firstname: "John",
//     lastname: "Lennon",
//     profession: "musician",
//     salary: 5000
// }

// TODO: ZAIMPLEMENTUJ
// funkcję która tworzy nowy obiekt poprzez usunięcie pola "id"
const stripId = () => {};
// stripId({
//   id: 8492745921,
//   firstname: "John",
//   lastname: "Lennon"
// }) -> {
//   firstname: "John",
//   lastname: "Lennon"
// }

// TODO: ZAIMPLEMENTUJ
// funkcję która tworzy nowy obiekt poprzez dodanie pola z domyślną wartością
// (tj. jeśli oryginalny obiekt miał już pole o tej nazwie, nie zmieniaj nic,
// a jeśli nie miał pola o tej nazwie, to je dodaj)
const withDefault = () => {};
// withDefault({
//     "title": "kup mleko",
// }) -> {
//     "title": "kup mleko",
//     "marked": false
// }
// withDefault({
//     "title": "kup mleko",
//     "marked": false
// }) -> {
//     "title": "kup mleko",
//     "marked": false
// }
// withDefault({
//     "title": "kup mleko",
//     "marked": true
// }) -> {
//     "title": "kup mleko",
//     "marked": true
// }
