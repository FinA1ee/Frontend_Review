// Object type -- Interface
interface Person {
  firstName: string;
  lastName: string;
  [key: string]: any;
}

const jack: Person = {
  firstName: "Yuchen",
  lastName: "Zhu",
  shit: 123,
};

// Function
function pow(x: number, y: number): string {
  return Math.pow(x, y).toString();
}

console.log(pow(1, 2));

// Array
const arr: number[] = [];
arr.push(1);
arr.push(2);

// Tuple -- Fixed Length Array
type MyTuple = [number?, string?, boolean?];
const tuple1: MyTuple = [1, "ssd", true];
const tuple2: MyTuple = [];
const tuple3: MyTuple = [123];

// Generics
class Observable<T> {
  constructor(public value: T) {}
}

let x: Observable<number>;
