// Strings

let ad = "Tugberk";
let soyad = "Savas";
let yas = 1996;
let suankiYasim = 2025 - yas;
let sehir = "Istanbul";

let mesaj =
  "Benim Adim " +
  ad +
  " ve soyadim " +
  soyad +
  ". " +
  sehir +
  "'da yasiyorum. " +
  suankiYasim +
  " yasindayim.";

console.log("adimin 0. index'i" + ad[0]);
console.log("Mesajim : " + mesaj);

//template strings

mesaj = `Benim Adim ${ad} ve soyadim ${soyad}. ${sehir}'da yasiyorum. ${suankiYasim} yasindayim.`;

console.log("backtik mesaj degisti : " + mesaj);
