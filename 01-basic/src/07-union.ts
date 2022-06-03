// msg 有可能有兩種型別，函式內需自行判斷
function saySomeThing(msg: string | number) {
  console.log(msg);
}

// 也可以定義 return 的型別
function getFirstWord(msg: string | number[]): string | number[] {
  return msg.slice(0, 1);
}
