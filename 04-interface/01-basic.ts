interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

const tim: Person = {
  name: "tim",
  age: 6,
  greet() {
    console.log("hi");
  },
};
