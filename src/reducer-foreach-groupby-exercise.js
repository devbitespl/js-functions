const map = (items, mapperFn) =>
  items.reduce((newArray, item) => {
    newArray.push(mapperFn(item));
    return newArray;
  }, []);

const filter = (items, predicate) =>
  items.reduce((newArray, item) => {
    if (predicate(item)) {
      newArray.push(item);
    }
    return newArray;
  }, []);

// TODO: zaimplementuj
const forEach = () => {};

// TODO: zaimplementuj
const groupBy = () => {};
