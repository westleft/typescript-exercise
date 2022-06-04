let q: "Hello" = "Hello";
q = '123' // 噴錯，只能是 'Hello'

// 正確
const gg = (s: "left" | "right") => {};
gg("right");

// 定義
const obj = {
  url: "example.com.tw",
  method: "GET" as "GET",
};

function request(url: string, method: "GET" | "POST" | "PUT") {}

request(obj.url, obj.method); // 不使用 as 'GET' 會噴錯
