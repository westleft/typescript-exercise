interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  if (animal.type === "bird") {
    console.log(animal.flyingSpeed);
  } else if (animal.type === "horse") {
    console.log(animal.runningSpeed);
  }
}

moveAnimal({ type: "bird", flyingSpeed: 120 });
moveAnimal({ type: "horse", runningSpeed: 120 });
