var items = JSON.parse(localStorage.getItem('items')) || [];

ans = [
    'ZQWWNAwb', 'FstM3d4b', 'O35WLUKM', 'zufNtN43',
    '596Y14mW', 'fMT3B12v', '72v6orIm', 'IrpLBSPf',
    'jyG9tSYO', 'Uq1HlS9E', 'pzM1JXqP'
]

const itemsList = document.querySelector('.plates');

var url_string = window.location.href;

var qu_st = url_string.split("?");
if (qu_st.length > 0) {
    var question = qu_st[1].replace("which=", "");

    // alert(question);
    
    items.push(ans.indexOf(question));
    items.sort(function (a, b) {
        return a - b;
    });
    items = items.filter(function (elem, pos, arr) {
        return arr.indexOf(elem) == pos && elem > -1;
    });
    
    items.forEach(function(item){
        document.getElementById("approved-" + item).style.opacity = 0.8;
    })
}

if (items.length == 11){
    document.getElementById("final").style.display = "block";
}

// populateList(items, itemsList);
localStorage.setItem('items', JSON.stringify(items));

// function populateList(plates, platesList) {
//     // 使用map搭配join來組成字串，並顯示在html的清單ul中
//     platesList.innerHTML = plates.map(function(plate, i)  {
//         return "<li><label>" + plate + "</label></li>"
//     }).join('');
// };