const weeks = ['月', '火', '水', '木', '金', '土', '日']
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

let memoData = JSON.parse(localStorage.getItem('memoData')) || {};    // メモ用のローカルストレージデータ

let count1 = JSON.parse(localStorage.getItem('count1')) || 0;
let count2 = JSON.parse(localStorage.getItem('count2')) || 0;
let count3 = JSON.parse(localStorage.getItem('count3')) || 0;
let count4 = JSON.parse(localStorage.getItem('count4')) || 0;
let count5 = JSON.parse(localStorage.getItem('count5')) || 0;
let count6 = JSON.parse(localStorage.getItem('count6')) || 0;
let count7 = JSON.parse(localStorage.getItem('count7')) || 0;
let count8 = JSON.parse(localStorage.getItem('count8')) || 0;
let count9 = JSON.parse(localStorage.getItem('count9')) || 0;
let count10 = JSON.parse(localStorage.getItem('count10')) || 0;
let count11 = JSON.parse(localStorage.getItem('count11')) || 0;
let count12 = JSON.parse(localStorage.getItem('count12')) || 0;
let count13 = JSON.parse(localStorage.getItem('count13')) || 0;
let count14 = JSON.parse(localStorage.getItem('count14')) || 0;
let count15 = JSON.parse(localStorage.getItem('count15')) || 0;
let count16 = JSON.parse(localStorage.getItem('count16')) || 0;
let count17 = JSON.parse(localStorage.getItem('count17')) || 0;
let count18 = JSON.parse(localStorage.getItem('count18')) || 0;
let count19 = JSON.parse(localStorage.getItem('count19')) || 0;
let count20 = JSON.parse(localStorage.getItem('count20')) || 0;
let count21 = JSON.parse(localStorage.getItem('count21')) || 0;
let count22 = JSON.parse(localStorage.getItem('count22')) || 0;
let count23 = JSON.parse(localStorage.getItem('count23')) || 0;
let count24 = JSON.parse(localStorage.getItem('count24')) || 0;
let count25 = JSON.parse(localStorage.getItem('count25')) || 0;
let count26 = JSON.parse(localStorage.getItem('count26')) || 0;
let count27 = JSON.parse(localStorage.getItem('count27')) || 0;
let count28 = JSON.parse(localStorage.getItem('count28')) || 0;
let count29 = JSON.parse(localStorage.getItem('count29')) || 0;
let count30 = JSON.parse(localStorage.getItem('count30')) || 0;
let count31 = JSON.parse(localStorage.getItem('count31')) || 0;
let count32 = JSON.parse(localStorage.getItem('count32')) || 0;
let count33 = JSON.parse(localStorage.getItem('count33')) || 0;
let count34 = JSON.parse(localStorage.getItem('count34')) || 0;
let count35 = JSON.parse(localStorage.getItem('count35')) || 0;
let count36 = JSON.parse(localStorage.getItem('count36')) || 0;
let count37 = JSON.parse(localStorage.getItem('count37')) || 0;
let count38 = JSON.parse(localStorage.getItem('count38')) || 0;
let count39 = JSON.parse(localStorage.getItem('count39')) || 0;
let count40 = JSON.parse(localStorage.getItem('count40')) || 0;
let count41 = JSON.parse(localStorage.getItem('count41')) || 0;
let count42 = JSON.parse(localStorage.getItem('count42')) || 0;

const number1 = [count1, count2, count3, count4, count5, count6];
const number2 = [count7, count8, count9, count10, count11, count12];
const number3 = [count13, count14, count15, count16, count17, count18];
const number4 = [count19, count20, count21, count22, count23, count24];
const number5 = [count25, count26, count27, count28, count29, count30];
const number6 = [count31, count32, count33, count34, count35, count36];
const number7 = [count37, count38, count39, count40, count41, count42];

