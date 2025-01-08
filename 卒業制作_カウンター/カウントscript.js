const mozi1 = document.querySelector("name1");

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
    const storednum1 = localStorage.getItem('mozi1');

    const storedCount1 = localStorage.getItem('count1');
    const storedCount2 = localStorage.getItem('count2');
    const storedCount3 = localStorage.getItem('count3');
    const storedCount4 = localStorage.getItem('count4');
    count1 = storedCount1 ? JSON.parse(storedCount1) : 0;
    count2 = storedCount2 ? JSON.parse(storedCount2) : 0;
    count3 = storedCount3 ? JSON.parse(storedCount3) : 0;
    count4 = storedCount4 ? JSON.parse(storedCount4) : 0;
    number1.innerHTML = count1;
    number2.innerHTML = count2;
    number3.innerHTML = count3;
    number4.innerHTML = count4;
});

plusButton1.addEventListener("click", () => {
  if(count1 < 5) {
    count1++;
    number1.innerHTML = count1;
    if(count1 == 4) {
      alert(mozi1 + 'の授業の欠席が多いです');
    }
    localStorage.setItem('count1', JSON.stringify(count1));
    localStorage.setItem('mozi1', mozi1);
  }
});

plusButton2.addEventListener("click", () => {
  if(count2 < 5) {
    count2++;
    number2.innerHTML = count2;
    localStorage.setItem('count2', JSON.stringify(count2));
  }
});

plusButton3.addEventListener("click", () => {
  if(count3 < 5) {
    count3++;
    number3.innerHTML = count3;
    localStorage.setItem('count3', JSON.stringify(count3));
  }
});

plusButton4.addEventListener("click", () => {
  if(count4 < 5) {
    count4++;
    number4.innerHTML = count4;
    localStorage.setItem('count4', JSON.stringify(count4));
  }
});

minusButton1.addEventListener("click", () => {
  if (count1 > 0) {
    count1--;
    number1.innerHTML = count1;
    localStorage.setItem('count1', JSON.stringify(count1));
  }
});

minusButton2.addEventListener("click", () => {
  if (count2 > 0) {
    count2--;
    number2.innerHTML = count2;
    localStorage.setItem('count2', JSON.stringify(count2));
  }
});

minusButton3.addEventListener("click", () => {
  if (count3 > 0) {
    count3--;
    number3.innerHTML = count3;
    localStorage.setItem('count3', JSON.stringify(count3));
  }
});

minusButton4.addEventListener("click", () => {
  if (count4 > 0) {
    count4--;
    number4.innerHTML = count4;
    localStorage.setItem('count4', JSON.stringify(count4));
  }
});