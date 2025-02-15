
const mozi13 = document.querySelector("#name1");
const mozi14 = document.querySelector("#name2");
const mozi15 = document.querySelector("#name3");
const mozi16 = document.querySelector("#name4");
const mozi17 = document.querySelector("#name5");
const mozi18 = document.querySelector("#name6");
const number13 = document.querySelector(".class13");
const number14 = document.querySelector(".class14");
const number15 = document.querySelector(".class15");
const number16 = document.querySelector(".class16");
const number17 = document.querySelector(".class17");
const number18 = document.querySelector(".class18");
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
let count13 = 0;
let count14 = 0;
let count15 = 0;
let count16 = 0;
let count17 = 0;
let count18 = 0;

window.addEventListener("load", () => {
  const storedCount13 = localStorage.getItem('count13');
  const storedCount14 = localStorage.getItem('count14');
  const storedCount15 = localStorage.getItem('count15');
  const storedCount16 = localStorage.getItem('count16');
  const storedCount17 = localStorage.getItem('count17');
  const storedCount18 = localStorage.getItem('count18');
  const storedName13 = localStorage.getItem('name13');
  const storedName14 = localStorage.getItem('name14');
  const storedName15 = localStorage.getItem('name15');
  const storedName16 = localStorage.getItem('name16');
  const storedName17 = localStorage.getItem('name17');
  const storedName18 = localStorage.getItem('name18');
  count13 = storedCount13 ? JSON.parse(storedCount13) : 0;
  count14 = storedCount14 ? JSON.parse(storedCount14) : 0;
  count15 = storedCount15 ? JSON.parse(storedCount15) : 0;
  count16 = storedCount16 ? JSON.parse(storedCount16) : 0;
  count17 = storedCount17 ? JSON.parse(storedCount17) : 0;
  count18 = storedCount18 ? JSON.parse(storedCount18) : 0;

  number13.innerHTML = count13;
  number14.innerHTML = count14;
  number15.innerHTML = count15;
  number16.innerHTML = count16;
  number17.innerHTML = count17;
  number18.innerHTML = count18;

  mozi13.value = storedName13;
  mozi14.value = storedName14;
  mozi15.value = storedName15;
  mozi16.value = storedName16;
  mozi17.value = storedName17;
  mozi18.value = storedName18;
});

mozi13.addEventListener('input', () => {
  localStorage.setItem('name13', mozi13.value);
});
mozi14.addEventListener('input', () => {
  localStorage.setItem('name14', mozi14.value);
});
mozi15.addEventListener('input', () => {
  localStorage.setItem('name15', mozi15.value);
});
mozi16.addEventListener('input', () => {
  localStorage.setItem('name16', mozi16.value);
});
mozi17.addEventListener('input', () => {
  localStorage.setItem('name17', mozi17.value);
});
mozi18.addEventListener('input', () => {
  localStorage.setItem('name18', mozi18.value);
});

plusButton1.addEventListener("click", () => {
  if(count13 < 5) {
    count13++;
    number13.innerHTML = count13;
    if(count13 == 4 && mozi13.value != "") {
      alert(mozi13.value + "の欠席数が多いです");
    }
    localStorage.setItem('count13', JSON.stringify(count13));
    localStorage.setItem('mozi13', mozi13.value);
  }
});

plusButton2.addEventListener("click", () => {
  if(count14 < 5) {
    count14++;
    number14.innerHTML = count14;
    if(count14 == 4 && mozi14.value != "") {
      alert(mozi14.value + "の欠席数が多いです");
    }
    localStorage.setItem('count14', JSON.stringify(count14));
    localStorage.setItem('mozi14', mozi14.value);
  }
});

plusButton3.addEventListener("click", () => {
  if(count15 < 5) {
    count15++;
    number15.innerHTML = count15;
    if(count15 == 4 && mozi15.value != "") {
      alert(mozi15.value + "の欠席数が多いです");
    }
    localStorage.setItem('count15', JSON.stringify(count15));
    localStorage.setItem('mozi15', mozi15.value);
  }
});

plusButton4.addEventListener("click", () => {
  if(count16 < 5) {
    count16++;
    number16.innerHTML = count16;
    if(count16 == 4 && mozi16.value != "") {
      alert(mozi16.value + "の欠席数が多いです");
    }
    localStorage.setItem('count16', JSON.stringify(count16));
    localStorage.setItem('mozi16', mozi16.value);
  }
});

plusButton5.addEventListener("click", () => {
  if(count17 < 5) {
    count17++;
    number17.innerHTML = count17;
    if(count17 == 4 && mozi17.value != "") {
      alert(mozi17.value + "の欠席数が多いです");
    }
    localStorage.setItem('count17', JSON.stringify(count17));
    localStorage.setItem('mozi17', mozi17.value);
  }
});

plusButton6.addEventListener("click", () => {
  if(count18 < 5) {
    count18++;
    number18.innerHTML = count18;
    if(count18 == 4 && mozi18.value != "") {
      alert(mozi18.value + "の欠席数が多いです");
    }
    localStorage.setItem('count18', JSON.stringify(count18));
    localStorage.setItem('mozi18', mozi18.value);
  }
});

minusButton1.addEventListener("click", () => {
  if (count13 > 0) {
    count13--;
    number13.innerHTML = count13;
    localStorage.setItem('count1', JSON.stringify(count13));
    localStorage.setItem('mozi1', mozi13.value);
  }
});

minusButton2.addEventListener("click", () => {
  if (count14 > 0) {
    count14--;
    number14.innerHTML = count14;
    localStorage.setItem('count14', JSON.stringify(count14));
    localStorage.setItem('mozi14', mozi14.value);
  }
});

minusButton3.addEventListener("click", () => {
  if (count15 > 0) {
    count15--;
    number15.innerHTML = count15;
    localStorage.setItem('count15', JSON.stringify(count15));
    localStorage.setItem('mozi15', mozi15.value);
  }
});

minusButton4.addEventListener("click", () => {
  if (count16 > 0) {
    count16--;
    number16.innerHTML = count16;
    localStorage.setItem('count16', JSON.stringify(count16));
    localStorage.setItem('mozi16', mozi16.value);
  }
});

minusButton5.addEventListener("click", () => {
  if (count17 > 0) {
    count17--;
    number17.innerHTML = count17;
    localStorage.setItem('count17', JSON.stringify(count17));
    localStorage.setItem('mozi17', mozi17.value);
  }
});

minusButton6.addEventListener("click", () => {
  if (count18 > 0) {
    count18--;
    number18.innerHTML = count18;
    localStorage.setItem('count18', JSON.stringify(count18));
    localStorage.setItem('mozi18', mozi18.value);
  }
});

window.addEventListener("load", () => {
  const storedMemo2 = localStorage.getItem('getumemo2');
      document.getElementById('memoInput2').value = storedMemo2;
});

document.getElementById('saveButton').addEventListener('click', function() {
  let getumemo2 = document.getElementById('memoInput2').value;
  localStorage.setItem('getumemo2', getumemo2);
});

document.getElementById('clearButton').addEventListener('click', function() {
  localStorage.removeItem('getumemo2');
  memoInput2.value = "";
});
