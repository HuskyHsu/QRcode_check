'use strict';

var items = JSON.parse(localStorage.getItem('items_2023')) || {};
var qu_st = window.location.href.split('?');
if (qu_st.length > 1) {
  var question = qu_st[1].replace('which=', '');
  items[question] = true;
}
localStorage.setItem('items_2023', JSON.stringify(items));
var isShowInfo = qu_st.length <= 1;
document.getElementById('info').open = isShowInfo;
document.getElementById('summary').style.display = isShowInfo
  ? 'none'
  : 'block';
var finishCount = Object.keys(items).length;
document.getElementById('final').style.display =
  finishCount >= 10 ? 'block' : 'none';
if (finishCount > 0 && finishCount < 10) {
  document.getElementById('count').innerText =
    '\u8981\u8ACB\u60A8\u518D\u53C3\u89C0'.concat(
      10 - finishCount,
      '\u7D44\uFF0C\u8B1D\u8B1D\u60A8'
    );
}
var groups = [
  {
    id: '第一組',
    floor: '一樓',
    class: 'AP2B',
    member: ['Amber', 'Ava', 'Toro', 'Emily', 'Abby'],
    topic: 'Eclipse',
    code: 'ZQWWNAwb',
  },
  {
    id: '第二組',
    floor: '一樓',
    class: 'AP2B',
    member: ['Sunny', 'Chelsea', 'Sofia', 'Willard'],
    topic: 'Solid Liquid Gases',
    code: 'FstM3d4b',
  },
  {
    id: '第三組',
    floor: '一樓',
    class: 'AP2B',
    member: ['Peyson', 'Andrea', 'Tony', 'Jena'],
    topic: 'Raw or Boiled Eggs',
    code: 'O35WLUKM',
  },
  {
    id: '第四組',
    floor: '二樓',
    room: '201',
    class: 'AP3',
    member: ['Tinsley', 'Shawn', 'Winston', 'Kenton'],
    topic: 'Leak Proof Bag',
    code: 'zufNtN43',
  },
  {
    id: '第五組',
    floor: '二樓',
    room: '201',
    class: 'AP3',
    member: ['Elisa', 'Alan', 'Amber', 'Jordan'],
    topic: 'How Much Salt Do We Need To Float',
    code: '596Y14mW',
  },
  {
    id: '第六組',
    floor: '二樓',
    room: '202',
    class: 'AP3',
    member: ['Jasper', 'Ricky', 'Isa', 'Cinderella'],
    topic: 'Secref Message',
    code: 'fMT3B12v',
  },
  {
    id: '第七組',
    floor: '二樓',
    room: '202',
    class: 'AP4A',
    member: ['Eugene', 'Ryan1', 'Ryan2', 'Enya', 'Jet'],
    topic: 'What Part of The Plant Do We Eat',
    code: '72v6orIm',
  },
  {
    id: '第八組',
    floor: '二樓',
    room: '203',
    class: 'AP2A',
    member: ['Alisa', 'Amber', 'Chen', 'Justin', 'Kimi', 'Leo', 'Yulia'],
    topic: 'Planets',
    code: 'IrpLBSPf',
  },
  {
    id: '第九組',
    floor: '二樓',
    room: '204',
    class: 'AP4A',
    member: ['Paul', 'Jerome', 'Daisy', 'Will'],
    topic: 'How Much Sugar Do The Drinks Have',
    code: 'jyG9tSYO',
  },
  {
    id: '第十組',
    floor: '二樓',
    room: '204',
    class: 'AP4B',
    member: ['Justin', 'Doreen', 'Anna'],
    topic: 'Volcano',
    code: 'Uq1HlS9E',
  },
  {
    id: '第十一組',
    floor: '三樓',
    class: 'AP4B',
    member: ['Soyang', 'Dora', 'Joie'],
    topic: 'Egg In The Jar',
    code: 'pzM1JXqP',
  },
  {
    id: '第十二組',
    floor: '三樓',
    class: 'AP5',
    member: ['Chace', 'Elsa', 'Eric', 'Sophie', 'Oval'],
    topic: 'Milk Shake',
    code: 'jh57K9Pd',
  },
  {
    id: '第十三組',
    floor: '三樓',
    class: 'AP5',
    member: ['Sophia', 'Tristan', 'Kiki', 'Polly'],
    topic: 'Static Electricity',
    code: 'T3nY6RkE',
  },
  {
    id: '第十四組',
    floor: '三樓',
    class: 'AP4B',
    member: ['Adalyn', 'Sophie', 'Shawn'],
    topic: 'Surface Tension',
    code: 'qA2d8XsF',
  },
  {
    id: '第十五組',
    floor: '三樓',
    class: 'AP5',
    member: ['Eason', 'Marcus', 'Jason', 'Abigail'],
    topic: 'Moon Phases',
    code: 'H9bC4mV7',
  },
];
function createItem(group) {
  var div = document.createElement('div');
  div.style.display = 'flex';
  div.style.flexDirection = 'column';
  div.style.alignItems = 'flex-start';
  div.style.backgroundColor = '#e7e7e7';
  div.style.borderRadius = '10px';
  div.style.padding = '10px';
  div.style.position = 'relative';
  div.style.boxShadow = '2px 4px 4px rgba(0, 0, 0, 0.2)';
  var title = document.createElement('p');
  title.innerText = ''.concat(group.id, ' - ').concat(group.topic);
  title.style.margin = '0';
  title.style.fontWeight = 'bold';
  var classP = document.createElement('p');
  classP.innerText = '\u73ED\u7D1A\uFF1A'.concat(group['class']);
  classP.style.margin = '0';
  var members = document.createElement('p');
  members.innerText = '\u5B78\u751F\uFF1A'.concat(group.member.join(', '));
  members.style.margin = '0';
  // members.style.width = '75%';

  var floor = document.createElement('p');
  floor.innerText = '\u5730\u9EDE\uFF1A'
    .concat(group.floor)
    .concat(group.room ? ' ('.concat(group.room, ')') : '');
  floor.style.margin = '0';
  var img = document.createElement('img');
  img.src = './cover_Images/seal.png';
  img.style.position = 'absolute';
  img.style.width = '3rem';
  img.style.right = ''.concat(Math.random() * 1 + 0, 'rem');
  img.style.top = '-0.5rem';
  var minAngle = -45;
  var maxAngle = 45;
  var randomAngle =
    Math.floor(Math.random() * (maxAngle - minAngle + 1)) + minAngle;
  img.style.transform = 'rotate(' + randomAngle + 'deg)';
  img.style.display = items[group.code] || false ? 'block' : 'none';
  img.style.opacity = 0.5;
  div.appendChild(title);
  div.appendChild(classP);
  div.appendChild(members);
  div.appendChild(floor);
  div.appendChild(img);
  return div;
}
groups.forEach(function (group) {
  var item = createItem(group);
  document.getElementById('groups').appendChild(item);
});
