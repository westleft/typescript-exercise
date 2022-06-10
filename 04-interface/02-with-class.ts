// class 內的 name 也是 readonly
interface Named {
  readonly name: string;
}

// 同樣可以繼承 interface
interface Greetable extends Named{
  age: number; 
  sex?: string; // ? 表示可選參數
  greet(phrase: string): void;
}

// implements 可承接多個，使用「,」分隔即可
// 例如 class Person implements Greetable, Greetable2, Greetable3 {}
class Person implements Greetable {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(phrase: string = "hello") {
    console.log(`${phrase}, My name is ${this.name}`);
  }
}

const man = new Person("Peter", 20);
man.greet();
