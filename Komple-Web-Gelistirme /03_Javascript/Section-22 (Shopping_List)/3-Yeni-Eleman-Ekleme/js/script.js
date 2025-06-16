const shoppingList = document.querySelector(".shopping-list");
const shoppingForm = document.querySelector(".shopping-form");

loadItems();
shoppingForm.addEventListener("submit", handleFormSubmit);

function loadItems() {
  const items = [
    { id: 1, name: "Yumurta", completed: false },
    { id: 2, name: "Balik", completed: true },
    { id: 3, name: "Süt", completed: false },
    { id: 4, name: "Zeytin", completed: false },
  ];

  shoppingList.innerHTML = "";

  for (let item of items) {
    const li = createListItem(item);
    shoppingList.appendChild(li);
  }
}

function addItem(input) {
  const id = generateId();
  console.log(id);
  const newItem = createListItem({
    id: generateId(),
    name: input.value,
    completed: false,
  });

  shoppingList.appendChild(newItem);

  input.value = "";
}

function generateId() {
  return Date.now().toString();
}

function handleFormSubmit(e) {
  e.preventDefault();
  console.log("submit");

  const input = document.getElementById("item_name");

  if (input.value.trim().length === 0) {
    alert("yeni deger giriniz.");
    return;
  }

  addItem(input);
}

function createListItem(item) {
  //checkbox
  const input = document.createElement("input");
  input.type = "checkbox";
  input.classList.add("form-check-input");
  input.checked = item.completed;
  //item
  const div = document.createElement("div");
  div.textContent = item.name;
  div.classList.add("item-name");
  //delete icon
  const deleteIcon = document.createElement("i");
  deleteIcon.className = "fs-3 bi bi-x text-danger delete-icon";

  //create li
  const li = document.createElement("li");
  li.className = "border rounded p-3 mb-1";

  li.appendChild(input);
  li.appendChild(div);
  li.appendChild(deleteIcon);

  return li;
}
