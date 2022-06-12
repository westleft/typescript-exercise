type n = string | number;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: n, b: n) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

// 沒寫 overload 會噴錯，因為不知道回傳的是字串還是數字
const result = add("Max", " ,hello").split(" ");
const result2 = add("6", 9).split(" ");
