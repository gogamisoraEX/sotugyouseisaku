/*const weeks = ['月', '火', '水', '木', '金', '土']
const weeksP2 = ['日', '月', '火', '水', '木', '金', '土']
const date = new Date()
const year = date.getFullYear()
const month = date.getMonth() + 1
const startDate = new Date(year, month - 1, 1)
const endDate = new Date(year, month,  0)
const endDayCount = endDate.getDate()
const lastMonthEndDate = new Date(year, month - 1, 0) 
const lastMonthendDayCount = lastMonthEndDate.getDate()
const startDay = startDate.getDay()
let dayCount = 1
let selHtml = ''
let calendarHtml = ''
let countzikan = 0;

let count1 = JSON.parse(localStorage.getItem('count1')) || 0;
let count2 = JSON.parse(localStorage.getItem('count2')) || 0;
let count3 = JSON.parse(localStorage.getItem('count3')) || 0;
let count4 = JSON.parse(localStorage.getItem('count4')) || 0;
let count5 = JSON.parse(localStorage.getItem('count5')) || 0;
let count6 = JSON.parse(localStorage.getItem('count6')) || 0;

const number1 = [count1, count2, count3, count4, count5, count6];

window.addEventListener("load", () => {
  localStorage.setItem('count1', JSON.stringify(count1));
  localStorage.setItem('count2', JSON.stringify(count2));
  localStorage.setItem('count3', JSON.stringify(count3));
  localStorage.setItem('count4', JSON.stringify(count4));
  localStorage.setItem('count5', JSON.stringify(count5));
  localStorage.setItem('count6', JSON.stringify(count6));

selHtml = '<table>'
selHtml += '<tr>'

selHtml += '<td></td>'
for (let i = 0; i < weeks.length; i++) {
    selHtml += '<td>' + weeks[i] + '</td>'
}

for (let w = 0; w < 6; w++) {
    selHtml += '<tr>'

    for (let d = 0; d < weeks.length + 1; d++) {
      if(d == 0) {
        countzikan++;
        selHtml += '<td>c' + countzikan + '</td>'
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
        selHtml += '<td style = "background-image: linear-gradient(to right top, transparent calc(50% - 0.5px), #cccccc 50%, #cccccc calc(50% + 0.5px), transparent calc(50% + 1px))"></td>'
      }
    }
    selHtml += '</tr>'
}
selHtml += '</table>'

document.querySelector('#sel').innerHTML = selHtml

calendarHtml += '<h1>' + year  + '/' + month + '</h1>'
calendarHtml += '<table>'

for (let i = 0; i < weeksP2.length; i++) {
  if(i == 0) {
    calendarHtml += '<td style = "color: red">' + weeksP2[i] + '</td>'
  }
  else if(i == 6) {
    calendarHtml += '<td style = "color: royalblue">' + weeksP2[i] + '</td>'
  }
  else {
    calendarHtml += '<td>' + weeksP2[i] + '</td>'
  }
}

for (let w = 0; w < 6; w++) {
  calendarHtml += '<tr>'

  for (let d = 0; d < 7; d++) {
      if (w == 0 && d < startDay) {
          let num = lastMonthendDayCount - startDay + d + 1
          calendarHtml += '<td style = "color: #cccccc">' + num + '</td>'
      } else if (dayCount > endDayCount) {
        let num = dayCount - endDayCount
        calendarHtml += '<td style = "color: #cccccc">' + num + '</td>'
          dayCount++;
      } else {
          calendarHtml += '<td>' + dayCount + '</td>'
          dayCount++
      }
  }
  calendarHtml += '</tr>'
}
calendarHtml += '</table>'

document.querySelector('#calendar').innerHTML = calendarHtml
});*/

const weeks = ['月', '火', '水', '木', '金', '土']
const weeksP2 = ['日', '月', '火', '水', '木', '金', '土']
const date = new Date()
const year = date.getFullYear()
const month = date.getMonth() + 1
const day = date.getDate()
const startDate = new Date(year, month - 1, 1)
const endDate = new Date(year, month,  0)
const endDayCount = endDate.getDate()
const lastMonthEndDate = new Date(year, month - 1, 0) 
const lastMonthendDayCount = lastMonthEndDate.getDate()
const startDay = startDate.getDay()
let dayCount = 1
let selHtml = ''
let calendarHtml = ''
let countzikan = 0;
let mozi1 = '';

// メモ用のローカルストレージデータ
let memoData = JSON.parse(localStorage.getItem('memoData')) || {};

let count1 = JSON.parse(localStorage.getItem('count1')) || 0;
let count2 = JSON.parse(localStorage.getItem('count2')) || 0;
let count3 = JSON.parse(localStorage.getItem('count3')) || 0;
let count4 = JSON.parse(localStorage.getItem('count4')) || 0;
let count5 = JSON.parse(localStorage.getItem('count5')) || 0;
let count6 = JSON.parse(localStorage.getItem('count6')) || 0;

const number1 = [count1, count2, count3, count4, count5, count6];

