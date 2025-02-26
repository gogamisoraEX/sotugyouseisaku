const mozi19 = document.querySelector("#name1");
const mozi20 = document.querySelector("#name2");
const mozi21 = document.querySelector("#name3");
const mozi22 = document.querySelector("#name4");
const mozi23 = document.querySelector("#name5");
const mozi24 = document.querySelector("#name6");
const number19 = document.querySelector(".class19");
const number20 = document.querySelector(".class20");
const number21 = document.querySelector(".class21");
const number22 = document.querySelector(".class22");
const number23 = document.querySelector(".class23");
const number24 = document.querySelector(".class24");
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
let count19 = 0;
let count20 = 0;
let count21 = 0;
let count22 = 0;
let count23 = 0;
let count24 = 0;

window.addEventListener("load", () => {
  const storedCount19 = localStorage.getItem('count19');
  const storedCount20 = localStorage.getItem('count20');
  const storedCount21 = localStorage.getItem('count21');
  const storedCount22 = localStorage.getItem('count22');
  const storedCount23 = localStorage.getItem('count23');
  const storedCount24 = localStorage.getItem('count24');
  const storedName19 = localStorage.getItem('name19');
  const storedName20 = localStorage.getItem('name20');
  const storedName21 = localStorage.getItem('name21');
  const storedName22 = localStorage.getItem('name22');
  const storedName23 = localStorage.getItem('name23');
  const storedName24 = localStorage.getItem('name24');
  count19 = storedCount19 ? JSON.parse(storedCount19) : 0;
  count20 = storedCount20 ? JSON.parse(storedCount20) : 0;
  count21 = storedCount21 ? JSON.parse(storedCount21) : 0;
  count22 = storedCount22 ? JSON.parse(storedCount22) : 0;
  count23 = storedCount23 ? JSON.parse(storedCount23) : 0;
  count24 = storedCount24 ? JSON.parse(storedCount24) : 0;

  number19.innerHTML = count19;
  number20.innerHTML = count20;
  number21.innerHTML = count21;
  number22.innerHTML = count22;
  number23.innerHTML = count23;
  number24.innerHTML = count24;

  mozi19.value = storedName19;
  mozi20.value = storedName20;
  mozi21.value = storedName21;
  mozi22.value = storedName22;
  mozi23.value = storedName23;
  mozi24.value = storedName24;
});

mozi19.addEventListener('input', () => {
  localStorage.setItem('name19', mozi19.value);
});
mozi20.addEventListener('input', () => {
  localStorage.setItem('name20', mozi20.value);
});
mozi21.addEventListener('input', () => {
  localStorage.setItem('name21', mozi21.value);
});
mozi22.addEventListener('input', () => {
  localStorage.setItem('name22', mozi22.value);
});
mozi23.addEventListener('input', () => {
  localStorage.setItem('name23', mozi23.value);
});
mozi24.addEventListener('input', () => {
  localStorage.setItem('name24', mozi24.value);
});

plusButton1.addEventListener("click", () => {
  if(count19 < 5) {
    count19++;
    number19.innerHTML = count19;
    if(count19 == 4 && mozi19.value != "") {
      alert(mozi19.value + "の欠席数が多いです");
    }
    localStorage.setItem('count19', JSON.stringify(count19));
    localStorage.setItem('mozi19', mozi19.value);
  }
});

plusButton2.addEventListener("click", () => {
  if(count20 < 5) {
    count20++;
    number20.innerHTML = count20;
    if(count20 == 4 && mozi20.value != "") {
      alert(mozi20.value + "の欠席数が多いです");
    }
    localStorage.setItem('count20', JSON.stringify(count20));
    localStorage.setItem('mozi20', mozi20.value);
  }
});

plusButton3.addEventListener("click", () => {
  if(count21 < 5) {
    count21++;
    number21.innerHTML = count21;
    if(count21 == 4 && mozi21.value != "") {
      alert(mozi21.value + "の欠席数が多いです");
    }
    localStorage.setItem('count21', JSON.stringify(count21));
    localStorage.setItem('mozi21', mozi21.value);
  }
});

plusButton4.addEventListener("click", () => {
  if(count22 < 5) {
    count22++;
    number22.innerHTML = count22;
    if(count22 == 4 && mozi22.value != "") {
      alert(mozi22.value + "の欠席数が多いです");
    }
    localStorage.setItem('count22', JSON.stringify(count22));
    localStorage.setItem('mozi22', mozi22.value);
  }
});

plusButton5.addEventListener("click", () => {
  if(count23 < 5) {
    count23++;
    number23.innerHTML = count23;
    if(count23 == 4 && mozi23.value != "") {
      alert(mozi23.value + "の欠席数が多いです");
    }
    localStorage.setItem('count23', JSON.stringify(count23));
    localStorage.setItem('mozi23', mozi23.value);
  }
});

plusButton6.addEventListener("click", () => {
  if(count24 < 5) {
    count24++;
    number24.innerHTML = count24;
    if(count24 == 4 && mozi24.value != "") {
      alert(mozi24.value + "の欠席数が多いです");
    }
    localStorage.setItem('count24', JSON.stringify(count24));
    localStorage.setItem('mozi24', mozi24.value);
  }
});

minusButton1.addEventListener("click", () => {
  if (count19 > 0) {
    count19--;
    number19.innerHTML = count19;
    localStorage.setItem('count19', JSON.stringify(count19));
    localStorage.setItem('mozi19', mozi19.value);
  }
});

minusButton2.addEventListener("click", () => {
  if (count20 > 0) {
    count20--;
    number20.innerHTML = count20;
    localStorage.setItem('count20', JSON.stringify(count20));
    localStorage.setItem('mozi20', mozi20.value);
  }
});

minusButton3.addEventListener("click", () => {
  if (count21 > 0) {
    count21--;
    number21.innerHTML = count21;
    localStorage.setItem('count21', JSON.stringify(count21));
    localStorage.setItem('mozi21', mozi21.value);
  }
});

minusButton4.addEventListener("click", () => {
  if (count22 > 0) {
    count22--;
    number22.innerHTML = count22;
    localStorage.setItem('count22', JSON.stringify(count22));
    localStorage.setItem('mozi22', mozi22.value);
  }
});

minusButton5.addEventListener("click", () => {
  if (count23 > 0) {
    count23--;
    number23.innerHTML = count23;
    localStorage.setItem('count23', JSON.stringify(count23));
    localStorage.setItem('mozi23', mozi23.value);
  }
});

minusButton6.addEventListener("click", () => {
  if (count24 > 0) {
    count24--;
    number24.innerHTML = count24;
    localStorage.setItem('count24', JSON.stringify(count24));
    localStorage.setItem('mozi24', mozi24.value);
  }
});

window.addEventListener("load", () => {
  const storedMemo3 = localStorage.getItem('memo3');
      document.getElementById('memoInput3').value = storedMemo3;
});

document.getElementById('saveButton').addEventListener('click', function() {
  let memo3 = document.getElementById('memoInput3').value;
  localStorage.setItem('memo3', memo3);
});

document.getElementById('clearButton').addEventListener('click', function() {
  localStorage.removeItem('memo3');
  memoInput3.value = "";
});
