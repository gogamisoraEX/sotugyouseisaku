
const mozi37 = document.querySelector("#name1");
const mozi38 = document.querySelector("#name2");
const mozi39 = document.querySelector("#name3");
const mozi40 = document.querySelector("#name4");
const mozi41 = document.querySelector("#name5");
const mozi42 = document.querySelector("#name6");
const number37 = document.querySelector(".class37");
const number38 = document.querySelector(".class38");
const number39 = document.querySelector(".class39");
const number40 = document.querySelector(".class40");
const number41 = document.querySelector(".class41");
const number42 = document.querySelector(".class42");
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
let count37 = 0;
let count38 = 0;
let count39 = 0;
let count40 = 0;
let count41 = 0;
let count42 = 0;

window.addEventListener("load", () => {
  const storedCount37 = localStorage.getItem('count37');
  const storedCount38 = localStorage.getItem('count38');
  const storedCount39 = localStorage.getItem('count39');
  const storedCount40 = localStorage.getItem('count40');
  const storedCount41 = localStorage.getItem('count41');
  const storedCount42 = localStorage.getItem('count42');
  const storedName37 = localStorage.getItem('name37');
  const storedName38 = localStorage.getItem('name38');
  const storedName39 = localStorage.getItem('name39');
  const storedName40 = localStorage.getItem('name40');
  const storedName41 = localStorage.getItem('name41');
  const storedName42 = localStorage.getItem('name42');
  count37 = storedCount37 ? JSON.parse(storedCount37) : 0;
  count38 = storedCount38 ? JSON.parse(storedCount38) : 0;
  count39 = storedCount39 ? JSON.parse(storedCount39) : 0;
  count40 = storedCount40 ? JSON.parse(storedCount40) : 0;
  count41 = storedCount41 ? JSON.parse(storedCount41) : 0;
  count42 = storedCount42 ? JSON.parse(storedCount42) : 0;

  number37.innerHTML = count37;
  number38.innerHTML = count38;
  number39.innerHTML = count39;
  number40.innerHTML = count40;
  number41.innerHTML = count41;
  number42.innerHTML = count42;

  mozi37.value = storedName37;
  mozi38.value = storedName38;
  mozi39.value = storedName39;
  mozi40.value = storedName40;
  mozi41.value = storedName41;
  mozi42.value = storedName42;
});

mozi37.addEventListener('input', () => {
  localStorage.setItem('name37', mozi37.value);
});
mozi38.addEventListener('input', () => {
  localStorage.setItem('name38', mozi38.value);
});
mozi39.addEventListener('input', () => {
  localStorage.setItem('name39', mozi39.value);
});
mozi40.addEventListener('input', () => {
  localStorage.setItem('name40', mozi40.value);
});
mozi41.addEventListener('input', () => {
  localStorage.setItem('name41', mozi41.value);
});
mozi42.addEventListener('input', () => {
  localStorage.setItem('name42', mozi42.value);
});

plusButton1.addEventListener("click", () => {
  if(count37 < 5) {
    count37++;
    number37.innerHTML = count37;
    if(count37 == 4 && mozi37.value != "") {
      alert(mozi37.value + "の欠席数が多いです");
    }
    localStorage.setItem('count37', JSON.stringify(count37));
    localStorage.setItem('mozi37', mozi37.value);
  }
});

plusButton2.addEventListener("click", () => {
  if(count38 < 5) {
    count38++;
    number38.innerHTML = count38;
    if(count38 == 4 && mozi38.value != "") {
      alert(mozi38.value + "の欠席数が多いです");
    }
    localStorage.setItem('count38', JSON.stringify(count38));
    localStorage.setItem('mozi38', mozi38.value);
  }
});

plusButton3.addEventListener("click", () => {
  if(count39 < 5) {
    count39++;
    number39.innerHTML = count39;
    if(count39 == 4 && mozi39.value != "") {
      alert(mozi39.value + "の欠席数が多いです");
    }
    localStorage.setItem('count39', JSON.stringify(count39));
    localStorage.setItem('mozi39', mozi39.value);
  }
});

plusButton4.addEventListener("click", () => {
  if(count40 < 5) {
    count40++;
    number40.innerHTML = count40;
    if(count40 == 4 && mozi40.value != "") {
      alert(mozi40.value + "の欠席数が多いです");
    }
    localStorage.setItem('count40', JSON.stringify(count40));
    localStorage.setItem('mozi40', mozi40.value);
  }
});

plusButton5.addEventListener("click", () => {
  if(count41 < 5) {
    count41++;
    number41.innerHTML = count41;
    if(count41 == 4 && mozi41.value != "") {
      alert(mozi41.value + "の欠席数が多いです");
    }
    localStorage.setItem('count41', JSON.stringify(count41));
    localStorage.setItem('mozi41', mozi41.value);
  }
});

plusButton6.addEventListener("click", () => {
  if(count42 < 5) {
    count42++;
    number42.innerHTML = count42;
    if(count42 == 4 && mozi42.value != "") {
      alert(mozi42.value + "の欠席数が多いです");
    }
    localStorage.setItem('count42', JSON.stringify(count42));
    localStorage.setItem('mozi42', mozi42.value);
  }
});

minusButton1.addEventListener("click", () => {
  if (count37 > 0) {
    count37--;
    number37.innerHTML = count37;
    localStorage.setItem('count37', JSON.stringify(count37));
    localStorage.setItem('mozi37', mozi37.value);
  }
});

minusButton2.addEventListener("click", () => {
  if (count38 > 0) {
    count38--;
    number38.innerHTML = count38;
    localStorage.setItem('count38', JSON.stringify(count38));
    localStorage.setItem('mozi38', mozi38.value);
  }
});

minusButton3.addEventListener("click", () => {
  if (count39 > 0) {
    count39--;
    number39.innerHTML = count39;
    localStorage.setItem('count39', JSON.stringify(count39));
    localStorage.setItem('mozi39', mozi39.value);
  }
});

minusButton4.addEventListener("click", () => {
  if (count40 > 0) {
    count40--;
    number40.innerHTML = count40;
    localStorage.setItem('count40', JSON.stringify(count40));
    localStorage.setItem('mozi40', mozi40.value);
  }
});

minusButton5.addEventListener("click", () => {
  if (count41 > 0) {
    count41--;
    number41.innerHTML = count41;
    localStorage.setItem('count41', JSON.stringify(count41));
    localStorage.setItem('mozi41', mozi41.value);
  }
});

minusButton6.addEventListener("click", () => {
  if (count42 > 0) {
    count42--;
    number42.innerHTML = count42;
    localStorage.setItem('count42', JSON.stringify(count42));
    localStorage.setItem('mozi42', mozi42.value);
  }
});

window.addEventListener("load", () => {
  const storedMemo6 = localStorage.getItem('memo6');
      document.getElementById('memoInput6').value = storedMemo6;
});

document.getElementById('saveButton').addEventListener('click', function() {
  let memo6 = document.getElementById('memoInput6').value;
  localStorage.setItem('memo6', memo6);
});

document.getElementById('clearButton').addEventListener('click', function() {
  localStorage.removeItem('memo6');
  memoInput6.value = "";
});
