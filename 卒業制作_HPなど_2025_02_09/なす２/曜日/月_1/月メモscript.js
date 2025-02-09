window.addEventListener("load", () => {
  const storedMemo = localStorage.getItem('memo');
  if (storedMemo) {
      document.getElementById('memoInput').value = storedMemo;
      displaySavedMemo(storedMemo);
  }
});

document.getElementById('saveButton').addEventListener('click', function() {
  var memo = document.getElementById('memoInput').value;
  localStorage.setItem('memo', memo);
  displaySavedMemo(); 
});

document.getElementById('clearButton').addEventListener('click', function() {
  var memo = document.getElementById('memoInput').value;
  localStorage.removeItem('memo');
  displaySavedMemo();
  memo.value = "";
});