let sonuc;

sonuc = document.getElementsByClassName("item");
sonuc = document.getElementsByClassName("item")[0];
sonuc = document.getElementsByClassName("item")[2];

// const items = document.getElementsByClassName("item");

// const grup2 = document.getElementById("group2");
// const items = grup2.getElementsByTagName("li");

// const items = document.querySelectorAll("li");
// const items = document.querySelectorAll(".item");
const items = document.querySelectorAll("#group1 .item");

// for (let i = 0; i < items.length; i++) {
//   console.log(items[i]);
// }

for (let item of items) {
  item.style.color = "red";
  item.style.fontSize = "20px";
  item.innerText = "Eleman";
}

console.log(sonuc);
