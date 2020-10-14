// 二分查找
function search(arr, target) {
  var lo = 0;
  var hi = arr.length - 1;

  while (lo < hi) {
    var mid = Math.floor((lo + hi) / 2);
    console.log("MID", mid);
    if (arr[mid] > target) {
      hi = mid - 1;
    } else if (arr[mid] < target) {
      lo = mid + 1;
    } else {
      return mid;
    }
  }

  return arr[lo] === target ? lo : -1;
}

console.log(search([1, 3, 5, 7, 9], 0));

function bar() {
  console.log(myName);
}
var foo = () => {
  var myName = "腾讯1";
  bar();
};
var myName = "腾讯2";
foo();
