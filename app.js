const items = JSON.parse(localStorage.getItem('items_2023')) || {};

const qu_st = window.location.href.split('?');
if (qu_st.length > 1) {
  const question = qu_st[1].replace('which=', '');

  items[question] = true;
}

localStorage.setItem('items_2023', JSON.stringify(items));

const isShowInfo = qu_st.length <= 1;

document.getElementById('info').open = isShowInfo;
document.getElementById('summary').style.display = isShowInfo
  ? 'none'
  : 'block';

const finishCount = Object.keys(items);

document.getElementById('final').style.display =
  finishCount >= 10 ? 'block' : 'none';

const groups = [
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
  const div = document.createElement('div');
  div.style.display = 'flex';
  div.style.flexDirection = 'column';
  div.style.alignItems = 'flex-start';
  div.style.backgroundColor = '#e7e7e7';
  div.style.borderRadius = '10px';
  div.style.padding = '10px';
  div.style.position = 'relative';

  const title = document.createElement('p');
  title.innerText = `${group.id} - ${group.topic}`;
  title.style.margin = '0';
  title.style.fontWeight = 'bold';

  const classP = document.createElement('p');
  classP.innerText = `班級：${group.class}`;
  classP.style.margin = '0';

  const members = document.createElement('p');
  members.innerText = `學生：${group.member.join(', ')}`;
  members.style.margin = '0';

  const floor = document.createElement('p');
  floor.innerText = `地點：${group.floor}${
    group.room ? ` (${group.room})` : ''
  }`;
  floor.style.margin = '0';

  const img = document.createElement('img');
  img.src = './cover_Images/seal.png';
  img.style.position = 'absolute';
  img.style.width = '5rem';
  img.style.right = `${Math.random() * 2 + 0.5}rem`;
  const minAngle = -45;
  const maxAngle = 45;

  const randomAngle =
    Math.floor(Math.random() * (maxAngle - minAngle + 1)) + minAngle;
  img.style.transform = 'rotate(' + randomAngle + 'deg)';
  img.style.display = items[group.code] || false ? 'block' : 'none';
  img.style.opacity = 0.7;

  div.appendChild(title);
  div.appendChild(classP);
  div.appendChild(members);
  div.appendChild(floor);
  div.appendChild(img);

  return div;
}

groups.forEach((group) => {
  const item = createItem(group);
  document.getElementById('groups').appendChild(item);
});
