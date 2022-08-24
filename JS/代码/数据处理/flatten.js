const a = [[1, 2], 3, [4, [5, [6]]]];

Array.prototype.myFlat = function() {
  let arr = this;
  return arr.reduce((acc, item) => {
    if (!Array.isArray(item)) {
      acc = acc.concat(item);
      return acc;
    } else {
      acc = acc.concat(item.myFlat());
      return acc;
    }
  }, [])
}
