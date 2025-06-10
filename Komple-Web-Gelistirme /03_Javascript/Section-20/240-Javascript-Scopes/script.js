// Scopes

//global scope
let isim = "Ahmet";
const tc = "12345678901";

function yazdir() {
  //function scope
  let isim = "Can";
  let yas = 19;
  console.log(isim);
  console.log(yas);
}

if (true) {
  let isim = "canan"; // let ile block scope olusturmus oldum.
  let cinsiyet = "kadın";
  console.log(isim);
  console.log(cinsiyet);
}

// yazdir();
console.log(isim);
console.log(tc);
