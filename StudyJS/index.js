let youtuber = {
  list: {
    business: {
      youtuber: [
        { name: "しまぶー", age: 20, teachProgramming() {} },
        { name: "あっちゃん", age: 37, teachHistory() {} },
      ],
      teach() {},
    },
    entertainment: {
      youtuber: [{ name: "ヒカキン" }, { name: "はじめしゃちょー" }],
      makeSmile() {},
    },
  },
  plan() {},
  uploaVideo() {},
};

console.log(youtuber.list.business.youtuber[0]);
