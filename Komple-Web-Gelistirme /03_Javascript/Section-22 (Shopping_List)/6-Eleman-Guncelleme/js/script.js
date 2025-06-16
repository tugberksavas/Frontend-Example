const shoppingList = document.querySelector(".shopping-list");
const shoppingForm = document.querySelector(".shopping-form");

// sayfa ilk acildiginda
document.addEventListener("DOMContentLoaded", function () {
  loadItems();
  shoppingForm.addEventListener("submit", handleFormSubmit);
});

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

function toggleCompleted(e) {
  const li = e.target.parentElement;
  li.toggleAttribute("item-completed", e.target.checked);
  // console.log(e.target.parentElement);
}

function createListItem(item) {
  //checkbox
  const input = document.createElement("input");
  input.type = "checkbox";
  input.classList.add("form-check-input");
  input.checked = item.completed;
  input.addEventListener("change", toggleCompleted);

  //item
  const div = document.createElement("div");
  div.textContent = item.name;
  div.classList.add("item-name");
  div.addEventListener("click", openEditMode);
  div.addEventListener("blur", closeEditMode);
  div.addEventListener("keydown", cancelEnter);

  //delete icon
  const deleteIcon = document.createElement("i");
  deleteIcon.className = "fs-3 bi bi-x text-danger delete-icon";
  deleteIcon.addEventListener("click", removeItem);

  //create li
  const li = document.createElement("li");
  li.className = "border rounded p-2 mb-1";
  li.toggleAttribute("item-completed", item.completed);

  li.appendChild(input);
  li.appendChild(div);
  li.appendChild(deleteIcon);

  return li;
}

function removeItem(e) {
  const li = e.target.parentElement;
  shoppingList.removeChild(li);
  // console.log(e.target.parentElement);
}

function openEditMode(e) {
  const li = e.target.parentElement;
  // console.log(li);
  if (li.hasAttribute("item-completed") == false) {
    e.target.contentEditable = true;
  }
}

function closeEditMode(e) {
  e.target.contentEditable = false;
}

function cancelEnter(e) {
  if (e.key == "Enter") {
    e.preventDefault();
    closeEditMode(e);
  }
}
