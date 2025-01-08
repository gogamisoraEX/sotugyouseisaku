const weeks = ['月', '火', '水', '木', '金', '土']
const date = new Date()
const year = date.getFullYear()
const month = date.getMonth() + 1
const startDate = new Date(year, month - 1, 1)
const endDate = new Date(year, month,  0)
const endDayCount = endDate.getDate()
const startDay = startDate.getDay()
let dayCount = 1
let selHtml = ''
let countzikan = 0;

let count1 = JSON.parse(localStorage.getItem('count1')) || 0;
let count2 = JSON.parse(localStorage.getItem('count2')) || 0;
let count3 = JSON.parse(localStorage.getItem('count3')) || 0;
let count4 = JSON.parse(localStorage.getItem('count4')) || 0;

const number1 = [count1, count2, count3, count4];

window.addEventListener("load", () => {
  localStorage.setItem('count1', JSON.stringify(count1));
  localStorage.setItem('count2', JSON.stringify(count2));
  localStorage.setItem('count3', JSON.stringify(count3));
  localStorage.setItem('count4', JSON.stringify(count4));

selHtml = '<table>'
selHtml += '<tr>'

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
        if(number1[w] >= 4) {
          selHtml += '<td style = "color: red;">' + number1[w] + '</td>'
        }
        else {
          selHtml += '<td>' + number1[w] + '</td>'
        }
      }
      else {
        selHtml += '<td></td>'
      }
    }
    selHtml += '</tr>'
}
selHtml += '</table>'

document.querySelector('#sel').innerHTML = selHtml
});
