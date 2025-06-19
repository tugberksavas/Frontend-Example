const sayilar = [1, 5, 7, 3, 2, 67];
const urunler = [
  { urunAdi: "iphone11", fiyat: 10000 },
  { urunAdi: "iphone12", fiyat: 12000 },
  { urunAdi: "iphone13", fiyat: 15000 },
  { urunAdi: "iphone14", fiyat: 20000 },
];

// const tekSayilar = [];
// for (let sayi of sayilar) {
//   if (sayi % 2 == 1) {
//     // console.log(`Tek Sayı: ${sayi}`);
//     tekSayilar.push(sayi);
//   }
// }

// const tekSayilar = sayilar.filter((sayi) => {
//   return sayi % 2 == 1;
// });
// const tekSayilar = sayilar.filter((sayi) => sayi % 2 == 1);
// const tekSayilar = sayilar.map((sayi) => sayi % 2 == 1);
// const sonuc = urunler.map((urun) => urun.urunAdi);
// const sonuc = urunler
//   .filter((urun) => urun.fiyat >= 15000)
//   .map((urun) => urun.urunAdi);

// const sonuc = urunler.find((urun) => urun.fiyat > 12000);
const sonuc = urunler.findIndex((urun) => urun.fiyat > 18000);

console.log(sonuc);
