var jack = {
    firstName: "Yuchen",
    lastName: "Zhu",
    shit: 123
};
// Function
function pow(x, y) {
    return Math.pow(x, y).toString();
}
console.log(pow(1, 2));
// Array
var arr = [];
arr.push(1);
arr.push(2);
var tuple1 = [1, "ssd", true];
var tuple2 = [];
var tuple3 = [123];
// Generics
var Observable = /** @class */ (function () {
    function Observable(value) {
        this.value = value;
    }
    return Observable;
}());
var x;
