const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("wow!!");
  }, 2000);
});

promise.then((res) => {
  console.log(res.split("!"));
});

// 基本操作
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

const result = merge({ name: "Peter" }, { age: 20 });

// 因為使用泛型，可以推測出 obj 裡面有 .age
console.log(result.name);

const result2 = merge({ name: "Peter" }, 20);
// 但使用上面的會有問題，20 並不是物件
// 好的方法是先限制型別

// 限制泛型的型別
function merge2<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}