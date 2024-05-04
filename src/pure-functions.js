// pure functions - czyste obliczenia
let obj = {
  count: 0,
};
function add(a, b) {
  // obj.count++
  // console.log('heja')
  // fetch('http://url.com')
  return a + b;
}
console.log(add(1, 2));
console.log(add(1, 2));
console.log(add(1, 2));
console.log(add(1, 2));
console.log(add(1, 2));
console.log(add(1, 2));

// side effects
// - czytanie ze scope'a zewn.
// - pisanie do scope'a zewn.
// - wyświetlanie/wysyłanie/zapisywanie
// - jakiekolwiek NIE deteministyczne zachowanie
