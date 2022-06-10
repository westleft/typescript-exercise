// 定義 function
interface AddFn {
  (a: number, b: number): number;
}

const add: AddFn = (a: number, b: number) => {
  return a + b;
};

// 也可以使用 type
type AddFn2 = (a: number, b: number) => number;