window.addEventListener("load", () => {
  localStorage.setItem('count1', JSON.stringify(count1));
  localStorage.setItem('count2', JSON.stringify(count2));
  localStorage.setItem('count3', JSON.stringify(count3));
  localStorage.setItem('count4', JSON.stringify(count4));
  localStorage.setItem('count5', JSON.stringify(count5));
  localStorage.setItem('count6', JSON.stringify(count6));
  let storedName1 = localStorage.getItem('name1') || '';
  let storedName2 = localStorage.getItem('name2') || '';
  let storedName3 = localStorage.getItem('name3') || '';
  let storedName4 = localStorage.getItem('name4') || '';
  let storedName5 = localStorage.getItem('name5') || '';
  let storedName6 = localStorage.getItem('name6') || '';

const mozinumber1 = [storedName1, storedName2, storedName3, storedName4, storedName5, storedName6];

  // カレンダーとセルのHTMLを作成
  calendarHtml += '<h3>' + year  + '/' + month + '</h3>'
  calendarHtml += '<table>'

  for (let i = 0; i < weeksP2.length; i++) {
    if(i == 0) {
      calendarHtml += '<td style = "color: red"><p>' + weeksP2[i] + '</td>'
    }
    else if(i == 6) {
      calendarHtml += '<td style = "color: royalblue"><p>' + weeksP2[i] + '</p></td>'
    }
    else {
      calendarHtml += '<td>' + weeksP2[i] + '</td>'
    }
  }

  for (let w = 0; w < 6; w++) {
    calendarHtml += '<tr>'

    for (let d = 0; d < 7; d++) {
      if (w == 0 && d < startDay) {
          let num = lastMonthendDayCount - startDay + d + 1
          calendarHtml += '<td style = "color: #cccccc">' + num + '</td>'
      } else if (dayCount > endDayCount) {
        let num = dayCount - endDayCount
        calendarHtml += '<td style = "color: #cccccc">' + num + '</td>'
        dayCount++;
      } else {
          calendarHtml += `<td data-date="${dayCount}" class="calendar-cell">${dayCount}</td>`;
          dayCount++
      }
    }
    calendarHtml += '</tr>'
  }
  calendarHtml += '</table>'

  document.querySelector('#calendar').innerHTML = calendarHtml


  selHtml = '<table>'
  selHtml += '<tr>'
  
  selHtml += '<td></td>'
  for (let i = 0; i < weeks.length; i++) {
      selHtml += '<td>' + weeks[i] + '</td>'
  }
  
  for (let w = 0; w < 6; w++) {
      selHtml += '<tr>'
  
      for (let d = 0; d < weeks.length + 1; d++) {
        if(d == 0) {
          countzikan++;
          selHtml += '<td>c' + countzikan + '</td>'
        }
        else if(d == 1) {
          if(number1[w] >= 4) {
            selHtml += '<td>' + `<small>${mozinumber1[w]}</small>` + '<p style = "color: red;">' + number1[w] + '</p>' + '</td>'
          }
          else {
            selHtml += '<td>' + `<small>${mozinumber1[w]}</small>` + '<p>' + number1[w] + '</p>' + '</td>'
          }
        }
        else {
          selHtml += '<td style = "background-image: linear-gradient(to right top, transparent calc(50% - 0.5px), #cccccc 50%, #cccccc calc(50% + 0.5px), transparent calc(50% + 1px))"></td>'
        }
      }
      selHtml += '</tr>'
  }
  selHtml += '</table>'
  
  document.querySelector('#sel').innerHTML = selHtml
  
  calendarHtml += '<h1>' + year  + '/' + month + '</h1>'
  calendarHtml += '<table>'
  
  for (let i = 0; i < weeksP2.length; i++) {
    if(i == 0) {
      calendarHtml += '<td style = "color: red">' + weeksP2[i] + '</td>'
    }
    else if(i == 6) {
      calendarHtml += '<td style = "color: royalblue">' + weeksP2[i] + '</td>'
    }
    else {
      calendarHtml += '<td>' + weeksP2[i] + '</td>'
    }
  }
  
  for (let w = 0; w < 6; w++) {
    calendarHtml += '<tr>'
  
    for (let d = 0; d < 7; d++) {
        if (w == 0 && d < startDay) {
            let num = lastMonthendDayCount - startDay + d + 1
            calendarHtml += '<td style = "color: #cccccc">' + num + '</td>'
        } else if (dayCount > endDayCount) {
          let num = dayCount - endDayCount
          calendarHtml += '<td style = "color: #cccccc">' + num + '</td>'
            dayCount++;
        } else {
            calendarHtml += '<td>' + dayCount + '</td>'
            dayCount++
        }
    }
    calendarHtml += '</tr>'
  }
  calendarHtml += '</table>'

  const cells = document.querySelectorAll('.calendar-cell');
  cells.forEach(cell => {
    const date = cell.dataset.date;
    const len = 2;
    if (memoData[date] && cells.length > len) {
      cell.innerHTML = `${date}<br><small>${memoData[date]}</small>`;
    }

    cell.addEventListener('click', () => {
      const memo = prompt("メモを入力してください:", memoData[date] || "");
      if (memo !== null) {
        memoData[date] = memo;
        localStorage.setItem('memoData', JSON.stringify(memoData));
        cell.innerHTML = `${date}<br><small>${memo}</small>`;
      }
    });
  });
});

