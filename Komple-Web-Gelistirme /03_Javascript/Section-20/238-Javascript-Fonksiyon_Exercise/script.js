// Uygulama:Fonksiyonlar

// 1- Kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonksiyonu yapınız.
function kelimeYazdir(kelime, adet) {
  for (let i = 0; i < adet; i++) {
    console.log(kelime);
  }
}

kelimeYazdir("merhaba", 3);
console.log("************************");

// 2- Dikdörtgenin alan ve çevresini hesaplayan fonksiyonu yazınız.
function alanCevreHesapla(kisa, uzun) {
  let alan = kisa * uzun;
  let cevre = (kisa + uzun) * 2;

  return `alan ${alan}, cevre : ${cevre}`;
}

console.log(alanCevreHesapla(3, 5));
console.log("************************");

// 3- Yazı tura uygulamasını fonksiyon kullanarak yapınız.
function yaziTuraAt() {
  let random = Math.random(); //0-1

  if (random < 0.5) {
    console.log("yazi");
  } else {
    console.log("tura");
  }
}

for (let i = 0; i < 10; i++) {
  yaziTuraAt();
}
console.log("*********************");
// 4- Kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyonu yazınız.
function tamBolenleriBul(sayi) {
  let sayilar = [];
  for (let i = 2; i < sayi; i++) {
    if (sayi % i == 0) sayilar.push(i);
  }
  return sayilar;
}
tamBolenleriBul(20); //2,3,4,5,6,7,8,9,10,11,....19 a kadar hepsini boler
console.log(tamBolenleriBul(20));
console.log(tamBolenleriBul(45));

console.log("*******************");
// 5- Değişken s(ayıda parametre alan toplam isminde bir fonksiyon tanımlayınız.
function toplam() {
  //   console.log(arguments);
  //   return sayi1 + sayi2;
  let sonuc = 0;
  for (let i = 0; i < arguments.length; i++) {
    sonuc += arguments[i];
  }
  return sonuc;
}

let sonuc;
sonuc = toplam(10, 20);
sonuc = toplam(10, 20, 30);
// sonuc = toplam(10, 20, 30, 40);
console.log(sonuc);
