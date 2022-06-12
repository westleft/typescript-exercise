const userInputElement = document.getElementById("input");

// 噴錯，TS 不曉得這是哪種類型
// userInputElement.value = "gg"

// 改成
const userInputElement2 = <HTMLInputElement>document.getElementById("input");
userInputElement2.value = "gg";

// 或是
const userInputElement3 = document.getElementById("input") as HTMLInputElement;
userInputElement3.value = "gg";

// 又或是
const userInputElement4 = document.getElementById("input");
(userInputElement4 as HTMLInputElement).value = "gg";