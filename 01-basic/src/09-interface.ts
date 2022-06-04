interface People {
  name: string;
  sex: string;
}

const peter: People = {
  name: "bear",
  sex: "male",
};

// 繼承
interface Janpnese extends People {
  language: string;
}

const morooka: Janpnese = {
  name: "morooka",
  sex: "female",
  language: "japanese",
};

