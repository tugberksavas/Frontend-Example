const input = document.getElementById("text");

function onKeyPress() {
  console.log("keypress");
}
// input.addEventListener("keypress", onKeyPress);

function onKeyUp() {
  console.log("onKeyUp");
}
// input.addEventListener("keyup", onKeyUp);

function onKeyDown(e) {
  //   console.log("onKeyDown");
  //   console.log(e.key);
  //   document.querySelector("h2").innerText += e.key;
  //   if (e.key === "Enter") {
  //     alert("enter tiklandi");
  //   }
  //   if (e.keyCode == 13) {
  //     alert("enter klavye kodu tıklandi");
  //   }
  //   if (e.repeat) {
  //     alert(`${e.key} tusuna basili kaldi.`);
  //   }

  if (e.metaKey && e.key.toLowerCase() === "a") {
    alert("Command + A tuşuna basıldı");
  }
}

input.addEventListener("keydown", onKeyDown);
