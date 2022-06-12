function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
  };
}

@Logger("Logggg........")
class Animal {
  name: string = "Pig";

  constructor() {}
}
