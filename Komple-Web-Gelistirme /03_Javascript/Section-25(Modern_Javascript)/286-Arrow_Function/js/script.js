//E5
// function selamlama() {
//   console.log("Merhaba Dünya");
// }

let selamlamaES5 = function (isim) {
  console.log("merhaba" + isim);
};
selamlamaES5(" ali");

//E6 - Arrow Function
// const selamlamaES6 = () => console.log("Merhaba Dünya");
const selamlamaES6 = (isim) => {
  console.log("Merhaba Dünya" + isim);
  console.log("Merhaba JavaScript");
  console.log("Merhaba Arrow Function");
};

selamlamaES6(" ayse");
console.log("*****************");
//E5
let toplamES5 = function (a, b) {
  return a + b;
};

let sonuc = toplamES5(10, 20);
console.log(sonuc);

//E6 - Arrow Function
// const toplamES6 = (a, b) => a + b;
const toplamES6 = (a, b) => {
  return a + b;
};
sonuc = toplamES6(20, 50);
console.log(sonuc);
