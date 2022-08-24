function myResolve(value) {
  if (value instanceof Promise) {
    return value;
  }

  return new Promise((resolve) => {
    resolve(value);
  })
}

const a = myResolve(Promise.resolve(1));
console.log(a)