function doSomething(a, b, ...rest) {
  console.log({ a, b, rest });
}

doSomething();
doSomething("12345");
doSomething("12345", 1234);
doSomething("12345", 1234, true, null, "sdfgt");

console.log(doSomething.length);
