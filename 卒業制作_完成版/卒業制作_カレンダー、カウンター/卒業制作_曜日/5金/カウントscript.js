
const mozi25 = document.querySelector("#name1");
const mozi26 = document.querySelector("#name2");
const mozi27 = document.querySelector("#name3");
const mozi28 = document.querySelector("#name4");
const mozi29 = document.querySelector("#name5");
const mozi30 = document.querySelector("#name6");
const number25 = document.querySelector(".class25");
const number26 = document.querySelector(".class26");
const number27 = document.querySelector(".class27");
const number28 = document.querySelector(".class28");
const number29 = document.querySelector(".class29");
const number30 = document.querySelector(".class30");
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
let count25 = 0;
let count26 = 0;
let count27 = 0;
let count28 = 0;
let count29 = 0;
let count30 = 0;

window.addEventListener("load", () => {
  const storedCount25 = localStorage.getItem('count25');
  const storedCount26 = localStorage.getItem('count26');
  const storedCount27 = localStorage.getItem('count27');
  const storedCount28 = localStorage.getItem('count28');
  const storedCount29 = localStorage.getItem('count29');
  const storedCount30 = localStorage.getItem('count30');
  const storedName25 = localStorage.getItem('name25');
  const storedName26 = localStorage.getItem('name26');
  const storedName27 = localStorage.getItem('name27');
  const storedName28 = localStorage.getItem('name28');
  const storedName29 = localStorage.getItem('name29');
  const storedName30 = localStorage.getItem('name30');
  count25 = storedCount25 ? JSON.parse(storedCount25) : 0;
  count26 = storedCount26 ? JSON.parse(storedCount26) : 0;
  count27 = storedCount27 ? JSON.parse(storedCount27) : 0;
  count28 = storedCount28 ? JSON.parse(storedCount28) : 0;
  count29 = storedCount29 ? JSON.parse(storedCount29) : 0;
  count30 = storedCount30 ? JSON.parse(storedCount30) : 0;

  number25.innerHTML = count25;
  number26.innerHTML = count26;
  number27.innerHTML = count27;
  number28.innerHTML = count28;
  number29.innerHTML = count29;
  number30.innerHTML = count30;

  mozi25.value = storedName25;
  mozi26.value = storedName26;
  mozi27.value = storedName27;
  mozi28.value = storedName28;
  mozi29.value = storedName29;
  mozi30.value = storedName30;
});

mozi25.addEventListener('input', () => {
  localStorage.setItem('name25', mozi25.value);
});
mozi26.addEventListener('input', () => {
  localStorage.setItem('name26', mozi26.value);
});
mozi27.addEventListener('input', () => {
  localStorage.setItem('name27', mozi27.value);
});
mozi28.addEventListener('input', () => {
  localStorage.setItem('name28', mozi28.value);
});
mozi29.addEventListener('input', () => {
  localStorage.setItem('name29', mozi29.value);
});
mozi30.addEventListener('input', () => {
  localStorage.setItem('name30', mozi30.value);
});

plusButton1.addEventListener("click", () => {
  if(count25 < 5) {
    count25++;
    number25.innerHTML = count25;
    if(count25 == 4 && mozi25.value != "") {
      alert(mozi25.value + "の欠席数が多いです");
    }
    localStorage.setItem('count25', JSON.stringify(count25));
    localStorage.setItem('mozi25', mozi25.value);
  }
});

plusButton2.addEventListener("click", () => {
  if(count26 < 5) {
    count26++;
    number26.innerHTML = count26;
    if(count26 == 4 && mozi26.value != "") {
      alert(mozi26.value + "の欠席数が多いです");
    }
    localStorage.setItem('count26', JSON.stringify(count26));
    localStorage.setItem('mozi26', mozi26.value);
  }
});

plusButton3.addEventListener("click", () => {
  if(count27 < 5) {
    count27++;
    number27.innerHTML = count27;
    if(count27 == 4 && mozi27.value != "") {
      alert(mozi27.value + "の欠席数が多いです");
    }
    localStorage.setItem('count27', JSON.stringify(count27));
    localStorage.setItem('mozi27', mozi27.value);
  }
});

plusButton4.addEventListener("click", () => {
  if(count28 < 5) {
    count28++;
    number28.innerHTML = count28;
    if(count28 == 4 && mozi28.value != "") {
      alert(mozi28.value + "の欠席数が多いです");
    }
    localStorage.setItem('count28', JSON.stringify(count28));
    localStorage.setItem('mozi28', mozi28.value);
  }
});

plusButton5.addEventListener("click", () => {
  if(count29 < 5) {
    count29++;
    number29.innerHTML = count29;
    if(count29 == 4 && mozi29.value != "") {
      alert(mozi29.value + "の欠席数が多いです");
    }
    localStorage.setItem('count29', JSON.stringify(count29));
    localStorage.setItem('mozi29', mozi29.value);
  }
});

plusButton6.addEventListener("click", () => {
  if(count30 < 5) {
    count30++;
    number30.innerHTML = count30;
    if(count30 == 4 && mozi30.value != "") {
      alert(mozi30.value + "の欠席数が多いです");
    }
    localStorage.setItem('count30', JSON.stringify(count30));
    localStorage.setItem('mozi30', mozi30.value);
  }
});

minusButton1.addEventListener("click", () => {
  if (count25 > 0) {
    count25--;
    number25.innerHTML = count25;
    localStorage.setItem('count25', JSON.stringify(count25));
    localStorage.setItem('mozi25', mozi25.value);
  }
});

minusButton2.addEventListener("click", () => {
  if (count26 > 0) {
    count26--;
    number26.innerHTML = count26;
    localStorage.setItem('count26', JSON.stringify(count26));
    localStorage.setItem('mozi26', mozi26.value);
  }
});

minusButton3.addEventListener("click", () => {
  if (count27 > 0) {
    count27--;
    number27.innerHTML = count27;
    localStorage.setItem('count27', JSON.stringify(count27));
    localStorage.setItem('mozi27', mozi27.value);
  }
});

minusButton4.addEventListener("click", () => {
  if (count28 > 0) {
    count28--;
    number28.innerHTML = count28;
    localStorage.setItem('count28', JSON.stringify(count28));
    localStorage.setItem('mozi28', mozi28.value);
  }
});

minusButton5.addEventListener("click", () => {
  if (count29 > 0) {
    count29--;
    number29.innerHTML = count29;
    localStorage.setItem('count29', JSON.stringify(count29));
    localStorage.setItem('mozi29', mozi29.value);
  }
});

minusButton6.addEventListener("click", () => {
  if (count30 > 0) {
    count30--;
    number30.innerHTML = count30;
    localStorage.setItem('count30', JSON.stringify(count30));
    localStorage.setItem('mozi30', mozi30.value);
  }
});

window.addEventListener("load", () => {
  const storedMemo4 = localStorage.getItem('memo4');
      document.getElementById('memoInput4').value = storedMemo4;
});

document.getElementById('saveButton').addEventListener('click', function() {
  let memo4 = document.getElementById('memoInput4').value;
  localStorage.setItem('memo4', memo4);
});

document.getElementById('clearButton').addEventListener('click', function() {
  localStorage.removeItem('memo4');
  memoInput4.value = "";
});
