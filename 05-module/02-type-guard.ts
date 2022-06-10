type n = string | number;

function add(num1: n, num2: n) {
  if (typeof num1 === "number" || typeof num2 === "number") {
    return num1.toString() + num2.toString();
  }
  return num1 + num2;
}
