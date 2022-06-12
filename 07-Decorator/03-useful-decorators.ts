function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
  };
}

function withTemplete(templete: string, hookId: string) {
  return function (_: Function) {
    const el = document.getElementById(hookId);
    if (el) {
      el.innerHTML = templete;
    }
  };
}

@withTemplete("<h1>wow!!</h1>", "app")
class Animal2 {
  name: string = "Pig";

  constructor() {}
}
