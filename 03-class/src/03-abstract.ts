// abstract 用於定義抽象類別和其中的抽象方法。

abstract class Animal {
  constructor(private name: string) {}

  // 繼承的 class 必須加上 sayHi()，不然會噴錯
  public abstract sayHi(): void;
}

// 噴錯，abstract class 不可實例化
// const cat = new Animal("來福")

class Cat extends Animal {
  public sayHi(): void {
    console.log("hello");
  }
}
const cat = new Cat("來福");
