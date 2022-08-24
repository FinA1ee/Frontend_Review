const delayPromiseFactory = (delay, value, resolved = true) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolved ? resolve(value) : reject(value);
    }, delay)
  })
} 

const promise1 = delayPromiseFactory(1000, 1);
const promise2 = delayPromiseFactory(200, 2, false);
const promise3 = delayPromiseFactory(300, 3);

function myAll(promiseArr) {
  let promiseCount = 0;
  let result = new Array(promiseArr.length);

  return new Promise((resolve, reject) => {
    promiseArr.forEach((prom, idx) => {
      prom.then((res) => {
        result[idx] = res;
        promiseCount++;
        if (promiseCount === promiseArr.length) {
          resolve(result);
        }
      })
      .catch((err) => {
        reject(err);
      })
    })
  });
}


Promise.all([promise1, promise2, promise3])
  .then((res) => {
    console.log(res); // [1, 2, 3]
  })
  .catch((err) => {
    console.error(err);
  })


// 遇到reject, 立刻输出
// 将所有结果按传入顺序组装