const weeks = ['月', '火', '水', '木', '金', '土']
const date = new Date()
const year = date.getFullYear()
const month = date.getMonth() + 1
const startDate = new Date(year, month - 1, 1)
const endDate = new Date(year, month,  0)
const endDayCount = endDate.getDate()
const startDay = startDate.getDay()
const number1 = 0;

let dayCount = 1
let selHtml = ''
let countzikan = 0;

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;

window.addEventListener("load", () => {
  const storedCount1 = localStorage.getItem('count1');
  const storedCount2 = localStorage.getItem('count2');
  const storedCount3 = localStorage.getItem('count3');
  const storedCount4 = localStorage.getItem('count4');
  count1 = storedCount1 ? JSON.parse(storedCount1) : 0;
  count2 = storedCount2 ? JSON.parse(storedCount2) : 0;
  count3 = storedCount3 ? JSON.parse(storedCount3) : 0;
  count4 = storedCount4 ? JSON.parse(storedCount4) : 0;
  number1 = ['count1', 'count2', 'count3', 'count4']
});

localStorage.setItem('count1', JSON.stringify(count1));
localStorage.setItem('count2', JSON.stringify(count2));
localStorage.setItem('count3', JSON.stringify(count3));
localStorage.setItem('count4', JSON.stringify(count4));

selHtml += '<table>'

selHtml += '<td></td>'
for (let i = 0; i < weeks.length; i++) {
    selHtml += '<td>' + weeks[i] + '</td>'
}

for (let w = 0; w < 4; w++) {
    selHtml += '<tr>'

    for (let d = 0; d < weeks.length + 1; d++) {
      if(d == 0) {
        countzikan++;
        selHtml += '<td>' + countzikan + '</td>'
      }
      else if(d == 1) {
        selHtml += '<td>' + number1[w] + '</td>'
      }
      else {
        selHtml += '<td></td>'
      }
    }
    selHtml += '</tr>'
}
selHtml += '</table>'

document.querySelector('#sel').innerHTML = selHtml
