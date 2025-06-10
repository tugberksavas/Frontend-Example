// uygulama : donguler

let sayilar = [3, 5, 7, 8, 12, 23, 45, 66];

// 1- sayilar dizisindeki her bir sayinin karesini yazdirin
for (let i = 0; i < sayilar.length; i++) {
  console.log(sayilar[i] * sayilar[i]);
}
console.log("************************");
// 2- sayilar listesindeki sayilar 5'in katidir
for (let i = 0; i < sayilar.length; i++) {
  if (sayilar[i] % 5 == 0) {
    console.log(sayilar[i]);
  }
}

// let i = 0;
// while (i < sayilar.length) {
//   if (sayilar[i] % 5 == 0) {
//     console.log(sayilar[i]);
//   }
//   i++;
// }
console.log("********************");
// 3- 50-100 arasindaki sayilari azalan seklinde yazdirin.
for (let i = 100; i >= 50; i--) {
  console.log(i);
}
console.log("********************");
let urunler = [
  "iphone 16",
  "samsung s25",
  "iphone 17",
  "samsung s26",
  "samsung s23",
];

// 4- urunler listesindeki tum urunleri buyuk harfe cevirin
for (let i = 0; i < urunler.length; i++) {
  console.log(urunler[i].toUpperCase());
}
console.log("*******************");

// 5- urunler listesinde icinde samsung kelimesi gecen kac kelime vardir
let adet = 0;
for (i = 0; i < urunler.length; i++) {
  if (urunler[i].includes("samsung")) {
    adet++;
    console.log(urunler[i]);
  }
}
console.log(adet + " tane kelime bulundu");

console.log("***************************");

let ogrenciler = [
  { ad: "yigit", soyad: "bilgi", notlar: [60, 70, 80, 90] },
  { ad: "ada", soyad: "bilgi", notlar: [70, 50, 75] },
  { ad: "cinar", soyad: "bilgi", notlar: [70, 70, 80] },
];

// 6- ogrenciler listesindeki her ogrencinin not ortalamasi ve basari durumu yaziniz
for (let i = 0; i < ogrenciler.length; i++) {
  let not_toplam = 0;
  let adet = 0;
  let ortalama = 0;
  let basari = "";
  console.log(ogrenciler[i].notlar);
  for (let x = 0; x < ogrenciler[i].notlar.length; x++) {
    not_toplam += ogrenciler[i].notlar[x];
    adet++;
  }
  ortalama = not_toplam / adet;

  if (ortalama >= 50) {
    basari = "Basarili";
  } else {
    basari = "Basarisiz";
  }

  console.log(
    `${basari} : ${ogrenciler[i].ad} ${ogrenciler[i].soyad} isimli ogrencinin not ortalamasi ${ortalama}.`
  );
}
console.log("******************");
// 7- tum ogrencilerin not ortalamasi nedir
let toplam_sinif = 0;

for (let i = 0; i < ogrenciler.length; i++) {
  let not_toplam = 0;
  let adet = 0;
  let ortalama = 0;
  let basari = "";
  console.log(ogrenciler[i].notlar);
  for (let x = 0; x < ogrenciler[i].notlar.length; x++) {
    not_toplam += ogrenciler[i].notlar[x];
    adet++;
  }

  ortalama = not_toplam / adet;
  toplam_sinif += ortalama;
}
console.log("sinif ortalamasi : " + toplam_sinif / ogrenciler.length);
