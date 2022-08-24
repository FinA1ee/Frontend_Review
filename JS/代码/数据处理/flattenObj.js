const obj = {
  a: 1,
  b: [1, 2, { c: true }],
  c: { e: 2, f: 3 },
  g: null,
};

let myFlat = function(obj) {

  let res = {};

  function process(key, value) {
   
    if (Array.isArray(value)) {
      value.forEach((item, idx) => {
        process(key + "[" + idx + "]", item);
      })
    } else if (Object(value) === value) {
      for (let subKey in value) {
 
        let subValue = value[subKey];
        process(key + '.' + subKey, subValue);
      }
    
    } else {
      if (key) res[key] = value
    }
  }

  for (let key in obj) {
    let value = obj[key];
    if (obj.hasOwnProperty(key)) process(key, value);
  }

  return res;
}

console.log(myFlat(obj));