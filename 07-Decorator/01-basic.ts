// tsconfig 中的 experimentalDecorators 必須開啟才能使用

// Decorator 通常用大寫
function Logger(constructor: Function) {
  console.log("logggg");
  console.log(constructor);
}

// 裝飾器會直接使用，不用 new class 
@Logger
class Person {
  name: string = "Max";

  constructor() {}
}