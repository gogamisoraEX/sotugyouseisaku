const mozi7 = document.querySelector("#name1");
const mozi8 = document.querySelector("#name2");
const mozi9 = document.querySelector("#name3");
const mozi10 = document.querySelector("#name4");
const mozi11 = document.querySelector("#name5");
const mozi12 = document.querySelector("#name6");
const number7 = document.querySelector(".class7");
const number8 = document.querySelector(".class8");
const number9 = document.querySelector(".class9");
const number10 = document.querySelector(".class10");
const number11 = document.querySelector(".class11");
const number12 = document.querySelector(".class12");
const plusButton1 = document.querySelector("#plus1");
const plusButton2 = document.querySelector("#plus2");
const plusButton3 = document.querySelector("#plus3");
const plusButton4 = document.querySelector("#plus4");
const plusButton5 = document.querySelector("#plus5");
const plusButton6 = document.querySelector("#plus6");
const minusButton1 = document.querySelector("#minus1");
const minusButton2 = document.querySelector("#minus2");
const minusButton3 = document.querySelector("#minus3");
const minusButton4 = document.querySelector("#minus4");
const minusButton5 = document.querySelector("#minus5");
const minusButton6 = document.querySelector("#minus6");
let count7 = 0;
let count8 = 0;
let count9 = 0;
let count10 = 0;
let count11 = 0;
let count12 = 0;

window.addEventListener("load", () => {
  const storedCount7 = localStorage.getItem('count7');
  const storedCount8 = localStorage.getItem('count8');
  const storedCount9 = localStorage.getItem('count9');
  const storedCount10 = localStorage.getItem('count10');
  const storedCount11 = localStorage.getItem('count11');
  const storedCount12 = localStorage.getItem('count12');
  const storedName7 = localStorage.getItem('name7');
  const storedName8 = localStorage.getItem('name8');
  const storedName9 = localStorage.getItem('name9');
  const storedName10 = localStorage.getItem('name10');
  const storedName11 = localStorage.getItem('name11');
  const storedName12 = localStorage.getItem('name12');
  count7 = storedCount7 ? JSON.parse(storedCount7) : 0;
  count8 = storedCount8 ? JSON.parse(storedCount8) : 0;
  count9 = storedCount9 ? JSON.parse(storedCount9) : 0;
  count10 = storedCount10 ? JSON.parse(storedCount10) : 0;
  count11 = storedCount11 ? JSON.parse(storedCount11) : 0;
  count12 = storedCount12 ? JSON.parse(storedCount12) : 0;

  number7.innerHTML = count7;
  number8.innerHTML = count8;
  number9.innerHTML = count9;
  number10.innerHTML = count10;
  number11.innerHTML = count11;
  number12.innerHTML = count12;

  mozi7.value = storedName7;
  mozi8.value = storedName8;
  mozi9.value = storedName9;
  mozi10.value = storedName10;
  mozi11.value = storedName11;
  mozi12.value = storedName12;
});

mozi7.addEventListener('input', () => {
  localStorage.setItem('name7', mozi7.value);
});
mozi8.addEventListener('input', () => {
  localStorage.setItem('name8', mozi8.value);
});
mozi9.addEventListener('input', () => {
  localStorage.setItem('name9', mozi9.value);
});
mozi10.addEventListener('input', () => {
  localStorage.setItem('name10', mozi10.value);
});
mozi11.addEventListener('input', () => {
  localStorage.setItem('name11', mozi11.value);
});
mozi12.addEventListener('input', () => {
  localStorage.setItem('name12', mozi12.value);
});

plusButton1.addEventListener("click", () => {
  if(count7 < 5) {
    count7++;
    number7.innerHTML = count7;
    if(count7 == 4 && mozi7.value != "") {
      alert(mozi7.value + "の欠席数が多いです");
    }
    localStorage.setItem('count7', JSON.stringify(count7));
    localStorage.setItem('mozi7', mozi7.value);
  }
});

