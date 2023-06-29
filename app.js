const isShowInfo = true;

document.getElementById("info").open = isShowInfo;
document.getElementById("summary").style.display = isShowInfo
  ? "none"
  : "block";

const finishCount = 10;

document.getElementById("final").style.display =
  finishCount >= 10 ? "block" : "none";

const groups = [
  {
    id: "第一組",
    floor: "一樓",
    class: "AP2B",
    member: ["Amber", "Ava", "Toro", "Emily", "Abby"],
    topic: "Eclipse",
    code: "ZQWWNAwb"
  },
  {
    id: "第二組",
    floor: "一樓",
    class: "AP2B",
    member: ["Sunny", "Chelsea", "Sofia", "Willard"],
    topic: "Solid Liquid Gases",
    code: "FstM3d4b"
  },
  {
    id: "第三組",
    floor: "一樓",
    class: "AP2B",
    member: ["Peyson", "Andrea", "Tony", "Jena"],
    topic: "Raw or Boiled Eggs",
    code: "O35WLUKM"
  },
  {
    id: "第四組",
    floor: "二樓",
    room: "201",
    class: "AP3",
    member: ["Tinsley", "Shawn", "Winston", "Kenton"],
    topic: "Leak Proof Bag",
    code: "zufNtN43"
  },
  {
    id: "第五組",
    floor: "二樓",
    room: "201",
    class: "AP3",
    member: ["Elisa", "Alan", "Amber", "Jordan"],
    topic: "How Much Salt Do We Need To Float",
    code: "596Y14mW"
  },
  {
    id: "第六組",
    floor: "二樓",
    room: "202",
    class: "AP3",
    member: ["Jasper", "Ricky", "Isa", "Cinderella"],
    topic: "Secref Message",
    code: "fMT3B12v"
  },
  {
    id: "第七組",
    floor: "二樓",
    room: "202",
    class: "AP4A",
    member: ["Eugene", "Ryan1", "Ryan2", "Enya", "Jet"],
    topic: "What Part of The Plant Do We Eat",
    code: "72v6orIm"
  },
  {
    id: "第八組",
    floor: "二樓",
    room: "203",
    class: "AP2A",
    member: ["Alisa", "Amber", "Chen", "Justin", "Kimi", "Leo", "Yulia"],
    topic: "Planets",
    code: "IrpLBSPf"
  },
  {
    id: "第九組",
    floor: "二樓",
    room: "204",
    class: "AP4A",
    member: ["Paul", "Jerome", "Daisy", "Will"],
    topic: "How Much Sugar Do The Drinks Have",
    code: "jyG9tSYO"
  },
  {
    id: "第十組",
    floor: "二樓",
    room: "204",
    class: "AP4B",
    member: ["Justin", "Doreen", "Anna"],
    topic: "Volcano",
    code: "Uq1HlS9E"
  },
  {
    id: "第十一組",
    floor: "三樓",
    class: "AP4B",
    member: ["Soyang", "Dora", "Joie"],
    topic: "Egg In The Jar",
    code: "pzM1JXqP"
  },
  {
    id: "第十二組",
    floor: "三樓",
    class: "AP5",
    member: ["Chace", "Elsa", "Eric", "Sophie", "Oval"],
    topic: "Milk Shake",
    code: "jh57K9Pd"
  },
  {
    id: "第十三組",
    floor: "三樓",
    class: "AP5",
    member: ["Sophia", "Tristan", "Kiki", "Polly"],
    topic: "Static Electricity",
    code: "T3nY6RkE"
  },
  {
    id: "第十四組",
    floor: "三樓",
    class: "AP4B",
    member: ["Adalyn", "Sophie", "Shawn"],
    topic: "Surface Tension",
    code: "qA2d8XsF"
  },
  {
    id: "第十五組",
    floor: "三樓",
    class: "AP5",
    member: ["Eason", "Marcus", "Jason", "Abigail"],
    topic: "Moon Phases",
    code: "H9bC4mV7"
  }
];
