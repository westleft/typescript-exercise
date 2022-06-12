const str: string = "";

const myName: string = str || "Default";
console.log(myName); // 印出 Default

const myName2: string = str ?? "Default";
console.log(myName2); // 印出 ""

// ?? 代表只要不是 null 或是 undefined 都會印出