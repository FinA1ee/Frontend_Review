const delayPromiseFactory = (delay, value, resolved = true) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolved ? resolve(value) : reject(value);
    }, delay)
  })
} 

const promise1 = delayPromiseFactory(1000, 1);
const promise2 = delayPromiseFactory(2000, 2);
const promise3 = delayPromiseFactory(300, 3, false);

function myRace(promiseArr) {
  return new Promise((resolve, reject) => {
    promiseArr.forEach((prom, idx) => {
      prom.then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      })
    })
  });
}


Promise.any([promise1, promise2, promise3])
  .then((res) => {
    console.log(res); // 3
  })
  .catch((err) => {
    console.error(err);
  })


// 遇到reject, 立刻输出
// 将所有结果按传入顺序组装