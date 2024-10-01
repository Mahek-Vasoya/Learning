var inputEle = document.getElementById("input");
var inputTextEle = document.getElementById("input-text");
var timerId = undefined;
function apiCall() {
  console.log(inputEle.value);
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => console.log(data));
}

function debouce(func, delay) {
  clearTimeout(timerId);
  timerId = setTimeout(func, delay);
}

inputEle.addEventListener("input", () => {
  inputTextEle.innerHTML = inputEle.value;
  debouce(apiCall, 1000);
});
