interface Person {
  name: string;
  age: number;
  birthday: Date;
}

function createPerson(name: string, age: number, birthday: Date): Person {
  let person: Partial<Person> = {};
  person.name = name;
  person.age = age;
  person.birthday = birthday;
  return person as Person;
}

const names: Readonly<string[]> = ["Peter", "Mary"];
// name.pop() // 噴錯，因為 Readonly
