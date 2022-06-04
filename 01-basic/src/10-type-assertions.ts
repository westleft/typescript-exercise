const app = document.querySelector("#app") as HTMLElement;

const app2 = <HTMLElement>document.querySelector("#app");

const x = ('string' as unknown) as number

// 補充
// https://willh.gitbook.io/typescript-tutorial/basics/built-in-objects

let body: HTMLElement = document.body;
let allDiv: NodeList = document.querySelectorAll('div');
document.addEventListener('click', function(e: MouseEvent) {
  // Do something
});

