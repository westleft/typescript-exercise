// ? 可省略參數
// 不傳遞則指定為 undefined

function printName(obj: { first: string; last?: string }) {
  console.log(`hello, ${(obj.first, obj.last)}`);

  // 出錯，因為有可能沒有傳參數
  // console.log(obj.last.toLocaleUpperCase());
  // 正確寫法
  console.log(obj.last?.toLocaleUpperCase());
}

printName({
  first: "Peter",
});