plusButton2.addEventListener("click", () => {
  if(count8 < 5) {
    count8++;
    number8.innerHTML = count8;
    if(count8 == 4 && mozi8.value != "") {
      alert(mozi8.value + "の欠席数が多いです");
    }
    localStorage.setItem('count8', JSON.stringify(count8));
    localStorage.setItem('mozi8', mozi8.value);
  }
});

plusButton3.addEventListener("click", () => {
  if(count9 < 5) {
    count9++;
    number9.innerHTML = count9;
    if(count9 == 4 && mozi9.value != "") {
      alert(mozi9.value + "の欠席数が多いです");
    }
    localStorage.setItem('count9', JSON.stringify(count9));
    localStorage.setItem('mozi9', mozi9.value);
  }
});

plusButton4.addEventListener("click", () => {
  if(count10 < 5) {
    count10++;
    number10.innerHTML = count10;
    if(count10 == 4 && mozi10.value != "") {
      alert(mozi10.value + "の欠席数が多いです");
    }
    localStorage.setItem('count10', JSON.stringify(count10));
    localStorage.setItem('mozi10', mozi10.value);
  }
});

plusButton5.addEventListener("click", () => {
  if(count11 < 5) {
    count11++;
    number11.innerHTML = count11;
    if(count11 == 4 && mozi11.value != "") {
      alert(mozi11.value + "の欠席数が多いです");
    }
    localStorage.setItem('count11', JSON.stringify(count11));
    localStorage.setItem('mozi11', mozi11.value);
  }
});

plusButton6.addEventListener("click", () => {
  if(count12 < 5) {
    count12++;
    number12.innerHTML = count12;
    if(count12 == 4 && mozi12.value != "") {
      alert(mozi12.value + "の欠席数が多いです");
    }
    localStorage.setItem('count12', JSON.stringify(count12));
    localStorage.setItem('mozi12', mozi12.value);
  }
});

minusButton1.addEventListener("click", () => {
  if (count7 > 0) {
    count7--;
    number7.innerHTML = count7;
    localStorage.setItem('count7', JSON.stringify(count7));
    localStorage.setItem('mozi7', mozi7.value);
  }
});

minusButton2.addEventListener("click", () => {
  if (count8 > 0) {
    count8--;
    number8.innerHTML = count8;
    localStorage.setItem('count8', JSON.stringify(count8));
    localStorage.setItem('mozi8', mozi8.value);
  }
});

minusButton3.addEventListener("click", () => {
  if (count9 > 0) {
    count9--;
    number9.innerHTML = count9;
    localStorage.setItem('count9', JSON.stringify(count9));
    localStorage.setItem('mozi9', mozi9.value);
  }
});

minusButton4.addEventListener("click", () => {
  if (count10 > 0) {
    count10--;
    number10.innerHTML = count10;
    localStorage.setItem('count10', JSON.stringify(count10));
    localStorage.setItem('mozi10', mozi10.value);
  }
});

minusButton5.addEventListener("click", () => {
  if (count11 > 0) {
    count11--;
    number11.innerHTML = count11;
    localStorage.setItem('count11', JSON.stringify(count11));
    localStorage.setItem('mozi11', mozi11.value);
  }
});

minusButton6.addEventListener("click", () => {
  if (count12 > 0) {
    count12--;
    number12.innerHTML = count12;
    localStorage.setItem('count12', JSON.stringify(count12));
    localStorage.setItem('mozi12', mozi12.value);
  }
});

window.addEventListener("load", () => {
  const storedMemo1 = localStorage.getItem('memo1');
      document.getElementById('memoInput1').value = storedMemo1;
});

document.getElementById('saveButton').addEventListener('click', function() {
  let getumemo1 = document.getElementById('memoInput1').value;
  localStorage.setItem('memo1', getumemo1);
});

document.getElementById('clearButton').addEventListener('click', function() {
  localStorage.removeItem('memo1');
  memoInput1.value = "";
});
