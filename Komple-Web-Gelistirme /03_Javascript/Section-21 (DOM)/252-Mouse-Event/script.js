const div = document.querySelector("div");
const img = document.querySelector("img");

function onClick() {
  console.log("onclick");
}

function onDblClick() {
  console.log("cift tiklandi");
}

function onContextmenu() {
  console.log("onContextmenu(sag tik yapinca acilan menu)");
}

function onMouseDown() {
  console.log("onMouseDown(sol tik yapinca acilan menu)");
}

function onMouseEnter() {
  console.log("onMouseEnter");
}

function onMouseMove() {
  console.log("onMouseMove");
}

div.addEventListener("click", onClick);
div.addEventListener("dblclick", onDblClick);
div.addEventListener("contextmenu", onContextmenu);
div.addEventListener("mousedown", onMouseDown);
div.addEventListener("mouseenter", onMouseEnter);
div.addEventListener("mousemove", onMouseMove);

function onDrag() {
  console.log("onDrag");
}

function onDragStart() {
  console.log("onDragStart");
}

function onDragEnd() {
  console.log("onDragEnd");
}

img.addEventListener("drag", onDrag);
img.addEventListener("dragstart", onDragStart);
img.addEventListener("dragend", onDragEnd);
