type n = string | number;

function add(num1: n, num2: n) {
  if (typeof num1 === "number" || typeof num2 === "number") {
    return num1.toString() + num2.toString();
  }
  return num1 + num2;
}

type type1 = {
  name: string;
  isHuman: boolean;
};

type type2 = {
  name: string;
  isAnimal: boolean;
};

type UnknowType = type1 | type2;

function checkType(type: UnknowType) {
  // 噴錯，只有 type1 有這個屬性，
  //   if (type.isHuman) {
  //     console.log("has isHuman");
  //   }
  //   改用以下:
  if ("isHuman" in type) {
    console.log("has isHuman");
  }
}
