function creatListItem(text) {
  const li = document.createElement("li");

  li.className = "item";
  li.id = "item1";
  li.setAttribute("data-id", "5");
  li.innerText = text;

  const ch = document.createElement("input");
  ch.type = "checkbox";
  ch.className = "ch1";

  li.appendChild(ch);

  document.getElementById("myList").appendChild(li);
  console.log(li);
}

// creatListItem("item 4");
// creatListItem("item 5");

function createListItem2(text) {
  const li = document.createElement("li");
  li.className = "item";
  li.innerHTML = `${text} <input type="checkbox">`;

  document.getElementById("myList").appendChild(li);
}
createListItem2("item4");
createListItem2("item5");
