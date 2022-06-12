// 不確定 prop 是什麼的時候 (prop 可以自己命名，也可以自己定義型別)
interface ErrorContainer {
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "error",
  userError: "9999",
};
