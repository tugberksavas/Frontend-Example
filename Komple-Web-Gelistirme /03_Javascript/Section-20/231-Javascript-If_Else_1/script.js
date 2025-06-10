// If/Else Kosul İfadeleri
console.log("merhaba");

let userName = "tugberksavas";
let password = "123456";
let kosul = userName == "tugberksavas";

if (kosul) {
  if (password == "123456") {
    console.log("uygulamaya giris yapildi.");
  } else {
    console.log("parola hatali");
  }
} else {
  console.log("username hatali.");
}
