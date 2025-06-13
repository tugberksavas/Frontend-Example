const input = document.getElementById("input");
const checkbox = document.getElementById("checkbox");
const select = document.getElementById("select");
const title = document.getElementById("title");

function onInput(e) {
  //   console.log(e);
  //   console.log(e.target);
  //   console.log(e.target.value);
  //   console.log(e.target.value);
  title.textContent = e.target.value;
}

function onFocus(e) {
  console.log("focus");
  input.style.outlineStyle = "solid";
  input.style.outlineWidth = "1px";
  input.style.outlineColor = "red";
}

function onBlur(e) {
  console.log("blur");
  input.style.outlineStyle = "none";
}

input.addEventListener("input", onInput);
input.addEventListener("focus", onFocus);
input.addEventListener("blur", onBlur);

function onChange(e) {
  console.log(e.target.checked);
}
checkbox.addEventListener("change", onChange);

function onSelected(e) {
  console.log(e.target.value);
}
select.addEventListener("change", onSelected);
