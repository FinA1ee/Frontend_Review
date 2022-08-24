function myReject(value) {
  return new Promise((resolve, reject) => {
    reject(value);
  })
}

const a = Promise.reject(Promise.resolve(1));