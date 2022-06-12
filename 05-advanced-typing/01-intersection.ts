type Type1 = {
  name: string;
  age: number;
};

type Type2 = {
  name: string;
  startDate: Date;
};

// 組合上面兩種
type Type3 = Type1 & Type2;
const commonType: Type3 = {
  name: "Max",
  age: 12,
  startDate: new Date(),
};