window.addEventListener("load", () => {
  localStorage.setItem('count1', JSON.stringify(count1));
  localStorage.setItem('count2', JSON.stringify(count2));
  localStorage.setItem('count3', JSON.stringify(count3));
  localStorage.setItem('count4', JSON.stringify(count4));
  localStorage.setItem('count5', JSON.stringify(count5));
  localStorage.setItem('count6', JSON.stringify(count6));
  localStorage.setItem('count7', JSON.stringify(count7));
  localStorage.setItem('count8', JSON.stringify(count8));
  localStorage.setItem('count9', JSON.stringify(count9));
  localStorage.setItem('count10', JSON.stringify(count10));
  localStorage.setItem('count11', JSON.stringify(count11));
  localStorage.setItem('count12', JSON.stringify(count12));
  localStorage.setItem('count13', JSON.stringify(count13));
  localStorage.setItem('count14', JSON.stringify(count14));
  localStorage.setItem('count15', JSON.stringify(count15));
  localStorage.setItem('count16', JSON.stringify(count16));
  localStorage.setItem('count17', JSON.stringify(count17));
  localStorage.setItem('count18', JSON.stringify(count18));
  localStorage.setItem('count19', JSON.stringify(count19));
  localStorage.setItem('count20', JSON.stringify(count20));
  localStorage.setItem('count21', JSON.stringify(count21));
  localStorage.setItem('count22', JSON.stringify(count22));
  localStorage.setItem('count23', JSON.stringify(count23));
  localStorage.setItem('count24', JSON.stringify(count24));
  localStorage.setItem('count25', JSON.stringify(count25));
  localStorage.setItem('count26', JSON.stringify(count26));
  localStorage.setItem('count27', JSON.stringify(count27));
  localStorage.setItem('count28', JSON.stringify(count28));
  localStorage.setItem('count29', JSON.stringify(count29));
  localStorage.setItem('count30', JSON.stringify(count30));
  localStorage.setItem('count31', JSON.stringify(count31));
  localStorage.setItem('count32', JSON.stringify(count32));
  localStorage.setItem('count33', JSON.stringify(count33));
  localStorage.setItem('count34', JSON.stringify(count34));
  localStorage.setItem('count35', JSON.stringify(count35));
  localStorage.setItem('count36', JSON.stringify(count36));
  localStorage.setItem('count37', JSON.stringify(count37));
  localStorage.setItem('count38', JSON.stringify(count38));
  localStorage.setItem('count39', JSON.stringify(count39));
  localStorage.setItem('count40', JSON.stringify(count40));
  localStorage.setItem('count41', JSON.stringify(count41));
  localStorage.setItem('count42', JSON.stringify(count42));
  let storedName1 = localStorage.getItem('name1') || '';
  let storedName2 = localStorage.getItem('name2') || '';
  let storedName3 = localStorage.getItem('name3') || '';
  let storedName4 = localStorage.getItem('name4') || '';
  let storedName5 = localStorage.getItem('name5') || '';
  let storedName6 = localStorage.getItem('name6') || '';
  let storedName7 = localStorage.getItem('name7') || '';
  let storedName8 = localStorage.getItem('name8') || '';
  let storedName9 = localStorage.getItem('name9') || '';
  let storedName10 = localStorage.getItem('name10') || '';
  let storedName11 = localStorage.getItem('name11') || '';
  let storedName12 = localStorage.getItem('name12') || '';
  let storedName13 = localStorage.getItem('name13') || '';
  let storedName14 = localStorage.getItem('name14') || '';
  let storedName15 = localStorage.getItem('name15') || '';
  let storedName16 = localStorage.getItem('name16') || '';
  let storedName17 = localStorage.getItem('name17') || '';
  let storedName18 = localStorage.getItem('name18') || '';
  let storedName19 = localStorage.getItem('name19') || '';
  let storedName20 = localStorage.getItem('name20') || '';
  let storedName21 = localStorage.getItem('name21') || '';
  let storedName22 = localStorage.getItem('name22') || '';
  let storedName23 = localStorage.getItem('name23') || '';
  let storedName24 = localStorage.getItem('name24') || '';
  let storedName25 = localStorage.getItem('name25') || '';
  let storedName26 = localStorage.getItem('name26') || '';
  let storedName27 = localStorage.getItem('name27') || '';
  let storedName28 = localStorage.getItem('name28') || '';
  let storedName29 = localStorage.getItem('name29') || '';
  let storedName30 = localStorage.getItem('name30') || '';
  let storedName31 = localStorage.getItem('name31') || '';
  let storedName32 = localStorage.getItem('name32') || '';
  let storedName33 = localStorage.getItem('name33') || '';
  let storedName34 = localStorage.getItem('name34') || '';
  let storedName35 = localStorage.getItem('name35') || '';
  let storedName36 = localStorage.getItem('name36') || '';
  let storedName37 = localStorage.getItem('name37') || '';
  let storedName38 = localStorage.getItem('name38') || '';
  let storedName39 = localStorage.getItem('name39') || '';
  let storedName40 = localStorage.getItem('name40') || '';
  let storedName41 = localStorage.getItem('name41') || '';
  let storedName42 = localStorage.getItem('name42') || '';

  const mozinumber1 = [storedName1, storedName2, storedName3, storedName4, storedName5, storedName6];
  const mozinumber2 = [storedName7, storedName8, storedName9, storedName10, storedName11, storedName12];
  const mozinumber3 = [storedName13, storedName14, storedName15, storedName16, storedName17, storedName18];
  const mozinumber4 = [storedName19, storedName20, storedName21, storedName22, storedName23, storedName24];
  const mozinumber5 = [storedName25, storedName26, storedName27, storedName28, storedName29, storedName30];
  const mozinumber6 = [storedName31, storedName32, storedName33, storedName34, storedName35, storedName36];
  const mozinumber7 = [storedName37, storedName38, storedName39, storedName40, storedName41, storedName42];

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
      calendarHtml += '<td><p>' + weeksP2[i] + '<br></p></td>'
    }
  }

  for (let w = 0; w < 6; w++) {
    calendarHtml += '<tr>'

    for (let d = 0; d < 7; d++) {
      if (w == 0 && d < startDay) {
          let num = lastMonthendDayCount - startDay + d + 1
          calendarHtml += '<td style = "color: #cccccc"><p>' + num + '</p></td>'
      } else if (dayCount > endDayCount) {
        let num = dayCount - endDayCount
        calendarHtml += '<td style = "color: #cccccc"><p>' + num + '</p></td>';
        dayCount++;
      } else {
          calendarHtml += `<td><p>${dayCount}</p></td>`;
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
      selHtml += '<td><p>' + weeks[i] + '</p></td>'
  }
  
  for (let w = 0; w < 6; w++) {
      selHtml += '<tr>'
  
      for (let d = 0; d < weeks.length + 1; d++) {
        if(d == 0) {
          countzikan++;
          selHtml += '<td><p>時間割' + countzikan + '</p></td>'
        }
        else if(d == 1) {     //月曜日
          if(mozinumber1[w] != "") {
            if(number1[w] >= 4) {
              if(mozinumber1[w] > 2) {
                selHtml += '<td><p>' + `<small>${mozinumber1[w].substring(0,3)}</small>` + "..." + '<br><a style = "color: red;">' + number1[w] + '</a></p></td>'
              }
              else {
                  selHtml += '<td><p>' + `<small>${mozinumber1[w]}</small>` + '<br><a style = "color: red;">' + number1[w] + '</a></p></td>'
              }
            }
            else {
              if(mozinumber1[w] > 2) {
                selHtml += '<td><p>' + `<small>${mozinumber1[w].substring(0,3)}</small>` + "..." + "<br>" + number1[w] + '</p></td>'
              }
              else {
                selHtml += '<td><p>' + `<small>${mozinumber1[w]}</small>` + "<br>" + number1[w] + '</p></td>'
              }
            }
          }
          else {
            selHtml += '<td style = "background-image: linear-gradient(to right top, transparent calc(50% - 0.5px), #cccccc 50%, #cccccc calc(50% + 0.5px), transparent calc(50% + 1px))"></td>'
          }
        }
        else if(d == 2) {     //火曜日
          if(mozinumber2[w] != "") {
            if(number2[w] >= 4) {
              selHtml += '<td><p>' + `<small>${mozinumber2[w].substring(0,3)}</small>` + "..." + '<br><a style = "color: red;">' + number2[w] + '</a></p></td>'
            }
            else {
              selHtml += '<td><p>' + `<small>${mozinumber2[w].substring(0,3)}</small>` + "..." + "<br>" + number2[w] + '</p></td>'
            }
          }
          else {
            selHtml += '<td style = "background-image: linear-gradient(to right top, transparent calc(50% - 0.5px), #cccccc 50%, #cccccc calc(50% + 0.5px), transparent calc(50% + 1px))"></td>'
          }
        }
        else if(d == 3) {     //水曜日
          if(mozinumber3[w] != "") {
            if(number3[w] >= 4) {
              selHtml += '<td><p>' + `<small>${mozinumber3[w].substring(0,3)}</small>` + "..." + '<br><a style = "color: red;">' + number3[w] + '</a></p></td>'
            }
            else {
              selHtml += '<td><p>' + `<small>${mozinumber3[w].substring(0,3)}</small>` + "..." + "<br>" + number3[w] + '</p></td>'
            }
          }
          else {
            selHtml += '<td style = "background-image: linear-gradient(to right top, transparent calc(50% - 0.5px), #cccccc 50%, #cccccc calc(50% + 0.5px), transparent calc(50% + 1px))"></td>'
          }
        }
        else if(d == 4) {     //木曜日
          if(mozinumber4[w] != "") {
            if(number4[w] >= 4) {
              selHtml += '<td><p>' + `<small>${mozinumber4[w].substring(0,3)}</small>` + "..." + '<br><a style = "color: red;">' + number4[w] + '</a></p></td>'
            }
            else {
              selHtml += '<td><p>' + `<small>${mozinumber4[w].substring(0,3)}</small>` + "..." + "<br>" + number4[w] + '</p></td>'
            }
          }
          else {
            selHtml += '<td style = "background-image: linear-gradient(to right top, transparent calc(50% - 0.5px), #cccccc 50%, #cccccc calc(50% + 0.5px), transparent calc(50% + 1px))"></td>'
          }
        }
        else if(d == 5) {     //金曜日
          if(mozinumber5[w] != "") {
            if(number5[w] >= 4) {
              selHtml += '<td><p>' + `<small>${mozinumber5[w].substring(0,3)}</small>` + "..." + '<br><a style = "color: red;">' + number5[w] + '</a></p></td>'
            }
            else {
              selHtml += '<td><p>' + `<small>${mozinumber5[w].substring(0,3)}</small>` + "..." + "<br>" + number5[w] + '</p></td>'
            }
          }
          else {
            selHtml += '<td style = "background-image: linear-gradient(to right top, transparent calc(50% - 0.5px), #cccccc 50%, #cccccc calc(50% + 0.5px), transparent calc(50% + 1px))"></td>'
          }
        }
        else if(d == 6) {     //土曜日
          if(mozinumber6[w] != "") {
            if(number6[w] >= 4) {
              selHtml += '<td><p>' + `<small>${mozinumber6[w].substring(0,3)}</small>` + "..." + '<br><a style = "color: red;">' + number6[w] + '</a></p></td>'
            }
            else {
              selHtml += '<td><p>' + `<small>${mozinumber6[w].substring(0,3)}</small>` + "..." + "<br>" + number6[w] + '</p></td>'
            }
          }
          else {
            selHtml += '<td style = "background-image: linear-gradient(to right top, transparent calc(50% - 0.5px), #cccccc 50%, #cccccc calc(50% + 0.5px), transparent calc(50% + 1px))"></td>'
          }
        }
        else if(d == 7) {     //日曜日
          if(mozinumber7[w] != "") {
            if(number7[w] >= 4) {
              selHtml += '<td><p>' + `<small>${mozinumber7[w].substring(0,3)}</small>` + "..." + '<br><a style = "color: red;">' + number7[w] + '</a></p></td>'
            }
            else {
              selHtml += '<td><p>' + `<small>${mozinumber7[w].substring(0,3)}</small>` + "..." + "<br>" + number7[w] + '</p></td>'
            }
          }
          else {
            selHtml += '<td style = "background-image: linear-gradient(to right top, transparent calc(50% - 0.5px), #cccccc 50%, #cccccc calc(50% + 0.5px), transparent calc(50% + 1px))"></td>'
          }
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

  /*const cells = document.querySelectorAll('.calendar-cell');
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
  });*/
});

