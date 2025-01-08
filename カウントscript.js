const mozi1 = document.querySelector("#name1");
const mozi2 = document.querySelector("#name2");
const mozi3 = document.querySelector("#name3");
const mozi4 = document.querySelector("#name4");
const number1 = document.querySelector(".i");
const number2 = document.querySelector(".ii");
const number3 = document.querySelector(".iii");
const number4 = document.querySelector(".iiii");
const plusButton1 = document.querySelector("#increment1");
const plusButton2 = document.querySelector("#increment2");
const plusButton3 = document.querySelector("#increment3");
const plusButton4 = document.querySelector("#increment4");
const minusButton1 = document.querySelector("#minus1");
const minusButton2 = document.querySelector("#minus2");
const minusButton3 = document.querySelector("#minus3");
const minusButton4 = document.querySelector("#minus4");
let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;

window.addEventListener("load", () => {
  const storedCount1 = localStorage.getItem('count1');
  const storedCount2 = localStorage.getItem('count2');
  const storedCount3 = localStorage.getItem('count3');
  const storedCount4 = localStorage.getItem('count4');
  const storedName1 = localStorage.getItem('name1');
  const storedName2 = localStorage.getItem('name2');
  const storedName3 = localStorage.getItem('name3');
  const storedName4 = localStorage.getItem('name4');
  count1 = storedCount1 ? JSON.parse(storedCount1) : 0;
  count2 = storedCount2 ? JSON.parse(storedCount2) : 0;
  count3 = storedCount3 ? JSON.parse(storedCount3) : 0;
  count4 = storedCount4 ? JSON.parse(storedCount4) : 0;

  number1.innerHTML = count1;
  number2.innerHTML = count2;
  number3.innerHTML = count3;
  number4.innerHTML = count4;

    mozi1.value = storedName1;
    mozi2.value = storedName2;
    mozi3.value = storedName3;
    mozi4.value = storedName4;
});

mozi1.addEventListener('input', () => {
  localStorage.setItem('name1', mozi1.value);
});
mozi2.addEventListener('input', () => {
  localStorage.setItem('name2', mozi2.value);
});
mozi3.addEventListener('input', () => {
  localStorage.setItem('name3', mozi3.value);
});
mozi4.addEventListener('input', () => {
  localStorage.setItem('name4', mozi4.value);
});

plusButton1.addEventListener("click", () => {
  if(count1 < 5) {
    count1++;
    number1.innerHTML = count1;
    if(count1 == 4) {
      alert(mozi1.value + "の欠席数が多いです");
    }
    localStorage.setItem('count1', JSON.stringify(count1));
    localStorage.setItem('mozi1', mozi1.value);
  }
});

plusButton2.addEventListener("click", () => {
  if(count2 < 5) {
    count2++;
    number2.innerHTML = count2;
    if(count2 == 4) {
      alert(mozi2.value + "の欠席数が多いです");
    }
    localStorage.setItem('count2', JSON.stringify(count2));
    localStorage.setItem('mozi2', mozi2.value);
  }
});

plusButton3.addEventListener("click", () => {
  if(count3 < 5) {
    count3++;
    number3.innerHTML = count3;
    if(count3 == 4) {
      alert(mozi3.value + "の欠席数が多いです");
    }
    localStorage.setItem('count3', JSON.stringify(count3));
    localStorage.setItem('mozi3', mozi3.value);
  }
});

plusButton4.addEventListener("click", () => {
  if(count4 < 5) {
    count4++;
    number4.innerHTML = count4;
    if(count4 == 4) {
      alert(mozi4.value + "の欠席数が多いです");
    }
    localStorage.setItem('count4', JSON.stringify(count4));
    localStorage.setItem('mozi4', mozi4.value);
  }
});

minusButton1.addEventListener("click", () => {
  if (count1 > 0) {
    count1--;
    number1.innerHTML = count1;
    localStorage.setItem('count1', JSON.stringify(count1));
    localStorage.setItem('mozi1', mozi1.value);
  }
});

minusButton2.addEventListener("click", () => {
  if (count2 > 0) {
    count2--;
    number2.innerHTML = count2;
    localStorage.setItem('count2', JSON.stringify(count2));
    localStorage.setItem('mozi2', mozi2.value);
  }
});

minusButton3.addEventListener("click", () => {
  if (count3 > 0) {
    count3--;
    number3.innerHTML = count3;
    localStorage.setItem('count3', JSON.stringify(count3));
    localStorage.setItem('mozi3', mozi3.value);
  }
});

minusButton4.addEventListener("click", () => {
  if (count4 > 0) {
    count4--;
    number4.innerHTML = count4;
    localStorage.setItem('count4', JSON.stringify(count4));
    localStorage.setItem('mozi4', mozi4.value);
  }
});
