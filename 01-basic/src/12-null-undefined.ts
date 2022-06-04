// ? 表示可以不傳
// ! 表示這個值不是 null 或是 undefined

function sayGG(str?: number | null) {
  console.log(str!.toFixed());
}
