// 參數 key 必須要有 obj 的 key 才成立
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "value: " + obj[key];
}

extractAndConvert({ name: 'Max' }, "name")