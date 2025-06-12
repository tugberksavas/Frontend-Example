function replaceItem1() {
  const firstItem = document.querySelector("li:first-child");

  const li = document.createElement("li");
  li.textContent = "updated Item";

  firstItem.replaceWith(li);
}
replaceItem1();

function replaceItem2() {
  const secondItem = document.querySelector("li:nth-child(2)");
  secondItem.outerHTML = "<li>updated item 2</li>";
}
replaceItem2();

function replaceAllItems() {
  const items = document.querySelectorAll("li");
  for (let i = 0; i < items.length; i++) {
    // items[i].outerHTML = "<li>Replace All</li>";
    items[i].innerHTML = "Replace All";

    if (i == 1) {
      items[i].innerHTML = "second item";
    } else {
      items[i].innerHTML = "replace all";
    }
  }
}
replaceAllItems();
