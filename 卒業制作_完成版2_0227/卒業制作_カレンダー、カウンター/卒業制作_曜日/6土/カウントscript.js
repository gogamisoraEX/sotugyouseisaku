
const mozi31 = document.querySelector("#name1");
const mozi32 = document.querySelector("#name2");
const mozi33 = document.querySelector("#name3");
const mozi34 = document.querySelector("#name4");
const mozi35 = document.querySelector("#name5");
const mozi36 = document.querySelector("#name6");
const number31 = document.querySelector(".class31");
const number32 = document.querySelector(".class32");
const number33 = document.querySelector(".class33");
const number34 = document.querySelector(".class34");
const number35 = document.querySelector(".class35");
const number36 = document.querySelector(".class36");
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
let count31 = 0;
let count32 = 0;
let count33 = 0;
let count34 = 0;
let count35 = 0;
let count36 = 0;

window.addEventListener("load", () => {
  const storedCount31 = localStorage.getItem('count31');
  const storedCount32 = localStorage.getItem('count32');
  const storedCount33 = localStorage.getItem('count33');
  const storedCount34 = localStorage.getItem('count34');
  const storedCount35 = localStorage.getItem('count35');
  const storedCount36 = localStorage.getItem('count36');
  const storedName31 = localStorage.getItem('name31');
  const storedName32 = localStorage.getItem('name32');
  const storedName33 = localStorage.getItem('name33');
  const storedName34 = localStorage.getItem('name34');
  const storedName35 = localStorage.getItem('name35');
  const storedName36 = localStorage.getItem('name36');
  count31 = storedCount31 ? JSON.parse(storedCount31) : 0;
  count32 = storedCount32 ? JSON.parse(storedCount32) : 0;
  count33 = storedCount33 ? JSON.parse(storedCount33) : 0;
  count34 = storedCount34 ? JSON.parse(storedCount34) : 0;
  count35 = storedCount35 ? JSON.parse(storedCount35) : 0;
  count36 = storedCount36 ? JSON.parse(storedCount36) : 0;

  number31.innerHTML = count31;
  number32.innerHTML = count32;
  number33.innerHTML = count33;
  number34.innerHTML = count34;
  number35.innerHTML = count35;
  number36.innerHTML = count36;

  mozi31.value = storedName31;
  mozi32.value = storedName32;
  mozi33.value = storedName33;
  mozi34.value = storedName34;
  mozi35.value = storedName35;
  mozi36.value = storedName36;
});

mozi31.addEventListener('input', () => {
  localStorage.setItem('name31', mozi31.value);
});
mozi32.addEventListener('input', () => {
  localStorage.setItem('name32', mozi32.value);
});
mozi33.addEventListener('input', () => {
  localStorage.setItem('name33', mozi33.value);
});
mozi34.addEventListener('input', () => {
  localStorage.setItem('name34', mozi34.value);
});
mozi35.addEventListener('input', () => {
  localStorage.setItem('name35', mozi35.value);
});
mozi36.addEventListener('input', () => {
  localStorage.setItem('name36', mozi36.value);
});

plusButton1.addEventListener("click", () => {
  if(count31 < 5) {
    count31++;
    number31.innerHTML = count31;
    if(count31 == 4 && mozi31.value != "") {
      alert(mozi31.value + "の欠席数が多いです");
    }
    localStorage.setItem('count31', JSON.stringify(count31));
    localStorage.setItem('mozi31', mozi31.value);
  }
});

plusButton2.addEventListener("click", () => {
  if(count32 < 5) {
    count32++;
    number32.innerHTML = count32;
    if(count32 == 4 && mozi32.value != "") {
      alert(mozi32.value + "の欠席数が多いです");
    }
    localStorage.setItem('count32', JSON.stringify(count32));
    localStorage.setItem('mozi32', mozi32.value);
  }
});

plusButton3.addEventListener("click", () => {
  if(count33 < 5) {
    count33++;
    number33.innerHTML = count33;
    if(count33 == 4 && mozi33.value != "") {
      alert(mozi33.value + "の欠席数が多いです");
    }
    localStorage.setItem('count33', JSON.stringify(count33));
    localStorage.setItem('mozi33', mozi33.value);
  }
});

plusButton4.addEventListener("click", () => {
  if(count34 < 5) {
    count34++;
    number34.innerHTML = count34;
    if(count34 == 4 && mozi34.value != "") {
      alert(mozi34.value + "の欠席数が多いです");
    }
    localStorage.setItem('count34', JSON.stringify(count34));
    localStorage.setItem('mozi34', mozi34.value);
  }
});

plusButton5.addEventListener("click", () => {
  if(count35 < 5) {
    count35++;
    number35.innerHTML = count35;
    if(count35 == 4 && mozi35.value != "") {
      alert(mozi35.value + "の欠席数が多いです");
    }
    localStorage.setItem('count35', JSON.stringify(count35));
    localStorage.setItem('mozi35', mozi35.value);
  }
});

plusButton6.addEventListener("click", () => {
  if(count36 < 5) {
    count36++;
    number36.innerHTML = count36;
    if(count36 == 4 && mozi36.value != "") {
      alert(mozi6.value + "の欠席数が多いです");
    }
    localStorage.setItem('count36', JSON.stringify(count36));
    localStorage.setItem('mozi36', mozi36.value);
  }
});

minusButton1.addEventListener("click", () => {
  if (count31 > 0) {
    count31--;
    number31.innerHTML = count31;
    localStorage.setItem('count31', JSON.stringify(count31));
    localStorage.setItem('mozi31', mozi31.value);
  }
});

minusButton2.addEventListener("click", () => {
  if (count32 > 0) {
    count32--;
    number32.innerHTML = count32;
    localStorage.setItem('count32', JSON.stringify(count32));
    localStorage.setItem('mozi32', mozi32.value);
  }
});

minusButton3.addEventListener("click", () => {
  if (count33 > 0) {
    count33--;
    number33.innerHTML = count33;
    localStorage.setItem('count33', JSON.stringify(count33));
    localStorage.setItem('mozi33', mozi33.value);
  }
});

minusButton4.addEventListener("click", () => {
  if (count34 > 0) {
    count34--;
    number34.innerHTML = count34;
    localStorage.setItem('count34', JSON.stringify(count34));
    localStorage.setItem('mozi34', mozi34.value);
  }
});

minusButton5.addEventListener("click", () => {
  if (count35 > 0) {
    count35--;
    number35.innerHTML = count35;
    localStorage.setItem('count35', JSON.stringify(count35));
    localStorage.setItem('mozi35', mozi35.value);
  }
});

minusButton6.addEventListener("click", () => {
  if (count36 > 0) {
    count36--;
    number36.innerHTML = count36;
    localStorage.setItem('count36', JSON.stringify(count36));
    localStorage.setItem('mozi36', mozi36.value);
  }
});

window.addEventListener("load", () => {
  const storedMemo5 = localStorage.getItem('memo5');
      document.getElementById('memoInput5').value = storedMemo5;
});

document.getElementById('saveButton').addEventListener('click', function() {
  let memo5 = document.getElementById('memoInput5').value;
  localStorage.setItem('memo5', memo5);
});

document.getElementById('clearButton').addEventListener('click', function() {
  localStorage.removeItem('memo5');
  memoInput5.value = "";
});
