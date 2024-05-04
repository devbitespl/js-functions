function doSomething(arg) {
  // var x0 = undefined // HOISTING
  var a = 1; // function scope
  let b = 2; // block scope
  const c = 3; // block scope

  //   c = 4

  console.log({ x0 });
  if (true) {
    // console.log({ x0, x1, x2 })
    var x0 = true;
    let x1 = true;
    const x2 = true;

    console.log({ x0, x1, x2 });
  }
  console.log({ x0 });
  //   console.log({ x0, x1, x2 })

  function inner(arg) {
    let innerVariable = 0;
    console.log({ innerVariable, a, b, c });
  }
  inner();

  innerVariable;
}

doSomething();
